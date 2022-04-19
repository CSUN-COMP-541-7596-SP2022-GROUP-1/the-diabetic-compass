-- rambler up

alter table users drop column firebase_auth_uid;

create table user_firebase_auths (
  id serial not null unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  auth_uid varchar(255) not null unique,
  user_id int not null references users(id) on delete cascade
);

comment on column user_firebase_auths.auth_uid is 'Firebase auth''s unique user identifier -- uid';

-- rambler down

alter table users add column firebase_auth_uid varchar(255) not null unique;

comment on column users.firebase_auth_uid is 'Firebase auth''s unique user identifier -- uid';

drop table user_firebase_auths;