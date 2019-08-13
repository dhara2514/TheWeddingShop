package com.Weddingshop.Test;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import javax.rmi.CORBA.Util;

public class BrowserSelector extends Utils
{
    // LoadProp object to get the browser from testconfig properties
    LoadProp loadProp = new LoadProp();

    public void setUpBrowser()
    {
        String browser = loadProp.getProperty("browser");

        if(browser.equalsIgnoreCase("chrome"))
        {
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\BrowserDrivers\\chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            options.addArguments("_incognito");
            driver = new ChromeDriver(options);
            driver.manage().window().fullscreen();
        }

        else
        {
            System.out.println("Browser not found");
        }
    }
}
