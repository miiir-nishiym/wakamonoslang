document.addEventListener('DOMContentLoaded', function () {
    const targets = document.getElementsByClassName('tab');
    for (let i = 0; i < targets.length; i++) {
        targets[i].addEventListener('click', changeTab, false);
    }
    // タブメニューボタンをクリックすると実行
    function changeTab() {
        // タブのclassを変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-display')[0].classList.remove('is-display');
        const arrayTabs = Array.prototype.slice.call(targets);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('content')[index].classList.add('is-display');
    };
}, false);




//スムーススクロール
const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
  scorrllLink.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefLink = scorrllLink.getAttribute("href");
    const targetContent = document.getElementById(hrefLink.replace("#", ""));
    const rectTop = targetContent.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
});
