var themeLength = dataset.length,
    themeId = 0,
    dataLength = dataset[themeId].length,
    memeLength = dataLength-1,
    memeIndex,
    memeIndexLast = dataLength-2,
    viewportHeight = $(window).height(),
    panelHeight = viewportHeight - 110;  //minus navbar and progress bar

console.log("themeLength = " + themeLength + ", dataLength = " + dataLength + ", memeLength = " + memeLength + ", memeIndexLast = " + memeIndexLast);

function init() { 
  $('#desc-theme').html('<p>'+ dataset[themeId][0].themeDesc +'</p>');
  $('#theme-audio').attr("src","https://www.podtrac.com/pts/redirect.mp3/cdn.pri.org/sites/default/files/segment-audio/07282015_02.mp3");
  for (i = 1; i < dataLength; i++) { 
    $('#meme-box').append('<div class="dragend-page" id="meme'+ dataset[themeId][i].memeId +'"><h2 class="memeTitle text-center">'+ dataset[themeId][i].memeName +'</h2><div class="clothOpt text-center"><img class="memeImg" src="'+ dataset[themeId][i].memeImg +'"></div><div class="description"><small>'+ dataset[themeId][i].memeDesc +'</small></div></div>');
  }  
  setDragend();
  // $('.arrowLeft').click(function () {
  //     $("#meme-box").dragend("right");
  // });
  // $('.arrowRight').click(function () {
  //     $("#meme-box").dragend("left");
  // });
  // $('.btn-theme').click(function () {
  //   themeId = $(this).attr('id').slice(-1);
  //   console.log("themeId =  " + themeId);
  //   selectTheme();
  // });
  $('#btn-destroy').click(function () {
    alert("destroy!");
    var thisfunction = new Dragend();
    thisfunction.destroy();
  });
}

$(document).ready(function(){
  init();
}); 

// function selectTheme(){
//   console.log("desc =  " + dataset[themeId][0].themeName);
//   $('#desc-theme').html('<p>'+ dataset[themeId][0].themeDesc +'</p>');
//   $('#theme-audio').attr("src","https://www.podtrac.com/pts/redirect.mp3/cdn.pri.org/sites/default/files/segment-audio/07282015_01.mp3");
//   $('#meme-box').html('');
//   for (i = 1; i < dataLength; i++) { 
//     $('#meme-box').append('<div class="dragend-page" id="meme'+ dataset[themeId][i].memeId +'"><h2 class="memeTitle text-center">'+ dataset[themeId][i].memeName +'</h2><div class="clothOpt text-center"><img class="memeImg" src="'+ dataset[themeId][i].memeImg +'"></div><div class="description"><small>'+ dataset[themeId][i].memeDesc +'</small></div></div>');
//   }  
// }

var setDragend = function Dragend(){
  $("#meme-box").dragend({
    // onSwipeEnd: function(){
    //       memeIndex = $(this.activeElement).index();
    //       if (memeIndex == 0){$(".arrowLeft").hide();} else {$(".arrowLeft").show();}
    //       if (memeIndex == memeIndexLast){$(".arrowRight").hide();} else {$(".arrowRight").show();}
    // },
  });
}

// function sendData() {
//   $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
//     function(json) {
//       $.ajax({
//         type: 'POST',
//         url: 'https://docs.google.com/forms/d/e/1FAIpQLSegwawOsrNZ99Djqfhu-GOa30h4AB4wc236f3Qpqyb4pZo9aQ/formResponse',
//         data: { 
//           "entry.1624200825": selectedCloth,
//           "entry.1438712899": brands[selectedBrand].name,
//           "entry.163085213": materials[selectedMaterial].material,
//           "entry.418890974": countries[selectedCountry].country,
//           "entry.544836298": json.ip,
//           "entry.1664692061": document.referrer,
//         }
//       }); 
//     }
//   );   
// }