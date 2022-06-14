import 'dotenv/config';
import app from './app.js';
import { conectarAoDataBase } from './src/database/index.js';



app.listen(process.env.PORT, () => {
  conectarAoDataBase();
   
});
