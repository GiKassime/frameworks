var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;
var ctxHTML;

function configEstiloCabecalho(){
    bg=document.getElementById("corFundo").value;
    corFonte=document.getElementById("corFonte").value;
    tamFonte=document.getElementById("tamFonte").value;
    ctxCabecalho = "#cabecalho{\n background-color:"+bg+";\n";
    ctxCabecalho +="color: "+ corFonte+";\n";
    ctxCabecalho +="font-size:"+tamFonte+"pt;\n}\n";
    return ctxCabecalho;

}
function configEstiloLinks(){
    corLink = document.querySelector("#corLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks = "a{\n color:"+corLink+";\n";
    let aux= estiloLinks=="0"?"none":"underline";
    ctxLinks += "text-decoration: "+aux+";\n}\n";
    return ctxLinks;

}
function configHtmlLinks(){}
function configHTMLCabecalho(){
    let aux= document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>'+aux+'</h1>';
    return ctxCabecalho;
}



function gerarCodigo(){
    //código para CSS
    let codeCSS = document.querySelector("#codeCSS");
    let css=configEstiloCabecalho();
    css+= configEstiloLinks();
    codeCSS.value=css;

    //código para HTML
    let codeHTML = document.querySelector("#codeHTML");
    ctxHTML = "<html>\n<head>\n"+
    "<link rel='stylesheet' href='estilo.css'>\n"+
    "<title>Minha página</title>\n"+
    "</head>\n<body>\n"+
    "<div id='cabecalho'>"+configHTMLCabecalho()+"</div>"+
    "<nav id='links'>\n"+configHtmlLinks+"\n</nav>"+
    "<div id='conteudo'></div>"+
    "</body>\n</html>";
    codeHTML.value = ctxHTML;
}

function download(campo,arquivo){}