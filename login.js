class Usuario {
    constructor(username, password, email, telefono) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.telefono = telefono;
    }
}

var contador = localStorage.getItem("contador"); //Guarda información que permanecerá almacenada por tiempo indefinido; sin importar que el navegador se cierre.
//El método getItem() de la interfaz Storage devuelve el valor de la clave cuyo nombre se le pasa por parámetro.
var usuarios; // no definido 
var stringUsuarios;// valor en string no definido
if(contador==null){  // es un numero vacio  //null=0 
   contador = 0;//1= contador 1 contador=2  // usurio2 =3
   usuarios = [];//arrays
}else{
    stringUsuarios = localStorage.getItem("usuarios")
    usuarios = JSON.parse(stringUsuarios)  //  "0 Joel"  " 1 Tony"  " 2 cristhopher" entero
}

if (contador == 0){ // null contador 1 ejemplo 
    llenarUsuarios(); 
    contador = contador + 1 // el programa o los arrays siempre teminan en 0 y en esta linea estoy agregando los usuarios
    localStorage.setItem("contador", contador);// guarda la informacion permanentemente
// cargarUnUsuario();
}
function llenarUsuarios() {  //usuarios quemados
    var user1 = new Usuario("leon", "leo123","leon@hotmail.com", "1234561"); //1er usuario username,password,email,telefono
    var user2 = new Usuario("carlos", "car123","carlos@hotmail.com", "1234562"); //2do usuario
    var user3 = new Usuario("david", "dav123","david@hotmail.com", "1234563");
    var user4 = new Usuario("betty", "bet123","vetty@hotmail.com", "1234564");

    usuarios.push(user1); // es para agregar al final del array dentro del elemento 0
    usuarios.push(user2); // este usuario va valer 1
    usuarios.push(user3); // " "                   2
    usuarios.push(user4);// "   "                  3

    /*Guardando los datos en el LocalStorage*/
    var stringUsuarios = JSON.stringify(usuarios) //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
    localStorage.setItem("usuarios", stringUsuarios);//Guarda información que permanecerá almacenada por tiempo indefinido; sin importar que el navegador se cierre.
}

function cargarUnUsuario() {
    var a = this.usuarios[2]; // leon carlos david a la q no toma en cuenta es a vetty
    document.getElementById("username").setAttribute("value", a.username);/*El método setAttribute () agrega el atributo especificado a un elemento y le da el valor especificado.
    Si el atributo especificado ya existe, solo se establece / cambia el valor.*/
}

function Registrar() {
    var username = document.getElementById("usernamer").value; // recuperamos los valores de las clases documentgbid todo esto recupera si no se pone el "value"
    var password = document.getElementById("passwordr").value;
    var email = document.getElementById("emailr").value; 
    var telefono = document.getElementById("telefonor").value;
    //regitro
    var usuario=new Usuario(username,password,email,telefono);  
    usuarios.push(usuario); // push agrega el ultimo elemento del array
    var stringUsuarios = JSON.stringify(usuarios) // el texto en valor de array 
    localStorage.setItem("usuarios", stringUsuarios);//El método setItem () establece el valor del elemento de objeto de almacenamiento especificado.

    document.getElementById("usernamer").value =""; 
    document.getElementById("passwordr").value ="";
    document.getElementById("emailr").value =""; 
    document.getElementById("telefonor").value ="";

    alert("Estas registrado en nuestra base de datos Bienvenido");
    var Numeros_Alearotios;
    Numeros_Alearotios=(Math.round(Math.random() * 9999)); // round manda enteros y random manda aleatorios
    alert("Tu codigo es el siguiente:" + Numeros_Alearotios);
    var Numeros_Cliente;
    Numeros_Cliente=(Math.round(Math.random()*20));
    alert("Cliente Numero :" + Numeros_Cliente)
}

function verificarLogin(){
    var username = document.getElementById("username").value; // usurio que esta en html 
    var password = document.getElementById("password").value; // contraseña que esta en html

    usuarios.forEach(user => { // itera un variable en un array y devuelve el elemento a buscar dentro 
        if(user.username == username && user.password == password){ // usuarios a buscar
            location.href="ingresar.html";
        }
        else{
            document.getElementById("mensajeErrorLogin").style.visibility="visible";
        }
    });
}