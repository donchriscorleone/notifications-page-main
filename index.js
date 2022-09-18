const btn = document.querySelector('.btn');
const badge = document.querySelector('.badge');

btn.addEventListener('click', (e) => {
    const unreadNotifs = document.querySelectorAll('.notification.unread');
    unreadNotifs.forEach(n => {
        let classList = n.classList
        if (classList.contains('unread')) classList.remove('unread')
    })

    const unread = document.querySelectorAll('.notification.unread');
    badge.innerHTML = unread.length;
})