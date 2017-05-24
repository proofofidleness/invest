function getPlayerData(i) {
    inst.participants(i, function(error,address) {
        appendErrorMessage(error)
        if (address && !(address in players))
            players[address] = { address: address }
        
        inst.lastPing(address, function(error,lp) {
            appendErrorMessage(error)
            if (lp)
                players[address].lastPing = lp
        });
        inst.balanceOf(address, function(error,balance) {
            appendErrorMessage(error)
            if (balance) 
                players[address].balance = toETH(balance)
        });
        inst.lastRewards(address, function(error,lr) {
            appendErrorMessage(error)
            if (lr)
                players[address].lastRewards = lr
        });
    })
}

function refreshTransactions() {
    Object.keys(transactions).forEach(function(txid) {
        web3.eth.getTransaction(txid, function(error,tx) {
            if (tx && tx.blockNumber)
                delete transactions[txid]
        })
    })
}


function refresh() {
    const inputField = document.getElementById('currentAddress');
    const currentAddress = inputField != null ? inputField.value : "0x0";
    const defaultPlayer = { balance: 0 };
    const currentPlayer = currentAddress in players ? players[currentAddress]: defaultPlayer;
    
    refreshContractInfo();
    refreshPlayers();
    refreshTransactions();
    
    const gameComponent = Game({
        players: players,
        contractInfo: contractInfo,
        cumulativeRatios: contractInfo.cumulativeRatios,
        currentPlayer: currentPlayer,
        currentAddress: currentAddress,
        transactions: transactions,
        errors: errors
    });
    
    ReactDOM.render(gameComponent, document.getElementById('root'));
}



function Game(props) {
    const gameStyle = {
        fontSize: headerSize
    }
    
    return  e('div', { style: gameStyle },
                ErrorReport({ errors: props.errors }),
                PlayerInformation({ cumulativeRatios: props.cumulativeRatios, currentPlayer: props.currentPlayer, currentAddress: props.currentAddress }),
                Players({ invested: props.contractInfo.invested, cumulativeRatios: props.contractInfo.cumulativeRatios, currentAddress: props.currentAddress, players: props.players }),
                Transactions({ transactions: props.transactions })
            );
}


function refreshContractInfo() {
    inst.invested(function(error,result) {
        appendErrorMessage(error)
        if (result != null)
            contractInfo['invested'] = result;
    })
    inst.countParticipants(function(error,result) {
        appendErrorMessage(error)
        if (result != null)
            contractInfo['countParticipants'] = result.toString(10);
    })
    inst.cumulativeRatios(function(error,result) {
        appendErrorMessage(error)
        if (result != null)
            contractInfo['cumulativeRatios'] = result;
    })
}


function refreshPlayers() {
    const n = contractInfo['countParticipants'];
    for (var i = 0; i < n; i++) {
        getPlayerData(i);
    }
}
