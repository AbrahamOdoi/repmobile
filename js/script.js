$(document).on("pagecreate", function() {
	$("#splahLabel1").slideDown(3000, function() {
		$("#splahLabel2").fadeIn(3000, function() {
			window.location = 'http://sms.nalosolutions.com/nalosms/reports_mobile.php';
		});
	});
});
