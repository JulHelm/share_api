const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org',
}

const btn = document.getElementById('shareButton');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', () => {
    navigator.share(shareData)
        .then(() =>
            resultPara.textContent = 'MDN shared successfully'
        )
        .catch((e) =>
            resultPara.textContent = 'Error: ' + e
        )
});