
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  /// Login

  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    title: 'login'
  },










  // profesor
  {
    path: 'dashboard',
    loadComponent: () => import('./user/profesor/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard'
  },
  {
    path: 'formulario',
    loadComponent: () => import('./formulario/formulario.component').then(m => m.FormularioComponent),
    title: 'Formulario'
  },
  {
    path: 'labores-academicas',
    loadComponent: () => import('./formulario/paso2-labores-academicas/paso2-labores-academicas.component').then(m => m.Paso2LaboresAcademicasComponent),
    title: 'Labores Académicas'
  },
  {
    path: 'labores-cientificas',
    loadComponent: () => import('./formulario/paso3-labores-cientificas/paso3-labores-cientificas.component').then(m => m.Paso3LaboresCientificasComponent),
    title: 'Labores Cientificas'
  },
  {
    path: 'labores-Extension',
    loadComponent: () => import('./formulario/paso4-labores-extension/paso4-labores-extension.component').then(m => m.Paso4LaboresExtensionComponent),
    title: 'Labores Extension'
  },
  {
    path: 'Gestion-Academica',
    loadComponent: () => import('./formulario/paso5-gestion-academicas/paso5-gestion-academicas.component').then(m => m.Paso5GestionAcademicasComponent),
    title: 'Gestion Academica'
  },
  {
    path: 'Historial-profesor',
    loadComponent: () => import('./user/profesor/historial/historial.component').then(m => m.HistorialComponent),
    title: 'Historial-profesor'
  },
  {
    path: 'FormularioDevuelto-profesor',
    loadComponent: () => import('./user/profesor/formularios-devueltos/formularios-devueltos.component').then(m => m.FormulariosDevueltosComponent),
    title: 'FormularioDevuelto-profesor'
  },

  /// Jefe de Programa

  {
    path: 'dashboardJefePrograma',
    loadComponent: () => import('./user/jefePrograma/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'DashboardJefePrograma'
  },






  // facultad
  
  {
    path: 'dashboardFacultad',
    loadComponent: () => import('./user/facultad/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'DashboardFacultad',
  },






  // facultad

  {
    path: 'dashboardCurriculo',
    loadComponent: () => import('./user/curriculo/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'DashboardCurriculo',
  },





  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'not-found'
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'DEFAULT'
  },
];