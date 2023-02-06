/**
 * @license
 * Copyright Nelson Dominguez All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at the root of this project.
 */

import {DOCUMENT} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {NgxIFrameResizerDirective} from './ngx-gist-iframe-resizer.directive';

const IFRAME_RESIZER_CONTENT_WINDOW_CDN_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.3/iframeResizer.contentWindow.min.js';

/**
 * A component to display a GitHub Gist in an iframe.
 *
 * This component uses the {@link https://github.com/davidjbradshaw/iframe-resizer/ iframe-resizer}
 * library wrapped in the {@link NgxIFrameResizerDirective} to resize the iframe to fit it's inner content.
 *
 * @example
 *
 * ```ts
 *  <ngx-gist [gistId]="gistId" [file]="file" [width]="width"></ngx-gist>
 * ```
 *
 * @publicApi
 */
@Component({
  selector: 'ngx-gist',
  templateUrl: './ngx-gist.component.html',
  styleUrls: ['./ngx-gist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGistComponent {
  private _iframeWidth: string = '100%';
  private _iframeId?: string;

  private _gistId!: string;

  @ViewChild('iframe', {static: true}) iframe!: ElementRef;

  /**
   * The id of the gist to display.
   */
  @Input() set gistId(id: string) {
    this._gistId = id;
    const fileId = this.file ? `-file=${this.file}` : '';
    this._iframeId = `gist-${id}${fileId}`;
  }

  /**
   * The file to display. If not specified, the first file in the gist will be displayed.
   */
  @Input() file?: string;

  /**
   * The width of the iframe. Defaults to 100%.
   */
  @Input('width') set iframeWidth(width: string) {
    this._iframeWidth = width;
  }

  get iframeWidth() {
    return this._iframeWidth;
  }

  get gistId() {
    return this._gistId;
  }

  get iframeId() {
    return this._iframeId;
  }

  /**
   * The HTML content to display in the iframe.
   */
  srcdoc?: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private renderer2: Renderer2,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Run outside of Angular zone to prevent change detection from running
    this.ngZone.runOutsideAngular(() => {
      this.initializeIFrame();
    });
  }

  private initializeIFrame() {
    // Set unique id for iframe
    this.renderer2.setAttribute(this.iframe.nativeElement, 'id', `gist-${this.gistId}`);

    const template = this.document.createRange().createContextualFragment('');
    this.renderer2.appendChild(template, this.createIframeResizerContentWindowScripts());
    this.renderer2.appendChild(template, this.createGistScript());
    const serializedHTML = new XMLSerializer().serializeToString(template);

    this.srcdoc = this.sanitizer.bypassSecurityTrustHtml(serializedHTML);

    // Attach target="_blank" to links in iframe.
    // This is needed because the iframe prevents opening links in a new tab.
    this.renderer2.listen(
      this.iframe.nativeElement,
      'load',
      this.attachTargetBlankAttributeToLinks
    );
  }

  private createGistScript() {
    const fileName = this.file ? this.file : '';
    const gistUrl = `https://gist.github.com/${this.gistId}.js?file=${fileName}`;
    const script = this.renderer2.createElement('script');
    this.renderer2.setAttribute(script, 'src', gistUrl);
    this.renderer2.setAttribute(script, 'type', 'text/javascript');
    return script;
  }

  private createIframeResizerContentWindowScripts() {
    const script = this.renderer2.createElement('script');
    this.renderer2.setAttribute(script, 'src', IFRAME_RESIZER_CONTENT_WINDOW_CDN_URL);
    this.renderer2.setAttribute(script, 'type', 'text/javascript');
    return script;
  }

  private attachTargetBlankAttributeToLinks = () => {
    const iframe = this.iframe.nativeElement as HTMLIFrameElement;
    iframe.contentDocument?.querySelectorAll('.gist-meta a').forEach(elem => {
      this.renderer2.setAttribute(elem, 'target', '_blank');
    });
  };
}
