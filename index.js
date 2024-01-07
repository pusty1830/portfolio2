function showAlert() {
    const email = document.getElementById('email').value;
    const num = document.getElementById('number').value;

    const emailredg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailredg.test(email) || num.length!==10) {
        alert('please Enter a valid Email or Phone!');
        return;
    }
    
    alert("Message sent Successfully!");


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('number').value = '';
}