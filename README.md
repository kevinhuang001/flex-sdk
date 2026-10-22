# Flex SDK — Fiex Plugin Protocol v1.0

Independent developer SDK for [Fiex](https://github.com/kevinhuang001/fiex).
The **Rust native-process SDK** is in `rust/` (Cargo package `fiex-plugin-sdk`).
The **browser iframe SDK** is the root npm package `@fiex/ui-sdk`. No Node.js runtime is required for plugins: JS is compiled to static iframe code; native plugins are self-contained binaries.

Native plugins speak framed JSON-RPC 2.0 over stdin/stdout. The IPC wire contract is language-neutral. UI panels run in an opaque-origin iframe with a per-session MessageChannel; the SDK provides `FiexUiClient` and `attachFiexPanel`.

### Dependencies

Consumers use a pinned commit SHA instead of local relative paths:

```toml
fiex-plugin-sdk = { git = "https://github.com/kevinhuang001/flex-sdk.git", rev = "<COMMIT_SHA>" }
```

```json
"@fiex/ui-sdk": "git+https://github.com/kevinhuang001/flex-sdk.git#<COMMIT_SHA>"
```

The same repository revision is the compatibility baseline for host and plugins. Do not rely on a mutable branch for release builds.

### Tests

`cargo test --manifest-path rust/Cargo.toml`; `cargo clippy --manifest-path rust/Cargo.toml -- -D warnings`; `npm test`.

Plugin implementations and network integration fixtures belong to [flex-official-plugins](https://github.com/kevinhuang001/flex-official-plugins). Fiex Core owns integration of process lifecycle, security grants, VFS cache, sync and host UI.
