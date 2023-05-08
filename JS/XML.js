//anonimo
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior').outerHTML
        = this.responseText;
    }
}
xhttp.open('GET','menu.html',true)
xhttp.send();

//cliente
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior').outerHTML
        = this.responseText;
    }
}
xhttp.open('GET','menu_cli.html',true)
xhttp.send();

//administrador
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior').outerHTML
        = this.responseText;
    }
}
xhttp.open('GET','menu_adm.html',true)
xhttp.send();

//footer
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById('menu-inferior').outerHTML
        = this.responseText;
    }
}
xhttp.open('GET','footer.html',true)
xhttp.send();

