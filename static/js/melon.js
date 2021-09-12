// $('myObject').css('background-image', 'url(' + imageUrl + ')');

// Random Images
	(function () {
		var rotator3 = document.getElementById('banner-slider'); // change to match   image ID
		var imageDir = '/static/img/';
		// set number of seconds delay
		// list image names
		var images = ['banner2.jpg', 'banner1.jpg'];
        var newArray = new Array();
        newArray[0] = "/static/img/banner2.jpg";
        newArray[1] = "/static/img/banner1.jpg";
	
		// don't change below this line
		var num = 0;
		var changeImage = function () {
			var len = images.length;
			rotator3.src = imageDir + images[num++];
            var randomNumber = randomNumberFromRange(0, 1);
            document.getElementById("banner-slider").style.backgroundImage = "url(" + newArray[randomNumber] + ")";
			if (num == len) {
				num = 0;
			}
		};
	
		function SwImg() {
			setInterval(changeImage, 4000);
	
	
		}
	
	
		setTimeout(SwImg, 4000);
	
	
	})();

function randomNumberFromRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
