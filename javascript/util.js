var inst;
const timeout = 600;

const largeConstant = new BigNumber("1000000000000000000000000")

const players = {};
const rewards = {};
const contractInfo = { invested: new BigNumber(0) };
const transactions = {};
const errors = {};

const e = React.createElement; 
const ee = (tag,...children) => React.createElement(tag,null,...children); 

function toETH(x) {
    return web3.fromWei(x, "ether");
}
function toWei(x) {
    return web3.toWei(x, "ether");
}

function interpolate(v, rgb1, rgb2) {
    var rgb = [0,0,0];
    var p = v; 
    p = Math.max(0,p);
    p = Math.min(1,p);
    for (var i = 0; i < 3; i++) {
        rgb[i] = Math.floor(rgb1[i] * (1.0 - p) + rgb2[i] * p);
    }
    return rgb;
}

function color2(secondsAgo) {
    var red = [255,60,60]
    var green = [60,255,60]
    var yellow = [255,255,0]
    var p = secondsAgo / timeout;
    
    p = Math.max(0,p)
    p = Math.min(1,p)
    
    var rgb;
    
    if (p < 0.5)
        rgb = interpolate(p*2, red, yellow);
    else
        rgb = interpolate((p-0.5)*2, yellow, green);
        
    return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}
