(function(){
	var dontBody = document.body,
		firstChildOfBody = dontBody.firstChild,
		// divTopTarget = document.createElement("div"),
		// divBottomTarget = document.createElement("div"),
		aTopD = document.createElement("a"),
		aBottomD = document.createElement("a");
	var bottomPos = document.body.offsetHeight;
	//target指定id
	// divTopTarget.id="dontTop";
	// divBottomTarget.id="dontBottom";
	//index target a
	aTopD.id = "backTopDont";
	aBottomD.id = "backBottomDont";
	// aTopD.href = "#dontTop";
	// aBottomD.href = "#dontBottom";

	// dontBody.insertBefore(divTopTarget,firstChildOfBody);
	dontBody.appendChild(aTopD);
	dontBody.appendChild(aBottomD);

	aTopD.addEventListener("click",function(){
		window.scrollTo(0, 0);
	});
	// if(bottomPos<10000){//改用window.scrollTo(x, y)来实现滚动
	// }
		bottomPos = 1000000;
	aBottomD.addEventListener("click", function(){
		console.log("debug:"+bottomPos);
		window.scrollTo(0, bottomPos);
	});
	// dontBody.appendChild(divBottomTarget);
	// dontBody.style.position = "relative";
})();