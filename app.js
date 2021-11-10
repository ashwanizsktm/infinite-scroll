/*jshint esversion: 8 */
const url = '';
let limit = 5;
let pageCount = 1;
let postCount = 1;


const container = document.querySelector('.container');


const getPost = async() => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
   const data = await response.json();
  data.map((item, index )=> {
      const htmlData = `<section class="posts">
      <p class="post-id">${postCount++}</p>
      <h2 class="post-title">${item.title}</h2>
      <p class="post-info">${item.body}</p>
    </section>`;
    container.insertAdjacentHTML('beforeend', htmlData);
  });
};

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 300);
};

window.addEventListener('scroll', ()=> {
  const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
  if(scrollTop + clientHeight >= scrollHeight) {
    console.log('at bottom');
    showData();
  }
});

getPost();

const myBtn = document.querySelector('.styled-btn');
myBtn.addEventListener('click', function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});