export const portfolioLinks = {
  cv: "/Badis-Merakchi-CV.pdf",
  github: "https://github.com/Badis-M",
  linkedin: "https://www.linkedin.com/in/merakchi",
  email: "badis.merakchi@gmail.com",
};

const sharedClientEnvironments = ["Rothschild", "Corner Bank", "Avaloq", "ISO", "LEMO", "CHUV", "IEC", "Keytrade"] as const;

const sharedStacks = {
  featured: [
    "AWS",
    "EKS",
    "Terraform",
    "Helm",
    "Docker",
    "FastAPI",
    "GitHub Actions",
    "IAM/OIDC",
    "Prometheus",
    "Grafana",
  ],
  ephemeralWeb: ["AWS", "Terraform", "Ansible", "Docker", "SSM", "EC2", "VPC", "IAM", "Nginx", "GitHub Actions"],
  eksLandingZone: ["AWS", "Amazon EKS", "Terraform", "Kubernetes", "Helm", "Metrics Server", "Amazon ECR", "AWS Load Balancer"],
  pokedex: ["Node.js", "Docker", "Terraform", "Ansible", "AWS", "Caddy", "OVH DNS"],
  k8sVisualOps: ["Kubernetes", "kind", "Docker", "FastAPI", "kubectl", "Linux", "Networking"],
} as const;

const sharedProjectLinks = {
  featured: "https://github.com/Badis-M/aws-eks-platform-golden-path",
  ephemeralWeb: "https://github.com/Badis-M/aws-ephemeral-web-platform",
  eksLandingZone: "https://github.com/Badis-M/aws-eks-landing-zone",
  pokedex: "https://github.com/Badis-M/pokedex-devops-deployment-lab",
  pokedexLive: "https://pokedex.badismerakchi.com/",
  k8sVisualOps: "https://github.com/Badis-M/k8s-visual-ops-lab",
  k8sVisualOpsLive: "https://k8s.badismerakchi.com",
} as const;

