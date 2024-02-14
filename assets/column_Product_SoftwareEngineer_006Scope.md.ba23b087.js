import{_ as t,o as r,c as o,Q as n}from"./chunks/framework.25ff06b1.js";const _=JSON.parse('{"title":"『软件工程6』详解软件项目管理之软件范围与估算","description":"","frontmatter":{"title":"『软件工程6』详解软件项目管理之软件范围与估算","author":"许小墨","date":"2021-05-25","categories":["产品汪"],"tags":["软件工程"],"sidebar":"auto"},"headers":[{"level":1,"title":"一、软件项目计划","slug":"一、软件项目计划","link":"#一、软件项目计划","children":[{"level":2,"title":"1、目标","slug":"_1、目标","link":"#_1、目标","children":[]},{"level":2,"title":"2、步骤","slug":"_2、步骤","link":"#_2、步骤","children":[]}]},{"level":1,"title":"二、软件范围","slug":"二、软件范围","link":"#二、软件范围","children":[{"level":2,"title":"1、软件范围定义","slug":"_1、软件范围定义","link":"#_1、软件范围定义","children":[]},{"level":2,"title":"2、软件范围——引例","slug":"_2、软件范围——引例","link":"#_2、软件范围——引例","children":[]}]},{"level":1,"title":"三、影响估算的因素","slug":"三、影响估算的因素","link":"#三、影响估算的因素","children":[]},{"level":1,"title":"四、软件项目资源","slug":"四、软件项目资源","link":"#四、软件项目资源","children":[{"level":2,"title":"1、软件项目资源构成","slug":"_1、软件项目资源构成","link":"#_1、软件项目资源构成","children":[]},{"level":2,"title":"2、分析图","slug":"_2、分析图","link":"#_2、分析图","children":[]},{"level":2,"title":"3、人力资源","slug":"_3、人力资源","link":"#_3、人力资源","children":[]},{"level":2,"title":"4、硬件资源","slug":"_4、硬件资源","link":"#_4、硬件资源","children":[]},{"level":2,"title":"5、软件工具","slug":"_5、软件工具","link":"#_5、软件工具","children":[]},{"level":2,"title":"6、可复用构件","slug":"_6、可复用构件","link":"#_6、可复用构件","children":[]}]},{"level":1,"title":"五、软件工作量与成本的估算","slug":"五、软件工作量与成本的估算","link":"#五、软件工作量与成本的估算","children":[{"level":2,"title":"1、基于 LOC 估算工作量和成本","slug":"_1、基于-loc-估算工作量和成本","link":"#_1、基于-loc-估算工作量和成本","children":[{"level":3,"title":"（1）估算步骤","slug":"_1-估算步骤","link":"#_1-估算步骤","children":[]},{"level":3,"title":"（2）引例","slug":"_2-引例","link":"#_2-引例","children":[]},{"level":3,"title":"（3）基于 LOC 估算的相关计算","slug":"_3-基于-loc-估算的相关计算","link":"#_3-基于-loc-估算的相关计算","children":[]}]},{"level":2,"title":"2、基于 FP 估算工作量和成本","slug":"_2、基于-fp-估算工作量和成本","link":"#_2、基于-fp-估算工作量和成本","children":[{"level":3,"title":"（1）估算步骤","slug":"_1-估算步骤-1","link":"#_1-估算步骤-1","children":[]},{"level":3,"title":"（2）引例","slug":"_2-引例-1","link":"#_2-引例-1","children":[]},{"level":3,"title":"（3）基于 FP 估算的相关计算","slug":"_3-基于-fp-估算的相关计算","link":"#_3-基于-fp-估算的相关计算","children":[]}]},{"level":2,"title":"3、COCOMO Ⅱ 模型估算","slug":"_3、cocomo-ii-模型估算","link":"#_3、cocomo-ii-模型估算","children":[{"level":3,"title":"（1）COCOMO Ⅱ 模型中项目估算的三个阶段","slug":"_1-cocomo-ii-模型中项目估算的三个阶段","link":"#_1-cocomo-ii-模型中项目估算的三个阶段","children":[]},{"level":3,"title":"（2）COCOMO Ⅱ 模型估算步骤","slug":"_2-cocomo-ii-模型估算步骤","link":"#_2-cocomo-ii-模型估算步骤","children":[]},{"level":3,"title":"（3）基于 COCOMO Ⅱ 模型的计算","slug":"_3-基于-cocomo-ii-模型的计算","link":"#_3-基于-cocomo-ii-模型的计算","children":[]}]}]},{"level":1,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"relativePath":"column/Product/SoftwareEngineer/006Scope.md","filePath":"column/Product/SoftwareEngineer/006Scope.md","lastUpdated":1707839101000}'),l={name:"column/Product/SoftwareEngineer/006Scope.md"},e=n('<h1 id="一、软件项目计划" tabindex="-1">一、软件项目计划 <a class="header-anchor" href="#一、软件项目计划" aria-label="Permalink to &quot;一、软件项目计划&quot;">​</a></h1><h2 id="_1、目标" tabindex="-1">1、目标 <a class="header-anchor" href="#_1、目标" aria-label="Permalink to &quot;1、目标&quot;">​</a></h2><p>软件项目计划的目标是提供一个框架，使得管理人员对资源、成本和进度做出合理估算。 这些估算应当在项目开始时的一个有限的时间段内做出，并且随着项目的进展定期进行更新。</p><h2 id="_2、步骤" tabindex="-1">2、步骤 <a class="header-anchor" href="#_2、步骤" aria-label="Permalink to &quot;2、步骤&quot;">​</a></h2><p>（<strong>1</strong>）Scoping（范围）—— 确定软件范围；</p><p>（<strong>2</strong>）Estimation（估算）—— 估算资源、工作量、成本；</p><p>（<strong>3</strong>）Risk（风险）—— 风险管理；</p><p>（<strong>4</strong>）Schedule（进度）—— 进度安排；</p><p>（<strong>5</strong>）Control strategy（控制策略）—— 指定控制策略。</p><h1 id="二、软件范围" tabindex="-1">二、软件范围 <a class="header-anchor" href="#二、软件范围" aria-label="Permalink to &quot;二、软件范围&quot;">​</a></h1><h2 id="_1、软件范围定义" tabindex="-1">1、软件范围定义 <a class="header-anchor" href="#_1、软件范围定义" aria-label="Permalink to &quot;1、软件范围定义&quot;">​</a></h2><p>（<strong>1</strong>）估算开始时，应对功能进行评价，并适当细化以提供更详细的细节。</p><p>（<strong>2</strong>）由于成本和进度的估算都与功能有关，因此常常采用某种程度的功能分解。</p><p>（<strong>3</strong>）软件范围包括<strong>功能</strong>、<strong>性能</strong>、<strong>约束</strong>、<strong>接口</strong>和<strong>可靠性</strong>，无二义和可理解。</p><h2 id="_2、软件范围——引例" tabindex="-1">2、软件范围——引例 <a class="header-anchor" href="#_2、软件范围——引例" aria-label="Permalink to &quot;2、软件范围——引例&quot;">​</a></h2><p><strong>思考这样一个问题：针对这个软件的范围描述，请找出软件范围的功能、性能、约束、接口等。</strong></p><p>考虑开发一个驱动传送带分类系统（CLSS）的软件，对该软件的范围陈述如下：</p><p>（<strong>1</strong>）传送带分类系统将沿传送带移动的盒子进行<strong>分类</strong>，每个盒子由一个包含零件号的<strong>条形码</strong>来标识，并在传送带的末端分送到<strong>六个</strong>箱子中的一个，这些盒子要通过一个由条形码阅读器和一台 PC 所组成的<strong>分类站</strong>。</p><p>（<strong>2</strong>）分类站的 PC 连接到一个<strong>分流器</strong>上，它把盒子分送到不同的箱子中，盒子以随机的顺序通过且其间的距离相同，传送带以每分钟 5 英尺的速度移动。</p><p>（<strong>3</strong>）CLSS 软件以和传送带速度一致的时间间隔接受来自条形码阅读器的信息。<strong>条形码</strong>数据被解码成盒子的标识格式，软件将在最多可容纳 1000 个条目的零件号数据库中进行<strong>检索</strong>，以确定当前在阅读器（分类站）位置的盒子应该放到哪个箱子中。</p><p>（<strong>4</strong>）该箱子的信息被传送到<strong>分流器</strong>，以把盒子放进合适的箱子中，每个盒子所放进的箱子的<strong>记录均被保存</strong>起来以供以后提取及报告。</p><p>（<strong>5</strong>）CLSS 软件同时也接受来自脉冲流速计的输入，用于使<strong>控制信号</strong>与分流器同步，根据分类站和分流器之间产生的<strong>脉冲数</strong>，软件将产生一个控制信号给分流器，以适当地定位盒子。</p><blockquote><p>通过分析，这个过程将产生如下<strong>功能</strong>：</p><ul><li><strong>读取条形码输入</strong></li><li>读取脉冲流速计</li><li><strong>解码零件编码数据</strong></li><li>检索数据库</li><li><strong>确定合适的箱子</strong></li><li>产生分流器的控制信号</li><li><strong>维护盒子目的地的记录</strong></li></ul></blockquote><blockquote><p><strong>性能</strong>取决于传送带的速度，对于每个盒子的处理必须在下个盒子到达条形码阅读器之前完成。</p></blockquote><blockquote><p><strong>约束条件</strong>包括：</p><ul><li>盒子以随机的顺序通过且其间的距离相同，传送带以每分钟 5 英尺的速度移动；</li><li>CLSS 软件以和传送带速度一致的时间间隔接受来自条形码阅读器的信息；</li><li>控制信号与分流器同步。</li></ul></blockquote><blockquote><p><strong>接口</strong>：条形码阅读器，分流器，PC 等</p></blockquote><h1 id="三、影响估算的因素" tabindex="-1">三、影响估算的因素 <a class="header-anchor" href="#三、影响估算的因素" aria-label="Permalink to &quot;三、影响估算的因素&quot;">​</a></h1><p>软件项目管理过程开始于项目计划，在做项目计划时，重要的一项活动就是<strong>估算</strong>。</p><p>那么，<strong>影响估算的因素有哪些呢？</strong></p><ul><li><p><strong>复杂性</strong>越高，估算的风险就越高。</p></li><li><p>项目的<strong>规模</strong>越大，开发工作量越大，估算的风险越高。</p></li><li><p><strong>项目的结构化程度</strong>越高,进行精确估算的能力就能提高，而风险将减少。</p></li><li><p><strong>历史信息的有效性</strong>也影响估算的风险。历史信息越有效, 总的风险就越少。</p></li><li><p>如果对软件项目的<strong>作用范围</strong>还不是十分清楚，或者用户的要求经常<strong>变更</strong>，也会增加估算的风险。</p></li><li><p>计划人员应当要求<strong>在软件系统的规格说明中</strong>给出完备的功能、性能、接口的定义。</p></li></ul><h1 id="四、软件项目资源" tabindex="-1">四、软件项目资源 <a class="header-anchor" href="#四、软件项目资源" aria-label="Permalink to &quot;四、软件项目资源&quot;">​</a></h1><p>软件项目计划的第二个任务是对完成该软件项目<strong>所需的资源</strong>进行估算。</p><h2 id="_1、软件项目资源构成" tabindex="-1">1、软件项目资源构成 <a class="header-anchor" href="#_1、软件项目资源构成" aria-label="Permalink to &quot;1、软件项目资源构成&quot;">​</a></h2><p>（1）最基本的、重要的资源——人员；</p><p>（2）现成的用意支持软件开发的工具——硬件工具；</p><p>（3）现成的用意支持软件开发的工具——软件工具（CASE）；</p><p>（4）可复用构件。</p><h2 id="_2、分析图" tabindex="-1">2、分析图 <a class="header-anchor" href="#_2、分析图" aria-label="Permalink to &quot;2、分析图&quot;">​</a></h2><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270938841.png" alt="软件项目资源构成要素"></p><p><strong>接下来对各构成要素进行一一分析。</strong></p><h2 id="_3、人力资源" tabindex="-1">3、人力资源 <a class="header-anchor" href="#_3、人力资源" aria-label="Permalink to &quot;3、人力资源&quot;">​</a></h2><p>（<strong>1</strong>）在考虑各种软件开发资源时，<strong>人是最重要的资源</strong>；</p><p>（<strong>2</strong>）在安排开发活动时必须考虑<strong>人员的技术水平</strong>、<strong>专业</strong>、<strong>人数</strong>、以及<strong>在开发过程中对各阶段人员的需要</strong>；</p><p>（<strong>3</strong>）对于一些<strong>规模较小的项目</strong>，只要向专家做些咨询，也许<strong>一个人就可以完成所有的软件工程步骤</strong>；</p><p>（<strong>4</strong>）对一些<strong>规模较大的项目</strong>，在整个软件生存期中，<strong>各种人员的参与情况是不一样的</strong>。</p><p>以下通过一张图了解各阶段人员对软件生命周期的共享度。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939282.png" alt="各阶段人员对软件生命周期的共享度"></p><h2 id="_4、硬件资源" tabindex="-1">4、硬件资源 <a class="header-anchor" href="#_4、硬件资源" aria-label="Permalink to &quot;4、硬件资源&quot;">​</a></h2><p>硬件是作为软件开发项目的一种工具而投入的，分别包含以下<strong>三种类型</strong>：</p><p><strong>（1）宿主机（Host）——</strong> 软件开发时使用的计算机及外围设备；</p><p><strong>（2）目标机（Target）——</strong> 运行已经开发成功软件的计算机及外围设备；</p><p><strong>（3）其它硬件设备 ——</strong> 专用软件开发时需要的特殊硬件资源；</p><h2 id="_5、软件工具" tabindex="-1">5、软件工具 <a class="header-anchor" href="#_5、软件工具" aria-label="Permalink to &quot;5、软件工具&quot;">​</a></h2><p>软件工程人员在软件开发期间使用了许多软件工具来帮助开发，这种软件工具集叫做<strong>计算机辅助软件工程</strong>（CASE）。<strong>分别包括</strong>：</p><p>（<strong>1</strong>）业务系统计划工具集；</p><p>（<strong>2</strong>）项目管理工具集；</p><p>（<strong>3</strong>）支援工具 —— 文档生成工具、网络系统软件、数据库、电子邮件、通报板，以及配置管理工具；</p><p>（<strong>4</strong>）分析和设计工具；</p><p>（<strong>5</strong>）编程工具；</p><p>（<strong>6</strong>）组装和测试工具；</p><p>（<strong>7</strong>）原型化和模拟工具；</p><p>（<strong>8</strong>）维护工具；</p><p>（<strong>9</strong>）框架工具 —— 这些工具能够提供建立<strong>集成项目支撑环境</strong>（IPSE）的框架。</p><h2 id="_6、可复用构件" tabindex="-1">6、可复用构件 <a class="header-anchor" href="#_6、可复用构件" aria-label="Permalink to &quot;6、可复用构件&quot;">​</a></h2><p><strong>（1）可复用的软件资源，被称为构件。可复用构件分别包含：</strong></p><ul><li><strong>成品（off-the-shelf）构件</strong>：已存在的构件，能够从第三厂商获得，被准备用于当前的项目，并已被完全确认。</li><li><strong>具有完全经验的构件</strong>：当前项目成员在这些构件上有丰富的经验。</li><li><strong>具有部分经验的构件</strong>：与当前项目相关，但需做实质性的修改；项目成员对此构件的经验有限。</li><li><strong>新构件</strong>：为满足项目组的特定需要而专门开发的软件构件。</li></ul><p><strong>（2）使用可复用构件时，应考虑：</strong></p><ul><li><strong>成品构件</strong>能够满足项目的需求 —— 采用！因为<code>低成本和低风险</code>。</li><li><strong>具有完全经验的构件</strong>可以使用，但在项目计划中应反映出来 —— 修改和集成的风险可接受。</li><li><strong>具有部分经验的构件</strong>使用时必须详细分析 —— 如果要大量的修改，所需的成本可能超过开发新构件的成本。</li></ul><h1 id="五、软件工作量与成本的估算" tabindex="-1">五、软件工作量与成本的估算 <a class="header-anchor" href="#五、软件工作量与成本的估算" aria-label="Permalink to &quot;五、软件工作量与成本的估算&quot;">​</a></h1><p>在软件成本和工作量的估算中，不确定因素非常大，包括人、技术、环境、政治等因素都会影响估算结果。</p><p>软件项目的估算能够通过一系列<strong>系统化</strong>的步骤，在可接受的风险范围内提供估算结果。</p><p>对于每一个可用的软件成本估算的选择，其效果好坏取决于<strong>用于估算的历史数据</strong>！</p><p>先用一张图了解<strong>软件工作量和成本</strong>的估算方法。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939710.png" alt="在这里插入图片描述"></p><p><strong>接下来讲解三种估算方法。</strong></p><h2 id="_1、基于-loc-估算工作量和成本" tabindex="-1">1、基于 LOC 估算工作量和成本 <a class="header-anchor" href="#_1、基于-loc-估算工作量和成本" aria-label="Permalink to &quot;1、基于 LOC 估算工作量和成本&quot;">​</a></h2><h3 id="_1-估算步骤" tabindex="-1">（1）估算步骤 <a class="header-anchor" href="#_1-估算步骤" aria-label="Permalink to &quot;（1）估算步骤&quot;">​</a></h3><ul><li><p><strong>① 给出软件范围</strong> —— 项目计划人员可对每一个分解的功能提出一个有代表性的<strong>估算值范围</strong>；</p></li><li><p><strong>② 进行功能分解</strong> —— <u>利用历史数据</u>或<u>凭实际经验</u>（当其它的方法失效时），对每个功能分别按<strong>最佳的</strong>、<strong>可能的</strong>、<strong>悲观的</strong>三种情况给出 LOC 或 FP 估计值 ，记作 a、m、b；</p></li><li><p><strong>③ 估算每一个子功能</strong> —— 计算 LOC 或 FP 的期望值 E；</p><p>$$ E ＝ \\frac{（a＋4m＋b）}{6} $$</p></li><li><p><strong>④ 计算总 LOC 数(∑)</strong> —— <u>所有子功能的总估算变量值</u><strong>除以</strong><u>相应于该估算变量的平均生产率度量</u>得到项目的总工作量;</p><blockquote><p>例如，若假定总的 FP 估算值是 310，基于过去项目的平均 FP 生产率是 5.5 FP／PM，则项目的总工作量是：工作量 ＝ 310／5.5 ＝ 56 PM，即每个月需要 56 个人</p></blockquote></li><li><p><strong>⑤ 给出两个历史数据</strong> ——</p><p><strong>第一种</strong>：给出生产率和劳动率价格，可以算出<strong>工作量</strong>和<strong>成本</strong>；</p><p><strong>第二种</strong>：给出生产率和每行代码成本，也可以算出<strong>工作量</strong>和<strong>成本</strong>。</p><p>下面通过一张图了解这两种方法分别如何计算出工作量和成本：</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939994.png" alt="基于LOC估算工作量和成本"></p></li></ul><h3 id="_2-引例" tabindex="-1">（2）引例 <a class="header-anchor" href="#_2-引例" aria-label="Permalink to &quot;（2）引例&quot;">​</a></h3><p>系统定义评审指明，软件是在一个工作站上运行，其接口必须使用各种计算机图形设备，包括鼠标器、数字化仪、高分辨率彩色显示器和激光打印机。在这个实例中，<strong>使用 LOC 做为估算变量</strong>。根据系统规格说明， <strong>软件范围的初步叙述如下</strong>：</p><p>“软件将从操作员那里接收 2 维或 3 维几何数据，操作员通过<strong>用户界面</strong>与 <strong>CAD 系统</strong>交互并控制它，这种用户界面将表现出很好的人机接口设计特性。所有的几何数据和其它支持信息保存在一个<strong>CAD 数据库</strong>内。要开发一些<strong>设计分析模块</strong>以产生在各种图形设备上显示的输出。软件要设计得能被控制，并能与各种外部设备进行交互，外部设备包括鼠标器、数字化仪、激光打印机和绘图仪。”</p><blockquote><p>从以上的例子可以得出：</p><p><strong>① 经过分解, 识别出下列主要软件功能：</strong></p><ul><li>用户界面和控制功能；</li><li>二维几何分析；</li><li>三维几何分析；</li><li>数据库管理；</li><li>计算机图形显示功能；</li><li>外设控制 PC；</li><li>设计分析模块。</li></ul><p><strong>② 可得到如下估算表：</strong></p><table><thead><tr><th>功能</th><th>最佳值 a</th><th>可能值 m</th><th>悲观值 b</th><th>期望值 E</th><th>元/行</th><th>行/PM</th><th>成本（元）</th><th>工作量（PM）</th></tr></thead><tbody><tr><td>用户接口控制</td><td>1800</td><td>2400</td><td>2650</td><td>2340</td><td>14</td><td>315</td><td>32760</td><td>7.4</td></tr><tr><td>二维几何造型</td><td>4100</td><td>5200</td><td>7400</td><td>5380</td><td>20</td><td>220</td><td>107600</td><td>24.4</td></tr><tr><td>三维几何造型</td><td>4600</td><td>6900</td><td>8600</td><td>6800</td><td>20</td><td>220</td><td>136000</td><td>30.9</td></tr><tr><td>数据结构管理</td><td>2950</td><td>3400</td><td>3600</td><td>3350</td><td>18</td><td>240</td><td>60300</td><td>13.9</td></tr><tr><td>计算机图形显示</td><td>4050</td><td>4900</td><td>6200</td><td>4950</td><td>22</td><td>200</td><td>108900</td><td>24.7</td></tr><tr><td>外部设备控制</td><td>2000</td><td>2100</td><td>2450</td><td>2140</td><td>28</td><td>140</td><td>59920</td><td>15.2</td></tr><tr><td>设计分析</td><td>6600</td><td>8500</td><td>9800</td><td>8400</td><td>18</td><td>300</td><td>151200</td><td>28.0</td></tr><tr><td>总计</td><td></td><td></td><td></td><td>33360</td><td></td><td></td><td>656680</td><td>144.5</td></tr></tbody></table><p><strong>③</strong>从历史的<strong>基线数据</strong>求出生产率度量，即 <strong>行／PM</strong> 和 <strong>元／行</strong>。</p><p><strong>④</strong>根据复杂性程度的不同，对各功能使用不同的<strong>生产率度量值</strong>。根据估算表可得：</p><p>成本 = LOC 的期望值 E <strong>乘以</strong> 元／行；</p><p>工作量 = LOC 的期望值 E <strong>除以</strong> 行／PM；</p><p>因此可得，该项目总成本的估算值为 657,000 元，总工作量的估算值为每个月 145 人。</p></blockquote><h3 id="_3-基于-loc-估算的相关计算" tabindex="-1">（3）基于 LOC 估算的相关计算 <a class="header-anchor" href="#_3-基于-loc-估算的相关计算" aria-label="Permalink to &quot;（3）基于 LOC 估算的相关计算&quot;">​</a></h3><p><strong>Question：</strong></p><p>基于 LOC 估算某软件项目的工作量和人工成本，假设项目的子功能有三个，估算的 LOC 数分别为 1000，2000，3000，项目的生产率为 600LOC/PM，劳动力价格为 6000 元/PM，则项目总的 LOC 数、工作量、人工成本分别为多少？写出计算公式及计算过程。</p><p><strong>Answer：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939410.png" alt="基于LOC估算的相关计算答案"></p><h2 id="_2、基于-fp-估算工作量和成本" tabindex="-1">2、基于 FP 估算工作量和成本 <a class="header-anchor" href="#_2、基于-fp-估算工作量和成本" aria-label="Permalink to &quot;2、基于 FP 估算工作量和成本&quot;">​</a></h2><h3 id="_1-估算步骤-1" tabindex="-1">（1）估算步骤 <a class="header-anchor" href="#_1-估算步骤-1" aria-label="Permalink to &quot;（1）估算步骤&quot;">​</a></h3><ul><li><p>① 给出软件范围；</p></li><li><p>② 进行功能分解（无需很细）；</p></li><li><p>③ 计算五个信息域计数值；</p></li><li><p>④ 计算总计算值（应考虑加权因子）；</p></li><li><p>⑤ 回答 14 个问题，算出 ∑Fi (Fi 为复杂度校正值) ；</p></li><li><p>⑥ 计算 FP；</p></li><li><p>⑦ 给出两个历史数据，生产率(FP/PM)、人工价(元/PM)；</p><p>工作量=总 FP/生产率=PM；</p><p>成本=工作量 x 人工价=元</p></li></ul><h3 id="_2-引例-1" tabindex="-1">（2）引例 <a class="header-anchor" href="#_2-引例-1" aria-label="Permalink to &quot;（2）引例&quot;">​</a></h3><p>某项目有<strong>5 个信息域计数和 1 个算法计数</strong>，如下图所示。假设已知该项目的两个历史数据，分别为：生产率为 4FP/PM，人工价为 3000 元/PM，试计算出复杂度校正值 ∑Fi，工作量和成本的值。</p><table><thead><tr><th>测量参数</th><th>计数值</th><th>权重（加权因子）</th><th>求和</th></tr></thead><tbody><tr><td>输入数</td><td>40</td><td>4</td><td>160</td></tr><tr><td>输出数</td><td>25</td><td>5</td><td>125</td></tr><tr><td>查询数</td><td>12</td><td>4</td><td>48</td></tr><tr><td>文件数</td><td>4</td><td>7</td><td>28</td></tr><tr><td>外部接口数</td><td>4</td><td>7</td><td>28</td></tr><tr><td>算法</td><td>60</td><td>3</td><td>18</td></tr><tr><td><strong>总计数值</strong></td><td></td><td></td><td>569</td></tr><tr><td><strong>复杂度调整因子</strong></td><td></td><td></td><td>0.84</td></tr><tr><td><strong>特征点</strong></td><td></td><td></td><td>478</td></tr></tbody></table><blockquote><p><strong>由上图可知：</strong></p><ol><li><p>复杂度调整因子为 0.84，即 0.65+0.01∑Fi=0.84，由此可计算出复杂度校正值 ∑Fi=19；</p></li><li><p>若要得到工作量，需先求功能点 FP，即：FP=总计数值 x(0.65+0.01∑Fi)=569x0.84=478FP；</p></li><li><p>$$ 工作量Efficiency ＝ \\frac{总FP}{生产率}=\\frac{478FP}{4FP/PM}≈120PM $$</p></li><li><p>$$ 成本Cost ＝ 工作量×人工价=120PM×3000元/PM=360000元 $$</p></li></ol></blockquote><h3 id="_3-基于-fp-估算的相关计算" tabindex="-1">（3）基于 FP 估算的相关计算 <a class="header-anchor" href="#_3-基于-fp-估算的相关计算" aria-label="Permalink to &quot;（3）基于 FP 估算的相关计算&quot;">​</a></h3><p><strong>Question：</strong></p><p>基于 FP 估算某软件项目的工作量和人工成本，假设项目的输入数、输出数、查询数、文件数、接口数分别为 59、20、10、5、2，加权因子取平均值 4、5、4、10、7，14 个问题的回答取值总和为 15。那么该项目的总计数值是多少？项目的功能点 FP 又是多少？假设项目的生产率为 16FP/PM，劳动力价格为 6000 元/PM，则工作量和人工成本分别为多少？写出计算公式及计算过程。</p><p><strong>Answer：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939385.png" alt="基于FP估算的相关计算答案"></p><blockquote><p><strong>写到这里，对基于 LOC 和 FP 的估算做个小结：</strong></p><ul><li>这两种类型的估算的基本思想都是，先计算出 LOC 和 FP 的值，然后根据组织<strong>生产率</strong>和<strong>每个劳动力价格</strong>（人工价）的历史数据，估算<strong>总成本</strong>和<strong>工作量</strong>。</li><li>如果在估算的时候，遇到估算差别很大时，一般有以下<strong>两种原因</strong>：<strong>① 项目的范围</strong>未能被充分理解或被误解；<strong>②</strong>基于问题的估算技术中所使用的的<strong>生产率数据</strong>对于该应用是不合适的，或是太陈旧了，或是被无用了。</li></ul></blockquote><h2 id="_3、cocomo-ii-模型估算" tabindex="-1">3、COCOMO Ⅱ 模型估算 <a class="header-anchor" href="#_3、cocomo-ii-模型估算" aria-label="Permalink to &quot;3、COCOMO Ⅱ 模型估算&quot;">​</a></h2><h3 id="_1-cocomo-ii-模型中项目估算的三个阶段" tabindex="-1">（1）COCOMO Ⅱ 模型中项目估算的三个阶段 <a class="header-anchor" href="#_1-cocomo-ii-模型中项目估算的三个阶段" aria-label="Permalink to &quot;（1）COCOMO Ⅱ 模型中项目估算的三个阶段&quot;">​</a></h3><table><thead><tr><th>阶段</th><th>时间</th><th>功能描述（此阶段要做什么）</th></tr></thead><tbody><tr><td>应用组装阶段(Application Composition)</td><td>早期、确定系统性能时</td><td>① 利用<strong>应用点</strong>application point 来进行估算规模；② 利用原型来解决高风险问题。</td></tr><tr><td>早期设计阶段(early design)</td><td>需求稳定，体系结构已建立时</td><td>① 研究可选的体系结构和概念；② 用<strong>功能点</strong>funtion point 来做估算规模。</td></tr><tr><td>体系结构后阶段(post architecture)</td><td>软件在构造中，知道更多系统信息时</td><td>① 以<strong>FP、LOC</strong>作为估算单位。</td></tr></tbody></table><blockquote><p>补充说明<strong>应用点</strong>知识：</p><p>应用点，即<strong>对象点</strong>。一种间接的软件测量，其计算需要使用以下三个元素：</p><ul><li>用户界面上的屏幕数 screens；</li><li>报表数 reports；</li><li>建造应用可能需要的构件数 3GLcomponents。</li></ul></blockquote><h3 id="_2-cocomo-ii-模型估算步骤" tabindex="-1">（2）COCOMO Ⅱ 模型估算步骤 <a class="header-anchor" href="#_2-cocomo-ii-模型估算步骤" aria-label="Permalink to &quot;（2）COCOMO Ⅱ 模型估算步骤&quot;">​</a></h3><ul><li>① 计算屏幕数、报表数和构件；</li><li>② 计算对象点 OP，即 ∑(三个计算值 × 加权因子)；</li><li>③ 计算 NOP=OP × (1-复用度) ；</li><li>④ 查表得到生产率参数的值 PROD；</li><li>⑤ 工作量 E=NOP/PROD；</li><li>⑥ 给出一个历史数据：人工价(元/PM)；</li><li>⑦ 成本=E× 人工价。</li></ul><p>以下给出对象点和 PROD 的具体数值表：</p><p><strong>图</strong> 不同类型对象的复杂度加权</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th><th style="text-align:center;">复杂度加权</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>对象类型</strong></td><td style="text-align:center;"><strong>简单</strong></td><td style="text-align:center;"><strong>中等</strong></td><td style="text-align:center;"><strong>困难</strong></td></tr><tr><td style="text-align:center;">屏幕</td><td style="text-align:center;">1</td><td style="text-align:center;">2</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">报表</td><td style="text-align:center;">2</td><td style="text-align:center;">5</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:center;">3GL 构件</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">10</td></tr></tbody></table><p><strong>图</strong> 不同水平的开发者经验和不同开发环境成熟度下的生产率</p><table><thead><tr><th style="text-align:center;">因素</th><th style="text-align:center;"></th><th style="text-align:center;"></th><th style="text-align:center;">影响</th><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">开发者的经验/能力</td><td style="text-align:center;">非常低</td><td style="text-align:center;">低</td><td style="text-align:center;">正常</td><td style="text-align:center;">高</td><td style="text-align:center;">非常高</td></tr><tr><td style="text-align:center;">环境成熟度/能力</td><td style="text-align:center;">非常低</td><td style="text-align:center;">低</td><td style="text-align:center;">正常</td><td style="text-align:center;">高</td><td style="text-align:center;">非常高</td></tr><tr><td style="text-align:center;">PROD</td><td style="text-align:center;">4</td><td style="text-align:center;">7</td><td style="text-align:center;">13</td><td style="text-align:center;">25</td><td style="text-align:center;">50</td></tr></tbody></table><h3 id="_3-基于-cocomo-ii-模型的计算" tabindex="-1">（3）基于 COCOMO Ⅱ 模型的计算 <a class="header-anchor" href="#_3-基于-cocomo-ii-模型的计算" aria-label="Permalink to &quot;（3）基于 COCOMO Ⅱ 模型的计算&quot;">​</a></h3><p><strong>Question：</strong></p><p>使用 COCOMO II 模型来估算构造一个简单的 ATM 软件所需的工作量和人工成本（单位分别是人月和元），该软件产生 11 个屏幕（有 3 个简单，3 个中等，5 个困难），10 个报表（有４个简单，6 个困难），72 个构件，复用度为 20%，假设开发者的经验能力为高，环境的成熟度能力为低，劳动力价格为 5000 元/PM。则 NOP、生产率能力 PROD、工作量 E 和人工成本 C 分别为多少。写出计算公式及计算过程。</p><p><strong>Answer：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270939791.png" alt="基于COCOMO Ⅱ模型的相关计算答案"></p><h1 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h1><p>创作不易，如果这篇文章对你有用，记得点赞收藏哦~</p>',118),s=[e];function d(i,a,g,p,h,c){return r(),o("div",null,s)}const b=t(l,[["render",d]]);export{_ as __pageData,b as default};
