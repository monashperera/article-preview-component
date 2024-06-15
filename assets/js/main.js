let sharePopUp = document.getElementById('sharePopup');
let shareBtn = document.getElementById('shareBtn');
let articleFooter = document.getElementById('articleFooter');
let auImg = document.getElementById('authorImg');
let auInfo = document.getElementById('authorInfo');

const shareArticle = () => {
    shareBtn.classList.toggle('btn-share-active');
    sharePopUp.classList.toggle('show-popup');
    sharePopUp.classList.toggle('card__article-share-m-display');
    articleFooter.classList.toggle('card__article-footer-share');
    auImg.classList.toggle('m-display-none');
    auInfo.classList.toggle('m-display-none');
};

shareBtn.addEventListener('click', shareArticle);