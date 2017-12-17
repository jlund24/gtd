

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
				var firstChar = match.slice(0,1);
				var value = $.trim(match.slice(1));
				switch (firstChar)
				{
					case '+':
						$('#task-due-date').text(value);
						break;
					case '~':
						$('#task-duration').text(value);
						break;
					case '#':
						$('#task-category').text(value);
						break;
					case '@':
						$('#task-context').text(value);
						break;
					default:
						break;
				}
			}

		});

	});


});
