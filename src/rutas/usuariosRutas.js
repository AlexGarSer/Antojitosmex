import { Router } from 'express';
import { getUsuarios,getUsuariosById,postUsuarios,deleteUsuariosById,updateUsuariosById } from '../controladores/mysql/usuariosController';
//import { getUsuarios,getUsuariosById,postUsuarios,deleteUsuariosById,updateUsuariosById } from '../controladores/sql/usuariosController';

const router = Router();

router.get('/usuarios', getUsuarios);

router.post('/usuarios', postUsuarios);

router.get('/usuarios/:Id',getUsuariosById);

router.delete('/usuarios/:Id',deleteUsuariosById);

router.put('/usuarios/:id',updateUsuariosById);

export default router;