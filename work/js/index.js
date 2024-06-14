const ggwei = document.querySelector(".ggwei");
// 对联广告
function duilian(flag){
    if (flag) {
        return `<div class="leftgg item"><div class="xx">X</div>左边广告</div>`;
    }
    return `<div class="rightgg item"><div class="xx">X</div>右边广告</div>`;
}

function renderGG(){
    ggwei.innerHTML = duilian(true) + duilian(false);
    // 关闭广告
    onClickEvent()
    // 弹窗广告
    tcGG()
    
}

// 添加关闭事件
const onClickEvent = () =>{
    const itemList = document.querySelectorAll(".item");
    itemList.forEach(item => {
        item.addEventListener("click",(e) => {
            if (e.target.className === "xx") {
                item.style.display = 'none'
            }
        })
    })
}

// 弹窗广告
function tcGG(){
    const tc = document.createElement("div");
    tc.className = "item tc"
    tc.innerHTML = "<div class='xx'>X</div>弹窗广告"
    tc.addEventListener("click",(e) => {
        if (e.target.className === "xx") {
            tc.style.display = 'none'
        }
    })

    ggwei.appendChild(tc)
    setTimeout(()=>{
        tc.style.bottom = 0;
    },2000)
}





renderGG();