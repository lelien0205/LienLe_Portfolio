document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
            toggleButton.textContent = '🌙';
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            toggleButton.textContent = '☀️';
        }
    });
});
