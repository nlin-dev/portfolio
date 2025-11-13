import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test('should render projects grid at desktop breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/projects');

    // Verify page header
    await expect(page.locator('h1')).toContainText('Projects');

    // Verify projects are visible
    const projectCards = page.locator('article');
    await expect(projectCards).toHaveCount(3);

    // Verify grid layout (2 columns)
    const grid = page.locator('div.grid');
    await expect(grid).toHaveClass(/md:grid-cols-2/);
  });

  test('should render projects grid at tablet breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/projects');

    // Verify projects are visible
    const projectCards = page.locator('article');
    await expect(projectCards).toHaveCount(3);

    // Verify grid switches to 2 columns
    const grid = page.locator('div.grid');
    await expect(grid).toHaveClass(/md:grid-cols-2/);
  });

  test('should render projects grid at phone breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/projects');

    // Verify projects are visible
    const projectCards = page.locator('article');
    await expect(projectCards).toHaveCount(3);

    // Verify single column layout
    const grid = page.locator('div.grid');
    await expect(grid).toHaveClass(/grid-cols-1/);
  });

  test('should display placeholder for upcoming project', async ({ page }) => {
    await page.goto('/projects');

    // Find placeholder card (diagonal stripe pattern)
    const placeholderCard = page.locator('article').filter({
      has: page.locator('div[aria-label*="Placeholder"]')
    });

    await expect(placeholderCard).toBeVisible();
  });

  test('project cards should have hover effect', async ({ page }) => {
    await page.goto('/projects');

    const firstCard = page.locator('article').first().locator('div').first();

    // Get initial transform
    const initialTransform = await firstCard.evaluate(el =>
      window.getComputedStyle(el).transform
    );

    // Hover over card
    await firstCard.hover();

    // Wait for transition
    await page.waitForTimeout(400);

    // Get transform after hover
    const hoverTransform = await firstCard.evaluate(el =>
      window.getComputedStyle(el).transform
    );

    // Verify transform changed (card lifted)
    expect(hoverTransform).not.toBe(initialTransform);
  });

  test('projects page should have correct metadata', async ({ page }) => {
    await page.goto('/projects');

    // Verify title
    await expect(page).toHaveTitle(/Projects.*Nicholas Lin/);

    // Verify heading structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('should maintain accessibility structure', async ({ page }) => {
    await page.goto('/projects');

    // Verify semantic HTML
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Verify article elements for project cards
    const articles = page.locator('article');
    await expect(articles).toHaveCount(3);

    // Verify headings
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
  });
});
