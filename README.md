# Calculadora de Masas Leudadas

Este proyecto es una aplicación web interactiva diseñada para calcular las cantidades necesarias de ingredientes (agua, sal y levadura) para diferentes tipos de masas leudadas, basándose en la cantidad de harina introducida por el usuario.

## Características

- **Selección de Recetas**: Permite elegir entre tres tipos de masas populares:
  - **Pizza Napolitana**
  - **Focaccia**
  - **Baguette**
- **Cálculo Automático**: Al ingresar la cantidad de harina (en gramos), la aplicación calcula automáticamente las cantidades exactas de agua, sal y levadura necesarias según los porcentajes de hidratación y fermentación específicos de cada receta.
- **Información Detallada**: Muestra una breve descripción e historia de cada tipo de masa seleccionada.
- **Interfaz Responsiva**: Diseño adaptable a diferentes tamaños de pantalla utilizando Bootstrap.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido.
- **CSS3**: Estilos personalizados y uso del framework **Bootstrap 5.3.2** para el diseño y la maquetación.
- **JavaScript**: Lógica de programación para el manejo del DOM, objetos con la información de las recetas y cálculos matemáticos en tiempo real.

## Estructura del Proyecto

- `calculadoraMasas.html`: Archivo principal que contiene la estructura de la página.
- `masas.js`: Contiene la lógica de la aplicación, incluyendo los objetos de las recetas (`pizza`, `focaccia`, `baguette`) y las funciones `mostrarCalculadora` y `calculoIngre`.
- `styles.css`: Hoja de estilos complementaria para personalizaciones específicas (colores de fondo, botones, etc.).
- `img/`: Carpeta que contiene las imágenes utilizadas en el pie de página.

## Cómo Usar

1. Clona o descarga este repositorio.
2. Abre el archivo `calculadoraMasas.html` en tu navegador web de preferencia.
3. Haz clic en uno de los botones superiores para seleccionar la receta (Pizza, Focaccia o Baguette).
4. Introduce la cantidad de harina en el campo correspondiente.
5. Observa cómo se actualizan automáticamente las cantidades de los demás ingredientes.

## Autor

Desarrollado como parte del proyecto "CalculadoraMasas_Andres_Caso".
