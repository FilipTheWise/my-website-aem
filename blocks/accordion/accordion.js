function hasWrapper(el) {
    //console.log("firstElementChild: " + el.firstElementChild);
    //console.log("DISPLAY: " + window.getComputedStyle(el.firstElementChild).display);
    return !!el.firstElementChild && window.getComputedStyle(el.firstElementChild).display === 'block';
}

export default function decorate(block) {
    [...block.children].forEach((row) =>
    {
        
        const label = row.children[0];
        console.log("label: " + label.outerHTML); 
        const summary = document.createElement("summary");
        summary.className = 'accordion-item-label';
        summary.append(...label.childNodes);
        console.log("label: " + label.outerHTML); 
        console.log("summary: " + summary.outerHTML); 
        
        /*if (!hasWrapper(summary)) {
            summary.innerHTML = `<p>${summary.innerHTML}</p>`;
        }*/

        const body = row.children[1];  
        body.className = 'accordion-item-body';
        if (!hasWrapper(body)) {
            body.innerHTML = `<p>${body.innerHTML}</p>`;
        }
        const details = document.createElement('details');
        details.className = 'accordion-item';
        details.append(summary, body);
        row.replaceWith(details);
        
    }
    );
}