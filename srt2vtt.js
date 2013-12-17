var srt2vtt = srt2vtt || {};

srt2vtt.wrapper;

srt2vtt.FileSelectHandler = function (e) {
		var files = e.target.files || e.dataTransfer.files;
		for (var i = 0, f; f = files[i]; i++) {
			srt2vtt.ParseFile(f);
		}
	};

	// output file information
srt2vtt.ParseFile = function (file) {
		if(file.name.split('.').pop()=="srt") {
			var reader = new FileReader();
            reader.onload = function (e) {
				var srtxt = e.target.result.split("\n");

				txt = "WEBVTT\n";
				for(var i=0; i<srtxt.length; i++) {
					if(srtxt[i].match(/[0-9]+:[0-9]+:[0-9]+,[0-9]+\s-->\s[0-9]+:[0-9]+:[0-9]+,[0-9]+/g)){
						txt = txt + srtxt[i].replace(/,/g,"."); + "\n";
					} else {
						txt = txt + srtxt[i] + "\n";
					}
				}

				document.getElementById("message").innerHTML="<a download='"+file.name.replace(/.srt/g,".vtt")+"' href=\"data:Application/octet-stream,"+encodeURIComponent(txt)+"\"><i>Click here to download "+file.name.replace(/.srt/g,".vtt")+"</i></a>";
            };
            reader.readAsText(file);
		} else {
			document.getElementById("message").innerHTML = "<i>Please give a SubRip file (*.srt) .</i>";
		}
	};


	// initialize
srt2vtt.init = function (div_id) {
		srt2vtt.wrapper = document.getElementById(div_id);
		// call initialization file
		if (window.File && window.FileList && window.FileReader) {
			srt2vtt.wrapper.innerHTML = '<div><input type="file" id="fileselect" name="fileselect[]" multiple="multiple" /></div><div id="message"></div>';
			// file select
			document.getElementById("fileselect").addEventListener("change", srt2vtt.FileSelectHandler, false);
		} else {
			srt2vtt.wrapper.innerHTML="File API is not supported!";
		}
	};

