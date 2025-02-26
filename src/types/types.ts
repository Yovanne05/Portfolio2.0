export type NavigationPage = {
  name: string
  urlName: string
}

export type TechInfo = {
  skills: Array<Logo>
  bilan: string
}

export type Project = {
  name: string
  image: string
  description: string
  redirection?: string
  infoTech: TechInfo
  id: number
}

export type Information = {
  title: string
  image: string
  description: string
}

export type ProjectInformations = {
  information: Array<Information>
  project: Project
}

export type Logo = {
  name: string
  path: string
}

export type Contact = {
  name: string
  path: string
  redirectTo: string
}

export type Parcour = {
  infoGeneral: Project
  type: string
  dateDebut: string
  dateFin: string
}

export type DetailedParcour = {
  information: Array<Information>
  parcour: Parcour
}
