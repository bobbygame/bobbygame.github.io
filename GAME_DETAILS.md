# Bobby Carrot Game Details

Observed against `https://game.snapre.online` in Chrome on 2026-05-09 and checked against the current in-repo level data.

## Flow

- The game is a 30-level tile puzzle. Completing level 30 advances to the end screen.
- Each level starts with Bobby at `bornPlace`; the HUD shows `Time`, `Level`, and `Remain`.
- The player collects every `carrot1` on the map. `Remain` is backed by the level's required carrot count.
- When the remaining carrot count reaches 0, the `channel` switches to its open animation.
- Entering the open channel shows the `SUCCESS!` overlay with `Time Use`, `Steps`, `Continue`, and success audio. Any key or touching Continue advances to the next level.
- The end screen displays `THE END`, a large Bobby image, `SUCCESS!`, `DLUT`, `Restart`, `Continue`, and `MyBlog(Click Me)`.

## Controls And Feedback

- Keyboard movement uses `W/A/S/D`; touch controls use the on-screen direction buttons.
- `Alt` or touching `Restart` restarts the current level.
- Bobby has waiting, directional movement, and dead animations.
- Runtime audio assets are `main`, `go`, `dead`, `success`, and `lock2`.
- The canvas is centered on a black page, with the tile art/grass background filling the game viewport.

## Mechanics

- Bobby can move only on the dark stone ground tile IDs `7-11`; grass/decorative ground tile IDs `0-6` are not walkable.
- Bar objects block movement as visible fence entities.
- Traps kill Bobby only when their `isSharp` instance variable is set; death plays the dead animation/audio and restarts the level.
- Horizontal and vertical conveyor belts are one-way movement gates: entering a belt against its `direction1` is blocked.
- Conveyor belt buttons toggle every conveyor button and flip all belt directions.
- Stones are directional floor tiles, not pushable boxes. `stone.sign = 1` allows horizontal movement, `stone.sign = 2` allows vertical movement, and the sign advances after Bobby leaves the tile.
- Directional stones (`stoneAngle`) add one-way entry/exit constraints through their `sign` value, and also advance after Bobby leaves the tile.
- Stone buttons toggle every stone button and rotate all stone and directional-stone state.
- Keys and locks use matching sign/color state. Collecting a key sets a persistent color flag; opening a matching lock does not consume that color flag.

## Level Object Matrix

| Level | Carrots | Traps | Conv X | Conv Y | Conv Buttons | Stones | Angle Stones | Stone Buttons | Keys | Locks |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 13 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 12 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 35 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | 19 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 6 | 24 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | 34 | 24 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | 8 | 10 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9 | 27 | 2 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | 17 | 6 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 11 | 16 | 8 | 6 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 12 | 27 | 12 | 8 | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | 8 | 2 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 14 | 17 | 4 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 |
| 15 | 10 | 0 | 0 | 1 | 0 | 4 | 4 | 0 | 0 | 0 |
| 16 | 21 | 1 | 5 | 4 | 5 | 1 | 0 | 1 | 0 | 0 |
| 17 | 21 | 4 | 2 | 0 | 1 | 4 | 0 | 3 | 0 | 0 |
| 18 | 18 | 0 | 0 | 0 | 0 | 10 | 8 | 3 | 3 | 3 |
| 19 | 8 | 8 | 0 | 0 | 0 | 15 | 7 | 2 | 0 | 0 |
| 20 | 23 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 2 |
| 21 | 18 | 12 | 2 | 2 | 2 | 8 | 0 | 1 | 0 | 0 |
| 22 | 18 | 5 | 0 | 2 | 2 | 9 | 3 | 4 | 1 | 1 |
| 23 | 32 | 3 | 0 | 1 | 3 | 8 | 4 | 4 | 0 | 0 |
| 24 | 11 | 13 | 0 | 2 | 0 | 4 | 10 | 5 | 0 | 0 |
| 25 | 21 | 4 | 2 | 2 | 3 | 12 | 4 | 5 | 2 | 2 |
| 26 | 65 | 14 | 0 | 0 | 0 | 2 | 2 | 2 | 2 | 2 |
| 27 | 8 | 5 | 0 | 0 | 0 | 11 | 9 | 4 | 0 | 0 |
| 28 | 21 | 10 | 2 | 0 | 5 | 0 | 2 | 0 | 0 | 0 |
| 29 | 15 | 17 | 0 | 0 | 0 | 3 | 7 | 2 | 0 | 0 |
| 30 | 10 | 5 | 0 | 2 | 2 | 3 | 4 | 2 | 1 | 1 |
