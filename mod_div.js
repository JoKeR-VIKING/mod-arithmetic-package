import mod_inv from './mod_inv.js';

export default (a, b, MOD=1000000007) => {
	return Number((BigInt(a) % BigInt(MOD) * BigInt(mod_inv(BigInt(b), BigInt(MOD)) % BigInt(MOD))) % BigInt(MOD));
};