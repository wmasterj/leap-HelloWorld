// SMITH Hello World app for the Leap Motion device


function init() {
  
  var pausedFrame = null;
  window.onkeypress = function(e) {
    if (e.charCode == 32) {
      if (pausedFrame == null) {
        pausedFrame = latestFrame
      } else {
        pausedFrame = null;
      }
    }
  }
        
  var container = $("#container");
  var hands = 0;
  var handsData;
  var handsDOM = $("#hands .count");
  var hand1 = $("#hand1");
  
  var fingers = {};
  var spheres = {};
  
  Leap.loop(function(frame){    
    if(!pausedFrame) {
      
      // Calculate hands
      hands = 0;
      for (var k in frame.handsMap) {
        if(frame.handsMap.hasOwnProperty(k)) {
          hands++;
        }
      }
      // Output hand count
      handsDOM.html(frame.pointables.length);
      
      // Get finger data
      var fingerIds = {};
      var handIds = {};
      for (var pointableId = 0, pointableCount = frame.pointables.length ; pointableId != pointableCount ; pointableId++ ) {
        if(pointableId == 0) {
          finger = frame.pointables[pointableId];
          console.log(finger.tipPosition[1]);
          hand1.css('width', finger.tipPosition[1]+'px');
        }
      }
      
      // Change div width based on hand height from camera
/*
      if(hands > 1) {
        hand1DOM.css('width', hand1.palmPosition[1]);
      }
*/
      
    }
  }); 
}

$(document).ready(init);