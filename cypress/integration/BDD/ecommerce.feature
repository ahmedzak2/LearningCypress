Feature: Customer buy products 

    end to end scenarios 
    
    Scenario: Customer buy 2 product

    Given Customer open the shop Page
    When  i add the items to cart
    And validate the  Total price is equal to which i order
    Then Select the country for delvier and verify the message
@Regression
Scenario: Filling the frome
    Given Customer open the form Page
    When  I fill the form 
    Then validate the form 
@Smoke
Scenario: Filling the frome2
    Given Customer open the form Page
    When  I fill the form details
    |name|gender|
    |aya |Female|
    Then validate the form 
