function secondsToHours(total) {
    const hours = Math.floor(total / 3600)
    const r1 = total % 3600
    const minutes = Math.floor(r1 / 60)
    const seconds = r1 % 60
    
    if (hours > 0)
        return hours + "h" + minutes + "m" + seconds + "s";
    else if (minutes > 0)
        return minutes + "m" + seconds + "s";
    else
        return seconds + "s";
}

function Player(props) {
    const now = new Date().getTime() / 1000;
    const lp = props.lastPing ? props.lastPing.toNumber() : 0;
    
    
    const timeLeft = lp + timeout - now;
    const pokeButton = timeLeft >= 0 ? 
        "in " + secondsToHours(timeLeft.toFixed(0)) : 
        Poke({
            poker: props.currentAddress,
            pokee: props.address
        });
    const trStyle = {
        lineHeight: "27px",
        backgroundColor: color2(timeLeft)
    }
        
    return  e('tr',
                {key: props.address, style: trStyle },
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
    const tableStyle = {
        marginTop: "10px",
        fontSize: tableSize
    }
    const trStyle = {
        fontWeight: "bold",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderRadius: "10px 10px 10px 10px"
    }
    const tdStyle = {
        style: {
            paddingRight: "5px",
            paddingLeft: "5px"
        }
    }
    
    
    if (addresses.length > 0) 
        return  e('div', {id: 'players', style: tableStyle }, 
                    ee('table',
                        ee('thead',
                            ee('tr',
                                e('td', tdStyle, 'Address'),
                                e('td', tdStyle, 'Balance (eth)'),
                                e('td', tdStyle, 'Poke')
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
                            e('tr',{ style: trStyle },
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
