// Codigo Atualizado
//Factory Function Calculador
function criaCalculadora(){
  return {
      //variaveis
      display: document.querySelector('.display'),

      //metodos
      inicia(){
        this.cliqueBotoes();
        this.pressionaEnter();
      },

      clearDisplay(){
        this.display.value = '';
      },

      apagaUm(){
        this.display.value = this.display.value.slice(0, -1);
      },

      realizaConta(){
        let conta = this.display.value
        try{
          conta = eval(conta);

          if(!conta){
            alert('Conta  1');
            return;};
          this.display.value = conta;

        }catch(e){alert('Conta Inválida')}
          
      },

      pressionaEnter(){
        this.display.addEventListener('keyup', e =>{
          if(e.keyCode === 13){
            this.realizaConta();
          };
        });

      },
      cliqueBotoes(){
          document.addEventListener('click', (e) =>{
              el = e.target;
              if(el.classList.contains('btn-num')){
                  this.btnParaDisplay(el.innerText);
              }

              if(el.classList.contains('btn-clear')){
                this.clearDisplay();
              }

              if(el.classList.contains('btn-del')){
                this.apagaUm();
              }

              if(el.classList.contains('btn-eq')){
                this.realizaConta();
              }

          });
      },

      btnParaDisplay(valor){
        this.display.value += valor;
      },
  };
}


//Inicializando a calculadora
const calculadora = criaCalculadora();
calculadora.inicia();