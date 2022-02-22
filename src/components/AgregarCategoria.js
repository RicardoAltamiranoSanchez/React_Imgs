import React ,{Fragment,useState}from 'react';
import PropTypes from 'prop-types';
const AgregarCategoria=(props)=>{
const {setLista}=props;
const [inputValor, SetValor]=useState('');
//hacemos una funcion para cambiar el valor por defecto de nuestro useState
//con target.value el onChange se usa para cada vez que cambie el valor

const valorBuscador=(e)=>{
SetValor(e.target.value);

}
const SubmitFormulario=(e)=>{
e.preventDefault();
if(inputValor.trim().length > 2){//indicamo si el valor de inputValor es mayor que ejecute el trim es para quitar los espacios
setLista(l=>[inputValor,...l]);//añadimos un nuevo valor ala lista con el useState de este componente
SetValor('');
}
}

return(
<Fragment>
<form onSubmit={SubmitFormulario}>
<div class="Buscador">

    <input
		type="text"
		value={inputValor}
        onChange={valorBuscador} 
		/>

</div>
</form>

</Fragment>

)

}
AgregarCategoria.prototype={
setLista:PropTypes.func.isRequired //Pedimos que nos envien el parametro en una funcion 
}


export default AgregarCategoria;