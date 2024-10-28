import chuvaDeMeteoros from "./data/chuva-de-meteoros.js";
import { filtraChuvaHoje, filtroChuvaDoisMeses } from "./data/retorna-chuvas.js";
import {formataIntensidade, formadaPeriodo, formataHemisfério} from "./data/formata-chuvas.js"


// EXIBIÇÃO DAS CHUVAS DE HOJE
console.log("----------CHUVAS QUE PODEM SER VISTAS HOJE!----------\n\n");

const chuvasHoje = chuvaDeMeteoros.filter(filtraChuvaHoje);

let mensagem = (`encontramos ${chuvasHoje.length} chuvas de meteoros que podem ser vistas hoje`)

console.log(mensagem+"\n");

console.log("NOME DA CHUVA".padEnd(30, ' ')+" - INTENCIDADE ".padEnd(17)+ "- HEMISFÉRIO ".padEnd(18)+ "- PERÍODO")

chuvasHoje.map(chuva => {
    console.log(chuva.nome.padEnd(30, ' ')+" - "+formataIntensidade(chuva).padEnd(15)+" - "+formataHemisfério(chuva).padEnd(10)+" - "+formadaPeriodo(chuva));
})



// EXIBIÇÃO DAS CHUVAS EM DOIS MESES

console.log("\n\n----------CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES!----------\n\n");

const chuvasEmDoisMeses = chuvaDeMeteoros.filter(filtroChuvaDoisMeses);

console.log("NOME DA CHUVA".padEnd(30, ' ')+" - INTENCIDADE ".padEnd(17)+ "- HEMISFÉRIO ".padEnd(18)+ "- PERÍODO")

chuvasEmDoisMeses.map(chuva => {
    console.log(chuva.nome.padEnd(30, ' ')+" - "+formataIntensidade(chuva).padEnd(15)+" - "+formataHemisfério(chuva).padEnd(10)+" - "+formadaPeriodo(chuva));
})

