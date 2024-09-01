enum direction{
    up=1,  //1
    down,   //2
    left,    //3
    right   //4
}


function doSomething(keyPressed:direction){
    console.log(keyPressed);

}

doSomething(direction.up);