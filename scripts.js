function sendMessage(event){
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = '5541987674607';
    const template = 'Hello, my name is ' + name + ', ' + message;
    const finalMessage = encodeURIComponent(template);
    const url = 'https://wa.me/' + phone +'?text=' + finalMessage;

    window.open(url, '_blank');
    console.log(url);

    event.preventDefault();
}