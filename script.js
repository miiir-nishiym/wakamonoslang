//ハンバーガーメニュー
window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};



//戻るボタン
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});




//TOPページ
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


//個別ページ
//document.addEventListener('DOMContentLoaded', function () {
  //const targets = document.getElementsByClassName('tab02');
  //for (let i = 0; i < targets.length; i++) {
      //targets[i].addEventListener('click', changeTab, false);
  //}
  // タブメニューボタンをクリックすると実行
  //function changeTab() {
      // タブのclassを変更
      //document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      //this.classList.add('is-active');
      // コンテンツのclassの値を変更
      //document.getElementsByClassName('is-display')[0].classList.remove('is-display');
      //const arrayTabs = Array.prototype.slice.call(targets);
      //const index = arrayTabs.indexOf(this);
      //document.getElementsByClassName('content02')[index].classList.add('is-display');
  //};
//}, false);






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


