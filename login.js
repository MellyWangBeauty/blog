const labels = document.querySelectorAll('.form-control label')
// const btn = document.querySelector('.btn')
const inputs = document.querySelectorAll('input')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// btn.addEventListener('click',()=>{
//     if(inputs[0].value.length!=0 && inputs[1].value.length!=0){
//         alert('登录成功！')
//     }
// })

function jump(){
    if(inputs[0].value.length!=0 && inputs[1].value.length!=0){
        alert('登录成功！')
        window.location.href='./index.html'
        window.event.returnValue=false
    }
}
