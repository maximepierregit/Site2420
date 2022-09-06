var nomCours = /.*[lL][oO][gG]2420/

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("div");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
	  processIncludedHtml();
	  console.log('includeHTML() end');
        }
      }
      xhttp.open("GET",  file, true);
      xhttp.setRequestHeader('Cache-Control', 'no-cache');
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

// Navigation
function processIncludedHtml () {
  menuElem = document.getElementById('menuprincipal');
  if(menuElem == null) {
    return;
  }
  document.getElementById('nn').addEventListener('click',
    function() {
      document.getElementById('nav').setAttribute('style', 'display:none');
      document.getElementById('content').setAttribute('style', 'margin-left:0px');
    });
  refnodes = menuElem.querySelectorAll('[href]');
  prefix = document.location.href.match(nomCours);
  Array.from(refnodes).forEach(i => {
    if(i.hasAttribute('href')) {
      i.setAttribute('href', prefix + '/' + i.getAttribute('href').replace(nomCours, ''));
      //       console.log('hr :' + prefix + ' -- ' + i.getAttribute('href'));
    }
  })			       

  document.getElementById('afternav').innerHTML =
'<br><p class="semnav">Affichage :<br> <a id="toutAfficher" href="#">Max</a> <br><a id="rienAfficher" href="#">Min</a></p>' ;
//  document.getElementById('lecturesMax').addEventListener('click', function () { expansionFnLec('block')});
//  document.getElementById('lecturesMin').addEventListener('click', function () { expansionFnLec('none')});
  document.getElementById('toutAfficher').addEventListener('click', function () { expansionFn('block')});
  document.getElementById('rienAfficher').addEventListener('click', function () { expansionFn('none')});

  expansionFn('block');		// on fait l'expansion initialement
  console.log('processIncludedHTML done');
}
