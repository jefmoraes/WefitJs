var content = "Cards";
var cardsParent = $(".row h3:contains(" + content + ")").closest(".row");

//mover elementos
var contentMove = cardsParent.children().last();
cardsParent.children().last().remove();
$(contentMove).insertAfter(cardsParent.children().first());

//mover elementos
contentMove = cardsParent.children().eq(-2); //pegar o terceiro
cardsParent.children().eq(-2).remove(); //removo
$(contentMove).insertAfter(cardsParent.children().last()); //e adc na ultima

var secondChild = cardsParent.children().eq(2).find("a");
secondChild.css("background-color", "green").css("border", "none");

var headerParent = $(".jumbotron");
headerParent.css("background-color", "#6c757d");
headerParent.children().css("text-align", "end").css("color", "white");
var button = headerParent.find("a");
button
  .css("background-color", "green")
  .css("border", "none")
  .css("float", "right");

var menuContainer = $(".btn-group-vertical");
menuContainer.removeClass("btn-group-vertical");
menuContainer.addClass("row").css("gap", "8px").css("margin-left", "0");

var newItem = "<li class='list-group-item'>Quarto item</li>";
$(".list-group").append(newItem);
var newItem = "<li class='list-group-item'>Quinto item</li>";
$(".list-group").append(newItem);
$(".list-group li:first-child")
  .css("background-color", "transparent")
  .css("color", "black")
  .css("border-color", "rgba(0, 0, 0, 0.125)");

$(".list-group li:nth-child(3)")
  .css("background-color", "#007bff")
  .css("color", "white");
