let postId = new URL(location.href).searchParams.get('postId');
let getPostId = async () => {
    let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    let postInfo = await resPost.json();
    let postDetailsDiv = document.getElementById('postDetailsDiv');

    recurs(postInfo, postDetailsDiv)
}
void getPostId()

let allComments = async () => {
    let commentsInfo = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json());

    let comments = document.getElementById('comments')

    commentsInfo.forEach(comment => {
        let coment = document.createElement('div');
        coment.classList.add('coment')
        comments.append(coment)
        recurs(comment, coment)
    })
}
void allComments()
