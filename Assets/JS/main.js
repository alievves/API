const secElem = document.querySelector("section")
let users = [
    {title: "".title, userid: "".id, text: "".body}
]
async function getposts(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await res.json()
    posts.splice(15)
    console.log(posts);
    posts.forEach(function(){
        secElem.append()
    })
}
getposts()
