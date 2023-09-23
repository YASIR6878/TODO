
const myarray = [];

function adddata() {
    const usertext = document.querySelector('.inputtext');
    const data = usertext.value;
    const dateinput = document.querySelector('.datefield').value;
    myarray.push({
        name: data,
        duedate: dateinput
    });
    usertext.value = '';
    showlist();
}

function showlist() {
    let listunder = '';
    for (let i = 0; i < myarray.length; i++) {
        const todoobject = myarray[i];
        const name = todoobject.name;
        const duedate = todoobject.duedate;
        const html = `<div>${name}</div> 
                      <div>${duedate}</div>
                      <button onclick="myarray.splice(${i},1); showlist();" class="deletebutton">DELETE</button>`;
        listunder += html;
    }
    document.querySelector('.info').innerHTML = listunder;
}
