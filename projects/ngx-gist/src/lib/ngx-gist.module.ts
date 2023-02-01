/**
 * @license
 * Copyright Nelson Dominguez All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at the root of this project.
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {NgxIFrameResizerDirective} from './ngx-gist-iframe-resizer.directive';
import {NgxGistComponent} from './ngx-gist.component';

@NgModule({
  declarations: [NgxIFrameResizerDirective, NgxGistComponent],
  imports: [CommonModule],
  exports: [NgxGistComponent],
})
export class NgxGistModule {}
