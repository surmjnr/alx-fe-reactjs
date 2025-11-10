import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations when recipes or favorites change, or component mounts
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations();
    }
  }, [recipes, favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>Recommendations</h2>
        <div className="no-results">
          <p>No recommendations available yet. Add some recipes to get personalized recommendations!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>Recommended for You</h2>
      <div className="recipe-list">
        {recommendations.map((recipe) => (
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

export default RecommendationsList;

