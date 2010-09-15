mouseDown = false;
mouseX = 0;
mouseY = 0;

mouseStartX = 0;
mouseStartY = 0;
startFrame = [];
document.onmousedown = function(e){
	mouseDown = true;
	
	mouseStartX = e.screenX;
	mouseStartY = e.screenY;
	startFrame = Ecoute.frame();
}
document.onmouseup = function(){
	mouseDown = false;
}
document.onmousemove = function(e){
	mouseX = e.screenX;
	mouseY = e.screenY;
	
	if (mouseDown)
	{
		deltaX = mouseX - mouseStartX;
		deltaY = mouseStartY - mouseY;	// flipped coordinate system
		
		Ecoute.setFrame(startFrame[0]+deltaX, startFrame[1]+deltaY, startFrame[2], startFrame[3]);
	}
}
