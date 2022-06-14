import PaletasServices from '../services/paletas_service.js';

const paletasServices = new PaletasServices();

class PaletasController {
  /* get all */
  async findAllPaletasController(req, res) {
    try {
      const paletasAll = await paletasServices.findAllPaletasService();
     
      res.send(paletasAll);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  /* GetByID */
  async findByIdPaletaController(req, res) {
    const id = req.params.id;
    const escolhaPaleta = await paletasServices.findByIdPaletaService({ id });

    res.send(escolhaPaleta);
  }

  /* criar nova Paleta */
  async criarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    try {
      const novaPaleta = await paletasServices.criarPaleta({
        sabor,
        descricao,
        foto,
        preco,
      });
      res.status(201).send(novaPaleta);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async atualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = req.params.id;

    try {
      const paletaAtualizada = await paletasServices.atualizarPaleta({
        sabor,
        descricao,
        foto,
        preco,
        id,
      });
      res.status(201).send(paletaAtualizada);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Sabor já cadastrado');
      }
    }
  }

  excluirPaleta(req, res) {
    const id = req.params.id;

    paletasServices.excluirPaleta({ id });

    res.sendStatus(204);
  }
}

export default PaletasController;
 