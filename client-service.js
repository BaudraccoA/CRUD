

//Abrir http (metodo,url)
//CRUD     - Metodo http
//Create   - POST
//Read     - GET
//Update   - PUT/PATCH
//Delete   - DELETE
//Abrimos el back end
/*const http = new XMLHttpRequest();
http.open("GET", "http://localhost:3000/perfil");

//Enviamos al servidor
http.send();
//Una vez que cargue se ejecuta
http.onload = () =>{
   const data = JSON.parse(http.response);
   data.forEach( perfil =>{
     const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
     table.appendChild(nuevaLinea);
   });*/
   //Creamos una nueva funcion: Lista de clientes
   //Creamos la clase para trabajar con promesas
   const listaClientes = () => {
    //esta funcion fetch tiene por dentro una promesa, lo cual podemos agregar el .then
        return fetch("http://localhost:3000/perfil") .then( respuesta => respuesta.json());
   };
      /*const promise = new Promise( function(resolve, reject){
         const http = new XMLHttpRequest();
         http.open("GET", "http://localhost:3000/perfil");
         http.send();
         http.onload = () =>{
         const response = JSON.parse(http.response);
         if(http.status>= 400){
            reject(response)
         }else{
            resolve(response)
         }
      };
   });
      return promise;*/

      const crearCliente = (nombre, email) => {
        return fetch("http://localhost:3000/perfil", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ nombre, email, id: uuid.v4() }),
        });
      };

      const eliminarCliente = (id) => {
        return fetch(`http://localhost:3000/perfil/${id}`, {
          method: "DELETE",
      });
      };
    
      const detalleCliente = (id) => {
        return fetch(`http://localhost:3000/perfil/${id}`)
        .then((respuesta) => respuesta.json());
      };

      const actualizarCliente = (nombre, email, id) => {
        return fetch(`http://localhost:3000/perfil/${id}`, {
          method:"PUT",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify({nombre,email})
        })
        .then((respuesta) => respuesta)
        .catch((error) => console.log(error))
      }
         
export const clientServices ={
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};