document.getElementById('booking-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        vehicle: document.getElementById('vehicle').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    const response = await fetch('http://localhost:3000/book-swap', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    } else {
        alert('There was a problem with your booking. Please try again.');
    }
});
