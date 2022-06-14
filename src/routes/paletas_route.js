import { Router } from 'express';
import PaletasController from '../controllers/paletas_controller.js';
import verificarIdDePaletaMiddleware from '../middlewares/verificarIdDePaleta.middleware.js';
import verificadorDePaletaMiddleware from '../middlewares/verificarDadosDePaleta.middleware.js';

const paletasController = new PaletasController();
const route = Router();

route.get('/todas-paletas', paletasController.findAllPaletasController);
route.get(
  '/paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasController.findByIdPaletaController,
);

route.put(
  '/atualizar-paleta/:id',
  verificarIdDePaletaMiddleware,
  verificadorDePaletaMiddleware,
  paletasController.atualizarPaleta,
);

route.post(
  '/criar-paleta',
  verificadorDePaletaMiddleware,
  paletasController.criarPaleta,
);

route.delete(
  '/excluir-paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasController.excluirPaleta,
);

export default route;
