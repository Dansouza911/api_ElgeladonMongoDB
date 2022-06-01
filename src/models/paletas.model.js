import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const paletaSchema = new Schema(
  {
    sabor: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
  },
  { versionKey: false },
);

const PaletasDB = model('paletas', paletaSchema);

export default PaletasDB;
