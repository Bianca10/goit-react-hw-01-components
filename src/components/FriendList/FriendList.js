import React from 'react';

import FriendListItem from './FriendListItem';

import './FriendList.css';
export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend, index) => (
        <FriendListItem
          key={index}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
