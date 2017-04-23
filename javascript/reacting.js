function PlayerInformation(props) {
    const a = props.currentAddress;
    const p = props.currentPlayer;
    const owed = ((props.cumulativeRatios - p.lastRewards) * p.balance) / largeConstant
    
    return  e('div', {id: 'currentPlayer'},
                "Enter your address: ",
                e('input', {id: 'currentAddress', defaultValue: "0x0", type: "text", style: { width: 300 }}),
                e('p', null, "Balance: " + p.balance + " ETH"),
                InvestButton({address: a}),
                DivestButton({address: a}),
                IdleButton({address: a}),
                ClaimRewards({owed: owed, address: a})
            );     
}

function OneError(props) {
    return e('tr',
                { key: props.errid },
                ee('td',props.msg.toString())
           );
}

function ErrorReport(props) {
    if (Object.keys(props.errors).length > 0) {
        return e('div', {id: 'errors'},
                    e('table', { style: { marginBottom: 40 } },
                        ee('thead',
                            ee('tr',
                                ee('td',"Error Messages")
                            )
                        ),
                        ee('tbody',
                            Object.keys(props.errors).slice(-5).map(errid =>
                                OneError({errid: errid, msg: props.errors[errid] })
                            )
                        )
                    )
        );
    }
    else {
        return e('div', {id: 'errors'})
    }
}

function Transaction(props) {
    return  e('tr',
                {key: props.txid},
                e('td', { style: { paddingRight: "10px", paddingLeft: "10px" }},props.txid),
                e('td', { style: { paddingRight: "10px", paddingLeft: "10px" }},props.desc)
            );
}

function Transactions(props) {
    if (Object.keys(props.transactions).length > 0) {
        return  e('table', { style: { marginTop: 40 } },
                ee('thead',
                    ee('tr',
                        ee('td',"Pending Transaction"),
                        ee('td',"Description")
                    )
                ),
                ee('tbody',
                    Object.keys(props.transactions).map(tr => Transaction({key: tr, txid: tr, desc: props.transactions[tr].desc }))
                )
            );
    } else
        return;
}
