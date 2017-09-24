$(function(){
	time_setting = 30;
	random_setting = 100;
	input_text = "open -a \"Chrome\" ~/Desktop/web/mersair_com/404.html";
	target_setting = $("#begin");
	type(input_text, target_setting, 0, time_setting, random_setting);

	$("button").click(function(){
    // When you click, remove the button
		$(this).fadeOut('fast', function(){
      // Remove all the text, then show the pre area again
			target_setting.text("").show();
      // And start again!
			type(input_text, target_setting, 0, time_setting, random_setting);
		});
	});
});

function type(input, target, current, time, random){
  // If the current count is larger than the length of the string, then for goodness sake, stop
	if(current > input.length){
    // Write Complete
		console.log("Complete.");
    // Wait a bit, then do the complete function
		setTimeout(function(){
			finished(input, target, current, time, random);
		},3000);
		
	}
	else{
		console.log(current)
    // Increment the marker
		current += 1;
    // fill the target with a substring, from the 0th character to the current one
		target.text(input.substring(0,current));
    // Wait ...
		setTimeout(function(){
      // do the function again, with the newly incremented marker
			type(input, target, current, time, random);
      // Time it the normal time, plus a random amount of sway
		},time + Math.random()*random);
	}
}