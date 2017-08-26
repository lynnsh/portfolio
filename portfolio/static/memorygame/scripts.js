var g = {};

onload = init;

function init() {
	g.outer = ["/static/memorygame/outer1.jpg", "/static/memorygame/images/outer2.jpg", "/static/memorygame/images/outer3.jpg", 
				"/static/memorygame/images/outer4.jpg",
				"/static/memorygame/images/outer5.jpg", "/static/memorygame/images/outer6.jpg", "/static/memorygame/images/outer7.jpg", 
				"/static/memorygame/images/outer8.jpg",
				"/static/memorygame/images/outer9.jpg", "/static/memorygame/images/outer10.jpg", "/static/memorygame/images/outer11.jpg", 
				"/static/memorygame/images/outer12.jpg",
				"/static/memorygame/images/outer13.jpg", "/static/memorygame/images/outer14.jpg", "/static/memorygame/images/outer15.jpg", 
				"/static/memorygame/images/outer16.jpg"];
				
	g.inner = ["/static/memorygame/images/inner1.jpg", "/static/memorygame/images/inner2.jpg", "/static/memorygame/images/inner3.jpg", 
				"/static/memorygame/images/inner4.jpg",
				"/static/memorygame/images/inner5.jpg", "/static/memorygame/images/inner6.jpg", "/static/memorygame/images/inner7.jpg", 
				"/static/memorygame/images/inner8.jpg",
				"/static/memorygame/images/inner1.jpg", "/static/memorygame/images/inner2.jpg", "/static/memorygame/images/inner3.jpg", 
				"/static/memorygame/images/inner4.jpg",
				"/static/memorygame/images/inner5.jpg", "/static/memorygame/images/inner6.jpg", "/static/memorygame/images/inner7.jpg", 
				"/static/memorygame/images/inner8.jpg"];
				
	g.background = ["/static/memorygame/images/back1.jpg", "/static/memorygame/images/back2.jpg", "/static/memorygame/images/back3.jpg", 
					"/static/memorygame/images/back4.jpg", "/static/memorygame/images/back5.jpg", "/static/memorygame/images/back6.jpg"];
					
	g.back = document.getElementById("background");
	g.innerSrc = document.getElementsByClassName("innerimg");
	g.backCtr = -1;
	cache();
	g.btnPlay = document.getElementById("btnPlay");
	g.btnEnd = document.getElementById("btnEnd");
	g.gameWrap = document.getElementsByTagName("body")[0];
	addEvent(g.btnPlay,"click", setup);
	addEvent(g.btnEnd,"click", end);
	setup();
}

//Sets up the new game by reinitializing the important components.
function setup() {
	g.ctrOpen = 0;
	//array storing clicked on images (the ones that match are saved until the end of the game
	g.used = [];
	//variables storing indexes of clicked images
	g.val1 = -1;
	g.val2 = -1;
	
	//background image change
	g.backCtr++;
	if(g.backCtr > g.background.length-1)
		g.backCtr = 0;
	g.back.src = g.background[g.backCtr];
	
	//makes outer layer images visible
	var array = document.getElementsByClassName("outerimg");
	for(var i = 0; i < array.length; i++) {
		array[i].style.visibility="visible";
	}
	
	//makes inner images hidden
	for(var i = 0; i < g.innerSrc.length; i++) {
		g.innerSrc[i].style.visibility="hidden";
	}
	shufflePictures();
	enableEvents();
}

//Finishes the game by hiding outer level images and showing the background.
function end() {
	var array = document.getElementsByClassName("outerimg");
	for(var i = 0; i < array.length; i++) {
		array[i].style.visibility="hidden";
	}
	array = document.getElementsByClassName("innerimg");
	for(var i = 0; i < array.length; i++) {
		array[i].style.visibility="hidden";
	}
	disableEvents();
}

//Caches the images.
function cache() {
	var image = new Image();
	var images = g.outer.concat(g.inner).concat(g.background);
	for (var i=0; i<images.length; i++)
		image.src = images[i];
}

