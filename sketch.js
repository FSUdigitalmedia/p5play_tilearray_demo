let avatar;
let tileImg, avatarImg;
let map = 
    ['@@@@@@@@@',
     '@   @   @',
     '@@@ @ @ @',
     '@@@   @ @',
     '@@@@@   @',
     '@@@@@@@@@'
    ]
    
function preload() {
    avatarImg = loadImage('assets/sprite.png');
    tileImg = loadImage('assets/tile.png');
}

function setup() {
    new Canvas(300,450, 'pixelated x2');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 32;

    avatar = new Sprite(1.5,1.5, 1,1);
    avatar.img = avatarImg;

    let brick1 = new Group();
    brick1.img = tileImg;
    brick1.collider = 'none';
    brick1.tile = '@';

    new Tiles(map,.5, .5, 1, 1);
}

function draw() {
    clear();

    if (kb.pressed('up') && isOpen(avatar.x,avatar.y-1)) {
        avatar.y--;
    }
    else if (kb.pressed('left') && isOpen(avatar.x-1,avatar.y)) {
        avatar.x--;
    }
    else if (kb.pressed('right') && isOpen(avatar.x+1,avatar.y)) {
        avatar.moveTo( createVector(avatar.x+1,avatar.y), .1 )
        //avatar.x++;
    }
    else if (kb.pressed('down') && isOpen(avatar.x,avatar.y+1)) {
        avatar.y++;
    }
}


function isOpen(x, y) {
    let i = floor(x);
    let j = floor(y);
    let tile = map[j][i];
    if (tile == ' ') {
        return true;
    } else {
        console.log('blocked!');
        return false;
    }
    //return tile == ' ';

}