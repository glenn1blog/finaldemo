
/* nav gotop start */
window.onscroll = function() {
    navscroll();
    gotopscroll();
}
function navscroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0 0";
        document.getElementById("logoimg").style.height = "100px";
        document.getElementById("navbar-right").style.padding = "30px";
    } else {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("logoimg").style.height = "130px";
        document.getElementById("navbar-right").style.padding = "40px";
    }
}
function gotopscroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("gotop").className = "gotopA";
    } else {
        document.getElementById("gotop").className = "gotopB";
    }
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("gotopbox").className = "gotopA";
    } else {
        document.getElementById("gotopbox").className = "gotopB";
    }
}
/* nav gotop end */
/*member start*/
function memberopen() {
    var member = document.getElementsByClassName("modal_memberbox");
    for (var i = 0; i < member.length; i++) {
        member[i].style.display = "block";
    }
}
function memberclose() {
    var member = document.getElementsByClassName("modal_memberbox");
    for (var i = 0; i < member.length; i++) {
        member[i].style.display = "none";
    }
}
/*member end*/
/*member editor start*/
var kv = [{ "label": "姓名", "id": "Name" }, { "label": "email", "id": "email"}, { "label": "cellphone", "id": "cellphone"}];
//变成编辑事件
function editor() {
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var ps = lis[i].getElementsByTagName("p");
        var labels = lis[i].getElementsByTagName("label");
        var p = ps[0]; 
        var label = labels[0]; 
        var t = p.innerHTML;
        var id = getID(label);
        lis[i].removeChild(p);
        lis[i].innerHTML += "<input class='member_text' type='text' size='12' name='" + id + "' id='" + id + "' value='" + t + "' />";
    }
    var ul1 = document.getElementById("ul1"); 
    var btn = document.getElementById("member_editor");
    ul1.removeChild(btn);
    ul1.innerHTML += "<input type='submit' class='member_editor'/>";
}
//根据规则设定 ID
function getID(label) {
    var id = "";
    var t = label.innerHTML;
    for (var i = 0; i < kv.length; i++) {
        //如果标签中含有指定字眼，则设定为对应的 ID
        if (t.indexOf(kv[i].label) > -1) {
            id = kv[i].id;
            break;
        }
    }
    return id;
}
/*member editor end*/
/*a login start*/
function login() {
    document.getElementById('logsign').style.display = 'block';
    var element = document.getElementById("login");
    element.classList.add("is-active");

    var element = document.getElementById("signup");
    element.classList.remove("is-active");
}
/*a login end*/
/*a signup start*/
function signup() {
    document.getElementById('logsign').style.display = 'block';
    var element = document.getElementById("signup");
    element.classList.add("is-active");
    var element = document.getElementById("login");
    element.classList.remove("is-active");
}
/*a signup end*/
/*叉叉 start*/
var modal = document.getElementById('logsign');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    /*叉叉 end*/
    /*登入 start*/
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
        item.addEventListener('click', function() {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'));
            this.parentElement.classList.add('is-active');
        })
    })
    /*登入 end*/
    /*購物車 start*/
function opencart_right() {
    document.getElementById("shopcart_right").style.width = "260px";
    document.getElementById("page").style.marginRight = "250px";
    document.getElementById("div_nav_right").style.width = "260px";
    document.getElementById("search-box").style.right = "320px";
    document.getElementById("shop-cart").style.right = "251px";
}

function opencart_left() {
    document.getElementById("shopcart_left").style.width = "100%";
    document.getElementById("shopcart_left").style.opacity = "0.8";
}

function closecart() {
    document.getElementById("shopcart_right").style.width = "0";
    document.getElementById("page").style.marginRight = "0";
    document.getElementById("shopcart_left").style.width = "0%";
    document.getElementById("shopcart_left").style.opacity = "0";
    document.getElementById("div_nav_right").style.width = "10px";
    document.getElementById("search-box").style.right = "70px";
    document.getElementById("shop-cart").style.right = "1px";
}
/*購物車 end*/
/*item start*/

function itemopen() {
    var item = document.getElementsByClassName("modal_itembox");
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "block";
    }
}

function itemclose() {
    var item = document.getElementsByClassName("modal_itembox");
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
}
/*star start*/
let stars = Array.from(document.getElementsByClassName("staricon"));

  stars.forEach(elm => elm.addEventListener('mouseover', function(e){
    // 找出目前元素的index
    let index = stars.findIndex(elm=> elm === e.target);
    
    // 將目前元素之前（包含目前元素）的設為彩色
    for (i=0;i<=index;i++){
        stars[i].style.color = 'yellow';
    }
    
    // 將目前元素之後的設為黑白
    for (i=index+1;i<stars.length;i++){
        stars[i].style.color = 'black';
    }
  }))
/*star end*/
/*item end*/