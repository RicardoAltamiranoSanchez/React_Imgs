import React, { Fragment, useState, useEffect } from "react";
import ListaImagenes from './ListaImagenes';
import Informacion from '../helpers/PeticionImagenes';
const Coleccion = (props) => {
  //tener cuidado de como mandas la Lista.map con {} o () ya que estamos mandanlo dentro de un componente
  const { lista } = props;
  const [Info, SetInfo] = useState([]);
  //el useEffect es para que solo mande a llamar una vez ala funcion de Informacion
  useEffect(() => {
//hicimos un helper para para la peticion y nos devuelve una promesa por eso el then
//toda la informacion la guardamos en SetInfo
    Informacion(lista).then((l)=>{SetInfo(l)});
//cada vez que sufre un cambio lista se vuelve a ejecutar este codigo
  }, [lista]);

  return (
    <Fragment>
        <h3>{lista}</h3>
      <div className="lista">
       {Info.map((i)=>(
        <ListaImagenes 
         key={i.id}
         imagenes={i}
/>
))}
			

      </div>
    </Fragment>
  );
};

export default Coleccion;
