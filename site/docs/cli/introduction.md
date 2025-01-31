---
title: 命令行介绍
---

## 版本控制

请在安装`@reskript/*`依赖时，使用`-D -E`参数。其中`-E`（或`--save-exact`）将会安装一个固定的版本，而不是默认地使用`^x.y.z`版本范围。

当你安装固定版本时，我们可以保持所有的`@reskript/*`包版本一致，不会因为后续更新其它不相关依赖时“不幸”影响了部分包，导致各包之间版本不一致。

:::caution
`reSKRipt`无法保证各个包版本不一致时的行为是符合预期的，因此保证它们版本一致非常重要。
:::

当然我们建议你及时更新到最新版本，但依然使用固定版本以保持它们一致。

## 按需安装

所有的`skr`命令行均以`@reskript/cli-`为包前缀，其后跟随命令名称。当一个命令需要执行的时候，如果本地安装由这个`@reskript/cli-xxx`包，则会直接调用它，如果没有，`skr`会尝试自动安装。

自动安装一个缺失的命令包需要你的项目满足以下要求：

1. 你在安装`@reskript/*`包时，使用了精确的版本号，即在`npm install`、`yarn add`、`pnpm add`时使用`--save-exact`（或`-E`）参数，在你的`package.json`中，版本不是`^x.y.z`的形式，而是一个`x.y.z`的精确版本号。
2. 你的项目必须启用了git版本管理，即在根目录下有`.git`文件夹。
3. 你的项目在根目录（`.git`文件夹所在目录）下有一个包管理器的版本锁文件，可以是`package-lock.json`、`yarn.lock`或`pnpm-lock.yaml`。

在满足这些条件的前提下，命令行会提示你自动安装：

> We're going to install @reskript/cli-dev for you, continue? (y/N)

此时按下回车即会自动安装后继续执行命令，如果选择`N`则自动退出，你可以手动安装相应的包来继续使用。

## 全局控制标记

你可以使用`SKR_FLAGS`来引导`reSKRipt`几乎所有功能的行为，`SKR_FLAGS`是一个用逗号分隔的字符串，其中每一项是一个标记，你可以这样来使用：

```shell
SKR_FLAGS=all skr build
```

当然我们也建议你使用`export SKR_FLAGS=all`在全局持久化地打开这些标记。

当前`SKR_FLAGS`支持以下值的组合：

- `deprecation-error`：当包含这个开头时，所有标记为废弃的功能不仅仅是给予警告提示，而会报错并退出程序。这个开关有助于你清理`reSKRipt`计划在下一个大版本废弃的功能，可使大版本的升级变得更加轻松顺滑。

另外，你可以使用`all`这个标记打开所有当前支持的功能。

## 调试模式

使用`SKR_LOGGING=debug`环境变量，可以在命令行输出一些调试信息，用于排查问题。

## 退出码

执行`skr`命令时，所有已知的退出码与对应情况如下，剩余异常退出均使用`99`为退出码。

- `10`：Node版本不符合要求。
- `11`：指定的命令不存在或初始化错误。
- `12`：未指定具体的命令。
- `13`：项目依赖不满足当前的命令。
- `20`：编译单个文件时出现错误。
- `21`：配置或命令行参数相关错误。
- `22`：构建过程内部错误。
- `23`：构建产出检查错误。
- `24`：项目结构相关错误。
- `25`：代码规范检查错误。
- `99`：未知错误。
