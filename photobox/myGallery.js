$( document ).ready(function() {
    
	
	var gallery = $("#gallery");
	var loadedIndex = 1;
	
	for(var i=1;i<=19;i++){
		
		img = document.createElement('img');
		
		// lazy show the photos one by one
		img.onload = function(){
			img.onload = null;
			var link = document.createElement('a'),
			li = document.createElement('li');
			link.href = "images/gallery/"+i+".jpg";

			link.appendChild(this);
			
			li.appendChild(link);
			gallery[0].appendChild(li);
		
			setTimeout( function(){ 
				$(li).addClass('loaded');
			}, 25*loadedIndex++);
		};
		
		img.src = "images/gallery/thumb/t"+i+".jpg";
		/*img.title = "Title1";*/
		
	}
	
	$('#gallery').photobox('a');
	
	$('#gallery').photobox('a:first', { thumbs:false, time:0 }, imageLoaded);
	function imageLoaded(){
		console.log('image has been loaded...');
	}
	
	/*
	<li class="loaded"><a href="img/gallery/page/8.jpg"><img src="img/gallery/page/thumb/8.jpg" alt="photo1 title"></a></li>
	<li class="loaded"><a href="img/gallery/page/9.jpg"><img src="img/gallery/page/thumb/9.jpg" alt="photo2 title"></a></li>
	<li class="loaded"><a href="img/gallery/page/10.jpg"><img src="img/gallery/page/thumb/10.jpg" alt="photo3 title"></a></li>
    */
});