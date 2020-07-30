function addYourOwn() {
let suggest = document.querySelector('#words');
document.querySelector("#words").innerHTML = document.myform.name.value;

suggest.style.color = "#292F36";
suggest.style.borderBottom = "solid #292F36 1px";
suggest.style.borderTop = "solid #292F36 1px";
suggest.style.padding = "20px";

console.log('sumbitted new entry');
}
