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
* 工作区和暂存区
![](git%E5%91%BD%E4%BB%A4%E6%95%B4%E7%90%86/45FB89AC-AB7D-4234-BD3C-FEC466CDA32B.png)
不add的话commit无效，reset只能回到commit的时间点
* `git checkout -- file`可以丢弃工作区的修改
* 命令`git checkout —- readme.txt`意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
没存到暂存区就撤销修改，存到暂存区之后又修改了就返回到暂存区状态，没有——就变成切换分支。
用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage）
* 删除文件
 git rm xxxxx

### 远程仓库
要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；
关联后，使用命令git push -u origin master第一次推送master分支的所有内容；
此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改。

### 分支管理
git branch -d dev `删除dev分支`
git merge dev Fast-forward `快进模式合并dev分支
Git鼓励大量使用分支：

* 查看分支：git branch
* 创建分支：git branch <name>
* 切换分支：git checkout <name>
* 创建+切换分支：git checkout -b <name>
* 合并某分支到当前分支：git merge <name>
* 删除分支：git branch -d <name>`, 如果要强行删除，需要使用命令git branch -D

git stash 可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作, git stash list查看暂存列表，git stash apply恢复暂存前状态／git stash pop恢复暂存前状态并删除暂存

### 多人合作
* 首先，可以试图用git push origin branch-name推送自己的修改；

* 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

* 如果合并有冲突，则解决冲突，并在本地提交；

* 没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！

* 如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream branch-name origin/branch-name。

## 其他命令
* pwd  `显示当前目录`
* git check-ignore -v xxx.xx  查看ignore中哪条规则忽略了它