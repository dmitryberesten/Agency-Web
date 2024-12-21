document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("close");
    const sendUsBtn = document.getElementById("send-us");
    const nameField = document.getElementById("name");
    const phoneNumberField = document.getElementById("phoneNumber");
    const messageField = document.getElementById("message");
    const modal = document.querySelector(".pop-up");
    
    // Функція для перевірки заповнення полів
    const validateForm = () => {
      let isValid = true;
      const fields = [
        { field: nameField, name: "Name" },
        { field: phoneNumberField, name: "Phone Number" },
        { field: messageField, name: "Message" }
      ];
  
      fields.forEach(({ field, name }) => {
        if (!field.value.trim()) {
          alert(`${name} field is not filled!`);
          isValid = false;
        }
      });
  
      return isValid;
    };
  
    // Закриття модального вікна
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Відправлення форми
    sendUsBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Запобігаємо стандартній поведінці форми
      if (validateForm()) {
        alert("Form submitted successfully!");
        modal.style.display = "none";
      }
    });
  });
  



// document.addEventListener('DOMContentLoaded', () => {
//     const contactUsButton = document.getElementsByClassName('contact-us');
//     const modal = document.getElementById('pop-up-section');
//     const closeButton = document.getElementById('close');
//     const sendButton = document.getElementById('send-us');
//     const form = document.getElementById('data');
//     const errorMessage = document.getElementById('error-message');

//     // Open modal
//     contactUsButton.addEventListener('click', () => {
//         modal.classList.remove('hidden');
//     });

//     // Close modal
//     closeButton.addEventListener('click', () => {
//         modal.classList.add('hidden');
//         errorMessage.classList.add('hidden');
//         form.reset();
//     });

//     // Validate and send form
//     sendButton.addEventListener('click', () => {
//         const name = document.getElementById('name').value.trim();
//         const phoneNumber = document.getElementById('phoneNumber').value.trim();
//         const message = document.getElementById('message').value.trim();

//         if (!name || !phoneNumber || !message) {
//             errorMessage.textContent = 'Please fill out all fields before sending.';
//             errorMessage.classList.remove('hidden');
//         } else {
//             errorMessage.classList.add('hidden');
//             modal.classList.add('hidden');
//             form.reset();
//             alert('Message sent successfully!');
//         }
//     });
// });
