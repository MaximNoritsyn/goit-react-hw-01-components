import css from './transaction-history.module.css'

import { TransactionItem } from './item/item'

export const TransactionHistory = ({ items }) => {
    return <table className={css.table}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <TransactionItem
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            ))}
        </tbody>
    </table>
}