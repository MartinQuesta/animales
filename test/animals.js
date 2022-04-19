const { expect } = require("chai")
const { mocha } = require("mocha")
const Newlista = require('./lista.js')
const otraLista = require('./otraLista.js')

const lista = Newlista

const perros = [
    {
      nombre: 'can1',
      tipo: 'Perro'
  },
  {
    nombre: 'can2',
    tipo: 'Perro'
}
]
const gatos = [
  {
    nombre: 'cat1',
    tipo: 'Gato'
},
{
  nombre: 'cat2',
  tipo: 'Gato'
}
]
const otros = []

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(otraLista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      //expect('Perro').to.equal(perros)
      expect(otraLista.perros()).to.equal(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      expect(otraLista.gatos()).to.equal(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      expect(lista.otros()).to.equal(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      expect(animales.filter).to.have.been.called()
    })
  })
})