const subscribeBtn = document.querySelector('#subscribe');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal .button');
const input = document.querySelector('.subscribeEmailBox input');

const showModal = () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
};

const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

const checkEmailAndShowModal = (e) => {
    e.preventDefault();
    input.value.trim() !== '' ? showModal() : alert('이메일을 입력해주세요!');
};

subscribeBtn.addEventListener('click', checkEmailAndShowModal);

input.addEventListener('keypress', (e) => {
    e.key === 'Enter' && checkEmailAndShowModal(e);
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});

overlay.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
    if ((e.key === 'Escape' || e.key === 'Enter') && modal.style.display === 'block') {
        closeModal();
    }
});