

function  getStyle (obj,attr) {
		if(obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}
		else
		{
			return getComputedStyle(obj,false)[attr];
		}
	}
		
function  StartChange (obj,json,fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function  () {
		
		for (attr in json) {
			var myTemp = null;
			var bStop = true;

			if(attr === 'opacity')
			{
				myTemp = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}
			else
			{
				myTemp = parseInt(getStyle(obj,attr));	
			}
		
			var change_speed = (json[attr] - myTemp) / 8;
			change_speed = change_speed > 0 ? Math.ceil(change_speed) : Math.floor(change_speed);
			
			if(myTemp != json[attr])
			{
				bStop = false;
			}

			if(attr === 'opacity')
			{
				myTemp += change_speed;
				obj.style.opacity = myTemp / 100;
			}
			else
			{
				obj.style[attr] = myTemp + change_speed + 'px';
				
			}
		}
	
		if(bStop)
		{
			clearInterval(obj.timer);
		
			if(fn)
			{
				fn();
			}
		}
	},30);
}