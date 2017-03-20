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
* git reset --hard HEAD^ ／版本id 	`回退到上个版本，HEAD^^则为上上个版本，HEAD～100则回退100个版本,reset不产生commit`  `其实就是--soft 、--mixed以及--hard是三个恢复等级。使用--soft就仅仅将头指针恢复，已经add的缓存以及工作空间的所有东西都不变。如果使用--mixed，就将头恢复掉，已经add的缓存也会丢失掉，工作空间的代码什么的是不变的。如果使用--hard，那么一切就全都恢复了，头变，add的缓存消失，代码什么的也恢复到以前状态。` 


## 其他命令
* pwd  `显示当前目录`