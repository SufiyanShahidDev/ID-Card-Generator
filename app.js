
const form = document.getElementById('idForm');
        const idCardContainer = document.getElementById('idCardContainer');

        // Handle Image Upload
        let uploadedImage = "https://via.placeholder.com/150";
        document.getElementById('inputPhoto').addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    uploadedImage = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Form Submission
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Bootstrap Validation
            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            // Collect Data
            const name = document.getElementById('inputName').value;
            const course = document.getElementById('inputCourse').value;
            const cnic = document.getElementById('inputCNIC').value;
            const batch = document.querySelector('input[name="batch"]:checked').value;
            const days = document.getElementById('inputDays').value;
            const time = document.getElementById('inputTime').value;
            const campus = document.getElementById('inputCampus').value;

            // Map Data to ID Card
            document.getElementById('cardName').innerText = name;
            document.getElementById('cardCourse').innerText = course;
            document.getElementById('cardCNIC').innerText = cnic;
            document.getElementById('cardBatch').innerText = batch;
            document.getElementById('cardDays').innerText = days;
            document.getElementById('cardTime').innerText = time;
            document.getElementById('cardCampus').innerText = campus;
            document.getElementById('cardImage').src = uploadedImage;

            // Show ID Card & Hide Form
            form.parentElement.style.display = 'none';
            idCardContainer.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });