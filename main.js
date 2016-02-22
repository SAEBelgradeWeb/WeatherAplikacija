
getWeather("Belgrade");



$('#grad').on('change', function(){
	var grad = $(this).val();
	getWeather(grad);

});


function getWeather(grad) {
	$.ajax({
	  method: 'GET',
	  url: 'http://api.openweathermap.org/data/2.5/weather',
	  data: {
	  	q: grad + ',rs',
	  	units: 'metric',
	  	appid: '44db6a862fba0b067b1930da0d769e98'
	  },
	  success: function(data){
	    $('h1:nth-child(2)').text(grad);
	    $('h1 span').text( Math.round(data.main.temp));
	    $('img').attr('src', 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png')
	  }
	});
}


//stranice
setTimeout(function(){
	$('#splash').slideUp();
	$('#main').slideDown();
}, 2000);

