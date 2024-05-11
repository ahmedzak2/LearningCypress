class Checkouts{

getCheckoutButton(){
    return cy.get("button[class*='btn btn-success']")
}
getContinueShoppingButton(){
   return cy.get('btn btn-default')
}
getDeliveryLocationField(){
   return cy.get("input[id*='country']")
}
getCheckBox(){
   return cy.get("#checkbox2")
}
getPurchaseButton(){
   return cy.get("input[type=submit]")
}
getConfirmationMessage(){
    return cy.get('close')
}
getSuggesstions(){
   return cy.get('.suggestions > :nth-child(1) > li > a')  
}
getAlertMessage(){
   return cy.get('.alert')
}

getAllPricesOfProducts(){
   let sum = 0;  // Variable to store the sum of all prices
   return cy.get('tr td:nth-child(4) strong').then($elements => {
       $elements.each((index, element) => {
           // Extract numeric value from the element's text content
           const price = parseFloat(element.textContent.replace(/^\D+/g, ''));
           sum += price;  // Add the price to the sum
       });
       return sum;  // Return the total sum after processing all elements
   });
}

getTotalPrice(){
   return cy.get('h3 strong').then($el => {
       const textContent = $el.text(); // Get the text content of the element
       const total = parseFloat(textContent.replace(/^\D+/g, '')); // Parse it as a float after removing non-numeric characters
       return total; // Return the parsed number
   });
}

}

export default Checkouts