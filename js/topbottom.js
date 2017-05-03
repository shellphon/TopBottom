(function(){
	var dontBody = document.body,
		divWrapper = document.createElement("div"),
		aTopD = document.createElement("a"),
		aBottomD = document.createElement("a");
	var bottomPos = document.body.offsetHeight;
	aTopD.id = "backTopDont";
	aTopD.className = 'back-top-dont';
	aBottomD.id = "backBottomDont";
	aBottomD.className = "back-bottom-dont";
	
	divWrapper.id="dontWrapper";
	divWrapper.appendChild(aTopD);
	divWrapper.appendChild(aBottomD);

	dontBody.appendChild(divWrapper);
	moving = false;

	//移动
	function moveDiv(event){
		if(!moving) return;
		divWrapper.style.top = (event.clientY - diffY)+"px";
		divWrapper.style.left = (event.clientX - diffX)+"px";
	}

	var diffX = 0,
		diffY = 0;
	divWrapper.addEventListener("mousedown",function(){
		moving = true;
		divWrapper.style.cursor="move";
		diffX = event.clientX - divWrapper.offsetLeft;
		diffY = event.clientY - divWrapper.offsetTop;
	});
	document.addEventListener("mousemove", moveDiv);
	document.addEventListener("mouseup", function(){
		divWrapper.style.cursor = "auto";
		moving = false;
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