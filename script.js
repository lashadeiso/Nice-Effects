document.querySelectorAll('.story-btn').forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('change')
        item.nextElementSibling.classList.toggle('change')
    })

})