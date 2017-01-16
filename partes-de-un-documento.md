# Partes de un documento


### Parts

The Table of Contents can be divided into parts separated by headings or horizontal lines:

```markdown
# Summary

### Part I

* [Writing is nice](part1/writing.md)
* [GitBook is nice](part1/gitbook.md)

### Part II

* [We love feedback](part2/feedback_please.md)
* [Better tools for authors](part2/better_tools.md)

----

* [Last part without title](part3/title.md)
```

Parts are just groups of chapters and do not have dedicated pages, but according to the theme, it will show in the navigation.

Es recomendable crear un directorio para cada una de las partes. Nos permitirá agrupar sus páginas, `README.md`, etc.

### Pages

#### Markdown syntax

Most of the files for GitBook use the Markdown syntax by default. GitBook infers your pages's structure from it. The syntax used is similar to the [GitHub Flavored Markdown syntax](https://guides.github.com/features/mastering-markdown/). One can also opt for the [AsciiDoc syntax](asciidoc.md).

##### Example of a chapter file

```markdown
# Title of the chapter

This is a great introduction.

## Section 1

Markdown will dictates _most_ of your **book's structure**

## Section 2

...

```

#### Front Matter

Pages can contain an optional front matter. It can be used to define the page's description. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

```yaml
---
description: This is a short description of my page
---

# The content of my page
...
```

The front matter can define variables of your own, they will be added to the [page variable](templating/variables.md) so you can use them in your templating.


