function Poke(props) {
    
    const pokeStyle = {
        backgroundColor: "rgb(255,200,200)",
        borderRadius: "10px 10px 10px 10px",
        fontSize: tableSize,
        border: "none"
    }
    
    return  e('button',
                { 
                    onClick: () => poke(props.poker, props.pokee),
                    style: pokeStyle
                },
                "Poke"
             );
}

function ClaimRewards(props) {
    
    const claimButtonStyle = {
        marginLeft: tableSize,
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: "rgb(200,200,240)",
        fontSize: headerSize
    }
    
    if (props.owed > 0)
        return  e('div',null,
                    ee('p', 
                        "You can claim " + props.owed + " ETH  ",
                        e('button', { 
                            onClick: () => claimRewards(props.address),
                            style: claimButtonStyle
                        }, "Claim")
                    )
        );
}

function InvestButtons(props) {
    const balanceStyle = {
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: "rgb(200,200,240)",
        padding: "5px",
        marginRight: tableSize,
        fontSize: headerSize
    }
    const investButtonStyle = {
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: "rgb(200,200,240)",
        marginRight: "10px",
        fontSize: headerSize
    }
    const divestButtonStyle = {
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: "rgb(200,200,240)",
        fontSize: headerSize
    }
    const inputStyle = {
        width: "80px",
        marginRight: "10px",
        fontSize: headerSize
    }
    
    
    return e('div',{ style: { marginTop: tableSize, marginBottom: "30px" }} ,
                e('span', { style:  balanceStyle }, "Balance: " + props.balance + " ETH"),
                e('input', { id: "invest", defaultValue: 0, style: inputStyle }),
                e('button', { onClick: () => 
                    invest(
                        props.address, 
                        toWei(document.getElementById('invest').value)
                    ),
                    style: investButtonStyle
                }, 'Invest'),
                e('button', { onClick: () => 
                    divest(
                        props.address, 
                        toWei(document.getElementById('invest').value)
                    ),
                    style: divestButtonStyle 
                }, 'Divest')
    );
}

function IdleButton(props) {
    const idleButtonStyle = {
        marginLeft: tableSize,
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: "rgb(200,240,200)",
        fontSize: headerSize
    }
    
    return e('button',
             { 
                 onClick: () => idle(props.address),
                 style: idleButtonStyle
            },
             'Idle'
            );
}
