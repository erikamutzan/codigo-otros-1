const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se coloca un punto para identificar un estilo, va a guardar el elemento HTML con la clase especificada 
const $b = document.querySelector('.blog'); //se retira # y se coloca el punto porque es un estilo
const $l = document.querySelector('.location');

async function displayUser (username) { //se debe colocar async porque se sta utilizando await 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //se cambio la variable por data
  const data = await response.json(); //para obtener los datos de la respuesta correctamente
  console.log(data); //aqui ya se puede imprimir el resultado de la busqueda
  $n.textContent = `${data.name}`; // se deben cambiar las comillas simples por las back stick
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err); // se imprime en consola
  $n.textContent = `Algo salió mal: ${err}` //se agrego $ a n //se imprime en html
}

displayUser('stolinski').catch(handleError);
