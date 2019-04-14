const add = document.querySelector('.sendPost-btn');
const postinput = document.querySelector('.sendPost-btn')
add.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(postinput.value.trim()!==0){
     fetch('/profile',postinput.value,'POST',(err,res)=>{
        const sectionmain = document.createElement('div');
        sectionmain.classList.add('divpost');
        sectionmain.textContent=res;
        res.forEach(post => {
            const divallposts = document.createElement('allposts')[0];
            divallposts.classList.add('divallposts');
            const postdiv = document.createElement('divpost');
            postdiv.classList.add('postdiv');
            const firstName = document.createElement('div')
            username.classList.add('first-name');
            const posts = document.createElement('posts');
            posts.classList.add('postss');
            firstName.textContent = post.firstName;
            posts.textContent = post.post;
            postdiv.appendChild(username);
            postdiv.appendChild(posts);
            divallposts.appendChild(postdiv);
            
        });
     })   
    }
    
}) 