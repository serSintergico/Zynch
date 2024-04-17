// routeLoader.js
const fs = require('fs');
const path = require('path');

function loadRoutes(app) {
  // Obtener la ruta del directorio de las rutas
  const routesDir = path.join(__dirname, 'routes');

  // Leer los archivos dentro del directorio de las rutas
  const routeFiles = fs.readdirSync(routesDir);

  // Cargar dinámicamente las rutas
  routeFiles.forEach(routeFile => {
    // Ignorar archivos que no sean archivos JavaScript
    if (!routeFile.endsWith('.js')) {
      return;
    }

    // Obtener el nombre de la ruta eliminando la extensión .js
    const routeName = routeFile.replace('.js', '');

    // Requerir el archivo de la ruta
    const routeHandler = require(path.join(routesDir, routeFile));

    // Registrar la ruta en la aplicación Express
    app.use(`/api/${routeName}`, routeHandler);
  });
}

module.exports = loadRoutes;
