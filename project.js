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




