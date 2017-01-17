# Mermaid

Es un plugin que nos permite dibujar grafos en nuestro libro.

Su sintaxis es la siguiente: 

``` markdown
{% mermaid %}
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
{% endmermaid %}
```

Con el siguiente resultado:

{% mermaid %}
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
{% endmermaid %}