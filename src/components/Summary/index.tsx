import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";



export function Summary() {
const { transactions } = useContext(TransactionsContext);

// const totalDeposits = transactions.reduce((acc, transaction) => {
//     if (transaction.type === 'deposit') {
//         return acc + transaction.amount;
//     }
//     return acc;
// },0);

const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
    }
    return acc;
}, {
    deposits: 0,
    withdraw: 0,
    total: 0
})



    return( 
        <Container>
            {/* <TransactionsContext.Consumer>
                {(data) => {
                    console.log(data);

                    return <p>ok</p>
                }}

            </TransactionsContext.Consumer> */}

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>{summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas"></img>
                </header>
                <strong>{summary.withdraw}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"></img>
                </header>
                <strong>{summary.total}</strong>
            </div>
        </Container>
    )
}