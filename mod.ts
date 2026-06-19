// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const bug_setup_envTool: Tool = {
  definition: {
    name: 'bug_setup_env',
    description: 'Set up minimal reproduction environment',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[bug-reproduction] bug_setup_env executed');
      return ok('bug_setup_env', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'bug_setup_env',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const bug_write_testTool: Tool = {
  definition: {
    name: 'bug_write_test',
    description: 'Write minimal failing test case',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[bug-reproduction] bug_write_test executed');
      return ok('bug_write_test', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'bug_write_test',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const bug_verifyTool: Tool = {
  definition: {
    name: 'bug_verify',
    description: 'Verify reproduction is clean and minimal',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[bug-reproduction] bug_verify executed');
      return ok('bug_verify', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'bug_verify',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const bug_generate_repoTool: Tool = {
  definition: {
    name: 'bug_generate_repo',
    description: 'Generate shareable reproduction repo',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[bug-reproduction] bug_generate_repo executed');
      return ok('bug_generate_repo', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'bug_generate_repo',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-bug-reproduction] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-bug-reproduction] Unloading...');
}
export const tools: Tool[] = [
  bug_setup_envTool,
  bug_write_testTool,
  bug_verifyTool,
  bug_generate_repoTool,
];
