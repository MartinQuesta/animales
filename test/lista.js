
const lista = {
    animales: [
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
],
perros : function(){
    const listaDePerros = []
    var nuevoAnimal = 'Perro'
    this.lista.animales.forEach(animal => {
        if(animal.tipo === 'Perro'){
            listaDePerros.push(animal)
        }
    });
    return listaDePerros
},
gatos: function(){
    const listaDeGatos = []
    let myAnimal = 'gatos'
    this.lista.animales.array.forEach(animal => {
        if(animal.tipo == 'Gato'){
            listaDeGatos.push(animal)
            //myAnimal = 'gatos'
        }
    });
    return listaDeGatos
}
}
