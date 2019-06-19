/* jshint bitwise: false */

'use strict';

const mode = (data) => {
    const list = data.reduce((a, b) => { a[b] = 1 + a[b] || 1;return a }, {});

    return parseInt(Object.keys(list).sort((a, b) => list[b] - list[a])[0]);
};

const range = (data) => {
    data = data.sort((a, b) =>  a - b);

    return data.length === 1 ? data[0] : data[data.length - 1] - data[0];
};

const mean =  (data) => {
    return data.reduce((a, b) => a + b, 0) / data.length;
};

const median = (data) => {
    data = data.sort((a, b) =>  a - b);

    const middle = (data.length / 2) | 0;

    if (data.length % 2) {
        return data[middle];
    }

    return (data[middle - 1] + data[middle]) / 2;
};


exports.mode = mode;
exports.range = range;
exports.mean   = mean;
exports.median = median;
