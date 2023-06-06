//DOM : it provides us window object (browser tab)
//window.document(page)
//HTML things can be excessed in js using DOM.


var buttons = window.document.getElementsByTagName('button')
console.log('buttons are',buttons.length);
// alll nine buttons must be clickable
for(var i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click',printxorzero);
}
var isxorzero = false;
function printxorzero(){ 
    const currentbutton = this;
    if(currentbutton.innerText.length ==0){
    this.innerText = isxorzero?"X":"0";
    
    isxorzero =!isxorzero;
    // this holds current calling object address/refrence
    //console.log('print x or zero call',this);


}
}
//must not be blank
// 8 possibilies(samee value(row,col,diagonal))
var fillCount = 0;
function isThreeSame(one, two, three){

}
function isNotBlank(currentbutton){

}
function isGameOver(){
    //8 possiblities
    //call three same for row wise, column wise, diagnol wise
}