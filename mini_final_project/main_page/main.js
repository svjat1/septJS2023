async function get() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

    let content = document.getElementById('content');
    for (const user of users) {
        let div = document.createElement('div');
        div.classList.add('userDiv');
        div.innerHTML = ` ID : ${user.id}) - Name: ${user.name} --`

        let button = document.createElement('button');
        button.classList.add('butGrid')
        button.innerText = 'Pres for Details'
        button.onclick = () => {
            location.href = `../second_page/user-details.html?userId=${user.id}`
        }

        div.appendChild(button)
        content.appendChild(div)
    }
}

void get()