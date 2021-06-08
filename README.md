# HTSV3

![GitHub forks](https://img.shields.io/github/forks/gagocarrilloedgar/htsv3)
![GitHub language count](https://img.shields.io/github/languages/count/gagocarrilloedgar/htsv3)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/gagocarrilloedgar/htsv3)


Soluciones y proyecto colaborativo open source de búsqueda de perfiles a través de github, etc (nuevas features to come)

### ¿Cómo empezar?

```shell
 git clone https://github.com/gagocarrilloedgar/htsv3
```

### ¿Qué te vas a encontrar?

Dentro del repositorio principal te vas a encontrar 3 carpetas:

- Pruebas --> Se encuentran las funciones de filtrado básicas para poder empezar a programar y algo de testing. 
- frontend --> Respositorio completo con el código para el backend 
- backend --> Repositorio completo con el código para el frontend 

### Formas para colaborar

Cada carpeta tiene sus modulos por lo que para empezar installar todos los paquetes: 

```shell
 npm install
```

Una vez, tengáis los paquetes instalados simplemente crear una rama con el nombre del update o característica que le vais a agregar a la rama.

ejemplo:

```shell
 git branch [nombre_del_update]
```
Una vez la rama creada pasad a vuestra rama: 

```shell
 git checkout [nombre_del_update]
```
y ya podéis empezar a trabajar.

**Submit del código**

Simplemente podéis hacer push a vuestra rama. Intentad que el commit sea lo más explicativo posible, haciéndolo de la siguiente manera:


```shell
 git add .
```

```shell
 git commit -m "Título del commit" -m "Descripción del commit"
```

```shell
 git push origin [nombre_del_update]
```

Una vez hecho submit, podéis hacer pull request y pedir que alguien os haga code review ( va bastante bien), podéis empezar directamente por pedirmelo a mí si os da osa y los iré revisando (Edgar Gago Garrillo)


# Funcionalidades

- Buscador de perfiles de github por nombre
- Crear un motor de búsqueda que permita filtrar por país, lenguaje, organizaciones, etc.
- Poder buscar en Gitlab, Github y Stackoverlflow a la vez
- ¿Sugerncias?


# TO-DO
- Proponer maqueta en figma del frontend
- Proponer arquitectura hexagonal del backend
- Proponer arquitectura hexagonal del frontend
- Revisar el Mongo-Mock-Server y cómo hacer testing the forma correcta del backend y documentarlo
- Crear la estructura de carpetas siguiendo Hexagonal + Clean architecture (uno implica casi el otro)
- Crear vista de login
- Crear vista de register
- Crear modelo de user y team en el backend 





