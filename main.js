/* arrey dei posts */
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://ca.slack-edge.com/T91QPE3BP-UND27RT6W-858cb3ce8dfd-512"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


/* variabili */
let container=document.getElementById("container");
let pulsantiLike=document.getElementsByClassName(".like-button");
let likes=document.getElementsByClassName("like-button");

/* per ognuno degli elementi dell'arrey creo un post, che contiene ogni dato */
posts.forEach(element => 
    /* creo i post di ogni utente,direttamente nell'html */
    container.innerHTML+=`        
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
);   




/* ad ogni pulsante controllo il click */
likes[0].addEventListener("click",function(){
    /* se l'utente mette like ad un post accade.... */
    if (!((likes[0].classList.contains("like-button--liked")))){
        /* che il bottone diventa verde */
        likes[0].classList.add("like-button--liked")
        /* il numero di like cresce */
        let i=posts[0].likes
        i++
        /* modifico i like con il dato aggiornarto  */
        document.getElementById("like-counter-1").innerHTML=i
    }
    /* altrimenti */
    else{
        /* il colore del like è quello di defoult */
        likes[0].style.color = "#404040";
        /* infatti il numero di like è quello iniziale */
        let i=posts[0].likes
        document.getElementById("like-counter-1").innerHTML=i
    }
})
/* ad ogni pulsante controllo il click */
likes[1].addEventListener("click",function(){
    /* se l'utente mette like ad un post accade.... */
    if (!((likes[1].classList.contains("like-button--liked")))){
        /* che il bottone diventa verde */
        likes[1].classList.add("like-button--liked")
        let i=posts[1].likes
        /* il numero di like cresce */
        i++
        /* modifico i like con il dato aggiornarto  */
        document.getElementById("like-counter-2").innerHTML=i
    }
    /* altrimenti */
    else{
        /* il colore del like è quello di defoult */
        likes[1].style.color = "#404040";
        let i=posts[1].likes
        /* infatti il numero di like è quello iniziale */
        document.getElementById("like-counter-2").innerHTML=i
    }
})
/* ad ogni pulsante controllo il click */
likes[2].addEventListener("click",function(){
    /* se l'utente mette like ad un post accade che.... */
    if (!((likes[2].classList.contains("like-button--liked")))){
        /* che il bottone diventa verde */
        likes[2].classList.add("like-button--liked")
        let i=posts[2].likes
        /* il numero di like cresce */
        i++
        /* modifico i like con il dato aggiornarto  */
        document.getElementById("like-counter-3").innerHTML=i
    }
   /* altrimenti */
    else{
    /* il colore del like è quello di defoult */
    likes[2].style.color = "#404040";
    let i=posts[3].likes
    /* infatti il numero di like è quello iniziale */
    document.getElementById("like-counter-3").innerHTML=i
    }
})




/* ad ogni pulsante controllo il click */

likes[3].addEventListener("click",function(){
    if (!((likes[3].classList.contains("like-button--liked")))){
        /* se l'utente mette like ad un post accade che.... */
        
        /* che il bottone diventa verde */
        likes[3].classList.add("like-button--liked")
        let i=posts[3].likes
        /* il numero di like cresce */
        i++
        /* modifico i like con il dato aggiornarto  */
        document.getElementById("like-counter-4").innerHTML=i
    }
    /* altrimenti */
    else{
        /* il colore del like è quello di defoult */
        likes[3].style.color = "#404040";
        let i=posts[3].likes
        /* infatti il numero di like è quello iniziale */
        document.getElementById("like-counter-4").innerHTML=i
    }
})


/* ad ogni pulsante controllo il click */

likes[4].addEventListener("click",function(){
    if (!((likes[4].classList.contains("like-button--liked")))){
        /* se l'utente mette like ad un post accade che.... */
        
        /* che il bottone diventa verde */
        likes[4].classList.add("like-button--liked")
        let i=posts[4].likes
        /* il numero di like cresce */
        i++
        /* modifico i like con il dato aggiornarto  */
        document.getElementById("like-counter-5").innerHTML=i
    }
    /* altrimenti */
    else{
        /* il colore del like è quello di defoult */
        likes[4].style.color = "#404040";
        let i=posts[4].likes
        /* infatti il numero di like è quello iniziale */
        document.getElementById("like-counter-5").innerHTML=i
    }
})
