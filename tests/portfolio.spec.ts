import { expect, test } from "@playwright/test";

test.describe("Portfolio", () => {
  test("English homepage loads and main buttons are present", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Badis Merakchi/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Cloud & DevOps Engineer");

    await expect(page.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/Badis-Merakchi-CV.pdf"
    );

    await expect(page.getByRole("link", { name: "GitHub ↗" }).first()).toHaveAttribute(
      "href",
      "https://github.com/Badis-M"
    );

    await expect(page.getByRole("link", { name: "LinkedIn ↗" }).first()).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/merakchi"
    );
  });

  test("French page loads through language switch", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "FR" }).click();

    await expect(page).toHaveURL(/\/fr\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Cloud & DevOps Engineer spécialisé"
    );

    await expect(page.getByRole("link", { name: "Télécharger le CV" })).toHaveAttribute(
      "href",
      "/Badis-Merakchi-CV.pdf"
    );
  });

  test("English page section navigation works", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Skills" }).click();
    await expect(page).toHaveURL(/#skills/);

    await page.getByRole("link", { name: "Experience" }).click();
    await expect(page).toHaveURL(/#experience/);

    await page.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/#projects/);

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/#contact/);
  });

  test("Project links are rendered", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "View featured repository →" })).toHaveAttribute(
      "href",
      "https://github.com/Badis-M/aws-eks-platform-golden-path"
    );

    await expect(page.getByRole("link", { name: "View live site →" })).toHaveCount(2);
    await expect(page.getByRole("link", { name: "View repository →" })).toHaveCount(4);
  });

  test("CV PDF is served", async ({ request }) => {
    const response = await request.get("/Badis-Merakchi-CV.pdf");

    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });
});
