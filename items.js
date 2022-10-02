const posts = []; 

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
];

let imageIndex = 0; 

for (let i = 0; i < 80; i++) {
    let item = {
        id: i,
        title: 'Post ' + i,
        image: images[imageIndex],
    }
    posts.push(item); 
    imageIndex++;
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    }
}

console.log(posts);