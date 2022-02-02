
const tbody = document.querySelector('tbody');
const idate = document.querySelector('#idate');
const date = new Date();

idate.innerText = date.toString().slice(3,15);

const invoiceLine = () => {
    const tr = document.createElement('tr');
    const tdm = document.createElement('td');
    let style = ['70px', '200px', '100px', '100px'];

    for (let i = 0; i < 3; i++){
    	const tdi = document.createElement('td');
    	const inputi = document.createElement('input');

    	tdi.append(inputi);
    	tr.append(tdi);

    	inputi.style.border = 'none';
     inputi.style.backgroundColor = '#F2EDD7';
     inputi.style.width = style[i];
     tdi.style.border = '2px solid #3A6351'

    }
    
    tr.append(tdm);
    tdm.innerText = '0';
    tbody.append(tr);  

    tr.style.border = '2px solid #3A6351';                    
}

const inputFormat = (i) => {
     tbody.children[i].children[0].children[0]
          .setAttribute('type','number');
     tbody.children[i].children[0].children[0]
          .setAttribute('min','1');
     tbody.children[i].children[1].children[0]
          .setAttribute('type','text');
     tbody.children[i].children[2].children[0]
          .setAttribute('type','number');
     tbody.children[i].children[2].children[0]
          .setAttribute('min','0');
     tbody.children[i].children[2].children[0]
          .setAttribute('placeholder','0');
      
}

const tableFormat = () => {
     for (let i = 0; i < 5; i++){
          invoiceLine();
          inputFormat(i);
     }
}

const totalInvoice = () => {
     const table = document.querySelector('table');
     const tfoot = document.createElement('tfoot');
     const tr = document.createElement('tr');

     for (let i = 0; i < 4; i++){
          const tdi = document.createElement('td');

          tr.append(tdi);
     }

     tfoot.append(tr);
     table.append(tfoot);

     tfoot.children[0].children[2].innerText = 'Total:';
     tfoot.children[0].children[3].innerText = '0';
}

let sum = 0;

const getAmout = () => {

     for (let i = 0; i < 5; i++){
          const qty = tbody.children[i].children[0]
                                       .children[0];
          const price = tbody.children[i].children[2]
                                         .children[0];

          price.addEventListener('change', () => {
               const amount = tbody.children[i].children[3];
               amount.innerText = qty.value * price.value;

               sum += parseInt(amount.innerText);
               
               tbody.nextElementSibling.children[0]
                    .children[3].innerText = sum;
          })                         

     }
}

tableFormat();
totalInvoice();
getAmout();


 
 






 

                             


 









 