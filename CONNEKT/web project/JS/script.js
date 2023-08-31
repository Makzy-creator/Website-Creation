// alert('This is an alert box')

// SIDEBAR
// query selector all to me, means select all items bearing the class name in the string while queryselector means select that particular class given.
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES VARIABLE
const messagesNotification = document.querySelector('#messages-notification');
      // messages box
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = messages.querySelectorAll('#message-search');

// THEME CUSTOMIZATION
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bcg1');
const Bg2 = document.querySelector('.bcg2');
const Bg3 = document.querySelector('.bcg3');



// ---------------------sidebar-------------
// function to remove active class from all menu-items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        // if any menu-item is clicked and it doesn't have an id of 'notifications', get the notifications-popup then, it displays nothing, else, if it has an id of notifications,get the notifications-popup it displays block. != means 'is not equal to'
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            // to hide the notification-count when we click on notification:
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
        if (item.id != 'explores') {
            document.querySelector('.explores-popup').style.display = 'none';
        }else{
            document.querySelector('.explores-popup').style.display = 'block';
        }
        if (item.id != 'settings') {
            document.querySelector('.settings-popup').style.display = 'none';
        }else{
            document.querySelector('.settings-popup').style.display = 'block';
        }
    })
})
// -------------------END OF SIDEBAR------------


// ----------------MESSAGES-------------
// searches chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}



// search chat
// messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-prime)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})




// THEME CUSTOMIZATION

// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);





// -------------------------font sizes---------------


// remove active class from spans or font size selectors
let removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        }else if(size.classList.contains('font-size2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        }else if(size.classList.contains('font-size3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        }else if(size.classList.contains('font-size4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        }else if(size.classList.contains('font-size5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }

        // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })

})


// remove active class from colors when one is clicked
let changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class from colors when one is clicked
        changeActiveColorClass();
        
        if(color.classList.contains('color1')){
            primaryHue = 262;
        } else if(color.classList.contains('color2')){
            primaryHue = 62;
        } else if(color.classList.contains('color3')){
            primaryHue = 362;
        } else if(color.classList.contains('color4')){
            primaryHue = 162;
        } else if(color.classList.contains('color5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})


// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
let changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
    
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '85%';
    whiteColorLightness = '22%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '3%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})



// END 
// PRAISE GOD