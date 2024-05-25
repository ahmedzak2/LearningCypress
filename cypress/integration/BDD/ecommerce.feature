Feature: Customer buy products 

    end to end scenarios 
    
    Scenario: Customer buy 2 product

    Given Customer open the shop Page
    When  i add the items to cart
    And validate the  Total price is equal to which i order
    Then Select the country for delvier and verify the message

Scenario: Filling the frome
    Given Customer open the form Page
    When  i fill the from 
    Then validate the  from 
