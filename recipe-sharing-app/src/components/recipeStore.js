import create from 'zustand';

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
    return {
      recipes: filteredRecipes,
      filteredRecipes: filterRecipes(filteredRecipes, state.searchTerm)
    };
  }),
}));

export { useRecipeStore };

