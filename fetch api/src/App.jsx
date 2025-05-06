import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    let response = await fetch("https://dummyjson.com/users");
    response = await response.json();
    setUsers(response.users);
    setLoading(false);
  };
  const getProducts = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    setproducts(response.products);
    setLoading(false);
  };

  const getRecipes = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    setRecipes(response.recipes);
    setLoading(false);
    console.log(recipes);
  };

  useEffect(() => {
    // getUsers();
    // getProducts()
    getRecipes();
  }, []); // run only for the first render

  // useEffect(() => {
  //  alert('hello')
  // }) // run for each render

  // useEffect(() => {
  //   alert('hello')
  // }, [third])  //runs only if the dependency is updated

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        // <ul className=" flex flex-wrap justify-center gap-6 m-10">
        //   {/* {users.map((user) => (
        //     <li key={user.id} className="pl-5 list-disc ">
        //       {user.firstName}
        //     </li>
        //   ))} */}
        //   {products.map((product) => (
        //     <li
        //       key={product.id}
        //       className="pl-5 rounded-lg  flex flex-col items-center py-3 shadow-2xl shadow-black "
        //     >
        //       <img src={product.thumbnail} alt="" />
        //       <h1 className=" font-semibold ">{product.title}</h1>
        //       <p className="font-bold text-orange-500 "> $ {product.price}</p>
        //     </li>
        //   ))}
        // </ul>

        <div className="flex flex-wrap gap-5 justify-center">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="w-1/4 r bg-yellow-500 p-4 ">
              <h1 className="text-center text-2xl font-semibold">{recipe.name}</h1>
              
              <ul>
                
               {recipe.ingredients.map((ingredient,index)=>
                <li key={index}>-{ingredient}</li>
               )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
