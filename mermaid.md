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

O bien este:

```
{% mermaid %}
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
{% endmermaid %}
```
Con el siguiente resultado:

{% mermaid %}
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
{% endmermaid %}