class Toast {

  constructor(id,title, message, color) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.color = color;
  }

  insertToast() {
    let toastContainer = document.getElementById('toast-container');
    let toast = `<div id='toast${this.id}' class='toast' style='background-color: ${this.color}'><h2>${this.title}</h2><p>${this.message}</p></div>`;
    toastContainer.insertAdjacentHTML("afterbegin", toast);
    this.deleteToast(this.id);
  }

  deleteToast(id) {
    setTimeout(function() {
      let toastContainer = document.getElementById('toast-container');
      let toast = document.getElementById(`toast${id}`);
      toastContainer.removeChild(toast);
    }, 10000)
  }
}

export { Toast }
