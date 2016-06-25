##连接服务器
##/Applications/XAMPP/xamppfiles/bin/mysql -u root -p;

##创建数据库
##CREATE DATABASE news;
CREATE DATABASE IF NOT EXISTS news DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
USE news;
##创建新闻种类表单
CREATE TABLE newskind(id INT,name VARCHAR(32),PRIMARY KEY(id))ENGINE=InnoDB DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

##向新闻种类表单中添加数据
INSERT INTO newskind VALUES('11','recommend');     ##推荐
INSERT INTO newskind VALUES('12','society');       ##社会
INSERT INTO newskind VALUES('13','science');       ##科技
INSERT INTO newskind VALUES('14','sports');        #体育	
INSERT INTO newskind VALUES('15','entertainment'); ##娱乐
INSERT INTO newskind VALUES('16','military');      ##军事 


##创建新闻列表
CREATE TABLE newslist(
	id INT AUTO_INCREMENT,
	newstype VARCHAR(16),
	newstitle VARCHAR(60),
	newscontent VARCHAR(500),
	newstime DATE,
	PRIMARY KEY(id)
	)ENGINE=InnoDB DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
##修改编码格式
##ALTER TABLE `newslist` CHANGE `newstitle` `newstitle` VARCHAR(60) CHARACTER SET utf8 COLLATE utf8_general_ci;
##ALTER TABLE `newslist` CHANGE `newscontent` `newscontent` VARCHAR(60) CHARACTER SET utf8 COLLATE utf8_general_ci;

##添加数据，新闻内容
##推荐
INSERT INTO newslist VALUES('1','推荐','国航空姐因走私获刑1年半 ','因走私普通货物、某被市三中0万元。','2010-10-10');
INSERT INTO newslist VALUES('2','推荐','中国渔船遭阿根廷海警击国','据了解，此前4名师就渔船被阿根廷述','2016-04-10');
INSERT INTO newslist VALUES('3','推荐','财政部：个人携物品免税额税','4月8日，我国进口税收新政实施。没想到，一个种说','2016-04-10');
INSERT INTO newslist VALUES('4','推荐','王建军记','王建军同志任书记、总经理，免去宋丽萍同志深圳证券交用。','2016-04-10');
INSERT INTO newslist VALUES('5','推荐','通胀还能飞多高？期','西南证券预计，未左右，应属于较低的温为利好。','2016-04-10');
INSERT INTO newslist VALUES('6','推荐','刘世锦:部','触底以后是怎么一底了会大幅度反弹，不会的。','2016-04-10');
##社会
INSERT INTO newslist VALUES('7','社会','叶璇现身杭州制作景','她凭借《再生缘》《窃听风云》、《意外》等影火...','2016-04-10');
INSERT INTO newslist VALUES('8','社会','和颐酒店女子遇袭去了？','警察蜀黍在接根据不同情况作出事...','2016-04-10');
INSERT INTO newslist VALUES('9','社会','女子疑丈夫与蜜车','周围居民也议论样意气用事也会害了自己，找丈夫好...','2016-04-10');
INSERT INTO newslist VALUES('10','社会','惊人！微波汁？','榨果汁、将柠檬类水果外皮刺一些小孔，放到微波炉后再...','2016-04-10');
INSERT INTO newslist VALUES('11','社会','19岁万州髓救父亲','让父亲在身及时进行骨髓移植手延...','2016-04-10');
INSERT INTO newslist VALUES('12','社会','车停马路砸','法制晚报讯今天凌庄京良路西侧被盗砸。','2016-04-10');
##科技
INSERT INTO newslist VALUES('13','科技','空客西机','空客对这项合作的飞机，这个电以下的客机。','2016-04-10');
INSERT INTO newslist VALUES('14','科技','三星Galaxy Note 送开始','对于这样一款离不弃，这实在是让用...','2016-04-10');
INSERT INTO newslist VALUES('15','科技','推出一机','冰箱当然是必不可料肯定也是常备于其中的定番。','2016-04-10');
INSERT INTO newslist VALUES('16','科技','智能手机销售增长战','为了在市场整体减位机品用户更多...','2016-04-10');
INSERT INTO newslist VALUES('17','科技','可乐中的苹果6sP/三星S测','最重要的是iPhs经历可乐浸泡和...','2016-04-10');
INSERT INTO newslist VALUES('18','科技','苹果获MacBook3D Touch','这苹果等大公司总是会为旗下大型平...','2016-04-10');
##体育
INSERT INTO newslist VALUES('19','体育','看勇士已可忽视争议哨马刺','唯一重要的是勇着实现73胜的希望，下极致放大。','2016-04-10');
INSERT INTO newslist VALUES('20','体育','库里感叹仅赢灰熊1分赢家','赛后库里直言这，这场比赛对着很多。','2016-04-10');
INSERT INTO newslist VALUES('21','体育','阵容轮换 吉翔绝杀业','凭借着87分钟吉:0击败赛前同积7分的河南建业榜榜首。','2016-04-10');
INSERT INTO newslist VALUES('22','体育','历史第四！汤普森超君度大','汤普森想超越库个三分球纪录，可是他了。','2016-04-10');
INSERT INTO newslist VALUES('23','体育','永昌呼吁球迷文明观赛大化','永昌俱乐部也对，希望球迷能看球，鼓励球。','2016-04-10');
INSERT INTO newslist VALUES('24','体育','罗马VS博洛尼亚前瞻:纳抢亚军','本周末对阵博大将纳赛，技。','2016-04-10');
##娱乐
INSERT INTO newslist VALUES('25','娱乐','《歌手》何炅频现好了','总决赛由何炅一天何炅则口误颇多。','2016-04-10');
INSERT INTO newslist VALUES('26','娱乐','凄惨！命','“香妃”被青年演尽致，她也因而成为中国家喻户晓的电视明星。','2016-04-10');
INSERT INTO newslist VALUES('27','娱乐','甜馨大胆“表白”思了','贾乃亮带着女儿动中，主持人提到了TFBOYS王欢王源...','2016-04-10');
INSERT INTO newslist VALUES('28','娱乐','修杰楷乐当贾静我来配','她也在担心老1千米的事情了，而修杰楷员吗。','2016-04-10');
INSERT INTO newslist VALUES('29','娱乐','朴振方法','朴振荣从歌手到中始终活跃在一线。','2016-04-10');
INSERT INTO newslist VALUES('30','娱乐','阿拉动起来','昨天下午，健身大讲堂活动在江北氛热烈。哥姐姐们..','2016-04-10');
INSERT INTO newslist VALUES('31','娱乐','王柏杰谈军中电影！','王柏杰虽然正4月13日电影首映会玮甯一起做宣传。','2016-04-10');
##军事
INSERT INTO newslist VALUES('32','军事','中巴空军在巴基斯坦举训练','“雄鹰-Ⅴ”联之后，空军航空兵飞胜仗”的战略要求。','2016-04-10');
INSERT INTO newslist VALUES('33','军事','万事俱备！今手了','今天最大的一件要的一件事，发生的非常静悄悄位的外汇储备数据。','2016-04-10');
INSERT INTO newslist VALUES('34','军事','越南刚刚用上中国刀子','据英国路透社47日要求中国撤走在南海的一处钻井平台划。','2016-04-10');
INSERT INTO newslist VALUES('35','军事','震惊世界的朝鲜核水面','据英国《卫报》伊会说一口流利的中文和韩朝权的还是金正日。','2016-04-10');
INSERT INTO newslist VALUES('36','军事','俄讨好西方被整得己路','俄罗斯宣布成立数或达40万，直困难','2016-04-10');

