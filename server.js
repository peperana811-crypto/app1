
const http = require("node:http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Aplicación AWS</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #e9eff7;
          text-align: center;
          padding: 80px 20px;
        }
        h1 { color: #183b71; }
        p { font-size: 20px; }
      </style>
    </head>
    <body>
      <h1>¡Bienvenido a mi aplicación AWS!</h1>
      <p>Servidor web creado con Node.js</p>
      <p>Operación 04 - Implementación automatizada</p>
    </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
