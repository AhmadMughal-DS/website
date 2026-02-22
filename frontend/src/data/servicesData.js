/**
 * servicesData.js
 * Central source of truth for all services offered by BOTPILOT AI.
 * Each service has: id (URL slug), icon (Bootstrap Icons class), name, tagline, and full detail content.
 */

const servicesData = [
  {
    id: 'infrastructure-automation',
    icon: 'bi-hdd-rack',
    name: 'Infrastructure Automation & Deployment',
    tagline: 'Automate provisioning and deployments with modern IaC tools.',
    description:
      'We design and implement end-to-end infrastructure automation pipelines that eliminate manual provisioning. Using tools like Terraform, Ansible, and Pulumi, we ensure your environments are reproducible, version-controlled, and deployed in minutes — not days.',
    features: [
      'Automated server provisioning with Terraform & Ansible',
      'Blue-green and canary deployment strategies',
      'Immutable infrastructure patterns',
      'Multi-cloud deployment orchestration',
      'Rollback mechanisms and deployment health checks',
      'GitOps workflow integration',
    ],
    benefits: [
      'Reduce deployment time from days to minutes',
      '99.9% deployment success rate',
      'Eliminate configuration drift across environments',
      'Full audit trail for every infrastructure change',
    ],
  },
  {
    id: 'website-development',
    icon: 'bi-globe2',
    name: 'Website Development',
    tagline: 'Modern, responsive websites built with cutting-edge frameworks.',
    description:
      'From landing pages to full-stack web applications, we build blazing-fast, SEO-optimized websites using React, Next.js, and modern JavaScript. Every site is mobile-first, accessible, and designed to convert visitors into customers.',
    features: [
      'React / Next.js / Vue.js frontend development',
      'Server-side rendering & static site generation',
      'REST API & GraphQL backend integration',
      'Responsive design with Bootstrap / Tailwind CSS',
      'CMS integration (Strapi, Sanity, WordPress headless)',
      'Performance optimization (Core Web Vitals)',
    ],
    benefits: [
      'Lightning-fast page loads (< 1s)',
      'Mobile-first responsive design',
      'SEO-optimized from the ground up',
      'Easy content management for non-technical users',
    ],
  },
  {
    id: 'ai-chatbot-integration',
    icon: 'bi-chat-dots',
    name: 'AI Chatbot Integration',
    tagline: 'Intelligent chatbots powered by LLMs for 24/7 customer engagement.',
    description:
      'We integrate state-of-the-art AI chatbots into your websites, apps, and messaging platforms. Powered by OpenAI, Anthropic, and custom fine-tuned models, our chatbots handle customer queries, book appointments, and qualify leads — around the clock.',
    features: [
      'GPT-4 / Claude / custom LLM integration',
      'WhatsApp, Telegram, and website chat widgets',
      'RAG (Retrieval-Augmented Generation) for knowledge bases',
      'Multi-language support (Urdu, English, Arabic)',
      'Lead qualification and appointment booking flows',
      'Analytics dashboard for conversation insights',
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      '24/7 availability without human staffing costs',
      'Instant response times (< 2 seconds)',
      'Continuous improvement from conversation data',
    ],
  },
  {
    id: 'ml-model-deployment',
    icon: 'bi-cpu',
    name: 'ML Model Deployment',
    tagline: 'Deploy and scale ML models with optimized serving infrastructure.',
    description:
      'Bridge the gap between data science and production with our ML deployment expertise. We build scalable model serving pipelines using MLflow, BentoML, and Kubernetes — ensuring your models deliver predictions reliably at any scale.',
    features: [
      'Model serving with FastAPI, BentoML, TensorFlow Serving',
      'A/B testing and shadow deployments for models',
      'GPU-optimized inference infrastructure',
      'Model versioning and registry (MLflow, W&B)',
      'Feature stores and data pipeline integration',
      'Auto-scaling based on inference load',
    ],
    benefits: [
      'Go from notebook to production in days, not months',
      'Handle millions of predictions per hour',
      'Automated model retraining and monitoring',
      'Cost-effective GPU utilization',
    ],
  },
  {
    id: 'deployment-troubleshooting',
    icon: 'bi-wrench-adjustable',
    name: 'Deployment Troubleshooting',
    tagline: 'Rapid diagnosis and resolution of deployment failures.',
    description:
      'When deployments fail, every minute counts. Our team provides rapid incident response and root cause analysis for deployment issues across any stack — from Docker containers to Kubernetes clusters to serverless functions.',
    features: [
      'Emergency deployment failure response (< 30 min SLA)',
      'Root cause analysis and post-mortem reports',
      'Container and Kubernetes debugging',
      'Network and DNS troubleshooting',
      'SSL/TLS certificate and domain issues',
      'Database migration failure recovery',
    ],
    benefits: [
      'Mean time to resolution (MTTR) under 2 hours',
      'Detailed post-mortem with prevention recommendations',
      'Knowledge base of common issues for your team',
      'On-call support packages available',
    ],
  },
  {
    id: 'cicd-pipeline-setup',
    icon: 'bi-arrow-repeat',
    name: 'CI/CD Pipeline Setup',
    tagline: 'End-to-end continuous integration and deployment pipelines.',
    description:
      'We design and implement robust CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, and ArgoCD. Every commit is automatically tested, built, and deployed — giving your team confidence to ship multiple times per day.',
    features: [
      'GitHub Actions, GitLab CI/CD, Jenkins pipeline design',
      'Automated testing (unit, integration, e2e)',
      'Docker image building and registry management',
      'ArgoCD / FluxCD for GitOps deployments',
      'Artifact management and versioning',
      'Slack/Teams notifications and approval gates',
    ],
    benefits: [
      'Ship features multiple times per day confidently',
      'Catch bugs before they reach production',
      'Zero-downtime deployments',
      'Full visibility into deployment pipeline status',
    ],
  },
  {
    id: 'containerization-kubernetes',
    icon: 'bi-boxes',
    name: 'Containerization & Kubernetes',
    tagline: 'Dockerize apps and orchestrate with Kubernetes at scale.',
    description:
      'We containerize your applications with Docker and orchestrate them with Kubernetes for maximum reliability and scalability. From single-node setups to multi-cluster architectures, we handle the complexity so you can focus on code.',
    features: [
      'Docker containerization and optimization',
      'Kubernetes cluster setup (EKS, AKS, GKE, self-managed)',
      'Helm chart development and management',
      'Service mesh (Istio, Linkerd) implementation',
      'Persistent storage and stateful workloads',
      'Cluster autoscaling and resource optimization',
    ],
    benefits: [
      'Run anywhere — cloud, on-prem, or hybrid',
      'Auto-heal and auto-scale workloads',
      'Reduce infrastructure costs by 40-60%',
      'Consistent environments from dev to prod',
    ],
  },
  {
    id: 'infrastructure-as-code',
    icon: 'bi-file-earmark-code',
    name: 'Infrastructure as Code (IaC)',
    tagline: 'Manage infrastructure with code for reproducible environments.',
    description:
      'Treat your infrastructure like software. We implement IaC using Terraform, Pulumi, and CloudFormation — giving you version-controlled, peer-reviewed, and fully reproducible infrastructure across all environments.',
    features: [
      'Terraform modules for reusable infrastructure',
      'Pulumi for infrastructure in TypeScript/Python',
      'AWS CloudFormation / Azure ARM templates',
      'State management and locking strategies',
      'Policy-as-code with OPA / Sentinel',
      'Infrastructure testing with Terratest',
    ],
    benefits: [
      'Spin up identical environments in minutes',
      'Eliminate "works on my machine" for infrastructure',
      'Code review for every infrastructure change',
      'Disaster recovery through infrastructure recreation',
    ],
  },
  {
    id: 'cloud-architecture-migration',
    icon: 'bi-cloud-arrow-up',
    name: 'Cloud Architecture & Migration',
    tagline: 'Design cloud-native architectures and seamlessly migrate workloads.',
    description:
      'Whether you are moving from on-prem to cloud or optimizing existing cloud workloads, we design architectures that are secure, scalable, and cost-effective. We support AWS, Azure, GCP, and multi-cloud strategies.',
    features: [
      'Cloud readiness assessment and migration planning',
      'Lift-and-shift, re-platform, and re-architect strategies',
      'AWS, Azure, GCP architecture design',
      'Multi-cloud and hybrid cloud setups',
      'Serverless architecture (Lambda, Cloud Functions)',
      'Database migration (RDS, DynamoDB, Cloud SQL)',
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve application performance and reliability',
      'Zero-downtime migration strategies',
      'Future-proof architecture for growth',
    ],
  },
  {
    id: 'monitoring-logging',
    icon: 'bi-graph-up-arrow',
    name: 'Monitoring & Logging',
    tagline: 'Comprehensive observability for your entire stack.',
    description:
      'You cannot fix what you cannot see. We implement full-stack observability using Prometheus, Grafana, ELK Stack, and Datadog — giving you real-time insights into application health, performance, and user experience.',
    features: [
      'Prometheus + Grafana monitoring stack',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'Distributed tracing with Jaeger / OpenTelemetry',
      'Custom dashboards and alerting rules',
      'Application Performance Monitoring (APM)',
      'Log aggregation and structured logging',
    ],
    benefits: [
      'Detect issues before users report them',
      'Reduce mean time to detection (MTTD) by 80%',
      'Data-driven capacity planning',
      'Beautiful dashboards for stakeholder visibility',
    ],
  },
  {
    id: 'security-compliance',
    icon: 'bi-shield-lock',
    name: 'Security & Compliance',
    tagline: 'DevSecOps practices embedded from day one.',
    description:
      'Security is not an afterthought — it is built into every pipeline. We implement vulnerability scanning, RBAC, secrets management, and compliance-as-code to keep your infrastructure locked down and audit-ready.',
    features: [
      'Container image scanning (Trivy, Snyk)',
      'SAST/DAST in CI/CD pipelines',
      'Secrets management (Vault, AWS Secrets Manager)',
      'RBAC and IAM policy design',
      'Compliance frameworks (SOC2, ISO 27001, PCI-DSS)',
      'Network security (WAF, VPN, Zero Trust)',
    ],
    benefits: [
      'Pass security audits with confidence',
      'Catch vulnerabilities before production',
      'Automated compliance reporting',
      'Protect customer data and build trust',
    ],
  },
  {
    id: 'cloud-cost-optimization',
    icon: 'bi-piggy-bank',
    name: 'Cloud Cost Optimization',
    tagline: 'Analyze and reduce cloud spending with FinOps practices.',
    description:
      'Cloud bills spiraling out of control? We analyze your infrastructure, right-size resources, implement reserved instances, and set up FinOps practices that can cut your cloud bill by 30-60% without sacrificing performance.',
    features: [
      'Cloud cost audit and waste identification',
      'Right-sizing recommendations for compute/storage',
      'Reserved Instance and Savings Plan optimization',
      'Spot/Preemptible instance strategies',
      'Cost allocation tags and showback/chargeback',
      'Budget alerts and anomaly detection',
    ],
    benefits: [
      'Reduce cloud bills by 30-60%',
      'Full visibility into where every dollar goes',
      'Automated cost governance policies',
      'Monthly FinOps reports with action items',
    ],
  },
  {
    id: 'devops-consulting-training',
    icon: 'bi-mortarboard',
    name: 'DevOps Consulting & Training',
    tagline: 'Expert consulting and hands-on training for your team.',
    description:
      'Level up your team with expert-led DevOps consulting and training. From organization-wide DevOps transformation to hands-on workshops on Kubernetes, Terraform, and CI/CD — we transfer knowledge so your team can own their infrastructure.',
    features: [
      'DevOps maturity assessment and roadmap',
      'Hands-on Kubernetes and Docker workshops',
      'Terraform and IaC training programs',
      'CI/CD best practices bootcamp',
      'Cloud certification preparation (AWS, Azure, GCP)',
      'Team embedding and pair programming sessions',
    ],
    benefits: [
      'Upskill your team to be self-sufficient',
      'Customized training for your specific stack',
      'Hands-on labs with real-world scenarios',
      'Post-training support and mentorship',
    ],
  },
];

export default servicesData;
