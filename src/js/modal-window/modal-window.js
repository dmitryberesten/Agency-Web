document.addEventListener('DOMContentLoaded', () => {
  const contactUsButton = document.querySelectorAll('.contact-us');

  const closeBtn = document.querySelector('#close');
  const sendUsBtn = document.querySelector('#send-us');
  const nameField = document.querySelector('#name');
  const phoneNumberField = document.querySelector('#phoneNumber');
  const messageField = document.querySelector('#message');
  const modal = document.querySelector('#pop-up-section');

  contactUsButton.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      modal.scrollIntoView({ behavior: 'smooth' });
    });
  });
  // Функція для перевірки заповнення полів
  const validateForm = () => {
    // Відкриття модального вікна
    let isValid = true;
    const fields = [nameField, phoneNumberField, messageField];

    fields.forEach(field => {
      if (!field.value.trim()) {
        field.style.border = '2px solid red'; // Змінюємо рамку на червону
        isValid = false;
      } else {
        field.style.border = ''; // Відновлюємо стандартну рамку
      }
    });

    return isValid;
  };

  // Закриття модального вікна
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Відправлення форми
  sendUsBtn.addEventListener('click', e => {
    e.preventDefault(); // Запобігаємо стандартній поведінці форми
    if (validateForm()) {
      alert('Form submitted successfully!');
      modal.style.display = 'none';
    }
  });
});
