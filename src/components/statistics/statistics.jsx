import css from './statistics.module.css';
import {Item} from './item/item';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title ? <h2 className={css.title}>Upload stats</h2> : ''}

        <ul className={css.statList} >
            {stats.map(stat => (
                <Item key={stat.id} label={stat.label} percentage={stat.percentage} />
            ))}
        </ul>
    </section>
}