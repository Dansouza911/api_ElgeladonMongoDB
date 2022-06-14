import PaletasDB from '../models/paletas.model.js';
import mongoose from 'mongoose';

const verificarIdDePaletaMiddleware = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = PaletasDB.findById(id);

  if (!response) {
    return res.status(404).send('Paleta não encontrada');
  }
  next();
};

export default verificarIdDePaletaMiddleware;
