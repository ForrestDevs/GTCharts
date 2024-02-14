"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
//import { ResponsiveLine } from "@nivo/line"
import React, { useRef, useEffect, useState, SyntheticEvent, Component } from 'react';
import WebGLInfoOverlay from "@/components/webgl/WebGLInfoOverlay";
// import GTChart from "@/CChart/GTChart";
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

import { useApp } from "@pixi/react";
import { PixiComponent } from '@pixi/react';
import { Graphics } from 'pixi.js';
import GTChartFunction from "tests/CChart/GTChartView";
import ChartImp, { GTChart } from "tests/GTChart/GTChart";
// import { init, dispose } from "@/GTChart/index";

import { KLineChartPro, DefaultDatafeed, ChartProOptions } from '@klinecharts/pro'
import '@klinecharts/pro/dist/klinecharts-pro.css'
import { init, dispose, Chart } from 'klinecharts'


interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
}

const Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (ins, _, props) => {
    ins.x = props.x;
    ins.beginFill(props.color);
    ins.drawRect(props.x, props.y, props.width, props.height);
    ins.endFill();
  },
});


export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 flex flex-col gap-4">
            <div className="mx-auto grid items-center gap-4 sm:gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quantitative Trading Platform</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The complete toolkit for building and backtesting trading strategies. Access powerful research and
                  development tools to turn your ideas into profits.
                </p>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Backtesting Tools</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Test your strategies with historical data. Our platform provides the tools you need to analyze
                performance and understand risk.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    {/* <BarChartIcon className="h-6 w-6" /> */}
                    <h3 className="text-base font-bold">Performance</h3>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-sm">Your strategy's Sharpe ratio and maximum drawdown.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    {/* <TrendingUpIcon className="h-6 w-6" /> */}
                    <h3 className="text-base font-bold">Trades</h3>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-sm">Visualize entry and exit points on your chart.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    {/* <DollarSignIcon className="h-6 w-6" /> */}
                    <h3 className="text-base font-bold">Risk</h3>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-sm">Analyze position sizing and equity curve.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research & Analysis</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into the data with our research platform. Run sophisticated analysis with Jupyter notebooks and
                collaborate with your team.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">Interactive Research</h3>
                  <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides the tools you need to analyze performance and understand risk.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Tour the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Algorithm Development</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Turn your ideas into profits with our platform for algorithmic trading. Access powerful research and
                development tools.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">Interactive Development</h3>
                  <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides the tools you need to analyze performance and understand risk.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Tour the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research & Analysis</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into the data with our research platform. Run sophisticated analysis with Jupyter notebooks and
                collaborate with your team.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">Interactive Research</h3>
                  <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides the tools you need to analyze performance and understand risk.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Tour the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Algorithm Development</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Turn your ideas into profits with our platform for algorithmic trading. Access powerful research and
                development tools.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">Interactive Development</h3>
                  <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides the tools you need to analyze performance and understand risk.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Tour the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research & Analysis</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into the data with our research platform. Run sophisticated analysis with Jupyter notebooks and
                collaborate with your team.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">Interactive Research</h3>
                  <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides the tools you need to analyze performance and understand risk.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>


 
  //     <section className="w-full h-screen relative overflow-hidden">
  //       <span className="absolute inset-0 z-0 rounded-md bg-muted" />
  //       <div className="container flex items-center justify-center h-full z-10">
  //         <div className="text-center">
  //           <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl">Parallax Chart Scene</h1>
  //           <p className="text-gray-300 mt-4">Animated lines moving in 3D as you scroll</p>
  //         </div>
  //       </div>
  //     </section>
 
     

  );
};


