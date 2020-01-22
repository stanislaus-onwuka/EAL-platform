const levels = document.querySelectorAll('.level');
const generalContainer = document.querySelector('.container');
const defaultPage = document.querySelector('#default-course-page');
const coursesContainer = document.querySelector('.course-collection');

levels.forEach(level => level.addEventListener('click',function () {
    defaultPage.style.display = 'none';
    coursesContainer.style.display = 'grid';
    // level.classList.toggle('active');
    // let welcomeText = document.createElement('h3');
    // welcomeText.innerHTML = `${level.textContent.trim()} Courses Available`;
    // welcomeText.classList.add('welcome-text');
    // generalContainer.appendChild(welcomeText);
    // generalContainer.insertBefore(welcomeText,coursesContainer);
}))

