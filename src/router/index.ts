import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import DetailedProject from '../views/DetailedProjectView.vue'
import MySkills from '../views/MySkillsView.vue'
import PageErreur from '../views/PageErreurView.vue'
import ContactView from '../views/ContactView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import PageFormationView from '../views/PageFormationView.vue'
import DetailedParcourView from '../views/DetailedParcourView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectsView,
    },
    {
      path: '/project/:id',
      name: 'detailedProject',
      component: DetailedProject,
    },
    {
      path: '/skills',
      name: 'skills',
      component: MySkills,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/formation',
      name: 'formation',
      component: PageFormationView,
    },
    {
      path: '/experience/:id',
      name: 'detailedExperience',
      component: DetailedParcourView,
    },
    {
      path: '/formation/:id',
      name: 'detailedFormation',
      component: DetailedParcourView,
    },
    { path: '/404', name: '404', component: PageErreur },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
})

export default router
