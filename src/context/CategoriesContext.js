import { Axios } from "axios";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const obtenercategorys = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categories = await axios.get(url);

      setCategories(categories.data.drinks);
    };

    obtenercategorys();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoryProvider;
