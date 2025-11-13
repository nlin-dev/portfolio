import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all pages without 404', async ({ page }) => {
    const routes = ['/', '/projects', '/blog', '/powerlifting'];

    for (const route of routes) {
      await page.goto(route);
      await expect(page).not.toHaveTitle(/404/);
      await expect(page.locator('body')).not.toContainText('404');
    }
  });

  test('should highlight active nav item on Home', async ({ page }) => {
    await page.goto('/');
    const homeLink = page.locator('a[href="/"][aria-current="page"]');
    await expect(homeLink).toBeVisible();
  });

  test('should highlight active nav item on Projects', async ({ page }) => {
    await page.goto('/projects');
    const projectsLink = page.locator('a[href="/projects"][aria-current="page"]');
    await expect(projectsLink).toBeVisible();
  });

  test('should highlight active nav item on Blog', async ({ page }) => {
    await page.goto('/blog');
    const blogLink = page.locator('a[href="/blog"][aria-current="page"]');
    await expect(blogLink).toBeVisible();
  });

  test('should highlight active nav item on Powerlifting', async ({ page }) => {
    await page.goto('/powerlifting');
    const powerliftingLink = page.locator('a[href="/powerlifting"][aria-current="page"]');
    await expect(powerliftingLink).toBeVisible();
  });

  test('mobile menu should open and close', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();
    await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();

    // Close menu
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    await expect(page.locator('nav[aria-label="Main navigation"]')).not.toBeVisible();
  });

  test('should navigate via mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open menu
    await page.locator('button[aria-label="Open menu"]').click();

    // Click Projects link
    await page.locator('nav[aria-label="Main navigation"] a[href="/projects"]').click();

    // Verify navigation
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('keyboard navigation should work', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation items
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Verify focus is visible
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
