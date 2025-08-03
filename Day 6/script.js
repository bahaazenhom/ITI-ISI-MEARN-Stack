var users = []
var addUserButton = document.getElementById("save-button");
addUserButton.addEventListener("click", addUser);
var editId = -1;
function addUser(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.querySelector('input[name="title"]:checked').value;
    var card = document.getElementById("card-type").value;
    var id = users.length + 1;
    if(editId != -1)id = editId;
    var user = {
        id: id,
        name: name,
        email: email,
        title: title,
        card: card
    }
    users = users.map((e)=>{
        if(e.id == editId){
            e.name = name;
            e.email = email;
            e.title = title;
            e.card = card;
        }
        return e;
    })
    if(editId != -1){
        users.map((e)=>{
            if(e.id == editId){
                e.name = name;
                e.email = email;
                e.title = title;
                e.card = card;
            }
        });
        var userRow = document.getElementById("user-"+editId);
        userRow.innerHTML = createUserRowHTML(user.title, user.name, user.email, user.card, user.id);
    }
    else{
    users.push(user);

    var userList = document.getElementById("users-table-body");
    var userRow = document.createElement("tr");
    userRow.id = "user-"+user.id;
    userRow.innerHTML = createUserRowHTML(user.title, user.name, user.email, user.card, user.id);
    userList.appendChild(userRow);
}
   localStorage.setItem("users",  JSON.stringify(users));  
    editId = -1;
    var form = document.getElementById("contact-form");
    form.reset();
    
}
function deleteUser(index){
    users = users.filter((e)=>{
        return e.id != index;
    });

    localStorage.setItem("users", JSON.stringify(users));
    var deletedElement = document.getElementById("user-"+index);
    console.log(deletedElement);
    deletedElement.remove();
}
function editUser(index){
    console.log("test");
    
    var user = users.find((e)=>{
        return e.id == index;
    });
    editId = index;
    document.getElementById("name").value=user.name;
    document.getElementById("email").value=user.email;
    document.getElementsByName("title").forEach((e)=>{
        if(e.value == user.title){
            e.checked = true;
        }
    })
    document.getElementById("card-type").value = user.card;
}

function createUserRowHTML(title, name, email, card, userId) {
    return `
        <td>
            <span id="name">${title} - ${name}</span>
        </td>
        <td>
            <span id="email">${email}</span>
        </td>
        <td>
            <span id="card">${card}</span>
        </td>
        <td>
            <button onclick="editUser('${userId}')">Edit</button>
        </td>
        <td>
            <button onclick="deleteUser('${userId}')">Delete</button>
        </td>
    `;
}