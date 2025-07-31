import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';

export const routes: Routes = [
    {path: '', component: HomePage, pathMatch: 'full'},
    {
        path: 'login',
        loadComponent: () => loadRemoteModule('loginPage', './Component').then((m) => m.AppLogin)
    },
    {
        path: 'react',
        loadComponent: () => loadRemoteModule('reactApp', './App').then(m => m.default)
    }
];
