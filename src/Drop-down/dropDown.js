import './dropDown.css';

const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

export default function dropDowns() {
  dropdownButtons.forEach((button, index) => {
    const dropdownMenu = dropdownMenus[index];
    button.addEventListener('click', () => {
      dropdownMenu.classList.toggle('visible');
    });
  });
}
