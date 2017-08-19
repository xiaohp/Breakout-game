class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var s = Scene(game)
            game.replaceScene(s)
        })
        game.registerAction('e', function(){
            var s = SceneEdit.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        var ctx = this.game.context
        ctx.font = "32px serif"
        ctx.fillText('经典打砖块', 110, 100)

        ctx.font = "20px Arial"
        ctx.fillText('按 K 开始游戏，按 E 编辑关卡', 80, 190)
        ctx.font = "14px Arial"
    }
}
