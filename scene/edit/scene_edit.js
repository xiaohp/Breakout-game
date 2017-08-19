class SceneEdit extends GuaScene {
    constructor(game) {
        super(game)
        var self = this
        this.editBlocks = []
        // 点击空白处添加砖块
        game.canvas.addEventListener('click', function(event) {
            self.addBlock(event.offsetX, event.offsetY )
        })
        // 点击 l 保存关卡数据
        game.registerAction('l', function(keyStatus) {
            if (keyStatus == 'up') {
                self.saveLevel()
            }
        })

    }
    draw() {
        // draw blocks
        for (var i = 0; i < this.editBlocks.length; i++) {
            var p = this.editBlocks[i]
            var block = Block(this.game, p)
            this.game.drawImage(block)
        }
        // draw labels
        this.game.context.fillText('关卡编辑界面：点击空白处添加砖块，按 L 保存', 10, 290)
    }
    // 添加砖块
    addBlock(offsetX, offsetY) {
        var x = offsetX - offsetX % 40
        var y = offsetY - offsetY % 19
        var position = [x, y]
        this.editBlocks.push(position)
    }
    // 保存数据
    saveLevel() {
        levels.push(this.editBlocks)
        this.editBlocks = []
    }
}
