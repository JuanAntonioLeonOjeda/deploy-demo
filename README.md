# sequelize-project

### 0: Crear .env
  0.1: Introducir datos relativos a la BBDD<br>
<br>
### 1: Index.js principal
  1.1: Crear conexión a BBDD<br>
  1.2: Crear función de comprobar conexión<br>
  1.3: Crear index.js en la carpeta 'database'<br>
  1.4: Mover la conexión y la función de comprobación al index de database<br>
  1.5: Exportar la función de comprobación<br>
  1.6: Importar en index.js principal y comprobar que funciona igual<br>
<br>
### 2: Asincronía
  2.1: Usar un console.log en el index.js principal para demostrar que se mostrará antes en la terminal que el mensaje de comprobación de conexión a BBDD.<br>
  2.2: Crear función asíncrona en index.js que se encargue de la conexión a la base de datos. Introducir la función de comprobar conexión.<br>
  2.3: Crear función startAPI que ejecute primero la nueva función de conexión a BBDD y luego haga el console.log de antes.<br>
<br>
### 3: Modelos
  3.1: Crear archivos de modelos<br>
  3.2: Importar la instancia de sequelize creada durante la conexión<br>
  3.3: Importar DataTypes de sequelize<br>
  3.4: Dar nombre a la tabla y definir los distintos campos de los modelos (no definir los que indican relaciones)<br>
  3.5: No es necesario definir la id, Sequelize lo hace automáticamente y la hace por defecto la Primary Key.<br>
  (Si quisiéramos definir una primary key:
    nombre_col: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  )<br>
  3.6: Distinguir entre built-in validators(ej: isEmail) y custom validators (checkAge en este ejemplo, definido en /utils/validations.js)<br>
  3.7: Exportar modelos<br>
<br>
### 4: Relaciones
  4.1: Crear relations.js dentro de la carpeta 'database'<br>
  4.2: Importar Modelos<br>
  4.3: Crear función con definición de relaciones<br>
  4.4: Exportar función<br>
  4.5: Crear la función de sincronización de modelos dentro del index.js de la carpeta 'database'<br>
  4.6: Distinguir los casos de sync(), sync({alter:true}) y sync({force: true})<br>
  4.7: Exportar la función<br>
  4.8: En el index.js principal, importar estas dos últimas funciones.<br>
  4.9: Dentro de la función de conexión a la BBDD, ejecutar la función de relaciones justo después de la comprobación de la conexión. Justo a continuación ejecutar la función de sincronización.<br>
<br>
### 5: Arrancar Express
  5.1: sustituir el console.log por una función para arrancar express<br>
  5.2: crear instancia de express<br>
  5.3: crear función callback cuando se use '/api' que haga un console.log<br>
  5.4: definir puerto donde escuchar en archivo .env y definir .listen<br>
  5.5: Hacer una petición cualquiera a '/api' desde Postman y comprobar que aparece el console.log<br>
<br>
### 6: Rutas
