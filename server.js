import 'dotenv/config';
import app from './app';
import { conectarAoDataBase } from './src/database';



app.listen(process.env.PORT, () => {
  conectarAoDataBase();
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
  
});
