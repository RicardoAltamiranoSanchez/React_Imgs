//creamos un hoook solo es un framento de codigo donde usamos el use para simplicar y tener un mejor orden
import Informacion from '../helpers/PeticionImagenes';
import {useState,useEffect} from 'react';

//hacemo un hook donde pedimos la informacion de la api importamos la funcion de helpers
const useFetchImagenes=(lista)=>{
//hacemos un useState de tipo objeto para poner un valor booleano para la carg
const [Info, SetInfo]=useState({
    data:[],
    carga:true

})
// Hacemos el useEffect para que se ejecutae el codigo sihay un cambio 
useEffect(()=>{
Informacion(lista)
			.then((img)=>{
//el setTimeout es para que se vea que esta cargando y 
setTimeout(()=>{
SetInfo({ data:img,carga:false})
},3000)
})

},[lista]);


return Info;
}


export default useFetchImagenes;