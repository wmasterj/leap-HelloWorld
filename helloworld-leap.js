// SMITH Hello World app for the Leap Motion device

var ws;

// Check for both WebSocket and MozWebSocket objects
if((typeof(WebSocket) == 'undefined') && (typeof(MozWebSocket) != 'undefined') ) {
  WebSocket = MozWebSocket;
}


// Create the socket with handlers
function init() {
  
  // Create and open the socket
  ws = new WebSocket('ws://localhost:6437/');
  
  // On succcessful connection
  ws.onopen = function(event) {
    //
  };
  
  // On socket message recevied
  ws.onmessage = function(event) {
    
  };
  
  // On socket close
  ws.onclose = function(event) {
    
  };
  
  // On socket error
  ws.onerror = function(event) {
     
  }
  
}

// Create the socket with event handlers
function init() {
  //Create and open the socket
  ws = new WebSocket("ws://localhost:6437/");
  
  // On successful connection
  ws.onopen = function(event) {
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("connection").innerHTML = "WebSocket connection open!";
  };
  
  // On message received
  ws.onmessage = function(event) {
    var obj = JSON.parse(event.data);
    var str = JSON.stringify(obj, undefined, 2);
    document.getElementById("output").innerHTML = '<pre>' + str + '</pre>';
  };
  
  // On socket close
  ws.onclose = function(event) {
    ws = null;
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("connection").innerHTML = "WebSocket connection closed";
  }
}