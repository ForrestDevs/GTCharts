import { PixiComponent } from '@pixi/react';
import { Graphics } from 'pixi.js';

export interface Point {
    x: number;
    y: number;
}

export interface CandleStickProps {
    wickHigh: Point;
    wickLow: Point;
    bodyOpen: Point;
    bodyClose: Point;
}

export const CandleStickGraphic = PixiComponent<CandleStickProps, Graphics>('CandleStick', {
    create: () => new Graphics(),
    applyProps: (ins, _, props) => {
        // Clear the graphic
        ins.clear();
        // Define the candlestick body width and color
        const bodyWidth = 10; 
        const halfBodyWidth = bodyWidth / 2;
        const bodyColor = props.bodyOpen.y > props.bodyClose.y ? 0xFF0000 : 0x00FF00; 
        // Position the candlestick body
        const wickX = props.wickHigh.x;
        const bodyX = wickX - halfBodyWidth;
        const bodyHeight = Math.abs(props.bodyOpen.y - props.bodyClose.y);
        const bodyY = Math.min(props.bodyOpen.y, props.bodyClose.y);
        // Draw the candlestick wick
        ins.lineStyle(1, 0x000000, 1);
        ins.moveTo(wickX, props.wickHigh.y);
        ins.lineTo(wickX, props.wickLow.y);
        // Draw the candlestick body
        ins.lineStyle(1, bodyColor, 1);
        ins.beginFill(bodyColor);
        ins.drawRect(bodyX, bodyY, bodyWidth, bodyHeight);
        ins.endFill();
    },
});