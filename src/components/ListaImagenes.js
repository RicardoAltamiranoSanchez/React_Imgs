import React, { Fragment} from "react";

const ListaImagenes = (props) => {
  const {  imagenes } = props;
console.log(`desde el archivo de ListaImagenes ${imagenes}`);
  return (
    <Fragment>
     
      <div key={imagenes.key} className="imagenes">
        <p>{imagenes.title}</p>
        <img src={imagenes.url} alt="Aqui va la imagen" />
      </div>
     
    </Fragment>
  )
};

export default ListaImagenes;
