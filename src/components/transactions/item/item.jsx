import css from './item.module.css'

export const TransactionItem = ({ type, amount, currency }) => {
    return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
}