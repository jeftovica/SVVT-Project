import { Builder, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";


let driver;


export async function createDriver(url : string) {
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--disable-blink-features=AutomationControlled");
    chromeOptions.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    driver = await new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
    await driver.get(url);
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 15000 });
    return driver;
}
export async function quitDriver(driver: WebDriver) {
    await driver.quit();
}
