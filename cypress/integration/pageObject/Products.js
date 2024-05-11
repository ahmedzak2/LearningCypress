class Products{

    getshop(){
        return  cy.contains('.nav-link', 'Shop')
    }
getItemsName(){
    return cy.get('h4.card-title')
}
getAddButton(){
    return cy.get('button.btn.btn-info')
}
getCheckout(){
return   cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

}
}
export default Products