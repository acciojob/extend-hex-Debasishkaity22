const extendHex = (shortHex) => {
  // write your code here
	shortHex=shortHex.replace(/^#/,"");
	// shortHex=shortHex.toLowerCase();	
	let fullHex=shortHex
	 .split('')
    .map(e=>e.repeat(2))
    .join('');
	return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
