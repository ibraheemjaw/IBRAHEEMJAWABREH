const express = require('express');
const app = express();

app.get('/name', (req, res) => {
  res.send('IBRAHEEM JAWABREH DONE  '); 
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});