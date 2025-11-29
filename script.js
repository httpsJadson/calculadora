// Codigo Atualizado
//Factory Function Calculador
function criaCalculadora(){
  return {
      //variaveis
      display: document.querySelector('.display'),

      //metodos
      inicia(){
        this.criaBotoes();
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
      criaBotoes(){
        const divBotoes = document.querySelector('.botoes');
        divBotoes.innerHTML = `
            <div class="linha" id="linha-1">
                <button class="btn btn-clear">C</button>
                <button class="btn btn-num">(</button>
                <button class="btn btn-num">)</button>
                <button class="btn btn-num operador"> + </button>
            </div>
            <div class="linha" id="linha-2">
                <button class="btn btn-num">7</button>
                <button class="btn btn-num">8</button>
                <button class="btn btn-num">9</button>
                <button class="btn btn-num operador"> - </button>
            </div>
            <div class="linha" id="linha-3">
                <button class="btn btn-num">4</button>
                <button class="btn btn-num">5</button>
                <button class="btn btn-num">6</button>
                <button class="btn btn-num operador"> * </button>
            </div>
            <div class="linha" id="linha-4">
                <button class="btn btn-num">1</button>
                <button class="btn btn-num">2</button>
                <button class="btn btn-num">3</button>
                <button class="btn btn-num operador"> / </button> 
            </div>
            <div class="linha" id="linha-5">
                <button class="btn btn-num">.</button>
                <button class="btn btn-num">0</button>  
                <button class="btn btn-del">&laquo;</button>
                <button class="btn btn-eq operador">=</button>
            </div>
        
        `
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