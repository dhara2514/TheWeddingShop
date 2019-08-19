package PageObject;

import com.Weddingshop.Test.LoadProp;
import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class RegisterPage extends Utils
{
    // created loadprop object to use the test config properties
    LoadProp loadProp = new LoadProp();

    private By _titleYourDetails = By.id("title");
    private By _firstNameYourDetails = By.id("name");
    private By _lastNameYourDetails = By.id("surname");
    private By _whereDidYouHearAboutUs = By.id("referrerId");
    private By _partnersTitle = By.id("partnerTitle");
    private By _partnerFirstName = By.id("partnerName");
    private By _partnerLastName = By.id("partnerSurname");
    private By _postcode = By.id("search-postcode");
    private By _selectAddress = By.cssSelector("[class='find-address__results-container']");
    private By _contactNumber = By.id("contactNumber");
    private By _clickDayMonthYear = By.id("occasionDate");
    private By _selectWeddingDate = By.xpath("//td[@aria-label='Friday, August 30, 2019']");
    private By _enterNumberOfGuests = By.cssSelector("[placeholder='Number of guests']");
    private By _enterEmail = By.id("loginEmail");
    private By _password = By.cssSelector("[name='password']");
    private By _confirmPassword = By.cssSelector("[name='passwordConfirm']");
    private By _clickSubmitButton = By.id("btn-register");

    // using timestamp to enter email for frequent registeration
    private static String timestamp = shortDate();

    // creating an object of Javascriptexcecuter to reuse in next steps
    JavascriptExecutor jse = (JavascriptExecutor) driver;

    // creating Webdriver object to use the object in next steps
    WebDriverWait wait = new WebDriverWait(driver, 5);


    public void verifyRegisterPageUrl()
    {
        // verifying registration page URL
        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL,"https://tws-uk-qa.azurewebsites.net/register");
    }

    // user to enter title in your details
    public void enterTitleInYourDeatils()
    {
        // scrolldown method to reach the locator
        jse.executeScript("window.scrollBy(0,300)", "");

        // explicit wait method to wait for 5secs to wait until the visibility of element located
        wait.until(ExpectedConditions.visibilityOfElementLocated(_titleYourDetails));

        // user to enter tilte with sendkeys method
        driver.findElement(_titleYourDetails).sendKeys(loadProp.getProperty("Title"));
    }

    public void enterYourFirstName()
    {
        // user to enter first name in your details with sendkeys method
        driver.findElement(_firstNameYourDetails).sendKeys(loadProp.getProperty("FirstName"));
    }

    public void enterYourLastName()
    {
        // user to enter last name in your details with sendkeys method
        driver.findElement(_lastNameYourDetails).sendKeys(loadProp.getProperty("LastName"));
    }

    public void clickWhereDidYouHearAboutUs()
    {
        // dropdown method of selectbyvisibletext to select an option "You & Your Wedding"
        Select select = new Select(driver.findElement(_whereDidYouHearAboutUs));
        select.selectByVisibleText("You & Your Wedding");
    }

    public void enterPartnersTitle()

    {
        // user to enter pratners title using sendkeys method
        driver.findElement(_partnersTitle).sendKeys(loadProp.getProperty("Title1"));
    }

    public void enterPartnersFirstName()
    {
        // user to enter partners first name using sendkeys method
        driver.findElement(_partnerFirstName).sendKeys(loadProp.getProperty("FirstName1"));
    }

    public void enterPartnersLastName()
    {
        // scroll down method to reach the element
        jse.executeScript("window.scrollBy(0,1000)", "");

        // explicit wait method to wait until visibility of element located
        wait.until(ExpectedConditions.visibilityOfElementLocated(_partnerLastName));

        // user to enter partners last name using sendkeys method
        driver.findElement(_partnerLastName).sendKeys(loadProp.getProperty("LastName2"));
    }

    public void enterYourPostcode()
    {
        // user to enter postcode using sendkeys method
        driver.findElement(_postcode).sendKeys(loadProp.getProperty("Postcode"));

        // explicit wait method to wait until the visibility of element
        wait.until(ExpectedConditions.visibilityOfElementLocated(_selectAddress));

        // scroll up method as after entering postcode it was scrolling down a lot
        jse.executeScript("window.scrollBy(0,-600)", "");


        // scroll to view method to reach the element inside address container
        JavascriptExecutor je = (JavascriptExecutor) driver;
        WebElement element = driver.findElement(By.id("item-address-result-5"));
        je.executeScript("arguments[0].scrollIntoView(true);", element);

        // explicit wait method to wait until visibility of the element
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("item-address-result-5")));

        // user to click on the address to select the address
        driver.findElement(By.id("item-address-result-5")).click();
    }

    public void enterContactNumber()
    {
        // user to enter contact number using sendkeys method
        driver.findElement(_contactNumber).sendKeys(loadProp.getProperty("ContactNumber"));
    }

    public void clickToselectWeddingDate()
    {
        // scroll down method to reach the element
        jse.executeScript("window.scrollBy(0,100)", "");

        // explicit wait method to wait until visibility of the element
        wait.until(ExpectedConditions.visibilityOfElementLocated(_clickDayMonthYear));

        // user to click on 'textbox of day month year'
        driver.findElement(_clickDayMonthYear).click();

        // isDisplayed method to to display the month
        driver.findElement(By.xpath("//*[contains(text(),'August 2019')]")).isDisplayed();

        // user to click on the date of the wedding
        driver.findElement(_selectWeddingDate).click();
    }

    public void enterGuestsNumber()
    {
        // user enters number of guests using sendkeys method
        driver.findElement(_enterNumberOfGuests).sendKeys(loadProp.getProperty("Numberofguests"));
    }
    public void enterEmailAddress()
    {
        // scroll down method to reach the element
        jse.executeScript("window.scrollBy(0,1500)", "");

        // user to enter email address which is done using sendkeys method
        driver.findElement(_enterEmail).sendKeys(("1983dhara") + timestamp + ("@gmail.com"));
    }

    public void enterPassword()
    {
        // user to enter password which is done using sendkeys method
        driver.findElement(_password).sendKeys(loadProp.getProperty("Password"));

    }

    public void enterConfirmPassword()
    {
        // user to enter confirm password which is done using sendkeys method
        driver.findElement(_confirmPassword).sendKeys(loadProp.getProperty("ConfirmPassword"));
    }

    public void clickSubmitButton()
    {
        // user clicks on submit button to submit the form
        driver.findElement(_clickSubmitButton).click();

        // implicit wait to wait until the form is submitted
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }










}
