function fibonacci(num) {
// your code here

	let fTerm = 0, lTerm = 1, i = 3, nthTerm;
	while (i <= num) {
		nthTerm = fTerm + lTerm;
		fTerm = lTerm;
		lTerm = nthTerm;
		i++;
	}
	return num > 2 ? nthTerm : num - 1;
}

module.exports = fibonacci;
