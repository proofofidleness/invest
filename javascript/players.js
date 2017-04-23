function Player(props) {
    const now = new Date().getTime() / 1000;
    const lp = props.lastPing ? props.lastPing.toNumber() : 0;
    
    
    const timeLeft = lp + timeout - now;
    const pokeButton = timeLeft >= 0 ? 
        "in " + timeLeft.toFixed(0) + "s" : 
        Poke({
            poker: props.currentAddress,
            pokee: props.address
        });
        
    return  e('tr',
                {key: props.address, style: {backgroundColor: color2(timeLeft)}},
                e('td',{ style: { paddingRight: "10px", paddingLeft: "10px" }},props.address),
                e('td',{ style: { paddingRight: "10px", paddingLeft: "10px" }},props.balance.toString(10)),
//                 e('td',{ style: { paddingRight: "10px", paddingLeft: "10px" }},props.lastRewards.div(largeConstant).toString(10)),
//                 e('td',{ style: { paddingRight: "10px", paddingLeft: "10px" }},toETH(inst.getReward(props.address)).toString(10)),
                e('td',{ style: { paddingRight: "10px", paddingLeft: "10px" }},pokeButton)
            );
}

function sum(l) {
    if (l.length > 0) {
        var r = l[0]
        for (var i = 1; i < l.length; i++) {
            r = r.plus(l[i])
        }
        return r
    }
    else
        return 0
}

function Players(props) {
    
    const addresses = Object.keys(props.players);
    const ps = props.players;
    const s = sum(addresses.map(address => inst.getReward(address)))
    
    if (addresses.length > 0) 
        return  e('div', {id: 'players', style: { marginTop: "10px" }}, 
                    ee('table',
                        ee('thead',
                            ee('tr',
                                ee('td', 'Address'),
                                ee('td','Balance (eth)'),
//                                 ee('td','LastRewards'),
//                                 ee('td','getReward'),
                                ee('td','Poke')
                            )
                        ),
                        ee('tbody',addresses.map(address => 
                            Player({
                                currentAddress: props.currentAddress,
                                address: address,
                                balance: ps[address].balance,
                                lastRewards: ps[address].lastRewards,
                                lastPing: ps[address].lastPing
                            })
                        ),
                            e('tr',{ style: { fontWeight: "bold" }},
                                ee('td', 'Total'),
                                ee('td', toETH(props.invested).toString(10)),
//                                 ee('td', props.cumulativeRatios.div(largeConstant).toString(10)),
//                                 ee('td', toETH(s).toString(10)),
                                ee('td')
                            )
                        )
                    )
                );
}
