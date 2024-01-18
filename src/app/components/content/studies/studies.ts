import { Card } from '../../../shared/card/card';

const eseo = {
    name: 'ESEO',
    period: 'Sept 2015 - Sept 2020',
    description:
        "J'ai réalisé mon cycle préparatoire MPSI et mon cursus ingénieur à l'ESEO d'Angers en y suivant l'option \"Logiciel & Données\". Ces études m'ont beaucoup apporté, notamment car nous suivions en grande partie un apprentissage par projets pratiques en équipe. <br> <br> D'un point de vue informatique, j'ai donc pu travailler sur les différents projets ci-dessous qui m'ont appris les différents aspects du métier d'ingénieur logiciel. <ul> <li> Projet de fin d'études : simulateur et éditeur de réseau de métro pour Thales Hong Kong, développé en Go et en Java. </li> <li> Projet complet en Java dans le cadre d'un cours sur la qualité logicielle, couvrant les tests, les bonnes pratiques et les design patterns. Utilisation de JUnit, JMeter, CheckStyle, SpotBugs. </li> <li> Plateforme web de gestion des projets de fin d'études dans mon école, développée en JEE, Java et Javascript, avec une équipe de huit membres utilisant les méthodes agiles. Développement d'une API REST avec Spring Boot. </li> <li> Développement d'une plateforme de jeux en ligne avec une équipe de six membres. </li> <li> Prototype de logiciel de dessin basé sur Java. </li> <li> Implémentation du jeu de plateau \"Aventuriers du rail\" en Java. </li> <li> Space Invaders implémenté en C, combinant hardware et software avec un gyroscope intégré sur une carte électronique. </li> <li> De nombreux jeux développés de ma propre initiative pendant mes classes préparatoires, tels que Puissance 4, Memory et Yahtzee en Python. </li> </ul>",
    skills: [
        'Java',
        'JEE',
        'JUnit',
        'Spring Boot',
        'Spring',
        'Git',
        'Maven',
        'API Swagger',
        'Postman',
        'Diagrammes de séquences',
        'Langage de modélisation unifié (UML)',
        'Linux',
        'Python',
        'Mathématiques',
        'Agilité'
    ]
};

const york = {
    name: "Université d'York",
    period: 'Juil 2018 - Oct 2018',
    description:
        "Lors du premier semestre de ma quatrième année à l'ESEO, j'ai fait le choix de réaliser un stage à l'étranger afin d'évoluer en anglais dans un milieu professionnel. J'ai donc passé 4 mois au sein du département de micro-robotique de l'université d'York au nord de l'Angleterre. <br> <br> Lors de ce stage, ma communication en anglais et mes compétences en informatique ont été fortement améliorées. <br> De plus, j’ai pu découvrir le monde de la recherche au sein d’une équipe regroupant différentes nationalités, ce qui fut très enrichissant culturellement. J'ai notamment eu l’opportunité de co-écrire une publication scientifique sur l'auto-assemblage que vous pouvez retrouver <a href=\"https://royalsocietypublishing.org/doi/full/10.1098/rsos.182128\" target=\"_blank\" rel=\"noopener\"> ici</a>. <br> Ma participation consistait à fournir des simulations 3D réalistes d'auto-assemblages fonctionnant grâce à la force magnétique. Pour ce faire, j'ai eu l'occasion d'utiliser Blender avec des scripts Python et Matlab.",
    skills: ['Python', 'Blender', 'MATLAB', 'Mathématiques']
};

const toeic = {
    name: 'TOEIC',
    period: 'Avril 2018',
    description: 'Score : 915/990',
    skills: ['Anglais']
};

const voltaireCertification = {
    name: 'Certification Voltaire',
    period: 'Mars 2018',
    description:
        "Score : 867/1000 | Niveau d'orthographe : Affaires <br> <br> Aptitudes pour rédiger les textes qui ont une portée stratégique ou légale, ainsi que pour relire et corriger les textes de collaborateurs. <br> Recommandé pour des responsables grands comptes, assistants de direction, directeurs de service, juristes, avocats, notaires...",
    skills: ['Orthographe']
};

const projectManagementMOOC = {
    name: 'MOOC Gestion de projet',
    period: 'Novembre 2017',
    description: 'Parcours classique obtenu',
    skills: ['Gestion de projet']
};

export const studies: Card[] = [
    eseo,
    york,
    toeic,
    voltaireCertification,
    projectManagementMOOC
];
