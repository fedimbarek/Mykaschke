import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccuilComponent } from './accuil/accuil.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthGuard } from './guards/auth.guard';
import { MagasinComponent } from './magasin/magasin.component';
import { AproposComponent } from './apropos/apropos.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ElectronicComponent } from './electronic/electronic.component';


const routes: Routes = [
  {path:'',title:'accuil',component:AccuilComponent},
{path:'toolbar',title:'Product',component:ToolbarComponent,canActivate:[AuthGuard]},
{path: 'Magasin',title:'Magasin',component : MagasinComponent,canActivate:[AuthGuard]},
{path:'login',title:'admin',component:LoginComponent},
{path:'apropos',title:'Apropos',component:AproposComponent},
{path:'signup',title:'SignUp',component:SignupComponent},
{path:'signin',title:'SignIn',component:SigninComponent},
{path:'Electronic',title:'Electronic',component:ElectronicComponent,canActivate:[AuthGuard]},
//{path:'inscrit',title:'inscription',component:InscritComponent},
{path:'**',title:'Erreur',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
