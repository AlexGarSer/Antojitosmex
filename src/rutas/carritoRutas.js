import { Router } from 'express';
import { getCarrito,getCarritoById,postCarrito,deleteCarritoById,updateCarritoById } from '../controladores/mysql/carritoController';
//import { getCarrito,getCarritoById,postCarrito,deleteCarritoById,updateCarritoById } from '../controladores/sql/carritoController';

const router = Router();

router.get('/carrito', getCarrito);

router.post('/carrito', postCarrito);

router.get('/carrito/:Id',getCarritoById);

router.delete('/carrito/:Id',deleteCarritoById);

router.put('/carrito/:id',updateCarritoById);

export default router;