const userId = new URL(location.href).searchParams.get("userId");
let getId = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await res.json();
    let postContent = document.getElementById('postContent');

    recurs(user, postContent)
}
void getId()

let button = document.getElementById('buttonBlock');
let flag = false;
button.onclick = async () => {
    if (!flag) {
        let link = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json());

        let postTitle = document.getElementById('postTittle');
        postTitle.innerText = '';

        link.forEach(post => {
            let blockForPost = document.createElement('div');
            blockForPost.classList.add('blockForPost')
            blockForPost.innerHTML = `Title : ${post.title}`;

            let buttonForPost = document.createElement('button');
            buttonForPost.classList.add('buttForPost')
            buttonForPost.innerHTML = 'Details about post'
            buttonForPost.onclick = () => {
                location.href = `../third_page/post-details.html?postId=${post.id}`
            }

            blockForPost.append(buttonForPost);
            postTitle.append(blockForPost);
        })
        flag = true;
    } else {
        let postTitle = document.getElementById('postTittle');
        postTitle.innerText = '';
        flag = false;
    }
}