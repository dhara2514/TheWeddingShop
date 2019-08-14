package PageObject;

import com.Weddingshop.Test.LoadProp;
import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class AccountLoginPage extends Utils
{
    LoadProp loadProp = new LoadProp();

  private By _notRegisteredYetButton = By.xpath("//*[contains(text(),'Not registered yet?')]");
  private By _loginEmailAddress = By.id("userName");
  private By _loginPassword = By.cssSelector("[name='password']");
  private By _login = By.id("btn-login");



  public void verifyAccountLoginPageUrl()
  {
      //Assert of Url to verify user is on AccountLogin page
     Utils.assertURL("https://www.weddingshop.com/account-login");

  }

  public void clickOnNotRegisteredYetButton()
  {
      // scroll down method to reach an element
      JavascriptExecutor jse = (JavascriptExecutor) driver;
      jse.executeScript("window.scrollBy(0,300)", "");

      try {
          Thread.sleep(5000);
      } catch (InterruptedException e) {
          e.printStackTrace();
      }

      // exlpicit wait method to wait until the visibility of element
      WebDriverWait wait = new WebDriverWait(driver,5);
      wait.until(ExpectedConditions.visibilityOfElementLocated(_notRegisteredYetButton));

      // user to click on 'not registered yet'
      driver.findElement(_notRegisteredYetButton).click();
  }

  public void inputEmailAddress()
  {
      Utils.waitForElementDisplay(_loginEmailAddress,10);
      Utils.enterText(_loginEmailAddress,loadProp.getProperty("Email"));
  }

  public void inputPassword()
  {
      Utils.enterText(_loginPassword,loadProp.getProperty("Password"));
  }

  public void clickOnLogin()
  {
      Utils.clickElementBy(_login);
      Utils.implicitWait(10);
  }
}
