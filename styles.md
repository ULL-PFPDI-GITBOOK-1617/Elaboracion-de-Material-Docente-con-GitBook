## Estilos

### Como Personalizar el Estilo de Nuestro Libro
You can specify [CSS files](https://gitbookio.gitbooks.io/documentation/content/styling/book.html) to be included in your book's website or PDF builds by creating files:

- **styles/website.css**: will apply only to the website
- **styles/pdf.css**: will apply only to the PDF
- **styles/ebook.css**: will apply only to ebook formats (PDF, Mobi, ePub)

### What is CSS?

[CSS](http://www.w3schools.com/css/css_intro.asp) 
stands for Cascading Style Sheets.

CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media.

### Changing the default path to style files

These paths can be changed in the `book.json` configuration, for example to use file in the root folder:

```json
{
    "styles": {
        "website": "styles/website.css",
        "ebook": "styles/ebook.css",
        "pdf": "styles/pdf.css",
        "mobi": "styles/mobi.css",
        "epub": "styles/epub.css"
    }
}
```
### Ejemplo

Por ejemplo, en el repositorio en GitHub de este mismo libro [Elaboración de Material Docente con Gitbook](https://github.com/ULL-PFPDI-GITBOOK-1617/Elaboracion-de-Material-Docente-con-GitBook/) puede 
ver en el directorio `styles` 
el contenido del fichero [website.css](https://github.com/ULL-PFPDI-GITBOOK-1617/Elaboracion-de-Material-Docente-con-GitBook/blob/master/styles/website.css).

El estilo en este caso está para configurar los *captions* de las figuras, lo que se hace de acuerdo a las instrucciones del plugin [image-captions](https://www.npmjs.com/package/gitbook-plugin-image-captions).

The plugin [image-captions](https://www.npmjs.com/package/gitbook-plugin-image-captions) adds nice generated captions to your book images. This plugin converts `alt` or `title` attributes of your images into the captions. Works on both the GitBook website and your own generated book (pdf, mobi).

- [Ejemplo desplegado en GitBook](https://tdvorak.gitbooks.io/test-book/content/phetchaburi.html)
- [Ejemplo desplegado en GitHub](https://crguezl.github.io/tdvorak-image-captions-plugin-test/)
- [Fuente del ejemplo](https://github.com/crguezl/tdvorak-image-captions-plugin-test)

### Less y Sass

Plugins exist to enable [Less](https://plugins.gitbook.com/plugin/styles-less) or [Sass](https://plugins.gitbook.com/plugin/styles-sass) support.
