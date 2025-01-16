import { NavLink } from "react-router-dom";
import "./RecipeDetails.css"
import hotdog from "./ProjectImages/hotDogImg.jpeg";
import spaghetti from "./ProjectImages/spaghettiImg.png";
import pasta from "./ProjectImages/whitesaucepastaImg.jpeg";
import fruitsalad from "./ProjectImages/FruitSaladImg.jpeg";


const Spaghetti = () => {
    return(
        <>
         <div className="p-6 w-full mx-auto  rounded-lg shadow-md max-h-fit" >
              <div className=" Entire-Recipe flex flex-col lg:flex-row items-center py-4 justify-center column-gap-4 bg-red-100 max-h-fit">
                <div className="food-Img-name w-1/2 ">
              <h1 className="text-center pl-3 text-3xl font-bold mb-6">Spaghetti</h1>
              <img src={spaghetti} alt="Spaghetti" className="Food-Img object-cover pl-5 rounded-lg mb-4 shadow-lg sm:w-full" style={{height:"500px",width:"600px"}}/>
              <br />
              <button  className=" ml-52 btn btn-outline-danger place-items-center hover:shadow-xl hover:scale-75 transition-transform duration-500"> <NavLink to="/">Explore More ?</NavLink></button>
              </div>
        
        
            <div className=" food-Info pl-3 w-2/3 max-h-fit py-5 bg-gray-200 text-black">
              <h2 className="text-4xl font-bold mb-4 font-serif ">Ingredients</h2>
        
              <ul role="list" className=" list-inside marker:text-red-500 list-disc pl-5 space-y-3 text-gray-800">
                    <li>onions - 2</li>
                    <li>olive oil - 1tbsp</li>
                    <li>garlic - 1 clove</li>
                    <li>lean minced beef - 500g</li>
                    <li>mushrooms - 90g</li>
                    <li>dried oregano - 1tsp</li>
                    <li>tomatoes - 400g can</li>
                    <li>hot beef stock - 300ml</li>
                    <li>tomato puree - 1tbsp</li>
                    <li>worcestershire sauce - 1tbsp</li>
                    <li>spaghetti - 350g</li>
                    <li>parmesan - Topping</li>
              </ul>
        <br />
        
        <h2 className="text-4xl font-bold mb-4 font-serif ">Instructions</h2>
                  <ul role="list" className="list-inside marker:text-red-300 list-decimal pl-5 space-y-3 text-gray-800">
                  Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins
Add the garlic and mince and fry until they both brown
Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning
Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions
Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce
Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.
                  </ul>
        
              </div>
         </div>
            </div>
        </>
    )
}


const HotDog = () => {
  return(
      <>
       <div className="p-6 w-full mx-auto  rounded-lg shadow-md max-h-fit" >
            <div className=" Entire-Recipe flex flex-col lg:flex-row items-center py-4 justify-center column-gap-4 bg-red-100 max-h-fit">
              <div className="food-Img-name w-1/2 ">
            <h1 className="text-center pl-3 text-3xl font-bold mb-6">Hotdog</h1>
            <img src={hotdog} alt="Hotdog" className="Food-Img object-cover pl-5 rounded-lg mb-4 shadow-lg sm:w-full" style={{height:"500px",width:"600px"}}/>
            <br />
            <button  className=" ml-52 btn btn-outline-danger place-items-center hover:shadow-xl hover:scale-75 transition-transform duration-500"> <NavLink to="/">Explore More ?</NavLink></button>
            </div>
      
      
          <div className=" food-Info pl-3 w-2/3 max-h-fit py-5 bg-gray-200 text-black">
            <h2 className="text-4xl font-bold mb-4 font-serif ">Ingredients</h2>
      
            <ul role="list" className=" list-inside marker:text-red-500 list-disc pl-5 space-y-3 text-gray-800">
            For the Hot Dog:
                  <li>4 hot dog buns </li>
                  <li>4 hot dog sausages (beef, chicken, pork, or vegetarian) </li>
                  <li>Butter or oil (for toasting buns) </li>
                  <br />
                  Toppings (Optional):
                  <li>Mustard</li>
                  <li>Ketchup ,Mayonnaise</li>
                  <li>Relish</li>
                  <li>Grated cheese, Onions (finely chopped)</li>

            </ul>
      <br />
      
      <h2 className="text-4xl font-bold mb-4 font-serif ">Instructions</h2>
                <ol role="list" className="list-inside marker:text-red-300 list-decimal pl-5 space-y-3 text-gray-800">
                 Cook the Sausages:
                <li>Cook the Sausages: Boiling: Boil water in a saucepan, add the sausages, and cook for about 5-7 minutes until heated through.
Grilling: Grill the sausages on medium heat for 5-6 minutes, turning occasionally for even cooking.
Pan-frying: Heat a skillet with a little oil and fry the sausages for 3-5 minutes, turning to brown all sides.
</li>
<li> Prepare the Buns: Slice the hot dog buns lengthwise, keeping one side intact.Lightly butter the insides and toast them on a skillet until golden and crisp.</li>
<li>Assemble: Place the cooked sausage in the toasted bun. Drizzle mustard, ketchup, or your favorite sauces on top. Add your choice of toppings (onions, relish, jalapeños, etc.).
Sprinkle grated cheese if desired.</li>
<li>Serve:
Serve hot with a side of fries, chips, or a fresh salad.</li>
                </ol>      
            </div>
       </div>
          </div>


      </>
  )
}



