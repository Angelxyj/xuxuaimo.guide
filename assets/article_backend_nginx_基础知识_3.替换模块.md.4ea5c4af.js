import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.25ff06b1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"author":"coder-li","tags":"nginx/modules/sub_module","aliases":"nginx替换模块"},"headers":[],"relativePath":"article/backend/nginx/基础知识/3.替换模块.md","filePath":"article/backend/nginx/基础知识/3.替换模块.md","lastUpdated":1707839101000}'),l={name:"article/backend/nginx/基础知识/3.替换模块.md"},p=e(`<p>也是在server块中进行配置 例如要讲主页中的<code>coder</code>全部替换为<code>coder-coder</code></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">sub_filter</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">coder</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coder-coder&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">sub_filter_once</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">off</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">#默认是on，表示只替换一次</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">sub_filter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">coder</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coder-coder&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">sub_filter_once</span><span style="color:#24292E;"> </span><span style="color:#032F62;">off</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">#默认是on，表示只替换一次</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>配置前： <img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220112164836.png" alt=""></p><p>配置后： <img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220112165526.png" alt=""></p><p>如果配置后没效果，可能是浏览器缓存的问题，新开一个private窗口就行</p>`,5),o=[p];function c(t,r,i,d,E,_){return n(),a("div",null,o)}const b=s(l,[["render",c]]);export{u as __pageData,b as default};
