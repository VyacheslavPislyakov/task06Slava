Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber

  Scenario: Reading documentation
    Given I am going to the Onliner.by
    When I click on mobile phones
    When I set filter Apple
    When Valid set filter "Apple"
    When I find "Apple iPhone 6s Plus 16GB Space Gray"
    When Click add to compare phone
    When Come back to mobile page
    When I find "Apple iPhone SE 16GB Space Gray"
    When Click add to compare phone
    When Going to compare page
