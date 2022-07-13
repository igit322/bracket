window.onload = function() {
    window.addEventListener("scroll", function() {
        scrollEvent();
    });
}

let scrollEvent = function() {
    // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const scroll = (innerHeight * 0.9) + scrollY;

    // 애니메이션 효과를 넣을 DOM 객체 배열
    const itemList = document.querySelectorAll(".client ul li");
    let array = [];
    for(let i = 0; i < itemList.length; i++) {
        array.push(itemList[i]);
    }

    Array.prototype.forEach.call(itemList, function(li) {
        // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
        if(li.offsetTop < scroll) {
            li.classList.remove("animatable");
            li.classList.add("animated");
        }
    });

    width1217();
    width940();
}

let width1217 = function() {
    const itemList = document.querySelectorAll(".client ul li");
    let array = [];
    for(let i = 0; i < itemList.length; i++) {
        array.push(itemList[i]);
    }

    if(window.matchMedia("screen and (min-width: 941px) and (max-width: 1217px)").matches) {
        let visiArray = [];
        visiArray = array.slice(0, 8);
        visiArray = visiArray.concat(array.slice(8, 16).reverse());
        visiArray = visiArray.concat(array.slice(16, 24));
        let second = 0;
        for(let i = 0; i < visiArray.length; i++) {
            second = second + 0.1;
            visiArray[i].style.animationDelay = second + "s";
        }

        let more = document.getElementsByClassName("moreBtn")[0];
        more.addEventListener("click", function(e) {
            e.preventDefault();
            let hiddenArray = [];
            hiddenArray = array.slice(24, 27);

            let hSecond = 0;
            for(let i = 0; i < hiddenArray.length; i++) {
                hSecond = hSecond + 0.1;
                hiddenArray[i].style.animationDelay = hSecond + "s";
                hiddenArray[i].style.display = "block";
            }
            more.style.display = "none";
        });
    }
}

let width940 = function() {
    const itemList = document.querySelectorAll(".client ul li");
    let array = [];
    for(let i = 0; i < itemList.length; i++) {
        array.push(itemList[i]);
    }
    
    if(window.matchMedia("screen and (max-width: 940px)").matches) {
        let visiArray = [];
        visiArray = array.slice(0, 12);
        let second = 0;
        for(let i = 0; i < visiArray.length; i++) {
            second = second + 0.1;
            visiArray[i].style.animationDelay = second + "s";
        }

        let more = document.getElementsByClassName("moreBtn")[0];
        more.addEventListener("click", function(e) {
            e.preventDefault();
            let hiddenArray = [];
            hiddenArray = array.slice(12, 27);

            let hSecond = 0;
            for(let i = 0; i < hiddenArray.length; i++) {
                hSecond = hSecond + 0.1;
                hiddenArray[i].style.animationDelay = hSecond + "s";
                hiddenArray[i].style.display = "block";
            }
            more.style.display = "none";
        });
    }
}
