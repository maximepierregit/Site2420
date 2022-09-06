expansionFn = function(blockOuNone) {
      var coll = document.getElementsByClassName("collapsible");
      for (i = 0; i < coll.length; i++) {
            coll[i].nextElementSibling.style.display = blockOuNone;
      };
      for (i = 0; i < coll.length; i++) { <!-- needs second pass for second level -->
            coll[i].nextElementSibling.style.display = blockOuNone;
  	}
    }
expansionFnLec = function(blockOuNone) {
    localStorage.setItem('scrollpos', window.scrollY);
      var coll = document.getElementsByClassName("lectureCollap");
      for (i = 0; i < coll.length; i++) {
            coll[i].nextElementSibling.style.display = blockOuNone;
      };
      for (i = 0; i < coll.length; i++) { <!-- needs second pass for second level -->
            coll[i].nextElementSibling.style.display = blockOuNone;
  	}
    var scrollpos = localStorage.getItem('scrollpos');
    window.scrollTo(0, parseFloat(scrollpos));
    }
window.onbeforeunload = function(e) {
    localStorage.setItem('scrollposLoad', window.scrollY);
}    
document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollposLoad');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

seqInc = function(nomCompteur, prefix) {
  elems = document.getElementsByClassName(nomCompteur);
  for( i=0; i < elems.length; i++) {
    elems[i].innerHTML = elems[i].innerHTML + prefix + String(i+1) + "<br>";
  }
}
seqInc('b1me', "mer&nbsp;B1-");
seqInc('b2me', "mer&nbsp;B2-");
seqInc('b1je', "jeu&nbsp;B1-");
seqInc('b2je', "jeu&nbsp;B2-");
seqInc('b1ve', "ven&nbsp;B1-");
seqInc('b2ve', "ven&nbsp;B2-");
var semaine;
semaine = 1;
semNodes = document.getElementsByClassName('sem');
for( let i of semNodes) {
    i.innerHTML = '<a id="' + semaine + '"></a>' + String(semaine);
    semaine = semaine + 1;
}

var jour1 = new Date(2022, 7, 30, 12);
var jour2offset = 3;
var jour2 = new Date(jour1.getTime() + 1000*3600*24*jour2offset);    
jour = 1;
jourNodes = document.getElementsByClassName('jour');
monthToMois = function(m) {
  var mtm = {
    "0":"Jan",
    "1":"Fév",
    "2":"Mar",
    "3":"Avr",
    "4":"Mai",
    "5":"Juin",
    "6":"Juil",
    "7":"Août",
    "8":"Sept",
    "9":"Oct",
    "10":"Nov",
    "11":"Déc"
  }
  return(mtm[m]);
}

incrementSem = function() {
  jour1 = new Date(jour1.getTime() + 1000*3600*24*7);    
  jour2 = new Date(jour1.getTime() + 1000*3600*24*jour2offset);    
}
    
for( let i of jourNodes) {
    i.innerHTML = jour1.getDate() + " " + monthToMois(jour1.getMonth()) + "<br>" +
	jour2.getDate() + "&nbsp;" + monthToMois(jour2.getMonth()) + "<br>" +
	i.innerHTML;
    incrementSem();
}

document.getElementById('labbutton').addEventListener("click", function(event) { 
  document.querySelectorAll(".lab").forEach(a=>a.style.display = "none");
});


