const secElem = document.querySelector("section")
const mainElem = document.querySelector("main")
const articleElem = document.querySelector("article")

async function getPosts(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    return posts.slice(0, 12)
}


const addPostCards = async () => {
    const posts = await getPosts();
    posts.forEach(post =>{
        mainElem.innerHTML = (`
        <div class="main-1">
        <div class="text-3">${post.title}</div>
        <div class="text-4">It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is that....</div>
        <div class="text-5">May 20th 2020<a class="text-6" href="detail.html?id=${post.id}">Read more</a></div>
        </div>
        <div class="main-2">
        <img src="./Assets/IMG/image 1.png" alt="">
        </div>
        `)
        secElem.innerHTML += (`
        <div class="img-1">
        <img src="./ASSETS/IMG/user-icon.png" width="100%" alt="">
        <div class="users">User ${post.id}</div>
        <div class="text-7">${post.title}</div>
        <div class="text-8">It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is that....</div>
        <div class="text-9">May 20th 2020<a class="text-10" href="detail.html?id=${post.id}">Read more</a></div>
        </div>
        `)
        articleElem.innerHTML = (`
        <div>
        <div class="text-11">${post.title}</div>
        <div class="text-12">It is a long established fact that a reader will be distracted by the readable 
        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution...</div>
        <div class="text-13">May 20th 2020<a class="text-14" href="detail.html?id=${post.id}">Read more</a></div>
        </div>
        <div>
        <img src="./Assets/IMG/image 7.png" alt="">
        </div>
        `)
    });
}
addPostCards()