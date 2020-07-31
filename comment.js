function addYourOwn() {
let suggest = document.querySelector('#wordbox2');
document.querySelector("#wordbox2").innerHTML = document.myform.name.value;

suggest.style.color = "#292F36";
suggest.style.borderBottom = "solid #292F36 1px";
suggest.style.borderTop = "solid #292F36 1px";
suggest.style.padding = "20px";

console.log('sumbitted new entry');

// let suggestwo = document.querySelector("#wordbox3");
// document.querySelector("#wordbox3").innerHTML = document.myform.name.value;

// suggestwo.style.color = "#292F36";
// suggestwo.style.borderBottom = "solid #292F36 1px";
// suggestwo.style.borderTop = "solid #292F36 1px";
// suggestwo.style.padding = "20px";

// console.log('sumbitted new entry');
}
