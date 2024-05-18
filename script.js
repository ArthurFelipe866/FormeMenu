document.getElementById('leadform').addEventListener('submit', function(event)
{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const socialMedia = document.getElementById('socialMedia').value;

    //Aqui você pode adicionar a lógica para enviar ao banco de dados

    alert(`Nome: ${name}\nEmail: ${email}\nSenha: ${senha}\nSocial Media: ${socialMedia}`);
}


);