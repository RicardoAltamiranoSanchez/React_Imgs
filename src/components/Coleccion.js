import React, { Fragment} from "react";
import useFetchImagenes from '../hooks/useFetchImagenes';
import ListaImagenes from './ListaImagenes';
// import Informacion from '../helpers/PeticionImagenes';
const Coleccion = (props) => {
  //tener cuidado de como mandas la Lista.map con {} o () ya que estamos mandanlo dentro de un componente
  const { lista } = props;
//   const [Info, SetInfo] = useState([]);
//   //el useEffect es para que solo mande a llamar una vez ala funcion de Informacion
//   useEffect(() => {
// //hicimos un helper para para la peticion y nos devuelve una promesa por eso el then
// //toda la informacion la guardamos en SetInfo
//     Informacion(lista).then((l)=>{SetInfo(l)});
// //cada vez que sufre un cambio lista se vuelve a ejecutar este codigo
//   }, [lista]);
//utilizamo nuestro hook y haces destruturacion y nombramos la data a Info
const {data:Info,carga}=useFetchImagenes(lista);

  return (
    <Fragment>
        <h3 className="animate__animated animate__jello">{lista}</h3>
  <h3>{carga && <p>Cargando..</p>}</h3>
      <div className="lista animate__animated animate__swing">
     
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
