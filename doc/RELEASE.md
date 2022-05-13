# 版本更新

  - **更新版本号**

    alpha表示最早的版本，预览版，内部测试版，一般不向外部发布，bug会比较多，功能也不全，例如：`0.0.1-alpha.0`

    rc表示最终测试版本，发行候选版本，基本不再加入新的功能，主要修复bug，例如：`0.0.1-rc.0`

  - **更新版本type**

    - BREAKING CHANGES指明是否产生了破坏性修改，涉及break changes的改动必须指明该项（会更新主版本号）。
      默认情况下，standard-version 只会在 CHANGELOG.md 中记录 feat 和 fix 类型的提交。

    feat:     增加新功能(会更新子版本号)
    fix:      修复bug(会更新阶段版本号)
    docs:     只改动了文档相关的内容
    style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
    build:    构造工具的或者外部依赖的改动，例如webpack，npm
    refactor: 代码重构时使用
    revert:   执行git revert打印的message
    test:     添加测试或者修改现有测试
    chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动