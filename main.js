var canvas= new fabric.Canvas("myCanvas");
block_image_width= 30
block_image_height= 30
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=  Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:10,
            left:10,
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keypressed= e.keyCode
if (keypressed=='82')
{
    new_image('rr.jpg');
    console.log("r");
}

if (keypressed=='71')
{
    new_image("gr.png");
    console.log("g");
}

if (keypressed='89')
{
    new_image("yr.png");
    console.log("y");
}

if (keypressed=='80')
{
    new_image("pr.png");
    console.log("p");
}

if (keypressed=='66')
{
    new_image("br.png");
    console.log("b");
}
}