//Handles user events (that is click or keypress events)
function userChoose(e) {
	var evt = e || window.event; //reconcile event object between w3c standard and older IE browsers
	var target = evt.target || evt.srcElement; //reconcile triggering object between w3c standard and older
	if(evt.type == "click") {
		var ev = evt.buttons || evt.which || evt. button;
		if(ev === 1)
			changeLayer(target.id.substring(5));
	}
	else {
		var key = evt.which || evt.keyCode;
		openInner(key);
	}
}

//Changes from the outer-layer image (a-p) to the inner-level image (memory card).
function changeLayer(index) {
	if(!inList(index) && (g.val1 == -1 || g.val2 == -1)) {
		g.used[g.used.length] = index;
		g.imageOuter = document.getElementById("outer"+index);
		g.imageInner = document.getElementById("inner"+index);
		g.imageOuter.style.visibility="hidden";
		g.imageInner.style.visibility="visible";
		
		if(g.ctrOpen == 0) {
			g.ctrOpen++;
			g.val1 = index;
		}
		else {
			g.val2 = index;
			g.ctrOpen = 0;
			var func = changeBack;
			if (comparePics(g.val1, g.val2))
				func = removeLayers;
			setTimeout(func, 300, g.val1, g.val2);
			g.val1 = -1;
			g.val2 = -1;
		}
	}
}

//Verifies whether the two objects reference the same image.
function comparePics(i1, i2) {
	if(g.innerSrc[i1-1].src == g.innerSrc[i2-1].src)
		return true;
	return false;
}

//Removes both the inner and outer layer images with the indicated indexes.
function removeLayers(i1, i2) {
	removeEvent(g.outer[i1-1], "click", userChoose);
	removeEvent(g.outer[i2-1], "click", userChoose);
	g.imageInner1 = document.getElementById("inner"+i1);
	g.imageInner2 = document.getElementById("inner"+i2);
	g.imageInner1.style.visibility="hidden";
	g.imageInner2.style.visibility="hidden";
}

//Sets outer-layer images' visibility to true and hides the inner-layer images.
function changeBack(i1, i2) {
	g.imageOuter = document.getElementById("outer"+i1);
	g.imageInner = document.getElementById("inner"+i1);
	g.imageOuter.style.visibility="visible";
	g.imageInner.style.visibility="hidden";
	
	g.imageOuter = document.getElementById("outer"+i2);
	g.imageInner = document.getElementById("inner"+i2);
	g.imageOuter.style.visibility="visible";
	g.imageInner.style.visibility="hidden";
	
	g.used.splice(g.used.length-2, 2);
}

//Opens the inner image if the keyboard character is in the range a-p.
function openInner(key) {
	if(key >= 97 && key <= 112)
		changeLayer(key-96);
}

//Verifies whether the given value is in the g.used list.
function inList(value) {
	for(var i = 0; i < g.used.length; i++) {
		if(value == g.used[i])
			return true;
	}
	return false;
}

//Shuffles inner-layer images.
function shufflePictures() {
	var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	for(var i = 0; i < 15; i++) {
		var random;
		do {
			random = Math.floor(Math.random()*15);
		} while(nums[random] == null)
		g.innerSrc[i].src = g.inner[random];
		nums[random] = null;
	}
}

//Disables all events.
function disableEvents() {
	var array = document.getElementsByClassName("outerimg");
	removeEvent(g.gameWrap,"keypress", userChoose);
	for(var i = 0; i < array.length; i++) {
		removeEvent(array[i], "click", userChoose);
	}
}

//Enables all events.
function enableEvents() {
	var array = document.getElementsByClassName("outerimg");
	addEvent(g.gameWrap,"keypress", userChoose);
	for(var i = 0; i < array.length; i++) {
		if(!inList(i))
			addEvent(array[i], "click", userChoose);
	}

	console.log("done");
}

//Adds the event.
function addEvent(obj,type,fn){
	if(obj.addEventListener)
		obj.addEventListener(type,fn,false);
	else if(obj.attachEvent)
			obj.attachEvent("on"+type,fn);
}

//Remove event listeners from objects using the appropriate listeners for the browser in use
function removeEvent(obj, type, fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type, fn, false);
	}
	else if(obj.detachEvent){
		obj.detachEvent("on"+type, fn);
	}
}

