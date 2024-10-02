/*Navmenu*/ 
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/*Validação do form*/
$(document).ready(function() {
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            senha: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            senha: {
                required: "Por favor, insira sua senha",
                minlength: "Sua senha deve ter pelo menos 6 caracteres"
            }
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.addClass('error-message');
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});