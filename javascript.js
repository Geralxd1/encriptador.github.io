var reemplazos = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
var reemplazos2 = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};
function leerTexto(num) {
    var texto = document.getElementById("texto").value;
    if(num ==1){
        encriptar(texto);
    }
    else if(num==2){
        desencriptar(texto);
    }
}
function escribirTexto(textoModificado) {
    var areaEncriptado = document.getElementById("textoEncriptado");
    areaEncriptado.value = textoModificado;
}
function encriptar(textoOriginal){
    var textoModificado = textoOriginal.replace(/[aeiou]/gi, function(matched) {
        return reemplazos[matched];
    });
    escribirTexto(textoModificado);
}
function desencriptar(textoOriginal){
    var textoModificado = textoOriginal.replace(/ai|enter|imes|ober|ufat/gi, function(matched) {
        return reemplazos2[matched];
    });
    escribirTexto(textoModificado);
}
function copyToClipboard() {
    var textarea = document.getElementById("textoEncriptado");
    textarea.select();
    navigator.clipboard.writeText(textarea.value)
} 
