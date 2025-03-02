import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InformesComponent } from './principal/informes/informes.component';
import { MisTareasComponent } from './principal/mis-tareas/mis-tareas.component';
import { ProyectoComponent } from './principal/proyecto/proyecto.component';
import { TablerosComponent } from './principal/tableros/tableros.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Ruta predeterminada
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'proyectos', component: ProyectoComponent },
    {path: 'tableros', component: TablerosComponent},
    {path: 'mis-tareas', component:MisTareasComponent},
    {path:'informes', component: InformesComponent}
];
