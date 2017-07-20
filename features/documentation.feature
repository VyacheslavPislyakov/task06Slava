Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber

  Scenario: Reading documentation
    Given I am going to the Onliner.by
    When Click on "Мобильные телефоны"
    When I set filter "Apple"
    When Should have been shown set filter "Apple"
    When I find "Apple iPhone 6s Plus 16GB Space Gray"
    Then Should have been set "Смартфон Apple iPhone 6s Plus 16GB Space Gray"
    When Click "Добавить к сравнению" to compare phone
    Then Should have been set compare "1 товар  в сравнении"
    When Come back to mobile page
    When I find "Apple iPhone SE 16GB Space Gray"
    Then Should have been set "Смартфон Apple iPhone SE 16GB Space Gray"
    When Click "Добавить к сравнению" to compare phone
    Then Should have been set compare "2 товара  в сравнении"
    When Going to compare page
    Then Compare all function of phones
    When Delete iPhone SE
    Then Verify that "Apple iPhone SE 16GB Space Gray" has been removed
