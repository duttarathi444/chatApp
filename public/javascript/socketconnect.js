var socket = io('http://localhost:3000');
socket.on('connect', function () {
    socket.on('givemessage', (message) => {
        // var trmessage = document.createElement('tr');
        // var tdmessage = document.createElement('td');
        // var pmessage = document.createElement('p');
        // tdmessage.setAttribute('class', 'outerborder');
        // pmessage.setAttribute('class', 'innerborder');
        // pmessage.innerHTML = message.geeting;
        // tdmessage.appendChild(pmessage);
        // trmessage.appendChild(tdmessage);
        // document.getElementById('content').appendChild(trmessage);

    });

    document.getElementById('submitForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var pro = fetch('http://localhost:3000/test');
        pro.then(p => {
            p.json().then(p1 => {
                console.log(p1);
            })
        })
        // var valu = document.getElementById('message').value;
        // var trmessage = document.createElement('tr');
        // var tdmessage = document.createElement('td');
        // var pmessage = document.createElement('p');
        // tdmessage.setAttribute('class', 'outerborder1');
        // pmessage.setAttribute('class', 'innerborder1');
        // pmessage.innerHTML = valu;
        // tdmessage.appendChild(pmessage);
        // trmessage.appendChild(tdmessage);
        // document.getElementById('content').appendChild(trmessage);
    });

});