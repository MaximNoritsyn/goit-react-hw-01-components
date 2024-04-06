import css from './item.module.css';

function RandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export const Item = ({ label, percentage }) => {
return <li className={css.item} style={{backgroundColor: RandomColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
}