// const canvasRef = useRef(null);
  // const overlayRef = useRef(null);
  // const [zoom, setZoom] = useState(1.0); // Zoom level
  // const [pan, setPan] = useState({ x: 0, y: 0 }); // Pan offsets
  // let isDragging = false;
  // let dragStart = { x: 0, y: 0 };
  // const candleStickWidth = 10; // Width of the candlestick body
  // const padding = 5; // Padding between each candlestick
  // const yRangeMin = 0;
  // const yRangeMax = 1250.25;
  // const [visibleCandleSticks, setVisibleCandleSticks] = useState<CandleStickProps[]>([]);

  //const app = useApp();

  // useEffect(() => {
  //   calculateVisibleCandleSticks();

  //   window.addEventListener('resize', calculateVisibleCandleSticks);

  //   return () => {
  //     window.removeEventListener('resize', calculateVisibleCandleSticks);
  //   };
  // }, []);

  // const calculateVisibleCandleSticks = () => {
  //   // setVisibleCandleSticks([]);
  //   // Assuming window.innerWidth is the width of the visible area and each candlestick (with padding) occupies (candleStickWidth + padding) space
  //   // const numberOfVisibleCandleSticks = Math.floor(window.innerWidth / (candleStickWidth + padding));
  //   // console.log('Number of visible candlesticks:', numberOfVisibleCandleSticks);
  //   // setVisibleCandleSticks(randomCandleSticks.slice(0, numberOfVisibleCandleSticks));
  // };

  // const generateRandomY = () => Math.random() * (yRangeMax - yRangeMin) + yRangeMin;

  // window.addEventListener('resize', (e) => {
  //   //console.log('Window resized', e);
  //   calculateVisibleCandleSticks();
  // });

  // window.addEventListener('mousemove', (e) => {
  //   //console.log('Mouse moved', e);
  // });

  // window.addEventListener('wheel', (e) => {
  //   //console.log('Mouse wheel', e);
  // });

  // const randomCandleSticks = Array.from({ length: 1000 }, (_, index) => ({
  //   wickHigh: { x: index * (candleStickWidth + padding), y: generateRandomY() },
  //   wickLow: { x: index * (candleStickWidth + padding), y: generateRandomY() },
  //   bodyOpen: { x: index * (candleStickWidth + padding), y: generateRandomY() },
  //   bodyClose: { x: index * (candleStickWidth + padding), y: generateRandomY() },
  // }));


// {/* <KLine /> */}
//       {/* <h1>hello</h1> */}

//       {/* <GTChart /> */}
//       {/* <GTChartFunction /> */}


//       {/* <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0x1099bb }}> */}
        

//         {/* {visibleCandleSticks.map((candleStick, index) => (
//           <CandleStick key={index} {...candleStick} />
//         ))} */}

        
        
//         {/* <Rectangle x={50} y={50} width={100} height={100} fill={0x66CCFF} /> */}

//       {/* </Stage> */}
//       {/* <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas> */}
     
//       {/* <GTChart /> */}
//       {/* <MyComponent /> */}
//       {/* <div
//         className="absolute top-0 left-0 w-full h-full bg-red-500/1"
//         ref={overlayRef}
//       // onMouseDown={handleDragStart}
//       // onMouseMove={handleDragging}
//       // onMouseUp={handleDragEnd}
//       // onMouseLeave={handleDragEnd}
//       ></div> */}



interface ProgramInfo {
  program: WebGLProgram | null;
  attribLocations: {
    vertexPosition: number;
  };
}

interface Buffers {
  position: WebGLBuffer | null;
}
// Assuming zoom and pan are part of a transformation state that you pass to drawScene
interface TransformationState {
  zoom: number;
  pan: { x: number, y: number };
}

class MyComponent extends React.Component {
//   (x1, y1)       (x2, y1)
//    +-------------+
//    |           / |
//    |         /   |
//    |       /     |
//    |     /       |
//    |   /         |
//    | /           |
//    +-------------+
// (x1, y2)       (x2, y2)
// To define this rectangle, you need two triangles:

// Triangle 1: (x1, y1), (x2, y1), (x1, y2)
// Triangle 2: (x1, y2), (x2, y1), (x2, y2)

  // Define the vertices for two triangles that form a rectangle
  // const vertices = new Float32Array([
  //   // Triangle 1
  //   x1, y1,
  //   x2, y1,
  //   x1, y2,
  //   // Triangle 2
  //   x1, y2,
  //   x2, y1,
  //   x2, y2,
  //   // Line down the middle extending above and below
  //   (x1 + x2) / 2, y1 - extension, // Top extension point
  //   (x1 + x2) / 2, y2 + extension, // Bottom extension point
  // ]);

