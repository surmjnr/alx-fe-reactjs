import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter((recipe) => recipe !== undefined) // Filter out undefined recipes
  );

  if (favorites.length === 0) {
    return (
      <div className="favorites-list">
        <h2>My Favorites</h2>
        <div className="no-results">
          <p>You haven't added any favorites yet. Start exploring recipes and add them to your favorites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h2>My Favorites ({favorites.length})</h2>
      <div className="recipe-list">
        {favorites.map((recipe) => (
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
      </div>
    </div>
  );
};

export default FavoritesList;

