This is a javascript based SubRip to WebVtt convertor.

I share this as MIT license. Everyone is welcomed to share and improve it.

A simple demo is at: http://www.newstudytimes.com/cinema.html . Drag a *.srt file then you will have a *.vtt file downloadable.

This small tool is based on javascript File API. I check it with <i>if(window.File && window.FileList && window.FileReader)</i>

How to use: simply put srt2vtt.js to head place, e.g. &ltscript src="srt2vtt.js"&gt&lt/script&gt. then call srt2vtt.init with an DIV id which you want to place the srt2vtt convertor in. e.g.:

&lt;div id="srt_to_vtt"&gt;&lt;/div&gt;
&lt;script&gt;srt2vtt.init("srt_to_vtt")&lt;/script&gt;

That's it. after you select a SubRip file, you will get the Webvtt file. All in Javascript.

I also made a handy bash script to convert the SubRip file to WebVtt format. It shall be useful if someone have a batch of srt files need to be converted.

Hope this small tool can save your time, Enjoy!
