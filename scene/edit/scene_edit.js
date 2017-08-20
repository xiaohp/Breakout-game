class SceneEdit extends GuaScene {
    constructor(game) {
        // log('初始化了一个 编辑关卡')
        super(game)
        var self = this
        this.editBlocks = levels[0]
        // 点击添加砖块
        game.canvas.addEventListener('click', function(event) {
            // log('click canvas')
            self.addBlock(event.offsetX, event.offsetY )
        })
        // 点击 N 新增关卡
        game.registerAction('n', function(keyStatus) {
            if (keyStatus == 'up') {
                self.addLevel()
            }
        })
    }
    update() {
        if (currentLevel.load) {
            this.editBlocks = levels[currentLevel.num]
            currentLevel.load = false
        }
    }
    draw() {
        // draw blocks
        for (var i = 0; i < this.editBlocks.length; i++) {
            var p = this.editBlocks[i]
            var block = Block(this.game, p)
            this.game.drawImage(block)
        }
        // draw labels
        this.game.context.fillText('关卡编辑：点击空白处添加砖块，按 N 新增关卡', 10, 290)
    }
    // 添加砖块
    addBlock(offsetX, offsetY) {
        var x = offsetX - offsetX % 40
        var y = offsetY - offsetY % 19
        var position = [x, y]
        // 砖块已存在则删除
        // console.table(this.editBlocks)
        if (arrayIndexOf(this.editBlocks, position) > -1) {
            arrayRemove(this.editBlocks, position)
            // log(`level ${currentLevel.num}`, ' delete block', position)
        } else {
            this.editBlocks.push(position)
            // log(`level ${currentLevel.num}`, ' add block', position)
        }
    }
    // 新增关卡
    addLevel() {
        levels.push([])
        currentLevel.num = levels.length - 1
        this.editBlocks = levels[currentLevel.num]
    }
}
