import { Toast } from './toast.js';

let id = 1;

window.onload = function() {
  document.getElementById('sucess-button').onclick = function() {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-input').value = '';
    let toast = new Toast(id,"Sucess",text,"#b8e356");
    id++;
    toast.insertToast();
  };
  document.getElementById('error-button').onclick = function() {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-input').value = '';
    let toast = new Toast(id,"Error",text,"#ffc477");
    id++;
    toast.insertToast();
  }
  document.getElementById('info-button').onclick = function() {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-input').value = '';
    let toast = new Toast(id,"Info",text,"#dcdcdc");
    id++;
    toast.insertToast();
  }
}