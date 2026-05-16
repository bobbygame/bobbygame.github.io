export type Language = 'en' | 'zh';

const STORAGE_KEY = 'bobby-carrot.language';

const messages: Record<Language, Record<string, string>> = {
  en: {
    'common.language.target': '中文',
    'common.language.switch': 'Switch to Chinese',

    'game.canvas': 'Bobby Carrot game canvas',
    'game.status': 'Game status',
    'game.tools': 'Game tools',
    'game.editor': 'Map Editor',
    'game.github': 'Open GitHub repository',
    'game.hud.time': 'Time',
    'game.hud.level': 'Level',
    'game.hud.remain': 'Remain',
    'game.win.title': 'SUCCESS!',
    'game.win.timeUsed': 'Time Used',
    'game.win.steps': 'Steps',
    'game.win.continue': 'Continue',
    'game.tryAgain': 'TRY AGAIN',
    'game.save.aria': 'Progress',
    'game.save.eyebrow': 'Auto Save',
    'game.save.title': 'Progress',
    'game.save.current': 'Current progress',
    'game.save.slot': 'Last save',
    'game.save.save': 'Save',
    'game.save.resume': 'Resume',
    'game.save.new': 'New Game',
    'game.save.restart': 'Restart',
    'game.save.autosave': 'Auto-saved. Next visit continues here.',
    'game.save.autosavePending': 'Auto-save starts after the level loads.',
    'game.save.delete': 'Delete',
    'game.save.emptyTitle': 'No save',
    'game.save.emptyMeta': 'Save your current progress to continue from here.',
    'game.save.savedAt': 'Saved at {time}',
    'game.save.currentStats': '{time}s / {steps} steps / {remain} left',
    'game.save.slotStats': '{time}s / {steps} steps / {remain} left{position}',
    'game.save.position': ' / {col},{row}',
    'game.save.noProgress': 'Nothing to save yet',
    'game.save.loading': 'Level is loading',
    'game.save.moving': 'Wait until Bobby stops before saving',
    'game.save.dead': 'Cannot save after failing',
    'game.save.won': 'Save after entering the next level',
    'game.save.success': 'Progress saved',
    'game.save.denied': 'Save failed because the browser rejected storage',
    'game.save.none': 'No save to resume',
    'game.save.corrupt': 'Save was corrupted and has been cleared',
    'game.save.resumed': 'Resumed from save',
    'game.save.autorestored': 'Continued from last visit',
    'game.save.clearedStarting': 'Save cleared. Starting a new game',
    'game.save.newStarted': 'Started a new game',
    'game.save.deleted': 'Save deleted',
    'game.save.failed': 'Operation failed. Try again later',
    'game.restart.open': 'Restart',
    'game.restart.title': 'Restart?',
    'game.restart.body': 'Choose whether to reset this level or clear progress and begin from level 1.',
    'game.restart.current': 'Restart Level',
    'game.restart.startOver': 'Start Over',
    'game.restart.currentStarted': 'Restarted current level',
    'game.level': 'Level {level}',
    'game.touch.root': 'Move Bobby',
    'game.touch.up': 'Move up',
    'game.touch.left': 'Move left',
    'game.touch.right': 'Move right',
    'game.touch.down': 'Move down',

    'editor.brand': 'Bobby Editor',
    'editor.link.game': 'Game',
    'editor.aria.builtInLevel': 'Built-in level',
    'editor.aria.localLevel': 'Local community level',
    'editor.actions.loadBuiltIn': 'Load',
    'editor.actions.openLocal': 'Open',
    'editor.actions.saveLocal': 'Save Local',
    'editor.actions.deleteLocal': 'Delete',
    'editor.actions.openGame': 'Open Game',
    'editor.actions.new': 'New',
    'editor.actions.undo': 'Undo',
    'editor.actions.redo': 'Redo',
    'editor.actions.import': 'Import',
    'editor.actions.export': 'Export',
    'editor.actions.playtest': 'Playtest',
    'editor.actions.exportAssets': 'Export Asset JSON',
    'editor.tools.heading': 'Tools',
    'editor.tools.select': 'Select',
    'editor.tools.erase': 'Erase',
    'editor.tiles.heading': 'Tiles',
    'editor.level.heading': 'Level',
    'editor.level.title': 'Title',
    'editor.level.author': 'Author',
    'editor.level.name': 'Name',
    'editor.level.difficulty': 'Difficulty',
    'editor.level.tags': 'Tags',
    'editor.level.cols': 'Cols',
    'editor.level.rows': 'Rows',
    'editor.level.requiredCarrots': 'Required carrots',
    'editor.asset.heading': 'Asset Animation',
    'editor.asset.object': 'Object',
    'editor.asset.animation': 'Animation',
    'editor.asset.speed': 'Speed',
    'editor.asset.loop': 'Loop',
    'editor.asset.loopValue': 'loop',
    'editor.asset.onceValue': 'once',
    'editor.asset.staticFrame': 'Static frame',
    'editor.asset.static': 'static',
    'editor.asset.frame': 'frame',
    'editor.asset.frames': 'frames',
    'editor.asset.unavailable': 'Assets could not be loaded.',
    'editor.asset.none': 'No animation selected.',
    'editor.asset.noFrame': 'No frame selected.',
    'editor.asset.sheet': 'Sheet',
    'editor.diagnostics.heading': 'Diagnostics',
    'editor.diagnostics.ok': 'No issues found.',
    'editor.diagnostics.warning': 'warning',
    'editor.diagnostics.error': 'error',
    'editor.selection.heading': 'Selection',
    'editor.selection.empty': 'No entity selected.',
    'editor.selection.meta': '{kind} / id {id} / {col}, {row}',
    'editor.selection.direction': 'Direction',
    'editor.selection.corner': 'Corner',
    'editor.selection.color': 'Color',
    'editor.selection.open': 'Open',
    'editor.selection.sharp': 'Sharp',
    'editor.selection.angle': 'Angle',
    'editor.option.horizontal': 'horizontal',
    'editor.option.vertical': 'vertical',
    'editor.option.downRight': 'down-right',
    'editor.option.downLeft': 'down-left',
    'editor.option.upLeft': 'up-left',
    'editor.option.upRight': 'up-right',
    'editor.option.yellow': 'yellow',
    'editor.option.red': 'red',
    'editor.option.blue': 'blue',
    'editor.option.left': 'left',
    'editor.option.right': 'right',
    'editor.option.up': 'up',
    'editor.option.down': 'down',
    'editor.option.true': 'true',
    'editor.option.false': 'false',
    'editor.library.saved': 'Saved locally as {title}.',
    'editor.library.emptyOption': 'No local levels',
    'editor.library.empty': 'Local library is empty.',
    'editor.library.available.one': '1 local level available.',
    'editor.library.available.other': '{count} local levels available.',
    'editor.library.imported': 'Imported and saved {title}.',
    'editor.stats': '{cols}x{rows} / {entities} entities / {carrots} carrots',
    'editor.defaultTitle': 'New Community Level',
    'editor.defaultAuthor': 'you',
    'editor.playtest.title': 'Playtest',
    'editor.playtest.restart': 'Restart',
    'editor.playtest.close': 'Close',
    'editor.difficulty.easy': 'easy',
    'editor.difficulty.normal': 'normal',
    'editor.difficulty.hard': 'hard',
    'editor.difficulty.expert': 'expert',

    'editor.group.Essentials': 'Essentials',
    'editor.group.Walls': 'Walls',
    'editor.group.Hazards': 'Hazards',
    'editor.group.Conveyors': 'Conveyors',
    'editor.group.Switches': 'Switches',
    'editor.group.Keys': 'Keys',

    'editor.tile.0': 'Grass',
    'editor.tile.1': 'Path 1',
    'editor.tile.2': 'Path 2',
    'editor.tile.3': 'Path 3',
    'editor.tile.4': 'Path 4',
    'editor.tile.5': 'Path 5',
    'editor.tile.6': 'Path 6',
    'editor.tile.7': 'Stone 1',
    'editor.tile.8': 'Stone 2',
    'editor.tile.9': 'Stone 3',
    'editor.tile.10': 'Stone 4',
    'editor.tile.11': 'Stone 5',

    'editor.tool.player.label': 'Player',
    'editor.tool.player.description': 'The player-controlled rabbit. Each level has one, and Bobby can only move onto dark stone tiles.',
    'editor.tool.bornPlace.label': 'Spawn',
    'editor.tool.bornPlace.description': 'Spawn marker. Each level has one and it marks Bobby’s starting cell.',
    'editor.tool.channel.label': 'Exit',
    'editor.tool.channel.description': 'Level exit. It opens after enough carrots are collected; entering it completes the level.',
    'editor.tool.carrot.label': 'Carrot',
    'editor.tool.carrot.description': 'Collectible goal. Collecting carrots increases the count used to open the exit.',
    'editor.tool.barX.label': 'Fence X',
    'editor.tool.barX.description': 'Horizontal visible fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.barY.label': 'Fence Y',
    'editor.tool.barY.description': 'Vertical visible fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.barLeftTop.label': 'Fence LT',
    'editor.tool.barLeftTop.description': 'Upper-left corner fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.barRightTop.label': 'Fence RT',
    'editor.tool.barRightTop.description': 'Upper-right corner fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.barLeftBottom.label': 'Fence LB',
    'editor.tool.barLeftBottom.description': 'Lower-left corner fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.barRightBottom.label': 'Fence RB',
    'editor.tool.barRightBottom.description': 'Lower-right corner fence. It is a solid obstacle and blocks Bobby from entering this cell.',
    'editor.tool.trapSafe.label': 'Trap Safe',
    'editor.tool.trapSafe.description': 'Unarmed trap. Bobby can step on it safely once; it turns sharp after Bobby leaves.',
    'editor.tool.trapSharp.label': 'Trap Sharp',
    'editor.tool.trapSharp.description': 'Sharp trap. Bobby dies and restarts when stepping onto it.',
    'editor.tool.stoneHorizontal.label': 'Stone H',
    'editor.tool.stoneHorizontal.description': 'Horizontal one-way stone. It only allows left/right movement and flips after Bobby leaves.',
    'editor.tool.stoneVertical.label': 'Stone V',
    'editor.tool.stoneVertical.description': 'Vertical one-way stone. It only allows up/down movement and flips after Bobby leaves.',
    'editor.tool.stoneAngleDR.label': 'Corner DR',
    'editor.tool.stoneAngleDR.description': 'Corner stone. It connects the two shown directions and rotates after Bobby leaves.',
    'editor.tool.stoneAngleDL.label': 'Corner DL',
    'editor.tool.stoneAngleDL.description': 'Corner stone. It connects the two shown directions and rotates after Bobby leaves.',
    'editor.tool.stoneAngleUL.label': 'Corner UL',
    'editor.tool.stoneAngleUL.description': 'Corner stone. It connects the two shown directions and rotates after Bobby leaves.',
    'editor.tool.stoneAngleUR.label': 'Corner UR',
    'editor.tool.stoneAngleUR.description': 'Corner stone. It connects the two shown directions and rotates after Bobby leaves.',
    'editor.tool.conveyorLeft.label': 'Belt Left',
    'editor.tool.conveyorLeft.description': 'Horizontal conveyor. It can only be entered along the arrow direction and sends Bobby to the end of the connected belt run.',
    'editor.tool.conveyorRight.label': 'Belt Right',
    'editor.tool.conveyorRight.description': 'Horizontal conveyor. It can only be entered along the arrow direction and sends Bobby to the end of the connected belt run.',
    'editor.tool.conveyorUp.label': 'Belt Up',
    'editor.tool.conveyorUp.description': 'Vertical conveyor. It can only be entered along the arrow direction and sends Bobby to the end of the connected belt run.',
    'editor.tool.conveyorDown.label': 'Belt Down',
    'editor.tool.conveyorDown.description': 'Vertical conveyor. It can only be entered along the arrow direction and sends Bobby to the end of the connected belt run.',
    'editor.tool.conveyorButtonOn.label': 'Belt On',
    'editor.tool.conveyorButtonOn.description': 'Conveyor switch. Stepping on an open switch reverses all conveyors and toggles the other conveyor switches.',
    'editor.tool.conveyorButtonOff.label': 'Belt Off',
    'editor.tool.conveyorButtonOff.description': 'Closed conveyor switch. It does not trigger until another switch toggles it.',
    'editor.tool.stoneButtonOn.label': 'Stone On',
    'editor.tool.stoneButtonOn.description': 'Stone switch. Stepping on an open switch rotates all straight/corner stones and toggles the other stone switches.',
    'editor.tool.stoneButtonOff.label': 'Stone Off',
    'editor.tool.stoneButtonOff.description': 'Closed stone switch. It does not trigger until another switch toggles it.',
    'editor.tool.keyYellow.label': 'Key Yellow',
    'editor.tool.keyYellow.description': 'Yellow key. Collect it to open one yellow lock.',
    'editor.tool.keyRed.label': 'Key Red',
    'editor.tool.keyRed.description': 'Red key. Collect it to open one red lock.',
    'editor.tool.keyBlue.label': 'Key Blue',
    'editor.tool.keyBlue.description': 'Blue key. Collect it to open one blue lock.',
    'editor.tool.lockYellow.label': 'Lock Yellow',
    'editor.tool.lockYellow.description': 'Yellow lock. It blocks Bobby without a yellow key; entering with a key unlocks it.',
    'editor.tool.lockRed.label': 'Lock Red',
    'editor.tool.lockRed.description': 'Red lock. It blocks Bobby without a red key; entering with a key unlocks it.',
    'editor.tool.lockBlue.label': 'Lock Blue',
    'editor.tool.lockBlue.description': 'Blue lock. It blocks Bobby without a blue key; entering with a key unlocks it.',

    'diagnostic.tileCount': 'tilemap has {actual} tiles, expected {expected}',
    'diagnostic.onePlayer': 'level must have exactly one player',
    'diagnostic.oneSpawn': 'level should have exactly one spawn point',
    'diagnostic.exitRequired': 'level must have an exit',
    'diagnostic.requiredCarrots': 'required carrots {required} exceeds placed carrots {placed}',
    'diagnostic.invalidTile': 'tilemap contains invalid tile id {tileId}',
    'diagnostic.outOfBounds': '{kind} {id} is outside the tilemap bounds',
    'diagnostic.notWalkable': '{kind} {id} is not on walkable ground',
    'diagnostic.invalidSign': '{kind} {id} has invalid sign',
    'diagnostic.invalidDirection': '{kind} {id} has invalid direction',
    'diagnostic.invalidOpen': '{kind} {id} has invalid open value',
  },
  zh: {
    'common.language.target': 'EN',
    'common.language.switch': '切换到英文',

    'game.canvas': 'Bobby Carrot 游戏画布',
    'game.status': '游戏状态',
    'game.tools': '游戏工具',
    'game.editor': '地图编辑器',
    'game.github': '打开 GitHub 仓库',
    'game.hud.time': '时间',
    'game.hud.level': '关卡',
    'game.hud.remain': '剩余',
    'game.win.title': '成功!',
    'game.win.timeUsed': '用时',
    'game.win.steps': '步数',
    'game.win.continue': '继续',
    'game.tryAgain': '再试一次',
    'game.save.aria': '游戏进度',
    'game.save.eyebrow': '自动存档',
    'game.save.title': '进度',
    'game.save.current': '当前进度',
    'game.save.slot': '上次存档',
    'game.save.save': '保存当前',
    'game.save.resume': '继续上次',
    'game.save.new': '新开一局',
    'game.save.restart': '重新开始',
    'game.save.autosave': '已自动保存，下次打开会继续这里。',
    'game.save.autosavePending': '关卡载入后会自动保存。',
    'game.save.delete': '删除存档',
    'game.save.emptyTitle': '暂无存档',
    'game.save.emptyMeta': '保存当前进度后，可从这里继续',
    'game.save.savedAt': '保存于 {time}',
    'game.save.currentStats': '{time} 秒 / {steps} 步 / 剩 {remain}',
    'game.save.slotStats': '{time} 秒 / {steps} 步 / 剩 {remain}{position}',
    'game.save.position': ' / {col},{row}',
    'game.save.noProgress': '还没有可保存的进度',
    'game.save.loading': '关卡正在加载',
    'game.save.moving': '角色停稳后再存档',
    'game.save.dead': '失败状态不能存档',
    'game.save.won': '进入下一关后再存档',
    'game.save.success': '已保存当前进度',
    'game.save.denied': '存档失败，浏览器拒绝写入',
    'game.save.none': '没有可继续的存档',
    'game.save.corrupt': '存档损坏，已清除',
    'game.save.resumed': '已从存档继续',
    'game.save.autorestored': '已接上次进度',
    'game.save.clearedStarting': '已清除存档，开始新游戏',
    'game.save.newStarted': '已开始新游戏',
    'game.save.deleted': '已删除存档',
    'game.save.failed': '操作失败，请稍后再试',
    'game.restart.open': '重新开始',
    'game.restart.title': '重新开始？',
    'game.restart.body': '选择重开当前关，或清空进度从第 1 关开始。',
    'game.restart.current': '重开本关',
    'game.restart.startOver': '从头开始',
    'game.restart.currentStarted': '已重开本关',
    'game.level': '第 {level} 关',
    'game.touch.root': '移动 Bobby',
    'game.touch.up': '向上移动',
    'game.touch.left': '向左移动',
    'game.touch.right': '向右移动',
    'game.touch.down': '向下移动',

    'editor.brand': 'Bobby 编辑器',
    'editor.link.game': '游戏',
    'editor.aria.builtInLevel': '内置关卡',
    'editor.aria.localLevel': '本地社区关卡',
    'editor.actions.loadBuiltIn': '载入',
    'editor.actions.openLocal': '打开',
    'editor.actions.saveLocal': '保存本地',
    'editor.actions.deleteLocal': '删除',
    'editor.actions.openGame': '打开游戏',
    'editor.actions.new': '新建',
    'editor.actions.undo': '撤销',
    'editor.actions.redo': '重做',
    'editor.actions.import': '导入',
    'editor.actions.export': '导出',
    'editor.actions.playtest': '试玩',
    'editor.actions.exportAssets': '导出资源 JSON',
    'editor.tools.heading': '工具',
    'editor.tools.select': '选择',
    'editor.tools.erase': '擦除',
    'editor.tiles.heading': '地砖',
    'editor.level.heading': '关卡',
    'editor.level.title': '标题',
    'editor.level.author': '作者',
    'editor.level.name': '名称',
    'editor.level.difficulty': '难度',
    'editor.level.tags': '标签',
    'editor.level.cols': '列数',
    'editor.level.rows': '行数',
    'editor.level.requiredCarrots': '需要胡萝卜',
    'editor.asset.heading': '资源动画',
    'editor.asset.object': '对象',
    'editor.asset.animation': '动画',
    'editor.asset.speed': '速度',
    'editor.asset.loop': '循环',
    'editor.asset.loopValue': '循环',
    'editor.asset.onceValue': '一次',
    'editor.asset.staticFrame': '静态帧',
    'editor.asset.static': '静态',
    'editor.asset.frame': '帧',
    'editor.asset.frames': '帧',
    'editor.asset.unavailable': '资源加载失败。',
    'editor.asset.none': '未选择动画。',
    'editor.asset.noFrame': '未选择帧。',
    'editor.asset.sheet': '图集',
    'editor.diagnostics.heading': '诊断',
    'editor.diagnostics.ok': '没有发现问题。',
    'editor.diagnostics.warning': '警告',
    'editor.diagnostics.error': '错误',
    'editor.selection.heading': '选中对象',
    'editor.selection.empty': '未选中对象。',
    'editor.selection.meta': '{kind} / id {id} / {col}, {row}',
    'editor.selection.direction': '方向',
    'editor.selection.corner': '转角',
    'editor.selection.color': '颜色',
    'editor.selection.open': '开启',
    'editor.selection.sharp': '尖刺',
    'editor.selection.angle': '角度',
    'editor.option.horizontal': '水平',
    'editor.option.vertical': '垂直',
    'editor.option.downRight': '下-右',
    'editor.option.downLeft': '下-左',
    'editor.option.upLeft': '上-左',
    'editor.option.upRight': '上-右',
    'editor.option.yellow': '黄色',
    'editor.option.red': '红色',
    'editor.option.blue': '蓝色',
    'editor.option.left': '向左',
    'editor.option.right': '向右',
    'editor.option.up': '向上',
    'editor.option.down': '向下',
    'editor.option.true': '是',
    'editor.option.false': '否',
    'editor.library.saved': '已保存为本地关卡：{title}。',
    'editor.library.emptyOption': '没有本地关卡',
    'editor.library.empty': '本地关卡库为空。',
    'editor.library.available.one': '已有 1 个本地关卡。',
    'editor.library.available.other': '已有 {count} 个本地关卡。',
    'editor.library.imported': '已导入并保存：{title}。',
    'editor.stats': '{cols}x{rows} / {entities} 个对象 / {carrots} 个胡萝卜',
    'editor.defaultTitle': '新社区关卡',
    'editor.defaultAuthor': '你',
    'editor.playtest.title': '试玩',
    'editor.playtest.restart': '重开',
    'editor.playtest.close': '关闭',
    'editor.difficulty.easy': '简单',
    'editor.difficulty.normal': '普通',
    'editor.difficulty.hard': '困难',
    'editor.difficulty.expert': '专家',

    'editor.group.Essentials': '基础',
    'editor.group.Walls': '墙体',
    'editor.group.Hazards': '机关',
    'editor.group.Conveyors': '传送带',
    'editor.group.Switches': '开关',
    'editor.group.Keys': '钥匙',

    'editor.tile.0': '草地',
    'editor.tile.1': '路径 1',
    'editor.tile.2': '路径 2',
    'editor.tile.3': '路径 3',
    'editor.tile.4': '路径 4',
    'editor.tile.5': '路径 5',
    'editor.tile.6': '路径 6',
    'editor.tile.7': '石砖 1',
    'editor.tile.8': '石砖 2',
    'editor.tile.9': '石砖 3',
    'editor.tile.10': '石砖 4',
    'editor.tile.11': '石砖 5',

    'editor.tool.player.label': '玩家',
    'editor.tool.player.description': '玩家控制的兔子；每关唯一，只能移动到黑色石砖地砖上。',
    'editor.tool.bornPlace.label': '出生点',
    'editor.tool.bornPlace.description': '出生点标记；每关唯一，用来标记兔子的初始位置。',
    'editor.tool.channel.label': '出口',
    'editor.tool.channel.description': '出口；收集足够胡萝卜后打开，兔子进入后通关。',
    'editor.tool.carrot.label': '胡萝卜',
    'editor.tool.carrot.description': '收集目标；吃到后计数增加，用于打开出口。',
    'editor.tool.barX.label': '横围栏',
    'editor.tool.barX.description': '横向可见围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.barY.label': '竖围栏',
    'editor.tool.barY.description': '纵向可见围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.barLeftTop.label': '左上围栏',
    'editor.tool.barLeftTop.description': '左上转角围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.barRightTop.label': '右上围栏',
    'editor.tool.barRightTop.description': '右上转角围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.barLeftBottom.label': '左下围栏',
    'editor.tool.barLeftBottom.description': '左下转角围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.barRightBottom.label': '右下围栏',
    'editor.tool.barRightBottom.description': '右下转角围栏；实体障碍，阻挡兔子进入该格。',
    'editor.tool.trapSafe.label': '安全陷阱',
    'editor.tool.trapSafe.description': '未触发陷阱；兔子踩上去安全，离开后会变成尖刺。',
    'editor.tool.trapSharp.label': '尖刺陷阱',
    'editor.tool.trapSharp.description': '尖刺陷阱；兔子踩上去会死亡并重开。',
    'editor.tool.stoneHorizontal.label': '水平石板',
    'editor.tool.stoneHorizontal.description': '水平单向石板；只允许左右方向通过，离开后切换方向。',
    'editor.tool.stoneVertical.label': '垂直石板',
    'editor.tool.stoneVertical.description': '垂直单向石板；只允许上下方向通过，离开后切换方向。',
    'editor.tool.stoneAngleDR.label': '下右转角',
    'editor.tool.stoneAngleDR.description': '转角石板；按图示连接两个方向，离开后旋转到下一方向。',
    'editor.tool.stoneAngleDL.label': '下左转角',
    'editor.tool.stoneAngleDL.description': '转角石板；按图示连接两个方向，离开后旋转到下一方向。',
    'editor.tool.stoneAngleUL.label': '上左转角',
    'editor.tool.stoneAngleUL.description': '转角石板；按图示连接两个方向，离开后旋转到下一方向。',
    'editor.tool.stoneAngleUR.label': '上右转角',
    'editor.tool.stoneAngleUR.description': '转角石板；按图示连接两个方向，离开后旋转到下一方向。',
    'editor.tool.conveyorLeft.label': '左传送带',
    'editor.tool.conveyorLeft.description': '横向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。',
    'editor.tool.conveyorRight.label': '右传送带',
    'editor.tool.conveyorRight.description': '横向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。',
    'editor.tool.conveyorUp.label': '上传送带',
    'editor.tool.conveyorUp.description': '纵向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。',
    'editor.tool.conveyorDown.label': '下传送带',
    'editor.tool.conveyorDown.description': '纵向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。',
    'editor.tool.conveyorButtonOn.label': '传送带开',
    'editor.tool.conveyorButtonOn.description': '传送带开关；踩到开启状态会反转所有传送带方向，并切换其他传送带按钮状态。',
    'editor.tool.conveyorButtonOff.label': '传送带关',
    'editor.tool.conveyorButtonOff.description': '关闭状态的传送带开关；当前不会触发，等待其他同类按钮切换。',
    'editor.tool.stoneButtonOn.label': '石板开',
    'editor.tool.stoneButtonOn.description': '石板开关；踩到开启状态会切换所有直线/转角石板方向，并切换其他石板按钮状态。',
    'editor.tool.stoneButtonOff.label': '石板关',
    'editor.tool.stoneButtonOff.description': '关闭状态的石板开关；当前不会触发，等待其他同类按钮切换。',
    'editor.tool.keyYellow.label': '黄钥匙',
    'editor.tool.keyYellow.description': '黄色钥匙；收集后可打开一个黄色锁。',
    'editor.tool.keyRed.label': '红钥匙',
    'editor.tool.keyRed.description': '红色钥匙；收集后可打开一个红色锁。',
    'editor.tool.keyBlue.label': '蓝钥匙',
    'editor.tool.keyBlue.description': '蓝色钥匙；收集后可打开一个蓝色锁。',
    'editor.tool.lockYellow.label': '黄锁',
    'editor.tool.lockYellow.description': '黄色锁；没有黄色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。',
    'editor.tool.lockRed.label': '红锁',
    'editor.tool.lockRed.description': '红色锁；没有红色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。',
    'editor.tool.lockBlue.label': '蓝锁',
    'editor.tool.lockBlue.description': '蓝色锁；没有蓝色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。',

    'diagnostic.tileCount': 'tilemap 有 {actual} 个地砖，预期 {expected} 个',
    'diagnostic.onePlayer': '关卡必须恰好有一个玩家',
    'diagnostic.oneSpawn': '关卡应该恰好有一个出生点',
    'diagnostic.exitRequired': '关卡必须有出口',
    'diagnostic.requiredCarrots': '需要胡萝卜 {required} 个，超过已放置的 {placed} 个',
    'diagnostic.invalidTile': 'tilemap 包含无效地砖 id {tileId}',
    'diagnostic.outOfBounds': '{kind} {id} 超出 tilemap 边界',
    'diagnostic.notWalkable': '{kind} {id} 不在可行走石砖上',
    'diagnostic.invalidSign': '{kind} {id} 的 sign 无效',
    'diagnostic.invalidDirection': '{kind} {id} 的方向无效',
    'diagnostic.invalidOpen': '{kind} {id} 的 open 状态无效',
  },
};

