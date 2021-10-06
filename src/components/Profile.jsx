import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
  return (
    <main className={p.content}>
      <div>
        <img className={p.contentImg} src='https://phonoteka.org/uploads/posts/2021-06/1624911007_8-phonoteka_org-p-obezyana-oboi-krasivo-8.jpg'></img>
      </div>
      <div>
        ava + dsecription
      </div>
      <div>
        posts
        <div>
          new posts
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
      <div>
        ava + dsecription
      </div>
      Main content
    </main>
  )
}

export default Profile;