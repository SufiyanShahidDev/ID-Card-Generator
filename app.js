
    // Variables for elements
    var studentForm = document.getElementById('idForm');
    var formCard = document.getElementById('formContainer');
    var displayArea = document.getElementById('idCardContainer');
    var photoInput = document.getElementById('inputPhoto');
    var studentPhoto = document.getElementById('cardImage');

    var uploadedImageData = "";

    // Image Upload Logic
    photoInput.onchange = function() {
        var file = photoInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageData = e.target.result;
            // Clear photo error if user selected a file
            document.getElementById('error-photo').style.display = "none";
            photoInput.classList.remove('is-invalid-custom');
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Helper function to hide all errors before checking
    function resetErrors() {
        var errorTexts = document.getElementsByClassName('error-text');
        var inputs = document.querySelectorAll('.form-control, .form-select');
        
        for (var i = 0; i < errorTexts.length; i++) {
            errorTexts[i].style.display = "none";
        }
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].classList.remove('is-invalid-custom');
        }
    }

    // Main Form Function
    studentForm.onsubmit = function(event) {
        event.preventDefault(); 
        resetErrors(); // Clear old error states

        var hasError = false;

        // Get values
        var nameVal = document.getElementById('inputName').value;
        var courseVal = document.getElementById('inputCourse').value;
        var cnicVal = document.getElementById('inputCNIC').value;
        var daysVal = document.getElementById('inputDays').value;
        var timeVal = document.getElementById('inputTime').value;
        var campusVal = document.getElementById('inputCampus').value;

        // --- VALIDATION CHECKS ---

        // Name Validation
        if (nameVal.trim() === "" || nameVal.length < 3) {
            document.getElementById('error-name').style.display = "block";
            document.getElementById('inputName').classList.add('is-invalid-custom');
            hasError = true;
        }

        // Course Validation
        if (courseVal === "") {
            document.getElementById('error-course').style.display = "block";
            document.getElementById('inputCourse').classList.add('is-invalid-custom');
            hasError = true;
        }

        // CNIC Validation
        var cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
        if (!cnicPattern.test(cnicVal)) {
            document.getElementById('error-cnic').style.display = "block";
            document.getElementById('inputCNIC').classList.add('is-invalid-custom');
            hasError = true;
        }

        // Batch Validation
        var batchVal = "";
        if (document.getElementById('batch19').checked) {
            batchVal = "19";
        } else if (document.getElementById('batch20').checked) {
            batchVal = "20";
        } else {
            document.getElementById('error-batch').style.display = "block";
            hasError = true;
        }

        // Dropdowns
        if (daysVal === "") {
            document.getElementById('error-days').style.display = "block";
            document.getElementById('inputDays').classList.add('is-invalid-custom');
            hasError = true;
        }
        if (timeVal === "") {
            document.getElementById('error-time').style.display = "block";
            document.getElementById('inputTime').classList.add('is-invalid-custom');
            hasError = true;
        }
        if (campusVal === "") {
            document.getElementById('error-campus').style.display = "block";
            document.getElementById('inputCampus').classList.add('is-invalid-custom');
            hasError = true;
        }

        // Photo Validation
        if (uploadedImageData === "") {
            document.getElementById('error-photo').style.display = "block";
            photoInput.classList.add('is-invalid-custom');
            hasError = true;
        }

        // STOP IF ERROR
        if (hasError) return;

        // --- SUCCESS: GENERATE CARD ---
        document.getElementById('cardName').innerHTML = nameVal;
        document.getElementById('cardCourse').innerHTML = courseVal;
        document.getElementById('cardCNIC').innerHTML = cnicVal;
        document.getElementById('cardBatch').innerHTML = batchVal;
        document.getElementById('cardDays').innerHTML = daysVal;
        document.getElementById('cardTime').innerHTML = timeVal;
        document.getElementById('cardCampus').innerHTML = campusVal;
        studentPhoto.src = uploadedImageData;

        formCard.style.display = "none";
        displayArea.style.display = "block";
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };