
let html = document.getElementById("logo-html");
let java = document.getElementById("logo-java");
let sql = document.getElementById("logo-sql");
let css = document.getElementById("logo-css");
let csharp = document.getElementById("logo-csharp");
let figma = document.getElementById("logo-figma");
let barra = document.getElementById("progresso");
let txtProgresso = document.getElementById("texto-progresso");


html.addEventListener('mouseover', () => { barra.style.width = '80%';
    html.style.width = '15%';
    html.style.height = '20vh';
    html.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "80%";
});
html.addEventListener('mouseout', () => { barra.style.width = '0%';
    html.style.width = '10%';
    html.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
java.addEventListener('mouseover', () => { barra.style.width = '25%';
    java.style.width = '15%';
    java.style.height = '20vh';
    java.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "25%";
});
java.addEventListener('mouseout', () => { barra.style.width = '0%';
    java.style.width = '10%';
    java.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
sql.addEventListener('mouseover', () => { barra.style.width = '75%';
    sql.style.width = '15%';
    sql.style.height = '20vh';
    sql.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "75%";
});
sql.addEventListener('mouseout', () => { barra.style.width = '0%'
    sql.style.width = '10%';
    sql.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
css.addEventListener('mouseover', () => { barra.style.width = '65%';
    css.style.width = '15%';
    css.style.height = '20vh';
    css.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "65%";
});
css.addEventListener('mouseout', () => { barra.style.width = '0%';
    css.style.width = '10%';
    css.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
csharp.addEventListener('mouseover', () => { barra.style.width = '35%';
    csharp.style.width = '15%';
    csharp.style.height = '20vh';
    csharp.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "35%";
});
csharp.addEventListener('mouseout', () => { barra.style.width = '0%';
    csharp.style.width = '10%';
    csharp.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
figma.addEventListener('mouseover', () => { barra.style.width = '90%';
    figma.style.width = '15%';
    figma.style.height = '20vh';
    figma.style.transition = 'all 300ms';
    txtProgresso.innerHTML = "90%";
});
figma.addEventListener('mouseout', () => { barra.style.width = '0%';
    figma.style.width = '10%';
    figma.style.height = '15vh';
    txtProgresso.innerHTML = "0%";
});
let btn = document.getElementById("btn-sobre-mim");
btn.addEventListener('mouseover',() => {
    btn.style.backgroundColor = '#1B002C';
    btn.style.transition = 'background-color 0.2s';
})
btn.addEventListener('mouseout',() => {
    btn.style.backgroundColor = '#78487F';
    btn.style.transition = 'background-color 0.2s';
});
let btnSobre = document.getElementById("btn-sobre-mim");
let modal = document.getElementById("mae-modal");
function aparecerModal(){
    modal.style.display = "block";
}
let ctnDarkMD = document.getElementById('container-btn-dark');
let mainPage = document.getElementById('main-page');
let nomeMarco = document.getElementById('marco-nome');
let habilidadesPage = document.getElementById('habilidades-page');
let projetosPage = document.getElementById('projetos-page');
let btnSobreMim = document.getElementById('btn-sobre-mim');
let textHab = document.getElementById("hab-title");
let containerLogos = document.getElementById("logos-habilidades");
let logosTitles1 = document.getElementById('logos-titles1');
let logosTitles2 = document.getElementById('logos-titles2');
let logosTitles3 = document.getElementById('logos-titles3');
let logosTitles4 = document.getElementById('logos-titles4');
let logosTitles5 = document.getElementById('logos-titles5');
let logosTitles6 = document.getElementById('logos-titles6');
let projTitle = document.getElementById('proj-title');
let titlesProjetos1 = document.getElementById('titles-projetos1');
let titlesProjetos2 = document.getElementById('titles-projetos2');
let titlesProjetos3 = document.getElementById('titles-projetos3');
let titlesProjetos4 = document.getElementById('titles-projetos4');
let SobreMim = document.getElementById('sobre-mim');
let SobreMimTitle = document.getElementById('sobre-mim-title');
let contateMe = document.getElementById('contate-me');
let ContateMeTitle1 = document.getElementById('contate-me-title1');
let ContateMeTitle2 = document.getElementById('contate-me-title2');
let ContateMeTitle3 = document.getElementById('contate-me-title3');
let ContateMeTitle4 = document.getElementById('contate-me-title4');
let btnEnviar = document.getElementById('btn-enviar');
let rodape = document.getElementById('rodape');
let  modalzinho2 = document.getElementById('modalzinho');
let obgd = document.getElementById('obgd');
let infoObgd = document.getElementById('info-obgd');
ctnDarkMD.addEventListener('click',()=>{
    ctnDarkMD.classList.toggle('dark');
    mainPage.classList.toggle('dark');
    nomeMarco.classList.toggle('dark');
    habilidadesPage.classList.toggle('dark');
    projetosPage.classList.toggle('dark');
    btnSobreMim.classList.toggle('dark');
    textHab.classList.toggle('dark');
    barra.classList.toggle('dark');
    containerLogos.classList.toggle('dark');
 logosTitles1.classList.toggle('dark');
 logosTitles2.classList.toggle('dark');
 logosTitles3.classList.toggle('dark');
 logosTitles4.classList.toggle('dark');
 logosTitles5.classList.toggle('dark');
 logosTitles6.classList.toggle('dark');
 projTitle.classList.toggle('dark');
 titlesProjetos1.classList.toggle('dark');
 titlesProjetos2.classList.toggle('dark');
 titlesProjetos3.classList.toggle('dark');
 titlesProjetos4.classList.toggle('dark');
 SobreMim.classList.toggle('dark');
 SobreMimTitle.classList.toggle('dark');
 contateMe.classList.toggle('dark');
 ContateMeTitle1.classList.toggle('dark');
 ContateMeTitle2.classList.toggle('dark');
 ContateMeTitle3.classList.toggle('dark');
 ContateMeTitle4.classList.toggle('dark');
 btnEnviar.classList.toggle('dark');
 rodape.classList.toggle('dark');
 modalzinho2.classList.toggle('dark');
 obgd.classList.toggle('dark');
 infoObgd.classList.toggle('dark')
})

let modalzinho = document.getElementById('mae-modalzinho');
let form = document.querySelector('form')
form.addEventListener('submit' , function(event){
event.preventDefault()
modalzinho.style.display ='block';
})



