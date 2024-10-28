import chuvaDeMeteoros from "./data/chuva-de-meteoros.js";
import { filtraChuvaHoje, filtroChuvaDoisMeses } from "./data/retorna-chuvas.js";

console.log("----------CHUVAS QUE PODEM SER VISTAS HOJE!----------\n\n");

const chuvasHoje = chuvaDeMeteoros.filter(filtraChuvaHoje);

console.log(chuvasHoje);

console.log("\n\n----------CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES!----------\n\n");

const chuvasEmDoisMeses = chuvaDeMeteoros.filter(filtroChuvaDoisMeses);

console.log(chuvasEmDoisMeses);

