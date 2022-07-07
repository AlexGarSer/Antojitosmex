
import { Router } from 'express';
import { getEstadoDeOrden, postEstadoDeOrden, getEstadoDeOrdenById, deleteEstadoDeOrdenById, updateEstadoDeOrdenById} from '../controladores/mysql/estadodeordenController'
//import { getEstadoDeOrden, postEstadoDeOrden, getEstadoDeOrdenById, deleteEstadoDeOrdenById, updateEstadoDeOrdenById} from '../controladores/sql/estadodeordenController'

const router = Router();

router.get('/estadodeorden',getEstadoDeOrden);

router.post('/estadodeorden',postEstadoDeOrden);

router.get('/estadodeorden/:Id',getEstadoDeOrdenById);

router.delete('/estadodeorden/:Id',deleteEstadoDeOrdenById);

router.put('/estadodeorden/:id',updateEstadoDeOrdenById);

export default router;