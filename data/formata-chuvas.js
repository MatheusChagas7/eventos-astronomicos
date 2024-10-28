function formataIntensidade(chuva){

    let intensidade = chuva.intensidade.split(" ")[0];

    switch(intensidade){
        case 'Fraca':
            return (`(1) ${intensidade}`);
            break;
        case 'Média':
            return (`(2) ${intensidade}`);
            break;
        case 'Forte':
            return (`(3) ${intensidade}`);
            break;
        case 'Irregular':
            return (`${intensidade}`);
            break;
        default:
            return ("Não definida");
            break;
    }
} 

function formadaPeriodo(chuva){

    let [mesInicio, diaInicio] = chuva.inicio.split("/");
    let [mesFim, diaFim] = chuva.fim.split("/");

    return (`De ${diaInicio}/${mesInicio} à ${diaFim}/${mesFim}`);
}

function formataHemisfério(chuva){
    if(chuva.declinacao > 0){
        return "Norte";
    }else if(chuva.declinacao < 0){
        return "Sul";
    }else{
        return "Equador celeste";
    }
}

export {formataIntensidade, formadaPeriodo, formataHemisfério};