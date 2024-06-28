# 删除后门

## 后门是反击插件的主要特色之一，没有后门的插件是没有灵魂的

### 删除后门的方式

要删除后门，你需要删除以下文件：

`./plugins/Fanji-plugin/apps/Houmen.js`

#### Windows 上删除方式

1. 在云崽根目录打开命令提示符（CMD）或 PowerShell。
2. cd到插件目录：
    ```bash
    cd .\plugins\Fanji-plugin\apps
    ```
3. 删除 `Houmen.js` 文件：
    ```bash
    del Houmen.js
    ```

#### Linux 上删除方式

1. 打开终端。
2. cd到云崽目录：
3. cd到插件目录
    ```bash
    cd ./pl*/Fan*/apps
    ```
3. 删除 `Houmen.js` 文件：
    ```bash
    rm -rfv Houmen.js
    ```

完成这些步骤后,后门文件将被删除

