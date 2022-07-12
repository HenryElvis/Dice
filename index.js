var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var title = document.querySelector("h1");

if (randomNumber1 < randomNumber2)
{
    title.textContent = "Player Right Win !";
}
else if (randomNumber1 > randomNumber2)
{
    title.textContent = "Player Left Win !";
}
else
{
    title.textContent = "Draw !";
}

var dice1 = document.querySelector("img.img1");
var dice2 = document.querySelector("img.img2");

dice1 = dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2 = dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");