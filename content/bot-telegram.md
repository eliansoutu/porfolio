A través de un flujo automatizado con Github Actions, cree un bot llamado SintIA que revisa todos los días, en distintos horarios, si se actualizó alguno de los recursos de datos abiertos que utilizabamos en el área de estadísticas. Para esto, lee los datos publicados en los portales correspondientes, mediante su URL, y los compara con los últimos datos registrados (los cuáles se encuentran pre guardados en un csv).

También, cuenta con otro flujo que envía avisos a usuarios externos interesados en saber las últimas novedades del Sistema de Información Turística de la Argentina (SINTA), como actualizaciones de infomes, datos abiertos, etc.

Ejemplo de mensaje recibido:

![bot](./assets/images/telegram-bot.jpeg)

## Stack
- R
- Telegram
- Github
