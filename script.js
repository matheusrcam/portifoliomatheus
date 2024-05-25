function handleFormSubmit() {
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    if (nome === '' || email === '' || mensagem === '') {
        
        alert('Por favor, preencha todos os campos.');
        return false; 
    } else {
        
        window.location.href = 'index.html';
        
        
        alert('Obrigado por enviar sua mensagem!');
        
        return false;
    }
}


function exibirMensagem() {
    alert("Olá! Bem-vindo ao meu portfólio!");
}