export const portfolioContent = {
  en: {
    lang: "en",
    title: "Badis Merakchi | Cloud & DevOps Engineer",
    description:
      "Badis Merakchi — Cloud & DevOps Engineer focused on automation, Infrastructure as Code, cloud security, and cost-aware infrastructure delivery.",

    nav: {
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },

    languageLabel: "Language switcher",

    hero: {
      status: "Geneva - French Switzerland · Cloud / DevOps / Infrastructure",
      title: "Cloud & DevOps Engineer building secure, automated cloud platforms.",
      lead:
        "Consultant focused on Infrastructure as Code, cloud security, CI/CD, automation, and cost-aware infrastructure delivery across OCI, AWS, and Azure.",
      cvButton: "Download CV",
      availability: "Currently Available",
      metrics: [
        ["Role", "Cloud & DevOps Engineer"],
        ["Focus", "Automation · IaC · Security · FinOps"],
        ["Cloud", "OCI · AWS · Azure"],
        ["Location", "Geneva area"],
      ],
    },

    skillsSection: {
      eyebrow: "Technical scope",
      title: "Core skills",
    },

    experienceSection: {
      eyebrow: "Experience",
      title: "Cloud consulting across multiple client environments",
      oracleLocation: "Geneva, Switzerland",
      oracleDescription:
        "Cloud consulting and infrastructure delivery across multiple Swiss client environments, including banking, financial services, industrial, and data-oriented contexts. Work focused on cloud infrastructure, Infrastructure as Code with Terraform, automation, DevOps practices, FinOps, and operational support across OCI and multi-cloud environments, including AWS exposure.",
      clientsTitle: "Selected client environments",
      missionsTitle: "Delivery areas",
    },

    projectsSection: {
      eyebrow: "Personal projects",
      title: "Hands-on Cloud & DevOps projects built to validate real infrastructure patterns",
      featuredLabel: "Featured project",
      featuredType: "Platform Engineering Lab",
      scopeTitle: "Project scope",
      stackTitle: "Stack",
      featuredRepositoryLabel: "View featured repository →",
      otherEyebrow: "Other personal projects",
      otherTitle: "Additional labs covering AWS automation, observability, and application delivery",
      liveSiteLabel: "View live site →",
      repositoryLabel: "View repository →",
    },

    contactSection: {
      eyebrow: "Contact",
      title: "Let’s discuss Cloud, DevOps, and infrastructure delivery.",
      intro:
        "Available for Cloud & DevOps engineering roles, consulting opportunities, and infrastructure automation projects around Geneva and Switzerland.",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Geneva area",
      availabilityLabel: "Availability",
      availabilityValue: "Open to Cloud & DevOps opportunities",
      profilesLabel: "Profiles",
    },

    footer: "© 2026 Badis Merakchi · Built with Astro · Deployed on GitHub Pages",

    skills: [
      ["Cloud Platforms", "OCI, AWS, Azure"],
      ["Infrastructure as Code", "Terraform"],
      ["Automation", "Bash, GitHub Actions, CI/CD"],
      ["Containers", "Docker, Kubernetes, EKS, Helm"],
      ["Provisioning & Configuration", "Ansible, server provisioning, service configuration"],
      ["Security", "IAM, SSO, cloud governance"],
      ["Networking", "VPC, DNS, HTTPS, secure connectivity"],
      ["Linux & Systems", "Linux administration, patching, troubleshooting"],
      ["Databases", "MySQL, Oracle ATP, database migration support"],
      ["Data Workflows", "ETL workflows, data handling, data processing"],
      ["Operations", "Monitoring, auditing, incident support"],
      ["Cost Control", "FinOps, cleanup automation, budget alerts"],
      ["Client Delivery", "Workshops, stakeholder support, consulting"],
      ["Developer Tooling", "Git, GitHub, VS Code, CLI workflows"],
      ["Web Delivery", "Reverse proxy, HTTPS, DNS integration"],
    ],

    clientEnvironments: sharedClientEnvironments,

    missionAreas: [
      "Cloud infrastructure delivery",
      "Secure file transfer environments",
      "Containerized environments",
      "Kubernetes and Helm-based deployments",
      "Database migration support",
      "Terraform automation",
      "ETL workflows and data processing",
      "Infrastructure operations",
      "IAM, SSO and governance",
      "Documentation and stakeholder support",
    ],

    additionalExperiences: [
      {
        role: "Engineering School Instructor",
        company: "Epitech",
        description:
          "Teaching and mentoring engineering students through technical projects, practical workshops, and skill development.",
        tags: ["Teaching", "Mentoring", "Workshops", "Technical guidance"],
      },
      {
        role: "Project Manager",
        company: "Operational coordination",
        description:
          "Project coordination experience involving planning, follow-up, stakeholder communication, and delivery support.",
        tags: ["Project coordination", "Planning", "Stakeholders", "Delivery"],
      },
    ],

    featuredProject: {
      title: "AWS EKS Platform Golden Path",
      description:
        "End-to-end Platform Engineering lab for provisioning, deploying, observing, validating, and destroying an ephemeral AWS EKS platform.",
      metrics: [
        ["Platform", "AWS EKS"],
        ["Delivery", "Terraform + Helm"],
        ["Runtime", "FastAPI on Kubernetes"],
        ["Lifecycle", "Deploy · Observe · Destroy"],
      ],
      proof:
        "Demonstrates Terraform, EKS, Helm, Grafana, CI/CD, observability, IAM/OIDC, and FinOps-aware infrastructure lifecycle.",
      highlights: [
        "Terraform-managed AWS infrastructure with S3 remote backend",
        "Amazon EKS, ECR, IAM/OIDC and namespace-scoped RBAC",
        "FastAPI service packaged with Docker and deployed with Helm",
        "GitHub Actions CI/CD with controlled manual deployments",
        "Prometheus and Grafana observability with ServiceMonitor validation",
        "Cost-aware ephemeral infrastructure lifecycle",
      ],
      stack: sharedStacks.featured,
      link: sharedProjectLinks.featured,
    },

    projects: [
      {
        title: "AWS Ephemeral Web Platform",
        description:
          "Ephemeral AWS infrastructure lab for provisioning a secure web platform with Terraform, configuring services with Ansible, operating access through AWS Systems Manager, and validating a cost-aware create/destroy lifecycle.",
        stack: sharedStacks.ephemeralWeb,
        link: sharedProjectLinks.ephemeralWeb,
      },
      {
        title: "AWS EKS Landing Zone",
        description:
          "AWS EKS foundation project built with Terraform to provision a reproducible Kubernetes platform, validate Helm-based tooling, deploy workloads, expose services, and manage cost-aware apply/destroy lifecycle operations.",
        stack: sharedStacks.eksLandingZone,
        link: sharedProjectLinks.eksLandingZone,
      },
      {
        title: "Pokédex DevOps Deployment Lab",
        description:
          "Personal DevOps deployment lab taking a Node.js application through Docker, AWS infrastructure, HTTPS, DNS, Ansible, and CI.",
        stack: sharedStacks.pokedex,
        liveUrl: sharedProjectLinks.pokedexLive,
        link: sharedProjectLinks.pokedex,
      },
      {
        title: "Kubernetes Visual Ops Lab",
        description:
          "Visual Kubernetes learning lab explaining core cluster concepts, the kubectl apply flow, and local deployment workflows with Docker, kind, and FastAPI.",
        stack: sharedStacks.k8sVisualOps,
        liveUrl: sharedProjectLinks.k8sVisualOpsLive,
        link: sharedProjectLinks.k8sVisualOps,
      },
    ],
  },

  fr: {
    lang: "fr",
    title: "Badis Merakchi | Cloud & DevOps Engineer",
    description:
      "Badis Merakchi — Cloud & DevOps Engineer spécialisé en automatisation, Infrastructure as Code, sécurité cloud et delivery d'infrastructures maîtrisées côté coûts.",

    nav: {
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },

    languageLabel: "Sélecteur de langue",

    hero: {
      status: "Disponible en Suisse romande · Cloud / DevOps / Infrastructure",
      title: "Cloud & DevOps Engineer spécialisé dans les plateformes cloud sécurisées et automatisées.",
      lead:
        "Consultant spécialisé en Infrastructure as Code, sécurité cloud, CI/CD, automatisation et delivery d'infrastructures maîtrisées côté coûts sur OCI, AWS et Azure.",
      cvButton: "Télécharger le CV",
      availability: "Disponible actuellement",
      metrics: [
        ["Rôle", "Cloud & DevOps Engineer"],
        ["Focus", "Automation · IaC · Security · FinOps"],
        ["Cloud", "OCI · AWS · Azure"],
        ["Localisation", "Région de Genève"],
      ],
    },

    skillsSection: {
      eyebrow: "Périmètre technique",
      title: "Compétences clés",
    },

    experienceSection: {
      eyebrow: "Expérience",
      title: "Cloud consulting dans plusieurs environnements clients",
      oracleLocation: "Genève, Suisse",
      oracleDescription:
        "Cloud consulting et delivery d'infrastructures auprès de plusieurs environnements clients suisses, notamment dans la banque, les services financiers, l'industrie et les contextes orientés data. Missions axées sur l'infrastructure cloud, l'Infrastructure as Code avec Terraform, l'automatisation, les pratiques DevOps, le FinOps et le support opérationnel sur OCI et des environnements multi-cloud, avec exposition AWS.",
      clientsTitle: "Environnements clients",
      missionsTitle: "Domaines d'intervention",
    },

    projectsSection: {
      eyebrow: "Projets personnels",
      title: "Projets Cloud & DevOps concrets pour valider des patterns d'infrastructure réels",
      featuredLabel: "Projet principal",
      featuredType: "Platform Engineering Lab",
      scopeTitle: "Périmètre du projet",
      stackTitle: "Stack",
      featuredRepositoryLabel: "Voir le repository principal →",
      otherEyebrow: "Autres projets personnels",
      otherTitle: "Labs complémentaires autour de l'automatisation AWS, de l'observability et de l'application delivery",
      liveSiteLabel: "Voir le site live →",
      repositoryLabel: "Voir le repository →",
    },

    contactSection: {
      eyebrow: "Contact",
      title: "Discutons Cloud, DevOps et delivery d'infrastructure.",
      intro:
        "Disponible pour des rôles Cloud & DevOps engineering, des opportunités de consulting et des projets d'automatisation d'infrastructure autour de Genève et en Suisse.",
      emailLabel: "Email",
      locationLabel: "Localisation",
      locationValue: "Région de Genève",
      availabilityLabel: "Disponibilité",
      availabilityValue: "Ouvert aux opportunités Cloud & DevOps",
      profilesLabel: "Profils",
    },

    footer: "© 2026 Badis Merakchi · Built with Astro · Déployé sur GitHub Pages",

    skills: [
      ["Cloud Platforms", "OCI, AWS, Azure"],
      ["Infrastructure as Code", "Terraform"],
      ["Automation", "Bash, GitHub Actions, CI/CD"],
      ["Containers", "Docker, Kubernetes, EKS, Helm"],
      ["Provisioning & Configuration", "Ansible, provisioning serveur, configuration de services"],
      ["Security", "IAM, SSO, gouvernance cloud"],
      ["Networking", "VPC, DNS, HTTPS, connectivité sécurisée"],
      ["Linux & Systems", "Administration Linux, patching, troubleshooting"],
      ["Databases", "MySQL, Oracle ATP, support migration database"],
      ["Data Workflows", "ETL workflows, data handling, data processing"],
      ["Operations", "Monitoring, auditing, support incident"],
      ["Cost Control", "FinOps, cleanup automation, budget alerts"],
      ["Client Delivery", "Workshops, support stakeholders, consulting"],
      ["Developer Tooling", "Git, GitHub, VS Code, CLI workflows"],
      ["Web Delivery", "Reverse proxy, HTTPS, intégration DNS"],
    ],

    clientEnvironments: sharedClientEnvironments,

    missionAreas: [
      "Delivery d'infrastructure cloud",
      "Environnements de secure file transfer",
      "Environnements containerisés",
      "Déploiements Kubernetes et Helm",
      "Support migration database",
      "Automatisation Terraform",
      "ETL workflows et data processing",
      "Infrastructure operations",
      "IAM, SSO et gouvernance",
      "Documentation et support stakeholders",
    ],

    additionalExperiences: [
      {
        role: "Engineering School Instructor",
        company: "Epitech",
        description:
          "Enseignement et accompagnement d'étudiants ingénieurs à travers des projets techniques, des workshops pratiques et du développement de compétences.",
        tags: ["Teaching", "Mentoring", "Workshops", "Technical guidance"],
      },
      {
        role: "Project Manager",
        company: "Coordination opérationnelle",
        description:
          "Expérience en coordination projet couvrant la planification, le suivi, la communication avec les parties prenantes et le support à la delivery.",
        tags: ["Project coordination", "Planning", "Stakeholders", "Delivery"],
      },
    ],

    featuredProject: {
      title: "AWS EKS Platform Golden Path",
      description:
        "Lab Platform Engineering end-to-end pour provisionner, déployer, observer, valider et détruire une plateforme AWS EKS éphémère.",
      metrics: [
        ["Platform", "AWS EKS"],
        ["Delivery", "Terraform + Helm"],
        ["Runtime", "FastAPI on Kubernetes"],
        ["Lifecycle", "Deploy · Observe · Destroy"],
      ],
      proof:
        "Démontre Terraform, EKS, Helm, Grafana, CI/CD, observability, IAM/OIDC et un lifecycle d'infrastructure orienté FinOps.",
      highlights: [
        "Infrastructure AWS gérée avec Terraform et S3 remote backend",
        "Amazon EKS, ECR, IAM/OIDC et RBAC limité au namespace",
        "Service FastAPI packagé avec Docker et déployé avec Helm",
        "GitHub Actions CI/CD avec déploiements manuels contrôlés",
        "Observability Prometheus et Grafana avec validation ServiceMonitor",
        "Lifecycle d'infrastructure éphémère maîtrisé côté coûts",
      ],
      stack: sharedStacks.featured,
      link: sharedProjectLinks.featured,
    },

    projects: [
      {
        title: "AWS Ephemeral Web Platform",
        description:
          "Lab d'infrastructure AWS éphémère pour provisionner une plateforme web sécurisée avec Terraform, configurer les services avec Ansible, opérer l'accès via AWS Systems Manager et valider un lifecycle create/destroy maîtrisé côté coûts.",
        stack: sharedStacks.ephemeralWeb,
        link: sharedProjectLinks.ephemeralWeb,
      },
      {
        title: "AWS EKS Landing Zone",
        description:
          "Projet de fondation AWS EKS construit avec Terraform pour provisionner une plateforme Kubernetes reproductible, valider les outils Helm, déployer des workloads, exposer des services et gérer un lifecycle apply/destroy maîtrisé côté coûts.",
        stack: sharedStacks.eksLandingZone,
        link: sharedProjectLinks.eksLandingZone,
      },
      {
        title: "Pokédex DevOps Deployment Lab",
        description:
          "Lab personnel de déploiement DevOps amenant une application Node.js à travers Docker, infrastructure AWS, HTTPS, DNS, Ansible et CI.",
        stack: sharedStacks.pokedex,
        liveUrl: sharedProjectLinks.pokedexLive,
        link: sharedProjectLinks.pokedex,
      },
      {
        title: "Kubernetes Visual Ops Lab",
        description:
          "Lab visuel Kubernetes expliquant les concepts essentiels du cluster, le flow kubectl apply et les workflows de déploiement local avec Docker, kind et FastAPI.",
        stack: sharedStacks.k8sVisualOps,
        liveUrl: sharedProjectLinks.k8sVisualOpsLive,
        link: sharedProjectLinks.k8sVisualOps,
      },
    ],
  },
} as const;
