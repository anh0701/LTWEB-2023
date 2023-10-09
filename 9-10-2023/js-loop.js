var sum = 0
for (var i = 0; i < 9; i++) {
	sum += i
}
document.write('Tong la: ' + sum)

function howMany(selectObject){
	var numberSelected = 0;
	for(var i=0;i<selectObject.options.length; i++) 
	{
		if(selectObject.options[i].selected == true)
			numberSelected ++;
	}
	return numberSelected;
}