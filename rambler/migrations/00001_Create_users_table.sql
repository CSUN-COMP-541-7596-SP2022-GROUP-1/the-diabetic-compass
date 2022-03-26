-- rambler up

create table users (
  id int not null auto_increment unique primary key,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now() on update now(),
  firebase_auth_uid varchar(512) not null unique comment "Firebase auth's unique user identifier -- uid",
  email varchar(512) not null unique
);

-- rambler down

drop table users;