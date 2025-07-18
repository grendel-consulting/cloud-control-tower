Feature: As a visitor I want to visit the website in order to see what the business offers

  @timeout:3000
  Scenario: Visit the Domain
    Given I have an open browser
    When I navigate to "https://grendel-consulting.github.io/cloud-control-tower/"
    Then I see "Cloud Control Tower | Cloud Control Tower" in the title
    And I have no problems navigating the site
