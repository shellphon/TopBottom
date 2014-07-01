(function(){
	var dontBody = document.body,
		firstChildOfBody = dontBody.firstChild,
		divTopTarget = document.createElement("div"),
		divBottomTarget = document.createElement("div"),
		aTopD = document.createElement("a"),
		aBottomD = document.createElement("a");
	//target指定id
	divTopTarget.id="dontTop";
	divBottomTarget.id="dontBottom";
	//index target a
	aTopD.id = "backTopDont";
	aBottomD.id = "backBottomDont";
	aTopD.href = "#dontTop";
	aBottomD.href = "#dontBottom";

	dontBody.insertBefore(divTopTarget,firstChildOfBody);
	dontBody.appendChild(aTopD);
	dontBody.appendChild(aBottomD);
	dontBody.appendChild(divBottomTarget);
	dontBody.style.position = "relative";
})();