This is a javascript based SubRip to WebVtt convertor.

I share this as MIT license. Everyone is welcomed to share and improve it.

A simple demo is at: http://www.newstudytimes.com/cinema.html . Drag a *.srt file then you will have a *.vtt file downloadable.

This small tool is based on javascript File API. I check it with <i>if(window.File && window.FileList && window.FileReader)</i>

How to use: simply put srt2vtt.js to head place, e.g. %3Cscript%20src%3D%22srt2vtt.js%22%3E%3C%2Fscript%3E. then call srt2vtt.init with an DIV id which you want to place the srt2vtt convertor in. e.g.:

%3Cdiv%20id%3D%22srt_to_vtt%22%3E%3C%2Fdiv%3E
%3Cscript%3Esrt2vtt.init(%22srt_to_vtt%22)%3C%2Fscript%3E

That's it. after you select a SubRip file, you will get the Webvtt file. All in Javascript.

Hope this small tool can save your time, Enjoy!
