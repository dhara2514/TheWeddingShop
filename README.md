# TheWeddingShop

Automation Tools and framework Specifications:

  I have developed a BDD style Hybrid framework using Page Object Model. In this framework, I have used:
  > Java as a coding language
  > Selenium as an automation tool
  > Maven as a build tool to enable auto-downloading of dependencies
  > Gherkin language to enable writing feature files in Given, When, Then format
  > Cucumber to integrate BDD style framework using cucumberOptions
  > Junit for annotations such as @Before and @After
  > Page Object Model design in the framework to avoid duplication of code and efficient maintenance and refactoring of code
Exploring framework structure:

I have used inheritance, one of the OOPS concepts of Java

There are 2 sections in this framework, Main/Java and Test/Java

The main/Java section consists of 4 Java classes and a Package:

Java classes in Main/Java section

BasePage: Here I have instansiated WebDriver to use in the whole framework with the help of inheritance

Utils: This extends BasePage class to use it's properties, mainly WebDriver. It has all the reusable methods to be used in the test scripts.

BrowserSelector: BrowserSelector extends Utils to use the properties of BasePage class and Utils class. It has the logic to open the desired browser which is assigned to 'browser' variable in TestDataConfig.properties file which I will explain more about it .

Loadprop: This class has the logic to assign test data and browser names by creating a TestDataConfig.properties file for the test to fetch the data from this file run test in relevant browser and use data assigned in relevant variables. You will find a path defined in this class. This is the path to TestDataConfig.properties file.

PageObjects Package: This interface has Java .java files for every page user navigates to. These .java files have names relevant to the pages user is on and contains locators and methods for the user to perform some action. This will avoid duplication of code and the code will be easy to maintain and refactor as whenever there is any change to a feature on the page we change it in one place. It saves a lot of time and effort and also it is more readable for someone else reading the code. .java files in Page object extends Utils to use the properties of Utils and BasePage

The Test/Java section consists of 3 Java classes and a Directory

Java classes in Test/Java section

Hooks: This class extends Utils to use the properties of BasePage and Utils if required. There are mainly 2 Junit annotations @Before and @After. @Before will execute the logic written in it before any feature files are executed. @After will execute the logic written in it after the completion of a feature file journey

MyStepDefs: This .java file has snippets created via feature file's Given, When, Then steps written in it. This is integrated with the help of @Runwith and @CucumberOptions annotations in Runtest .java file. These snippets are converted to methods of the same Given, When, Then steps written in .feature files in Gherkin language

RunTest: This.java file has @Runwith and @CucumberOptions annotations which are used to integrate with BDD style frameworks

Resources Directory: Resources Directory has 3 Directories within it. They are:

                 Features: This has .feature file which has test cases in it in Given, When, then format
                 
                 BrowserDrivers: This has .exe files for internet explorer, Chrome and firefox
                 
                 Properties: This as TestConfig.properties file mentioned previously for fetching data from it when the tests are
                 running
Last but most important is the pom.xml file this has all the dependencies which the framework uses to run the automation files

I haven't mentioned other files which are as important such as target directory, .idea directory and others

# How to execute the tests
Download Intellij IDE community version which is free to download
Download jdk
Set jdk path in environment variables

#Steps to set environment variables:
Please follow the steps in the link to set path for environment variables:
https://www.google.co.uk/amp/s/javatutorial.net/set-java-home-windows-10/amp

# To run the tests
Open the project in IntelliJ IDE
Double-click on RunTest file located under - test > java > com.WeddingShop.Test > RunTest
Click on the play button to the left of "public class RunTest"

# Screenshots can be located under - 
target > cucumber-reports > extent-reports > screenshots

# Reports can be located under 
target > cucumber-reports > index.html
Right-click on index.html and move your cursor to "open browser" and select the browser of your choice (recommended browser is chrome)





