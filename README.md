# Deno CLI Text Transformer

A command-line interface tool built exclusively with Deno that:
- Transforms text into different cases
- Calls an uppercase implementation written in native C
- Outputs text in different colours and backgrounds, supported by Deno's standard text library

## Features

- Text case transformations:
  - Uppercase (using both JavaScript and C implementations)
  - Snake case
  - Kebab case
- Age verification check
- Confirmation dialog
- Run anywhere using pre-compiled binaries (Mac Silicon and Windows)

## Usage

### Clone Repository

```sh
git clone https://github.com/Ellipsoul/deno-casify.git
```

or

```sh
gh repo clone Ellipsoul/deno-casify
```

### Run Commands

Example on Mac:

```sh
./binaries/cli_mac --snake --text "Hello World on Mac"
```

Example in Windows

```sh
./binaries/cli_windows.exe --camel --text "Hello World on Windows"
```

If you have Deno installed, you can run the TypeScript file directly:

```sh
deno run --allow-ffi main.ts --text "Hello World with Deno" --snake --kebab
```

## How this was Compiled

Deno provides built-in functionality for compiling files into executable binaries:

For Mac Silicon (ARM64):
```bash
deno compile --target aarch64-apple-darwin --allow-ffi -o binaries/cli_mac main.ts
```

For Windows (x86_64):
```bash
deno compile --target x86_64-pc-windows-msvc --allow-ffi -o binaries/cli_windows main.ts
```