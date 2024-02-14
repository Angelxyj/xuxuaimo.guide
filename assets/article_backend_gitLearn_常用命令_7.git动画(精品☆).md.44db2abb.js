import{_ as e,o,c,Q as t}from"./chunks/framework.25ff06b1.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、merge","slug":"一、merge","link":"#一、merge","children":[{"level":3,"title":"1. fast-forward","slug":"_1-fast-forward","link":"#_1-fast-forward","children":[]},{"level":3,"title":"2. no-fast-forward","slug":"_2-no-fast-forward","link":"#_2-no-fast-forward","children":[]},{"level":3,"title":"3. 合并冲突","slug":"_3-合并冲突","link":"#_3-合并冲突","children":[]}]},{"level":2,"title":"二、rebase","slug":"二、rebase","link":"#二、rebase","children":[{"level":3,"title":"交互式rebase","slug":"交互式rebase","link":"#交互式rebase","children":[]}]},{"level":2,"title":"三、reset","slug":"三、reset","link":"#三、reset","children":[{"level":3,"title":"1. soft reset","slug":"_1-soft-reset","link":"#_1-soft-reset","children":[]},{"level":3,"title":"2. hard reset","slug":"_2-hard-reset","link":"#_2-hard-reset","children":[]},{"level":3,"title":"3. revert","slug":"_3-revert","link":"#_3-revert","children":[]}]},{"level":2,"title":"四、cherry-pick","slug":"四、cherry-pick","link":"#四、cherry-pick","children":[]},{"level":2,"title":"五、fetch","slug":"五、fetch","link":"#五、fetch","children":[]},{"level":2,"title":"六、pull","slug":"六、pull","link":"#六、pull","children":[]},{"level":2,"title":"七、reflog","slug":"七、reflog","link":"#七、reflog","children":[]}],"relativePath":"article/backend/gitLearn/常用命令/7.git动画(精品☆).md","filePath":"article/backend/gitLearn/常用命令/7.git动画(精品☆).md","lastUpdated":1707839101000}'),r={name:"article/backend/gitLearn/常用命令/7.git动画(精品☆).md"},a=t('<blockquote><p>通过动画来学习git命令，非常形象</p></blockquote><p>外链：<a href="https://www.cnblogs.com/lzkwin/p/12658029.html" target="_blank" rel="noreferrer">相见恨晚的 Git 命令动画演示，一看就懂！ - 李中凯 - 博客园 (cnblogs.com)</a></p><h2 id="一、merge" tabindex="-1">一、merge <a class="header-anchor" href="#一、merge" aria-label="Permalink to &quot;一、merge&quot;">​</a></h2><h3 id="_1-fast-forward" tabindex="-1">1. fast-forward <a class="header-anchor" href="#_1-fast-forward" aria-label="Permalink to &quot;1. fast-forward&quot;">​</a></h3><p>如果当前分支与即将合并过来的分支相比，没有额外的提交，这种就是<code>fast-forward</code>合并。<code>Git </code>很会偷懒，它会首先尝试最简单的方案，即<code>fast-forward</code>。这种合并方式不会创建新的提交，只是把另一个分支的提交记录直接合并到当前分支。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_17_34_GRTiT0.gif" alt="GRTiT0"></p><h3 id="_2-no-fast-forward" tabindex="-1">2. no-fast-forward <a class="header-anchor" href="#_2-no-fast-forward" aria-label="Permalink to &quot;2. no-fast-forward&quot;">​</a></h3><p>跟即将合并过来的分支比较，当前分支如果没有额外的提交，这固然很好，但实际情况往往不是这样！如果我们在当前分支上也提交了一些改动，那么<code> Git</code> 就会执行<code>no-fast-forward</code>合并。对于<code> no-fast-forward</code> 合并，<code>Git</code> 会在当前分支上创建一个新的合并提交。该提交的父提交同时指向当前分支和合并过来的分支。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_19_25_merge-no-fast-forward.gif" alt="merge-no-fast-forward"></p><h3 id="_3-合并冲突" tabindex="-1">3. 合并冲突 <a class="header-anchor" href="#_3-合并冲突" aria-label="Permalink to &quot;3. 合并冲突&quot;">​</a></h3><p>合并过程如果都对同一个文件有修改，就会出现冲突，有冲突时需要自己手动解决冲突。如下README.md中有冲突</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_21_25_GRTQTx.gif" alt="GRTQTx"></p><h2 id="二、rebase" tabindex="-1">二、rebase <a class="header-anchor" href="#二、rebase" aria-label="Permalink to &quot;二、rebase&quot;">​</a></h2><p><code>git rebase</code> 命令复制当前分支的提交，然后把这些提交放到指定分支之上。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_23_3_GRTt6H.gif" alt="GRTt6H"></p><p>现在<code>master</code>分支上的所有改动都跑到dev分支上了！与<code>merge</code>相比，最大的区别是<code>Git</code>不会去找出哪些文件需要保留，哪些文件不需要保留。我们要<code>rebase</code>的分支总是包含了我们想要保留的最新改动。这种方式不会有合并冲突，并且保持了良好的线性<code>Git</code>历史记录。这个例子演示了在<code>master</code>分支上执行<code>rebase</code>。不过，在大项目里你可能不会这么做。 <code>git rebase</code>命令会修改项目历史记录，因为复制的提交会产生新的<code>hash</code>。当你在特性分支上开发时，<code>master</code>分支有更新的时候，<code>rebase</code> 很有用。这样你在当前分支就能拿到所有更新，避免了将来可能的合并冲突。</p><blockquote><p>根据<code>rebase</code>字面意思可以理解，改变基点，在dev分支上执行<code>git rebase master</code>就是说将<code>dev</code>的基点改到<code>master</code>的现在的位置，而后可以在master分支上执行<code>git merge</code>进行合并</p></blockquote><p><strong>千万不要在<code>master</code>分支上执行<code>git reabse</code>命令！</strong></p><h3 id="交互式rebase" tabindex="-1">交互式rebase <a class="header-anchor" href="#交互式rebase" aria-label="Permalink to &quot;交互式rebase&quot;">​</a></h3><p>在<code>rebase</code>之前，我们还可以修改！这是通过交互式 <code>rebase </code>实现的。交互式<code>rebase</code>也可以用于当前正在处理的分支，在希望修改某些提交的时候。对于即将<code> rebase</code> 的提交，可以执行<code>6</code>种操作：</p><ul><li><code>reword</code>：修改提交说明</li><li><code>edit</code>：修改提交内容（amend）</li><li><code>squash</code>：将该提交合并到前一个提交</li><li><code>fixup</code>: 将该提交合并到前一个提交，不保留提交的日志消息</li><li><code>exec</code>: 在想要 rebase 的每一个提交上执行命令</li><li><code>drop</code>: 删除提交</li></ul><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_43_4_GRTd0I.gif" alt="GRTd0I"></p><h2 id="三、reset" tabindex="-1">三、reset <a class="header-anchor" href="#三、reset" aria-label="Permalink to &quot;三、reset&quot;">​</a></h2><p>有时候我们的提交不想要了，可能处于各种原因，我们可以使用<code>reset</code>来实现，<code>git reset</code>会丢弃当前暂存区的文件，并让我们决定<code>HEAD</code>应指向哪里</p><h3 id="_1-soft-reset" tabindex="-1">1. soft reset <a class="header-anchor" href="#_1-soft-reset" aria-label="Permalink to &quot;1. soft reset&quot;">​</a></h3><p><code>soft reset</code> 将<code>HEAD</code> 移动到指定的提交（或者相对于<code>HEAD</code> 的位置索引），同时不会丢弃这些提交带来的改动。</p><p>假设我们不想保留添加了<code>style.css</code>文件的提交<code>9e78i</code>，也不想保留添加了<code>index.js</code>文件的提交<code>035cc</code> 。但是，我们却想要保留新增的<code>style.css</code>和<code>index.js</code> 文件。这里用 <code>soft reset </code>就非常合适。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_44_48_GRTccQ.gif" alt="GRTccQ"></p><p>执行<code>git status</code>，你会看到我们依然能够查看之前提交所做的改动。这很有用，因为这样我们就能继续修改文件内容，后续再次提交了。</p><h3 id="_2-hard-reset" tabindex="-1">2. hard reset <a class="header-anchor" href="#_2-hard-reset" aria-label="Permalink to &quot;2. hard reset&quot;">​</a></h3><p>有时候，我们不想保留某些提交带来的改动。跟 soft reset 不一样，我们不再需要访问这些变动了。Git 应该简单地重置到指定的提交，并且会重置工作区和暂存区的文件。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_46_48_GRTf7q.gif" alt="GRTf7q"></p><p>Git 已经丢弃了<code>9e78i</code> 和 <code>035cc</code> 两个提交引起的改动，并把状态重置到了提交<code>ec5be</code>的位置。</p><h3 id="_3-revert" tabindex="-1">3. revert <a class="header-anchor" href="#_3-revert" aria-label="Permalink to &quot;3. revert&quot;">​</a></h3><p>撤销改动的另一种方式是执行<code>git revert</code>。复原某个提交后，会创建一个新的提交，包含了恢复后的改动。假设提交 <code>ec5be</code>添加了一个<code>index.js</code>文件。随后，我们发现实际上不再需要这个改动了，就可以恢复<code>ec5be</code>这个提交。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_48_9_GR7p9O.gif" alt="GR7p9O"></p><p>提交<code>9e78i</code>恢复了<code>ec5be</code> 这个提交带来的改动。执行 <code>git revert</code>对于撤销某个提交非常有用，同时又不会修改分支的历史。</p><h2 id="四、cherry-pick" tabindex="-1">四、cherry-pick <a class="header-anchor" href="#四、cherry-pick" aria-label="Permalink to &quot;四、cherry-pick&quot;">​</a></h2><p>当活动分支需要某个分支的某个提交包含的改动时，我们可以用<code>cherry-pick</code>命令。通过<code>cherry-pick</code>某个提交，在当前活动分支上会创建一个新提交，包含了前者带来的改动。假设 <code>dev</code> 分支上的提交<code>76d12</code>改动了<code>index.js</code>文件，我们在<code>master</code>分支上也需要。我们不需要整个分支上的改动，只要这个提交。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_50_3_GR7Fud.gif" alt="Alt Text"></p><h2 id="五、fetch" tabindex="-1">五、fetch <a class="header-anchor" href="#五、fetch" aria-label="Permalink to &quot;五、fetch&quot;">​</a></h2><p>如果存在远程分支，远程分支可能有些提交是当前的本地分支没有的。有可能是其他分支合并过去了，或者你的同事推送了某些改动，等等。我们可以用 <code>git fetch</code> 把这些改动获取到本地。这不会影响本地分支，<code>fetch</code>只是下载数据。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_52_7_GR7ZUP-20221215165207846.gif" alt="Alt Text"></p><h2 id="六、pull" tabindex="-1">六、pull <a class="header-anchor" href="#六、pull" aria-label="Permalink to &quot;六、pull&quot;">​</a></h2><p>除了用<code>git fetch</code> 获取远程分支信息外，还可以用<code>git pull</code>。<code>git pull</code>实际上是两个命令合而为一：<code>git fetch</code>和<code>git merge</code>。当我们从 origin 拉取改动时，先是像<code>git fetch</code>一样获取所有数据，然后最新改动会自动合并到本地分支。 <img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_51_7_GR7MvQ.gif" alt="Alt Text"></p><p>这样就跟远程分支保持同步了，包含了所有的最新改动。</p><h2 id="七、reflog" tabindex="-1">七、reflog <a class="header-anchor" href="#七、reflog" aria-label="Permalink to &quot;七、reflog&quot;">​</a></h2><p>每个人都会犯错误，这完全没有关系！有时候你可能觉得自己把仓库搞得一团糟，只想把它删了完事。</p><p><code>git reflog</code>是个非常有用的命令，可以显示所有操作的日志。包括 <code>merge</code>，<code>reset</code>，<code>revert</code> 等，基本上包括了对分支的任何更改。 <img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_51_59_GR7GEq.gif" alt="Alt Text"></p><p>如果出错了，你可以根据<code>reflog</code>提供的信息通过重置<code>HEAD</code> 来撤销改动。</p><p>比如，我们实际上并不想合并分支。当我们执行 <code>git reflog</code>命令时，我们看到在合并前仓库位于 <code>HEAD@{1}</code>。我们执行下<code>git reset</code>命令，让 HEAD 重新指回原来的<code>HEAD@{1}</code>位置。</p><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/15_16_52_28_GR7U8U.gif" alt="Alt Text"></p><p>我们可以看到，最新的操作也记录到<code>reflog</code>里了。</p>',53),d=[a];function i(l,s,p,n,g,h){return o(),c("div",null,d)}const b=e(r,[["render",i]]);export{_ as __pageData,b as default};
