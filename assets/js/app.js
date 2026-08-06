 /* ==========================================================
    LEADS 360º PLATFORM
    APP.JS
    HOME V1.0.0
 ========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


/* ==========================================================
   ELEMENTOS PRINCIPAIS
========================================================== */


const searchSection =
document.getElementById("searchFlow");


const searchWrapper =
document.querySelector(".search-wrapper");


const searchInput =
document.getElementById("businessSearch");


const btnSearch =
document.getElementById("btnSearch");


const btnRestart =
document.getElementById("btnRestart");


const btnConnect =
document.getElementById("btnConnect");


const btnPanelConnect =
document.getElementById("btnPanelConnect");


const btnContract =
document.getElementById("btnContract");



const loader =
document.getElementById("scoreLoader");


const result =
document.getElementById("scoreResult");


const evolution =
document.getElementById("panelEvolution");



const estado =
document.getElementById("estado");


const cidade =
document.getElementById("cidade");


const searchGlobal =
document.querySelector(".search-global");



/* ==========================================================
   RESULTADO
========================================================== */


const resultScore =
document.getElementById("resultScore");


const resultMessage =
document.getElementById("resultMessage");


const resultTitle =
document.getElementById("resultTitle");



/* ==========================================================
   EVOLUÇÃO
========================================================== */


const panelCurrentScore =
document.getElementById("panelCurrentScore");


const panelLastScore =
document.getElementById("panelLastScore");


const panelTips =
document.getElementById("panelTips");



const panelEmpty =
document.getElementById("panelEmpty");


const panelContent =
document.getElementById("panelContent");



/* ==========================================================
   ESTADO DO SISTEMA
========================================================== */


let currentScore = 72;

let lastScore = 72;

let connected = false;

let tipsUsed = 1;



/* ==========================================================
   CONTROLE BUSCA GLOBAL
========================================================== */


function updateSearchGlobal(){


    if(!searchGlobal)
        return;


    if(
        estado.value === "" &&
        cidade.value === ""
    ){

        searchGlobal.style.display =
        "inline";


    }else{


        searchGlobal.style.display =
        "none";

    }


}



/* ==========================================================
   SCORE
========================================================== */


function updateResult(score){


resultScore.innerHTML =
score;



if(score <= 25){


resultTitle.innerHTML =
"Precisamos melhorar sua presença digital";


resultMessage.innerHTML =

"Você precisa melhorar essa presença, poucos clientes te veem. Use nosso painel de acompanhamento, basta conectar-se.";



}



else if(score <=50){


resultTitle.innerHTML =
"Existe uma oportunidade de evolução";


resultMessage.innerHTML =

"Precisamos melhorar sua visibilidade. Use nosso painel de acompanhamento, basta conectar-se.";



}



else if(score <=75){


resultTitle.innerHTML =
"Parabéns!";


resultMessage.innerHTML =

"Você tem ótima visibilidade. Use nosso painel de acompanhamento, basta conectar-se.";



}



else{


resultTitle.innerHTML =
"Excelente evolução";


resultMessage.innerHTML =

"Parabéns! Você já sabe o que faz com seu negócio. Mas precisa evoluir para um 100%. Que tal entender sobre Tráfego Pago agora e continuar sua evolução.";


}



}

/* ==========================================================
   PAINEL MINHA EVOLUÇÃO
========================================================== */


function updateEvolution(){


    if(panelCurrentScore){

        panelCurrentScore.innerHTML =
        currentScore;

    }



    if(panelLastScore){

        panelLastScore.innerHTML =
        lastScore;

    }



    if(panelTips){

        panelTips.innerHTML =
        tipsUsed + " / 3";

    }


}





/* ==========================================================
   ABRIR EVOLUÇÃO
========================================================== */


function openEvolution(){


    result.style.display =
    "none";


    evolution.style.display =
    "block";



    if(connected){


        if(panelEmpty){

            panelEmpty.style.display =
            "none";

        }



        if(panelContent){

            panelContent.style.display =
            "block";

        }



        updateEvolution();



    }else{


        if(panelEmpty){

            panelEmpty.style.display =
            "block";

        }



        if(panelContent){

            panelContent.style.display =
            "none";

        }


    }


}







/* ==========================================================
   INICIAR ANÁLISE
========================================================== */


function startAnalysis(){



    const value =
    searchInput.value.trim();



    if(!value){


        alert(
        "Digite sua empresa para iniciar a análise."
        );


        return;


    }





    /*
       ESCONDE APENAS O CONTEÚDO
       DA PESQUISA

       NÃO REMOVE A SECTION
    */


    if(searchWrapper){

         searchWrapper.classList.add("hidden-search");

    }




    loader.style.display =
    "flex";



    result.style.display =
    "none";



    evolution.style.display =
    "none";






    setTimeout(()=>{


        loader.style.display =
        "none";



        result.style.display =
        "flex";



        updateResult(currentScore);



    },3000);



}







/* ==========================================================
   NOVA PESQUISA
========================================================== */


function resetSearch(){



    result.style.display =
    "none";



    evolution.style.display =
    "none";



    loader.style.display =
    "none";





    if(searchWrapper){


        searchWrapper.style.display =
        "";


    }





    searchInput.value =
    "";

    searchWrapper.classList.remove(
"hidden-search"
);




    if(estado){

        estado.value =
        "";

    }



    if(cidade){

        cidade.value =
        "";

    }





    updateSearchGlobal();





    searchInput.focus();




    searchSection.scrollIntoView({

        behavior:"smooth",

        block:"center"

    });



}






/* ==========================================================
   CONEXÃO
========================================================== */


function connectUser(){



    /*
       FUTURO:
       
       Modal oficial:

       Nome
       E-mail
       WhatsApp

       Runtime Core
    */



    alert(

    "Abrir cadastro:\n\nNome\nE-mail\nWhatsApp"

    );



}






/* ==========================================================
   CONTRATAÇÃO
========================================================== */


function goContract(){


alert(

"Assinatura Leads 360º"

);


}

/* ==========================================================
   EVENTOS
========================================================== */



if(btnSearch){


    btnSearch.addEventListener(

        "click",

        startAnalysis

    );


}





if(searchInput){


    searchInput.addEventListener(

        "keypress",

        (event)=>{


            if(event.key === "Enter"){


                startAnalysis();


            }


        }


    );


}





if(btnRestart){


    btnRestart.addEventListener(

        "click",

        resetSearch

    );


}





if(btnConnect){


    btnConnect.addEventListener(

        "click",

        connectUser

    );


}





if(btnPanelConnect){


    btnPanelConnect.addEventListener(

        "click",

        connectUser

    );


}





if(btnContract){


    btnContract.addEventListener(

        "click",

        goContract

    );


}





/* ==========================================================
   FILTROS DE REGIÃO
========================================================== */


if(estado){


    estado.addEventListener(

        "change",

        updateSearchGlobal

    );


}





if(cidade){


    cidade.addEventListener(

        "change",

        updateSearchGlobal

    );


}





/* ==========================================================
   UNI360º
========================================================== */


const btnUni360 =
document.getElementById("btnUni360");



if(btnUni360){


    btnUni360.addEventListener(

        "click",

        ()=>{


            alert(

            "Acesso Uni360º\n\nConecte-se para continuar."

            );


        }


    );


}







/* ==========================================================
   ESTADO INICIAL
========================================================== */



if(loader){

    loader.style.display =
    "none";

}



if(result){

    result.style.display =
    "none";

}



if(evolution){

    evolution.style.display =
    "none";

}



if(panelContent){

    panelContent.style.display =
    "none";

}




updateSearchGlobal();





});