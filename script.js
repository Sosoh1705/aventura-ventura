const avanca = document.querySelectorAll (' .btn-proximo');

avanca.forEach (button => {
   button.addEventListener ('click'), function(){
       const atual = document.querySelector('.ativo')
       const proximoPasso = 'passo-' + this.geTattribute('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(propximoPasso).classList.add('ativo');
       

}     