function initThreeView(globals) {
    const scene = new THREE.Scene()
    const modelWrapper = new THREE.Object3D()

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    let controls

    init()

    function init() {
        const container = document.querySelector('#threeContainer')
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        container.append(renderer.domElement)

        scene.background = new THREE.Color(0xe6e6e6)
        // scene.background = new THREE.Color(0xffffff)
        scene.add(modelWrapper)

        const cube = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial())
        scene.add(cube)

        scene.add(camera)
        resetCamera()

        controls = new THREE.TrackballControls(camera, renderer.domElement)
        controls.rotateSpeed = 4.0
        controls.zoomSpeed = 15
        controls.noPan = true
        controls.staticMoving = true
        controls.dynamicDampingFactor = 0.3
        controls.minDistance = 1
        controls.maxDistance = 30

        _render()
    }

    function resetCamera(){
        camera.zoom = 7
        camera.updateProjectionMatrix()
        camera.position.x = 5
        camera.position.y = 5
        camera.position.z = 5
    }

    function _render(){
        renderer.render(scene, camera)
        controls.update()

        window.requestAnimationFrame(_render)
    }

    return {
    }
}