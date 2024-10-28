// Função para filtar as chuvas de meteoros do dia
const filtraChuvaHoje = (dados) =>{

    // pega a data atual e separa o ano atual
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();

    // Pega o mes e dia de inicio e fim das chuvas de meteoros
    let [mesInicio, diaInicio] = dados.inicio.split("/");
    let [mesFim, diaFim] = dados.fim.split("/");

    // Formata e armaneza as datas das chuvas adicionando o ano atual
    let dataEventoInico = new Date(anoAtual,  mesInicio -1, diaInicio);
    let dataEventoFim = new Date(anoAtual, mesFim - 1, diaFim);

    // Verifica se a data de fim da chuva é menor que a de inicio 
    // e ajusta o ano conforme a nescessidade
    if(dataEventoFim.getTime() < dataEventoInico.getTime()){

        dataEventoFim.setFullYear(anoAtual + 1);

    }

    // Retorna a condição para ser usada no filtro do array
    return (dataAtual.getTime() >= dataEventoInico.getTime() && dataAtual.getTime() <= dataEventoFim.getTime());
}




// Função para filtar as chuvas de meteoros dos proximos dois meses
const filtroChuvaDoisMeses = (dados) => {


    // Pega a data atual e separa o ano atual
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();


    // Atualiza e armazena a data para um e dois meses a frente em
    // relação com a data atual, configurando o dia para 1 
    let umMesAFrente = new Date(dataAtual);
    let doisMesesAfrente = new Date(dataAtual);

    umMesAFrente.setMonth(dataAtual.getMonth() + 1);
    doisMesesAfrente.setMonth(dataAtual.getMonth() + 2);

    umMesAFrente.setDate(1);
    doisMesesAfrente.setDate(1);


    // Pega o mes e dia de inicio e fim das chuvas de meteoros
    let [mesInicio, diaInicio] = dados.inicio.split("/");
    let [mesFim, diaFim] = dados.fim.split("/");

    let dataEventoInico = new Date(anoAtual,  mesInicio -1, diaInicio);
    let dataEventoFim = new Date(anoAtual, mesFim - 1, diaFim);

    // Verifica se a data de fim da chuva é menor que a de inicio 
    // e ajusta o ano conforme a nescessidade    
    if(dataEventoFim.getTime() < dataEventoInico.getTime()){

        dataEventoFim.setFullYear(anoAtual + 1);

    }

    // Retorna a condição para ser usada no filtro do array
    return (dataEventoInico.getMonth() == umMesAFrente.getMonth() || dataEventoInico.getMonth() == doisMesesAfrente.getMonth());

}


export {filtraChuvaHoje, filtroChuvaDoisMeses};