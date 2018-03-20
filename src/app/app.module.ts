import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PositionListComponent } from './position/position-list/position-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PositionsDetailsComponent } from './position/positions-details/positions-details.component';
import { PositionCreateComponent } from './position/position-create/position-create.component';
import { HeaderComponent } from './common/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PositionEditComponent } from './position/position-edit/position-edit.component';
import { CapitaliseDirective } from './common/directives/capitalise.directive';

const appRoutes: Routes = [
  {
    path: 'positions',
    component: PositionListComponent,
    data: { title: 'Position List' }
  },
  {
    path: 'positions-details/:id',
    component: PositionsDetailsComponent,
    data: { title: 'Position Details' }
  },
  {
    path: 'positions-create',
    component: PositionCreateComponent,
    data: {title: 'Create New Position'}
  },
  {
    path: 'positions-edit/:id',
    component: PositionEditComponent,
    data: { title: 'Edit Position Details' }
  },
  { path: '',
    redirectTo: '/positions',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PositionListComponent,
    PositionsDetailsComponent,
    PositionCreateComponent,
    HeaderComponent,
    PositionEditComponent,
    CapitaliseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging purpose
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
