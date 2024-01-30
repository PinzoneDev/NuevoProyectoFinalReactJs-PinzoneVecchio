# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Presentacion simple.

Este sitio web representa un carrito de compras convencional.\
 Cuando el usuario ingrese al sitio podra ver un `Navbar` en el lado superior, logrando navegar entre las distintas categorias que se ofrecen, para lograr una mejor visualizacion de los productos que desea ver, luego en el cuerpo de la Home Page podra ver la totalidad de los productos, donde en el se muestran algunas caracteristicas del mismo, como una imagen del producto o el precio que posee.\
 Cada producto que se muestra, contiene dos **botones**, uno para ver el **detalle** del producto y otro para llevar un producto al carrito.Cuando se clickea en **Ver detalle**, el usuario sera trasladado al detalle del mismo, dandole mas caracteristicas del producto, como una descripcion en detalle de lo que conlleva, o logrando agregar mas de un producto al carrito, siempre y cuando se agregue al menos una unidad.\
 Al agregar productos usted podra verlos a traves del **carrito de compras**, que se encuentra en el `Navbar` con la imagen del carrito, o desde el detalle de cada item.
Cuando este dentro del **carrito**, podra ver los productos que este por comprar, dandole detalles como el valor de cada unidad y la cantidad de unidades que esta llevando. Para finalizar, tendra dos botones debajo de los productos que lleva, uno para poder **limpiar** todo el carrito y otro para **finalizar la compra**.\
 Cuando **Finalize la compra**, se le enviara a un formulario, donde se le requerira que escriba algunos datos de contacto, luego de completar los datos, al clickear **Finalizar Compra** se le asigara una orden, generada automaticamente, con la informacion que ingreso, los productos que compro, y la fecha y hora de compra.

## Componentes inteligentes.

### `ItemListContainer`

Este componente inteligente se muestra sobre la **Home Page**, Su funcion es mostrar los productos que se ofrecen al usuario.
Los datos son tomados de `Firebase` y son cargados a traves de los `Item`, donde cada uno tendra sus propias caracteristicas.

### `ItemDetailContainer`

`ItemDetailContainer` se visualiza despues de haber clickeado en **Ver Detalle** sobre algun `Item`. Su funcion es dar mas detalle del mismo.
A traves de `Firebase`, recopila datos y se muestran sobre `ItemDetail` las caracteristicas de este producto.

### `Cart`

`Cart` ofrece al usuario poder ver los productos que lleva para su compra,para luego poder ir al **formulario de compra**. A traves del `CartContext`, este almacenara los productos que haya clickeado y los mostrara en `Cart`, ofreciendo datos como la cantidad de productos que lleva y el valor por unidad.

## `CartContext`

El **Cart Context** es el contexto del carrito en si, en el se almacenan los productos que se van a comprar, y otras funcionalidades para los usuarios,como por ejemplo poder agregar productos a este contexto, o poder eliminarlos, tambien la opcion de limpiar el carrito por completo, o calcular el precio total de los productos que va a llevar.

## **Librerias**

El proyecto se realizo con ayuda de las siguientes librerias:\
**React Boostrap** , Web oficial : https://react-bootstrap.github.io/ \
**Toastify** , Web oficial : https://apvarun.github.io/toastify-js/# \
**React Spinners**, Web oficial : https://www.davidhu.io/react-spinners/ \
**AOS**, Web oficial : https://michalsnik.github.io/aos/ \
