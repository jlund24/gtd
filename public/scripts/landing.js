$(document).ready(function() {
	$("#text-input").keyup(function() {
		var text = $('#text-input').val();
		var regex = /([^+#@~]*)(?:(\+[^+#@~]*)|(\~[^+~@#]*)|(\#[^~#+@]*)|(\@[^~#+@]*))*/;
		var result = regex.exec(text);
		$('#task-title').text(result[1]);
		result.forEach(function(match) {
			if (match == null)
			{

			}
			else
			{
				var firstChar = match.substring(0,1);
				console.log(firstChar);
				switch (firstChar)
				{
					case '+':
					$('task-due-date').text($.trim(match));
				}
			}

		});

	});


});
