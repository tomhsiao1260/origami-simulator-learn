globals = {}

document.addEventListener('DOMContentLoaded', function () {
    globals.threeView = initThreeView(globals)
    globals.controls = initControls(globals)
    globals.importer = initImporter(globals)
    globals.pattern = initPattern(globals)

    const model = 'Tessellations/huffmanWaterbomb.svg'
    const demoLink = document.querySelector(`.demo[data-url='${ model }']`)
    demoLink.click()
})