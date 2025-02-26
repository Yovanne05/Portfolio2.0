import type { NavigationPage, Project, ProjectInformations } from '../types/types'

/*
 * Toutes les pages disponibles sur le site web
 */
export const navigationPages: NavigationPage[] = [
  { name: 'TECHNOLOGIES', urlName: 'skills' },
  { name: 'MES PROJETS', urlName: 'project' },
  { name: 'EXPERIENCES', urlName: 'experience' },
  { name: 'FORMATION', urlName: 'formation' },
  { name: 'CONTACT', urlName: 'contact' },
]

/*
 * Tous les projets réalisés (non détaillés)
 */
export const allProjects: Project[] = [
  {
    id: 1,
    name: 'Game Like Zelda',
    image: '/src/assets/project/zelda/village.png',
    description:
      "Un jeu d'aventure en 2D inspiré de Zelda, développé avec Java et JavaFX, intégrant des mécaniques de combat, d'exploration et d'interaction avec les PNJ.",
    infoTech: {
      bilan: `
      Réalisé en trois mois avec une équipe de trois, ce jeu suit l'architecture MVC et la méthode agile pour une meilleure organisation et évolutivité.
      Plusieurs design patterns ont été utilisés (décorateur, stratégie, singleton, factory method) afin d'optimiser le code et améliorer l'expérience de jeu.
      Développé en Java avec JavaFX, ce projet a été géré avec Git et Trello, facilitant la collaboration et le suivi des tâches. Il m'a permis de renforcer mes compétences en POO et en gestion de projet.
    `,
      skills: [{ name: 'Java', path: '/src/assets/skills/java.png' }],
    },
    redirection: 'https://github.com/Yovanne05/Zelda',
  },
  {
    id: 2,
    name: 'SAE Manager',
    image: '/src/assets/project/sae_manager/home_prof.png',
    description: 'Une application web conçue pour faciliter la gestion des projets de groupe.',
    redirection: 'https://github.com/Yovanne05/SAE-Manager',
    infoTech: {
      bilan: `
      Projet réalisé en équipe de trois, visant à simplifier la gestion des projets académiques. Il suit larchitecture MVC pour une meilleure séparation des responsabilités et maintenabilité du code.
      En utilisant la méthodologie agile, nous avons organisé le travail en sprints avec Trello pour suivre l'avancement.
      Développé en PHP pour le back-end, avec MySQL pour la base de données et une interface interactive en JavaScript et Bootstrap.
    `,
      skills: [
        { name: 'Php', path: '/src/assets/skills/php.png' },
        { name: 'JavaScript', path: '/src/assets/skills/javascript.png' },
        { name: 'MySQL', path: '/src/assets/skills/mysql.png' },
        { name: 'Bootstrap', path: '/src/assets/skills/bootstrap.png' },
      ],
    },
  },
]

/*
 * Regroupement des projets détaillés
 * Chaque projet a ses propres informations détaillées
 */
export const detailedProjects: ProjectInformations[] = [
  {
    project: allProjects[0], // Ref au projet Zelda
    information: [
      {
        title: 'Accueil de Zelda',
        description:
          "Cette page d'accueil affiche le titre du jeu accompagné de plusieurs boutons interactifs permettant de naviguer vers les différentes sections.",
        image: '/src/assets/project/zelda/home.png',
      },
      {
        title: "L'Histoire",
        description:
          "Plongez dans l'histoire captivante de notre jeu, où le héros se lance dans une aventure épique pour sauver son frère.",
        image: '/src/assets/project/zelda/histoire.png',
      },
      {
        title: 'Le Village',
        description:
          'Dès son arrivée dans le jeu, le héros découvre un village animé, peuplé de personnages avec qui il pourra interagir.',
        image: '/src/assets/project/zelda/village.png',
      },
      {
        title: 'Rencontre avec les villageois',
        description:
          'Le héros peut discuter avec les habitants du village pour obtenir des indices et des informations précieuses sur sa quête.',
        image: '/src/assets/project/zelda/speak.png',
      },
      {
        title: "Achat d'armes",
        description:
          "Dans le village, il est possible d'acheter des armes auprès d'un marchand PNJ afin de se préparer aux combats à venir.",
        image: '/src/assets/project/zelda/buy.png',
      },
      {
        title: 'Le Labyrinthe',
        description:
          "Le héros doit traverser un labyrinthe complexe et trouver la clé qui lui permettra d'accéder au donjon.",
        image: '/src/assets/project/zelda/labyrinthe.png',
      },
      {
        title: 'Entrée du Donjon',
        description:
          "Après avoir surmonté de nombreux obstacles, le héros atteint enfin l'entrée du donjon, prêt à affronter de nouveaux défis.",
        image: '/src/assets/project/zelda/entry_donjon.png',
      },
      {
        title: 'Le Donjon',
        description:
          "Dans le donjon, le héros devra affronter des chevaliers redoutables ainsi qu'un puissant boss afin de libérer son frère et accomplir sa destinée.",
        image: '/src/assets/project/zelda/donjon.png',
      },
    ],
  },
  {
    project: allProjects[1], // Ref au projet SAE Manager
    information: [
      {
        title: 'Vue Professeur',
        image: '/src/assets/project/sae_manager/home_prof.png',
        description: `Voici l'interface dédiée aux professeurs lors de la création d'un projet.
        Ils ont accès à plusieurs fonctionnalités, telles que la création et la gestion des groupes d'étudiants, l'ajout d'autres enseignants au projet s'ils en sont les créateurs, ainsi que l'ajout de dépôts pour chaque groupe.
        Les professeurs peuvent aussi organiser et noter des soutenances avec des critères spécifiques, consulter les notes finales des étudiants et utiliser un tableau de bord récapitulatif permettant de visualiser toutes les informations essentielles du projet.`,
      },
      {
        title: 'Tableau de bord',
        image: '/src/assets/project/sae_manager/dashboard.png',
        description: `Le professeur dispose également d'un tableau de bord dédié à chaque projet, lui permettant d'avoir une vue d'ensemble sur l'avancement des groupes, les notes, les différentes ressources mises à disposition, et plus encore.`,
      },
      {
        title: 'Vue Étudiant',
        image: '/src/assets/project/sae_manager/home_eleve.png',
        description: `L'interface étudiante permet aux élèves de consulter la composition de leur groupe, accéder aux dépôts et soumettre leurs travaux, consulter les ressources mises à leur disposition, voir les dates des soutenances et visualiser leurs notes liées au projet.`,
      },
    ],
  },
]
