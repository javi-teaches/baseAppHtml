// ************ Require's ************

porid: (req, res) => {
	let listadoDeBandas = bandas.lista;
	
	for (let i = 0; i < listadoDeBandas.length; i++) {
		if (listadoDeBandas[i].id === req.params.id) {
			return res.send(listadoDeBandas[i]);
		}	
	}
	
	return res.send('No se encontró banda con ese ID.');
},