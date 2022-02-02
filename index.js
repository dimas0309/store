
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mysql = require('mysql2');

const indexRoutes = require('./routes/index');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'dimas0309',
	database: 'storedb'
})

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

	const setInvnum = () => {
		db.query(
		    'SELECT (1 + COUNT(id)) FROM invoice',
		    (err, result) => {
			    if (err) throw err;
            const num = 'FAC' + Object.values(result[0]);
            const id = Object.values(result[0]);
		    res.render('stores/home', {num, id});	
	    });
	}

	setInvnum();
})

app.post('/', (req, res) => {
    
    const invoice = {
    	name: req.body.name,
		address: req.body.address,
    	invoice_number: req.body.invnum,
		total: req.body.total
	}

	const setInvoice = () => {
		db.query (
		    'INSERT INTO invoice SET?',
		    invoice, (err, result) => {
			    if (err) throw err;
			console.log(invoice);
        }); 
	}

	const setInvoiceLine = () => {

		const invoiceLine = [];

	    const fillObj = (quantity, item, price, amount, invoice_id) => {
            invoiceLine.push({quantity, item, price, amount, invoice_id})
        }

	    const list1 = req.body.quantity;
	    const list2 = req.body.item;
	    const list3 = req.body.price;
	    const list4 = req.body.amount;
	    const list5 = req.body.id;

        const lista = list1.split(/,/);
    	const listb = list2.split(/,/);
	    const listc = list3.split(/,/);
	    const listd = list4.split(/,/);

	    for (let i = 0; i < lista.length; i++){
		fillObj(lista[i], listb[i], listc[i],listd[i], list5);	
	}

	    for (let i = 0; i < lista.length; i++){
       
		    db.query(
		        'INSERT INTO invoice_line SET?',
		        invoiceLine[i], (err, result) => {
			        if (err) throw err;
			    console.log(invoiceLine);
            }); 
	    }
	}

	setInvoice()
	setInvoiceLine();

    res.redirect("/");
})

app.use('/index', indexRoutes);

app.listen(8081, () => {
	console.log("APP IS LISTENING ON PORT 8081!");
}) 