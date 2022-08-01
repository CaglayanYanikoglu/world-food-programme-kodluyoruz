// const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
// console.log(btn);

/* btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
}) */

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  // get name field
  const formData = new FormData(form);
  try {
    const res = axios.post('/user', formData);
    console.log(res);
  } catch (error) {
    throw error;
  }
})
