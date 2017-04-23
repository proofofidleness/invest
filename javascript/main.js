function initialize() {
        
    var Web3 = require('web3');

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log("Connecting to local node.");
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }

    inst = web3.eth.contract([{"constant":true,"inputs":[],"name":"largeConstant","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"idle","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimRewards","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastPing","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"countParticipants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cumulativeRatios","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"divest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"poke","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"a","type":"address"}],"name":"getReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"invested","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"invest","outputs":[],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]).at("0x9a7e4083b7675376124884e91e63d1d36cbda8ba")
    // metronome RC1 on ropsten (revival)
    
    setInterval( () => refresh(), 500);
}
