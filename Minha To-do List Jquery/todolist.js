$(function(){
	$("#add").on("click", function()
	{
		//event handler
		var val=$("input").val();
		if(val !== ''){
			var elem =$("<li></li>").text(val);
				$(elem).append("<button class='done'>Concluir!</button>");
				$(elem).append("<button class='rem'>Fechar</button>");
				$("#mylist").append(elem);
				$("input").val(""); //clear the input
				$(".rem").on("click", function(){
					$(this).parent().remove();
				});
				$(".done").on("click", function(){
					$(this).css("color","green");
					$(this).html("Concluído");
				});
				
		};
	});
});











$(function(){
	$("body").css("backgroundColor","#000");

	
});