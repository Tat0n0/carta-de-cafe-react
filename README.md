Carta Café 

Aplicación web desarrollada con **React** que muestra una carta de productos dividida por categorías.  
Incluye un sistema **CRUD completo** para gestionar tanto las categorías como los productos del menú.

## Instalación y ejecución

Clonar el repositorio o descargar el proyecto. en https://github.com/Tat0n0/carta-de-cafe-react

Instalar las dependencias:  
npm install
npm run dev

src/
├── assets/  
├── components/
│ ├── Header/ Encabezado de la carta
│ ├── Footer/ Pie de página
│ ├── MenuSection/ Categorías por secciones
│ └── MenuItem/ Productos individuales con precio
├── App.jsx Componente principal
├── App.css Estilos globales
└── main.jsx Punto de entrada

## Categorías

Añadir categoría:
Se crea una nueva categoría con un icono predeterminado.
El botón principal “Añadir Categoría” ejecuta la función addCategory,

Editar categoría:
Desde cada bloque de categoría se puede modificar el nombre y el icono.
Se actualiza el estado con editCategory.

Borrar categoría:
Si la categoría contiene productos, aparece un mensaje de confirmación antes de eliminarla.
La función deleteCategory elimina el objeto del estado principal. Ejemplo; (La categoría "Desserts" tiene 4 producto(s). ¿Eliminarla con todos sus productos?)

## Productos

Añadir producto:
En cada categoría se muestra un pequeño formulario para introducir nombre y precio.
Se ejecuta addProduct y se añade el producto al array products correspondiente.

Editar producto:
Cada producto incluye un icono de edición que permite modificar sus datos.
La función editProduct actualiza nombre y precio sin afectar al resto del menú.

Borrar producto:
El icono de papelera permite eliminar un producto individual mediante deleteProduct.
Antes de eliminar un producto, aparece un mensaje de confirmación con el nombre del artículo.
Una vez confirmado, el producto se elimina del listado y se muestra una alerta informando de la eliminación.
Ejemplo: (¿Seguro que quieres eliminar el producto "French Vanilla"?
Producto "French Vanilla" eliminado correctamente.)

## Diseño

Estructura basada en componentes reutilizables.
Tipografía Impact para los títulos.
Alineación de precios en columna fija.
Formularios simples y centrados.
Iconos personalizados en formato PNG y SVG.

## Tecnologías utilizadas

React 19.1
Vite
JavaScript (ES6+)
CSS modular
HTML5

## Autor

Proyecto realizado por Aridane Quevedo Cabrera, como práctica de desarrollo con React, implementando un CRUD completo sobre una carta de productos de cafetería.
