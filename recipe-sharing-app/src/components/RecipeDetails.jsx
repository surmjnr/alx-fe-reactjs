import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <div className="recipe-details-header">
        <h1>{recipe.title}</h1>
        <FavoriteButton recipeId={recipe.id} />
      </div>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;

