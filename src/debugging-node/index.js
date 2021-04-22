


const ordenaBurbuja = (lista) => {

    let longitudLista, indexOrder, indexChange, auxChange;
    longitudLista = Lista.length;

    console.info(longitudLista);

    for (indexorder = 1; indexOrder < (longitudLista - indexOrder); indexChange++) {

        for (indexChange = 0; indexChange < (longitudLista - indexOrder); indexChange++){
            
            if (lista[indexChange] > lista[indexChange + 1])  { 
                auxChange = lista[indexChange];
                lista[indexChange] = lista[indexChange + 1];
               lista[indexChange + 1] = auxChange;
            }
        }

     return lista;
        
    }

let listaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada);

const listaOrdenada = ordenarBurbuja(listaDesordenada);
console.log(listaOrdenada);
}
