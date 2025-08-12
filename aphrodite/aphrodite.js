const wait = ms => new Promise( r => setTimeout(r, ms));

document.addEventListener('DOMContentLoaded', async () => {
    const stage = document.getElementById('stage');
    const drop = document.getElementById('drop');
    const ripple = document.getElementById('ripple');
    const message = document.getElementById('message');
    const yesBtn = document.getElementById('yesBtn');
    const pearl = document.getElementById('pearl');
    const cardWrap = document.getElementById('cardWrap');
    const cardEl = document.getElementById('cardEl');
    const bottomPopup = document.getElementById('bottomPopup');
    const continueBtn = document.getElementById('continueBtn');
    const wiki = document.getElementById('wiki');

    stage.classList.add('dimmed');
    await wait(380);

    drop.setAttribute('opacity', '1');
    drop.animate([
        {transform: 'translateY(-160px)'},
        {transform: 'translateY(0px)'}
    ], { duration: 820, easing: 'cubic-bezier(.15, .9, .25, 1)', fill: 'fowards' });

    await wait(820);

    ripple.setAttribute('opacity', '1');
    ripple.animate([
        {transform: 'scale(.12)', opacity: 1},
        {transform: 'scale(1)', opacity: 0}
    ], { duration: 620, easing: 'cubic-bezier(.2, .9, .2, 1)', fill: 'forwards' });

    await wait(260);
   
    stage.style.transition = 'background 650ms ease, filter 650ms ease';
    stage.style.backgroundImage = 'url(../assets/gods/aphrodite/bg-aphrodite.jpg)';
    stage.classList.remove('dimmed');

    await wait(520);

    message.classList.add('show');

    yesBtn.addEventListener('click', async() => {
        message.classList.remove('show');
        await wait(220);

        document.body.classList.add('open-top');

        pearl.setAttribute('opacity', '1');

        await wait(360);

        cardWrap.setAttribute('aria-hidden', 'false');
        cardEl.classList.add('reveal');

        await wait(680);
        bottomPopup.classList.add('show');
    });

    continueBtn.addEventListener('click', async () => {
        bottomPopup.classList.remove('show');
        await wait(240);

        cardEl.classList.remove('reveal');
        cardWrap.style.display = 'none';

        wiki.setAttribute('aria-hidden', 'false');
        wiki.classList.add('show');
        wiki.scrollIntoView({ behavior: 'smooth' });

    });
});