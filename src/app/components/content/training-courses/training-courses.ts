import { Card } from '../../../shared/card/card';

const angular = {
    name: 'Formation avancée Angular',
    period: '2022',
    description:
        "Formation avancée sur Angular pendant ma mission à la CNIEG. <br> J'ai beaucoup appris grâce à cette formation de trois jours et j'ai considérablement amélioré mes connaissances théoriques sur Angular. <br> <br> Voici les sujets les plus importants abordés : <br> <ul> <li> Routage (modules de routage, lazy loading, resolvers, interceptors, preloading, etc.) </li> <li> Détection des changements (stratégie OnPush, cycle de détection, etc.) </li> <li> Tests (unitaires, intégrés) </li> <li> RxJS (async pipe, hot/cold observables, subjects, operators) </li> <li> Communication entre les composants selon leurs relations (parents ↔ enfants, fratrie, etc.) </li> </ul>",
    skills: ['Angular 14', 'Npm', 'Karma']
};

const tddAndCleanCode = {
    name: 'Test Driven Development / Clean Code',
    period: '2021',
    description:
        'Formation aux pratiques de TDD et de Clean Code au sein de la CNIEG pendant ma mission chez cet organisme.',
    skills: ['Cucumber', 'JUnit', 'Java']
};

const nonviolentCommunication = {
    name: 'Communication Non Violente',
    period: '2021',
    description:
        "La CNIEG a proposé à Inetum en 2021 d'accompagner ses salariés dans une formation sur la Communication Non Violente après avoir elle-même réalisé cette action auprès des siens dans une démarche d'amélioration continue. Curieux, car en ayant déjà entendu parler quelques fois, j'ai décidé d'y participer (<i>promis, je n'ai lancé mon clavier sur personne !</i>). <br> Cette expérience s'est révélée très enrichissante humainement, démontrant des biais cognitifs installés en nous de manière innée et nous apprenant à les reconnaître et les contourner afin de ne pas blesser les autres par nos propos. <br> Cette formation m'a servi tant sur le plan personnel que professionnel lors de mes échanges.",
    skills: []
};

export const trainingCourses: Card[] = [
    angular,
    tddAndCleanCode,
    nonviolentCommunication
];
