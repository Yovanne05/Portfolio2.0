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
    image: '/assets/project/zelda/village.png',
    description: "Jeu 2D style Zelda avec combat, exploration et interactions PNJ",
    infoTech: {
      bilan: `
      • Développé en 3 mois (équipe de 3) avec Java/JavaFX
      • Architecture MVC + Design Patterns (Stratégie, Singleton...)
      • Gestion de projet Agile (Git/Trello)
      • Renforcement des compétences POO et gestion de projet
      `,
      skills: [{ name: 'Java', path: '/assets/skills/java.png' }],
    },
    redirection: 'https://github.com/Yovanne05/Zelda',
  },
  {
    id: 2,
    name: 'SAE Manager',
    image: '/assets/project/sae_manager/home_prof.png',
    description: 'Application web de gestion de projets académiques',
    redirection: 'https://github.com/Yovanne05/SAE-Manager',
    infoTech: {
      bilan: `
      • Stack: PHP (back-end), MySQL, JavaScript/Bootstrap (front)
      • Méthodologie Agile avec gestion via Trello
      • Architecture MVC pour maintenabilité
      • Interfaces dédiées (professeurs/étudiants)
      `,
      skills: [
        { name: 'Php', path: '/assets/skills/php.png' },
        { name: 'JavaScript', path: '/assets/skills/JavaScript.png' },
        { name: 'MySQL', path: '/assets/skills/mysql.png' },
        { name: 'Bootstrap', path: '/assets/skills/bootstrap.png' },
      ],
    },
  },
  {
    id: 3,
    name: 'YNM Data',
    image: '/assets/project/ynm/accueil.jpg',
    description: `Application web de visualisation de données d'une base de données relationnelle ainsi que d'un entrepôt de données`,
    redirection: 'https://github.com/Yovanne05/YNM-Data',
    infoTech: {
      bilan: `
    • Stack : Python (Flask), Angular, Tailwind, MySQL, TypeScript, Sass
    • Méthodologie Agile avec gestion via Trello
    • Architecture orientée microservices
    `,
      skills: [
        { name: 'Python', path: '/assets/skills/python.png' },
        { name: 'Angular', path: '/assets/skills/angular.png' },
        { name: 'MySQL', path: '/assets/skills/mysql.png' },
        { name: 'Tailwind', path: '/assets/skills/tailwind.png' },
        { name: 'TypeScript', path: '/assets/skills/ts.png' },
        { name: 'Sass', path: '/assets/skills/sass.png' }
      ],
    },
  }
]

export const detailedProjects: ProjectInformations[] = [
  {
    project: allProjects[0],
    information: [
      {
        title: 'Accueil',
        description: "Écran titre avec menu principal et options de jeu",
        image: '/assets/project/zelda/home.png',
      },
      {
        title: "Histoire",
        description: "Scénario complet avec quête principale (sauvetage du frère)",
        image: '/assets/project/zelda/histoire.png',
      },
      {
        title: 'Village',
        description: "Hub central avec PNJ interactifs et boutique d'armes",
        image: '/assets/project/zelda/village.png',
      },
      {
        title: 'Labyrinthe',
        description: "Zone d'exploration avec clé d'accès au donjon",
        image: '/assets/project/zelda/labyrinthe.png',
      },
      {
        title: 'Donjon',
        description: "Zone finale avec combats contre chevaliers et boss",
        image: '/assets/project/zelda/donjon.png',
      },
    ],
  },
  {
    project: allProjects[1],
    information: [
      {
        title: 'Espace Professeur',
        description: "Gestion complète des projets, groupes et évaluations",
        image: '/assets/project/sae_manager/home_prof.png',
      },
      {
        title: 'Tableau de bord',
        description: "Vue synthétique de l'avancement et des résultats",
        image: '/assets/project/sae_manager/dashboard.png',
      },
      {
        title: 'Espace Étudiant',
        description: "Dépôt de fichiers, ressources pédagogiques et notes",
        image: '/assets/project/sae_manager/home_eleve.png',
      },
    ],
  },
  {
    project: allProjects[2],
    information: [
      {
        title: 'Accueil',
        description: "Accueil du site",
        image: '/assets/project/ynm/accueil.jpg',
      },
      {
        title: 'Visualisation des tables',
        description: "Vue de toutes les tables avec possibilité de filtrer, modifier, insérer et supprimer des données",
        image: '/assets/project/ynm/tables.jpg',
      },
      {
        title: 'Analyse de données',
        description: "Analyse de données en utilisant OLAP",
        image: '/assets/project/ynm/analyse.jpg',
      },
      {
        title: 'Logs',
        description: "Logs des interactions effectuées par le client",
        image: '/assets/project/ynm/logs.jpg',
      },
      {
        title: 'Initialisation',
        description: "Rechargement de la base de données initiale afin d'effectuer des tests si nécessaire",
        image: '/assets/project/ynm/initialisation.jpg',
      },
    ],
  }
]
