import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.25ff06b1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"远程仓库操作","slug":"远程仓库操作","link":"#远程仓库操作","children":[{"level":3,"title":"1. 生成密钥","slug":"_1-生成密钥","link":"#_1-生成密钥","children":[]},{"level":3,"title":"2. 关联远程","slug":"_2-关联远程","link":"#_2-关联远程","children":[]}]}],"relativePath":"article/backend/gitLearn/远程仓库/1.github.md","filePath":"article/backend/gitLearn/远程仓库/1.github.md","lastUpdated":1707839101000}'),p={name:"article/backend/gitLearn/远程仓库/1.github.md"},e=l(`<h2 id="远程仓库操作" tabindex="-1">远程仓库操作 <a class="header-anchor" href="#远程仓库操作" aria-label="Permalink to &quot;远程仓库操作&quot;">​</a></h2><p>使用 ssh 连接 Github 发送指令更加安全可靠，也可以免掉每次输入密码的困扰。</p><h3 id="_1-生成密钥" tabindex="-1">1. 生成密钥 <a class="header-anchor" href="#_1-生成密钥" aria-label="Permalink to &quot;1. 生成密钥&quot;">​</a></h3><p>在命令行中输入以下代码（windows 用户使用 Git Bash）</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一直按回车键直到结束。系统会在<code>~/.ssh</code> 目录中生成 <code>id_rsa</code>和<code>id_rsa.pub</code>，即密钥<code>id_rsa</code>和公钥<code>id_rsa.pub</code>。</p><p><strong>向 GitHub 添加秘钥</strong>，添加上面生成的 <code>id_rsa.pub</code> 公钥内容。</p><h3 id="_2-关联远程" tabindex="-1">2. 关联远程 <a class="header-anchor" href="#_2-关联远程" aria-label="Permalink to &quot;2. 关联远程&quot;">​</a></h3><ol><li>创建本地库并完成初始提交</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;# hd-xj&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-M</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;first commit&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;# hd-xj&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-M</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;first commit&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>添加远程仓库</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 这里是给远程仓库起了一个别名origin</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@xxxx/xxxx.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 这里是给远程仓库起了一个别名origin</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@xxxx/xxxx.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>查看远程库</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>推送数据到远程仓库</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>删除远程仓库关联</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),o=[e];function t(r,c,i,d,y,E){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
