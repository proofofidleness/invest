var trid = 0;
var errorid = 0;

function appendErrorMessage(err) {
    if (err) {
        const thisid = errorid
        errorid = errorid + 1
        errors[thisid] = err
        setTimeout(function() {
            delete errors[thisid]
        }, 10000)
    }
}

function reporting(desc,err,txid) {
    if (txid)
        transactions[txid] = { desc: desc }

    appendErrorMessage(err)
}

function idle(address) {
    const desc = "idle() from " + address
    
    inst.idle.sendTransaction({from: address, gas: 300000, gasPrice: gasPrice}, function(error,txid) {
        reporting(desc,error,txid)
    })
}


function invest(address,amount) {
    const desc = "invest(" + amount + ") from " + address
    
    inst.invest.sendTransaction({from: address, value: amount, gas: 300000, gasPrice: gasPrice}, function(error,txid) {
        reporting(desc,error,txid)
    })
}

function divest(address,amount) {
    const desc = "divest(" + amount + ") from " + address
    
    inst.divest.sendTransaction(amount, {from: address, gas: 300000, gasPrice: gasPrice}, function(error,txid) {
        reporting(desc,error,txid)
    })
}

function poke(poker, pokee) {
    const desc = "poke(" + pokee + ") from " + poker
    
    inst.poke.sendTransaction(pokee, {from: poker, gas: 300000, gasPrice: gasPrice}, function(error,txid) {
        reporting(desc,error,txid)
    })
}

function claimRewards(address) {
    const desc = "claimRewards() from " + address

    inst.claimRewards.sendTransaction({from: address, gas: 300000, gasPrice: gasPrice}, function(error,txid) {
        reporting(desc,error,txid)
    })
}
