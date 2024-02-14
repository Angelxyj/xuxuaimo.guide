import{_ as t,o as a,c as e,Q as s}from"./chunks/framework.25ff06b1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Stashing","slug":"stashing","link":"#stashing","children":[]}],"relativePath":"article/backend/gitLearn/常用命令/5.stashing临时存储工作.md","filePath":"article/backend/gitLearn/常用命令/5.stashing临时存储工作.md","lastUpdated":1707839101000}'),i={name:"article/backend/gitLearn/常用命令/5.stashing临时存储工作.md"},o=s('<h2 id="stashing" tabindex="-1">Stashing <a class="header-anchor" href="#stashing" aria-label="Permalink to &quot;Stashing&quot;">​</a></h2><p>当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作</p><p>&quot;暂存&quot; 可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。</p><ol><li>储藏工作 <code>git stash</code></li><li>查看储藏列表 <code>git stash list</code></li><li>应用最近的储藏 <code>git stash apply</code></li><li>应用更早的储藏 <code>git stash apply stash@{2}</code></li><li>删除储藏<code>git stash drop stash@{0}</code></li><li>应用并删除储藏 <code>git stash pop</code></li></ol>',4),c=[o];function l(n,d,_,r,h,p){return a(),e("div",null,c)}const u=t(i,[["render",l]]);export{m as __pageData,u as default};
