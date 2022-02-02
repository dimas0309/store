
const tfoot = document.querySelector('tfoot');
const cus = document.querySelector('#cus');
const addr = document.querySelector('#addr');
const customer = document.querySelector('#name');
const address = document.querySelector('#address');
 
cus.addEventListener('change', () => {
	customer.value = cus.value;
})

addr.addEventListener('change', () => {
	address.value = addr.value;
})

const setpur = () => {
	const quan = document.querySelector('#quantity');
	const desc = document.querySelector('#item');
	const pri = document.querySelector('#price');
	const amt = document.querySelector('#amount');
	const total = document.querySelector('#total');

	let objq = [];
	let objd = [];
	let objp = [];
	let obja = [];

	for (let i = 0; i < 5; i++){
	     const prodi = tbody.children[i].children[2]
	                               .children[0];                           
	     const qtyi = tbody.children[i].children[0]
	                              .children[0];
	     const desci = tbody.children[i].children[1]
	                               .children[0]; 
	     const amti = tbody.children[i].children[3]; 

	     prodi.addEventListener('change', () => {
		     objq.push(qtyi.value);
		     objd.push(desci.value);
		     objp.push(prodi.value);
		     obja.push(amti.innerText);

		     quan.value = objq;
		     desc.value = objd;
		     pri.value = objp;
		     amt.value = obja;

		     total.value = tfoot.children[0].children[3]
		                                    .innerText;

	     })
     }
}

const printInvoice = () => {
	const purchase = document.querySelector('#purchase');
	const header = document.querySelector('h1');
	const a = document.querySelector('a');

    purchase.addEventListener('click', () => {
    	header.setAttribute('hidden','true');
    	purchase.setAttribute('hidden', 'true');
    	a.setAttribute('hidden', 'true');
    	cus.style.border = "none";
    	cus.style.background = "#F2EDD7";
    	addr.style.border = "none";
    	addr.style.background = "#F2EDD7";

	    window.print();
    }) 
}

printInvoice(); 
setpur();
 













 

 