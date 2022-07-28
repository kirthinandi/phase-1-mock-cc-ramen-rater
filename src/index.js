// write your code here
//Walk-through code

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => {
    const menu = document.querySelector('#ramen-menu');
    data.forEach(data => {
        const image = document.createElement('img');
        image.src = data.image;
        image.alt = data.name; 
        menu.append(image);
        image.addEventListener('click', (e) => {
            const detailImage = document.querySelector('.detail-image');
            const detailName = document.querySelector('.name');
            const detailRestaurant = document.querySelector('.restaurant');
            const detailRating = document.querySelector('#rating-display');
            const detailComment = document.querySelector('#comment-display');
            detailImage.src = data.image;
            detailImage.alt = data.name; 
            detailName.innerText = data.name;
            detailRestaurant.innerText = data.restaurant;
            detailRating.innerText = data.rating;
            detailComment.innerText = data.comment;
        })
    })
});

const form = document.querySelector('#new-ramen');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ramen = {
        name: document.querySelector('#new-name').value,
        image: document.querySelector('#new-image').value,
        restaurant: document.querySelector('#new-restaurant').value,
        rating: document.querySelector('#new-rating').value,
        comment: document.querySelector('#new-comment').value,
    }
    const menu = document.querySelector('#ramen-menu');
    const image = document.createElement('img');
    image.src = ramen.image;
    image.alt = ramen.name; 
    menu.append(image);
    image.addEventListener('click', (e) => {
            const detailImage = document.querySelector('.detail-image');
            const detailName = document.querySelector('.name');
            const detailRestaurant = document.querySelector('.restaurant');
            const detailRating = document.querySelector('#rating-display');
            const detailComment = document.querySelector('#comment-display');
            detailImage.src = ramen.image;
            detailImage.alt = ramen.name; 
            detailName.innerText = ramen.name;
            detailRestaurant.innerText = ramen.restaurant;
            detailRating.innerText = ramen.rating;
            detailComment.innerText = ramen.comment;
        })
})
