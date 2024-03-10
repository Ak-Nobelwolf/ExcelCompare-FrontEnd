document
  .getElementById("compareBtn")
  .addEventListener("click", function (event) {
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

// Function to hide loader and display alert message
function hideLoaderAndDisplayMessage() {
  // Hide loader
  document.getElementById("loader").style.display = "none";
  // Display alert message
  alert("Comparison completed. Check the result.");
  // Reload the page
  location.reload();
}
