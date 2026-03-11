# MCP Server

Nadir ships an [MCP](https://modelcontextprotocol.io) server (`@nikelaz/nadir-mcp`) that lets AI coding assistants look up Nadir classes directly. Instead of guessing class names or relying on training data, the AI can query the server at code-generation time and use the right classes.

## Setup

### Claude Code

Add the server to your Claude Code MCP config (`~/.claude/mcp.json` or via the `/mcp` command):

```json
{
  "mcpServers": {
    "nadir": {
      "command": "npx",
      "args": ["-y", "@nikelaz/nadir-mcp@latest"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "nadir": {
      "command": "npx",
      "args": ["-y", "@nikelaz/nadir-mcp@latest"]
    }
  }
}
```

No installation step is needed — `npx` fetches and runs the package on first use.

## Tools

### `nadir_list`

Lists Nadir CSS classes. Returns each class's name, the CSS it applies, and its bundle.

**Optional input:**

```json
{ "bundle": "layout" }
```

Valid bundle values: `typography`, `spacing`, `layout`, `decorations`, `interactive`.

Omit `bundle` to return all 320 classes.

**Example output (excerpt):**

```json
[
  {
    "name": "stack-x",
    "bundle": "layout",
    "css": "display: flex; flex-direction: row;",
    "description": "Horizontal flex row container"
  },
  {
    "name": "flex-1",
    "bundle": "layout",
    "css": "flex: 1 1 0%;",
    "description": "Grow and shrink, ignoring initial size"
  }
]
```

---

### `nadir_get`

Returns details for a single class by name.

**Required input:**

```json
{ "name": "stack-x" }
```

Pass the class name without the leading dot. Returns a single object, or an error if the class is not found.

**Example output:**

```json
{
  "name": "stack-x",
  "bundle": "layout",
  "css": "display: flex; flex-direction: row;",
  "description": "Horizontal flex row container"
}
```
