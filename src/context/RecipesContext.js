import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });

  const [searchingRecipe, setSearchingRecipe] = useState(false);

  const { name, category } = search;

  useEffect(() => {
    if (searchingRecipe) {
      const getRecipesData = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);

        setRecipes(result.data.drinks);
      };

      getRecipesData();
    }
  }, [search]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        searchRecipes,
        setSearchingRecipe,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
