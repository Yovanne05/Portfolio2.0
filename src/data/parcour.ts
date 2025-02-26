import { allDetailedExperiences } from './experience'
import { allDetailedFormation } from './formation'
import type { DetailedParcour } from '../types/types'

/*
Liste de DetailedParcour qui représente tout les Parcour (formations et expériences)
*/

export const allDetailedParcours: DetailedParcour[] = [
  ...allDetailedExperiences,
  ...allDetailedFormation,
]
