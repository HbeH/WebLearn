function MyAddEvete (obj,myevents,fun) {
	if(obj.attachEvent)
	{
		obj.attachEvent('on' + myevents,fun);
		
	}
	else
	{
		obj.addEventListener(myevents,fun,false);
	}
}

function GetClass (parent,className) {
	var temp_className = [];
	
	var events = parent.getElementsByTagName('*');
	
	for (var i = 0; i < events.length; ++i) {
		if(events[i].classname == className)
		{
			temp_className.push(events[i]);
		}
	}
	
	return temp_className;
}

function Vquery (vArg) {
	var temp_arr = [];
	var obj = null;
	alert(this.temp_arr.length)
	switch (typeof vArg)
	{
		case 'function':
			MyAddEvete(window,'load',vArg);
			break;
		case 'string':
			switch(vArg.charAt(0))
			{
				case '#':
					obj = document.getElementById(vArg.substring(1));
					this.temp_arr.push(obj);
					break;
				case '.':
					this.temp_arr = getClass(document,vArg.substring(1));
					break;
				default:
					this.temp_arr = document.getElementsByTagName(vArg);
			}
			break;
	}
}

Vquery.prototype.click = function  (fn) {
	
	for (var i = 0; i < this.temp.length; ++i) {

		MyAddEvete(this.temp_arr[i],'click',fn);	
	}
}