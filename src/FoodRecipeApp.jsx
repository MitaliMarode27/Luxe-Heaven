import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./FoodRecipeApp.css";
import hotdog from "./ProjectImages/hotDogImg.jpeg";
import spaghetti from "./ProjectImages/spaghettiImg.png";
import pasta from "./ProjectImages/whitesaucepastaImg.jpeg";
import fruitsalad from "./ProjectImages/FruitSaladImg.jpeg";


const FoodRecipeApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  const searchDish = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      if (data.meals) {
        setDishes(data.meals);
        setError(null);
      } else {
        setDishes([]);
        setError("No dishes found.");
      }
    } catch (error) {
      setError("Failed to fetch dishes. Check Your Internet Connection..");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchDish();
  };

  return (
    <div className=" w-full bg-gray-100 rounded-lg shadow-md">
      <div className=" w-full h-1/2 bg-red-300 py-5">
      <h1 className="text-center font-serif mb-6 text-5xl text-white font-thin">Search for a Dish</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter dish name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{height:"50px", width:"600px"}}
            className=" pl-4 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            style={{height:"50px"}}
            className=" py-2 px-4 btn btn-danger text-white rounded-r-md focus:outline-none hover:shadow-xl hover:scale-75 transition-transform duration-500"
          >
            Search
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center mb-6">{error}</p> }
 </div>


 {dishes.length > 0 ? (
          <div className="api-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 px-16">
          {dishes.map((dish) => (
            <div key={dish.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
              <img src={dish.strMealThumb} alt={dish.strMeal} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{dish.strMeal}</h2>
                <p className="text-gray-500 text-sm">{dish.strInstructions.substring(0, 100)}...</p>
                <Link to={`/recipe/${dish.idMeal}`} className="btn btn-outline-danger mt-3">
                  Get Recipe
                </Link>      
                      </div>
            </div> 
             
         ))}
       </div>
     ): (
         <div className="demo-cards h-screen w-full place-items-center">
        <h2 className=" bg-slate-100 py-3 px-40 text-2xl" style={{position:"relative", bottom:"2rem"}}><i className="fa-solid fa-heart-pulse text-red-500 text-3xl"></i> Healthy Recipes</h2>
        <div className="flex justify-center items-center column-gap-5">

<div className="card mb-3 " style={{maxWidth: "600px"}}>
<div className="row g-0">
<div className="col-md-4">
<img src={pasta} className="img-fluid rounded-start h-full" alt="..."/>
</div>
<div className="col-md-8">
<div className="card-body text-lg">
<h5 className="card-title font-bold">White Sauce Pasta</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<button className=" btn btn-outline-danger mt-3 hover:shadow-xl hover:scale-75 transition-transform duration-500"><NavLink to="/pasta">Get Recipe</NavLink></button>    
  </div>
</div>
</div>
</div>  

<div className="card mb-3" style={{maxWidth: "600px"}}>
<div className="row g-0">
<div className="col-md-4">
<img src={spaghetti} className="img-fluid rounded-start" alt="..."/>
</div>
<div className="col-md-8">
<div className="card-body text-lg">
<h5 className="card-title font-bold">Spaghetti</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<button className=" btn btn-outline-danger mt-3 hover:shadow-xl hover:scale-75 transition-transform duration-500"><NavLink to="/spagethi">Get Recipe</NavLink></button> 
     </div>
</div>    
</div>
</div>
</div>



<div className="flex justify-center items-center column-gap-5">

        <div className="card mb-3 " style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={hotdog} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-lg">
        <h5 className="card-title font-bold">Hot Dog</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className=" btn btn-outline-danger mt-3 hover:shadow-xl hover:scale-75 transition-transform duration-500"><NavLink to="/hotdog">Get Recipe</NavLink></button>    
          </div>
    </div>
    </div>
    </div>  

     <div className="card mb-3" style={{maxWidth: "600px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={fruitsalad} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-lg">
        <h5 className="card-title font-bold">Fruit Salad</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className=" btn btn-outline-danger mt-3 hover:shadow-xl hover:scale-75 transition-transform duration-500"><NavLink to="/fruitsalad">Get Recipe</NavLink></button> 
             </div>
    </div>    
  </div>
</div>
</div>
      </div>
)}
    </div>
  );
};

export default FoodRecipeApp;