// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', onToggleBtnClick);

function onToggleBtnClick() {
  links.classList.toggle('show-links');
  //   if (!links.classList.contains('show-links')) {
  //     links.classList.add('show-links');
  //   } else {
  //     links.classList.remove('show-links');
  //   }
}
