import { Router } from 'express';
import { getOrden,getOrdenById,postOrden,deleteOrdenById,updateOrdenById } from '../controladores/mysql/ordenController';
//import { getOrden,getOrdenById,postOrden,deleteOrdenById,updateOrdenById } from '../controladores/sql/ordenController';

const router = Router();

router.get('/orden', getOrden);

router.post('/orden', postOrden);

router.get('/orden/:Id',getOrdenById);

router.delete('/orden/:Id',deleteOrdenById);

router.put('/orden/:id',updateOrdenById);

export default router;