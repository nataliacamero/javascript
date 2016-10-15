//Se crea objeto json estudiantes.
var estudiantes = [
	{
		"codigo":"001",
		"nombre":"Mateo Ignacio Maggi Camero",
		"nota":100
	},{
		"codigo":"002",
		"nombre":"Gustavo Ignacio Maggi Wulff",
		"nota":20
	},{
		"codigo":"003",
		"nombre":"Natalia Camero Carreño",
		"nota":20
	},{
		"codigo":"004",
		"nombre":"Alejandra Camero Carreño",
		"nota":30
	},{
		"codigo":"005",
		"nombre":"Bibiana Camero Carreño",
		"nota":100
	},{
		"codigo":"006",
		"nombre":"Carlos Azuero",
		"nota":30
	},{
		"codigo":"007",
		"nombre":"Diego Maggi Wulff",
		"nota":20
	},{
		"codigo":"008",
		"nombre":"Alejandro Maggi Wulff",
		"nota":100
	},{
		"codigo":"009",
		"nombre":"Roberto Zambrano Ahumada",
		"nota":20
	},{
		"codigo":"010",
		"nombre":"Diego Peña",
		"nota":20
	}
];

//FUNCIONES REUTILIZABLES.

//Definicion de funcion arreglo(), el cual toma las notas del objeto JSOn estudiantes, para crear el arreglo de notas y asi utilizarlo en los calculos.
function getNotas(json) {

	var jsonNotas = [];
	
	for (var i = 0; i < json.length; i++) {
	
		//Este metodo agrega al final del arreglo, el parametro entre parentesis.					
		jsonNotas.push(json[i].nota);

	}
	return jsonNotas;
}

function getPromedio(json) {

	var notas = getNotas(json);
	var sumaNota = 0;
	var promedioNota = 0;
	
	for (var i = 0; i < notas.length; i++) {
		sumaNota += notas[i];
	} 
	
	promedioNota = sumaNota / notas.length;
	return promedioNota;
}

function tituloColumna() {
	var tituloColumna = "<tr> <th>Codigo</th> <th>Nombre</th> <th>Nota</th> </tr><br>";

	return tituloColumna;
}

function tituloTabla(titulo1, titulo2) {

	var nombre1 = "<h3>" + titulo1 + " >" + "</h3>";
	var nombre2 = "<h2>" + titulo2 + "</h2>";

	nombreTabla = nombre1.concat(nombre2);

	return nombreTabla;
}

function getCuenta(argumento) {
	var cuenta = "<br>" + "Total: " + argumento + " estudiantes";
	return cuenta;
}
//Funcion que cuenta los estudiantes que se muestran en pantalla, y se imprime al final de la tabla.

//----------------------------------------------------------------------------------------------------------------------------

//Creamos la funcion leerEstudiantes() la cual recorre todo el objeto y mediante la funcion mostrarEstudiantes() lo muestra en pantalla.
function leerEstudiantes(json){
	
	var salida1 = "";
	var total1 = 0; //Variable que cuenta el total de estudiantes mostrados en pantalla.
	
	for (var i = 0; i < json.length; i++) {
		
		//Concatenamos etiquetas HTML para hacer una tabla que muestre las propiedades del objeto Json.
		salida1 += "<tr>" + "<td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota + "</td>" + "</tr>";
		total1 ++;
	} 

	//Mostramos en pantalla la concatenacion que genera la tabla.
	document.getElementById("resultado").innerHTML = "<table>" + tituloTabla("Mostrar Estudiantes","Datos de los estudiantes registrados") + tituloColumna() + salida1 + "</table>" + getCuenta(total1);
}

//Funcion que muestra la tabla con el evento onClick del boton mostrar estudiantes.
function mostrarEstudiantes() {
	leerEstudiantes(estudiantes);
}

//Creamos la funcion calcularPromedio() de notas.
function calcularPromedio(json) {

	var promedio = getPromedio(json);				
									
	document.getElementById("resultado").innerHTML = tituloTabla("Mostrar promedio de notas","Promedio de notas de los estudiantes registrados") + promedio;
}

//Funcion que muestra el promedio de los estudiantes en pantalla.		
function promedioNotas(){
	calcularPromedio(estudiantes);
}

