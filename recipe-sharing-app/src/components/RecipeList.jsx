import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filteredRecipes with all recipes on mount or when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Use filteredRecipes (which will contain all recipes if no search term)
  const displayRecipes = filteredRecipes.length > 0 || searchTerm ? filteredRecipes : recipes;

  return (
    <div className="recipe-list-container">
      <h2>All Recipes</h2>
      <div className="recipe-list">
        {displayRecipes.length === 0 ? (
          <div className="no-results">
            <p>No recipes found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
          </div>
        ) : (
          <>
            {searchTerm && (
              <p className="results-count">
                Found {displayRecipes.length} recipe{displayRecipes.length !== 1 ? 's' : ''} matching "{searchTerm}"
              </p>
            )}
            {displayRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <div className="recipe-card-header">
                  <Link to={`/recipe/${recipe.id}`}>
                    <h3>{recipe.title}</h3>
                  </Link>
                  <FavoriteButton recipeId={recipe.id} />
                </div>
                <p>{recipe.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeList;

