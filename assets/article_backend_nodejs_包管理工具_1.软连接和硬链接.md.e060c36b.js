import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.25ff06b1.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、索引节点","slug":"一、索引节点","link":"#一、索引节点","children":[]},{"level":2,"title":"二、硬链接和软链接","slug":"二、硬链接和软链接","link":"#二、硬链接和软链接","children":[]}],"relativePath":"article/backend/nodejs/包管理工具/1.软连接和硬链接.md","filePath":"article/backend/nodejs/包管理工具/1.软连接和硬链接.md","lastUpdated":1707839101000}'),p={name:"article/backend/nodejs/包管理工具/1.软连接和硬链接.md"},o=l(`<blockquote><p>硬链接和软链接的概念经常傻傻分不清，实践出真知，一文搞懂软链接和硬链接。所有的文件，其真实的数据都是保存在磁盘上的，我们肉眼可见的那些文件，其实都是一个个链接文件。</p></blockquote><p>Let us go …</p><h2 id="一、索引节点" tabindex="-1">一、索引节点 <a class="header-anchor" href="#一、索引节点" aria-label="Permalink to &quot;一、索引节点&quot;">​</a></h2><p>索引节点是<code>unix</code>系统中的一种数据结构，其本质是结构体，包含了与文件系统中各个文件相关的一些重要信息，在<code>Unix</code>创建文件系统的同时会创建大量的<code>inode</code>，通常，文件系统磁盘空间中大约<code>1%</code>的空间分配给了<code>inode</code>表。我们平时所说的索引编号其实是<code>inode</code>的标识标号，索引编号只是文件相关信息中一项重要的内容。</p><p><code>inode</code>表包含一份清单，其中列出了对应文件系统的所有 <code>inode</code> 编号。当用户搜索或者访问一个文件时，<code>UNIX</code> 系统通过 <code>inode</code> 表查找正确的 <code>inode</code> 编号。在找到 <code>inode</code> 编号之后，相关的命令才可以访问该 <code>inode</code> ，并对其进行适当的更改。</p><p>例如，使用 <code>vi</code> 来编辑一个文件。当您键入 <code>vi</code> 时，在 <code>inode</code> 表中找到 <code>inode</code> 编号之后，才允许您打开该 <code>inode</code> 。在 <code>vi</code> 的编辑会话期间，更改了该 <code>inode</code> 中的某些属性，当您完成操作并键入<code> :wq</code> 时，将关闭并释放该 <code>inode</code> 。通过这种方式，如果两个用户试图对同一个文件进行编辑，<code> inode</code> 已经在第一个编辑会话期间分配给了另一个用户 <code>ID (UID)</code>，因此第二个编辑任务就必须等待，直到该 <code>inode</code> 释放为止。</p><p>如何查看索引编号呢？使用命令<code>ls -li</code></p><h2 id="二、硬链接和软链接" tabindex="-1">二、硬链接和软链接 <a class="header-anchor" href="#二、硬链接和软链接" aria-label="Permalink to &quot;二、硬链接和软链接&quot;">​</a></h2><ul><li><p>硬链接（<code>Hard Link</code>）指通过索引节点<code>inode</code>来进行链接，在linux系统中多个文件名可以指向同一个索引节点，这种链接就称为硬链接。硬链接允许磁盘上的一个文件有多条访问路径，也就是多个文件名，用户可以建立多个硬链接防止误删，只有当所有的硬链接被删除后，磁盘文件数据块及其索引节点才会被清除释放。</p></li><li><p>软链接（<code>Symbolic Link</code>）也称为符号链接，类似于windows的快捷方式，它实际上是一个特殊的文件，该文件中包含了另一个文件的位置信息</p></li></ul><p><img src="https://gitlab.com/lijing-2008/blogpic/-/raw/main/pictures/2022/12/17_11_45_22_image-20221217114028612.png" alt="image-20221217114028612"></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 新建a.js文件，数据保存到节点45842921中，并建立a.js到节点的硬链接</span></span>
<span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span></span>
<span class="line"><span style="color:#6A737D;"># 建立新的硬链接，指向同样的数据节点45842921</span></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_hard.js</span></span>
<span class="line"><span style="color:#6A737D;"># 新建软链接，会新建一个文件（节点45843058），该文件内存有a.js的位置信息，指向a.js</span></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_soft.js</span></span>
<span class="line"><span style="color:#6A737D;"># 复制a.js，会将磁盘文件也拷贝一份，这是一份全新的磁盘数据，有新的节点45858534和新的硬链接</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_copy.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 新建a.js文件，数据保存到节点45842921中，并建立a.js到节点的硬链接</span></span>
<span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span></span>
<span class="line"><span style="color:#6A737D;"># 建立新的硬链接，指向同样的数据节点45842921</span></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_hard.js</span></span>
<span class="line"><span style="color:#6A737D;"># 新建软链接，会新建一个文件（节点45843058），该文件内存有a.js的位置信息，指向a.js</span></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_soft.js</span></span>
<span class="line"><span style="color:#6A737D;"># 复制a.js，会将磁盘文件也拷贝一份，这是一份全新的磁盘数据，有新的节点45858534和新的硬链接</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_copy.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>查看文件信息如下：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">➜</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-li</span></span>
<span class="line"><span style="color:#B392F0;">total</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">24</span></span>
<span class="line"><span style="color:#B392F0;">45842921</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rw-r--r--</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lijing</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">staff</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">09</span><span style="color:#9ECBFF;">:23</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span></span>
<span class="line"><span style="color:#B392F0;">45858534</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rw-r--r--</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lijing</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">staff</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">:56</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_copy.js</span></span>
<span class="line"><span style="color:#B392F0;">45842921</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rw-r--r--</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lijing</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">staff</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">09</span><span style="color:#9ECBFF;">:23</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_hard.js</span></span>
<span class="line"><span style="color:#B392F0;">45843058</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lrwxr-xr-x</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lijing</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">staff</span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">09</span><span style="color:#9ECBFF;">:23</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_soft.js</span><span style="color:#E1E4E8;"> -</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">➜</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-li</span></span>
<span class="line"><span style="color:#6F42C1;">total</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span></span>
<span class="line"><span style="color:#6F42C1;">45842921</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rw-r--r--</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lijing</span><span style="color:#24292E;">  </span><span style="color:#032F62;">staff</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">44</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">09</span><span style="color:#032F62;">:23</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span></span>
<span class="line"><span style="color:#6F42C1;">45858534</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rw-r--r--</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lijing</span><span style="color:#24292E;">  </span><span style="color:#032F62;">staff</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">44</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">:56</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_copy.js</span></span>
<span class="line"><span style="color:#6F42C1;">45842921</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rw-r--r--</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lijing</span><span style="color:#24292E;">  </span><span style="color:#032F62;">staff</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">44</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">09</span><span style="color:#032F62;">:23</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_hard.js</span></span>
<span class="line"><span style="color:#6F42C1;">45843058</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lrwxr-xr-x</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lijing</span><span style="color:#24292E;">  </span><span style="color:#032F62;">staff</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">17</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">09</span><span style="color:#032F62;">:23</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_soft.js</span><span style="color:#24292E;"> -</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>最前面的数字就是索引编号</p>`,14),e=[o];function c(r,t,y,E,i,F){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{C as __pageData,B as default};