let activeLanguage = readInitialLanguage();
const listeners = new Set<(language: Language) => void>();

function readInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
    if (window.navigator.language.toLowerCase().startsWith('zh')) return 'zh';
  }
  return 'en';
}

function applyDocumentLanguage(language: Language) {
  if (typeof document !== 'undefined') document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
}

applyDocumentLanguage(activeLanguage);

export function language(): Language {
  return activeLanguage;
}

export function setLanguage(next: Language) {
  if (next === activeLanguage) return;
  activeLanguage = next;
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, next);
  applyDocumentLanguage(next);
  for (const listener of listeners) listener(next);
}

export function toggleLanguage() {
  setLanguage(activeLanguage === 'zh' ? 'en' : 'zh');
}

export function subscribeLanguage(listener: (language: Language) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function t(key: string, params: Record<string, string | number> = {}): string {
  const template = messages[activeLanguage][key] ?? messages.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? `{${name}}`));
}

export function languageToggleText(): string {
  return t('common.language.target');
}

export function languageToggleLabel(): string {
  return t('common.language.switch');
}

export function formatMapName(mapName: string): string {
  const level = mapName.match(/^map(\d+)$/)?.[1];
  return level ? t('game.level', { level }) : mapName;
}

export function formatSaveTime(timestamp: number): string {
  const locale = activeLanguage === 'zh' ? 'zh-CN' : 'en-US';
  return new Date(timestamp).toLocaleString(locale, {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function editorToolLabel(tool: string): string {
  return t(`editor.tool.${tool}.label`);
}

export function editorToolDescription(tool: string): string {
  return t(`editor.tool.${tool}.description`);
}

export function editorGroupLabel(group: string): string {
  return t(`editor.group.${group}`);
}

export function editorTileLabel(tileId: number): string {
  return t(`editor.tile.${tileId}`);
}

export function formatDiagnosticMessage(message: string): string {
  let match = message.match(/^tilemap has (\d+) tiles, expected (\d+)$/);
  if (match) return t('diagnostic.tileCount', { actual: match[1], expected: match[2] });
  if (message === 'level must have exactly one player') return t('diagnostic.onePlayer');
  if (message === 'level should have exactly one bornPlace') return t('diagnostic.oneSpawn');
  if (message === 'level must have a channel or goal') return t('diagnostic.exitRequired');
  match = message.match(/^required carrots (\d+) exceeds placed carrots (\d+)$/);
  if (match) return t('diagnostic.requiredCarrots', { required: match[1], placed: match[2] });
  match = message.match(/^tilemap contains invalid tile id (.+)$/);
  if (match) return t('diagnostic.invalidTile', { tileId: match[1] });
  match = message.match(/^(\w+) (-?\d+) is outside the tilemap bounds$/);
  if (match) return t('diagnostic.outOfBounds', { kind: match[1], id: match[2] });
  match = message.match(/^(\w+) (-?\d+) is not on walkable ground$/);
  if (match) return t('diagnostic.notWalkable', { kind: match[1], id: match[2] });
  match = message.match(/^(\w+) (-?\d+) has invalid sign$/);
  if (match) return t('diagnostic.invalidSign', { kind: match[1], id: match[2] });
  match = message.match(/^(\w+) (-?\d+) has invalid direction1$/);
  if (match) return t('diagnostic.invalidDirection', { kind: match[1], id: match[2] });
  match = message.match(/^(\w+) (-?\d+) has invalid open value$/);
  if (match) return t('diagnostic.invalidOpen', { kind: match[1], id: match[2] });
  return message;
}
