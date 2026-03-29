	var x = document.getElementById('close');
	var o = document.getElementById('open');
	var me = document.getElementById('menu');
	
	
function op(){
	x.style.display = "none";
	o.style.display = "block";
	me.style.right = "-70%";
	me.style.opacity= 0;
}
function cl(){
	x.style.display = "block";
	o.style.display = "none";
	me.style.right = "0%";
	me.style.opacity= 1;
	

}
	var s = document.getElementById('submenu');
	var d = document.getElementById('dropdown');
	var s1 = document.getElementById('submenu_1');
	var d1 = document.getElementById('dropdown_1');
	var dow = document.getElementById('down');
	var dow1 = document.getElementById('down1');
function drop(){
		if(d.style.display=="block"){
			d.style.display="none";
		}else{
		d.style.display="block";
		d1.style.display="none";
		
		}
		
	 }
	 	function drop_1(){
		if(d1.style.display=="block"){
			d1.style.display="none";
			
		
}else{
		d1.style.display="block";
		d.style.display="none";
	}
		
	 }

	<i id="open" onclick="cl();" class="fa fa-bars" aria-hidden="true"></i>
<div class="menu" id="menu">
	<i  id="close" onclick="op();" class="fa fa-times" aria-hidden="true"></i>
	
<nav>
	<ul>
	<li><a href="index.html">DIGITALNI MENI</a></li>
	<li id="submenu" onclick="drop();"><a href="#">HRANA<i 
	 id="down" class="fa fa-angle-down" aria-hidden="true"></i></a>
		<ul id="dropdown">
			<li><a href="salate.html">SALATE</a></li>
			<li><a href="sirevi.html">SIREVI</a></li>
			<li><a href="topla.html">TOPLA PREDJELA</a></li>
			<li><a href="rostilj.html">ROŠTILJ</a></li>
			<li><a href="pečenje.html">PEČENJE</a></li>
			<li><a href="glavnaj.html">GLAVNA JELA</a></li>
			<li><a href="ribe.html">RIBE</a></li>
			<li><a href="dorucak.html">DORUČAK</a></li>
			<li><a href="dezert.html">DESERT</a></li>
		</ul>
	</li>
	<li  id="submenu_1" onclick="drop_1();"><a href="#">PIĆE<i id="down1" class="fa fa-angle-down" aria-hidden="true"></i></a>
		<ul id="dropdown_1">
			<li><a href="žestoka.html">ŽESTOKA PIĆA</a></li>
			<li><a href="vina.html">VINA</a></li>
			<li><a href="bezpića.html">BEZALKOHOLNA PIĆA</a></li>
			<li><a href="toplin.html">TOPLI NAPICI</a></li>
			<li><a href="piva.html">PIVA</a></li>				
		</ul>
	</li>
	<li><a href="#">O NAMA</a></li>
	<li><a href="#">GALERIJA</a></li>
	</ul>
</nav>
</div>


/* css menu
.menu{
	position:fixed;
	top:0;
	right:-70%;
	width:70%;
	height:100vh;
	background:rgba(0,0,0,0.9);
	box-shadow:0 0 4px 0px black;	
	color:#fff;
	text-align:center;
	transition:0.3s ease-in-out;
	display:flex;
	justify-content:center;
	align-items:center;
	opacity:0;
	transition:0.5s ease;
	z-index:999;
	
}
#close,#open{
	position:absolute;
	top:0;
	right:0;
	text-align:right;
	padding:30px;
	font-size:23px;
	color:#fff;
	z-index:999;
	cursor:pointer;
	
}

.menu #close:hover{
	transition:0.3s ease-in-out;
	transform:scale(1.1);
}
.menu nav{
	position:relative;
	top:15px;
	
}
.menu nav ul li{
		list-style-type:none;
		padding:8px;
}

.menu nav ul li a{
	color:#F0F4FF;
	text-decoration:none;
	font-weight:600;
	font-size:21px;
	font-family:Montserra,sans-serif;
}
.menu nav ul li a:hover{
	color:#1D2D5D;
	transition:all 0.3s ease;
}
.menu nav ul li a #down,#down1{
	margin-left:5px;
	transform:rotate(0deg);
	transition:.5s ease;
}
.menu nav ul li ul{
		display:none;
}
.menu nav ul li ul li a{
color:#8FA7F0;}
*/


