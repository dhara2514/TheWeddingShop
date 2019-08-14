package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DashboardPage extends Utils
{

    private By _welcomeText = By.cssSelector("div.left-sidebar__profile-img > p");
    private By _kitchenCategory = By.cssSelector("#main-dropdown-menu-2");


    public void verifyDashboardPage()
    {
        // verifying DashboardPage page
        Utils.assertTextMessage("Welcome back"+"\nDhara & Dhara",_welcomeText);
    }

   public void clickOnKitchenCategoryFromDashboard()
   {
       // user clicks on kitchen category (using reusable method from Utils)
       Utils.clickElementBy(_kitchenCategory);
   }
}
