import mod_pow from './mod_pow.js';

export default (a, MOD=1000000007) => {
	return Number(BigInt(mod_pow(BigInt(a), BigInt(MOD - 2), BigInt(MOD))));
};