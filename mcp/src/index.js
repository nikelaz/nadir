#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { CLASSES } from './data.js';

const BUNDLES = ['typography', 'spacing', 'layout', 'decorations', 'interactive'];

const server = new Server(
  { name: 'nadir-mcp', version: '0.1.0' },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'nadir_list',
      description: 'List Nadir CSS utility classes. Returns class names, the CSS they apply, and which bundle they belong to. Optionally filter by bundle.',
      inputSchema: {
        type: 'object',
        properties: {
          bundle: {
            type: 'string',
            enum: BUNDLES,
            description: 'Filter to a specific bundle. Omit to return all classes.',
          },
        },
      },
    },
    {
      name: 'nadir_get',
      description: 'Get details for a specific Nadir CSS class by name. Pass the class name without the leading dot (e.g. "stack-x", "font-md", "margin-lg").',
      inputSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The class name without the leading dot.',
          },
        },
        required: ['name'],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'nadir_list') {
    const results = args?.bundle
      ? CLASSES.filter((c) => c.bundle === args.bundle)
      : CLASSES;
    return {
      content: [{ type: 'text', text: JSON.stringify(results, null, 2) }],
    };
  }

  if (name === 'nadir_get') {
    const entry = CLASSES.find((c) => c.name === args.name);
    if (!entry) {
      return {
        content: [{ type: 'text', text: `Class "${args.name}" not found. Use nadir_list to browse available classes.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: 'text', text: JSON.stringify(entry, null, 2) }],
    };
  }

  return {
    content: [{ type: 'text', text: `Unknown tool: ${name}` }],
    isError: true,
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
