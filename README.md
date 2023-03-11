# sequelize-project

0: Crear .env <br>
  0.1: Introducir datos relativos a la BBDD

1: Index.js principal
  1.1: Crear conexión a BBDD
  1.2: Crear función de comprobar conexión
  1.3: Crear index.js en la carpeta 'database'
  1.4: Mover la conexión y la función de comprobación al index de database
  1.5: Exportar la función de comprobación
  1.6: Importar en index.js principal y comprobar que funciona igual

2: Asincronía
  2.1: Usar un console.log en el index.js principal para demostrar que se mostrará antes en la terminal que el mensaje de comprobación de conexión a BBDD.
  2.2: Crear función asíncrona en index.js que se encargue de la conexión a la base de datos. Introducir la función de comprobar conexión.
  2.3: Crear función startAPI que ejecute primero la nueva función de conexión a BBDD y luego haga el console.log de antes.

3: Modelos
  3.1: Crear archivos de modelos
  3.2: Importar la instancia de sequelize creada durante la conexión
  3.3: Importar DataTypes de sequelize
  3.4: Dar nombre a la tabla y definir los distintos campos de los modelos (no definir los que indican relaciones)
  3.5: No es necesario definir la id, Sequelize lo hace automáticamente y la hace por defecto la Primary Key.
  (Si quisiéramos definir una primary key:
    nombre_col: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  )
  3.6: Distinguir entre built-in validators(ej: isEmail) y custom validators (checkAge en este ejemplo, definido en /utils/validations.js)
  3.7: Exportar modelos

4: Relaciones
  4.1: Crear relations.js dentro de la carpeta 'database'
  4.2: Importar Modelos
  4.3: Crear función con definición de relaciones
  4.4: Exportar función
  4.5: Crear la función de sincronización de modelos dentro del index.js de la carpeta 'database'
  4.6: Distinguir los casos de sync(), sync({alter:true}) y sync({force: true})
  4.7: Exportar la función
  4.8: En el index.js principal, importar estas dos últimas funciones.
  4.9: Dentro de la función de conexión a la BBDD, ejecutar la función de relaciones justo después de la comprobación de la conexión. Justo a continuación ejecutar la función de sincronización.

5: Arrancar Express
  5.1: sustituir el console.log por una función para arrancar express.
  5.2: crear instancia de express
  5.3: crear función callback cuando se use '/api' que haga un console.log
  5.4: definir puerto donde escuchar en archivo .env y definir .listen
  5.5: Hacer una petición cualquiera a '/api' desde Postman y comprobar que aparece el console.log

6: Rutas
