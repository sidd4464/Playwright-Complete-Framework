Feature: Complete Checkout Flow

  Scenario: User completes checkout successfully
    Given the user logs into SauceDemo
    When the user adds 3 random items to the cart
    And the user proceeds to checkout
    And the user enters checkout information
    Then the order should be successfully placed
