const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'dimas0309',
	database: 'storedb'
})


router.get('/', (req, res) => {
	db.query(
		'SELECT invoice_number, total, invoice_date FROM invoice',
		(err, result) => {
			if(err) throw err;
	    const invoices = result;		

		res.render('stores/invoice_index', {invoices});	
		}
	)
});

module.exports = router;

 