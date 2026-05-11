import { levelNames } from '../content';
import { loadLevelDefinition } from '../game/loader';
import { formatLevelDiagnostics, validateLevelDefinition } from '../game/levelValidation';

declare const process: {
  exitCode?: number;
};

async function main() {
  let errorCount = 0;
  let warningCount = 0;

  for (const levelName of levelNames) {
    const level = await loadLevelDefinition(levelName);
    const diagnostics = validateLevelDefinition(level);

    if (diagnostics.length > 0) {
      console.log(formatLevelDiagnostics(levelName, diagnostics));
    }

    errorCount += diagnostics.filter((diagnostic) => diagnostic.severity === 'error').length;
    warningCount += diagnostics.filter((diagnostic) => diagnostic.severity === 'warning').length;
  }

  console.log(`Validated ${levelNames.length} levels: ${errorCount} errors, ${warningCount} warnings.`);
  if (errorCount > 0) process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
