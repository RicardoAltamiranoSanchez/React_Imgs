import React,{Fragment,useState} from "react";
import AgregarCategoria from './components/AgregarCategoria';
import Coleccion from './components/Coleccion';
const GifExpertApp=()=>{

//usamoss el useState para renderizar los cambios
const [Lista, setLista]=useState(['']);
//funcion para añadir un nuevo elemento
// const HanderAdd=()=>{
// const variable="Que te importa";
// // setLista([...Lista ,variable]);//Añadimos un elemento de un arreglo en un useState no hay que modificar Lista solo sel set 1°forma
// setLista(l=>[...l, variable]);
// //tenemos el valor del arreglo y despues de tememos en nuevo elemento y lo regresamos
// }

return (
<Fragment>

<div class="Header">
<h2>Buscador de Imagenes</h2>
<hr/>
<AgregarCategoria setLista={setLista}/> 
<ul> 
{Lista.map((lista)=>(

 <Coleccion
    key={lista}
   lista={lista}
/>

))}
</ul>
</div>

</Fragment>

);

}

export default GifExpertApp;

//codigo que ocupe para pruebas
/* //hacemos el map por que no tiene que devolver algo y con el foreach no devuelve nada solo repasa
//en key de ponemos el mismo valor de la lista por si hay cambios
   return <li key={lista}>{lista}</li> */