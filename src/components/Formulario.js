import React, { useContext ,useState} from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";





const Formulario = () => {

const [busqueda, guardarBusqueda] = useState({
  nombre: '',
  categoria: ''
});




// Funcion para leer los contenidos


const {categorias} = useContext(CategoriasContext);

const {buscarRecetas} = useContext(RecetasContext)
// Función para leer los constenidos
const obtenerDatosReceta = e => {
guardarBusqueda({
  ...busqueda,
  [e.target.name]: e.target.value
})


}



  return (
    <form 
    className="col-md-12"
    onSubmit = { e => {e.preventDefault();
      buscarRecetas(busqueda)
    }}
    
    
    >
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
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" name="categoria"
            onChange={obtenerDatosReceta}>


            <option value="">-- Selecciona Categoria--</option>

{categorias.map(categoria =>(

<option
 key={categoria.strCategory}
 value={categoria.strCategory}
>{categoria.strCategory}</option>

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
