function hasWrapper(el) {
    return !!el.firstElementChild && window.getComputedStyle(el.firstElementChild).display === 'block';

}

export default async function decorate(block) {

    const [quotation, attribution] = [...block.children].map((c) => c.firstElementChild);
    //console.log(quotation);
   
    const blockquote = document.createElement('blockquote');
    
    quotation.className = 'quote-quotation';

    if (!hasWrapper(quotation)) {
        quotation.innerHTML = `<p>${quotation.innerHTML}</p>`;
    }

    blockquote.append(quotation)


    if (attribution) {
        attribution.className = 'quote-attribution';
        if (!hasWrapper(attribution)) {
          attribution.innerHTML = `<p>${attribution.innerHTML}</p>`;
        }
        blockquote.append(attribution);
        
        const ps = attribution.querySelectorAll('p');
        
        ps.forEach((p) => {
          const cite = document.createElement('cite');
          cite.innerHTML = p.innerHTML;
          p.replaceWith(cite);
        });
      }


    block.innerHTML = '';
    block.append(blockquote);
}