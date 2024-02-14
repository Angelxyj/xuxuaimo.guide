import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.25ff06b1.js";const d=JSON.parse('{"title":"【青训营】- 紧跟月影大佬的步伐，一起来学习如何写好JS（下）","description":"","frontmatter":{"title":"【青训营】- 紧跟月影大佬的步伐，一起来学习如何写好JS（下）","author":"许小墨","date":"2021-09-16","categories":["前端开发"],"tags":["青训营YouthCamp"],"sidebar":"auto"},"headers":[{"level":1,"title":"😜 序言","slug":"😜-序言","link":"#😜-序言","children":[]},{"level":1,"title":"🤗part1：先来看一段代码","slug":"🤗part1-先来看一段代码","link":"#🤗part1-先来看一段代码","children":[]},{"level":1,"title":"🤫part2：写代码最应该关注什么？","slug":"🤫part2-写代码最应该关注什么","link":"#🤫part2-写代码最应该关注什么","children":[]},{"level":1,"title":"🤔part3：当年的 Left-pad 事件","slug":"🤔part3-当年的-left-pad-事件","link":"#🤔part3-当年的-left-pad-事件","children":[]},{"level":1,"title":"🥳 结束语","slug":"🥳-结束语","link":"#🥳-结束语","children":[]},{"level":1,"title":"🧐 往期推荐","slug":"🧐-往期推荐","link":"#🧐-往期推荐","children":[]}],"relativePath":"column/FrontEnd/YouthCamp/005.md","filePath":"column/FrontEnd/YouthCamp/005.md","lastUpdated":1707839101000}'),l={name:"column/FrontEnd/YouthCamp/005.md"},o=p(`<h1 id="😜-序言" tabindex="-1">😜 序言 <a class="header-anchor" href="#😜-序言" aria-label="Permalink to &quot;😜 序言&quot;">​</a></h1><p>接<a href="https://juejin.cn/post/7007988121107169287" target="_blank" rel="noreferrer">上一篇文章</a>，我们继续来看如何写好 <code>JS</code> 。在下面的文章中，将讲解写代码应该关注什么，以及通过引例阐述一些相关性问题。</p><p>下面开始本文的讲解~</p><h1 id="🤗part1-先来看一段代码" tabindex="-1">🤗part1：先来看一段代码 <a class="header-anchor" href="#🤗part1-先来看一段代码" aria-label="Permalink to &quot;🤗part1：先来看一段代码&quot;">​</a></h1><p>首先我们先来看一段代码。<strong>具体代码如下：</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//判断一个mat2d矩阵是否是单位矩阵</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isUnitMatrix2d</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m[</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//判断一个mat2d矩阵是否是单位矩阵</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isUnitMatrix2d</span><span style="color:#24292E;">(</span><span style="color:#E36209;">m</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">    m[</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>我们先来思考一个问题：<strong>上面的代码写的好不好？为什么？</strong></p><p>有的小伙伴可能会觉得<strong>写起来看着不太美观</strong>、又或者<strong>没有注释</strong>、<strong>扩展性不高</strong>等等各种原因。</p><hr><p>其实，上面这段代码是一段真实的代码，其来源于一个开源库。具体地址：<a href="https://github.com/spritejs/spritejs/blob/master/src/node/layer.js" target="_blank" rel="noreferrer">spritejs</a></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">get </span><span style="color:#B392F0;">layerTransformInvert</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[_layerTransformInvert]) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[_layerTransformInvert];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">m</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.transformMatrix;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(m[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> m[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> m[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> m[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> m[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> m[</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> nul l;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[_layerTransformInvert] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mat2d.</span><span style="color:#B392F0;">invert</span><span style="color:#E1E4E8;">(m);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[_layerTransformInvert];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">get </span><span style="color:#6F42C1;">layerTransformInvert</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[_layerTransformInvert]) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[_layerTransformInvert];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">m</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.transformMatrix;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(m[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> m[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> m[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> m[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> m[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> m[</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nul l;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[_layerTransformInvert] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mat2d.</span><span style="color:#6F42C1;">invert</span><span style="color:#24292E;">(m);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[_layerTransformInvert];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>现在，我们来分析一下上面这段代码写的好不好。<strong>具体分析结果如下：</strong></p><p>单从代码优雅性的角度来看的话，这段代码确实不够优雅。</p><p>但是呢，上面这个库是一个图形库，且这段代码负责的是在渲染之前，计算我们图层的 <code>transform</code> 矩阵的逻辑代码。</p><p>也就是说，<strong>我们在计算每一帧的时候，都需要进行一个计算</strong>。因此呢，在这样的一个场景下，我们首先要去关注的是<strong>如何达到性能最优化</strong>。</p><p>而与其他任何类型的写法来比，以上这种写法能够达到<strong>性能最大化</strong>，所以，以上这段代码在这样的一个场景下是没有任何问题滴。</p><p>同时呢，如果是对于其他场景来说，如果堆性能优化没有这么敏感的话，是可以不用这么写滴。</p><p>所以，一般来说，代码的好坏<strong>要结合它的使用场景来分析</strong>。</p><h1 id="🤫part2-写代码最应该关注什么" tabindex="-1">🤫part2：写代码最应该关注什么？ <a class="header-anchor" href="#🤫part2-写代码最应该关注什么" aria-label="Permalink to &quot;🤫part2：写代码最应该关注什么？&quot;">​</a></h1><ul><li>写代码我们应该要注重<strong>风格</strong>、<strong>效率</strong>、<strong>约定</strong>、 <strong>使用场景（算法）</strong> 和<strong>设计</strong>等方面；</li><li>风格：选择什么风格都没有错，关键是风格要统一（分号、行尾花括号等等）；</li><li>效率：在写代码时要考虑什么样的代码写起来效率是最高的，能写高效率的代码就不要写低效率的代码；当然，也要追求一个平衡就是，要结合它的场景来使用；</li><li>约定：在开发前，团队要约定好代码规范和风格，比如 <code>eslint</code> 、 <code>airbnb</code> 等等；</li></ul><h1 id="🤔part3-当年的-left-pad-事件" tabindex="-1">🤔part3：当年的 Left-pad 事件 <a class="header-anchor" href="#🤔part3-当年的-left-pad-事件" aria-label="Permalink to &quot;🤔part3：当年的 Left-pad 事件&quot;">​</a></h1><p>我们来了解下当年 <code>github</code> 的 <code>Left-pad</code> 事件。先来这个事件中的一段代码，<strong>具体如下：</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">leftpad</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">ch </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> ch </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> str.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ch </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">leftpad</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">len</span><span style="color:#24292E;">, </span><span style="color:#E36209;">ch</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">ch </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> ch </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> str.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len) {</span></span>
<span class="line"><span style="color:#24292E;">    str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ch </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>那么这个作者想要实现的功能就是，比如说我现在有一段字符串，然后呢，我想要把这段字符串拼接成同样长度的字符串。</p><p>这个使用场景通常会放在一些展示类的地方，比如<strong>排序</strong>。当时这个模块一开始被用于很多的 <code>npm</code> 包中，但是后面被作者下线了，所以引起了很大的风波，因为很多人在用的库突然被下线了，试想，开发者岂不是要哭辽。</p><p>那这个事件本身的槽点呢，<strong>主要有以下三点：</strong></p><ul><li><code>NPM</code> 模块粒度</li><li>代码风格</li><li>代码质量和代码效率</li></ul><p>如果要考虑效率的话，那么我们可以对代码进行改进。比如：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">leftpad</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断要补充的代码长度</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">padLen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> str.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (padLen </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ch).</span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">(padLen) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">leftpad</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#24292E;">, </span><span style="color:#E36209;">len</span><span style="color:#24292E;">, </span><span style="color:#E36209;">ch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断要补充的代码长度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">padLen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> str.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (padLen </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ch).</span><span style="color:#6F42C1;">repeat</span><span style="color:#24292E;">(padLen) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>通过这样的改进，使得<strong>代码更简洁</strong>，同时也极大的提升了<strong>运行效率</strong>。</p><h1 id="🥳-结束语" tabindex="-1">🥳 结束语 <a class="header-anchor" href="#🥳-结束语" aria-label="Permalink to &quot;🥳 结束语&quot;">​</a></h1><p>在上面的这篇文章中，我们了解到了当年的 <code>left-pad</code> 事件，同时呢，我们也学习到了写代码应该关注的 5 个问题：<strong>风格</strong>、<strong>效率</strong>、<strong>约定</strong>、 <strong>使用场景（算法）</strong> 和<strong>设计</strong>。</p><p>到这里，关于本文讲解就结束啦~</p><p>如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😛</p><h1 id="🧐-往期推荐" tabindex="-1">🧐 往期推荐 <a class="header-anchor" href="#🧐-往期推荐" aria-label="Permalink to &quot;🧐 往期推荐&quot;">​</a></h1><p>👉<a href="https://juejin.cn/post/6998084998972588068" target="_blank" rel="noreferrer">值得关注的 HTML 基础知识</a></p><p>👉<a href="https://juejin.cn/post/7000943186000494628" target="_blank" rel="noreferrer">css 还只停留在写布局？10 分钟带你探索 css 中更为奇妙的奥秘！</a></p><p>👉<a href="https://juejin.cn/post/7001989357980631076" target="_blank" rel="noreferrer">【青训营】- 前端只是切图仔？来学学给开发人看的 UI 设计</a></p><p>👉<a href="https://juejin.cn/post/7007988121107169287" target="_blank" rel="noreferrer">【青训营】- 紧跟月影大佬的步伐，一起来学习如何写好 JS（上）</a></p>`,39),e=[o];function r(t,c,E,y,i,F){return n(),a("div",null,e)}const u=s(l,[["render",r]]);export{d as __pageData,u as default};
