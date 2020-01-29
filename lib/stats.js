/* jshint bitwise: false */

'use strict';

const min = data => data.length !== 0?Math.min(...data):0;

const max = data => data.length !== 0?Math.max(...data):0;

const sum = (data) => {
    return data.length > 0 ? data.reduce((a, b) => a + b) : 0;
};

const avg = data => data.reduce((a,b) => a + b, 0) / data.length;

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

const variance = (data) => {
    const variances = [];
    for (const value of data) {
        const variance = value - mean(data);
        variances.push(variance * variance);
    }
    return mean(variances);
};

const standardDeviation = (data) => {
    return Math.sqrt(variance((data)));
};

const harmonicMean = (data) => {
    return data.length/data.reduce((a, b) => a + (1/b), 0);
};

exports.min = min;
exports.max   = max;
exports.avg = avg;

exports.sum = sum;
exports.mode = mode;
exports.range = range;
exports.mean   = mean;
exports.median = median;

exports.variance = variance;
exports.standardDeviation = standardDeviation;
exports.harmonicMean = harmonicMean;

