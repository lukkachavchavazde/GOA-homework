document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const parent = q.parentElement;
        if (parent.className === 'faq-item open') {
            parent.className = 'faq-item';
        } else {
            parent.className = 'faq-item open'; 
        }
    });
});