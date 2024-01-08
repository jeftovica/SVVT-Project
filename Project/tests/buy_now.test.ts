import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../Core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import {HomePage} from "../Core/page-objects/home-page";
import {LoginPage} from "../Core/page-objects/login-page";
import {RegisteredHomePage} from "../Core/page-objects/registered-home-page";
import {ChosenItemPage} from "../Core/page-objects/chosen-item-page";
import {SearchResultPage} from "../Core/page-objects/search-result-page";
import {CheckoutPage} from "../Core/page-objects/checkout-page";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let registeredHomePage: RegisteredHomePage;
let chosenItemPage: ChosenItemPage;
let searchResultPage: SearchResultPage;
let checkoutPage: CheckoutPage;



beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    registeredHomePage = new RegisteredHomePage(driver);
    chosenItemPage = new ChosenItemPage(driver);
    searchResultPage = new SearchResultPage(driver);
    checkoutPage = new CheckoutPage(driver);

},10000);


test("buy test", async () => {
    await homePage.clickCloseModalButton();
    await homePage.clickSignInButton();
    await loginPage.provideEmail();
    await loginPage.providePassword();
    await loginPage.clickLoginButton();
    await driver.sleep(20000); // ToDo: Delete
    await driver.get(testData.url.home_page);
    await registeredHomePage.clickToysCategory();
    await searchResultPage.clickOnToy();
    await chosenItemPage.clickBuyNow();
    await checkoutPage.inputName();
    await checkoutPage.inputSurname();
    await checkoutPage.inputPhoneNumber();
    await checkoutPage.inputAddress1();
    await checkoutPage.inputAddress2();
    await checkoutPage.clickStateField();
    await checkoutPage.clickStatePicker();
    await checkoutPage.inputCity();
    await checkoutPage.inputZipCode();
    await checkoutPage.clickSaveButton();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.clickPaymentMethod();
    await checkoutPage.inputCardNumber();
    await checkoutPage.inputExpirationDate();
    await checkoutPage.inputSecurityCode();
    //await checkoutPage.clickPayNow();




},100000);


afterAll(async () => {
    await quitDriver(driver);
},10000);