import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CapitalComponent } from './country/pages/capital/capital.component'
import { CountryComponent } from './country/pages/country/country.component'
import { RegionComponent } from './country/pages/region/region.component'
import { ViewCountryComponent } from './country/pages/view-country/view-country.component'

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent,
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'country/:countryId',
        component: ViewCountryComponent
    },
    {
        path: '**',
        redirectTo: '',
        //component: 404Component
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}