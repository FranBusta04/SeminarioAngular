import { Routes } from '@angular/router';
import { CellStoreHome } from './cell-store-home/cell-store-home';
import { CellStoreAbout } from './cell-store-about/cell-store-about';

export const routes: Routes = [
    {
        path: '',
        component: CellStoreHome
    },
    {
        path: 'home',
        component: CellStoreHome

    },
    {
        path: 'about',
        component: CellStoreAbout
    },
    

];
