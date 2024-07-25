export default async function decorate(block) {
    const headers = [...block.children][0].children;

    const table = document.createElement('table');
    table.className = "table-block";
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


    const hasHeader = !block.classList.contains("no-header");
    
    [...block.children].forEach((row,i) =>
    {
        
        if(i == 0 && hasHeader){
            [...row.children].forEach(element => {
                let th = document.createElement('th');
                th.innerHTML = element.innerText;
                thead.append(th);
            });
        }
        else{
            let tr = document.createElement('tr');
            [...row.children].forEach(element => {
                let td = document.createElement('td');
                td.innerHTML = element.innerText;
                tr.append(td);
            });
            tbody.append(tr);
        }

    });
    

    table.append(thead);
    table.append(tbody);

    block.innerHTML = '';
    block.append(table);
    console.log(table);
}