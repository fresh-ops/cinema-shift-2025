const isMobile = window.innerWidth < 768;

function main() {
    changeHeader();
    window.addEventListener('resize', adoptLayout, { once: true });
}

function adoptLayout() {
    changeHeader();
    if (isMobile === (window.innerWidth < 768)) {
        window.addEventListener('resize', adoptLayout, { once: true });
    }
}

main();