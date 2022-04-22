function BMI()
{
	var Height = Number(document.getElementById("inputHeight").value)/100;
	var Weight = Number(document.getElementById("inputWeight").value);
	var BMI = 0;
	
	//輸入身高與體重後始計算BMI
	if (Weight > 0 && Height > 0)
	{
		var BMI = Weight/(Height*Height);
	}
	
	//定義敘述
	var Category1 = "";
	var Category2 = ""; 
	if (BMI >= 40) { Category1 = "肥胖 (第三級)"; Category2 = "Obese (Class III)"; }
	else if (BMI >= 35) { Category1 = "肥胖 (第二級)"; Category2 = "Obese (Class II)"; }
	else if (BMI >= 30) { Category1 = "肥胖 (第一級)"; Category2 = "Obese (Class I)"; }
	else if (BMI >= 25) { Category1 = "體重過重 (肥胖前期)"; Category2 = "Overweight (Pre-obese)"; }
	else if (BMI >= 18.5) { Category1 = "正常體重"; Category2 = "Normal range"; }
	else if (BMI >= 17) { Category1 = "體重過輕 (輕度消瘦)"; Category2 = "Underweight (Mild thinness)"; }
	else if (BMI >= 16) { Category1 = "體重過輕 (中度消瘦)"; Category2 = "Underweight (Moderate thinness)"; }
	else if (BMI < 16) { Category1 = "體重過輕 (嚴重消瘦)"; Category2 = "Underweight (Severe thinness)"; }
	else { Category1 = ""; Category2 = ""; }
	
	if (BMI > 0)
	{
		//顯示輸出結果區
		document.getElementById("divResult").style.display = "inline";
		document.getElementById("inputBMI").value = BMI.toFixed(2);
		document.getElementById("stringCategory1").innerHTML= Category1;
		document.getElementById("stringCategory2").innerHTML= Category2;
	}
	else
	{
		//隱藏輸出結果區
		document.getElementById("divResult").style.display = "none";
		document.getElementById("inputBMI").value = "";
		document.getElementById("stringCategory1").innerHTML= "";
		document.getElementById("stringCategory2").innerHTML= "";
	}
	
}