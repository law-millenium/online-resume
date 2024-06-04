import { Card } from '../../../shared/card/card';

const inetum = {
    name: 'Inetum',
    period: "Oct 2020 - Aujourd'hui",
    description:
        "Au sein d'Inetum, je suis en mission depuis 4 ans à la CNIEG (Caisse Nationale des Industries Electriques et Gazières). L'objectif de cette mission est d'améliorer et maintenir le système informatique. Nous travaillons en <strong>feature teams</strong> avec des communautés basées sur les rôles (développeurs, business analysts, product owners). La communauté des développeurs favorise le partage des connaissances et les discussions sur les solutions techniques (pas d'architecte pour guider les choix techniques, chaque développeur est un concepteur, donc chacun doit être critique et collaboratif).<br><br>Principales missions :<br><ul><li> Analyse et conception des fonctionnalités.</li><li> Implémentation des fonctionnalités.</li><li> Maintenance corrective.</li><li> Support de production.</li><li> Gestion des livraisons.</li></ul>Points forts :<br><ul><li> Création d'un <strong>backend Java</strong>, connexion à la base de données et exposition de services REST.</li><li> Maintenance d'un backend Java communiquant avec Microsoft Dynamics via des API et Azure Service Bus.</li><li> Remplacement du broker de messages Pulsar par <strong>RabbitMQ</strong> et soutien aux autres équipes.</li><li> POC <strong>Angular</strong> pour un nouveau portail et d'une solution de monorepo utilisant <strong>NX</strong> pour associer un backend <strong>NestJS</strong>. Ensuite, présentation à la communauté.</li><li> POC des technologies de test <strong>Cypress, Playwright et Jest</strong> lors du développement du portail Angular mentionné ci-dessus.</li><li> <strong>Implémentation du portail Angular</strong> avec les protocoles <strong>OAuth2 et OpenID</strong> pour l'authentification.</li><li> Création d'un <strong>backend NestJS</strong> communiquant avec Microsoft Dynamics et exposant des services REST pour le nouveau portail Angular.</li><li> Contribution à la chaîne d'intégration continue du <strong>monorepo NX</strong> englobant le backend NestJS et le portail Angular dans une approche <strong>DevOps</strong> (Gitlab CI/CD).</li><li> Rédaction de <strong>tests unitaires</strong> (JUnit et Jest), de <strong>tests end-to-end</strong> (Playwright Javascript et Selenium), de <strong>smoke tests</strong> (Playwright Java) et de <strong>tests de performance</strong> (Gatling).</li><li> Participation à la création d'un pipeline d'intégration continue pour les montées de version automatiques du composant d'authentification en réalisant une configuration en mode <strong>\"Infra as Code\"</strong> dans une approche <strong>DevOps</strong>.</li> <li>Amélioration et remise à niveau des usages de tokens pour satisfaire les exigences des standards OAuth2 et OpenID.</li> <li>Mise à jour et refactoring des configurations des backs utilisant <strong>Spring Security</strong>.</li> <li>Démonstration de <strong>NgRx</strong> et <strong>Yarn</strong> à la communauté de développeurs de manière à les utiliser sur un autre projet de création de portail avec Angular ➡️ choix validés.</li> <li>Utilisation d'un contrat <strong>OpenAPI</strong> en design first pour interfacer le nouveau portail Angular et son back Java.</li> <li> Participation à la création d'un pipeline d'intégration continue pour le monorepo Java/Angular dans une approche <strong>DevOps</strong> suivant le principe d'<strong>Atomic Design</strong>. </li> <li> <strong>Lead Dev</strong> sur les développements Typescript et acteur de la veille technologique au sein de la communauté de développeurs autour de ces technologies. Présentation des différentes nouveautés d'Angular : nouvelles syntaxes des directives, signaux, Server Side Rendering, etc.). </li> </ul>",
    skills: [
        'Java 8/11/17/21',
        'Spring Boot 2.7',
        'Spring 5',
        'Maven 3',
        'Angular 14/15/16/17/18',
        'NgRx',
        'RxJS',
        'Node.js',
        'NestJS 9/10',
        'Npm',
        'OpenAPI',
        'Test Driven Development',
        'JUnit',
        'Jest',
        'Cucumber',
        'Playwright',
        'Cypress.io',
        'Gatling',
        'Nx',
        'RabbitMQ',
        'OAuth 2',
        'IntelliJ IDEA',
        'GitLab CI/CD',
        'Jenkins',
        'Nginx',
        'Docker',
        'Kubernetes',
        'Sonarqube',
        'Linux',
        'Oracle Database',
        'Liquibase',
        'Kibana',
        'Grafana',
        'Prometheus.io',
        'Keycloak',
        'Postman',
        'Accessibilité (RGAA)',
        'CRM Microsoft Dynamics',
        'API Swagger',
        'Diagrammes de séquences',
        'Langage de modélisation unifié (UML)'
    ]
};

const capgemini = {
    name: 'Capgemini',
    period: 'Sept 2019 - Sept 2020',
    description:
        "J'ai fait partie du projet OnDijon pendant ma formation en alternance d'un an chez Capgemini, dont le client était Bouygues. <br> <br> Ce projet est développé en étroite collaboration avec la ville de Dijon et implique plusieurs entreprises : Bouygues, Citelum, Suez et Capgemini. Son objectif est de faire de Dijon la première smart city de France ! Le projet OnDijon se concentre sur le développement d'une application web et sa connexion à beaucoup d'objets connectés à travers toute la ville. <br><br> Sur le plan personnel, j'ai eu l'occasion d'apprendre et d'utiliser <strong>Angular</strong> et <strong>Node.js</strong> pour le développement d'applications web, ainsi que <strong>Node-RED</strong> pour établir la connexion entre les objets connectés et l'application. <br><br> Ma mission comprenait :<ul><li> L'intégration au sein d'une équipe Agile Lean de 8 membres.</li><li> Du développement full-stack en utilisant Angular, Node.js et Node-RED.</li><li> L'analyse et la résolution de bugs.</li><li> L'analyse et l'estimation de nouvelles fonctionnalités.</li> <li> La surveillance et la maintenance de l'environnement de production.</li> <li> Des campagnes de tests fonctionnels avec Xray (plugin Jira).</li><li> L'utilisation de Gitlab, Jira, Confluence.</li><li> Le déploiement dans les environnements de pré-production et de production.</li></ul>",
    skills: [
        'Angular 6',
        'Node.js',
        'Docker',
        'Kubernetes',
        'Linux',
        'PostgreSQL',
        'ElasticSearch',
        'Postman'
    ]
};

export const professionalExperiences: Card[] = [inetum, capgemini];
