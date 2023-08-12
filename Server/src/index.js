const { conn } = require('./DB_connection')
const server = require('./app');
require('dotenv').config()

const {PORT} = process.env;

//const PORT = 3001;

server.listen(PORT, async ()=>{
  await conn.sync({force:true})
  console.log(`Server is listening on port: ${PORT}`);
})


/* server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
 */