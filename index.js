'use strict'

//const app = {};

//window.onload = function onload() {
	var openFile = function openFile(event) {
		var input = event.target;
		var reader = new FileReader();
		
		reader.onload = function readerOnload() {
			var dataURL = reader.result;
			
			var typeNumber = 0;
			var errorCorrectionLevel = 'L';
			var qr = qrcode(typeNumber, errorCorrectionLevel);
			qr.addData(dataURL);
			qr.make();
			document.getElementById('display').innerHTML = qr.createImgTag();
			//new QRCode(document.getElementById('display'), dataURL);
		};
    
    reader.readAsText(input.files[0]);
  };
//};
