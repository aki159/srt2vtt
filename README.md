This is a javascript based SubRip to WebVtt convertor.

I share this as MIT license. Everyone is welcomed to share and improve it.

A simple demo is at: http://www.newstudytimes.com/cinema.html . Drag a *.srt file then you will have a *.vtt file downloadable.

This small tool is based on javascript File API. I check it with <i>if(window.File && window.FileList && window.FileReader)</i>

How to use: simply put srt2vtt.js to head place, e.g. <script src="srt2vtt.js"></script>. then call srt2vtt.init with an DIV id which you want to place the srt2vtt convertor in. e.g.:

<div id="srt_to_vtt"></div>
<script>srt2vtt.init("srt_to_vtt")</script>

That's it. after you select a SubRip file, you will get the Webvtt file. All in Javascript.

Hope this small tool can save your time, Enjoy!
