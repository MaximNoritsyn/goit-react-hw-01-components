import css from './friends.module.css'
import { FriendListItem } from './friend/friend'

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
}
    