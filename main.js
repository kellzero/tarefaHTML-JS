document.getElementById('form-tarefa').addEventListener('submit', function(e){
    e.preventDefault();


    const campoA = document.getElementById('campo-a').value;
    const campoB = document.getElementById('campo-b').value;
    const messageElement = document.getElementById('message');


    if (Number(campoB) > Number(campoA)) {
        messageElement.textContent = "Formulário Válido: Campo B e maior que o Campo A.";
        messageElement.style.color = "green";
        

    }else{
        messageElement.textContent = "Formulário inválido: Campo B deve ser maior que o Campo A.";
        messageElement.style.color = "red";
        }
});

document.getElementById('campo-a').addEventListener('input', function() {
    const messageElement = document.getElementById('message');
    if (!this.value && !document.getElementById('campo-b').value) {
        messageElement.textContent = '';
    }
});

document.getElementById('campo-b').addEventListener('input', function() {
    const messageElement = document.getElementById('message');
    if (!this.value && !document.getElementById('campo-a').value) {
        messageElement.textContent = '';
    }
});