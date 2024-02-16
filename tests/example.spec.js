// @ts-check
import { test, expect } from '@playwright/test'

const url = 'http://127.0.0.1:5173/'

test('has title', async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Templator/);
});
