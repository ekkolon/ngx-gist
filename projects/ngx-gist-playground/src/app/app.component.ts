/**
 * @license
 * Copyright Nelson Dominguez All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at the root of this project.
 */

import {Component} from '@angular/core';

import {routerLinks} from './navigation/router-links';

@Component({
  selector: 'ngx-gist-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  GITHUB_REPO_URL = 'https://github.com/ekkolon/ngx-gist';
  title = 'ngx-gist-playground';

  routerLinks = routerLinks;
}
