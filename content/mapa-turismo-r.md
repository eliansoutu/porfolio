# Mapa interactivo de turismo en R

## Objetivo
Crear un mapa interactivo para visualizar flujos turísticos entre provincias, combinando datos abiertos con geometrias administrativas.

## Stack
- R, sf, dplyr, tidyr
- leaflet + leaflet.extras
- ggplot2 para exploración previa

## Pasos clave
1. Limpieza y normalización de los datos de llegadas.
2. Cruce con shapes oficiales y construcción de un GeoJSON.
3. Mapas coropléticos y burbujas para intensidad de visitas.
4. Publicación con `leaflet::saveWidget` y assets comprimidos.

## Resultados
![Mapa turístico](../assets/images/mapa.svg)

- Descarga el reporte completo en PDF: [mapa-turismo-r.pdf](../assets/pdfs/mapa-turismo-r.pdf)
- Repositorio con el código: <https://github.com/tu-usuario/mapa-turismo>

> Este post es un ejemplo: reemplaza los enlaces por tus archivos reales.

