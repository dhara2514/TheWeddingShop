package com.Weddingshop.Test;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser()
    {
        browserSelector.setUpBrowser();

        driver.get("https://tws-uk-qa.azurewebsites.net");
    }

    @After
    public void closeBrowser(Scenario scenario)
    {
        if(scenario.isFailed())
        {
            Utils.screenShotCucumber(scenario);
        }

        driver.quit();

    }
}
