function BMI()
{
	var Height = Number(document.getElementById("inputHeight").value)/100;
	var Weight = Number(document.getElementById("inputWeight").value);
	var BMI = 0;
	
	if (Weight > 0 && Height > 0)
	{
		var BMI = Weight/(Height**2);
	}
	else
	{
		document.getElementById("inputBMI").value = "";
	}

		
	if (BMI > 0)
	{
		document.getElementById("inputBMI").value = BMI.toFixed(2);
	}
}