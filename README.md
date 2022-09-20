# auditoria
trabajo de auditoria

##auditoria

*[Título e imagen de portada]
    Trabajo auditoria api rest 
    
*[Índice]
    app.js -- archivo en javascript encargado de hacer las peticiones http al api 
    db.sql -- archivo en sql donde se crea la base de datos y sus tablas con inserciones iniciales
    con.sql -- borrador de conexión base de datos
    dbconnector.js -- archivo en javascript encargado de la conexión con la base de datos
    package-lock.json -- archivo en json que porta las librerias usadas e instaladas con node
    
*[Descripción del proyecto]
    El proyecto es un api rest, encargado de guardar dartos de dos tablas, una de personas y otra de credenciales
    , en la tabla de personas se pueden hacer inserciones de las personas a registrar, y en la de credenciales, 
    se registra el usuario y contraseña de esas personas. 

*[Estado del proyecto]
    El proyecto se encuentra en un 90% a falta de pruebas de validacion

*[Acceso al proyecto]
    El acceso al proyecto en este momento se encuentra desplegado en la IP http://3.87.187.73:8484

*[Tecnologías utilizadas]
    Para el desarrrollo del codigo se usaron los lenguajes, JavaScript, Json y SQL, con la ayuda de node 
    para la instalacion de las librerias y la ejecucion del programa, a la hora de desplegar se hizo en aws,
    donde se uso un servidor ec2, que nos premite desplegar la aplicacion en un puerto en esepecifico y poder
    hacer peticiones a este, creando nuestra api rest

*[Personas Contribuyentes]
    Lorena Rios -- Lorenaa-rs
    Juan Acero -- JuanAcero6

*[Conclusión]
    El proyecto logra cumplir con su objetivo de tener un API rest desplegado, que sea capaz de traer datos 
    de dos tablas y tambien nos da la posibilidad de insertar
