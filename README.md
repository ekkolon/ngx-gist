# ngx-gist

[![NPM Version][npm-image]][npm-url]

A simple and lightweight library for embedding GitHub Gists in your Angular applications.

![Alt text](/projects/ngx-gist-playground/src/assets/animated/ngx-gist-example.gif?raw=true "Optional Title")

## Features

- Embed all files from a GitHub gist
- Embed a single target file
- Auto-sized iframe
- Runs outside NgZone

## Prequisites

Make sure to have `iframe-resizer` installed. This library is needed for auto-resizing the iframe in which the gist is rendered.</p>

```shell
npm install iframe-resizer
```

**Install `ngx-gist`**

```bash
npm install @ekkolon/ngx-gist
```

## Usage

```ts
// app.module.ts

import {NgxGistModule} from '@ekkolon/ngx-gist'

export class AppModule {
    ...
    imports: [
        ...
        NgxGistModule
    ]
}
```

```html
<!-- app.component.html -->
...

<!-- Display all files -->
<div class="my-awesome-gist-container">
  <ngx-gist [gistId]="GIST_ID"></ngx-gist>
</div>

<!-- Display a specific file -->
<div class="my-awesome-gist-container">
  <ngx-gist [gistId]="GIST_ID" [file]="my-gist-file.ts"></ngx-gist>
</div>

...
```

## Authors

- [@ekkolon](https://www.github.com/ekkolon)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer/)
  This library is used to adjust the iframe's height automatically.

[npm-image]: https://img.shields.io/npm/v/@ekkolon/ngx-gist.svg
[npm-url]: https://npmjs.org/package/@ekkolon/ngx-gist
