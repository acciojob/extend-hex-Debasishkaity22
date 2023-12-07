const extendHex = (shortHex) => {
  // write your code here
	
	shortHex=shortHex.replace("#","");
	if(shortHex.charAt(0)>="A" && shortHex.charAt(0)<="Z"){
		shortHex=shortHex.toUpperCase();
	}
	let fulHex=shortHex.split("");
	let fulhex1=fulHex.map(e=>e.repeat(2));
	fulhex1=fulhex1.join('');
	fulhex1="#"+fulhex1;
	return fulhex1;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));



