
let maze = [
    '@@@@@@@@@',
    '@   @   @',
    '@@@ @ @ @',
    '@@@   @ @',
    '@@@@@   @',
    '@@@@@@@@@'
];
let avatar;
let tileImg, avatarImg;
    
function preload() {
    // load images here
    avatarImg = loadImage('assets/sprite.png');
    tileImg = loadImage('assets/tile.png');
}

function setup() {
    let canvas = new Canvas(300,450, 'pixelated x2');
    allSprites.pixelPerfect = true;
    allSprites.tileSize = 32;

    avatar = new Sprite(1,1,1,1);
    avatar.img = avatarImg;
    avatar.layer = 1;

    let brick1 = new Group();
    brick1.img = tileImg;
    brick1.collider = 'none';
    brick1.tile = '@';

    new Tiles(maze, 0, 0, 1, 1);
}

function draw() {
    clear();

    if (kb.pressed('up') && canMove(avatar.x, avatar.y-1)) {
        avatar.y--;
    }
    else if (kb.pressed('left') && canMove(avatar.x-1, avatar.y)) {
        avatar.x--;
    }
    else if (kb.pressed('right') && canMove(avatar.x+1, avatar.y)) {
        avatar.x++;
    }
    else if (kb.pressed('down') && canMove(avatar.x, avatar.y+1)) {
        avatar.y++;
    }
}

function canMove(x, y) {
    let i = floor(x);
    let j = floor(y);
    let tile = maze[j][i];
    return tile == ' ';
}