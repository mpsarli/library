<img src="icon.png" align="right" />

# Library
> Herramienta de administración para gestionar libros y autores.

## Tencologías principales

- [react-admin](https://marmelab.com/react-admin/documentation.html) - Marco de trabajo de administración basado en React, que proporciona una interfaz de usuario preconfigurada y componentes personalizables para administrar los datos.
- [JSON Server](https://www.npmjs.com/package/json-server) - Herramienta que permite simular una API REST utilizando un archivo JSON como base de datos.

## Descripción de funcionalidades

- Crear, modificar y listar autores; podrás realizar búsquedas por cualquiera de sus campos (nombre, año de nacimiento y nacionalidad)
- Crear, modificar y listar libros; podrás realizar búsquedas por cualquiera de sus campos (titulo, año de publicación y autor)
- Los libros podrán ser filtrados por usuario, desde un selector que permitirá elegir uno entre todos los existentes.

## Hacer correr el programa en tu maquina

1. Clona el repositorio en tu máquina. El mismo cuenta con dos carpetas: [api](https://github.com/mpsarli/library/tree/main/api) (para la api rest) y [ui](https://github.com/mpsarli/library/tree/main/ui)
2. Haz correr la API REST:
    En una consola, dentro de `library/api` corre en siguiente comando: 
    `json-server --watch dataTest.json`
    ¡y listo! tendrás corriendo la api en localhost:3000
3. Levanta la interfaz
    En otra consola, dentro de `library/ui` corre `yarn dev`

    Una vez corriendo la herramienta podrás acceder a ella en http://localhost:5173/
    Podrás acceder con los siguientes usuarios :
    |   <em>username<em>    |   <em>password<em>    |
    |-----------------------|-----------------------|
    |   pilarsarli  |   password    |
    |   janedoe  |   password    |
    |   johndoe  |   password    |
   