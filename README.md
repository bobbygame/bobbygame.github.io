# Bobby Carrot

目标：把 Construct 3 导出的 Bobby Carrot 迁移成纯 Vite + TypeScript 项目，本地根路径逐步对齐线上 `https://game.snapre.online`，运行时不加载 Construct runtime 或 Construct 导出的 `data.json`。

- `/`：纯 Vite/TypeScript 游戏入口。
- `src/data/generated.ts`：项目自有的关卡和素材 manifest，构建时直接打包进 Vite。
- `public/game/images`、`public/game/media`、`public/game/fonts`：运行时静态素材。
- `src/`：TypeScript 游戏运行时，负责关卡加载、状态机、碰撞、机关、音频和 Canvas 渲染。
- `GAME_DETAILS.md`：线上通关观察与 30 关对象矩阵。

## 开发

```sh
npm install
npm run dev
# 打开 http://localhost:5173/ 查看纯 Vite 版本
```

## 构建与预览

```sh
npm run build
npm run preview
# 预览 dist，访问 http://localhost:4173/
```

## 目录
- `src/main.ts`：游戏循环（键盘 ← → ↑ ↓ / WASD），调用系统驱动实体与渲染。
- `src/game/*`：
	- `loader.ts`：读取 `src/data/generated.ts` 并构造成运行态实体。
	- `movement.ts`：网格移动、基础阻塞（墙/石头/方向石/锁）。
	- `interactions.ts`：拾取钥匙/胡萝卜、开锁、到达终点、踩陷阱。
	- `assetManifest.ts`：读取自有素材 manifest。
	- `render.ts`：Canvas 渲染真实 tilemap、精灵、HUD 和胜利/结束画面。
- `src/data/parseTilemap.ts`：解析 tilemap RLE 数据。
- `src/data/types.ts`：自有布局、图层、实例和 tilemap 类型定义。
- `src/data/generated.ts`：已转换后的布局数据和 spritesheet 坐标。
- `scripts/export-game-data.mjs`：一次性转换工具，输入外部原始导出的 `data.json`，输出 `src/data/generated.ts`。

## 目前已翻译的事件表核心
- 关卡从 `src/data/generated.ts` 加载；tilemap 和实体使用 atlas 坐标绘制，不依赖 Construct runtime。
- 玩家网格移动（每格 50px），墙/石头/方向石/锁阻塞，方向石按 sign 粗译的方向阻断规则。
- 钥匙/锁（按 sign 匹配消耗），胡萝卜计数，终点判定，陷阱击杀（简单结束）。
- **石块推挤**：向石头移动时自动推动，需后方空地。
- **传送带系统**：conveyorBeltX/Y 按 direction1 推送玩家（0=左/上，1=右/下）；到达格子后自动触发。
- **传送带按钮**：踩到 conveyorBeltButton 切换所有传送带方向（toggle isLeft/isUp）。
- **石块按钮**：踩到 stoneButton 旋转所有石头/方向石 sign（石头 1→2→3→1，方向石 1→5 循环）。
- **时间/步数统计**：实时追踪游戏时间（MM:SS 格式）和移动步数，显示在 HUD 左上角。
- **音效系统**：收集物品、开锁、按按钮、死亡、胜利时播放对应音效；背景音乐循环播放（可能被浏览器自动播放策略阻止）。
- **动画状态**：追踪玩家状态（idle/moving/dead）和朝向（← → ↑ ↓），HUD 显示当前动画状态。
- **胜利/死亡画面**：达到终点显示胜利提示（按任意键继续），死亡后 2 秒自动重启关卡。

## 不足与待办
- 物理/寻路行为、事件表其他细节（如特定关卡专用逻辑）未完全等价。
- 结束页的视频对象目前未复刻。
- 部分按钮、陷阱、方向石的事件细节仍需继续按线上表现补齐。

## 下一步建议
1) 扩展 TS 运行壳：
	- 解析对象实例行为/变量，驱动实体更新循环。
	- 替换图片 atlas/动画，重建精灵表驱动。
2) 继续按线上表现补齐：
	- 用手写状态机补齐剩余关卡专用逻辑。
	- 增加关卡回归测试和关键路径截图比对。
