# git命令整理
## 基本命令
### 创建和添加
* git init 	`创建版本库，将当前目录变成git可以管理的目录`
* git status	 `略`
* git diff	 	`查看difference`
* git add (--a)  		`文件添加到暂存区`
* git commit (-m)     	`文件提交到仓库`

### 版本回流
* git log (--pretty=oneline)   		`显示从最近到最远的提交日志，看到版本id`
* git reset --hard HEAD^  	`回退到上个版本，HEAD^^则为上上个版本，HEAD～100则回退100个版本`

## 其他命令
pwd  `显示当前目录`