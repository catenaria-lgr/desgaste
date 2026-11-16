# Desgaste del hilo de contacto · Línea Roca

Plataforma de Análisis y Gestión del Desgaste del Hilo de Contacto (mediciones del Geismar 201). Uso en PC.

- Este repositorio contiene **solo la plataforma**: `index.html` y, desde c54, los archivos para instalarla en el celular o la PC (`manifest.webmanifest`, `sw.js`, `icono.svg`, `icono-192.png`, `icono-512.png`, `icono-maskable-512.png`, `apple-touch-icon.png`). No contiene datos de mediciones.
- `sw.js` no guarda datos: cada consulta va a la base como siempre.
- `version.json` (desde c55; numeración V1.001, V1.002… desde c56): versión publicada. La plataforma lo consulta y, si hay una más nueva que la que está corriendo, muestra «Hay una versión nueva · Actualizar». **Se sube siempre junto con `index.html`.**
- Los datos viven en la base del proyecto y solo se ven con usuario y contraseña. El alta de usuarios la hace un administrador de la plataforma.
- La clave que figura dentro de la plataforma es la clave pública del proyecto (publicable por diseño); la protección real son los permisos de la base.

Mantiene: Jefatura de Catenaria, Base Quilmes.
