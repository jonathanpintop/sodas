import React from "react";
import { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {



const {categorias} = useContext(CategoriasContext);




  return (
    <form className="col-md-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrendiente"
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" name="categoria">
            <option value="">-- Selecciona Categoria--</option>

{categoria.map(categoria =>(

<option
 key={categoria.strCategory}
 value={categoria.strCategory}
/>

) )}


          </select>
        </div>

        <div className="col-md-4">
          <input type="submit" className="btn btn-block btn-primary"
          value="Buscar Bebidas" />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
