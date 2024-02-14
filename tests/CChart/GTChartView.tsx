import React, { createContext, useContext, useState, Component, useEffect } from 'react';
import { CandleStickGraphic, CandleStickProps, Point } from './classes/CandleStickGraphic';
interface ChartContextType {
    visibleRange: { start: number; end: number };
    mouseX: number;
    mouseY: number;
    windowHeight: number;
    windowWidth: number;
    dataSeriesMinMax: { min: number; max: number };
    maxNumLabelsXAxis: number;
    maxNumLabelsYAxis: number;
    maxNumBars: number;
    minSpritePxWidth: number;
    zoom: number;
    pan: { x: number; y: number };
    offset: { x: number; y: number };
    visibleCandlestickProps: CandleStickProps[]

    updateContext: (newValues: Partial<ChartContextType>) => void;
    updateMousePosition: (x: number, y: number) => void;
    setWindowDimensions: (width: number, height: number) => void;
}

const defaultContextValue: ChartContextType = {
    visibleRange: { start: 0, end: 0 },
    mouseX: 0,
    mouseY: 0,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    dataSeriesMinMax: { min: 0, max: 0 },
    maxNumLabelsXAxis: 0,
    maxNumLabelsYAxis: 0,
    maxNumBars: 0,
    minSpritePxWidth: 0,
    zoom: 1,
    pan: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    visibleCandlestickProps: [],

    updateContext: () => { },
    updateMousePosition: () => { },
    setWindowDimensions: () => { },

};

const ChartContext = createContext<ChartContextType>(defaultContextValue);

export const useChartContext = () => useContext(ChartContext);

export const ChartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [contextValue, setContextValue] = useState<ChartContextType>(defaultContextValue);

    const updateContext = (newValues: Partial<ChartContextType>) => {
        console.log('Context updated', newValues);
        setContextValue(prev => ({ ...prev, ...newValues, }));
    }; 

    const updateMousePosition = (x: number, y: number) => {
        console.log('Mouse moved func', x, y);
        setContextValue(prev => ({ ...prev, mouseX: x, mouseY: y }));
    };

    const setWindowDimensions = (width: number, height: number) => {
        console.log('Window resized func', width, height);
        setContextValue(prev => ({ ...prev, windowWidth: width, windowHeight: height }));
    }

    const value = {
        ...contextValue,
        updateContext,
        updateMousePosition,
        setWindowDimensions,
    };

    return (
        <ChartContext.Provider value={value}>
            {children}
        </ChartContext.Provider>
    );
};


const GTChartFunction = () => {


    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    const { updateMousePosition, updateContext, windowWidth, windowHeight, setWindowDimensions, mouseX, mouseY } = useChartContext();

    useEffect(() => {
        if (canvasRef.current) {
            console.log('Canvas ref', canvasRef.current);
            const gl = canvasRef.current.getContext('webgl2');

            if (!gl) {
                console.error('Unable to initialize WebGL. Your browser may not support it.');
                if (canvasRef.current?.getContext('webgl1') == null) {
                    console.error('WebGL 1 not supported');
                    return;
                }
            } else {
                console.log('WebGL 2 supported');
            }
            canvasRef.current.addEventListener('mousemove', (event: MouseEvent) => {
                // const mouseEvent = event as React.MouseEvent<HTMLCanvasElement>;
                // onMouseMove(mouseEvent);
            });

            window.addEventListener('resize', (event) => {
                setWindowDimensions(window.innerWidth, window.innerHeight);
                console.log('Canvas resized', e);
            });
            
            // Define your shader sources
            const vsSource = `
                attribute vec4 aVertexPosition;
                void main() {
                    gl_Position = aVertexPosition;
                }
            `;
            const fsSource = `
                void main() {
                    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
                }
            `;
        }
    }, [canvasRef.current, updateMousePosition, updateContext, windowWidth, windowHeight, setWindowDimensions, mouseX, mouseY]);

    const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        console.log('Mouse moved', e.clientX, e.clientY);
        updateMousePosition(e.clientX, e.clientY);
    }

    window.addEventListener('resize', (e) => {
        //console.log('Window resized', e);
        //calculateVisibleCandleSticks();
        //console.log('Window resized', e.view?.innerWidth!);
        if (e.view == null) {
            console.error('Window view is null');
            return;
        } else {
            let width = e.view.innerWidth!;
            let height = e.view.innerHeight!;

            console.log('Window resized', width, height);
            updateContext({ windowWidth: width, windowHeight: height });

        }


        
        // setWindowDimensions(e.view?.innerWidth!, e.view?.innerHeight!);
        //chartContext.windowWidth = e.view?.innerWidth!;
        //chartContext.windowHeight = e.view?.innerHeight!;
    });

        

    // window.addEventListener('mousemove', (e) => {
    //     //console.log('Mouse moved', e.clientX, e.clientY);
    //     updateMousePosition(e.clientX, e.clientY);
    // });

    window.addEventListener('wheel', (e) => {
        //console.log('Mouse wheel', e);
        //zoomChart(e.deltaY);
    });

    // const { windowWidth, windowHeight } = useChartContext();

    return (
        <ChartProvider>
            
            <div className='w-screen h-screen bg-slate-800'>
                <h1>{mouseX}-{mouseY}</h1>
                <div className='flex w-full bg-purple-500'>{mouseX}</div>
                <canvas ref={canvasRef} width={windowWidth} height={windowHeight}></canvas>
            </div>
        </ChartProvider>
    );
}

export default GTChartFunction;