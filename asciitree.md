#AsciiTree

Permite añadir una estructura de arbol a nuestro libro
``` markdown
{% asciitree %}
app
-main.js
-helper.js
-others
--Brocfile.js
package.json
{% endasciitree %}
```
Cada subnivel se añade con `-`

Este ejemplo daría el siguiente resultado:

{% asciitree %}
app
-main.js
-helper.js
-others
--Brocfile.js
package.json
{% endasciitree %}
