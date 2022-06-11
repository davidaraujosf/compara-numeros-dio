function compara_numeros(num1, num2) {
    if (!num1 || !num2 ) return "Defina dois números diferentes de 0!";

    const primeira_frase = cria_primeira_frase(num1, num2);
    const segunda_frase = cria_segunda_frase(num1, num2);

    return `${primeira_frase}. ${segunda_frase}`
}
    function cria_primeira_frase(num1, num2){
    let sao_iguais = ""

    if(num1 !== num2){
        sao_iguais = "não"
    }

return `Os números ${num1} e ${num2} ${sao_iguais} são iguais`};

function cria_segunda_frase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "menor";

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = "maior";
    }
    if(compara20) {
        resultado20 = "maior";
    }

    return `A soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
console.log(compara_numeros())