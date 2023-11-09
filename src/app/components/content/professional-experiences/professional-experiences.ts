import { Card } from '../../../shared/card/card';

const inetum = {
    name: 'Inetum',
    period: "Oct 2020 - Aujourd'hui",
    description:
        "Au sein d'Inetum, je suis en mission depuis 3 ans à la CNIEG (Caisse Nationale des Industries Electriques et Gazières). L'objectif de cette mission est d'améliorer et maintenir le système informatique. Nous travaillons en feature teams avec des communautés basées sur les rôles (développeurs, business analysts, product owners). La communauté des développeurs favorise le partage des connaissances et les discussions sur les solutions techniques (pas d'architecte pour guider les choix techniques, chaque développeur est un concepteur, donc chacun doit être critique et collaboratif).<br><br>Principales missions :<br><ul><li> Analyse et conception des fonctionnalités.</li><li> Implémentation des fonctionnalités.</li><li> Maintenance corrective.</li><li> Support de production.</li><li> Gestion des livraisons.</li></ul>Points forts :<br><ul><li> Création d'un nouveau backend Java, connexion à la base de données et exposition de services REST.</li><li> Maintenance d'un backend Java communiquant avec Microsoft Dynamics via des API et Azure Service Bus.</li><li> Remplacement du broker de messages Pulsar par RabbitMQ et soutien aux autres équipes.</li><li> POC Angular pour un nouveau portail et d'une solution de monorepo utilisant NX pour associer un backend NestJS. Ensuite, présentation à la communauté.</li><li> POC des technologies de test Cypress, Playwright et Jest lors du développement du portail Angular mentionné cidessus.</li><li> Implémentation du portail Angular avec les protocoles OAuth2 et OpenID pour l'authentification.</li><li> Création d'un backend NestJS communiquant avec Microsoft Dynamics et exposant des services REST pour le nouveau portail Angular.</li><li> Contribution à la chaîne d'intégration continue du monorepo NX englobant le backend NestJS et le portail Angular dans une approche DevOps (Gitlab CI/CD).</li><li> Rédaction de tests unitaires (JUnit et Jest), de tests end-to-end (Playwright et Selenium) et de tests de performance (Gatling).</li><li> Participation à la création d'un pipeline d'intégration continue pour les montées de version automatique du composant d'authentification.</li></ul>",
    skills: [
        'Java 8/11/17',
        'Spring Boot 2.7',
        'Spring 5',
        'Maven 3',
        'Angular 14/15/16',
        'Node.js',
        'NestJS 9/10',
        'Npm',
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
        "J'ai fait partie du projet OnDijon pendant ma formation en alternance d'un an chez Capgemini, dont le client était Bouygues. <br> <br> Ce projet est développé en étroite collaboration avec la ville de Dijon et implique plusieurs entreprises : Bouygues, Citelum, Suez et Capgemini. Son objectif est de faire de Dijon la première smart city de France ! Le projet OnDijon se concentre sur le développement d'une application web et sa connexion à beaucoup d'objets connectés à travers toute la ville. <br><br> Sur le plan personnel, j'ai eu l'occasion d'apprendre et d'utiliser Angular et Node.js pour le développement d'applications web, ainsi que Node-RED pour établir la connexion entre les objets connectés et l'application. <br><br> Ma mission comprenait :<ul><li> L'intégration au sein d'une équipe Agile Lean de 8 membres.</li>        <li> Du développement full-stack en utilisant Angular, Node.js et Node-RED.</li><li> L'analyse et la résolution de bugs.</li><li> L'analyse et l'estimation de nouvelles fonctionnalités.</li> <li> La surveillance et la maintenance de l'environnement de production.</li> <li> Des campagnes de tests fonctionnels avec Xray (plugin Jira).</li><li> L'utilisation de Gitlab, Jira, Confluence.</li><li> Le déploiement dans les environnements de pré-production et de production.</li></ul>",
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
