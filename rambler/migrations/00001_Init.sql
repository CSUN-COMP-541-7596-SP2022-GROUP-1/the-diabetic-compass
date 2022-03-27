-- rambler up

create table users (
  id serial not null unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  firebase_auth_uid varchar(255) not null unique,
  email varchar(255) not null unique
);

comment on column users.firebase_auth_uid is 'Firebase auth''s unique user identifier -- uid';

create table user_tokens (
  id serial not null unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  expires_at timestamp not null,
  user_id int not null references users(id) on delete cascade,
  secret text not null
);

comment on column user_tokens.expires_at is 'User token expires by default within 30 days';

create table user_roles (
  id serial not null unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  user_id int not null references users(id) on delete cascade,
  role text not null unique
);

alter table user_roles add constraint role check (role = any(array['ADMIN', 'USER']::text[]));

-- rambler down

drop table user_roles;
drop table user_tokens;
drop table users;
