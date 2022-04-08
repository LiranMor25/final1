set global time_zone = '+2:00';
DROP DATABASE IF EXISTS `heroku_0791532c7c3fdff`;
CREATE DATABASE  `heroku_0791532c7c3fdff`;


DROP TABLE IF EXISTS `heroku_0791532c7c3fdff`.participants;
CREATE TABLE `heroku_0791532c7c3fdff`.participants(
PinCode varchar(10) NOT NULL primary key,
Device VARCHAR(50) NOT NULL
);


insert into `heroku_0791532c7c3fdff`.participants (PinCode, Device) VALUES ("1234", "desktop");
insert into `heroku_0791532c7c3fdff`.participants (PinCode, Device) VALUES ("2234", "phone");
insert into `heroku_0791532c7c3fdff`.participants (PinCode, Device) VALUES ("1111", "desktop");
insert into `heroku_0791532c7c3fdff`.participants (PinCode, Device) VALUES ("2222", "phone");


DROP TABLE IF EXISTS `heroku_0791532c7c3fdff`.Clicks;
CREATE TABLE `heroku_0791532c7c3fdff`.Clicks(
PinCode varchar(10) NOT NULL,
`TimeStamp` datetime not null,
ClickType VARCHAR(50) NOT NULL,
primary key (PinCode,`TimeStamp`)
);