
import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../pages/Registration.ts";
import { UserModel } from "../userModel/person.model.ts";
import { generateRandomNumber,saveJSONData,getLatestUser } from "../utils/Utils";



test.describe.serial("Registration", async () => {

    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.afterAll(async () => {
        await page.close();
    })

    test("Create New User", async () => {
        await page.goto("https://dailyfinance.roadtocareer.net/");

        const person: UserModel = {
            fName: faker.person.firstName(),
            lName: faker.person.lastName(),
            email: `testuserdf+${generateRandomNumber(100, 999)}@gmail.com`,
            password: "1234",
            phoneNumber: `01700${generateRandomNumber(100000, 999999)}`,
            Address: faker.location.streetAddress()
        }

        const registerUser = new RegistrationPage(page);
        await registerUser.RegistrationPage(person);

        saveJSONData(person, "./resources/userData.json");
 
    })


    test("Login", async () =>{
        const loginpage= new loginpage(page)
        const userData=getLatestUser("./resources/users.json")
        await loginpage.login(userData.email,userData.password)

    })




})