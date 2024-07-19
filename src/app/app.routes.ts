import { Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ThreePlayersComponent } from './game/three-players/three-players.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent
    },
    {
        path: 'three-players', component: ThreePlayersComponent
    }
];
