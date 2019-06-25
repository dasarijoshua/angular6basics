import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatetimeComponent } from './datetime/datetime.component';
import { FirstComponent } from './first/first.component';
import { ViewComponentComponent } from './view/view-component/view-component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';

const routes: Routes = [
    // { path: 'datetime', component: DatetimeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
        children:[
            { path: 'profile', component: ProfileComponent },
            { path: 'contact', component: ContactUsComponent }
        ]
    },
    { path: 'datetime', component: DatetimeComponent },
    { path: 'first', component: FirstComponent },
    { path: 'view', component: ViewComponentComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
