When your book is created on **gitbook.com**, you need to push some content to it. To do so, you can use the online editor or the command line.

If you want to update your book from the command line, you can use [GIT](http://git-scm.com) to push your content:

### GIT Url

Each book is associated with a Git HTTPS url. The ssh protocol is not yet supported on the GitBook's git server.

The format for the git url is:

```
https://git.gitbook.com/{{UserName}}/{{Book}}.git
```

### Authentication

The git server is using your basic GitBook login to authenticate you. When prompted enter your GitBook username and your password (you can also use your API token).

There is no SSH key with GitBook (only https is supported for now, not ssh). If you get an error 403 is because the credentials (username/password) are invalid.

If you not prompted to enter it, you can append the username/password to the url like this:

```
https://username:apitoken@git.gitbook.com/marshallshen/ruby-api-best-practices.git
```


### Saving your credentials

To avoid having to enter your password on each new push, you can add your GitBook credentials to your `~/.netrc` file. Create or append to an existing `~/.netrc` file something like below:

```
machine git.gitbook.com
  login USERNAME-or-EMAIL
  password API-TOKEN-or-PASSWORD
```

We recommend using your **API TOKEN** for security reasons, you can find it [in your settings/tokens](https://www.gitbook.com/settings/tokens)


### Problems when Authenticating?

* [Two-factor auth turned on in Github produces problems authenticating in gitbook](https://github.com/GitbookIO/gitbook/issues/1305)

### Create a new repository on the command line

Supuesto que el libro se ha creado en GitBook y hemos obtenido su URL y queremos forzar sus contenidos con nuestros contenidos locales:

```
touch README.md SUMMARY.md
git init
git add README.md SUMMARY.md
git commit -m "first commit"
git remote add gitbook https://git.gitbook.com/{{UserName}}/{{Book}}.git
git push -u -f gitbook master
```

