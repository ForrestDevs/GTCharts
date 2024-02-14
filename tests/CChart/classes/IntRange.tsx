interface GTRange {
    start: number;
    end: number;
}

class IntRange {
    private range: GTRange;

    constructor(end: number);
    constructor(start: number, end: number);
    constructor(startOrEnd: number, end?: number) {
        this.range = {
            start: end === undefined ? 0 : startOrEnd,
            end: end === undefined ? startOrEnd : end,
        };

        if (this.range.start > this.range.end) {
            throw new Error("Start of range must be less than or equal to end of range.");
        }
    }

    // Check if a number is within the range
    contains(value: number): boolean {
        return value >= this.range.start && value <= this.range.end;
    }

    // Example method to get the length of the range
    length(): number {
        return this.range.end - this.range.start + 1;
    }

    // Getter for the start and end of the range
    getRange(): GTRange {
        return this.range;
    }
}