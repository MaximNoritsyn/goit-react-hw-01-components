import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';

import { Profile } from '../components/profile/profile';
import { Statistics } from '../components/statistics/statistics';
import { FriendList } from './friends/friends';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
    </div>
  );
};
