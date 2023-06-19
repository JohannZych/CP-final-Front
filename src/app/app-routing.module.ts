import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdviceComponent} from "./advice/advice.component";
import {ProfileComponent} from "./profile/profile.component";
import {PostFormComponent} from "./post-form/post-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'advice', component: AdviceComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'post-form', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
