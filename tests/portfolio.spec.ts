
import { expect, test } from "@playwright/test";

const externalLinks = {
  github: "https://github.com/Badis-M",
  linkedin: "https://www.linkedin.com/in/merakchi",
  cv: "/Badis-Merakchi-CV.pdf",
  featuredRepository: "https://github.com/Badis-M/aws-eks-platform-golden-path",
  awsEphemeralWebPlatform: "https://github.com/Badis-M/aws-ephemeral-web-platform",
  awsEksLandingZone: "https://github.com/Badis-M/aws-eks-landing-zone",
  pokedexLive: "https://pokedex.badismerakchi.com/",
  pokedexRepository: "https://github.com/Badis-M/pokedex-devops-deployment-lab",
  kubernetesVisualOpsLive: "https://k8s.badismerakchi.com",
  kubernetesVisualOpsRepository: "https://github.com/Badis-M/k8s-visual-ops-lab",
};

test.describe("Portfolio", () => {
  test("English homepage loads and main buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Badis Merakchi/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Cloud & DevOps Engineer");

    await expect(page.getByRole("link", { name: "Download CV" })).toHaveAttribute("href", externalLinks.cv);
    await expect(page.getByRole("link", { name: "GitHub ↗" }).first()).toHaveAttribute("href", externalLinks.github);
    await expect(page.getByRole("link", { name: "LinkedIn ↗" }).first()).toHaveAttribute("href", externalLinks.linkedin);
  });

  test("French page loads through language switch and main buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "FR" }).click();

    await expect(page).toHaveURL(/\/fr\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Cloud & DevOps Engineer spécialisé");

    await expect(page.getByRole("link", { name: "Télécharger le CV" })).toHaveAttribute("href", externalLinks.cv);
    await expect(page.getByRole("link", { name: "GitHub ↗" }).first()).toHaveAttribute("href", externalLinks.github);
    await expect(page.getByRole("link", { name: "LinkedIn ↗" }).first()).toHaveAttribute("href", externalLinks.linkedin);
  });

  test("English page section navigation targets the expected anchors", async ({ page }) => {
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

  test("French page section navigation targets the expected anchors", async ({ page }) => {
    await page.goto("/fr");

    await page.getByRole("link", { name: "Compétences" }).click();
    await expect(page).toHaveURL(/#skills/);

    await page.getByRole("link", { name: "Expérience" }).click();
    await expect(page).toHaveURL(/#experience/);

    await page.getByRole("link", { name: "Projets" }).click();
    await expect(page).toHaveURL(/#projects/);

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/#contact/);
  });

  test("English project buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(`a[href="${externalLinks.featuredRepository}"]`)).toHaveText("View featured repository →");
    await expect(page.locator(`a[href="${externalLinks.awsEphemeralWebPlatform}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.awsEksLandingZone}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.pokedexLive}"]`)).toHaveText("View live site →");
    await expect(page.locator(`a[href="${externalLinks.pokedexRepository}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsLive}"]`)).toHaveText("View live site →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsRepository}"]`)).toHaveText("View repository →");
  });

  test("French project buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/fr");

    await expect(page.locator(`a[href="${externalLinks.featuredRepository}"]`)).toHaveText("Voir le repository principal →");
    await expect(page.locator(`a[href="${externalLinks.awsEphemeralWebPlatform}"]`)).toHaveText("Voir le repository →");
    await expect(page.locator(`a[href="${externalLinks.awsEksLandingZone}"]`)).toHaveText("Voir le repository →");
    await expect(page.locator(`a[href="${externalLinks.pokedexLive}"]`)).toHaveText("Voir le site live →");
    await expect(page.locator(`a[href="${externalLinks.pokedexRepository}"]`)).toHaveText("Voir le repository →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsLive}"]`)).toHaveText("Voir le site live →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsRepository}"]`)).toHaveText("Voir le repository →");
  });

  test("CV PDF is served", async ({ request }) => {
    const response = await request.get(externalLinks.cv);

    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });
});
