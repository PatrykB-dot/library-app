const form = document.querySelectorAll('.test-form');
console.log(form);

if(form) {
    form.forEach(element => {
        element.addEventListener('submit', async event => {
            event.preventDefault();     // This prevents the form from submitting using POST
    
            const idInput = element.querySelector('input[name="id"]');
            const id = idInput.value;
        
            const res = await fetch(`http://localhost:3000/library/book/delete/${id}`, {
                method: 'DELETE',
            });
            window.location.reload();
        })
    });
    // form.addEventListener('submit', async event => {
    //     event.preventDefault();     // This prevents the form from submitting using POST
    
    //     const idInput = form.querySelector('input[name="id"]');
    //     const id = idInput.value;
    
    //     const res = await fetch(`http://localhost:3000/library/book/delete/${id}`, {
    //         method: 'DELETE',
    //     });
        
    //     //const json = await res.json();
    
    //     //console.log(json);
    // })
};