const WhiteSaucePasta = () => {
  return(
      <>
       <div className="p-6 w-full mx-auto  rounded-lg shadow-md max-h-fit" >
            <div className=" Entire-Recipe flex flex-col lg:flex-row items-center py-4 justify-center column-gap-4 bg-red-100 max-h-fit">
              <div className="food-Img-name w-1/2 ">
            <h1 className="text-center pl-3 text-3xl font-bold mb-6">White Sauce Pasta</h1>
            <img src={pasta} alt="White Sauce pasta" className="Food-Img object-cover pl-5 rounded-lg mb-4 shadow-lg sm:w-full" style={{height:"500px",width:"600px"}}/>
            <br />
            <button  className=" ml-52 btn btn-outline-danger place-items-center hover:shadow-xl hover:scale-75 transition-transform duration-500"> <NavLink to="/">Explore More ?</NavLink></button>
            </div>
      
      
          <div className=" food-Info pl-3 w-2/3 max-h-fit py-5 bg-gray-200 text-black">
            <h2 className="text-4xl font-bold mb-4 font-serif ">Ingredients</h2>
      
            <ul role="list" className=" list-inside marker:text-red-500 list-disc pl-5 space-y-3 text-gray-800">
                  <li>2 tablespoons butter</li>
                  <li>2 tablespoons margarine</li>
                  <li>3 tablespoons all-purpose flour</li>
                  <li>garlic - 1 clove</li>
                  <li>1 cube chicken bouillon, crumbled</li>
                  <li>1 ½ cups boiling water</li>
                  <li>1 cup 2% milk</li>
                  <li>ground white pepper to taste</li>                 
            </ul>
      <br />
      
      <h2 className="text-4xl font-bold mb-4 font-serif ">Instructions</h2>
                <ol role="list" className="list-inside marker:text-red-300 list-decimal pl-5 space-y-3 text-gray-800">
              <li> Cook the Pasta:
In a large pot, bring water to a boil. Add salt and oil.
Add the pasta and cook as per the package instructions (usually 8-12 minutes) until al dente.
Drain and rinse with cold water. Set aside.</li> 
<li> Sauté the Vegetables (Optional):
Heat 1 tablespoon oil or butter in a pan.
Add the vegetables and sauté for 3-4 minutes until they are slightly tender but still crisp. Remove and set aside.</li>
<li> Prepare the White Sauce:
In a large pan, melt the butter over low heat.
Add the flour and whisk continuously to make a smooth paste (roux). Cook for 1-2 minutes without letting it brown.
Gradually add the warm milk, whisking constantly to avoid lumps.
Cook on medium heat until the sauce thickens.
Season with salt, pepper, and nutmeg. Add grated cheese for extra creaminess, if desired.</li>
<li> Combine:
Add the cooked pasta and sautéed vegetables to the white sauce. Toss gently to coat the pasta evenly.
Adjust seasoning if needed.</li>
<li> Serve:
Garnish with grated cheese, red chili flakes, and oregano.
Serve hot with garlic bread or a fresh salad</li>
                </ol>
      
            </div>
       </div>
          </div>


      </>
  )
}



const FruitSalad = () => {
  return(
      <>
       <div className="p-6 w-full mx-auto  rounded-lg shadow-md max-h-fit" >
            <div className=" Entire-Recipe flex flex-col lg:flex-row items-center py-4 justify-center column-gap-4 bg-red-100 max-h-fit">
              <div className="food-Img-name w-1/2 ">
            <h1 className="text-center pl-3 text-3xl font-bold mb-6">FruitSalad</h1>
            <img src={fruitsalad} alt="FruitSalad" className="Food-Img object-cover pl-5 rounded-lg mb-4 shadow-lg sm:w-full" style={{height:"500px",width:"600px"}}/>
            <br />
            <button  className=" ml-52 btn btn-outline-danger place-items-center hover:shadow-xl hover:scale-75 transition-transform duration-500"> <NavLink to="/">Explore More ?</NavLink></button>
            </div>
      
      
          <div className=" food-Info pl-3 w-2/3 max-h-fit py-5 bg-gray-200 text-black">
            <h2 className="text-4xl font-bold mb-4 font-serif ">Ingredients</h2>
      
            <ul role="list" className=" list-inside marker:text-red-500 list-disc pl-5 space-y-3 text-gray-800">
                  <li> 1 cup strawberries, hulled and sliced</li>
                  <li>1 cup blueberries</li>
                  <li>1 cup pineapple chunks</li>
                  <li>1 cup green grapes (halved)</li>
                  <li>1 banana, sliced (optional)</li>
                  <li>2 tablespoons honey (optional, for sweetness)</li>
                  <li>1 tablespoon freshly squeezed lime juice</li>
                  <li>A handful of mint leaves (optional, for garnish)</li>                 
            </ul>
      <br />
      
      <h2 className="text-4xl font-bold mb-4 font-serif ">Instructions</h2>
                <ul role="list" className="list-inside marker:text-red-300 list-decimal pl-5 space-y-3 text-gray-800">
               <li>Prepare the fruit: Wash and cut all the fruits as needed.</li> 
               <li>Mix the dressing: In a small bowl, whisk together the honey and lime juice until combined.</li>
               <li>Combine the fruits: In a large mixing bowl, gently toss all the prepared fruits.</li>
               <li>Add the dressing: Drizzle the honey-lime mixture over the fruit salad and toss lightly to coat.</li>
              <li>Chill: Refrigerate the salad for about 20-30 minutes to let the flavors blend.</li>
               <li>Serve: Garnish with mint leaves (if using) and enjoy!</li>
               </ul>      
            </div>
       </div>
          </div>
      </>
  )
}



export default Spaghetti;
export {HotDog,WhiteSaucePasta,FruitSalad};