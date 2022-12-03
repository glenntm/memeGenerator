window.addEventListener('DOMContentLoaded', function(){

    let memeForm = document.getElementById('memeForm');
    let topText = document.getElementById('topTxt');
    let bottomText = document.getElementById('bottomTxt');
    let imgURL = document.querySelector('#img');
    let body = document.querySelector('body');
    let allmemes = document.createElement('div');
    let container = document.createElement('div');
    
    memeForm.addEventListener("submit", function(event){
        event.preventDefault();
       if(imgURL.value === ''){
        alert("Please provide a URL for your Meme");
       } else {

        container.setAttribute('class', 'container');
        let newMeme = document.createElement("img");
        newMeme.setAttribute('src',imgURL.value);
        newMeme.height = '300';
        newMeme.width = '500';
        
        let topDiv = document.createElement('div');
        topDiv.setAttribute('class', 'topWordDiv')
        topDiv.innerHTML = topText.value;
        container.appendChild(topDiv);
    
        container.appendChild(newMeme);
    
        let bottomDiv = document.createElement('div');
        bottomDiv.setAttribute('class', 'bottomWordDiv');
        bottomDiv.innerHTML = bottomText.value;
        container.appendChild(bottomDiv);
    
        //allmemes.appendChild();


    
        body.appendChild(container);


       }
       imgURL.value = '';
       topText.value = '';
       bottomText.value = '';
    
    })

    container.addEventListener('click', function(e){
        // removes all the html elements in the meme. Includes main node and child nodes.
    //   console.log(container.children.length);
    //     for(let i=0; i < container.children.length; i++ ){
    //         this.children[i].remove();
    //     }


    //     this.remove();
    console.log(e);
    //e.remove();
        
     })
    

})


