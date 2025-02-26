import { detailedProjects } from '../data/data'
import type { Project, ProjectInformations } from '../types/types'

export class ProjectService {
  findProjectById(id: number): Project | null {
    const detailedProject = this.findProjectDetailsById(id)
    return detailedProject ? detailedProject.project : null
  }

  findProjectDetailsById(id: number): ProjectInformations | null {
    const detailedProject = detailedProjects.find(
      (detailedProject) => detailedProject.project.id === id,
    )
    return detailedProject ? detailedProject : null
  }

  getAllProject(): Project[] {
    return detailedProjects.map((detailedProject) => detailedProject.project)
  }
}
