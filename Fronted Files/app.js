// // Get the form element
// const form = document.getElementById('personForm');

// // Handle form submission
// form.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent page reload

//     // Collect form data
//     const formData = {
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//         work: document.getElementById('work').value,
//         mobile: document.getElementById('mobile').value,
//         email: document.getElementById('email').value,
//         salary: document.getElementById('salary').value,
//         username: document.getElementById('username').value,
//         password: document.getElementById('password').value
//     };

//     try {
//         const response = await fetch('http://localhost:3000/person', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Basic ' + btoa('Vishal:123')  // Basic Auth example
//             },
//             body: JSON.stringify(formData)
//         });
    
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
    
//         const data = await response.json();
//         document.getElementById('responseData').innerText = JSON.stringify(data, null, 2);
    
//     } catch (err) {
//         console.error('Error submitting data:', err);
//         document.getElementById('responseData').innerText = 'Error submitting data: ' + err.message;
//     }
// });    