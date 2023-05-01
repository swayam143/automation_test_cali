const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000"); // Replace with your React app's URL

    // Wait for the "1" button to be loaded before proceeding
    await driver.wait(
      until.elementLocated(By.xpath('//button[contains(text(), "1")]')),
      5000
    );

    // Test case 1: Test simple addition
    await driver
      .findElement(By.xpath('//button[contains(text(), "1")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "+")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "2")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "=")]'))
      .click();

    let result = await driver
      .findElement(By.css('input[data-testid="result-input"]'))
      .getAttribute("value");
    console.assert(result === "3", "Test case 1 failed");

    // Test case 2: Test simple subtraction
    await driver
      .findElement(By.xpath('//button[contains(text(), "AC")]'))
      .click();

    await driver
      .findElement(By.xpath('//button[contains(text(), "5")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "-")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "3")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "=")]'))
      .click();

    result = await driver
      .findElement(By.css('input[data-testid="result-input"]'))
      .getAttribute("value");
    console.assert(result === "2", "Test case 2 failed");

    // Test case 3: Test simple multiplication
    await driver
      .findElement(By.xpath('//button[contains(text(), "AC")]'))
      .click();

    await driver
      .findElement(By.xpath('//button[contains(text(), "4")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "x")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "3")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "=")]'))
      .click();

    result = await driver
      .findElement(By.css('input[data-testid="result-input"]'))
      .getAttribute("value");
    console.assert(result === "12", "Test case 3 failed");

    // Test case 4: Test simple division
    await driver
      .findElement(By.xpath('//button[contains(text(), "AC")]'))
      .click();

    await driver
      .findElement(By.xpath('//button[contains(text(), "9")]'))
      .click();
    await driver.findElement(By.css('button[value="/"]')).click(); // Updated selector for the division button
    await driver
      .findElement(By.xpath('//button[contains(text(), "3")]'))
      .click();
    await driver
      .findElement(By.xpath('//button[contains(text(), "=")]'))
      .click();

    result = await driver
      .findElement(By.css('input[data-testid="result-input"]'))
      .getAttribute("value");
    console.assert(result === "3", "Test case 4 failed");
  } finally {
    await driver.quit();
  }
})();
