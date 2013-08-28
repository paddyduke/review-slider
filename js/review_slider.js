$(document).ready(function() {

	/* Set global variables */
	var position = $(".reviews").position(); /* Find position of review container */
	var items = $(".reviews ul li").length; /* Count how many reviews there are */
	var limit = (items - 2) * -435; /* Set the movement limit as a multiple of the number of items */
	
	$(".number").text(items);
	
	/* Next button clicked */
	$(".btn_next").click(function() {
	
		position = $(".reviews").position();
		
		/* Debugging Info */
		/* $(".left").text(Position: " + position.left + " & " + "Items: " + items  + " & " + "Limit: " + limit); */
		
		/* If the review container’s left value is still larger than the movement limit, move the container one view to the left */
		if ( position.left > limit ) {
			$(".reviews").animate({ "left": "-=950px" }, 500, "swing" );
		}
		
		else {
			/* $(".left").prepend("No dice! "); */
		}
		
	});
	
	/* Prev button clicked */
	$(".btn_prev").click(function() {
		
		position = $(".reviews").position();
		
		/* Debugging Info */
		/* $(".left").text("Position: " + position.left + " & " + "Items: " + items  + " & " + "Limit: " + limit); */
		
		/* If the review container’s left value is still smaller than 0, move the container one view to the right */
		if ( position.left < 0 ) {
			$(".reviews").animate({ "left": "+=950px" }, 500, "swing" );
			
		}
		
		else {
			/* $(".left").prepend("No dice! "); */
		}
		
	});
	
});