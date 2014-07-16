(function(){
	var dontBody = document.body,
		//firstChildOfBody = dontBody.firstChild,
		// divTopTarget = document.createElement("div"),
		// divBottomTarget = document.createElement("div"),
		divWrapper = document.createElement("div"),
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
	divWrapper.id="dontWrapper";
	divWrapper.appendChild(aTopD);
	divWrapper.appendChild(aBottomD);
	// dontBody.appendChild(aTopD);
	// dontBody.appendChild(aBottomD);
	dontBody.appendChild(divWrapper);

	//移动
	function moveDiv(){
			divWrapper.style.top = (event.clientY - diffY)+"px";
			divWrapper.style.left = (event.clientX - diffX)+"px";
		
	}
	var diffX = 0,
		diffY =0;
	divWrapper.addEventListener("mousedown",function(){
		if(event.target==divWrapper){
			divWrapper.style.cursor="move";
			diffX = event.clientX - divWrapper.offsetLeft;
			diffY = event.clientY - divWrapper.offsetTop;
			document.body.addEventListener("mousemove", moveDiv);
		}
	});
	divWrapper.addEventListener("mouseup", function(){
		divWrapper.style.cursor = "auto";
		document.body.removeEventListener("mousemove", moveDiv);
	});

	//跳到顶部和底部
	aTopD.addEventListener("click",function(){
		window.scrollTo(0, 0);
	});
	// if(bottomPos<10000){//改用window.scrollTo(x, y)来实现滚动
	// }
		bottomPos = 1000000;
	aBottomD.addEventListener("click", function(){
		//console.log("debug:"+bottomPos);
		window.scrollTo(0, bottomPos);
	});
	// dontBody.appendChild(divBottomTarget);
	// dontBody.style.position = "relative";
})();