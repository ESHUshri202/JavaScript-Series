const buttons= document.querySelectorAll('.button')
const body = document.querySelector('body')
const text = document.querySelector('#title')

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        switch(e.target.id){
            case 'grey': body.style.backgroundColor = e.target.id;
                        title.style.color = "black";
                        break;
            case 'white': body.style.backgroundColor = e.target.id;
                        title.style.color = "black";
                        break;
            case 'yellow': body.style.backgroundColor = e.target.id;
                            title.style.color = "black";
                            break;
            case 'blue': body.style.backgroundColor = e.target.id;
                        title.style.color = "black";
                        break;
            default: console.log("wrong selection")
            break;
        }
    })
});

