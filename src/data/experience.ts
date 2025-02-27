import type { DetailedParcour, Parcour } from '../types/types'

/*
Liste de parcour qui représente toutes les exp
*/

export const allExperiences: Parcour[] = [
  {
    infoGeneral: {
      name: 'D2BI',
      description: 'Stage développeur full stack',
      image: '/assets/parcours/d2bi_logo.png',
      redirection: 'https://www.d2bi.fr/',
      id: 1,
      infoTech: {
        skills: [],
        bilan: '',
      },
    },
    type: 'experience',
    dateDebut: 'Avril 2025',
    dateFin: 'Juillet 2025',
  },
  {
    infoGeneral: {
      name: 'BreakDay',
      description: 'Designer bénévole',
      image: '/assets/parcours/logo_bd.png',
      redirection: 'https://breakday.shop/',
      id: 2,
      infoTech: {
        skills: [
          { name: 'Photoshop', path: '/assets/skills/photoshop.png' },
          {
            name: 'Adobe Illustrator',
            path: '/assets/skills/adobe_illustrator.png',
          },
          { name: 'Affinity Designer', path: '/assets/skills/affinity_designer.png' },
        ],
        bilan: `Utilisation principalement de Photoshop pour la création de maquettes de design, d'affiches, de motifs et d'éléments visuels. Adobe Illustrator et Affinity Designer ont été utilisés pour la conception de fichiers destinés à l'impression, en veillant à
        la précision des détails et à la qualité des rendus. Ce travail m'a permis de perfectionner mes compétences en design graphique tout en apprenant à adapter
        mes créations aux besoins spécifiques des clients et aux contraintes techniques liées à l'impression.`,
      },
    },
    type: 'experience',
    dateDebut: '2021',
    dateFin: '2024',
  },
]

/*
Liste de detailedParcour qui représente toutes les exp détaillées
*/

export const allDetailedExperiences: DetailedParcour[] = [
  {
    parcour: allExperiences[0],
    information: [
      {
        title: 'En cours',
        description: '',
        image: '/assets/experience/wait.jpg',
      },
    ],
  },
  {
    parcour: allExperiences[1],
    information: [
      {
        title: 'Design',
        image: '/assets/experience/header_bd.png',
        description: `En tant que designer bénévole, j'ai souvent été amené à réaliser divers types de créations, telles que des affiches et des designs textiles, ce qui m'a permis de développer mon sens de la créativité.`,
      },
      {
        title: 'Collaboration',
        image: '/assets/experience/collaboration.jpg',
        description: `Cette expérience m'a permis de collaborer avec d'autres designers, notamment des web designers. J'ai ainsi pu développer mes compétences en travail d'équipe et en gestion de projet. Pour organiser efficacement les projets de groupe, nous utilisions Trello.`,
      },
      {
        title: 'Relation client',
        image: '/assets/experience/relation_client.jpg',
        description: `J'ai parfois été amené à échanger directement avec des clients pour la réalisation de leurs designs. Cette expérience m'a beaucoup fait évoluer en matière de communication. J'ai rapidement compris que les attentes des clients pouvaient être interprétées différemment selon les points de vue. J'ai donc appris à expliquer certains termes techniques de manière simple afin de faciliter la compréhension et la collaboration.`,
      },
    ],
  },
]
