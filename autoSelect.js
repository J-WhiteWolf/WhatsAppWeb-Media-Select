(function () {

    let loadedSpans = document.getElementsByTagName('span');
    let selected = 0;
    for (var i = 0; i < loadedSpans.length; i++) {
        if (loadedSpans[i].getAttribute('data-testid') && loadedSpans[i].getAttribute('data-testid').match(/checkbox-round-passive/ig)) {        		
          	  loadedSpans[i].click();
           		selected++;
    }
 }
    console.log(selected + ' media items selected');
})();
