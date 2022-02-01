class MessageView {
  constructor() {
    this.mainContainerEL = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    this.message = document.createElement('div');
    this.message.id = 'message';
    // message = document.querySelector('#message');
    this.message.innerText = 'hello again';
    this.mainContainerEL.append(this.message);

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    this.message.remove();
  }
}

module.exports = MessageView;