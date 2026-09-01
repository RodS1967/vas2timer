<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<!-- Kudos to Melanie Gmünder who provided the base code for this project under the following license.

			Copyright (c) 2023 by Melanie Gmünder (https://codepen.io/gmume/pen/RwagvgQ)

			Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
			(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
			publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do 
			so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
			MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
			FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
			WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		-->
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="vas2timer.css" />
		<title>VAS+2 Timer</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">
		</script>
	</head>

	<body>
	  <table id="bossLlothis">
		<tbody>
		  <tr id="progressLlothis">
			<td colspan="2">
			  <div id="barTextLlothis"></div>
			  <div id="barLlothis"></div>
			</td>
		  </tr>
		  <tr class="content">
			<td>
			  <h1>Llothis</h1>
			  <div id="textLlothis"></div>
			  <div id="timerLlothis"></div>
			</td>
			<td>
			  <!-- Startbutton -->
			  <button id="startLlothis">
				Start
			  </button>
	
			  <!-- Resetbutton -->
			  <button id="resetLlothis">
				Down
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	  <table id="bossFelms">
		<tbody>
		  <tr id="progressFelms">
			<td colspan="2">
			  <div id="barTextFelms"></div>
			  <div id="barFelms"></div>
			</td>
		  </tr>
		  <tr class="content">
			<td>
			  <h1>Felms</h1>
			  <div id="textFelms"></div>
			  <div id="timerFelms"></div>
			</td>
			<td>
			  <!-- Startbutton -->
			  <button id="startFelms">
				Start
			  </button>
	
			  <!-- Resetbutton -->
			  <button id="resetFelms">
				Down
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
		<script src="vas2timer.js">
		</script>
	</body>
</html>
