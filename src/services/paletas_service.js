import PaletasDB from '../models/paletas.model.js';

class PaletasServices {
  async findAllPaletasService() {
    const paletaMongoAll = await PaletasDB.find();

    return paletaMongoAll;
  }

  async findByIdPaletaService({ id }) {
    const paletaSelecionada = await PaletasDB.findById(id);

    return paletaSelecionada;
  }

  async criarPaleta({ sabor, descricao, preco, foto }) {
    const novaPaleta = {
      sabor,
      descricao,
      preco,
      foto,
    };

    const paletaCriar = await PaletasDB.create(novaPaleta);
    return paletaCriar;
  }

  async atualizarPaleta({ sabor, descricao, preco, foto, id }) {
    const paletaAtualizada = {
      sabor,
      descricao,
      preco,
      foto,
    };

    try {
      await PaletasDB.updateOne({ _id: id }, paletaAtualizada);
      const paletaAtt = await PaletasDB.findById(id);

      return paletaAtt;
      if (paletaAtt.modifiedCount === 1) {
        return 'Atualizado com sucesso';
      } else {
        return 'Não Atualizado';
      }
    } catch (error) {
      throw error;
    }
  }

  async excluirPaleta({ id }) {
    await PaletasDB.deleteOne({ _id: id });
  }
}

export default PaletasServices;
