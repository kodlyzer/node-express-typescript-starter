import app from './config/app';
import env from './environment';

const PORT = env.getPort();
app.listen(PORT, () => {
  console.log('Server up & running from port, ' + PORT);
})