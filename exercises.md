#Exercises

Este plugin nos permite añadir ejercicios a nuestro libro de gitbook.

Para ello instalamos el plugin y un ejemplo de su utilización sería el siguiente:

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

y produce lo siguiente:

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
