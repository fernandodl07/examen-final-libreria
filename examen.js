import readline from "readline/promises"

//const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
let catalogo = []

/*function guardarArchivo(){
    fs.writeFileSync('Catalogo.txt')
}*/

async function agregarlibro() {
    
    const libro = {
        titulo: await rl.question("Ingrese el título del libro: "),
        autor: await rl.question("Ingrese el autor del libro: "),
        precio: await rl.question("Ingrese el precio del libro: "),
        año: await rl.question("Ingrese el año de publicación: "),
    }
    catalogo.push(libro)
    console.log("Libro agregado exitosamente.")
}

function mostrarCatalogo() {
    if (catalogo.length === 0) {
        console.log("El catálogo está vacío.")
        return
    }
    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i])
    }
}
async function buscarLibroPorTitulo(){
    const tituloABuscar = (await rl.question("Ingrese el titulo que desea buscar: ")).toLowerCase()
    const librosEncontrados = catalogo.filter((libro) =>{
            return libro.titulo.toLowerCase().includes(tituloABuscar)
    })
    console.log(librosEncontrados)
}
async function buscarLibroPorAutor(){
    const autorABuscar = (await rl.question("Ingrese el autor que desea buscar: ")).toLowerCase()
    const librosEncontrados = catalogo.filter((libro) =>{
            return libro.autor.toLowerCase().includes(autorABuscar)
    })
    console.log(librosEncontrados)
}

async function eliminarLibro(){
    const libroABuscar = (await rl.question("Ingrese el libro que desea eliminar: ")).toLowerCase()
    
    for (let i = 0; i < catalogo.length;  i++){
        const libro = catalogo[i]
        if(libro.titulo === libroABuscar){
            console.log(`El libro fue elininado ${catalogo.splice(i, 1)[0]}`)
            return
        }
    }
    console.log('No se encontro ningun libro')
            
}

function verEstadisticas(){
    console.log(`Las estadisticas de los libros son: `)
    if(catalogo.length === 0){
        console.log("No hay libros para poder mostar las estadisticas: ")
    }

    let total = catalogo.length
    //let promedio = catalogo.reduce

}

async function ordenarLibros(){
    console.log('1: Ordenar libros por percio acendente')
    console.log('2: Ordenar libros por percio desendente')
    console.log('3: Año de publicacion')
    const opcion = parseInt(await rl.question("Ingrese una opción que desea seleccionar: "))

    
    switch(opcion){
        case 1:
            catalogo.sort(a,b => a.precio - b.precio)
            break
        case 2:
            catalogo.sort(a,b => b.precio - a.precio)
            break
        case 3:
            catalogo.sort(a,b => a.año - b.año)
            break
        default:
            console.log("Opción no válida. Intente de nuevo.")
    }
}

async function editarLibro(){
    const titulo = (await rl.question("Ingrese el titulo del libro que desea editar: ")).toLowerCase()
    const libro = catalogo.find((titulo) => .)
}

function mostarmenu() {
    console.log("                           ")
    console.log(" Bienvenido a la librería")
    console.log("                           ")
    console.log(" Seleccione una opción:")
    console.log("                           ")
    console.log("1. Agregar libro") // ya
    console.log("2. Mostrar catálogo") // ya
    console.log("3. Buscar libro por título") //ya
    console.log("4. Buscar libro por autor") //ya
    console.log("5. Eliminar libro") //ya
    console.log("6. Ver estadísticas")
    console.log("7. Ordenar libros")
    console.log("8. Editar libro")
    console.log("9. Salir")
}
async function opciones() {
    let salir = true
    loopmenu:
    do{
    mostarmenu()    
    const opcion = parseInt(await rl.question("Ingrese una opción: "))
    switch(opcion) {
        case 1:
            await agregarlibro()
            break
        case 2:
            mostrarCatalogo()
            break
        case 3:
            await buscarLibroPorTitulo()
            break
        case 4:
            await buscarLibroPorAutor()
            break
        case 5:
            await eliminarLibro()
            break
        case 6:
            await verEstadisticas()
            break
        case 7:
            await ordenarLibros()
            break
        case 8:
            await editarLibro()
            break
        case 9:
            console.log("Saliendo")
            rl.close()
            break loopmenu
        default:
            console.log("Opción no válida. Intente de nuevo.")
        }
    }while (salir)
}
opciones()