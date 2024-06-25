/*
Karol Viviana Pastrana Pastrana
Fecha:11/06/2024
*/

function sumar(){
  let numeroUno= parseInt(document.getElementById('txtnumeroUno').value);
  let numeroDos= parseInt(document.getElementById('txtnumeroDos').value);
  let suma= numeroUno+numeroDos;
  let imagenCuadrado="<img src='https://th.bing.com/th/id/OIP.eHcDBC-DztH4uQYb8DmmKAHaJp?rs=1&pid=ImgDetMain'>";
  document.getElementById('suma').innerHTML = '<strong>' +suma+'</strong>'+ imagenCuadrado

  return false;

}







