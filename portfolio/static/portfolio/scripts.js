var g = {};

onload = init;

function init() {
	g.counter = -1;
	g.likesimg = ["images/likes/travel.png", "images/likes/books.png", "images/likes/science.png", 
				  "images/likes/linux.png", "images/likes/lotr.png", "images/likes/matrix.png", 
				  "images/likes/music.png", "images/likes/hiking.png", "images/likes/sherlock.png", 
				  "images/likes/sw.png", "images/likes/dw.png", "images/likes/blackadder.png", 
				  "images/likes/java.png"];
	g.about = ["... to travel", "... reading", "... science", "... Linux",
				"... Lord of the Rings", "... The Matrix", "... music", "... hiking",
				"... Sherlock Holmes stories", "... Star Wars", "... Doctor Who", "... Blackadder", 
				"... Java"];
	g.background = "images/1.jpg";
	g.myimg = "images/pic.png";
	g.projects = ["images/battleship.png", "images/forum.png", "images/memory.png", 
				  "images/tetris.png", "images/tictactoe.png", "images/uni.png"];
	cache();
	g.likes = document.getElementById("img-like");
	g.likesp = document.getElementById("p-like");
	setInterval(slideshow, 3000);
	
	g.nameAdd = "Aline Shulzhenko";
	g.jobAdd = "software developer";
	g.name1 = document.getElementById("name");
	g.job1 = document.getElementById("job");
	g.index = 0;
	loop();
}

//Caches the images.
function cache() {
	var image = new Image();
	var images = g.likesimg.concat(g.background).concat(g.myimg).concat(g.projects);
	for (var i=0; i<images.length; i++)
		image.src = images[i];
}

//Loop for index page to display text dynamically.
function loop(){
	setTimeout(function () {
		if(g.nameAdd.charAt(g.index) != "")
			g.name1.innerHTML += g.nameAdd.charAt(g.index);
		g.job1.innerHTML += g.jobAdd.charAt(g.index);
		g.index++;
		if (g.index < g.jobAdd.length)
			loop();
   }, 200);
}

//Create a popup window for the given link.
function popup(url){
	window.open(url,'name',
		'height=500, width=1300,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=0,top=0');
    return false;
}

//Show the slideshow in about page.
function slideshow() {
	g.counter++;
	if(g.counter >= g.likesimg.length) 
		g.counter = 0;	
	g.likes.src = g.likesimg[g.counter];
	g.likesp.innerHTML = g.about[g.counter];
	
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

