import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const { categories } = useContext(CategoriesContext);

  const { searchRecipes, setSearchingRecipe } = useContext(RecipesContext);

  const getRecipesData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-md-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
        setSearchingRecipe(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search Drinks by category or Ingredients</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by Ingredients"
            onChange={getRecipesData}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getRecipesData}
          >
            <option value="">-- Choose a Category--</option>

            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search Drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