  // // Adjust drawArrays call for triangles
  // gl.drawArrays(gl.TRIANGLES, 0, 6);

  // // Assuming you've set up your vertex shader and attribute pointers,
  // // now draw the line
  // // Ensure you switch to the appropriate shader program if it's different
  // // Or adjust the current program to handle both the triangles and line
  // gl.drawArrays(gl.LINES, 6, 2); // Draw the line, starting at index 6, 2 points

//   // Create a buffer and bind it to the ARRAY_BUFFER binding point
//   const vertexBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

// // Pass the vertices data to the buffer
// gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//   // Assuming you've already set up your vertex shader to use `aVertexPosition`
//   const position = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
// gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
// gl.enableVertexAttribArray(position);

// // Draw the rectangle (2 triangles)
// gl.drawArrays(gl.TRIANGLES, 0, 6);


  constructor(props: any) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e: UIEvent) {
    //console.log('Window resized', e);
    // Your resize handling logic here
  }


  handleMouseMove(e: MouseEvent) {
    //console.log('Mouse moved', e);
    // Your mouse move handling logic here
  };



  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return <div>Hello, World!</div>;
  }
}


  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const gl = canvas.getContext('webgl');

  //   if (gl === null) {
  //     alert("Unable to initialize WebGL. Your browser may not support it.");
  //     return;
  //   }

  //   let isDragging = false;
  //   let dragStart = { x: 0, y: 0 };

  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     console.log(e.deltaY);
  //     setZoom(zoom * (e.deltaY > 0 ? 0.9 : 1.1));
  //   };

  //   const handleMouseDown = (e) => {
  //     isDragging = true;
  //     dragStart = { x: e.clientX, y: e.clientY };
  //   };


  //   const handleMouseUp = () => {
  //     isDragging = false;
  //   };

  //   canvas.addEventListener('wheel', handleWheel);
  //   canvas.addEventListener('mousedown', handleMouseDown);
  //   canvas.addEventListener('mousemove', handleMouseMove);
  //   canvas.addEventListener('mouseup', handleMouseUp);
  //   canvas.addEventListener('mouseleave', handleMouseUp);

  //   return () => {
  //     canvas.removeEventListener('wheel', handleWheel);
  //     canvas.removeEventListener('mousedown', handleMouseDown);
  //     canvas.removeEventListener('mousemove', handleMouseMove);
  //     canvas.removeEventListener('mouseup', handleMouseUp);
  //     canvas.removeEventListener('mouseleave', handleMouseUp);
  //   };
  // }, [zoom, pan]);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const gl = canvas.getContext('webgl');

  //   if (gl === null) {
  //     alert("Unable to initialize WebGL. Your browser may not support it.");
  //     return;
  //   }

  //   // Vertex shader program
  //   const vsSource = `
  //     attribute vec4 aVertexPosition;
  //     void main() {
  //       gl_Position = aVertexPosition;
  //     }
  //   `;

  //   // Fragment shader program
  //   const fsSource = `
  //     void main() {
  //       gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);  // Set the color to blue
  //     }
  //   `;

  //   // Initialize a shader program; this is where all the lighting
  //   // for the vertices and so forth is established.
  //   const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  //   // Collect all the info needed to use the shader program.
  //   // Look up which attribute our shader program is using
  //   // for aVertexPosition and look up uniform locations.
  //   const programInfo = {
  //     program: shaderProgram,
  //     attribLocations: {
  //       vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
  //     },
  //   };

  //   // Here's where we call the routine that builds all the
  //   // objects we'll be drawing.
  //   const buffers = initBuffers(gl);

  //   const transformationState = {
  //     zoom,
  //     pan,
  //   };

  //   // Draw the scene
  //   drawScene(gl, programInfo, buffers, transformationState);
  // }, []);


  // const handleDragStart = (e: SyntheticEvent) => {
  //   e.preventDefault();

  // };

  // const handleDragging = (e: SyntheticEvent) => {
  //   isDragging = true;
  //   //dragStart = { x: e.x, y: e.clientY };
  //   console.log("Dragging");
  //   e.preventDefault();

  // };

  // const handleDragEnd = (e: SyntheticEvent) => {
  //   e.preventDefault();
  // };







  // function drawScene(gl: WebGLRenderingContext, programInfo: ProgramInfo, buffers: Buffers, transformationState: TransformationState) {
  //   const { zoom, pan } = transformationState;

  //   gl.clearColor(0.0, 0.0, 0.0, 1.0);
  //   gl.clear(gl.COLOR_BUFFER_BIT);

  //   // New: Calculate transformation based on zoom and pan
  //   const transformationMatrix = new Float32Array([
  //     zoom, 0, 0, 0,
  //     0, zoom, 0, 0,
  //     0, 0, zoom, 0,
  //     pan.x, pan.y, 0, 1
  //   ]);

  //   if (programInfo.program === null) {
  //     return;
  //   }

  //   const uMatrix = gl.getUniformLocation(programInfo.program, 'uMatrix');
  //   if (uMatrix) {
  //     gl.uniformMatrix4fv(uMatrix, false, transformationMatrix);
  //   }

  //   gl.useProgram(programInfo.program);

  //   gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

  //   gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);

  //   // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  //   const numComponents = 2;  // pull out 2 values per iteration
  //   const type = gl.FLOAT;    // the data in the buffer is 32bit floats
  //   const normalize = false;  // don't normalize
  //   const stride = 0;         // how many bytes to get from one set of values to the next
  //   // 0 = use type and numComponents above
  //   const offset = 0;         // how many bytes inside the buffer to start from
  //   gl.vertexAttribPointer(
  //     programInfo.attribLocations.vertexPosition,
  //     numComponents,
  //     type,
  //     normalize,
  //     stride,
  //     offset);

  //   // Set the shader uniforms

  //   // Draw the object
  //   const vertexCount = 3;
  //   gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
  // }

  


    // <div className="flex min-h-screen w-full">
    //   <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    //     <div className="flex h-full max-h-screen flex-col gap-2">
    //       <div className="flex h-[60px] items-center border-b px-6">
    //         <Link className="flex items-center gap-2 font-semibold" href="#">
    //           <Package2Icon className="h-6 w-6" />
    //           <span className="">Acme Inc</span>
    //         </Link>
    //         <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
    //           <BellIcon className="h-4 w-4" />
    //           <span className="sr-only">Toggle notifications</span>
    //         </Button>
    //       </div>
    //       <div className="flex-1 overflow-auto py-2">
    //         <nav className="grid items-start px-4 text-sm font-medium">
    //           <Link
    //             className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
    //             href="#"
    //           >
    //             <HomeIcon className="h-4 w-4" />
    //             Home
    //           </Link>
    //           <Link
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    //             href="#"
    //           >
    //             <UsersIcon className="h-4 w-4" />
    //             Users
    //           </Link>
    //           <Link
    //             className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
    //             href="#"
    //           >
    //             <LineChartIcon className="h-4 w-4" />
    //             Analytics
    //           </Link>
    //           <Link
    //             className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    //             href="#"
    //           >
    //             <SettingsIcon className="h-4 w-4" />
    //             Settings
    //           </Link>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col w-full min-h-screen">
    //     <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
    //       <Link className="lg:hidden" href="#">
    //         <Package2Icon className="h-6 w-6" />
    //         <span className="sr-only">Home</span>
    //       </Link>
    //       <h1 className="font-semibold text-lg md:text-xl">Analytics</h1>
    //       <form className="ml-auto">
    //         <div className="flex items-center rounded-lg bg-white shadow border dark:bg-gray-950">
    //           <SearchIcon className="m-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
    //           <Input
    //             className="w-px flex-1 bg-transparent appearance-none border-0 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400"
    //             placeholder="Search"
    //             type="search"
    //           />
    //         </div>
    //       </form>
    //       <Button className="ml-auto rounded-full" size="icon" variant="outline">
    //         <img
    //           alt="Avatar"
    //           className="rounded-full"
    //           height="32"
    //           src="/placeholder.svg"
    //           style={{
    //             aspectRatio: "32/32",
    //             objectFit: "cover",
    //           }}
    //           width="32"
    //         />
    //         <span className="sr-only">Toggle user menu</span>
    //       </Button>
    //     </header>
    //     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    //       <div className="flex flex-col gap-4">
    //         <div className="grid gap-4">
    //           <Card>
    //             <CardHeader>
    //               <CardTitle>Line Chart</CardTitle>
    //               <CardDescription>A line chart showing the number of visitors over time.</CardDescription>
    //             </CardHeader>
    //             <CardContent className="flex items-center justify-center p-8">
    //               
    //               {/* <LineChart className="w-full aspect-[2/1]" /> */}
    //             </CardContent>
    //           </Card>
    //         </div>
    //         <Card>
    //           <CardHeader>
    //             <CardTitle>Data Table</CardTitle>
    //             <CardDescription>The raw data used to generate the line chart.</CardDescription>
    //           </CardHeader>
    //           <CardContent>
    //             <div className="overflow-auto w-full">
    //               <table className="w-full border-collapse text-left whitespace-nowrap">
    //                 <thead>
    //                   <tr>
    //                     <th className="p-3 font-medium">Date</th>
    //                     <th className="p-3 font-medium">Visitors</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td className="p-3">2023-06-01</td>
    //                     <td className="p-3">100</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-02</td>
    //                     <td className="p-3">150</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-03</td>
    //                     <td className="p-3">200</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-04</td>
    //                     <td className="p-3">250</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-05</td>
    //                     <td className="p-3">300</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-06</td>
    //                     <td className="p-3">350</td>
    //                   </tr>
    //                   <tr>
    //                     <td className="p-3">2023-06-07</td>
    //                     <td className="p-3">400</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  // )
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   )
// }


// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }


// function LineChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }


// function LineChartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 3v18h18" />
//       <path d="m19 9-5 5-4-4-3 3" />
//     </svg>
//   )
// }


// function Package2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }


// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Acme Inc</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#features"
//           >
//             Features
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="/sign-in"
//           >
//             Sign In
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="bg-neutral-100 dark:bg-neutral-800 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     The complete platform <br />
//                     for building the Web
//                   </h1>
//                   <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
//                     Give your team the toolkit to stop configuring and start
//                     innovating. Securely build, deploy, and scale the best web
//                     experiences.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
//                     href="#"
//                   >
//                     Get Started
//                   </Link>
//                   <Link
//                     className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
//                     href="#"
//                   >
//                     Contact Sales
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="features" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
//                   Key Features
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
//                   Faster iteration. More innovation.
//                 </h2>
//                 <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
//                   The platform for rapid progress. Let your team focus on
//                   shipping features instead of managing infrastructure with
//                   automated CI/CD.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
//               <div className="mx-auto aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-xl object-cover object-center sm:w-full lg:order-last" />
//               <div className="flex flex-col justify-center space-y-4">
//                 <ul className="grid gap-6">
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Collaboration</h3>
//                       <p className="text-neutral-500 dark:text-neutral-400">
//                         Make collaboration seamless with built-in code review
//                         tools.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Automation</h3>
//                       <p className="text-neutral-500 dark:text-neutral-400">
//                         Automate your workflow with continuous integration.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Scale</h3>
//                       <p className="text-neutral-500 dark:text-neutral-400">
//                         Deploy to the cloud with a single click and scale with
//                         ease.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
//                   Sign Up for Updates
//                 </h2>
//                 <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
//                   Stay updated with the latest product news and updates.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
//                   <input
//                     className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
//                     placeholder="Enter your email"
//                     type="email"
//                   />
//                   <button
//                     type="submit"
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
//                   >
//                     Sign Up
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-neutral-500 dark:text-neutral-400">
//           © 2024 Acme Inc. All rights reserved.
//         </p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   );
// }

// function MountainIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }





// function BarChartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="20" y2="10" />
//       <line x1="18" x2="18" y1="20" y2="4" />
//       <line x1="6" x2="6" y1="20" y2="16" />
//     </svg>
//   )
// }


// function DollarSignIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   )
// }


// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function TrendingUpIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//       <polyline points="16 7 22 7 22 13" />
//     </svg>
//   )
// }

