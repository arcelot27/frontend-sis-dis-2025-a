import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    title: 'login'
  },

  // Profesor
  {
    path: 'dashboard',
    loadComponent: () => import('./user/profesor/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    title: 'Dashboard'
  },
  {
    path: 'formulario',
    loadComponent: () => import('./formulario/formulario.component').then(m => m.FormularioComponent),
    canActivate: [AuthGuard],
    title: 'Formulario'
  },
  {
    path: 'labores-academicas',
    loadComponent: () => import('./formulario/paso2-labores-academicas/paso2-labores-academicas.component').then(m => m.Paso2LaboresAcademicasComponent),
    canActivate: [AuthGuard],
    title: 'Labores Académicas'
  },
  {
    path: 'labores-cientificas',
    loadComponent: () => import('./formulario/paso3-labores-cientificas/paso3-labores-cientificas.component').then(m => m.Paso3LaboresCientificasComponent),
    canActivate: [AuthGuard],
    title: 'Labores Cientificas'
  },
  {
    path: 'labores-Extension',
    loadComponent: () => import('./formulario/paso4-labores-extension/paso4-labores-extension.component').then(m => m.Paso4LaboresExtensionComponent),
    canActivate: [AuthGuard],
    title: 'Labores Extension'
  },
  {
    path: 'Gestion-Academica',
    loadComponent: () => import('./formulario/paso5-gestion-academicas/paso5-gestion-academicas.component').then(m => m.Paso5GestionAcademicaComponent),
    canActivate: [AuthGuard],
    title: 'Gestion Academica'
  },
  {
    path: 'Historial-profesor',
    loadComponent: () => import('./user/profesor/historial/historial.component').then(m => m.HistorialComponent),
    canActivate: [AuthGuard],
    title: 'Historial-profesor'
  },
  {
    path: 'FormularioDevuelto-profesor',
    loadComponent: () => import('./user/profesor/formularios-devueltos/formularios-devueltos.component').then(m => m.FormulariosDevueltosComponent),
    canActivate: [AuthGuard],
    title: 'FormularioDevuelto-profesor'

  },

  //{
  //path: 'dashboardAdmin',
  //loadComponent: () => import('./user/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
  //canActivate: [AuthGuard],
  //title: 'DashboardAdmin'
//}


  // Jefe de Programa
  {
    path: 'dashboardJefePrograma',
    loadComponent: () => import('./user/jefePrograma/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    title: 'DashboardJefePrograma'
  },
  {
    path: 'aprobar-formularios',
    loadComponent: () => import('./user/jefePrograma/formularios-aprobar/formularios-aprobar.component').then(m => m.FormulariosAprobarComponent),
    canActivate: [AuthGuard],
    title: 'aprobar-formularios'
  },

  // Facultad
  {
    path: 'dashboardFacultad',
    loadComponent: () => import('./user/facultad/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    title: 'DashboardFacultad'
  },

  // Currículo
  {
    path: 'dashboardCurriculo',
    loadComponent: () => import('./user/curriculo/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    title: 'DashboardCurriculo'
  },

  // Página no encontrada
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'not-found'
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'DEFAULT'
  }
];
