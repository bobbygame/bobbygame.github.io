# Bobby Carrot 🐰🥕

语言：中文 | [English](README.en.md)  
架构文档：[中文](docs/architecture.md) | [English](docs/architecture.en.md)

Bobby Carrot 是一个纯 Vite + TypeScript 实现的网格解谜游戏。玩家控制兔子在 50px 网格地图中移动，收集每关要求的胡萝卜，理解机关规则，最终抵达出口。

![image](./public/cover.png)

在线试玩：[https://g.snapre.fun/](https://g.snapre.fun/)

终端版已发布到 npm：

```sh
npm install -g bobbygame
bobby-carrot
```

## 游戏目标

每一关都是一个小型机关谜题：

- 收集当前关卡要求数量的胡萝卜。
- 避开或利用陷阱、方向石、传送带、锁和按钮。
- 找到可行路径，到达终点或打开出口。
- 在移动端可以使用底部方向舵，桌面端使用方向键或 WASD。
- 网页游戏和 `/editor` 都支持中文 / English 切换。

## 关卡设计

项目目前包含 30 个关卡，关卡数据按文件拆分在 `src/content/levels/`。每关由 tilemap、实体实例和机关变量组成，运行时统一转换为游戏状态。

核心设计元素：

- **胡萝卜目标**：每关有独立的收集目标，HUD 中的 `Remain` 会显示剩余数量。
- **钥匙与锁**：钥匙按颜色匹配锁，开锁后钥匙会被消耗，已持有钥匙会显示在右上角。
- **方向石**：只能从开口方向进出。兔子踩过后离开格子时，方向石顺时针旋转一次。
- **石块**：按当前方向限制通行。红色按钮会影响地图内石块方向。
- **传送带**：按单向方向传送兔子，不能逆向进入。黄色按钮会反转传送带方向。
- **按钮组**：踩下当前按钮后，同类型其他按钮会反转状态，并触发对应机关变化。
- **陷阱**：第一次踩下会进入待触发状态，离开后重新变危险；再次踩中会失败。
- **出口**：满足胡萝卜数量后出口打开，进入后完成关卡。

关卡设计鼓励“先观察，再行动”：很多路线不是靠连续移动完成，而是通过改变机关状态、规划踩踏顺序和利用单向移动完成。

## 社区关卡编辑器

`/editor` 提供一个网页关卡编辑器，面向社区共建关卡的本地创作流程：

- 从空白关卡开始，或加载内置 `map1` 到 `map30` 作为参考。
- 使用真实素材预览的 tile 和 entity 工具在 50px 网格上摆放地形、胡萝卜、机关、出口和玩家。
- 实体工具覆盖素材图集里的主要关卡对象：栅栏/墙体、陷阱状态、方向石、传送带方向、按钮状态、三色钥匙锁和装饰素材。
- 右侧 Asset Animation 面板可以查看和调整素材对象的动画定义，包括动作、帧序列、速度、循环状态和单帧 atlas 坐标，并可导出修改后的 asset manifest JSON。
- 通过右侧属性面板编辑方向石、传送带、钥匙锁、按钮和陷阱状态。
- 实时复用运行时关卡校验，提示缺玩家、缺出口、目标胡萝卜数量不合理、实体出界等问题。
- 使用 Playtest 在当前浏览器页内直接试玩正在编辑的关卡。
- 导出 `.bobby-level.json`，里面包含标题、作者、难度、标签和 `LevelDefinition`。
- 使用 Save Local 保存到浏览器本地关卡库，再用 Open Game 直接以游戏模式打开。
- 支持 Undo / Redo，选择工具下可以拖拽移动实体。

第一版编辑器是本地文件流，不依赖账号或服务器。社区投稿可以先以 `.bobby-level.json` 附件、issue 或 PR 的方式提交；正式收录前应运行：

```sh
npm run validate:levels
```

保存到本地关卡库后，也可以用 URL 直接试玩：

```txt
http://localhost:5173/?community=<local-level-id>
```

## 本地开发

```sh
npm install
npm run dev
```

默认地址：`http://localhost:5173/`

指定关卡可以加查询参数：

```txt
http://localhost:5173/?map=map20
```

社区关卡编辑器：

```txt
http://localhost:5173/editor
```

构建：

```sh
npm run typecheck
npm run validate:levels
npm run build
```

## 终端版本

项目同时提供一个 TUI 版本，可以在终端里直接玩同一套关卡数据：

```sh
npm install -g bobbygame
bobby-carrot
```

安装后会提供两个命令入口，`bobby-carrot` 是完整命令，`bobbyc` 是短命令：

```sh
bobby-carrot --map map1
bobbyc --map map20 --ascii
```

也可以不全局安装，直接临时运行 npm 包：

```sh
npx --package bobbygame bobbyc --map map1
```

本地开发时可以先构建再运行：

```sh
npm run build:tui
node dist-tui/cli.js --map map1
```

TUI 默认使用 emoji / symbol 渲染，地砖、障碍、玩家、目标、钥匙、锁、按钮和传送带都会用终端字符展示。部分终端对 emoji 宽度处理不一致时，可以切换到 ASCII 模式：

```sh
bobby-carrot --map map1 --ascii
```

终端控制：

- 方向键 / WASD：移动兔子
- R：重开当前关
- N：通关后进入下一关
- Q / Ctrl+C：退出

本地生成 npm 安装包：

```sh
npm pack
npm install -g ./bobbygame-*.tgz
bobby-carrot
```

## 项目结构

完整架构说明见 [`docs/architecture.md`](docs/architecture.md)，英文版见 [`docs/architecture.en.md`](docs/architecture.en.md)。

```txt
src/main.ts                 浏览器启动入口
src/game/runtime.ts         浏览器运行时生命周期、输入、渲染调度
src/game/simulation.ts      纯游戏状态更新入口
src/game/levelDefinition.ts 关卡定义数据结构
src/game/stateFactory.ts    关卡定义到运行时状态的转换
src/game/levelValidation.ts 关卡结构和数据质量校验
src/game/movement.ts        网格移动、碰撞、锁、传送带移动
src/game/interactions.ts    胡萝卜、钥匙、陷阱、出口等到达格处理
src/game/buttons.ts         红色/黄色按钮和机关联动
src/game/render.ts          Canvas 渲染、HUD、胜利/失败提示
src/game/touchControls.ts   移动端方向舵
src/tools/validate-levels.ts 关卡校验 CLI
src/tui/cli.ts              终端版本入口和字符渲染
src/content/levels/         关卡数据，每关一个文件
src/content/assets.ts       精灵图坐标和动画配置
public/assets/              图片、音频、字体素材
```

## 参与共建

欢迎围绕“关卡设计”和“机关表现”参与贡献。比较适合的贡献方向：

- **新增关卡**：基于现有关卡格式提交新的 `mapXX.ts`，说明目标胡萝卜数量、机关组合和推荐通关思路。
- **优化关卡**：修复不可达路径、错误机关方向、误导性摆放、过难或过简单的路线。
- **补齐机制**：如果发现和预期规则不一致，可以提交最小复现场景或直接修复运行时逻辑。
- **改进素材**：在保持原版像素风的前提下，提升精灵、音效、HUD 和移动端控制体验。
- **测试与验收**：补充关键关卡的通关路径说明、截图或自动化回归检查。

提交建议：

1. 一个 PR 聚焦一个主题，例如“修复第 4 关传送带方向”或“新增第 31 关”。
2. 关卡改动请说明变更前后的可通关路径。
3. 机制改动请说明影响到哪些实体类型，并尽量附带测试关卡或截图。
4. 提交前运行 `npm run typecheck`、`npm run validate:levels` 和 `npm run build`。

## 技术说明

当前项目是纯 Vite + TypeScript 工程。地图、精灵、机关和状态机都由仓库内代码和数据驱动，方便社区继续维护和扩展。


## Star History

<a href="https://www.star-history.com/?repos=bobbygame%2Fbobbygame.github.io&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=bobbygame/bobbygame.github.io&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=bobbygame/bobbygame.github.io&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=bobbygame/bobbygame.github.io&type=date&legend=top-left" />
 </picture>
</a>
