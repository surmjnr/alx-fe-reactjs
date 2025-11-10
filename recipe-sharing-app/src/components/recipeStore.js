import { create } from 'zustand';

const filterRecipes = (recipes, searchTerm) => {
  if (!searchTerm.trim()) {
    return recipes;
  }
  const lowerSearchTerm = searchTerm.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(lowerSearchTerm) ||
    (recipe.description && recipe.description.toLowerCase().includes(lowerSearchTerm))
  );
};

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  // Favorites management
  favorites: [],
  addFavorite: (recipeId) => set((state) => {
    // Prevent adding duplicate favorites
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),
  // Recommendations management
  recommendations: [],
  generateRecommendations: () => set((state) => {
    // Generate recommendations based on favorites
    // If user has favorites, recommend similar recipes (recipes not in favorites)
    // Otherwise, recommend random recipes
    let recommended = [];
    
    if (state.favorites.length > 0) {
      // Recommend recipes that are not in favorites but similar to favorite categories
      // For now, we'll recommend recipes not in favorites
      recommended = state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id))
        .slice(0, 5); // Limit to 5 recommendations
    } else {
      // If no favorites, recommend random recipes
      recommended = [...state.recipes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
    }
    
    return { recommendations: recommended };
  }),
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: filterRecipes(state.recipes, term),
  })),
  filterRecipes: () => set((state) => ({
    filteredRecipes: filterRecipes(state.recipes, state.searchTerm),
  })),
  addRecipe: (newRecipe) => set((state) => {
    const newRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: newRecipes,
      filteredRecipes: filterRecipes(newRecipes, state.searchTerm)
    };
  }),
  setRecipes: (recipes) => set((state) => ({ 
    recipes,
    filteredRecipes: filterRecipes(recipes, state.searchTerm)
  })),
  updateRecipe: (recipeId, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm)
    };
  }),
  deleteRecipe: (recipeId) => set((state) => {
    const filteredRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    // Also remove from favorites if it was favorited
    const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
    return {
      recipes: filteredRecipes,
      filteredRecipes: filterRecipes(filteredRecipes, state.searchTerm),
      favorites: updatedFavorites,
    };
  }),
}));

export { useRecipeStore };

