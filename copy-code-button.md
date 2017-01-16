#Copy Code Button

Permite añadir un boton para copiar automaticamente el texto situado en un campo `code`

Ejemplo:

``` markdown

{% exercise %}
Define a variable `x` equal to 10.
{% initial %}
var x =
{% solution %}
var x = 10;
{% validation %}
assert(x == 10);
{% context %}
function magicFunc() {
    return 3;
}
{% endexercise %}

```