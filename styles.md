## Estilos


You can specify CSS files to be included in your book's website or PDF builds by creating files:

- **styles/website.css**: will apply only to the website
- **styles/pdf.css**: will apply only to the PDF
- **styles/ebook.css**: will apply only to ebook formats (PDF, Mobi, ePub)

These paths can be changed in the book.json configuration, for example to use file in the root folder:

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

Plugins exist to enable [Less](https://plugins.gitbook.com/plugin/styles-less) or [Sass](https://plugins.gitbook.com/plugin/styles-sass) support.
