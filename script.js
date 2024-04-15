function submitForm() {
    event.preventDefault();

    // Get form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const course = document.getElementById('course').value;
    const batch = document.getElementById('batch').value;
    const job = document.getElementById('job').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const golden = document.getElementById('golden').value;
    const silver = document.getElementById('silver').value;
    const amount = document.getElementById('amount').value;

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://kyfj1lywl8.execute-api.ap-south-1.amazonaws.com/text/fund', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful!');
                document.getElementById('fname').value = '';
                document.getElementById('lname').value = '';
                document.getElementById('course').value = '';
                document.getElementById('batch').value = '';
                document.getElementById('job').value = '';
                document.getElementById('company').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('golden').value = '';
                document.getElementById('silver').value = '';
                document.getElementById('amount').value = '';
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        fname : fname,
        lname : lname,
        course : course,
        batch :  batch,
        job : job,
        company : company,
        email : email,
        phone : phone,
        golden : golden,
        silver : silver,
        amount : amount
    }));
}
function renderResponse(data) {
    data = JSON.parse(data);
    data = data.data;

    let html = '<table border="1">';
    html += '<tr>';
    for (let key in data[0]) {
        html += '<th>' + key + '</th>';
    }
    html += '</tr>';
    data.forEach(function(item) {
        html += '<tr>';
        for (let key in item) {
            html += '<td>' + item[key] + '</td>';
        }
        html += '</tr>';
    });
    html += '</table>';
    return html;
}
document.getElementById('fundraising-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Reset the form
    this.reset();
  });
  
function onPageLoad() {
    console.log("Page loaded!");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dr34z341ee.execute-api.ap-south-1.amazonaws.com/deep/deep', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({}));

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('tableContainer').innerHTML = renderResponse(xhr.response);
            } else {
                alert('Enter Valid Inputs: ' + xhr.responseText);
            }
        }
    };
}

// Register onPageLoad function to be called when the page loads
window.onload = onPageLoad;
