# Autocover

Este plugin nos genera automaticamente una portada para nuestro libro.

Se configura de la siguiente forma:

``` json

{
    "plugins": ["autocover"],
    "pluginsConfig": {
        "autocover": {

        }
    }
}
```

Dentro del apartado `pluginsConfig` y dentro de `autocover` se pueden añadir las siguientes opciones:

``` json
{
    "title": "My Book",
    "author": "Author",
    "pluginsConfig": {
        "autocover": {
            "font": {
                "size": null,
                "family": "Impact",
                "color": "#FFF"
            },
            "size": {
                "w": 1800,
                "h": 2360
            },
            "background": {
                "color": "#09F"
            }
        }
    }
}
```
