import { RoundProgressEase } from 'round-progress';
export declare class DemoComponent {
    private _ease;
    current: number;
    max: number;
    stroke: number;
    radius: number;
    semicircle: boolean;
    rounded: boolean;
    responsive: boolean;
    clockwise: boolean;
    color: string;
    background: string;
    duration: number;
    animation: string;
    animationDelay: number;
    animations: string[];
    gradient: boolean;
    realCurrent: number;
    constructor(_ease: RoundProgressEase);
    increment(amount?: number): void;
    getOverlayStyle(): {
        'top': string;
        'bottom': string;
        'left': string;
        'transform': string;
        '-moz-transform': string;
        '-webkit-transform': string;
        'font-size': string;
    };
}
