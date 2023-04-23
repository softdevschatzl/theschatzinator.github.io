document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-item').forEach(function (projectItem) {
      projectItem.querySelector('.cloud').addEventListener('click', function () {
          const projectInfo = projectItem.querySelector('.project-info');
          projectInfo.classList.toggle('visible');
      });
  });
  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!target.closest('.project-info') && !target.closest('.cloud')) {
        document.querySelectorAll('.project-info.visible').forEach(function (projectInfo) {
            projectInfo.classList.remove('visible');
        });
    }
  });
});
