drop database if exists social_net;
create database social_net;

use social_net;

create table user (
	user_id int auto_increment,
	username varchar(50) not null,
	password varchar(50) not null,
	email varchar(50) not null, 
	birthday date,
	all_friends int not null,
	all_posts int not null,
	all_comments int not null,
	friend_requests int not null,
	about varchar(250) not null,
	logged_in int(1) not null,
	primary key(user_id)
);

create table post (
	post_id int auto_increment,
	post_date date,
	time_stamp time,
	all_comments int not null,
	content varchar(250) not null,
	user_id int not null,
	primary key(post_id),
	foreign key fk_user_id(user_id) references user(user_id)
	on update cascade
	on delete restrict
);

create table comment (
	comment_id int auto_increment,
	author varchar(50) not null,
	content varchar(250) not null,
	post_time time,
	user_id int not null,
	post_id int not null,
	primary key(comment_id),
	foreign key fk_comment_owner(user_id) references user(user_id),
	foreign key fk_post_id(post_id) references post(post_id)
	on update cascade
	on delete restrict
);

create table friend_requests (
	request_id int auto_increment,
	sender int not null,
	receiver int not null,
	primary key(request_id),
	foreign key(sender) references user(user_id),
	foreign key(receiver) references user(user_id)
	on update cascade
	on delete restrict
);

create table friends_list (
	friend_id int auto_increment,
	user_id int not null,
	username varchar(50) not null,
	primary key(friend_id),
	foreign key(user_id) references user(user_id)
	on update cascade
	on delete restrict
);