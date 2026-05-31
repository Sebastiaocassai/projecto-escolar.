const formulario = document.querySelector("form")
const respMedia = document.querySelector("h3")
const respSituacao = document.querySelector("h4") 
formulario.addEventListener("submit",(e)=>{e.preventDefault()
     
     const Escola=formulario.Escola.value
     const Curso = formulario.Curso.value 
     const Aluno = formulario.Aluno.value
     const numero_do_celular = formulario.numero_do_celular.value
     const seu_BI = formulario.seu_BI.value 
     const seu_gmail = formulario.seu_gmail.value
     const Sua_turma = formulario.Sua_turma.value
     const Seu_turno = formulario.Seu_turno.value
     const Sua_disciplina = formulario.Sua_disciplina.value
     const Sua_classe = formulario.Sua_classe.value
     const Nota1=Number(formulario.Nota1.value) 
     const Nota2=Number(formulario.Nota2.value)
     const Nota3=Number(formulario.Nota3.value)
        //Cálculo da média 
      const media = (Nota1+Nota2+Nota3) / 3

      let situacao 
      if(media>=10){
      situacao="Parabens vocé foi aprovado com sucesso"
      respSituacao.style.color= "blue"
      } else if(media>=7){ 
        situacao="Infelizmente foste ao recurso"
       } else situacao="Nao Apto"
       respSituacao.style.color="green"

       respMedia.innerHTML =`Escola:${Escola} <br>
       Curso:${Curso}<br> 
       Nome:${Aluno}<br> 
       BI:${seu_BI} <br> 
       Númerodocelular:${numero_do_celular}<br> 
       Gmail:${seu_gmail}<br> 
       Turma:${Sua_turma}<br> 
       Turno:${Seu_turno}<br> 
       Disciplina:${Sua_disciplina} <br> 
       Classe:${Sua_classe}<br> 
       Nota1:${Nota1}<br> 
       Nota2:${Nota2}<br> 
       Nota3:${Nota3}<br> 
       Média Final:${media.toFixed(1)}`
       //
       respSituacao.innerHTML = `Resultado: ${situacao}`})