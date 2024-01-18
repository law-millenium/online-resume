import { Card } from '../../../shared/card/card';

const narutoPlugin = {
    name: 'Naruto Progress',
    period: 'Mai 2022 - Aujourd’hui',
    description:
        'J\'ai créé un plugin pour Intellij IDEA sur l\'univers de Naruto pour le plaisir. Les barres de progression et les icônes de chargement peuvent être personnalisées avec des éléments de Naruto. <br> J\'ai adapté ce plugin à partir d\'un autre plugin similaire sur l\'univers de Pokémon, ce qui m\'a permis d\'améliorer mes compétences en rétro-ingénierie et de découvrir Gradle. <br> <br> Voici la <a href="https://plugins.jetbrains.com/plugin/19302-naruto-progress" target="_blank" rel="noopener">page d\'accueil</a> de mon plugin. <br> <br> Et voici le <a href="https://github.com/law-millenium/naruto-progress/blob/master/README.md" target="_blank" rel="noopener"> repo GitHub</a>.',
    skills: ['Java 11', 'Gradle'],
    headingGifPath: '../../../assets/naruto.gif'
};

const eseAuto = {
    name: 'EseAuto',
    period: 'Sept 2017 - Juin 2019',
    description:
        "Lors de mes études à l'ESEO, j'ai intégré le bureau du club automobile en tant que secrétaire, j'ai alors pu participer à l'organisation de nombreux évènements comme des rassemblements de voitures de collection lors des portes ouvertes de notre école. <br> J'ai également été l'organisateur de sorties karting que nous organisions 2 fois par an pour les étudiants de l'école. Cela m'a permis de voir les différents aspects d'un tel évènement : communication via la distribution de flyers, négociation avec le société gérante du circuit, gestion de l'équipe d'EseAuto, etc.",
    skills: []
};

const personalHobbies = {
    name: 'Activités personnelles',
    period: '',
    description:
        '<ul> <li> Jeux de société </li> <li> Jeux vidéo </li> <li> Cinéma </li> <li> Animes </li> <li> Lecture </li> <li> Football </li> </ul>',
    skills: []
};

export const hobbies: Card[] = [narutoPlugin, eseAuto, personalHobbies];