//Creamos la funcion que calcula la nota mayor y muestra a los estudiantes correspondientes.
function calculoNotaMayor(json) {
	
	var salida2 = "";
	var jsonNotas = getNotas(json);
	var notaMayor = Math.max.apply(null,jsonNotas);//Variable que saca el valor maximo del arrelglo jsonNotas[].
	var total2 = 0;//Variable que cuenta el total de estudiantes mostrados en pantalla.
	 
	//Definimos el for que mostrara en pantalla el o los estudiantes con nota mayor.
	for (var i = 0; i < json.length; i++) {
	
		if (json[i].nota == notaMayor) {
			salida2 += "<tr>" + "<td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota + "</td>" + "</tr>";  
			total2 ++;
		} 		
	
	}

	//Imprimimos en pantalla la variable salida2 con la concatenacion de lo generado en el for.
	document.getElementById("resultado").innerHTML = "<table>" + tituloTabla("Mostrar nota mayor","Estudiantes con la mayor nota") + tituloColumna() + salida2 + "</table>" + getCuenta(total2); 
}
				
//Funcion que muestra en pantalla los estudiantes con la maxima nota mediante el boton Estudiantes con mayor nota.
function mostrarNotaMayor() {
	calculoNotaMayor(estudiantes);
};


//Definimos funcion calculoNotaMenor(), para mostrar en pantalla el o los estudiantes con la menor nota.
function calculoNotaMenor(json) {
	
	var salida3 = "";
	var jsonNotas2 = getNotas(json);
	var notaMenor = Math.min.apply(null,jsonNotas2);//Variable que saca el valor minimo del arrelglo jsonNotas2[].
	var total3 = 0; //Variable que cuenta el total de estudiantes mostrados en pantalla.
	
	//Definimos el for que mostrara en pantalla el o los estudiantes con la nota menor.
	for (var i = 0; i < json.length; i++) {
	
		if (json[i].nota == notaMenor) {
			salida3 += "<tr>" + "<td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota + "</td>" + "</tr>";  
			total3++;
		}

	}

	//Imprimimos en pantalla la variable salida3 con la concatenacion de lo generado en el for.
	document.getElementById("resultado").innerHTML = "<table>" + tituloTabla("Mostrar nota menor","Estudiantes con la menor nota") + tituloColumna() + salida3 + "</table>" + getCuenta(total3); 
}


//Funcion que muestra en pantalla los estudiantes con la menor nota mediante el boton Estudiantes con menor nota.
function mostrarNotaMenor() {
	calculoNotaMenor(estudiantes);
}

//Definimos funciones que muestra los estudiantes por encima y debajo del promedio.

function encimaPromedio(json) {

	var promedioNotas2 = getPromedio(json);
	var salida4 = "";
	var total4 = 0; //Variable que cuenta el total de estudiantes mostrados en pantalla.
											
	for (var i = 0; i < json.length; i++) {

		if (json[i].nota > promedioNotas2 ) {

			salida4 += "<tr>" + "<td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota + "</td>" + "</tr>";  
			total4 ++;
		
		}

	}
	//Imprimimos en pantalla la variable salida4 con la concatenacion de lo generado en el for.
	document.getElementById("resultado").innerHTML = "<table>" + tituloTabla("Mostrar estudiantes sobre promedio","Estudiantes sobre el promedio") + tituloColumna() + salida4 + "</table>" + getCuenta(total4);
}	

function mostrarEncimaPromedio() {
		encimaPromedio(estudiantes);
}

function bajoPromedio(json) {

	var promedioNotas3 = getPromedio(json);
	var salida6 = "";
	var total5 = 0; //Variable que cuenta el total de estudiantes mostrados en pantalla.
					
	for (var i = 0; i < json.length; i++) {
		
		if (json[i].nota < promedioNotas3 ) {

			salida6 += "<tr>" + "<td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota + "</td>" + "</tr>";  

			total5 ++;
			
		}
	}
		
	document.getElementById("resultado").innerHTML = "<table>" + tituloTabla("Mostrar estudiantes bajo el promedio","Estudiantes bajo el promedio") + tituloColumna() + salida6 + "</table>" + getCuenta(total5);
}	

function mostrarDebajoPromedio() {
		bajoPromedio(estudiantes);
}

function bienvenida(){
	alert("Usted se encuentra en Administracion de Estudiantes¡¡");
}