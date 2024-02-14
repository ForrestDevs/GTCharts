
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { init, dispose, Chart } from 'klinecharts';
import { CandleTooltipCustomCallbackData } from "tests/GTChart/common/Styles";
import { TooltipShowRule, TooltipShowType } from "tests/GTChart/index";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import FileInput from "@/components/ui/FileInput";
import {generatedDataList, parseFileContent } from "@/app/generatedDataList";

function getTooltipOptions(candleShowType: TooltipShowType, candleShowRule: TooltipShowRule, indicatorShowRule: TooltipShowRule) {
    return {
        candle: {
            tooltip: {
                showType: candleShowType,
                showRule: candleShowRule,
                custom: (data: CandleTooltipCustomCallbackData) => {
                    const { prev, current } = data
                    const prevClose = (prev?.close ?? current.open)
                    const change = (current.close - prevClose) / prevClose * 100
                    return [
                        { title: 'open', value: current.open.toFixed(2) },
                        { title: 'close', value: current.close.toFixed(2) },
                        {
                            title: 'Change: ',
                            value: {
                                text: `${change.toFixed(2)}%`,
                                color: change < 0 ? '#EF5350' : '#26A69A'
                            }
                        }
                    ]
                }
            }
        },
        indicator: {
            tooltip: {
                showRule: indicatorShowRule
            }
        }
    }
}

export default function KLine() {
    const chart = useRef<Chart | null>(null);
    const [candleShowType, setCandleShowType] = useState('standard')
    const [candleShowRule, setCandleShowRule] = useState('always')
    const [indicatorShowRule, setIndicatorShowRule] = useState('always')

    useEffect(() => {
        chart.current = init('chart')
        chart.current?.createIndicator('MA', false, { id: 'candle_pane' })
        // chart.current?.createIndicator('KDJ', false, { height: 80 })
        // chart.current?.createIndicator()
        chart.current?.applyNewData(generatedDataList())
        return () => { dispose('tooltip-k-line') }
    }, [])

    useEffect(() => {
        chart.current?.setStyles(getTooltipOptions(
            candleShowType as TooltipShowType, candleShowRule as TooltipShowRule, indicatorShowRule as TooltipShowRule
        ))
    }, [candleShowType, candleShowRule, indicatorShowRule])

    const handleContentRead = (fileContent: string) => {
        // Here, you can call your parse function and then update the chart
        const parsedData = parseFileContent(fileContent);
        chart.current?.applyMoreData(parsedData)
    };

    return (
        <div>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel>
                            <div><FileInput onContentRead={handleContentRead} /></div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel>
                            <div className="flex flex-col">
                                <h3>Number of bars: {chart.current?.getDataList().length}</h3>
                                <h3>{ }</h3>
                                <h3>{ }</h3>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>

                <ResizableHandle />



                <ResizablePanel>
                    <div className="h-screen m-3 bg-slate-800"><div id="chart" className="w-full h-screen pb-4" /></div>
                </ResizablePanel>
            </ResizablePanelGroup>

            <div id="chart" style={{ width: 600, height: 600 }} />
        </div>
    );
}