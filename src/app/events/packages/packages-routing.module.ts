import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PackageComponent } from './package/package.component';
import { PackagesComponent } from "app/events/packages/packages.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PackagesComponent,
                children: [
                    {
                        path: ':packageId',
                        component: PackageComponent
                    },
                ]
            }
        ]),
        SharedModule
    ], exports: [RouterModule],

})
export class PackagesRoutingModule { }

export const routedComponents = [PackageComponent, PackagesComponent]