var heading1 = document.createElement('h1');
heading1.innerHTML = 'Hello Good Morning';

var body = document.getElementById('mainBody');

body.prepend(heading1);

heading1.style.color ='white';
heading1.style.backgroundColor = 'black'

heading1.className = 'kishan';