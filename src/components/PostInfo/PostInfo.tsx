import React from 'react';

import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && (
          <UserInfo user={user} />
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length === 0
        ? (
          <div>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </div>
        )
        : <CommentList comments={comments} />}
    </div>
  );
};