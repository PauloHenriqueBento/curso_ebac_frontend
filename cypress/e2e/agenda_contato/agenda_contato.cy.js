/// <reference types="cypress" />
describe('Teste para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve realizar a inclusão de um contato', () => { 
        cy.get('[type="text"]').type('Fulano')
        cy.get('[type="email"]').type('fulano@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()

        cy.get('.sc-beqWaB.eQdhbg.contato').last().should('contain.text', 'Fulano')
    })

    it('Deve realizar a alteração de um contato', () => { 
        cy.get('[type="text"]').type('Teste')
        cy.get('[type="email"]').type('teste@gmail.com')
        cy.get('[type="tel"]').type('11888888888')
        cy.get('.adicionar').click()

        cy.contains('.sc-beqWaB.eQdhbg.contato', 'Teste').then((contato) => {
            const contatoParaEditar = contato
    
            cy.wrap(contatoParaEditar).find('.edit').click()
    
            cy.get('[type="text"]').clear().type('Fulano Atualizado')
            cy.get('[type="email"]').clear().type('fulanoatualizado@gmail.com')
            cy.get('[type="tel"]').clear().type('11777777777')
    
            cy.get('.alterar').click()
    
            cy.wrap(contatoParaEditar).should('contain.text', 'Fulano Atualizado')
            cy.wrap(contatoParaEditar).should('contain.text', 'fulanoatualizado@gmail.com')
            cy.wrap(contatoParaEditar).should('contain.text', '11777777777')
        })
    })

    it('Deve realizar a remoção de um contato', () => {
        cy.get('[type="text"]').type('Teste para Remover')
        cy.get('[type="email"]').type('remover@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()
    
        cy.contains('.sc-beqWaB.eQdhbg.contato', 'Teste para Remover').then((contato) => {
            const contatoParaRemover = contato
    
            cy.wrap(contatoParaRemover).find('.delete').click()
    
            cy.contains('.sc-beqWaB.eQdhbg.contato', 'Teste para Remover').should('not.exist')
        })
    })
    
});