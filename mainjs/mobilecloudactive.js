document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cloud').forEach(function (cloud) {
        cloud.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
