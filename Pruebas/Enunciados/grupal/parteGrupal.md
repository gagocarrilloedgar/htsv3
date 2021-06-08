# HACK THAT STARTUP V3 | FullStack VERSION

Va siendo hora que el equipo se ponga en marcha. Después de haber trabajado por separado, tendréis que poner puntos en común, valorar que ha hecho cada uno, como váis a dividir el trabajo y que ponentes reutilzar.

Para la prueba grupal va a ser importante que se documente el proceso de creación del códio y se defina un esquema de como se ha hecho la arquitectura ( Front + Back)

----

**Previamente...**

Si habéis llegado ahsta aquí tendréis:

- Una API con crud para users y repos
- Posiblemente algo de testing
- Backend implementado en MongoDB
- Un front con ReactJS responsive y varias vistas:
    - login
    - register
    - principal

**Objetivos**

Ahora el problema que se plantea es el siguiente:

- Implementar el sistema de login y conectarlo con el frontend. Este sistema puede ser social login, user/psswd, local startegy de passport, lo que más os guste.

- Cread un modelo de equipo que permita agrupar diferentes usuarios de github, personlizar el nombre de github y poder añadir una descripción de equipo.

- Implementar los controllers necesarios para gestionar los miembros del equipo

- Desde el front implementad algún método de gestión del estado y implementar de la forma que mejor creáis en la vista principal una forma para que:

    - Se puedan buscar usuarios de github
    - Visualizar al usuario en format card
    - Visualizar sus repositorios
    - Poder crear y geestionar equipos desde tu panel de control
    - Poder añadir y eliminar usarios a tus equipos

- Finalmente cread un componente estilo tarjeta de crédito desde dónde los usuarios podrán canjear los créditos que tengan por hipotéticas mejoras para su equipo.
- Desde el backend tendrán que crear un modelo de tarjeta de crédito que permita gestionar y guardar los créditos, nombre y número y fecha de la tarjeta de crédito.

----

Sí, os queda algo de tiempo:

- Hacer deploy del proyecto
- Documentar el proyecto
- Añadir una explicación de cómo lo habéis implementado y el porqué de tanto la parte visual como del backend

### Evaluación del código

- Calidad de código (bugs, errores, duplicados, etc)
- Objetivos cumplidos
- Explicación + Documentación proporcionada
- Trabajo en equipo y reutilización de componentes
- Velocidad de dessarrollo (es solo en caso de empate crítico)