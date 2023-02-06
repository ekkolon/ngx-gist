/**
 * @license
 * Copyright Nelson Dominguez All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at the root of this project.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

import {NgxGistModule} from '@ekkolon/ngx-gist';

import {AppComponent} from './app.component';
import {ApiReferenceComponent} from './routes/api-reference/api-reference.component';
import {AppRoutingModule} from './routes/app-routing.module';
import {ExamplesComponent} from './routes/examples/examples.component';
import {GettingStartedComponent} from './routes/getting-started/getting-started.component';
import {HomeComponent} from './routes/home/home.component';
import {SecurityComponent} from './routes/security/security.component';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GettingStartedComponent,
    ExamplesComponent,
    SecurityComponent,
    ApiReferenceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGistModule,
    AppRoutingModule,
    HighlightModule,
    ...materialModules,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: async () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js' as any), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          shell: () => import('highlight.js/lib/languages/shell'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        //themePath: 'path-to-theme.css', // Optional, and useful if you want to change the theme dynamically
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
