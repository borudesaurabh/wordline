const express = require('express');
const app = express();

const port = 8000; // or any other port number you prefer

app.get('/', (req, res)=>{

res.send('This is a sample for CICD Pipeline')

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});