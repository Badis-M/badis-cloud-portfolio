import { expect, test } from "@playwright/test";

const externalLinks = {
  site: "https://portfolio.badismerakchi.com",
  github: "https://github.com/Badis-M",
  linkedin: "https://www.linkedin.com/in/merakchi",
  consulting: "https://consulting.badismerakchi.com/",
  cv: "/Badis_CV_Cloud_DevOps_Engineer.pdf",
  featuredRepository: "https://github.com/Badis-M/aws-eks-platform-golden-path",
  azureMigration: "https://github.com/Badis-M/azure-legacy-app-migration-lab",
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

  test("bilingual pages expose canonical, language, and social metadata", async ({ page }) => {
    for (const languagePage of [
      {
        path: "/",
        canonical: `${externalLinks.site}/`,
        locale: "en_CH",
        title: "Badis Merakchi | Cloud & DevOps Engineer in Geneva",
      },
      {
        path: "/fr/",
        canonical: `${externalLinks.site}/fr/`,
        locale: "fr_CH",
        title: "Badis Merakchi | Ingénieur Cloud & DevOps à Genève",
      },
    ]) {
      await page.goto(languagePage.path);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", languagePage.canonical);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", `${externalLinks.site}/`);
      await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute("href", `${externalLinks.site}/fr/`);
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute("href", `${externalLinks.site}/`);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", languagePage.title);
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", languagePage.canonical);
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", languagePage.locale);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", `${externalLinks.site}/og-portfolio.png`);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");

      const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
      expect(schema["@type"]).toBe("Person");
      expect(schema.name).toBe("Badis Merakchi");
      expect(schema.sameAs).toEqual([externalLinks.github, externalLinks.linkedin, externalLinks.consulting]);
    }
  });

  test("English page presents professional delivery in one section", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Oracle — Senior Cloud Consultant" })).toBeVisible();
    await expect(page.getByText("April 2022 – December 2025", { exact: false })).toBeVisible();
    await expect(page.locator(".featured-client-engagement")).toContainText("Avaloq");
    const clientEngagements = page.locator(".client-engagement-grid");
    for (const client of ["Rothschild", "Swissquote", "Corner Bank", "LEMO", "IEC"]) {
      await expect(clientEngagements).toContainText(client);
    }

    const professionalDelivery = page.locator("#skills");
    await expect(professionalDelivery.getByRole("heading", { name: "Professional delivery" })).toBeVisible();
    await expect(professionalDelivery).toContainText("Kubernetes, Amazon EKS, Azure AKS");
    await expect(professionalDelivery).toContainText("Prometheus, Grafana, ServiceMonitor");
    await expect(page.locator("footer")).toContainText("Deployed on Cloudflare Workers");
  });

  test("French page presents professional delivery in one section", async ({ page }) => {
    await page.goto("/fr");

    await expect(page.getByRole("heading", { name: "Oracle — Senior Cloud Consultant" })).toBeVisible();
    await expect(page.getByText("Avril 2022 – Décembre 2025", { exact: false })).toBeVisible();
    await expect(page.locator(".featured-client-engagement")).toContainText("Avaloq");
    const clientEngagements = page.locator(".client-engagement-grid");
    for (const client of ["Rothschild", "Swissquote", "Corner Bank", "LEMO", "IEC"]) {
      await expect(clientEngagements).toContainText(client);
    }

    const professionalDelivery = page.locator("#skills");
    await expect(professionalDelivery.getByRole("heading", { name: "Expérience professionnelle" })).toBeVisible();
    await expect(professionalDelivery).toContainText("Kubernetes, Amazon EKS, Azure AKS");
    await expect(professionalDelivery).toContainText("Prometheus, Grafana, ServiceMonitor");
    await expect(page.locator("footer")).toContainText("Déployé sur Cloudflare Workers");
  });

  test("bilingual pages keep the new proof sections within the mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const path of ["/", "/fr"]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { name: "Oracle — Senior Cloud Consultant" })).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );

      expect(hasHorizontalOverflow).toBeFalsy();
    }
  });

  test("English page section navigation targets the expected anchors", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.goto("/");

    await page.getByRole("link", { name: "Skills" }).click();
    await expect(page).toHaveURL(/#skills/);

    await page.getByRole("link", { name: "Experience" }).click();
    await expect(page).toHaveURL(/#experience/);

    await page.getByRole("link", { name: "Projects", exact: true }).click();
    await expect(page).toHaveURL(/#projects/);

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/#contact/);
  });

  test("French page section navigation targets the expected anchors", async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.goto("/fr");

    await page.getByRole("link", { name: "Compétences" }).click();
    await expect(page).toHaveURL(/#skills/);

    await page.getByRole("link", { name: "Expérience" }).click();
    await expect(page).toHaveURL(/#experience/);

    await page.getByRole("link", { name: "Projets", exact: true }).click();
    await expect(page).toHaveURL(/#projects/);

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/#contact/);
  });

  test("English project buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(`a[href="${externalLinks.featuredRepository}"]`)).toHaveText("View featured repository →");
    await expect(page.locator(`a[href="${externalLinks.azureMigration}"]`)).toHaveText("View featured repository →");
    await expect(page.locator(`a[href="${externalLinks.awsEphemeralWebPlatform}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.awsEksLandingZone}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.pokedexLive}"]`)).toHaveText("View live site →");
    await expect(page.locator(`a[href="${externalLinks.pokedexRepository}"]`)).toHaveText("View repository →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsLive}"]`)).toHaveText("View live site →");
    await expect(page.locator(`a[href="${externalLinks.kubernetesVisualOpsRepository}"]`)).toHaveText("View repository →");
  });

  test("French project buttons point to the expected URLs", async ({ page }) => {
    await page.goto("/fr");

    await expect(page.locator(`a[href="${externalLinks.featuredRepository}"]`)).toHaveText("Voir le repository →");
    await expect(page.locator(`a[href="${externalLinks.azureMigration}"]`)).toHaveText("Voir le repository →");
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

  test("SEO discovery files and social image are served", async ({ request }) => {
    const [robots, sitemap, socialImage] = await Promise.all([
      request.get("/robots.txt"),
      request.get("/sitemap.xml"),
      request.get("/og-portfolio.png"),
    ]);

    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain(`Sitemap: ${externalLinks.site}/sitemap.xml`);
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain(`${externalLinks.site}/fr/`);
    expect(socialImage.ok()).toBeTruthy();
    expect(socialImage.headers()["content-type"]).toContain("image/png");
  });
});
