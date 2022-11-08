const labels = document.querySelectorAll('.form-control label')
const inputs = document.querySelectorAll('input')

labels.forEach(label=>{
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

function jump(){
    if(inputs[0].value.length!=0 && inputs[1].value.length!=0){
        alert('登录成功！即将跳转回主页')
        window.location.href='./index.html'
        window.event.returnValue=false
    }
}

