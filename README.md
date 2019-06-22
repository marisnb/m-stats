
  
# m-stats 
Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data.

> This module provides functions for statistical data analysis.  
  
![enter image description here](https://img.shields.io/badge/npm-1.0.0-blue.svg) ![enter image description here](https://img.shields.io/badge/license-MIT-blue.svg) ![enter image description here](https://img.shields.io/badge/coverage-100%25-green.svg)  
  
## Getting Started  
  
### Installation  

     npm install m-stats --save

## How to use  
  
### Integration  
  

     const stats =  require('m-stats');  

 
## API  Documentation  
  
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
## Running Tests

To run the test suite first install the development dependencies:

    npm install

then run the tests:

    npm test
## License

[MIT](https://github.com/marisnb/m-stats/blob/master/LICENSE)