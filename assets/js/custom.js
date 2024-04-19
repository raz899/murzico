if (document.cookie.indexOf('dialog') > 0) {
    const $dialog = document.createElement('dialog');
    const $dialogImg = document.createElement('img');
    const $dialogBtn = document.createElement('button');
    
    $dialogBtn.textContent = 'Понятно';
    $dialogBtn.addEventListener("click", () => {
      $dialog.close();
      document.cookie = 'dialog=open';
    });
    $dialogImg.src = '/assets/photo/banner19042024.jpg';
    $dialog.append($dialogImg);
    $dialog.append($dialogBtn);
    
    document.body.append($dialog);

    $dialogImg.onload = function () {
        $dialog.showModal()    
    };
}