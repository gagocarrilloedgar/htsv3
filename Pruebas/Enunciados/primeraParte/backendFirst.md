# HACK THAT STARTUP V3 | BACKEND VERSION

Sí has llegado hasta aquí es porque estás preparado para darle caña y poder pasar de nivel.

Te proponemos ahora lo siguiente:

---

**Unit Testing**

Para poder revisar que las funciones creadas funcionan complemente, implementa algún test unitario para revisar que realmente está funcionando.

Algunas librerias utilizadas por empresas para implementar tests:

- [Jest](https://github.com/facebook/jest)
- [Mocha](https://github.com/mochajs/mocha)
- [Supertest]()

---

### API

Ahora queremos crear una pequeña api que permita conectarse con nuestra base de datos que se encuentra en MongoDB y de esta forma poder enviar datos a nuestro squad de front.

**Obejtivos**

- Levantar un server en el puerto 3000
- Crear una base de datos en MongoDB Atlas y conectarse utilizando el string de conexión
- Crear un modelo de usuario y aplicar las condiciones que sean necesarias para que el username y el email sean únicos:

```js
{
    username:{type:string},
    password:{type:string},
    email:{type:string},
    repos:{type:Number}
}
```

- Cread un modelo de repositorio para poder almacenar las difererentes datos de los repositorios:

```js
{
    name:{type:string},
    url:{type:string},
    description:{type:string},
    stack:[]
}
```

- Cread un método para proteger las contraseñas guardadas por el usuarios
- Cread el CRUD de ambos modelos
- Conectaros a la API de github y encontar el ID del proyecto HTSV2 de gagocarrilloedgar y utilizadlo para para desbloquear los siguientes pasos:

### Evaluación del código

- Calidad de código (bugs, errores, duplicados, etc)
- Objetivos cumplidos
- Documentación proporcionada
- Velocidad de dessarrollo
