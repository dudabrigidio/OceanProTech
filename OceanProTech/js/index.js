document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.homepage-icons');
    

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });
});