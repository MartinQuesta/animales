
function perros(){
    const listaDePerros = []
    var nuevoAnimal = 'Perro'
    this.animales.forEach(animal => {
        if(animal.tipo === 'Perro'){
            listaDePerros.push(animal)
        }
    });
    return listaDePerros
}

function gatos (){
    const listaDeGatos = []
    let myAnimal = 'gatos'
    this.animales.forEach(animal => {
        if(animal.tipo == 'Gato'){
            listaDeGatos.push(animal)
            //myAnimal = 'gatos'
        }
    });
    return listaDeGatos
}

function otros(){
    const listaDeOtros = []
    return listaDeOtros
}


const animales= [
    {
        nombre: 'can1',
        tipo: 'Perro'
    },
    {
        nombre: 'cat1',
        tipo: 'Gato'
    },
    {
        nombre: 'cat2',
        tipo: 'Gato'
    },
    {
        nombre: 'can2',
        tipo: 'Perro'
    }
]
module.exports = { perros, gatos, animales}
