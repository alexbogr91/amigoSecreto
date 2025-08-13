let names = []


function limparCampo(){
    let name = document.querySelector('input')
    name.value = ""
}


function adicionarAmigo(){
    
    let name = document.querySelector('input').value
    if(name.trim() !== ""){
        names.push(name)
        
        let listaAmigos = document.getElementById('listaAmigos')
        let lista = criarLista('li', name)
        listaAmigos.appendChild(lista)


        limparCampo()
    }
}

function sortearAmigo(){
    if(names.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * names.length)
        let nameAleatorio = names[indiceAleatorio]
        
        
        let resultado = document.getElementById('resultado')
        let listaSorteadaDenames = criarLista('li', nameAleatorio)
        resultado.appendChild(listaSorteadaDenames)

        names.splice(indiceAleatorio, 1)
    }

}

function criarLista(tag, name){
    let lista = document.createElement(tag)
    lista.textContent = name
    return lista
}