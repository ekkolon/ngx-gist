/**
 * @license
 * Copyright Nelson Dominguez All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at the root of this project.
 */

import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';

import {IFrameComponent, IFrameOptions, iframeResizer} from 'iframe-resizer';

/**
 * A directive that resizes the iframe to fit it's inner content.
 *
 * This directive uses the {@link https://github.com/davidjbradshaw/iframe-resizer/ iframe-resizer} under the hood.
 *
 * @internalApi
 */
@Directive({
  selector: '[ngxIFrameResizer]',
})
export class NgxIFrameResizerDirective implements AfterViewInit, OnDestroy {
  component?: IFrameComponent | null;

  private options: IFrameOptions = {
    checkOrigin: false,
    heightCalculationMethod: 'documentElementOffset',
    log: false,
    inPageLinks: true,
    bodyMargin: '0 0 0 0',
    autoResize: true,
  };

  constructor(public element: ElementRef) {}

  ngAfterViewInit() {
    const components = iframeResizer(this.options, this.element.nativeElement);
    this.component = components && components.length > 0 ? components[0] : null;
  }

  ngOnDestroy(): void {
    if (this.component && this.component.iFrameResizer) {
      this.component.iFrameResizer.close();
    }
  }
}
