import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
      <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
    </button>
  );
};

export default FavoriteButton;

