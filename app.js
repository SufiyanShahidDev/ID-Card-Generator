
 // 1. Create variables to hold our elements
    var studentForm = document.getElementById('idForm');
    var formCard = document.getElementById('formContainer');
    var displayArea = document.getElementById('idCardContainer');
    var photoInput = document.getElementById('inputPhoto');
    var studentPhoto = document.getElementById('cardImage');

    // 2. Handle the Image upload separately
    // When the user picks a file, we want to show it on the card
    photoInput.onchange = function() {
        var file = photoInput.files[0]; // Get the chosen file
        var reader = new FileReader();  // A tool to read the file

        reader.onload = function(e) {
            // When reading is done, update the card image
            studentPhoto.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file); // Start reading the file
        }
    };

    // 3. Handle Form Submission
    studentForm.onsubmit = function(event) {
        // Prevent the page from refreshing
        event.preventDefault();

        // 4. Check for Validation (Standard Bootstrap Check)
        if (studentForm.checkValidity() === false) {
            studentForm.classList.add('was-validated');
            return; // Stop here if form is not filled correctly
        }

        // 5. Get values from the Form Inputs
        var nameInput = document.getElementById('inputName').value;
        var courseInput = document.getElementById('inputCourse').value;
        var cnicInput = document.getElementById('inputCNIC').value;
        var daysInput = document.getElementById('inputDays').value;
        var timeInput = document.getElementById('inputTime').value;
        var campusInput = document.getElementById('inputCampus').value;
        
        // For radio buttons, we find the one that is "checked"
        var batchInput = "";
        if (document.getElementById('batch19').checked) {
            batchInput = "19";
        } else if (document.getElementById('batch20').checked) {
            batchInput = "20";
        }

        // 6. Put the values into the ID Card spans/divs
        document.getElementById('cardName').innerHTML = nameInput;
        document.getElementById('cardCourse').innerHTML = courseInput;
        document.getElementById('cardCNIC').innerHTML = cnicInput;
        document.getElementById('cardBatch').innerHTML = batchInput;
        document.getElementById('cardDays').innerHTML = daysInput;
        document.getElementById('cardTime').innerHTML = timeInput;
        document.getElementById('cardCampus').innerHTML = campusInput;

        // 7. Hide the Form and Show the ID Card
        formCard.style.display = "none";
        displayArea.style.display = "block";
    };