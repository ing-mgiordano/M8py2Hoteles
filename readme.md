Nos piden crear una aplicación para dar de alta, modificar, ver y eliminar hoteles.

La clase hotel deberá tener los siguientes atributos: 
-nombre 
-número de habitaciones
-número de plantas
-superficie total del hotel 

Como métodos tendrá:
-getters
-setters 
-método llamado calcularMantenimiento(). Este método debe tener en cuenta que cada persona del servicio puede atender a 20 habitaciones y deberá mostrar cuántas personas son necesarias para atender el servicio de habitaciones del hotel y cuál es el coste total destinado al servicio sabiendo que estas personas cobran 1.500. € al mes.

La función crearHotel() deberá pedir al usuario que introduzca por pantalla los datos de nombre, número de habitaciones, número de plantas y superficie total del hotel (o deberá recibir estos datos por parámetro). Una vez haya pedido todos estos datos, debe instanciarse el objeto de la clase y añadirlo a un array de hoteles.

La función darDeBaixaHotel() deberá recibir el nombre del hotel que se quiere dar de baja. El usuario introducirá el nombre del hotel y si el hotel está dentro del array, lo eliminaremos y mostraremos un mensaje por pantalla informando al usuario que hemos eliminado el hotel. Si no hemos encontrado el hotel dentro del array, avisaremos al usuario diciendo que el hotel no estaba dentro de nuestra aplicación.

La función verHotel() deberá recibir el nombre del hotel que desea que mostramos por pantalla, si el hotel está en nuestra aplicación, le mostraremos el hotel, si no está, informaremos al usuario diciendo que el hotel que nos ha pedido no está dentro de nuestra aplicación.
Cuando mostramos el hotel, además, mostrar el número de habitaciones, número de plantas y superficie total del hotel también se llamará al método calcularMantenimiento().

La función modificarHotel() deberá recibir el nombre del hotel que queremos modificar. El usuario introducirá el nombre del hotel. Si lo tenemos en la aplicación, le preguntaremos si desea modificar el número de habitaciones, el número de plantas o la superficie total del hotel. Realizaremos la modificación pertinente y avisaremos al usuario de que la modificación se ha realizado.