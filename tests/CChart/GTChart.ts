
// import React, { createContext, useContext, useState, Component } from 'react';
// import WebGLInfoOverlay from '@/components/webgl/WebGLInfoOverlay';
// import * as PIXI from 'pixi.js';
// import { logger } from 'node_modules/@auth/core/lib/utils/logger';

// type GTChartsSerieData = Array<[number, number]>;

// class GTChartSerie {
//     public name: string;
//     public data: GTChartsSerieData;
//     public color: number;
// }

// interface GTChartOptions {
//     /**
//      * Container id
//      */
//     container: string;
//     /**
//      * Initial series to be plotted
//      */
//     series: GTChartSerie[];
//     backgroundColor: number;
// }

// class GTChart {


//     pixiApp: PIXI.Application;



//     // canvasRef = React.createRef<HTMLCanvasElement>();
//     // gl: WebGLRenderingContext | null = null;
//     // visibleRange: IntRange;
//     // mouseX: number;
//     // mouseY: number;

//     // windowWidth: number;
//     // windowHeight: number;
//     // mouseTrackingLayer: MouseTrackingLayer;
//     // crosshairLayer: CrosshairLayer;

//     constructor(public options: GTChartOptions) {
//         //super(props);
//         this.setUp();
//         this.pixiApp = new PIXI.Application({ width: 800, height: 600 });
//         document.body.appendChild(this.pixiApp.view);
//     }

//     private setUp() {
//         const container = document.getElementById(this.options.container);
//         if (container) {
            
//             // Init pixi app
//             this.pixiApp = new PIXI.Application({ 
//                 antialias: true,
//                 width: Number(container.style.width.split('p')[0]), 
//                 height: Number(container.style.height.split('p')[0]), 
//                 backgroundColor: this.options.backgroundColor 
//             });

//             // append pixi app to container
//             container.appendChild(this.pixiApp.view as Node);

//             this.setUpRenderer();

//             this.startTicker();

//             this.setUpInteractionContainer();
//         } else {
//             console.error('Container not found');
//         }
//     }

//     private setUpRenderer() {
//         this.pixiApp.renderer.background.backgroundColor = this.options.backgroundColor;

//         this.pixiApp.renderer.resize(this.pixiApp.view.width, this.pixiApp.view.height);
//     }

//     // constructor(props: any) {
//     //     super(props);
//     //     this.handleResize = this.handleResize.bind(this);
//     //     this.handleMouseMove = this.handleMouseMove.bind(this);
//     //     this.visibleRange = new IntRange(0, 100); // This sets the number of initial bars to load from the data source.
//     //     this.mouseX = 0;
//     //     this.mouseY = 0;
//     //     this.windowWidth = 0;
//     //     this.windowHeight = 0;
//     //     // this.mouseTrackingLayer = new MouseTrackingLayer(this);
//     //     // this.crosshairLayer = new CrosshairLayer(this);
//     // }

//     handleResize(e: UIEvent) {
//         this.windowWidth = e.view?.innerWidth!;
//         this.windowHeight = e.view?.innerHeight!;
//         // Your resize handling logic here
//     }


//     handleMouseMove(e: MouseEvent) {
//         this.updateMousePosition(e.clientX, e.clientY);
//         // Your mouse move handling logic here
//     };

//     initializeWebGL() {
//         if (!this.canvasRef.current) return;
//         this.gl = this.canvasRef.current.getContext('webgl');
//         if (!this.gl) {
//             alert('Unable to initialize WebGL. Your browser may not support it.');
//             return;
//         }

//         // Define your shader sources
//         const vsSource = `
//             attribute vec4 aVertexPosition;
//             void main() {
//                 gl_Position = aVertexPosition;
//             }
//         `;
//         const fsSource = `
//             void main() {
//                 gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
//             }
//         `;

//         // Initialize shader program
//         const shaderProgram = this.initShaderProgram(this.gl, vsSource, fsSource);
//         if (!shaderProgram) {
//             console.error('Failed to initialize shader program');
//             return;
//         }

//         // Use the shader program for further operations like drawing
//     }

//     componentDidMount() {
//         window.addEventListener('mousemove', this.handleMouseMove);
//         window.addEventListener('resize', this.handleResize);
//         this.initializeWebGL();
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.handleResize);
//         window.removeEventListener('mousemove', this.handleMouseMove);
//     }

//     updateMousePosition(x: number, y: number) {
//         this.mouseX = x;
//         this.mouseY = y;
//         // Update the crosshair layer with the new mouse position
//         //this.crosshairLayer.render();
//     }

//     // Creates a shader of the given type, uploads the source and
//     // compiles it.
//     loadShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
//         const shader = gl.createShader(type);
//         if (shader === null) {
//             return null;
//         } else {
//             gl.shaderSource(shader, source);
//             gl.compileShader(shader);
//         }

//         // See if it compiled successfully
//         if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//             alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//             gl.deleteShader(shader);
//             return null;
//         }
//         return shader;
//     }

//     // Initialize the buffers we'll need. For this demo, we just
//     // have one object -- a simple two-dimensional triangle.
//     initBuffers(gl: WebGLRenderingContext) {
//         // Create a buffer for the triangle's vertices.
//         const positionBuffer = gl.createBuffer();
//         // Select the positionBuffer as the one to apply buffer
//         // operations to from here out.
//         gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//         // Now create an array of positions for the triangle.
//         const positions = [
//             0.0, 1.0,  // Vertex 1
//             -1.0, -1.0, // Vertex 2
//             1.0, -1.0,  // Vertex 3
//         ];

//         // Now pass the list of positions into WebGL to build the
//         // shape. We do this by creating a Float32Array from the
//         // JavaScript array, then use it to fill the current buffer.
//         gl.bufferData(gl.ARRAY_BUFFER,
//             new Float32Array(positions),
//             gl.STATIC_DRAW);

//         return {
//             position: positionBuffer,
//         };
//     }

//     // Initialize a shader program, so WebGL knows how to draw our data
//     initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
//         const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
//         const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
//         const shaderProgram = gl.createProgram(); // Create the shader program

//         if (shaderProgram === null || vertexShader === null || fragmentShader === null) {
//             return null;
//         } else {
//             gl.attachShader(shaderProgram, vertexShader);
//             gl.attachShader(shaderProgram, fragmentShader);
//             gl.linkProgram(shaderProgram);
//         }

//         // If creating the shader program failed, alert
//         if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
//             alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
//             return null;
//         }

//         return shaderProgram;
//     }

//     render() {
//         return (
//             <div className='bg-blue'>
//                 <WebGLInfoOverlay windowWidth={this.windowWidth} windowHeight={this.windowHeight} mouseX={this.mouseX} mouseY={this.mouseY} />
//                 <canvas ref={this.canvasRef} className='w-full h-full bg-blue'></canvas>
//             </div>

//         );
//     }
// }

// export default GTChart;





// // Vertex shader program
// const vsSource = `
// attribute vec4 aVertexPosition;
// void main() {
//   gl_Position = aVertexPosition;
// }
// `;
// const vsSource2 = `
// attribute vec2 aPosition;
// void main() {
//     gl_Position = vec4(aPosition, 0.0, 1.0);
// }
// `;

// // Fragment shader program
// const fsSource = `
// void main() {
//   gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);  // Set the color to blue
// }
// `;
// const fsSource2 = `
// precision mediump float;
// void main() {
//     gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // White color
// }
// `;

