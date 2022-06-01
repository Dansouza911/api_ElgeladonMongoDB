import app from './app';
import { conectarAoDataBase } from './src/database';

const port = 3000;

app.listen(port, () => {
  conectarAoDataBase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
