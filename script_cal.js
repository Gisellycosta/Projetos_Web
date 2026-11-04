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