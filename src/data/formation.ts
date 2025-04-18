import type { DetailedParcour, Parcour } from '../types/types'

/*
Liste de Parcour qui représente toutes les formations
*/

export const allFormation: Parcour[] = [
  {
    infoGeneral: {
      name: 'BUT Informatique',
      image: '/assets/formation/iut_montreuil.png',
      description: `Spécialisation : réalisation d'applications (conception, développement, validation)`,
      infoTech: {
        skills: [
          {
            name: 'Java',
            path: '/assets/skills/java.png',
          },
          {
            name: 'C',
            path: '/assets/skills/c.png',
          },
          {
            name: 'HTML',
            path: '/assets/skills/html.png',
          },
          {
            name: 'CSS',
            path: '/assets/skills/css.png',
          },
          {
            name: 'C#',
            path: '/assets/skills/c_sharp.png',
          },
          {
            name: 'Bootstrap',
            path: '/assets/skills/bootstrap.png',
          },
          {
            name: 'Dart',
            path: '/assets/skills/dart.png',
          },
          {
            name: 'Flutter',
            path: '/assets/skills/flutter.png',
          },
          {
            name: 'Github',
            path: '/assets/skills/github.png',
          },
          {
            name: 'Javascript',
            path: '/assets/skills/JavaScript.png',
          },
          {
            name: 'Mysql',
            path: '/assets/skills/mysql.png',
          },
          {
            name: 'Php',
            path: '/assets/skills/php.png',
          },
          {
            name: 'Mysql',
            path: '/assets/skills/Postgresql_elephant.png',
          },
          {
            name: 'Python',
            path: '/assets/skills/python.png',
          },
          {
            name: 'Sass',
            path: '/assets/skills/sass.png',
          },
          {
            name: 'Ts',
            path: '/assets/skills/ts.png',
          },
        ],
        bilan: `
              • Mise en place d'architectures comme MVC et orientées événements
              • Développement d'applications avec une approche orientée tests
              • Travail en équipe avec gestion de projet via GitHub et Trello
              • Respect de cahiers des charges et réalisation de sprints structurés
              `,
      },
      id: 3,
      redirection:
        'https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf',
    },
    type: 'formation',
    dateDebut: '2024',
    dateFin: '2027',
  },
]

/*
Liste de detailedParcour qui représente toutes les formations détaillées
*/

export const allDetailedFormation: DetailedParcour[] = [
  {
    parcour: allFormation[0],
    information: [
      {
        title: '2ème année',
        description: `Découverte des design patterns, du refactoring, ainsi que de la gestion et du nettoyage de code. Introduction au principe SOLID.
        Initiation au développement web (Angular) et mobile (Flutter), avec la mise en place de projets plus structurés,
        incluant une architecture back-end et front-end reliée par une API. Les projets sont réalisés au sein d'équipes plus organisées, avec des développeurs et des testeurs,
        afin de garantir la production d'un code correct, maintenable et évolutif.`,
        image: '/assets/formation/service.jpg',
      },
      {
        title: '1ère année',
        description: `Découverte de la programmation, des bases de données et de l'algorithmique, introduction à la programmation orientée objet (POO) et aux principes du développement d'interfaces homme-machine (IHM). Utilisation principalement des langages Java et C.`,
        image: '/assets/formation/code_developpeur.jpg',
      },
    ],
  },
]
