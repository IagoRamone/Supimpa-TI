/*Navmenu*/ 
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
//API Via cep
$(document).ready(function() {
    $('#cep').on('blur', function() {
        var cep = $(this).val().replace(/\D/g, '');
        if (cep.length === 8) {
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
                if (!data.erro) {
                    $('#cidade').val(data.localidade);
                    $('#bairro').val(data.bairro);
                    $('#endereco').val(data.logradouro);
                } else {
                    alert('CEP não encontrado.');
                }
            });
        } else {
            
        }
    });
});

 // Máscaras de input
 $('#tel').mask('(00) 00000-0000'); 
 $('#cep').mask('00000-000'); // 