// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Swag Labs/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   // Click the get started link.
//   await page.locator('id=user-name').fill('standard_user');
//   await page.locator('[placeholder="Passwor"]').fill('secret_sauce');
//   await page.locator('.submit-button').click();

//   // Expects page to have a heading with the name of Installation.
//   //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('google go', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Google');
});

test('voice button click', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();
  await page.locator('svg.goxjub').click()
  await page.pause

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

