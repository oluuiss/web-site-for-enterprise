document.addEventListener('DOMContentLoaded', function() {
    const whatsappInput = document.querySelector('.zap');

    whatsappInput.addEventListener('input', function(e) {
        let input = whatsappInput.value;

        input = input.replace(/\D/g, '');

        if (input.length > 0) {
            input = '(' + input;
        }   if (input.length > 3) {
            input = input.slice(0, 3) + ') ' + input.slice(3);
        } if (input.length > 10) {
            input = input.slice(0, 10) + '-' + input.slice(10);
        }  if (input.length > 15) {
            input = input.slice(0, 15);
        }

        whatsappInput.value = input;
    });

    whatsappInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        if (!/[0-9]/.test(char)) {
            e.preventDefault();
            alert('Por favor, insira apenas números.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('.nc');
    const whatsappInput = document.querySelector('.zap');
    const emailInput = document.querySelector('.mail');
    
    nameInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        const currentValue = nameInput.value;

        if (!/[a-zA-ZÀ-ÿ]/.test(char) && char !== ' ') {
            e.preventDefault();
            alert('Por favor, insira apenas letras ou um espaço.');
        }

        if (char === ' ' && currentValue[currentValue.length - 1] === ' ') {
            e.preventDefault();
            alert('Você só pode inserir um espaço entre as palavras.');
        }
    });

    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || 
            whatsappInput.value.trim() === '' || 
            emailInput.value.trim() === '') {
            
            alert('Por favor, preencha todos os campos antes de prosseguir.');
            event.preventDefault(); 
        }
    });


    whatsappInput.addEventListener('input', function(e) {
        let input = whatsappInput.value;
        input = input.replace(/\D/g, '');

        if (input.length > 0) {
            input = '(' + input;
        }
        if (input.length > 3) {
            input = input.slice(0, 3) + ') ' + input.slice(3);
        }
        if (input.length > 10) {
            input = input.slice(0, 10) + '-' + input.slice(10);
        }
        if (input.length > 15) {
            input = input.slice(0, 15);
        }

        whatsappInput.value = input;
    });
p
    whatsappInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        if (!/[0-9]/.test(char)) {
            e.preventDefault();
            alert('Por favor, insira apenas números no campo WhatsApp.');
        }
    });
});



    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || 
            whatsappInput.value.trim() === '' || 
            emailInput.value.trim() === '') {
            
            alert('Por favor, preencha todos os campos antes de prosseguir.');
            event.preventDefault();
        }
    });


    
    whatsappInput.addEventListener('input', function(e) {
        let input = whatsappInput.value;
        input = input.replace(/\D/g, ''); 

        if (input.length > 0) {
            input = '(' + input;
        }
        if (input.length > 3) {
            input = input.slice(0, 3) + ') ' + input.slice(3);
        }
        if (input.length > 10) {
            input = input.slice(0, 10) + '-' + input.slice(10);
        }
        if (input.length > 15) {
            input = input.slice(0, 15);
        }

        whatsappInput.value = input;
    });

    whatsappInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        if (!/[0-9]/.test(char)) {
            e.preventDefault();
            alert('Por favor, insira apenas números no campo WhatsApp.');
        }
    });



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('.nc');
    const whatsappInput = document.querySelector('.zap');
    const emailInput = document.querySelector('.mail');
    const submitButton = document.querySelector('.clim');

    form.addEventListener('submit', function(event) {
        if (nameInput.value.trim() === '' || 
            whatsappInput.value.trim() === '' || 
            emailInput.value.trim() === '') {
            
            alert('Por favor, preencha todos os campos antes de prosseguir.');
            event.preventDefault();
        }
    });

    whatsappInput.addEventListener('input', function(e) {
        let input = whatsappInput.value;
        input = input.replace(/\D/g, '');

        if (input.length > 0) {
            input = '(' + input;
        }
        if (input.length > 3) {
            input = input.slice(0, 3) + ') ' + input.slice(3);
        }
        if (input.length > 10) {
            input = input.slice(0, 10) + '-' + input.slice(10);
        }
        if (input.length > 15) {
            input = input.slice(0, 15);
        }

        whatsappInput.value = input;
    });

    whatsappInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        if (!/[0-9]/.test(char)) {
            e.preventDefault();
            alert('Por favor, insira apenas números no campo WhatsApp.');
        }
    });
});
