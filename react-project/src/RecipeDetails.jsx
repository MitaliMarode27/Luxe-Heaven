// src/RecipeDetail.jsx
import  { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.meals) {
          setRecipe(data.meals[0]);
          setError(null);
        } else {
          setRecipe(null);
          setError("Recipe not found.");
        }
      } catch (error) {
        setError("Failed to fetch recipe.");
      }
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader border-t-4 border-b-4 border-red-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }


  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!recipe) {
    return <p className="text-center">Loading...</p>;
  }

  const instructions = recipe.strInstructions.split(". ").filter(step => step);

  return (
    <div className="p-6 w-full mx-auto  rounded-lg shadow-md max-h-fit" >
      <div className=" Entire-Recipe flex flex-col lg:flex-row items-center py-4 justify-center column-gap-4 bg-red-100 max-h-fit">
        <div className="food-Img-name w-1/2 ">
      <h1 className="text-center pl-3 text-3xl font-bold mb-6">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="Food-Img object-cover pl-5 rounded-lg mb-4 shadow-lg sm:w-full" style={{height:"500px",width:"600px"}}/>
      <br />
      <button  className=" ml-52 btn btn-outline-danger place-items-center hover:shadow-xl hover:scale-75 transition-transform duration-500"> <NavLink to="/">Explore More ?</NavLink></button>
      </div>


    <div className=" food-Info pl-3 w-2/3 max-h-fit py-5 bg-gray-200 text-black">
      <h2 className="text-4xl font-bold mb-4 font-serif ">Ingredients</h2>

      <ul role="list" className=" list-inside marker:text-red-500 list-disc pl-5 space-y-3 text-gray-800">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((i) => ({
            ingredient: recipe[`strIngredient${i}`],
            measure: recipe[`strMeasure${i}`],
          }))
          .filter(({ ingredient }) => ingredient)
          .map(({ ingredient, measure }, index) => (
            <li key={index}>
              {ingredient} - {measure}
            </li>
          ))}
      </ul>
<br />

<h2 className="text-4xl font-bold mb-4 font-serif ">Instructions</h2>
          <ul role="list" className="list-inside marker:text-red-300 list-decimal pl-5 space-y-3 text-gray-800">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
      </div>
 </div>
    </div>
  );
};

export default RecipeDetail;