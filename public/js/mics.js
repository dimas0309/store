
const obj = [];

const fillObj = (qty, desc, pre, amt) => {
     obj.push({qty, desc, pre, amt})
}

const invoiceNum = () => {
     const number = document.getElementById('inum');

     number.innerText = 'FAC0';
}

const invoiceNum = () => {
     const button = document.querySelector('button');
     const number = document.getElementById('inum');

     number.innerText = 'FAC0';

     let c = 0;

     button.addEventListener('click', () => {
          c += 1;
          number.innerText = 'FAC0'+ c;
     })
}

for (let i = 0; i < 5; i++){
	     const prodi = tbody.children[i].children[2]
	                               .children[0];                           
	     const qtyi = tbody.children[i].children[0]
	                              .children[0];
	     const desci = tbody.children[i].children[1]
	                               .children[0]; 
	     const amti = tbody.children[i].children[3]; 

	     prodi.addEventListener('change', () => {
		     fillObj(
			     qtyi.value, desci.value, 
			     prodi.value, amti.innerText
		     );
	     })
}

const customer = {
		name: req.body.name,
		address: req.body.address
	}

	db.query(
		'INSERT INTO customer SET?',
		customer, (err, result) => {
			if (err) throw err;
			res.send(customer);
    });


