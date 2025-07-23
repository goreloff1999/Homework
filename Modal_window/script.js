const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.add('modal--open')
}
const closeModal = () => {
    modal.classList.remove('modal--open')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal_close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.toggle('modal--open')
    }
})