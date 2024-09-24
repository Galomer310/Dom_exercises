// 2
const divElement = document.getElementById('container');
console.log(divElement);

const secondListItemElement = document.getElementsByTagName("li")[1];
secondListItemElement.innerHTML = 'Richard';

const secondLiOfSecondUl = document.getElementsByTagName("li")[3];
secondLiOfSecondUl.remove();

document.getElementsByTagName("li")[0].innerHTML = "Gal";
document.getElementsByTagName("li")[2].innerHTML = "Gal";
// 3
const uls = document.querySelectorAll('.list'); 
uls.forEach((ul) => {
    ul.classList.add('student_list'); 
   
    if (ul === uls[0]) {
        ul.classList.add('university', 'attendance'); 
    }
});
// 4
divElement.style.backgroundColor = "lightblue"
divElement.style.padding = "15px"

const dan = document.getElementsByTagName("li")[3];
dan.style.display = 'none';
secondListItemElement.style.border = '3px solid red';

document.body.style.fontSize = "20px";