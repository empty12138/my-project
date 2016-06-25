window.onload = function() {


    //定义宽和高
    var WIDTH = 480,
        HEIGHT = 650;
    var score = 0,
        life = 3;
    //定义状态
    var START = 0,
        STARTING = 1,
        RUNNING = 2,
        PAUSE = 3,
        GAME_OVER = 4;
    // state表示游戏的状态，取值会是以上5种之一
    var state = START;
    //获取数据
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //***************创建图像对象来表示天空，游戏名称、英雄，敌人，******************
    //背景
    var bg = new Image();
    bg.src = "./img/background.png"
        //游戏名称
    var copyright = new Image();
    copyright.src = "./img/shoot_copyright.png"
        //游戏加载中……
    var loadImg = [];
    loadImg[0] = new Image();
    loadImg[0].src = "./img/game_loading1.png"
    loadImg[1] = new Image();
    loadImg[1].src = "./img/game_loading2.png"
    loadImg[2] = new Image();
    loadImg[2].src = "./img/game_loading3.png"
    loadImg[3] = new Image();
    loadImg[3].src = "./img/game_loading4.png"
        //英雄的两个状态的图像数组
    var h = [];
    h[0] = new Image();
    h[0].src = "./img/hero1.png";
    h[1] = new Image();
    h[1].src = "./img/hero2.png";
    h[2] = new Image();
    h[2].src = "./img/hero_blowup_n1.png";
    h[3] = new Image();
    h[3].src = "./img/hero_blowup_n1.png";
    h[4] = new Image();
    h[4].src = "./img/hero_blowup_n1.png";
    h[5] = new Image();
    h[5].src = "./img/hero_blowup_n1.png";
    //创建小飞机图像数组
    var e1 = [];
    e1[0] = new Image();
    e1[0].src = "./img/enemy1.png";
    e1[1] = new Image();
    e1[1].src = "./img/enemy1_down1.png";
    e1[2] = new Image();
    e1[2].src = "./img/enemy1_down2.png";
    e1[3] = new Image();
    e1[3].src = "./img/enemy1_down3.png";
    e1[4] = new Image();
    e1[4].src = "img/enemy1_down4.png";

    //创建中型飞机图像数组
    var e2 = [];
    e2[0] = new Image();
    e2[0].src = "./img/enemy2.png";
    e2[1] = new Image();
    e2[1].src = "./img/enemy2_down1.png";
    e2[2] = new Image();
    e2[2].src = "./img/enemy2_down2.png";
    e2[3] = new Image();
    e2[3].src = "./img/enemy2_down3.png";
    e2[4] = new Image();
    e2[4].src = "./img/enemy2_down4.png";
    //子弹
    var b = new Image();
    b.src = "./img/bullet1.png";
    //暂停图像
    var pause = new Image()
    pause.src = "./img/game_pause_nor.png"
        //******************数据对象********************
    var SKY = { image: bg, width: 480, height: 650, speed: 20 };
    var LOADING = { frames: loadImg, width: 186, height: 38, x: (WIDTH - 186) / 2, y: HEIGHT - 40, speed: 3 };
    var HERO = { frames: h, baseFrameCount: 2, width: 99, height: 124, speed: 20 } //,x:(WIDTH-99)/2,y:HEIGHT - 200}
    var BULLET = { image: b, width: 9, height: 21 };
    var E1 = { type: 1, score: 1, frames: e1, baseFrameCount: 1, life: 1, minSpeed: 70, maxSpeed: 100, width: 57, height: 51 };
    var E2 = { type: 2, score: 5, frames: e2, baseFrameCount: 1, life: 5, minSpeed: 50, maxSpeed: 70, width: 69, height: 95 };

    //保存hero发射的子弹
    var bullets = [];
    //保存比较多的小飞机
    var enemies = [];
    //****************************背景天空业务对象*************************
    var Sky = function(config) {
        this.bg = config.image;
        this.width = config.width;
        this.height = config.height;
        this.speed = 1000 / config.speed
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = -this.height;
        this.lastTime = 0; //上一次执行动作时间的毫秒数
        //移动背景的纵坐标
        this.step = function() {
                //判断是否到达天空移动的时间
                //获取当前时间的毫秒数
                var currentTime = new Date().getTime();
                if (currentTime - this.lastTime >= this.speed) {
                    this.y1++;
                    this.y2++;
                    this.lastTime = new Date().getTime();
                }
                //判断要y1 y2是否超出范围
                if (this.y1 >= this.height) {
                    this.y1 = -this.height;
                }
                if (this.y2 >= this.height) {
                    this.y2 = -this.height;
                }
            }
            //绘制图像
        this.paint = function(ctx) {
            //console.log("x2:"+this.x2+"y2:"+this.y2);
            ctx.drawImage(this.bg, this.x1, this.y1);
            ctx.drawImage(this.bg, this.x2, this.y2);

        }
    }
    var sky = new Sky(SKY);

    //*********************loading(底部加载小飞机)业务对象**********************
    var Loading = function(config) {
        this.speed = 1000 / config.speed;
        this.lastTime = 0;
        this.frame = null;
        this.frameIndex = 0
            //更换loading图像
        this.step = function() {
                var currentTime = new Date().getTime();
                if (currentTime - this.lastTime >= this.speed) {
                    //获取不同的图像config.frames中的元素给frame
                    this.frame = config.frames[this.frameIndex];
                    this.frameIndex++;
                    if (this.frameIndex >= 4) {
                        state = RUNNING
                    }
                    this.lastTime = new Date().getTime()
                }
            }
            //绘制不同的图像到canvas
        this.paint = function(ctx) {
            ctx.drawImage(this.frame, config.x, config.y)
        }
    }
    var loading = new Loading(LOADING)

    //*********************飞机的运行状态和坠毁状态******************************
    var Hero = function(config) {
        this.frames = config.frames;
        this.frameIndex = 0;
        this.baseFrameCount = config.baseFrameCount;
        this.width = config.width;
        this.height = config.height;
        this.speed = 1000 / config.speed;
        this.lastTime = 0;
        this.x = (WIDTH - this.width) / 2;
        this.y = HEIGHT - this.height - 30;

        this.down = false;
        this.canDelete = false;

        this.step = function() {
            var currentTime = new Date().getTime();
            if (currentTime - this.lastTime >= this.speed) {
                if (this.down) {
                    //爆破状态
                    if (this.frameIndex == this.frames.length) {
                        this.canDelete = true;
                    } else {
                        this.frame = this.frames[this.frameIndex];
                        this.frameIndex++;
                    }
                } else {
                    //正常状态
                    this.frame = this.frames[this.frameIndex % this.baseFrameCount];
                    this.frameIndex++;
                    this.lastTime = new Date().getTime();
                }
            }
        }
        this.paint = function(ctx) {
            ctx.drawImage(this.frame, this.x, this.y);
        }
        this.shootLastTime = 0;
        this.shootInterval = 150; //发射子弹的间隔

        //飞机发射子弹
        this.shoot = function() {
                var currentTime = new Date().getTime();
                if (currentTime - this.shootLastTime >= this.shootInterval) {
                    //到达时间间隔，可以发射子弹
                    var bullet = new Bullet(BULLET, this.x + 45, this.y);
                    bullets[bullets.length] = bullet;
                    //console.log("子弹数量:"+bullets.length);
                    this.shootLastTime = new Date().getTime();
                }
            }
            //英雄与敌人碰撞后的操作
        this.duang = function() {
            this.down = true;
            this.frameIndex = this.baseFrameCount;
        }
    }
    var hero = new Hero(HERO)

    //******************  子弹  *********************

    var Bullet = function(config, x, y) {
            this.width = config.width;
            this.height = config.height;
            this.frame = config.image;
            this.x = x;
            this.y = y;
            this.canDelete = false; //是否删除子弹，默认为否

            this.move = function() {
                this.y -= 10;
            }

            this.paint = function(ctx) {
                ctx.drawImage(this.frame, this.x, this.y);
            }

            this.outOfBounds = function() {
                return this.y < 0 - this.height;
            }

            // 子弹与敌人飞机碰撞后子弹消失
            this.duang = function() {
                this.canDelete = true;
            }
        }
        //******************  敌人飞机  *********************
    var Enemy = function(config) {
        this.down = false; //是否播放爆破状态，默认为否
        this.canDelete = false; // 是否删除当前飞机，默认为否
        this.life = config.life;
        this.score = config.score;
        this.frames = config.frames; // 图像列表
        this.frame = null; // 当前显示的图像
        this.frameIndex = 0; //当前显示的图像索引的累加值
        this.baseFrameCount = config.baseFrameCount;

        this.width = config.width;
        this.height = config.height;

        //横纵坐标
        this.x = Math.ceil(Math.random() * (WIDTH - config.width));
        this.y = -config.height;
        this.type = config.type;
        //this.speed = 0;
        this.speed = 1000 / (Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed);
        this.lastTime = 0;

        //检查运动是否到了运动时间
        this.timeInterval = function() {
            var currentTime = new Date().getTime();
            if (currentTime - this.lastTime >= this.speed) {
                this.lastTime = new Date().getTime();
                return true;
            }
            return false;
        }

        this.step = function() {
            if (this.timeInterval()) {
                if (this.down) {
                    //播放爆破图像
                    if (this.frameIndex == this.frames.length) {
                        this.canDelete = true;
                    } else {
                        this.frame = this.frames[this.frameIndex];
                        this.frameIndex++;
                    }
                } else {
                    //基本图像切换
                    this.frame = this.frames[this.frameIndex % this.baseFrameCount]
                    this.frameIndex++;
                    //飞机移动
                    this.move()
                }
            }
        }
        this.move = function() {
            //飞机移动
            this.y += 2 //敌机的运动步长（速度）
        }
        this.paint = function() {
            //绘制飞机图像
            ctx.drawImage(this.frame, this.x, this.y)
        }
        this.outOfBounds = function() {
                //判断当前飞机是否走出游戏区域
                if (this.y > HEIGHT) {
                    return true;
                }
                return false;
            }
            //判断敌人是否与其他物体碰撞，传参c可以是英雄或者子弹
        this.hit = function(c) {
                //c的中心点的位置
                var cX = c.x + c.width / 2;
                var cY = c.y + c.height / 2;
                var leftStart = this.x - c.width / 2;
                var leftEnd = this.x + this.width + c.width / 2;
                var topStart = this.y - c.height / 2;
                var topEnd = this.y + this.height + c.height / 2;
                var result = leftStart < cX && cX < leftEnd && topStart < cY && cY < topEnd
                return result
            }
            //敌机与其他元素碰撞后的操作方法
        this.duang = function() {
            //生命减少
            this.life--;
            if (this.life == 0) {
                this.down = true;
                score += this.score;
                this.frameIndex = this.baseFrameCount;
            }
        }

    }

    //*****************canvas添加事件********************
    //点击画布，从START过渡到STARTING
    canvas.onclick = function() {
        if (state == START) {
            state = STARTING;
        }
    }

    //飞机跟随鼠标移动事件
    canvas.onmousemove = function(e) {
            var x = e.offsetX;
            var y = e.offsetY;
            hero.x = x - HERO.width / 2;
            hero.y = y - HERO.height / 2;
        }
        //鼠标移出游戏界面 暂停
    canvas.onmouseout = function(e) {
        if (state == RUNNING) {
            state = PAUSE;
        }
    }
    canvas.onmouseover = function(e) {
            if (state == PAUSE) {
                state = RUNNING;
            }
        }
        //****************************绘制组件************************
    function paintComponent() {
        //绘制子弹
        for (var i = 0; i < bullets.length; i++) {
            var bullet = bullets[i];
            bullet.paint(ctx);
        }
        //绘制敌机
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].paint(ctx);
        }
        //将绘制hero的方法放到这里，在暂停是，天空继续走。。继续飞行
        hero.paint(ctx);
        //得分和生命数量
        ctx.font = "20px sans-serif";
        ctx.fillText("SCORE : " + score, 30, 30);
        ctx.fillText("LIFE : " + life, 380, 30);
    }
    //更新Y坐标
    function stepComponent() {
        for (var i = 0; i < bullets.length; i++) {
            var bullet = bullets[i];
            bullet.move();
        }
        //移动敌机
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].step();
        }
    }
    //创建敌机的数据常量
    var lastTime = new Date().getTime();
    var interval = 300;
    //删除多余组件
    function deleteComponent() {
        //删除走出游戏区域的敌机
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].outOfBounds() || enemies[i].canDelete) {
                enemies.splice(i, 1)
            }
        }

        //删除超出上边界的子弹
        for (var i = 0; i < bullets.length; i++) {
            if (bullets[i].outOfBounds() || bullets[i].canDelete) {
                bullets.splice(i, 1);
            }
        }
        //判断英雄是否需要被删除
        if (hero.canDelete) {
            life--;
            if (life == 0) {
                state = GAME_OVER
            } else {
                hero = new Hero(HERO)
            }
        }
    }

    //根据指定时间差，创建不同类型的敌机，创建好的飞机保存进enemies数组中
    function componentEnter() {
        var currentTime = new Date().getTime();
        if (currentTime - lastTime >= interval) {
            var n = Math.floor(Math.random() * 10);
            if (n >= 0 && n <= 7) {
                //创建小型飞机
                enemies[enemies.length] = new Enemy(E1);
            } else {
                //创建中型飞机
                enemies[enemies.length] = new Enemy(E2);
            }
            lastTime = new Date().getTime();
        }
    }
    //判断敌机是否与子弹或者英雄碰撞
    function checkHit() {
        for (var i = 0; i < enemies.length; i++) {
            var enemy = enemies[i];
            if (enemy.down || enemy.canDelete) {
                continue;
            }
            //与子弹比较(遍历出所有子弹)
            for (var j = 0; j < bullets.length; j++) {
                //比较
                var bullet = bullets[j];
                if (enemy.hit(bullet)) {
                    enemy.duang();
                    bullet.duang();
                }
            }
            //判断跟英雄相撞的时候
            if (enemy.down || enemy.canDelete) {
                continue;
            }
            if (enemy.hit(hero)) {
                enemy.duang();
                hero.duang();
            }
        }
    }

    //*********************定义计时器，固定刷新频率为 1000/100********************
    setInterval(function() {
        switch (state) {
            case START: //游戏开始前
                //天空移动
                sky.step();
                sky.paint(ctx);
                //绘制copyright
                var x = (WIDTH - copyright.naturalWidth) / 2;
                var y = (HEIGHT - copyright.naturalHeight) / 2;
                ctx.drawImage(copyright, x, y)


                ctx.fillStyle="rgba(255,0,0,1)"
                ctx.font = "bold 25px sans-serif";
                var width = ctx.measureText("请单击游戏区域开始游戏").width;
                ctx.fillText("请单击游戏区域开始游戏", (WIDTH - width) / 2, 450);


                break;
            case STARTING: //准备开始
                //天空继续动
                sky.step();
                sky.paint(ctx);
                //底部loading
                loading.step()
                loading.paint(ctx)
                break;
            case RUNNING: //游戏进行
                //天空继续动
                sky.step();
                sky.paint(ctx);
                hero.step();
                hero.paint(ctx);
                hero.shoot() //射击
                checkHit() //判断是否击中
                componentEnter() //添加剂敌机
                stepComponent()
                deleteComponent()
                paintComponent() //绘制所有组件
                break;
            case PAUSE: //暂停
                sky.step()
                sky.paint(ctx)
                paintComponent()
                    //暂停图标
                ctx.drawImage(pause, (WIDTH - pause.width) / 2, (HEIGHT - pause.height) / 2);
                break;
            case GAME_OVER: //游戏结束
                ctx.fillStyle="rgba(255,0,0,1)"
                ctx.font = "bold 60px sans-serif";
                var width = ctx.measureText("GAME_OVER").width;
                ctx.fillText("GAME  OVER", (WIDTH - width) / 2, 300);
                break;
        }
    }, 10)



}
