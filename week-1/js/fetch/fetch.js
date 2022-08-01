const writeToScreen = (data = []) => { // if data is undefined or null, it will be set to an empty array
  const postContainer = document.querySelector('.posts');

  let elements = '';
  data.forEach(post => {
    /* const postElement = document.createElement('div');
    postElement.classList.add('post');
    const postTitleElement = document.createElement('h3');
    const postBodyElement = document.createElement('p');
    postTitleElement.innerText = post.title;
    postBodyElement.innerText = post.body;
    postElement.appendChild(postTitleElement);
    postElement.appendChild(postBodyElement);
    postContainer.appendChild(postElement); */
    elements += `<div class="post"><h3>${post.title}</h3><p>${post.body}</p></div>`;
  })
  postContainer.innerHTML = elements;
};

const getPosts = async () => {
  // https://jsonplaceholder.typicode.com/posts
  /* axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log(res);
  }); */
  try {
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(data);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res);
    if (res.status === 200) {
      writeToScreen(res.data);
    }
    // writeToScreen();
  } catch (error) {
    console.log(error);
  }
};


getPosts();
