import app from './config/app';
const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server up & running from port, ' + PORT);
})