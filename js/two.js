
var two = () => {
    try {
    var s = '{"nombre":"cristian", "ciudad":"santiago", "edad":"37"}';
    var o = JSON.stringify(s);
    }
    catch (error){
        alert("No puede ser procesado")
    }
    return o;
}