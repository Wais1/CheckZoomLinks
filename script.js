

// Paste this code into your Web Zoom's console to work.
// Check a message if its a link with regular expression. Return boolean
const checkLink = (msg) => {
    if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(msg)) {
        return true
    }

    return false
}

// Play a sound from url
const playSound = (url) => {
    // Open link in new tab (youtube alarm link)
    window.open(url, '_blank');
}

// Observe all logs in the chat
var observer = new MutationObserver(function(mutations) {
    console.log('Observer is running! Waiting for a link in chat...')

    // Reference chat box
    const chat = document.querySelector('.chat-container__chat-list')

    // Gets all chat messages. Access the div inside them 
    const chatMessage = document.querySelectorAll('.chat-message__container')
    console.log(chatMessage)
    console.log(chat)

    // Get latest message by stranger
    const msg = chatMessage[chatMessage.length-1].innerText
    console.log(`Latest message: ${msg}`)

    // Check if sent is a link
    if (checkLink(msg)) 
    {
        console.log(`Theres a link!! its ${msg}. Let's open it in a new tab`)
        playSound('https://www.youtube.com/watch?v=GWXLPu8Ky9k&ab_channel=TheMSsoundeffects')
    } else {
        console.log('Not a link')
    }
 });

// Observe changes in DOM elements within chatbox
observer.observe(document.querySelector('.chat-virtualized-list'), {attributes: false, childList: true, characterData: false, subtree:true});
