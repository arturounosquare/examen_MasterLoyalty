import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        //Aplicando lazyload
        path: "Authentication", 
        loadComponent: () => import('./auth/pages/login/login.component').then(mod => mod.LoginComponent)
    }, 
    {
        path: "shopping", 
        loadComponent: () => import('./shoppingCart/pages/home/home.component').then(mod => mod.HomeComponent)
    },     
    {
        path: "**", redirectTo:"Authentication"
    }    
];
