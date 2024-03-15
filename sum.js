const theSum = (...numbers) => numbers.reduce((pv, cv) => pv + cv, 0);

module.exports = theSum;