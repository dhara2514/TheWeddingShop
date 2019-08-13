package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.net.URL;

public class ThankYouPage extends Utils
{
    private By _thankYouMessage = By.id("thanks-for-registation");


    public void assertRegisterationMessage()
    {
        // verifying user is registered successfully by comparing expected=actual
        String actual = driver.findElement(_thankYouMessage).getText().toLowerCase();
        Assert.assertEquals("start building your list", actual);
        System.out.println("Expected Result : " + "start building your list");
        System.out.println("Actual Result : " + actual);

    }
}