### Conceptos Básicos del Control de Versiones

Se llama **control de versiones** a la gestión de los diversos cambios que se realizan sobre los elementos de un proyecto. Una **versión** o **revisión** de un proyecto, es el estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.

**Git**  es un *software de control de versiones* diseñado por Linus Torvalds el autor del Kernel de Linux.

**GitHub** es una plataforma de desarrollo colaborativo en la nube para alojar proyectos utilizando el sistema de control de versiones Git.

### Como crear una cuenta en GitHub

* [Crear una cuenta en GitHub](https://github.com/join?source=header-home)

### Como transferir un repo en GitBook a GitHub 

* [How can I transfer my content to GitHub?](https://help.gitbook.com/github/how-can-i-export-to-repo.html)

### Crear un Gitbook a partir de un repositorio de Github {#bookingithub}

* [Can I host my content on GitHub?](https://help.gitbook.com/github/can-i-host-on-github.html)


From your **account's settings**, connect your GitHub account and choose what you will allow:

#### Setting up permissions

To integrate your book with GitHub, you need to authorize GitBook to access your GitHub account to some extent. From your [account's settings](https://www.gitbook.com/settings "account settings"), connect your GitHub account and choose what you will allow:

* **Default permissions**: Allows you to authenticate with GitHub on GitBook.
* **Access to public repositories**: Allows editing books on your public GitHub repositories from the GitBook Web editor.
* **Access to private repositories**: Same as above, but for private repositories too.
* **Access to webhook**: Allows GitBook to create webhooks on your book repositories to trigger builds automatically.

Vete a **settings** > ** Profile** y desde ahí a la sección **GitHub** y haz click en el triángulito de **Reconnect GitHub**:

![Dando permisos a Gitbook para acceder a GitHub](/assets/colaboracion/dandopermisosagitbookparaaccederagithub.png)

Una vez allí, escoges **with access to private repositories**.


#### Linking your book to a GitHub repository {#linking} 

From your book's settings page, go to the **GitHub** section, there you can easily specify to which GitHub repository your book will be linked.


{% mermaid %}
graph LR;
  book-settings-page-->GitHub-section;
  GitHub-section-->Select-GitHub-repo;
{% endmermaid %}



In the input form, type in the name of your book's repository in the following format:

```
<github-username>/<github-repository-name>
```

Or select the corresponding repository.

Note that you shouldn't enter neither 
* the full GitHub address, 
* nor the .git extension.

Finally, click on the **Save** button.

![Linking your book to a GitHub repository](/assets/colaboracion/linkingyourbooktoagithubrepo.png)

#### Synchronizing 

After completing [the former step](#linking), the following screen will appear: 

![Synchronizing GitHub repo with GitBook](/assets/colaboracion/syncgithubgitbook.png)

* Si los dos repos difieren se producirá un mensaje de conflicto como el que aprece en la imagen. Elige la versión que quieres que prevalezc, por ejemplo *Force Sync with GitBook content* 
* Si los dos repos están iguales la sincronización terminará con éxito


#### Webhooks


After completing the former step, a new webhook  will appear on the **webhooks** section of your book's GitHub **settings** page. 

![El Webhook que comunica a GitHub con GitBook ha sido instalado](/assets/colaboracion/webhookinstalledforgithubrepo.png)

Si hacemos click en el botón **Edit** veremos algo similar a esto:

![Editando un webhook](/assets/colaboracion/ediciondeunwebhook.png)

#### Configurando WebHooks

To configure a **webhook** on your GitHub repository that will let GitBook know when your repository is updated, you can do the following:

##### On GitHub
* Go to **settings** ⇒ **Webhooks** in your GitHub repo
* Click on the **Add webhook** button to automatically create the webhook in your GitHub repo
  - ![Click on the **Add webhook** button](/assets/colaboracion/add-webhook-button.png)
* Fill the form to configure the webhook. Yes I know you don't know how to fill it. Keep reading
  - ![Configure the webhook](/assets/colaboracion/configuring-webhook.png)
* Add the provided Webhook URL manually to your GitHub repository with access to Push events
* The webhook URL follows this syntax: 
  ```
  https://git.gitbook.com/github?
    book=user-name/book-title&
    username=user-name&
    token=token-value
  ```
  - You know what your user-name is
  - You know what yout book-title is
  - You need a token.
    
##### Getting an Authentication token on GitBook

* To get a token go to your **personal settings** and from there to **Applications/Tokens**
  - ![How to get a token](/assets/colaboracion/generate-a-token.png)
  
##### The Check Webhook button on GitBook

* Either way, clicking on the **Check webhook**s button 
  -![Clicking on the **Check webhook**s button](/assets/colaboracion/check-webhook-button-gitbook.png)
* Will lead you to your GitHub repo settings page where you should see the newly created webhook
  - ![Leads you to your GitHub repo settings page](/assets/colaboracion/leads-you-to-github-webhook.png)

##### The consequence

The next push event to your GitHub repository will trigger a new update of your book on GitBook.


### Ventajas de Tener el Repositorio del Libro Alojado en GitHub

Tener el repositorio en GitHub presenta múltiples ventajas:

* Podemos **viajar en el tiempo** en nuestro proyecto
* Podemos comunicarnos con los otros autores/alumnos via el gestor de incidencias
* Podemos crear organizaciones para gestionar nuestras clases
* Podemos tener repositorios privados (vía solicitud) para uso académico
* Podemos planificar la secuenciación y reparto de tareas para un libro o una tarea vía los **projects** asociados con un repositorio (similar a Trello)
* Podemos llevar un control exhaustivo de quien ha trabajado en que y cuando (grafos, blame, etc.)
* Podemos usar GitHub Classroom para manejar las tareas que marcamos a nuestros estudiantes






