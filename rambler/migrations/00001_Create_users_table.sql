-- rambler up

create table users (
  id serial not null unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  firebase_auth_uid varchar(255) not null unique,
  email varchar(255) not null unique
);

comment on column users.firebase_auth_uid is 'Firebase auth''s unique user identifier -- uid';

-- rambler down

drop table users;