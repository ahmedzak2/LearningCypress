class HomePage{

    getEditBox(){
        return         cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBinding(){
        return cy.get("input[class*='ng-untouched ng-pristine ng-valid'")
    }

    getGender(){
        return cy.get('select')
    }

getCondionForName(){
    return cy.get("input[class*='ng-touched']")
}

getEntreprenaurButton(){
    return cy.get('#inlineRadio3')
}
getShopTab(){
    return cy.contains('.nav-link', 'Shop').click()

}
}


export default HomePage