function initImporter(globals){
    const reader = new FileReader()

    function importDemoFile(url){
        let extension = url.split('.')
        let name = extension[ extension.length - 2 ].split("/")
        name = name[ name.length - 1 ]
        extension = extension[ extension.length - 1 ]

        console.log(extension, name)
    }

    return { importDemoFile }
}
