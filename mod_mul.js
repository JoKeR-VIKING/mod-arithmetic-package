export default (a, b, MOD=1000000007) => {
	return Number((BigInt(a) % BigInt(MOD) * BigInt(b) % BigInt(MOD)) % BigInt(MOD));
};