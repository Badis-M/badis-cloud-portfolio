export const portfolioLinks = {
  cv: "/Badis_Freelance.pdf",
  github: "https://github.com/Badis-M",
  linkedin: "https://www.linkedin.com/in/merakchi",
  consulting: "https://consulting.badismerakchi.com/",
  email: "badis.merakchi@gmail.com",
};

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
  azureMigration: [
    "Azure",
    "AKS",
    "ACR",
    "Terraform",
    "Kubernetes",
    "Kustomize",
    "Docker",
    "FastAPI",
    "PostgreSQL",
    "GitHub Actions",
    "OIDC",
    "Prometheus",
    "Grafana",
  ],
} as const;

const sharedProjectLinks = {
  featured: "https://github.com/Badis-M/aws-eks-platform-golden-path",
  azureMigration: "https://github.com/Badis-M/azure-legacy-app-migration-lab",
} as const;

export const learningPlatforms = {
  academy: {
    title: "Infra Academy",
    url: "https://academy.badismerakchi.com/",
    image: "/images/projects/infra-academy.png",
    topics: ["Cloud", "DevOps", "Platform", "SRE"],
  },
  fr: {
    heroLink: "Découvrir Infra Academy",
    beta: "Bêta",
    academyDescription: "Explorer l’infrastructure, le Cloud, DevOps et SRE à travers des explications et des exercices pratiques à exécuter sur sa propre machine.",
    academyAlt: "Accueil d’Infra Academy avec les accès aux cours, labs et incidents.",
    explore: "Explorer la plateforme",
    engineeringTitle: "Projets d’infrastructure",
  },
  en: {
    heroLink: "Explore Infra Academy",
    beta: "Beta",
    academyDescription: "Explore infrastructure, Cloud, DevOps and SRE through explanations and practical exercises to run on your own machine.",
    academyAlt: "Infra Academy homepage with links to courses, labs and incidents.",
    explore: "Explore the platform",
    engineeringTitle: "Infrastructure projects",
  },
} as const;

