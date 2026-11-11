const nomes = [elidiane,eliziane,tifany,cristina,mayra];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}