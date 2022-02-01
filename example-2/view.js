class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let p = document.createElement('p');
    p.innerText = "Hi Kat!";
    this.mainContainerEl.append(p);
  }
}

module.exports = View;