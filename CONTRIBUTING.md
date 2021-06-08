# Formas de contribución

Para contribuir al proyecto únicamente tienes que:

- Clonar el repositorio
- Actulizar los paquetes
- Crear la rama con el feature o actuliación
- Hacer commit y push a tu rama
- Pedir pull request o code review
- Esperar a que alguno de los administradores haga merge a la rama dev
- Al empezar a prorgramar siempre hacer pull de la rama dev por si hay actualizaciones:

```shell
git pull origin dev
````

# Flow a seguir 
Seguimos Gitflow, que consiste brevemente en:

- Push a cada una de las ramas de los features
- Merge constantes de las ramas de features a la rama dev (2-3 veces a la semana)
- Merge mensual a la rama main desde dónde se hará el deploy
