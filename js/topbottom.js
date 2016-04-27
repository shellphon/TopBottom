(function(){
	var dontBody = document.body,
		divWrapper = document.createElement("div"),
		aTopD = document.createElement("a"),
		aBottomD = document.createElement("a");
	var bottomPos = document.body.offsetHeight;
	aTopD.id = "backTopDont";
	aTopD.className = 'back-top';
	aBottomD.id = "backBottomDont";
	aBottomD.className = "back-bottom";
	
	divWrapper.id="dontWrapper";
	divWrapper.appendChild(aTopD);
	divWrapper.appendChild(aBottomD);

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

	aBottomD.addEventListener("click", function(){
		var height = document.body.clientHeight;
		window.scrollTo(0, height);
	});

})();