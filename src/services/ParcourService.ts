import { allDetailedParcours } from './../data/parcour'
import type { Parcour, DetailedParcour } from '../types/types'

export class ParcourService {
  findParcourById(id: number): Parcour | null {
    const detailedPacours = this.findParcourDetailsById(id)
    return detailedPacours ? detailedPacours.parcour : null
  }

  findParcourDetailsById(id: number): DetailedParcour | null {
    const detailedPacours = allDetailedParcours.find(
      (detailedPacours) => detailedPacours.parcour.infoGeneral.id === id,
    )
    return detailedPacours ? detailedPacours : null
  }

  getAllPacour(): Parcour[] {
    return allDetailedParcours.map((detailedPacours) => detailedPacours.parcour)
  }
}
