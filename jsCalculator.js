function btnclick(val){
    document.getElementById('output').value = document.getElementById('output').value + val;
}
function Clickclear(){
    document.getElementById('output').value = '';
}
function total(){
    var text = document.getElementById('output').value
    var result = eval(text)
    document.getElementById('output').value = result
}