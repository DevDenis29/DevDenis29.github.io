function verify() {

	let checkCode = document.getElementById("verify-code").value
	if (checkCode != "mate-code") {
		window.location.href = "verify_code.html";
		} else {
		window.location.href = "index.html";
	}	

}	
