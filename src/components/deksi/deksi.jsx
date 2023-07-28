import React from 'react'
import './deksi.css'
import IMG0 from '../../assets/0.png'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'

const deksi = () => {
    //Partie start.html
    let machine;
    let joueur;
    let button=document.getElementById("nbrjoueur");
    function play_start() {
      joueur = prompt("Entrez votre un nombre compris entre 0 et 10 inclus :");
      while (!(0 <= parseInt(joueur) && parseInt(joueur)<= 10)) {
          joueur = prompt("Entrez votre un nombre compris entre 0 et 10 inclus :");
      
    }
    alert(joueur +" "+"sera votre nombre gagnant pour cette partie !")
    machine=Math.floor(Math.random() * 10);
    button.innerHTML="Recommencer une nouvelle partie"

  }

  //Partie index.html

  let nbrchoisi;
  let resultat="";
  window.addEventListener("keydown",function (event) {
    switch(event.keyCode){
              case 90: {
                    nbrchoisi=0;
                    document.getElementById("moi").src={IMG0};
                    break;
              }
              case 85: {
                    nbrchoisi=1;
                    document.getElementById("moi").src={IMG1};
                    break;
              }
              case 68: {
                    nbrchoisi=2;
                    document.getElementById("moi").src={IMG2};
                    break;
              }
              case 84: {
                    nbrchoisi=3;
                    document.getElementById("moi").src={IMG3};
                    break;
              }
              case 81: {
                    nbrchoisi=4;
                    document.getElementById("moi").src={IMG4};
                    break;
              }
              case 67: {
                    nbrchoisi=5;
                    document.getElementById("moi").src={IMG5};
                    break;
              }	
    }

    let robot=Math.floor(Math.random() * 5)
    if (robot==0) {
          document.getElementById("machine").src={IMG0};
    }else if(robot==1){
          document.getElementById("machine").src={IMG1};
    }
    else if(robot==2){
          document.getElementById("machine").src={IMG2};
    }
    else if(robot==3){
          document.getElementById("machine").src={IMG3};
    }
    else if(robot==4){
          document.getElementById("machine").src={IMG4};
    }
    else{
          document.getElementById("machine").src={IMG5};
    }

    let s=robot+nbrchoisi;
    if (s ===parseInt(joueur) ) {
          resultat="Gagné";
    }
    else if (s === machine) {
          resultat="Perdu";
    }
    else{
          resultat="Aucun";
    }
    document.querySelector(".nbrchoisi").innerHTML=`joueur : ${nbrchoisi} </br>`;
    document.querySelector(".robot").innerHTML=`robot : ${robot}</br>`;
    document.querySelector(".resultat").innerHTML=`
            Résultat :${resultat}<br>
            Somme :${s}`;
  });


  return (
    <section>
        <div class="container parent__container">
        <div class="enfant">
            <img id="machine" src="" alt=""/>
            <p class="robot"></p>
        </div>
        <div class="enfant">
            <img id="moi" src=""  alt="" />
            <p class="nbrchoisi"></p>
        </div>
        <div class="resultat">Ici sera afficher le résultat</div>
        <div id="commencer">
            <button  onClick={play_start} id="nbrjoueur" className='btn btn-primary'>Commencer</button>
        </div>
    </div>
    </section>
  )
  
}

export default deksi