function initPattern(globals){
    const SVGloader = new THREE.SVGLoader()

    function loadSVG(url, isDemo){
        SVGloader.load(url, function(svg){
            document.body.appendChild(svg)
        })
    }

    return { loadSVG }
}