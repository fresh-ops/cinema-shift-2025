function buildDesktopHeader() {
    const desktopHeader = document.createElement('div');
    desktopHeader.innerHTML = `
        <img src="./assets/img/logo.png" alt="logo">
        <div class="header-menu">
            <div class="header-menu-item">
                <img src="./assets/img/userIcon.png" alt="user">
                <a href="#">Профиль</a>
            </div>
            <div class="header-menu-item">
                <img src="./assets/img/ticketIcon.png" alt="ticket">
                <a href="#">Билеты</a>
            </div>
        </div>
    `;

    return desktopHeader;
}

function buildMobileHeader() {
    const mobileHeader = document.createElement('div');
    mobileHeader.innerHTML = `
        <h1>Афиша</h1>
    `;

    return mobileHeader;
}

function removeHeader() {
    const header = document.querySelector('header');
    header.children[0]?.remove();
}

function setDesktopHeader() {
    removeHeader();
    const header = document.querySelector('header');
    header.append(buildDesktopHeader());
}

function setMobileHeader() {
    removeHeader();
    const header = document.querySelector('header');
    header.append(buildMobileHeader());
}

function changeHeader() {
    if (window.innerWidth < 768) {
        setMobileHeader();
    } else {
        setDesktopHeader();
    }
}
