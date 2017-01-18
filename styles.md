## Estilos


You can specify [CSS files](https://gitbookio.gitbooks.io/documentation/content/styling/book.html) to be included in your book's website or PDF builds by creating files:

- **styles/website.css**: will apply only to the website
- **styles/pdf.css**: will apply only to the PDF
- **styles/ebook.css**: will apply only to ebook formats (PDF, Mobi, ePub)

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
Por ejemplo en el repositorio de este mismo libro [Elaboración de Material Docente con Gitbook](https://github.com/ULL-PFPDI-GITBOOK-1617/Elaboracion-de-Material-Docente-con-GitBook/) puede 
ver en el directorio `styles` 
el contenido del fichero [website.css](https://github.com/ULL-PFPDI-GITBOOK-1617/Elaboracion-de-Material-Docente-con-GitBook/blob/master/styles/website.css).


Plugins exist to enable [Less](https://plugins.gitbook.com/plugin/styles-less) or [Sass](https://plugins.gitbook.com/plugin/styles-sass) support.
