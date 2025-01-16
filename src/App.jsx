import {Route, Routes } from "react-router-dom";
import "./App.css";
import RecipeDetail from "./RecipeDetails";
import Spaghetti, { FruitSalad, HotDog, WhiteSaucePasta } from "./DefaultFoodRecipes";
import FoodRecipeApp from "./FoodRecipeApp";

const App = () => { 
  return (
      <Routes>
        <Route path="/" element={<FoodRecipeApp/>}/>
        <Route path="/spagethi" element={<Spaghetti/>}/>
        <Route path="/hotdog" element={<HotDog/>}/>
        <Route path="/pasta" element={<WhiteSaucePasta/>}/>
        <Route path="/fruitsalad" element={<FruitSalad/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail/>} />
      </Routes>
  );
};

export default App;