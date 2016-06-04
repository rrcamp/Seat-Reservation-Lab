function primes(n) {
	var primes = [];

	for(var i = 2; i <= n; i++){
		while(n % i === 0){
			primes.push(i);
			n /= i;  //  n = n / i;
		}
	}

	return primes;

}

console.log(primes(16));
console.log(primes(9));
console.log(primes(234987973));