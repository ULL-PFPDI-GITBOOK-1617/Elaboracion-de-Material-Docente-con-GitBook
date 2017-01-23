### Conceptos

Se llama **control de versiones** a la gestión de los diversos cambios que se realizan sobre los elementos de un proyecto. Una **versión** o **revisión** de un proyecto, es el estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.

**Git**  es un *software de control de versiones* diseñado por Linus Torvalds el autor del Kernel de Linux.

**GitHub** es una plataforma de desarrollo colaborativo en la nube para alojar proyectos utilizando el sistema de control de versiones Git.

### Crear una cuenta en GitHub

* [Crear una cuenta en GitHub](https://github.com/join?source=header-home)

### Transferir un repo en GitBook a GitHub
* [How can I transfer my content to GitHub?](https://help.gitbook.com/github/how-can-i-export-to-repo.html)

From your account's settings, connect your GitHub account and choose what you will allow:

#### Setting up permissions

To integrate your book with GitHub, you need to authorize GitBook to access your GitHub account to some extent. From your [account's settings](https://www.gitbook.com/settings "account settings"), connect your GitHub account and choose what you will allow:

* **Default permissions**: Allows you to authenticate with GitHub on GitBook.
* **Access to public repositories**: Allows editing books on your public GitHub repositories from the GitBook Web editor.
* **Access to private repositories**: Same as above, but for private repositories too.
* **Access to webhook**: Allows GitBook to create webhooks on your book repositories to trigger builds automatically.

Vete a **settings** > ** Profile** y desde ahí a la sección **GitHub** y haz click en el triángulito de **Reconnect GitHub**:

![Dando permisos a Gitbook para acceder a GitHub](/assets/colaboracion/dandopermisosagitbookparaaccederagithub.png)

Una vez allí, escoges **with access to private repositories**.


#### Linking your book to a GitHub repository

From your book's settings page, go to the **GitHub** section, there you can easily specify to which GitHub repository your book will be linked.

In the input form, type in the name of your book's repository in the following format:

```
<github-username>/<github-repository-name>
```

Note that you shouldn't enter neither the full GitHub address, nor the .git extension.

Finally, click on the **Save** button.

### Crear un Gitbook a partir de un repositorio de Github
* [Can I host my content on GitHub?](https://help.gitbook.com/github/can-i-host-on-github.html)

Tener el repositorio en GitHub presenta múltiples ventajas:

* Podemos **viajar en el tiempo** en nuestor proyecto
* Podemos comunicarnos con los otros autores via el gestor de incidencias
* Podemos crear organizaciones para gestionar nuestras clases
* Podemos tener repositorios privados (vía solicitud) para uso académico
* Podemos planificar la secuenciación y reparto de tareas para un libro vía los **projects** asociados con un repositorio
* Podemos llevar un control exhaustivo de quien ha trabajado en que y cuando (grafos, blame, etc.)






