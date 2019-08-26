function abrirPorta() {
    var idPorta = document.querySelector('.porta.direito');
    console.log(idPorta);
    idPorta.style.animation = "porta 30s linear 0s infinite forwards";
atualizaContador(5);

}

var ss = -1;
function atualizaContador(futuro)
{
    ss = (ss==-1) ? futuro : ss;

    if (ss > 0) {
        ss--;
        setTimeout(atualizaContador,1000);
    } else {
        location.href="telefone.html";
    }
}