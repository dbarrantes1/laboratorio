const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World desde GitHub');
});

app.listen(3000, '0.0.0.0', () => {
	console.log('Servidor en http://localhost:3000');
});

 
