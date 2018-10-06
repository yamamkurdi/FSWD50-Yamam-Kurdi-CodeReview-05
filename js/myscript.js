$(document).ready(function(){
	for(var i= 0 ; i < Movies.length;i++) {
		$("#row").append("<div class='col-lg-6 col-xs-12 text-center'> <div id='all'><img id='left' src='"+Movies[i].img+"'><div id='right'><h3>"+Movies[i].name+"</h3><h4 id='disc'>"+Movies[i].description+"</h4><div id='amout'><button class='btn'>Like</button><span class='spn'>"+Movies[i].likes+"</span></div></div></div></div>")
	}
	for(let n= 0 ; n < Movies.length;n++) {
	$(".btn:eq("+n+")").click(function(){
		$(".spn:eq("+n+")").text(Movies[n].likes +1);

	})
}
});