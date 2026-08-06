/* ==========================================================

   LEADS 360º PLATFORM

   THEME ENGINE

   Arquivo:
   assets/theme/theme.js

   Versão:
   1.0.0

   Responsabilidade:
   Controle oficial de temas L360º

========================================================== */


"use strict";



const L360Theme = {


    storage:

        "l360_theme",



    default:

        "dark",



    init(){


        const saved =

        localStorage.getItem(

            this.storage

        );



        if(saved){


            this.apply(saved);


        }else{


            this.apply(

                this.default

            );


        }



        this.watchSystem();



    },





    apply(theme){



        const html =

        document.documentElement;



        if(theme === "auto"){



            const systemDark =

            window.matchMedia(

                "(prefers-color-scheme: dark)"

            ).matches;



            html.setAttribute(

                "data-theme",

                systemDark

                ?

                "dark"

                :

                "light"

            );



        }else{



            html.setAttribute(

                "data-theme",

                theme

            );


        }



        localStorage.setItem(

            this.storage,

            theme

        );



        this.updateIcon(theme);



    },






    toggle(){



        const current =

        localStorage.getItem(

            this.storage

        )

        ||

        this.default;



        let next;



        if(current === "dark"){


            next="light";


        }

        else if(current === "light"){


            next="auto";


        }

        else{


            next="dark";


        }



        this.apply(next);



    },






    watchSystem(){



        const media =

        window.matchMedia(

            "(prefers-color-scheme: dark)"

        );



        media.addEventListener(

            "change",

            ()=>{


                const current =

                localStorage.getItem(

                    this.storage

                );



                if(current === "auto"){


                    this.apply(

                        "auto"

                    );


                }


            }

        );


    },






    updateIcon(theme){



        const button =

        document.getElementById(

            "themeToggle"

        );



        if(!button){

            return;

        }



        if(theme === "dark"){


            button.innerHTML="🌙";


        }



        if(theme === "light"){


            button.innerHTML="☀️";


        }



        if(theme === "auto"){


            button.innerHTML="⚙️";


        }



    }



};





document.addEventListener(

    "DOMContentLoaded",

    ()=>{


        L360Theme.init();



        const btn =

        document.getElementById(

            "themeToggle"

        );



        if(btn){



            btn.addEventListener(

                "click",

                ()=>{


                    L360Theme.toggle();


                }

            );


        }



    }

);