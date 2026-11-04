console.log(process.version);
console.log(process.platform);

const nm = process.argv[2];
console.log("Hello " + nm);

console.log(__filename);
console.log(__dirname);