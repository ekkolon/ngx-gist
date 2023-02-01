
# Angular GitHub Gist Embed

[![NPM Version][npm-image]][npm-url]

A small Angular library for embedding GitHub Gists in your Angular applications.

The iframe in which the gist embed is rendered, will automatically adjust it's size based on the gist's inner content height.

[npm-image]: https://img.shields.io/npm/v/@ekkolon/ngx-gist.svg
[npm-url]: https://npmjs.org/package/@ekkolon/ngx-gist

## Installation

Install required peer dependencies:

```bash
  npm install iframe-resizer dompurify
```

Install the library:


```bash
  npm install @ekkolon/ngx-gist

  # or
  yarn add @ekkolon/ngx-gist
```

    
## Usage/Examples

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
    <!-- Embedding the first (or only) file -->
    <div class="my-awesome-gist-container">
        <ngx-gist [gistId]="GIST_ID"></ngx-gist>
    </div>

    <!-- Embedding a specific file -->
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
