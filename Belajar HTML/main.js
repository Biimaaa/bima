function validateForm() {
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (fullName === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Tambahan validasi email menggunakan regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Jika formulir valid, Anda bisa melakukan pengiriman formulir ke server atau tindakan lainnya
    // document.getElementById('contactForm').submit(); // Uncomment this line to enable form submission

    return true;
}