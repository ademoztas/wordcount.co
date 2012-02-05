jQuery.fn.wordCount = function(params)
		{
			var p = 
			{
				counterElement:"display_count"
			};
			
			var len = str_len;
			
			var total_words;
	
			if(params) 
			{
				jQuery.extend(p, params);
			}
	
			//for each keypress function on text areas
			this.keyup(function()
			{ 
				total_words=this.value.split(/[\s\.\?]+/).length;
				jQuery('#'+p.counterElement).html(total_words);

				$('#str_len').html($('#word_count').val().length);

			});	
		};


$(document).ready(function()
{
	
	$('#word_count').wordCount();	

	
});
