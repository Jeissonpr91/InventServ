require('dotenv').config();

const app = require('./app');
require('./database');

async function main() {

    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));

}
app.get("/", (req, res) => {
    res.send("👷🏻‍♂️ Backend de InventServer funcionando!!... 👍🏼");
  });

main();