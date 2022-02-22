


 const Informacion = async (lista) => {
//el encodeURIComponent es para que nos corte los espacion o lo cambie enformato de la url
    try {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(lista)}&limit=10&api_key=K5lo3VhLwt13gJmmDeLnYsNtU5xCBYn7`;
      const peticion = await fetch(url);
      const respuesta = await peticion.json();
      const { data } = respuesta;
      //iteramos la data y de lo retornamo en un objeto para poder mostrarlo mas adelante en el front end
      const imagenes = data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        };
      });
   
	return imagenes;
    } catch (error) {
      console.error(`Hubo un error en la peticion de la Api Error${error}`);
    }
  };

export default Informacion;