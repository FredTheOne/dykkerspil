info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    trash.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    obstacle.setPosition(160, Math.randomRange(0, 120))
})
let obstacle: Sprite = null
let trash: Sprite = null
let diver = sprites.create(img`
    . . . . . . . . 
    . . . 5 5 . . . 
    . . 5 5 5 5 . . 
    . . 5 2 2 5 . . 
    . . 5 5 5 5 . . 
    . . . 5 5 . . . 
    . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(diver)
trash = sprites.create(img`
    . . 8 8 . . 
    . 8 8 8 8 . 
    8 8 1 1 8 8 
    . 8 1 1 8 . 
    . . 8 8 . . 
    `, SpriteKind.Food)
trash.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
obstacle = sprites.create(img`
    . . 7 7 7 . . 
    . 7 7 7 7 7 . 
    7 7 7 7 7 7 7 
    . 7 7 7 7 7 . 
    . . 7 7 7 . . 
    `, SpriteKind.Enemy)
obstacle.setVelocity(-50, 0)
obstacle.setPosition(160, Math.randomRange(0, 120))
info.setLife(3)
game.onUpdateInterval(1000, function () {
    if (info.score() % 5 == 0 && info.score() != 0) {
        game.splash("Niveau " + info.score() / 5)
        obstacle.setVelocity(obstacle.vx - 10, 0)
    }
})
