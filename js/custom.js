$(document).ready(function() {
   $('.subscribeClass').click(function(){
   $('.modal-body').empty();
  	var title = "Happy Garden Subscription";
  	$('.modal-title').html(title);

  	$($('#subscribeForm').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
  
  
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});
