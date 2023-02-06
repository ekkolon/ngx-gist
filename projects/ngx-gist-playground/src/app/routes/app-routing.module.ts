import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApiReferenceComponent} from './api-reference/api-reference.component';
import {ExamplesComponent} from './examples/examples.component';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {HomeComponent} from './home/home.component';
import {SecurityComponent} from './security/security.component';

const routes: Routes = [
  {
    path: 'getting-started',
    component: GettingStartedComponent,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
  },
  {
    path: 'security',
    component: SecurityComponent,
  },
  {
    path: 'api-reference',
    component: ApiReferenceComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
