<template>
  <div class="formulario">
    <router-link to=/>
      <button class="btn btn-primary mt-3 ms-3">Voltar</button>
    </router-link>
    <div class="alert alert-success container" role="alert" v-if="condicao">
      Muito obrigado por sua mensagem. :D
    </div>
    <div class="container mt-5">
      <h1>Me envie uma mensagem:</h1>
      <span>Desde já agradeço qualquer feedback e também pela sua atenção, muito obrigado  :D </span>
      <form class="mt-5"  action="https://formsubmit.co/juangustavomonteiro@gmail.com" method="POST">
        <div class="form-group mb-4">
         
          <input type="hidden" name="_captcha" value="false">
          <label for="exampleFormControlInput" class="mt-3">Nome:</label>
          <input type="text" name="name" class="form-control" placeholder="Digite seu nome" required>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensagem:</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            required 
            v-model="texto" 
          ></textarea>
        </div>
        <button class="btn btn-primary mt-3" type="submit" @click="mensagem($event)">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.formulario{
  background-color: #1e1e20;
  height: 100vh;
  color: white;
}

</style>

<script>
export default {
  name:'ContatoComponent',
  data() {
    return {
      condicao:false,
      texto:'',
      email:''
    }
  },
  methods:{
    mensagem(evento){
      if (this.email.length > 1 && this.texto.length >1){
        evento.preventDefault();
        let tempoAlerta = setTimeout(()=>{
        console.log(tempoAlerta)
        this.condicao = true
      },500)
}
    }
  },
  watch:{
    condicao(){
      if (this.condicao ===true){
        setTimeout(()=>{
          this.condicao = false

        },1000)
        this.email = ' '
        this.texto = ' '
      }
    }
  }

}
</script>

