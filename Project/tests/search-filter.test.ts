
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../Core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import {HomePage} from "../Core/page-objects/home-page";
import {LoginPage} from "../Core/page-objects/login-page";
import {RegisteredHomePage} from "../Core/page-objects/registered-home-page";
import {SearchResultPage} from "../Core/page-objects/search-result-page";
import {ProfilePage} from "../Core/page-objects/profile-page";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let registeredHomePage: RegisteredHomePage;
let searchResultPage: SearchResultPage;
let profilePage: ProfilePage;



beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    registeredHomePage = new RegisteredHomePage(driver);
    searchResultPage= new SearchResultPage(driver);
    profilePage = new ProfilePage(driver);

},10000);


test("filter search", async () => {
    await homePage.clickCloseModalButton();
    await homePage.clickSignInButton();
    await loginPage.provideEmail();
    await loginPage.providePassword();
    await loginPage.clickLoginButton();
    await driver.sleep(20000); // ToDo: Delete
    await profilePage.clickLogoButton();
    await registeredHomePage.enterSearchField();
    await registeredHomePage.clickSearchButton();
    await searchResultPage.enterMinPriceField();
    await searchResultPage.enterMaxPriceField();
    await searchResultPage.clickOKButton();
    await registeredHomePage.signOut();




},80000);


afterAll(async () => {
    await quitDriver(driver);
},10000);
