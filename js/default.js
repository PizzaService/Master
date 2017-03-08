function addPizza(name, imgPath, price)
{
	document.getElementById("container").innerHTML += "<br /><div><p>"+name+"</p><br /><img width=\"200px\" height=\"200px\" src=\""+imgPath+"\" /><br /><p>preis: "+price+"</p><br /></div>";
}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function()
    {
		if(xhr.readyState == 4)
			if (xhr.status == 200 || xhr.status == 0) {
				if (success)
					success(JSON.parse(xhr.responseText));
			} else {
				if (error)
					error(xhr);
			}
    };
    xhr.send(null);
}

var products;
var path = document.getElementsByTagName("script")[0].src;
path = path.slice(0,-10) + "json/products.json";
loadJSON(path, function(data){products = data}, function(xhr){console.log(xhr)});

window.onload = function () { 
	document.getElementById("title").innerHTML = "hahahahahaha";
	document.getElementById("image").src = "images/salami.png";
	for(var i = 0; i < products.length; i++)
	{
		addPizza(products[i].name, products[i].image, products[i].price);
	}
	
	alert("It's loaded!");
}