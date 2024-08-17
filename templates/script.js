document.getElementById("compareBtn").addEventListener("click", function(event) {
	var sourceFile = document.getElementById("source").value;
	var targetFile = document.getElementById("target").value;
	var configFile = document.getElementById("config").value;

	//Validations for checking if the files are uploaded before submitting to backend
	if (!sourceFile && !targetFile && !configFile) {
		alert("Please upload all three files before comparing.");
		event.preventDefault();
		return;
	} else if (!sourceFile && !configFile) {
		alert("Please upload both Source and Property files before comparing.");
		event.preventDefault();
		return;
	} else if (!targetFile && !configFile) {
		alert("Please upload both Target and Property files before comparing.");
		event.preventDefault();
		return;
	} else if (!sourceFile && !targetFile) {
		alert("Please upload both Source and Target files before comparing.");
		event.preventDefault();
		return;
	} else if (!sourceFile || !configFile) {
		if (!sourceFile) {
			alert("Please upload Source File before comparing.");
		} else {
			alert("Please upload Property File before comparing.");
		}
		event.preventDefault();
		return;
	} else if (!targetFile || !configFile) {
		if (!targetFile) {
			alert("Please upload Target File before comparing.");
		} else {
			alert("Please upload Property File before comparing.");
		}
		event.preventDefault();
		return;
	} else if (!sourceFile || !targetFile) {
		if (!sourceFile) {
			alert("Please upload Source File before comparing.");
		} else {
			alert("Please upload Target File before comparing.");
		}
		event.preventDefault();
		return;
	}

	// File Type Validation for Source File
	if (!(sourceFile.endsWith(".xlsx") || sourceFile.endsWith(".xls"))) {
		alert(
			"Invalid file type for the Source File. Please upload an Excel file."
		);
		event.preventDefault();
		return;
	}

	// File Type Validation for Target File
	if (!(targetFile.endsWith(".xlsx") || targetFile.endsWith(".xls"))) {
		alert(
			"Invalid file type for the Target File. Please upload an Excel file."
		);
		event.preventDefault();
		return;
	}

	// File Type Validation for Property File
	if (!configFile.endsWith(".properties")) {
		alert(
			"Invalid file type for the Property File. Please upload a properties file."
		);
		event.preventDefault();
		return;
	}
});

function resetFiles() {
	// Reset file inputs by setting their value to an empty string
	document.getElementById("source").value = "";
	document.getElementById("target").value = "";
	document.getElementById("config").value = "";
}

/*$(document).ready(function(){
	console.log("Page is ready..!")

	$("#comparisonForm").on('submit', function(event){
		event.preventDefault();

		//var f = $(this).serialize();
		let f = new FormData(this);
		console.log(f);

		$(".loader").show();
		$(".form").hide();

		$.ajax({
			url : "Compare",
			data: f,
			type:'POST',
			success : function(data, textStatus, jqXHR){
				console.log(data);
				console.log("Success");
				$(".loader").hide();
				$(".form").show();

				$("#msg").html("Successfully Registered!");
				$("#msg").addClass('green-text');

				if (data.trim() === "Success") {
					$("#msg").html("Successfully Registered!");
					$("#msg").addClass('green-text');
				} else {
					$("#msg").html("Something went Wrong!");
					$("#msg").addClass('red-text');
				}
			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(data);
				console.log("Error");
				$(".loader").hide();
				$(".form").show();
				$("#msg").html("Something went Wrong!");
			},
			processData : false,
			contentType : false
		})
	})
})
*/
// Function to hide loader and display alert message
/*function hideLoaderAndDisplayMessage() {
	// Hide loader
	document.getElementById("loader").style.display = "none";
	// Display alert message
	alert("Comparison completed. Check the result.");
	// Reload the page
	location.reload();
}*/


/*var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var contentDisposition = xhr.getResponseHeader('Content-Disposition');
            if (contentDisposition && contentDisposition.includes('attachment')) {
                // File received in the response
                // Display success message on the UI
                var successMessage = document.createElement('div');
                successMessage.textContent = 'Comparison completed successfully!';
                document.body.appendChild(successMessage);
            } else {
                // No file received in the response
                // Display an error message on the UI
                alert('Error: No result file received from the server.');
            }
        } else {
            // Error response from the servlet (status code other than 200)
            // Display an error message on the UI
            alert('Error: Comparison failed. Please try again later.');
        }
    }
};

// Open a GET request to your servlet URL
xhr.open('GET', '/Compare', true);

// Send the request
xhr.send();*/



