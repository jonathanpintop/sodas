import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idrecipe, setIdRecipe] = useState(null);
  const [info, setRecipe] = useState({});

  useEffect(() => {
    const obtenerrecipe = async () => {
      if (!idrecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

      const result = await axios.get(url);

      setRecipe(result.data.drinks[0]);
    };
    obtenerrecipe();
  }, [idrecipe]);

  return (
    <ModalContext.Provider
      value={{
        info,
        setIdRecipe,
        setRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
