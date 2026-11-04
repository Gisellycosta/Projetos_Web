function Calcular(){
    event.preventDefault()
    let Produto = document.getElementById("Produto").value
    let Valor = Number(document.getElementById("Valor").value)
    let Desconto= Number(document.getElementById("Desconto").value)
    
    let Valor_desc = Valor*(Desconto/100)
    let Valor_final = Valor - Valor_desc
     
    document.getElementById("Resultado1").innerHTML='<b>Produto:<b>'+ Produto
    document.getElementById("Resultado2").textContent='Valor:R$'+Valor
    document.getElementById("Resultado3").innerText='Desconto:R$'+ Valor_desc
    document.getElementById("Resultado4").innerText='Valor Final:R$'+Valor_final
    
}
function calc_Restaurante(){
    event.preventDefault()
    let Valor = Number( document.getElementById ("Valor").value)
    let pessoas = Number( document.getElementById("pessoas").value)

    let percentual = Valor*(10/100)
    let Valor_atual = Valor + percentual
    let Conta = Valor_atual/pessoas

     document.getElementById('Resultado1').innerHTML = 'Valor: R$ '+ Valor
     document.getElementById('Resultado2').innerHTML = '10%: R$'+ percentual
     document.getElementById('Resultado3').innerHTML = 'Valor atual: '+ Valor_atual
     document.getElementById('Resultado4').innerHTML = 'Valor por pessoas: '+ Conta.toFixed(2)
}