const getPosts = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        });
}

const container = document.getElementById('anamnez-list');
const template_posts = document.getElementById("posts");

const loadPosts = async () => {

    container.innerHTML = '<img src="https://i.yapx.cc/Gjfei.gif" alt="mask" class="preloader">';

    try {
        let left_boundary = Math.ceil(Math.random() * 100);
        console.log(left_boundary)
        const data = (await getPosts()).slice(left_boundary, left_boundary + 10);
        container.innerHTML = '';
        for (const item of data) {
            const post = template_posts.content.cloneNode(true);
            let p_user = post.querySelector(".post-user");
            p_user.textContent = item.id;
            let p_title = post.querySelector(".post-title");
            p_title.textContent = item.title;
            let p_body = post.querySelector(".post-body");
            p_body.textContent = item.body;
            container.appendChild(post);
        }
    } catch (e) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let error_message = document.createElement('span');
        let nodeText = document.createTextNode("Что-то пошло не так :(");
        error_message.appendChild(nodeText);
        container.appendChild(error_message);
    }
}

loadPosts();