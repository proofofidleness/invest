function Poke(props) {
    return  e('button',
                { onClick: () =>
                    poke(props.poker, props.pokee)
                },
                "Poke"
             );
}

function ClaimRewards(props) {
    if (props.owed > 0)
        return  e('div',null,
                    ee('p', 
                        "You can claim " + props.owed + " ETH  ",
                        e('button', { onClick: () => claimRewards(props.address) }, "Claim")
                    )
        );
}

function InvestButton(props) {
    return e('div',null,
                e('input', { id: "invest", defaultValue: 0, style: { width: "200px" } }),
                e('button', { onClick: () => 
                    invest(
                        props.address, 
                        toWei(document.getElementById('invest').value)
                    ) 
                }, 'Invest (ETH)')
    );
}

function DivestButton(props) {
    return e('div',null,
                e('input', { id: "divest", defaultValue: 0, style: { width: "200px" } }),
                e('button', { onClick: () => 
                    divest(
                        props.address, 
                        toWei(document.getElementById('divest').value)
                    ) 
                }, 'Divest (ETH)')
    );
}

function IdleButton(props) {
    return e('button',
             { onClick: () => idle(props.address)},
             'Idle'
            );
}
