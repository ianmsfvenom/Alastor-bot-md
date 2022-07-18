const socket = io('http://localhost:3030')

socket.on('receivedMessage', async (message) => {
    console.log(message);
    var element = `<tr>
    <td>${message.number}</td>
    <td>${message.isGroup ? message.groupName : 'Não'}</td>
    <td>${message.date}</td>
    <td>${message.cmd ? message.cmd : 'Não'}</td>
    <td>${message.works}</td>
</tr>`
    element += document.getElementsByClassName('table-logs')[0].children[1].innerHTML 
    document.getElementsByClassName('table-logs')[0].children[1].innerHTML = element
})