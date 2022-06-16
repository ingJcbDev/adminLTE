# Instalaci�n

Veamos la instalaci�n Angular 14 usando Angular CLI paso a paso. [Video](https://www.youtube.com/watch?v=ZP1RzPgqPQw)

Paso 1. Instalar NodeJS en su ultima versi�n, para eso entraremos a su web oficial y descargaremos el instalador m�s actualizado [https://nodejs.org/es/](https://nodejs.org/es/)

Paso 2. Actualizar NPM, el gestor de paquetes de node, para bajarnos las dependencias m�s actuales:

```bash
npm install -g npm@latest
```

Paso 3. Borrar la cache de NPM:
```bash
npm cache clean --force
```

Paso 4. Desactivar las auditorias de NPM para evitar fallos:
```bash
npm set audit false
```
Paso 5. Desinstalar los paquetes anteriores de Angular CLI
```bash
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
```
Paso 6. Borrar la cache de NPM de nuevo:
```bash
npm cache clean --force
```
Paso 7. Instalar la �ltima versi�n de Angular CLI para instalar Angular14:
```bash
npm install -g @angular/cli@latest
```
Puede ser que al instalar angular cli te pregunte que si quieres que Google utilice tus datos para mejorar Angular, ah� respondemos que no con la N y continuamos.

Para ver la version de Angular
```bash
ng version
ng v
```

Ahora ya hemos instalado y actualizado Angular CLI y ya podemos generar un nuevo proyecto de Angular 14
```bash
ng new
```
Seguimos el asistente respondiendo paso a paso:

Primero nos pedir� el nombre del proyecto (no puedes meter espacios ni, guiones ni nada, solo letras y n�meros juntos).
Nos preguntar� si queremos a�adir el routing de angular, diremos que NO.
Nos preguntar� si queremos usar un formato especifico para los estilos css, le daremos a enter directamente.
Esperamos a que el asistente acabe de generar nuestro proyecto de Angular 14.
Ahora entraremos al directorio de nuestro proyecto y lanzaremos el servidor local de pruebas para Angular:
```bash
cd NombreDelProyecto
ng serve
```
Puedes comprobar la versi�n de Angular que tienes en el fichero package.json, podr�s comprobar que tienes la versi�n 14.

En el caso de que te interese otra versi�n podr�as modificar las versiones de tu fichero package.json y lanzar el comando npm update o bien al hacer la instalaci�n de angular cli despu�s del @ indicar que versi�n del cli queremos para poder instalar versiones anteriores.

Con esto ya sabemos como actualizar Angular CLI e instalar Angular 10, como instalar el framework y como usar Angular CLI para generar un proyecto base.

Ahora tendremos disponible la webapp de Angular 14 en http://localhost:4200/

Actualizaci�n de proyectos de Angular 10 al 14
Para pasar un proyecto de Angular a la nueva versi�n sigue los siguientes pasos:
Paso 1. Entra a la carpeta de tu proyecto desde la consola de comandos:
```bash
cd carpeta_mi_proyecto_angular
```
Paso 2. Actualizar Angular CLI y Core a la versi�n 10 final:
```bash
ng update @angular/cli@9 @angular/core@10
```
Paso 3. Actualizar Angular CLI y Core a la versi�n 14 final:
```bash
ng update @angular/cli @angular/core
```
Y con eso seria suficiente para migrar a la nueva versi�n. Aun as�, tambi�n puedes revisar esta gu�a, por si estos pasos te dan alg�n problema: Guia migrar proyecto de Angular a la ultima versi�n.