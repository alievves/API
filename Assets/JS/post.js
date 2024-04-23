const secElem = document.querySelector("section")
async function cardsDetail(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${location.search}`)
    const post = await res.json()
    return post
}
async function addCardsDetail (){
    const posts = await cardsDetail();
    posts.forEach(post=>{
        secElem.innerHTML = (`
        <div class="see-more">
        <img src="./Assets/IMG/user-icon.png" alt="">
        </div>
        <div class="users">User ${post.id}</div>
        <div class="text-cap">
        <h3>${post.title}</h3>
        </div>
        <div class="texts-1">${post.body}</div>
        `)
    })
}
addCardsDetail()