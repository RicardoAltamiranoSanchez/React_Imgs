import React,{Fragment,useState} from 'react';


const Coleccion= (props)=>{
//tener cuidado de como mandas la Lista.map con {} o () ya que estamos mandanlo dentro de un componente
const {lista}=props;
const Informacion=async ()=>{

try {

const url=`https://api.giphy.com/v1/gifs/search?q=Gohan&limit=10&api_key=K5lo3VhLwt13gJmmDeLnYsNtU5xCBYn7`;
const peticion=await fetch(url);
const respuesta=await peticion.json();
const {data}=respuesta
//iteramos la data y de lo retornamo en un objeto para poder mostrarlo mas adelante en el front end
const imagenes=data.map(img=>{
return{
     id:img.id,
	 title:img.title,
	 url:img.images?.downsized_medium.url

}

});

console.log(imagenes);


} catch (error) {
	console.error(`Hubo un error en la peticion de la Api Error${error}`);
}


}
Informacion();

return(

<Fragment>
<div class="lista">
<h3>{lista}</h3>

</div>

</Fragment>

)

}


export default Coleccion;