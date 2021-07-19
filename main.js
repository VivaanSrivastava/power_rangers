var canvas = new fabric.Canvas('myCanvas');

// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;
var player_x,player_y;


var block_image_object= "";

function new_img(getImage){
	fabric.Image.fromURL(getImage,function(img){
		block_image_object=img
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:player_y,
			left:player_x


		});
		canvas.add (block_image_object)
		
		});
	}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_img('rr1.png');
		console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_img('gr.png');
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellgr.pow ranger
		new_img('yr.png');
		console.log("y")

	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_img('pr.png');

	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_img('br.png')
	}
	
}
	
