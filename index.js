// let saveBtn = document.getElementById("saveBtn");
// let clearBtn = document.getElementById("clearBtn");
// let userInput = document.getElementById("userInput");

// function saveData(){
//     let userValue = userInput.value;
//     console.log(userValue);
//     localStorage.setItem("userValue",userValue);
// };
// function removeData(){
//     userInput.value='';
//     localStorage.removeItem('userValue');
// }
// saveBtn.addEventListener("click",saveData);
// clearBtn.addEventListener("click",removeData);

// --------- Local Storage Practice ------------

// let msg = document.getElementById("msg");
// let saveButton = document.getElementById("saveBtn");
// let clearButton = document.getElementById("clearBtn");
// function saveMsg(){
//     let textAreaValue = msg.value;
//     console.log(textAreaValue)
//     localStorage.setItem('textAreaValue',textAreaValue);
// };
// function removeMsg(){
//     msg.value = '';
//     localStorage.removeItem('textAreaValue');
// };
// document.addEventListener('DOMContentLoaded',function(){
//     if(localStorage.getItem('textAreaValue')){
//         msg.value=localStorage.getItem('textAreaValue');
//     }
// });
// saveButton.addEventListener("click",saveMsg);
// clearButton.addEventListener("click",removeMsg);

// ---------- ChatBot ----------

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendBtn = document.getElementById("sendBtn");
let userChatBox = document.getElementById("userChatBox");
let botChatBox = document.getElementById("botChatBox");
let userChatList = document.getElementById("userChatList");
let botChatList = document.getElementById("botChatList");

function chatMsg(message,user=true){
if(user ? 'user-message' : 'bot-message');
    userChatList.textContent=message;
};
function botChatMsg(message,user=false){
    if(user ? 'user-message' : 'bot-message');
    botChatList.textContent=message;
};

function botResponse(message){
if(message.toLowerCase().includes('hai')){
    return 'Hello Friend! How can I help you?';
}else if(message.toLowerCase().includes('hello')){
    return 'Hi there! How can I assist you today?';
}else if(message.toLowerCase().includes('can you help me')){
    return 'Yeah Sure!';
}else if(message.toLowerCase().includes('how are you')){
    return "I'm just a bot, but I'm doing great! How about you?";
}else{
    return "Sorry, I don't understand that. Can you please rephrase?";
}
};

function msgSend(){
    let message = userInput.value.trim();
    if(message){
        chatMsg(message,true);
userInput.value = '';
setTimeout(()=>{
    let botmsg = botResponse(message);
    botChatMsg(botmsg,false);
},500);
}
};

sendBtn.addEventListener('click',msgSend);

userInput.addEventListener('keypress',function (event){
    if(event.key === 'Enter'){
msgSend();
}
});