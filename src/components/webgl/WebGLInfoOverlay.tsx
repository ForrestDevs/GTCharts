import React from 'react';

interface WebGLInfoOverlayProps {
    windowWidth: number;
    windowHeight: number;
    mouseX: number;
    mouseY: number;
}

// Define the State interface
interface WebGLInfoOverlayState {
    info: {
        renderer: string;
        vendor: string;
        memoryUsage: string;
        fps: number;
    };
}

class WebGLInfoOverlay extends React.Component<WebGLInfoOverlayProps, WebGLInfoOverlayState> {
    constructor(props: WebGLInfoOverlayProps) {
        super(props);
        this.state = {
            info: {
                renderer: '',
                vendor: '',
                memoryUsage: 'Unknown',
                fps: 0,
            }
        };
    }

    componentDidMount() {

        // const gl = this.canvasRef.current?.getContext('webgl');
        // if (!gl) {
        //     console.error('Unable to initialize WebGL. Your browser may not support it.');
        //     return;
        // }

        let lastFrameTime = performance.now();

        // const updateInfo = () => {
        //     const webglInfo = gl.getExtension('WEBGL_debug_renderer_info');
        //     const renderer = webglInfo ? gl.getParameter(webglInfo.UNMASKED_RENDERER_WEBGL) : 'N/A';
        //     const vendor = webglInfo ? gl.getParameter(webglInfo.UNMASKED_VENDOR_WEBGL) : 'N/A';

        //     // Simulate memory usage update (replace this with actual logic if available)
        //     const memoryUsage = 'Simulated Value'; // This should be replaced with actual memory usage logic

        //     // Calculate FPS
        //     const currentTime = performance.now();
        //     const deltaTime = currentTime - lastFrameTime;
        //     lastFrameTime = currentTime;

        //     this.setState((prevState) => ({
        //         info: {
        //             ...prevState.info,
        //             renderer: renderer || 'N/A',
        //             vendor: vendor || 'N/A',
        //             memoryUsage: memoryUsage,
        //             fps: 1000 / deltaTime
        //         },
        //     }));

        //     requestAnimationFrame(updateInfo);
        // };

        // updateInfo();
    }

    render() {
        const { info } = this.state;
        const { windowWidth, windowHeight, mouseX, mouseY } = this.props;

        return (
            <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50">
                <p>Renderer: {info.renderer}</p>
                <p>Vendor: {info.vendor}</p>
                <p>Memory Usage: {info.memoryUsage}</p>
                <p>FPS: {info.fps}</p>
                <p>Window Width: {windowWidth}</p>
                <p>Window Height: {windowHeight}</p>
                <p>Mouse X: {mouseX}</p>
                <p>Mouse Y: {mouseY}</p>
            </div>
        );
    }
}

export default WebGLInfoOverlay;
