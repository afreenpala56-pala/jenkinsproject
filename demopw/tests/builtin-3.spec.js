import { test, expect } from '@playwright/test';

//page.getByTitle() to locate an element by its title attribute.

test('Verify page title', async ({ page }) => {
    await page.goto('https://playwrightlabs.com/practice/login.html');

    await expect(page).toHaveTitle('Practice Login — Playwright Labs');
});