/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y
 un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder 
 ser eliminado con un botón creado para ese fin. */

 let tarea = document.getElementById('tarea');
 let tareas = [];

 function agregarTarea () {
    let tarea = document.getElementById('tarea');
    let lista = tarea.value;
    if (lista == "") {
        alert("Por favor ingrese la lista primero");
    } else {
        tareas.push(lista.trim());
        tarea.value = '';
        mostrarTarea();
    }
 }

 function mostrarTarea () {
    let dato = '';
    if (tareas.length > 0) {
        for (let i = 0; i < tareas.length; i++) {
            dato += "<li class = 'list-group-item'><button class = 'pull-right' onclick = 'eliminarTarea("+[i]+")'><span class = 'glyphicon-thash'></span></button>"+tareas[i]+"</li>";
        }
    }

    document.getElementById('resultado').innerHTML = data;
 }

 function eliminarTarea(tarea) {
    tareas.splice(tarea,1);
    mostrarTarea();
 }

