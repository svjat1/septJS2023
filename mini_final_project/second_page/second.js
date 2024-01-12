const userId = new URL(location.href).searchParams.get("userId");
let getId = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await res.json();
    let postContent = document.getElementById('postContent');

    recurs(user, postContent)
}
void getId()

let button = document.getElementById('buttonBlock');
button.onclick = async () => {
    let link = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json());

    let postTitle = document.getElementById('postTittle');
    link.forEach(post =>{
        let blockForPost = document.createElement('div');
        blockForPost.innerHTML = post.title;

        let buttonForPost = document.createElement('button');
        buttonForPost.innerHTML = 'Details about post'
        buttonForPost.onclick = () =>{
            location.href = `../third_page/post-details.html?postId=${post.id}`
        }

        blockForPost.append(buttonForPost);
        postTitle.append(blockForPost);
    })
}