export const portfolioContent = {
  en: {
    lang: "en",
    title: "Badis Merakchi | Cloud & DevOps Engineer in Geneva",
    description:
      "Cloud & DevOps Engineer near Geneva with 8+ years in IT. Portfolio covering AWS, Azure, OCI, Terraform, Kubernetes, CI/CD, and Swiss client delivery.",

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
        "IT professional with more than eight years of experience, including senior cloud consulting at Oracle Geneva for Swiss clients. Focused on Infrastructure as Code, automation, CI/CD, security, and operations across OCI, AWS, and Azure.",
      teachingLead:
        "I enjoy sharing knowledge, leading workshops and helping others grow, both within the teams I work with and through my personal projects.",
      platformsLead:
        "I develop Infra Academy to make infrastructure more accessible through visual explanations and practical exercises.",
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
      title: "Professional delivery",
    },

    experienceSection: {
      eyebrow: "Professional experience",
      title: "Oracle — Senior Cloud Consultant",
      oracleLocation: "Geneva, Switzerland",
      oraclePeriod: "2022 – 2026",
      oracleDescription:
        "Cloud consulting and infrastructure delivery across Swiss banking, financial, industrial, and data-oriented environments. Professional work covered OCI, AWS, and Azure, including landing zones, Terraform, Ansible, CI/CD, Kubernetes, EKS, AKS, cloud security, FinOps, and operational readiness.",
      featuredEngagementLabel: "Primary engagement",
      engagementsTitle: "Other selected client engagements",
      crossClientTitle: "Cross-client delivery",
      proofSummaryLabel: "Oracle experience summary",
      proofItems: ["6 client environments", "OCI · AWS · Azure", "Banking · Industry · Data"],
    },

    projectsSection: {
      eyebrow: "Selected engineering projects",
      title: "Cloud, DevOps, and Platform Engineering projects",
      featuredLabel: "Featured project",
      spotlightLabel: "Cloud migration spotlight",
      scopeTitle: "Project scope",
      stackTitle: "Stack",
      featuredRepositoryLabel: "View featured repository →",
      spotlightRepositoryLabel: "View featured repository →",
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

    footer: "© 2026 Badis Merakchi · Built with Astro · Deployed on Cloudflare Workers",

    skills: [
      ["Cloud Platforms", "OCI, AWS, Azure"],
      ["Infrastructure as Code", "Terraform, reusable infrastructure patterns"],
      ["Provisioning & Configuration", "Ansible, Bash, server configuration"],
      ["CI/CD", "GitHub Actions, staged pipelines, controlled approvals"],
      ["Kubernetes Platforms", "Kubernetes, Amazon EKS, Azure AKS"],
      ["Kubernetes Tooling", "kind, Helm, Kustomize, kubectl"],
      ["Security & Governance", "IAM, SSO, OCI Cloud Guard, access control"],
      ["Networking", "VCN/VPC, subnets, DNS, HTTPS, secure connectivity"],
      ["Linux & Operations", "Monitoring, patching, troubleshooting, production readiness"],
      ["Database Migrations", "ExaCC migration support, scripts, database tuning"],
      ["FinOps", "Consumption audits, right-sizing, cost optimization"],
      ["Observability", "Prometheus, Grafana, ServiceMonitor"],
      ["Containers & Applications", "Docker, FastAPI, Node.js, PostgreSQL"],
      ["Platform Patterns", "RBAC, NetworkPolicy, probes, resource limits, GitOps concepts"],
      ["Client Delivery", "Workshops, documentation, handover, go-live support"],
    ],

    clientEngagements: [
      {
        client: "Avaloq",
        title: "Multi-cloud platforms and landing zones",
        outcome: "I helped standardise AWS and OCI infrastructure across three environments: development, staging and production. Reusable provisioning and approval gates gave teams a consistent way to roll out changes. I also administered Kubernetes clusters.",
        highlights: [
          "AWS and OCI landing zones across development, staging, and production environments",
          "Terraform provisioning and reusable infrastructure patterns",
          "Ansible post-provisioning configuration",
          "GitHub Actions pipelines with controlled approvals",
          "Kubernetes cluster administration and work with Amazon EKS",
          "IAM, networking, governance, and OCI Cloud Guard",
        ],
      },
      {
        client: "Rothschild",
        title: "Secure SFTP infrastructure on OCI",
        outcome: "I helped set up a dedicated SFTP service on OCI for sensitive data transfers, with controlled network access, SSH key authentication and audit mechanisms.",
        highlights: [
          "OCI compute, VCN, subnets, and public/private addressing",
          "Secure transfers with SSH keys, IAM, SSO, and audit mechanisms",
          "Network and port configuration for secure SFTP access",
          "Sensitive data transfers in a financial environment",
        ],
      },
      {
        client: "Swissquote",
        title: "Exadata Cloud@Customer migration support",
        outcome: "I worked directly with Swissquote’s technical teams to support database migration and tuning in a critical banking environment.",
        highlights: [
          "Database migration support and tuning",
          "Delivery in a critical banking environment",
          "Direct collaboration with Swissquote technical teams",
        ],
      },
      {
        client: "Corner Bank",
        title: "Exadata Cloud@Customer migration support",
        outcome: "I supported the database migration to Exadata Cloud@Customer with migration scripts and database tuning.",
        highlights: [
          "Database migration support towards Exadata Cloud@Customer",
          "Scripts supporting the migration",
          "Database tuning support",
          "Delivery in a critical banking environment",
        ],
      },
      {
        client: "LEMO",
        title: "OCI Landing Zone",
        outcome: "I helped build a reproducible OCI foundation for the migration. The automated setup covered network and access rules so they could be reapplied consistently.",
        highlights: [
          "Automated infrastructure provisioning with Terraform",
          "Networking, IAM, and cloud governance",
          "Reproducible OCI cloud foundation",
          "Landing zone implementation in an OCI migration context",
        ],
      },
      {
        client: "IEC",
        title: "Data and analytics platform",
        outcome: "I helped connect data transfer and transformation to analytics, so prepared datasets could be queried in the warehouse and explored through Oracle Analytics.",
        highlights: [
          "ETL/ELT workflows for a data and analytics platform",
          "Oracle Autonomous Data Warehouse (ADW)",
          "Oracle Analytics Cloud (OAC) for analytical use",
          "Data transfer, transformation, and analytical delivery",
        ],
      },
    ],

    crossClientDelivery: [
      "Linux monitoring, troubleshooting, and quarterly security patching",
      "Technical audits, quality assurance, and production readiness",
      "Cloud governance, IAM, access control, and security reporting",
      "FinOps consumption reviews, right-sizing, and cost optimization",
      "Technical workshops, architecture discussions, and stakeholder coordination",
      "Architecture documentation, runbooks, handover, and go-live support",
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
        "End-to-end Platform Engineering project for provisioning, deploying, observing, validating, and destroying an ephemeral AWS EKS platform.",
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

    spotlightProject: {
      title: "Azure Legacy App Migration",
      description:
        "Progressive Azure migration modernizing a legacy-style FastAPI application into a cloud-native AKS platform with PostgreSQL, Docker, Kustomize, Terraform, ACR, GitHub Actions OIDC, and Prometheus/Grafana observability.",
        metrics: [
          ["Platform", "Azure AKS + ACR"],
          ["Delivery", "Terraform + GitHub Actions"],
          ["Runtime", "FastAPI + PostgreSQL"],
          ["Observability", "Prometheus + Grafana"],
        ],
      proof:
        "Shows a realistic migration path from local application and database to Kubernetes, Azure infrastructure, CI/CD, and observability.",
      highlights: [
        "Containerized a legacy-style FastAPI application and introduced PostgreSQL with Docker Compose",
        "Deployed the stack locally on Kubernetes with kind, Kustomize overlays, and PostgreSQL StatefulSet/PVC",
        "Provisioned Azure Resource Group, ACR, AKS, and remote Terraform state with Terraform modules",
        "Pushed application images to ACR and validated AKS deployment with kubelet AcrPull integration",
        "Added GitHub Actions CI, Azure OIDC authentication check, and manual AKS deployment workflow",
        "Deployed kube-prometheus-stack and exposed FastAPI custom metrics through /metrics and ServiceMonitor",
      ],
      stack: sharedStacks.azureMigration,
      link: sharedProjectLinks.azureMigration,
    },

  },

  fr: {
    lang: "fr",
    title: "Badis Merakchi | Ingénieur Cloud & DevOps à Genève",
    description:
      "Ingénieur Cloud & DevOps près de Genève avec plus de 8 ans dans l'IT. Portfolio : AWS, Azure, OCI, Terraform, Kubernetes, CI/CD et clients suisses.",

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
        "Professionnel IT avec plus de huit ans d'expérience, dont une expérience de Senior Cloud Consultant chez Oracle à Genève pour des clients suisses. Spécialisé en Infrastructure as Code, automatisation, CI/CD, sécurité et opérations sur OCI, AWS et Azure.",
      teachingLead:
        "J’aime partager mes connaissances, animer des workshops et transmettre, aussi bien au sein des équipes avec lesquelles je travaille que dans mes projets personnels.",
      platformsLead:
        "Je développe Infra Academy pour rendre l’infrastructure plus accessible grâce à des explications visuelles et des exercices pratiques.",
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
      title: "Expérience professionnelle",
    },

    experienceSection: {
      eyebrow: "Expérience professionnelle",
      title: "Oracle — Senior Cloud Consultant",
      oracleLocation: "Genève, Suisse",
      oraclePeriod: "2022 – 2026",
      oracleDescription:
        "Cloud consulting et delivery d'infrastructures dans des environnements suisses bancaires, financiers, industriels et orientés data. L'expérience professionnelle couvre OCI, AWS et Azure, notamment les landing zones, Terraform, Ansible, la CI/CD, Kubernetes, EKS, AKS, la sécurité cloud, le FinOps et la préparation opérationnelle.",
      featuredEngagementLabel: "Mission principale",
      engagementsTitle: "Autres missions clients sélectionnées",
      crossClientTitle: "Delivery transverse",
      proofSummaryLabel: "Synthèse de l'expérience Oracle",
      proofItems: ["6 environnements clients", "OCI · AWS · Azure", "Banque · Industrie · Data"],
    },

    projectsSection: {
      eyebrow: "Projets d'ingénierie sélectionnés",
      title: "Projets Cloud, DevOps et Platform Engineering",
      featuredLabel: "Projet principal",
      spotlightLabel: "Projet migration cloud",
      scopeTitle: "Périmètre du projet",
      stackTitle: "Stack",
      featuredRepositoryLabel: "Voir le repository →",
      spotlightRepositoryLabel: "Voir le repository →",
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

    footer: "© 2026 Badis Merakchi · Built with Astro · Déployé sur Cloudflare Workers",

    skills: [
      ["Cloud Platforms", "OCI, AWS, Azure"],
      ["Infrastructure as Code", "Terraform, patterns d'infrastructure réutilisables"],
      ["Provisioning & Configuration", "Ansible, Bash, configuration serveur"],
      ["CI/CD", "GitHub Actions, pipelines par environnement, approbations contrôlées"],
      ["Kubernetes Platforms", "Kubernetes, Amazon EKS, Azure AKS"],
      ["Kubernetes Tooling", "kind, Helm, Kustomize, kubectl"],
      ["Security & Governance", "IAM, SSO, OCI Cloud Guard, contrôle d'accès"],
      ["Networking", "VCN/VPC, subnets, DNS, HTTPS, connectivité sécurisée"],
      ["Linux & Operations", "Monitoring, patching, troubleshooting, préparation à la production"],
      ["Database Migrations", "Support migration ExaCC, scripts, database tuning"],
      ["FinOps", "Audits de consommation, right-sizing, optimisation des coûts"],
      ["Observability", "Prometheus, Grafana, ServiceMonitor"],
      ["Containers & Applications", "Docker, FastAPI, Node.js, PostgreSQL"],
      ["Platform Patterns", "RBAC, NetworkPolicy, probes, resource limits, concepts GitOps"],
      ["Client Delivery", "Workshops, documentation, handover, accompagnement go-live"],
    ],

    clientEngagements: [
      {
        client: "Avaloq",
        title: "Plateformes multi-cloud et landing zones",
        outcome: "J’ai contribué à standardiser l’infrastructure AWS et OCI sur trois environnements : développement, staging et production. Les modèles réutilisables et les étapes de validation ont donné aux équipes un cadre commun pour déployer les changements. J’ai également administré des clusters Kubernetes.",
        highlights: [
          "Landing zones AWS et OCI pour les environnements de développement, staging et production",
          "Provisioning Terraform et patterns d'infrastructure réutilisables",
          "Configuration post-provisioning avec Ansible",
          "Pipelines GitHub Actions avec approbations contrôlées",
          "Administration de clusters Kubernetes et interventions sur Amazon EKS",
          "IAM, networking, gouvernance et OCI Cloud Guard",
        ],
      },
      {
        client: "Rothschild",
        title: "Infrastructure SFTP sécurisée sur OCI",
        outcome: "J’ai contribué à mettre en place un service SFTP dédié sur OCI pour transférer des données sensibles, avec un accès réseau contrôlé, une authentification par clé SSH et des mécanismes d’audit.",
        highlights: [
          "OCI Compute, VCN, subnets et adressage public/privé",
          "Transferts sécurisés avec clés SSH, IAM, SSO et mécanismes d'audit",
          "Configuration du réseau et des ports pour les accès SFTP sécurisés",
          "Transfert de données sensibles dans un environnement financier",
        ],
      },
      {
        client: "Swissquote",
        title: "Support de migration Exadata Cloud@Customer",
        outcome: "J’ai travaillé directement avec les équipes techniques de Swissquote pour accompagner la migration et le réglage des performances de bases de données dans un environnement bancaire critique.",
        highlights: [
          "Support migration de bases de données et tuning",
          "Delivery dans un environnement bancaire critique",
          "Collaboration directe avec les équipes techniques Swissquote",
        ],
      },
      {
        client: "Corner Bank",
        title: "Support de migration Exadata Cloud@Customer",
        outcome: "J’ai accompagné la migration des bases de données vers Exadata Cloud@Customer avec des scripts de migration et du réglage des performances.",
        highlights: [
          "Support de migration de bases vers Exadata Cloud@Customer",
          "Scripts associés à la migration",
          "Support de tuning des bases de données",
          "Delivery dans un environnement bancaire critique",
        ],
      },
      {
        client: "LEMO",
        title: "OCI Landing Zone",
        outcome: "J’ai contribué à créer un socle OCI reproductible pour la migration. L’automatisation couvrait les règles réseau et les accès pour pouvoir les réappliquer de façon cohérente.",
        highlights: [
          "Provisioning automatisé de l'infrastructure avec Terraform",
          "Networking, IAM et gouvernance cloud",
          "Fondation cloud OCI reproductible",
          "Mise en place de la landing zone dans un contexte de migration OCI",
        ],
      },
      {
        client: "IEC",
        title: "Plateforme Data et Analytics",
        outcome: "J’ai contribué à relier le transfert et la transformation des données à leur exploitation. Les données préparées pouvaient être interrogées dans l’entrepôt puis explorées dans Oracle Analytics.",
        highlights: [
          "Workflows ETL/ELT pour une plateforme Data et Analytics",
          "Oracle Autonomous Data Warehouse (ADW)",
          "Oracle Analytics Cloud (OAC) pour l'exploitation analytique",
          "Transfert, transformation et exploitation analytique des données",
        ],
      },
    ],

    crossClientDelivery: [
      "Monitoring Linux, troubleshooting et security patching trimestriel",
      "Audits techniques, quality assurance et préparation à la production",
      "Gouvernance cloud, IAM, contrôle d'accès et reporting sécurité",
      "Revues de consommation FinOps, right-sizing et optimisation des coûts",
      "Workshops techniques, discussions d'architecture et coordination des parties prenantes",
      "Documentation d'architecture, runbooks, handover et accompagnement go-live",
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
        "Projet Platform Engineering end-to-end pour provisionner, déployer, observer, valider et détruire une plateforme AWS EKS éphémère.",
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

    spotlightProject: {
      title: "Azure Legacy App Migration",
      description:
        "Migration d'application vers Azure modernisant progressivement une application FastAPI legacy vers une plateforme cloud-native sur AKS avec PostgreSQL, Docker, Kustomize, Terraform, ACR, GitHub Actions OIDC et observability Prometheus/Grafana.",
        metrics: [
          ["Platform", "Azure AKS + ACR"],
          ["Delivery", "Terraform + GitHub Actions"],
          ["Runtime", "FastAPI + PostgreSQL"],
          ["Observability", "Prometheus + Grafana"],
        ],
      proof:
        "Montre une trajectoire réaliste de migration depuis une application et une base locale vers Kubernetes, l'infrastructure Azure, la CI/CD et l'observability.",
        highlights: [
        "Provisioning Azure Resource Group, ACR, AKS et remote Terraform state avec des modules Terraform",
        "Push des images vers ACR et validation du déploiement AKS avec intégration AcrPull côté kubelet",
        "Ajout d'une CI GitHub Actions, d'un check Azure OIDC et d'un workflow manuel de déploiement AKS",
        "Déploiement kube-prometheus-stack avec métriques FastAPI exposées via /metrics et ServiceMonitor",
      ],
      stack: sharedStacks.azureMigration,
      link: sharedProjectLinks.azureMigration,
    },

  },
} as const;
