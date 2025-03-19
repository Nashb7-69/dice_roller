function rolldice(){
const numbofdice =document.getElementById("numbofdice").value;
const diceresult =document.getElementById("diceresult");
const diceimages =document.getElementById("diceimages");
const values = [];
const imgaies = [];



for(let i=0; i<numbofdice; i++){

const value=Math.floor(Math.random()*6)+1
values.push(value);
console.log(values);
imgaies.push(`<img src="dice/${value}.png">`);

}
diceresult.textContent=`dice: ${values.join(', ')}`;
diceimages.innerHTML=imgaies.join('');
}
