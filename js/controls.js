function initControls(globals){
    const demoLink = document.querySelector('.demo')

    demoLink.addEventListener('click', function(e) {
        e.preventDefault()
        const url = demoLink.getAttribute('data-url')

        if (url) {
            globals.importer.importDemoFile(url)
        }
    })

    return {
    }
}