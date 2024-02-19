document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const emailValue = document.querySelector('input[name="email"]').value.trim();
    const passwordValue = document.querySelector('input[name="password"]').value.trim();
  
    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
    } else {
      const formData = {
        email: emailValue,
        password: passwordValue
      };
  
      console.log(formData);
      event.target.reset(); 
    }
  });
