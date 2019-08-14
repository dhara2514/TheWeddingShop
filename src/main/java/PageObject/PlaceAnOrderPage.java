package PageObject;

import com.Weddingshop.Test.Utils;
import org.openqa.selenium.By;

public class PlaceAnOrderPage extends Utils
{
    private By _placeAnOrderContainer = By.cssSelector("div.main-content > div > div > div > h2");
    private By _quantityEllinghamVase = By.xpath("(//*[@class='form-field__input form-field__input--select  form-control'])[1]");
    private By _addToOrderButtonEllinghamVase = By.xpath("(//*[@class='item--order-button desktop--hide btn btn-default'])[1]");
    private By _quantityTraditionalKettle = By.xpath("(//*[@class='form-field__input form-field__input--select  form-control'])[2]");
    private By _addToOrderTraditionalKettle = By.xpath("(//*[@class='item--order-button desktop--hide btn btn-default'])[2]");
    private By _viewBasketButton = By.xpath("(//*[@href='/manage/order-basket'])[2]");


    public void verifyPlaceAnOrderPage()
    {
        // explicit wait to wait for place an order container to wait
        Utils.implicitWait(5);

        // verifying user is on place an order page
        Utils.assertTextMessage("PLACE AN ORDER",_placeAnOrderContainer);
    }

    public void clickOnQuantityOfProduct()
    {
        // scroll down method to reach vase
        Utils.scrollUpORDown(300);

        // dropdown method to select quantity of vase
        Utils.selectByVisibleText(_quantityEllinghamVase,"2");

        // scroll down method to reach kettle
        Utils.scrollUpORDown(300);

        // dropdown method to select quantity of kettle
        Utils.selectByVisibleText(_quantityTraditionalKettle,"2");

    }

    public void clickOnAddToOrder()
    {
        // scroll up method to reach add vase to order
        Utils.scrollUpORDown(-100);

        // user clicks on add to order
        Utils.clickElementBy(_addToOrderButtonEllinghamVase);

        // scroll down method to reach add kettle to order
        Utils.scrollUpORDown(300);

        // Wait for Traditional Kettle to be displayed as the test becomes flaky otherwise
        Utils.waitForElementDisplay(_addToOrderTraditionalKettle,5);

        // user clicks on add to order
        Utils.clickElementBy(_addToOrderTraditionalKettle);
    }
    public void clickOnViewBasketButton()
    {
        // scroll up method to reach view basket button
        Utils.scrollUpORDown(-400);


        // explicit wait to wait for view basket button to be visible
        Utils.waitForElementDisplay(_viewBasketButton,5);

        // user clicks on view basket
        Utils.clickElementBy(_viewBasketButton);
    }
}
