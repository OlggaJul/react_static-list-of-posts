import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { email, name } = user;

  return (
    <p>
      <span>Posted by </span>
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};