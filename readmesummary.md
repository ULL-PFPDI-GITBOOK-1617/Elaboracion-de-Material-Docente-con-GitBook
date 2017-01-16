# Resumen y tabla de contenidos

### Readme (resumen)

GitBook uses a `README.md` file to summarize the objectives and main contents of the book.

Both, the book itself and any of its chapters, has a `README.md` as an introduction or a prologue for the book or chapter.

Both the book itself and any chapter of it has a readme as an introduction or a prologue of it

### Summary (tabla de contenidos)

GitBook uses a `SUMMARY.md` file to define the structure of chapters and subchapters of the book. The `SUMMARY.md` file is used to generate the book's table of contents.

The format of `SUMMARY.md` is just a list of links. The link's title is used as the chapter's title, and the link's target is a path to that chapter's file.

Adding a nested list to a parent chapter will create subchapters.

##### Simple example

```markdown
# Summary

* [Part I](part1/README.md)
    * [Writing is nice](part1/writing.md)
    * [GitBook is nice](part1/gitbook.md)
* [Part II](part2/README.md)
    * [We love feedback](part2/feedback_please.md)
    * [Better tools for authors](part2/better_tools.md)
```

Each chapter has a dedicated page (`part#/README.md`) and is split into subchapters.

##### Anchors

Chapters in the Table of Contents can be pointing to specific part of a file using anchor.

```markdown
# Summary

### Part I

* [Part I](part1/README.md)
    * [Writing is nice](part1/README.md#writing)
    * [GitBook is nice](part1/README.md#gitbook)
* [Part II](part2/README.md)
    * [We love feedback](part2/README.md#feedback)
    * [Better tools for authors](part2/README.md#tools)
```
En el fichero `part1/README.md`deberá aparecer algo como esto:


```markdown
### Writing is fun {#writing}
...
### GitBook is nice {#gitbook}
...
### Send us Feedback {#feedback}
...
### Better Tools {#tools}
...

```

