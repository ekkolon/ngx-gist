import {Component} from '@angular/core';

@Component({
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent {
  installationStep1 = `npm install iframe-resizer`;

  installationStep2 = `npm install @ekkolon/ngx-gist`;

  installationStep3 = `yarn add @ekkolon/ngx-gist`;

  usageStep1 = `// app.module.ts

import {NgxGistModule} from '@ekkolon/ngx-gist';

export class AppModule {
    ...
    imports: [
        ...
        NgxGistModule
    ]
}`;

  usageStep2 = `<!-- app.component.html -->
...

<!-- Embedding the first (or only) file -->
<div class="my-awesome-gist-container">
  <ngx-gist [gistId]="GIST_ID"></ngx-gist>
</div>

<!-- Embedding a specific file -->
<div class="my-awesome-gist-container">
  <ngx-gist [gistId]="GIST_ID" [file]="my-gist-file.ts"></ngx-gist>
</div>

...`;
}
