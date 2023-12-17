function initImporter(globals){
    const reader = new FileReader()

    function importDemoFile(url){
        let extension = url.split('.')
        let name = extension[ extension.length - 2 ].split("/")
        name = name[ name.length - 1 ]
        extension = extension[ extension.length - 1 ]

        if (extension === 'svg'){
            globals.url = url
            globals.filename = name
            globals.extension = extension
            globals.pattern.loadSVG('assets/' + url, true)
            // globals.curvedFolding.loadSVG('assets/'' + url, true)
        } else {
            console.warn('unknown extension: ' + extension)
        }
    }

    return { importDemoFile }
}
