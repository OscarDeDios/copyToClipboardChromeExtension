document.addEventListener("DOMContentLoaded", function(event) {
	var copyImgBtn = document.querySelector('.copy-image');
	copyImgBtn.addEventListener('click', function(event) {
		// Select the email link anchor text
		var imageElem = document.querySelector('.image-class');
		var range = document.createRange();
		range.selectNode(imageElem);
		window.getSelection().addRange(range);

		try {
			// Now that we've selected the anchor text, execute the copy command
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copy image command was ' + msg);
		} catch(err) {
			console.log('Oops, unable to copy');
		}

		// Remove the selections - NOTE: Should use
		// removeRange(range) when it is supported
		window.getSelection().removeAllRanges();
	});
});


