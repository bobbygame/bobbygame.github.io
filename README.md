# Bobby Carrot

目标：把 Construct 3 导出的 Bobby Carrot 反解成纯 Vite + TypeScript 项目，本地根路径逐步对齐线上 `https://game.snapre.online`，但生产入口不加载 Construct runtime。

- `/`：纯 Vite/TypeScript 游戏入口。
- `/game/`：原始 Construct 3 导出，仅作对照基准。
- `public/game/`：原始 Construct 3 导出和素材来源；纯 Vite 入口只读取其中的图片、音频、字体、`data.json`，不加载 `c3runtime.js`。
- `public/c3/`：解包后的 C3 源 JSON（事件表、布局、对象类型等）。
- `src/`：新的 TypeScript 游戏运行时，直接读取 `public/c3/` 的关卡 JSON 和 `public/game/data.json` 的 spritesheet 坐标。
- `GAME_DETAILS.md`：线上通关观察与 30 关对象矩阵。

## 开发

```sh
npm install
npm run dev
# 打开 http://localhost:5173/ 查看纯 Vite 版本
# 打开 http://localhost:5173/game/ 对照原始 Construct 导出
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
	- `loader.ts`：读取 `public/c3/layouts/*.json` 并构造成运行态实体。
	- `movement.ts`：网格移动、基础阻塞（墙/石头/方向石/锁）。
	- `interactions.ts`：拾取钥匙/胡萝卜、开锁、到达终点、踩陷阱。
	- `assetManifest.ts`：从 Construct `data.json` 解析 spritesheet 坐标。
	- `render.ts`：Canvas 渲染真实 tilemap、精灵、HUD 和胜利/结束画面。
- `src/c3/parseTilemap.ts`：解析 C3 tilemap RLE 数据。
- `src/c3/types.ts`：简化的类型定义。
- `public/c3/`：C3 JSON 资产。
- `public/game/`：原始构建。

## 目前已翻译的事件表核心
- 关卡从 C3 JSON 加载；tilemap 和实体使用原始 atlas 坐标绘制，不依赖 Construct runtime。
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
- 部分按钮、陷阱、方向石的事件表细节仍需继续从 `public/c3/eventSheets` 翻译。

## 下一步建议
1) 扩展 TS 运行壳：
	- 解析对象实例行为/变量，驱动实体更新循环。
	- 将事件表（`public/c3/eventSheets`）转译为 JS/TS 逻辑，或手写状态机取代。
	- 替换图片 atlas/动画，重建精灵表驱动。
2) 若要完全摆脱 Construct：
	- 把关卡数据（tilemap、实例列表）抽成自定义 JSON schema，编写自己的编辑/关卡加载与物理/寻路逻辑。
	- 渐进迁移：先复刻核心交互（移动、机关、收集、陷阱），再移除依赖的插件（Physics/Pathfinding 等）。
3) 如果需要，我可以继续把事件表翻译成可读 TS，或搭建一个简易关卡/实体系统。
