import mod_mul from './mod_mul.js';

export default (a, b, MOD=1000000007) => {
	a = BigInt(a);
	b = BigInt(b);
	MOD = BigInt(MOD);

	let ans = BigInt(1);

	while (b > 0) {
		if (b % BigInt(2)) {
			ans = mod_mul(ans, a, MOD);
			b--;
		}
		else {
			a = mod_mul(a, a, MOD);
			b /= BigInt(2);
		}
	}

	return Number(ans);
};