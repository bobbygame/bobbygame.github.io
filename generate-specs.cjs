const fs = require('fs');

// Symbol mapping for entities
const symbols = {
  'bobby': '🐰',
  'wall': '█',
  'stone': '◆',
  'stoneAngle': '◇',
  'key': '🔑',
  'lock': '🔒',
  'carrot1': '🥕',
  'carrotn': '🥕',
  'finallyBobby': '🏁',
  'trap': '⚠',
  'channel': '🚪',
  'conveyorBeltX': '→',
  'conveyorBeltY': '↓',
  'conveyorBeltButton': '⊙',
  'stoneButton': '⊗',
  'bornPlace': '⊕'
};

for (let i = 1; i <= 30; i++) {
  const mapName = `map${i}`;
  const layoutPath = `public/c3/layouts/${mapName}.json`;
  
  if (!fs.existsSync(layoutPath)) continue;
  
  const layout = JSON.parse(fs.readFileSync(layoutPath, 'utf8'));
  const width = layout.width || 800;
  const height = layout.height || 800;
  const gridW = Math.floor(width / 50);
  const gridH = Math.floor(height / 50);
  
  // Create empty grid
  const grid = Array(gridH).fill(0).map(() => Array(gridW).fill('·'));
  const entities = [];
  
  // Process all layers
  for (const layer of layout.layers) {
    for (const inst of layer.instances) {
      const x = Math.round(inst.world.x / 50);
      const y = Math.round(inst.world.y / 50);
      const w = Math.round(inst.world.width / 50);
      const h = Math.round(inst.world.height / 50);
      const type = inst.type;
      
      // Skip tilemaps and some UI elements
      if (type.toLowerCase().startsWith('tilemap') || 
          ['continue', 'restartLevel', 'whiteLayer'].includes(type)) {
        continue;
      }
      
      const symbol = symbols[type] || type.substring(0, 1).toUpperCase();
      
      entities.push({
        type,
        x: inst.world.x,
        y: inst.world.y,
        w: inst.world.width,
        h: inst.world.height,
        data: inst.instanceVariables
      });
      
      // Place on grid
      for (let dy = 0; dy < h; dy++) {
        for (let dx = 0; dx < w; dx++) {
          const gx = x + dx;
          const gy = y + dy;
          if (gx >= 0 && gx < gridW && gy >= 0 && gy < gridH) {
            grid[gy][gx] = symbol;
          }
        }
      }
    }
  }
  
  // Generate markdown
  let md = `# ${mapName.toUpperCase()}\n\n`;
  md += `## 地图布局 (${gridW}x${gridH})\n\n`;
  md += `\`\`\`\n`;
  for (const row of grid) {
    md += row.join('') + '\n';
  }
  md += `\`\`\`\n\n`;
  
  md += `## 对象列表\n\n`;
  md += `| 类型 | 位置 (x,y) | 尺寸 (w×h) | 数据 |\n`;
  md += `|------|-----------|-----------|------|\n`;
  
  for (const ent of entities) {
    const dataStr = JSON.stringify(ent.data || {});
    md += `| ${ent.type} | (${ent.x},${ent.y}) | ${ent.w}×${ent.h} | ${dataStr} |\n`;
  }
  
  md += `\n## 图例\n\n`;
  md += `- 🐰 bobby (玩家)\n`;
  md += `- █ wall (墙)\n`;
  md += `- ◆ stone (石头)\n`;
  md += `- ◇ stoneAngle (斜角石头)\n`;
  md += `- 🔑 key (钥匙)\n`;
  md += `- 🔒 lock (锁)\n`;
  md += `- 🥕 carrot (胡萝卜)\n`;
  md += `- 🏁 finallyBobby (终点)\n`;
  md += `- ⚠ trap (陷阱)\n`;
  md += `- 🚪 channel (通道)\n`;
  md += `- → conveyorBeltX (横向传送带)\n`;
  md += `- ↓ conveyorBeltY (纵向传送带)\n`;
  md += `- ⊙ conveyorBeltButton (传送带按钮)\n`;
  md += `- ⊗ stoneButton (石头按钮)\n`;
  md += `- ⊕ bornPlace (出生点)\n`;
  md += `- · 空地\n`;
  
  fs.writeFileSync(`spec/${mapName}.md`, md, 'utf8');
  console.log(`Generated spec/${mapName}.md`);
}

console.log('\n✅ All spec files generated!');
