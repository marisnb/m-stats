
  
# m-stats 
Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data.

> This module provides functions for statistical data analysis.  
  
![enter image description here](https://img.shields.io/badge/npm-1.0.4-blue.svg) ![enter image description here](https://img.shields.io/badge/license-MIT-blue.svg) ![enter image description here](https://img.shields.io/badge/coverage-100%25-green.svg) ![enter image description here](https://img.shields.io/github/issues/marisnb/m-stats)   ![enter image description here](https://img.shields.io/snyk/vulnerabilities/github/marisnb/m-stats)  
  
## Getting Started  
  
### Installation  

     npm install @marisnb/m-stats --save

## How to use  
  
### Integration  
  

     const stats =  require('@marisnb/m-stats');  

 
## API  Documentation  

### stats.min(data) 
Returns the **min** value in a given data.

     stats.min([])  ===  0 
     stats.min([-1])  ===  -1 
     stats.min([-1, 3, 5, -1])  ===  -1
     stats.min([-1, 3, 5, 7, 5, 5, -2])  ===  -2
     stats.min([0, 7, 3, 5, 4, 4, 4, 3, 32])  ===  0  
     
     
### stats.max(data) 
Returns the **max** value in a given data.

     stats.max([])  ===  0 
     stats.max([-1])  ===  -1 
     stats.max([-1, 3, 5, -1])  ===  5
     stats.max([-1, 3, 5, 7, 5, 5, -2])  ===  7
     stats.max([0, 7, 3, 5, 4, 4, 4, 3, 32])  ===  32  
     
### stats.sum(data) 
**Sum** of all values

     stats.sum([])  ===  0 
     stats.sum([-1])  ===  -1 
     stats.sum([-1, 3, 5, -1])  ===  6
     stats.sum([-1, 3, 5, 7, 5, 5, 7])  ===  31
     stats.sum([-1, 7, 3, 5, 4, 4, 4, 3, -1])  ===  28  
     
### stats.avg(data) 
Returns the **avg** value in a given data.

     stats.avg([])  ===  NaN 
     stats.avg([-1])  ===  -1 
     stats.avg([-1, 3, 5, -1])  ===  1.5
     stats.avg([-1, 3, 5, 7, 5, 5, -2])  ===  3.14
     stats.avg([0, 7, 3, 5, 4, 4, 4, 3, 32])  ===  6.89  
     
### stats.mode(data)  
**Mode** is the most common value among the given observations. For example, a person who sells ice creams might want to know which flavour is the most popular.  

     stats.mode([])  ===  NaN 
     stats.mode([-1])  ===  -1 
     stats.mode([-1, 3, 5, -1])  ===  -1 
     stats.mode([-1, 3, 5, 7, 5, 5, 7])  ===  5 
     stats.mode([-1, 7, 3, 5, 4, 4, 4, 3, -1, 3])  ===  3  

### stats.range(data)  
  The **range** of a set of data is the difference between the highest and lowest values in the set. For example, Cheryl took 7 math tests in one marking period. What is the range of her test scores?
  
     stats.range([])  ===  NaN 
     stats.range([-1])  ===  -1 
     stats.range([-1, 3, 5, -2])  ===  7 
     stats.range([-1, 3, 5, 7, 5, 5, -7])  ===  14 
     stats.range([-1, 7, 3, 5, 4, 4, 4, 3, -1, 3])  ===  8  

  
### stats.mean(data)  
  **Mean**  is the average of all the values. For example, a teacher may want to know the average marks of a test in his class.
  
     stats.mean([])  ===  NaN 
     stats.mean([-1])  ===  -1 
     stats.mean([-1,  2,  3,  4,  4])  ===  2.4 
     stats.mean([-1,  2.5,  3.25,  5.75])  ===  2.625  

### stats.median(data)  
  **Median** is the middle value, dividing the number of data into 2 halves. In other words, 50% of the observations is below the median and 50% of the observations is above the median.

     stats.median([])  ===  NaN 
     stats.median([-1])  ===  -1 
     stats.median([-1,  3,  5])  ===  3 
     stats.median([-1,  3,  5,  7])  ===  4
     stats.median([-1,  7,  3,  5,  4])  ===  4
     
### stats.variance(data)  
  **variance** is the expectation of the squared deviation of a random variable from its mean.

     stats.variance([])  ===  NaN 
     stats.variance([7])  ===  0 
     stats.variance([1, 2, 4, 5, 7, 11])  ===  11 
     stats.variance([3, 21, 98, 203, 17, 9])  ===  5183.25
     stats.variance([3, 4, 4, 5, 6, 8])  ===  2.67
     
### stats.standardDeviation(data)  
   the **standard deviation** is a measure of the amount of variation or dispersion of a set of values.

     stats.standardDeviation([])  ===  NaN 
     stats.standardDeviation([7])  ===  0 
     stats.standardDeviation([1, 2, 4, 5, 7, 11])  ===  3.32 
     stats.standardDeviation([3, 21, 98, 203, 17, 9])  === 71.99
     stats.standardDeviation([3, 4, 4, 5, 6, 8])  ===  1.63
 
### stats.harmonicMean(data)  
   the **harmonic mean** is one of several kinds of average, and in particular one of the Pythagorean means.

     stats.harmonicMean([])  ===  NaN 
     stats.harmonicMean([7])  ===  7 
     stats.harmonicMean([1, 2, 4])  ===  1.71 
     stats.harmonicMean([-1, 3, 5, 7, 5, 5, -2])  === -16.52
     stats.harmonicMean([600, 470, 430, 300, 170])  ===  326.04
     
## Running Tests

To run the test suite first install the development dependencies:

    npm install

then run the tests:

    npm test
## License

[MIT](https://github.com/marisnb/m-stats/blob/master/LICENSE)
