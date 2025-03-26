# Nadir

Static site builder focused on simplicity. 

## Status

This project is in **early development**. Currently it supports:

- [x] Partials
- [ ] Templates
- [ ] Dev Mode (Watcher)

## Installation

### Cargo

To install with cargo, just install the tool globally with:

```
cargo install nadir
```

Then you can run the static site builder in your project directory:

```
nadir
```

## Usage

For example usage and syntax, check out the [example](https://github.com/nikelaz/nadir/tree/main/example) folder.

## Configuration

In your project create a nadir.config.json file, with the following structure:

```
{
  "inputDir": "src",
  "outputDir": "dist"
}
```

- `inputDir` - is the directory where your html (and other files) for your site are
- `outputDir` - is the directory where the build static site will be written/saved to

