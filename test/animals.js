const { expect } = require("chai")
const chai  = require("chai")
const chaiSpies = require("chai-spies")
const { mocha } = require("mocha")
const otraLista = require('./otraLista.js')
chai.use(chaiSpies)


//const lista = Newlista

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
      expect(otraLista.perros()).to.eql(perros)   //equal apunta al mismo lugar de memoria & eql compara valores 1a1.
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      expect(otraLista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      expect(otraLista.otros()).to.eql(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {

      chai.spy.on(otraLista.animales, 'filter')
      
      otraLista.unMetodoConFilter()

      expect(otraLista.animales.filter).to.have.been.called()
    })
  })
})