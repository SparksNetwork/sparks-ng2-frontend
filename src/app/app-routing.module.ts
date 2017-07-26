import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from "app/core/services/auth-guard.service";
import { AuthService } from "app/core/services/auth.service";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'project', loadChildren: 'app/projects/projects.module#ProjectsModule' },
    {
        path: 'profile',
        loadChildren: 'app/user-profile/user-profile.module#UserProfileModule',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        //canLoad: [AuthGuard],
    },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }