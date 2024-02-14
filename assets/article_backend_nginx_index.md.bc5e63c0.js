import{_ as n,o as i,c as e,Q as l}from"./chunks/framework.25ff06b1.js";const b=JSON.parse('{"title":"nginx官网","description":"","frontmatter":{"tags":"nginx"},"headers":[{"level":1,"title":"nginx官网","slug":"nginx官网","link":"#nginx官网","children":[]},{"level":1,"title":"nginx概述","slug":"nginx概述","link":"#nginx概述","children":[]},{"level":1,"title":"nginx的优势","slug":"nginx的优势","link":"#nginx的优势","children":[]},{"level":1,"title":"nginx版本","slug":"nginx版本","link":"#nginx版本","children":[]},{"level":1,"title":"nginx安装","slug":"nginx安装","link":"#nginx安装","children":[]},{"level":1,"title":"nginx相关文件","slug":"nginx相关文件","link":"#nginx相关文件","children":[]},{"level":1,"title":"nginx基本配置","slug":"nginx基本配置","link":"#nginx基本配置","children":[]},{"level":1,"title":"nginx日志","slug":"nginx日志","link":"#nginx日志","children":[]},{"level":1,"title":"nginx web模块","slug":"nginx-web模块","link":"#nginx-web模块","children":[]},{"level":1,"title":"nginx[[代理]]","slug":"nginx-代理","link":"#nginx-代理","children":[]},{"level":1,"title":"nginx location","slug":"nginx-location","link":"#nginx-location","children":[]}],"relativePath":"article/backend/nginx/index.md","filePath":"article/backend/nginx/index.md","lastUpdated":1707839101000}'),a={name:"article/backend/nginx/index.md"},t=l('<blockquote><p>先看一个web服务器的发展趋势，龙头老大有<code>Apache</code>和<code>Microsoft</code>，<code>nginx</code>可以说是后起之秀 <img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220110195500.png" alt=""><a href="https://news.netcraft.com/archives/category/web-server-survey/" target="_blank" rel="noreferrer">Web Server Survey | Netcraft News</a></p></blockquote><h1 id="nginx官网" tabindex="-1">nginx官网 <a class="header-anchor" href="#nginx官网" aria-label="Permalink to &quot;nginx官网&quot;">​</a></h1><p><a href="https://nginx.org/" target="_blank" rel="noreferrer">nginx news</a></p><h1 id="nginx概述" tabindex="-1">nginx概述 <a class="header-anchor" href="#nginx概述" aria-label="Permalink to &quot;nginx概述&quot;">​</a></h1><p><strong>Nginx</strong>（发音同“engine X”）是异步框架的<a href="https://www.wanweibaike.net/wiki-%E7%B6%B2%E9%A0%81%E4%BC%BA%E6%9C%8D%E5%99%A8" title="网页服务器" target="_blank" rel="noreferrer">网页服务器</a>，也可以用作<a href="https://www.wanweibaike.net/wiki-%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86" title="反向代理" target="_blank" rel="noreferrer">反向代理</a>、<a href="https://www.wanweibaike.net/wiki-%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" title="负载均衡" target="_blank" rel="noreferrer">负载平衡器</a>和<a href="https://www.wanweibaike.net/wiki-HTTP%E7%BC%93%E5%AD%98" title="HTTP缓存" target="_blank" rel="noreferrer">HTTP缓存</a>。该软件由<a href="https://www.wanweibaike.net/wiki-%E4%BC%8A%E6%88%88%E7%88%BE%C2%B7%E8%B3%BD%E7%B4%A2%E8%80%B6%E5%A4%AB" title="伊戈尔·赛索耶夫" target="_blank" rel="noreferrer">伊戈尔·赛索耶夫</a>（Игорь Сысоев）开发并于2004年首次公开发布。2011年成立同名公司以提供支持服务。2019年3月11日，Nginx公司被<a href="https://www.wanweibaike.net/wiki-F5%E7%BD%91%E7%BB%9C%E5%85%AC%E5%8F%B8" title="F5网络公司" target="_blank" rel="noreferrer">F5网络公司</a>以6.7亿美元收购。</p><blockquote><p>nginx是一个高性能的HTTP(解决[[C10k]]的问题)和反向代理服务器，也是一个IMAP/POP3/SMTP服务器</p></blockquote><h1 id="nginx的优势" tabindex="-1">nginx的优势 <a class="header-anchor" href="#nginx的优势" aria-label="Permalink to &quot;nginx的优势&quot;">​</a></h1><p>nginx的web优势有以下几点</p><ul><li>[[高并发]]</li><li>[[IO多路复用]]</li><li>[[epoll]]</li><li>[[异步]]</li><li>[[非阻塞]]</li></ul><h1 id="nginx版本" tabindex="-1">nginx版本 <a class="header-anchor" href="#nginx版本" aria-label="Permalink to &quot;nginx版本&quot;">​</a></h1><p>下载链接：<a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">nginx: download</a></p><ul><li>Mainline version: 主线版，即开发版</li><li>stable version: 最新稳定版，生产环境上一般使用该版本</li><li>Legacy versions: 遗留的老版本 <img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220110201548.png" alt="|400"></li></ul><h1 id="nginx安装" tabindex="-1">nginx安装 <a class="header-anchor" href="#nginx安装" aria-label="Permalink to &quot;nginx安装&quot;">​</a></h1><p>我们一般不下载源码进行安装，而是参照官方网站的documentation中的installing nginx进行安装，一般用的服务器是centos 参考链接：<a href="https://nginx.org/en/linux_packages.html#RHEL-CentOS" target="_blank" rel="noreferrer">nginx: Linux packages</a><img src="https://cdn.jsdelivr.net/gh/lijing-2008/PicGo/img/20220110203333.png" alt=""></p><p>这是在服务器本地安装的方法，我们在工作中可能直接使用docker进行安装安装更为方便</p><h1 id="nginx相关文件" tabindex="-1">nginx相关文件 <a class="header-anchor" href="#nginx相关文件" aria-label="Permalink to &quot;nginx相关文件&quot;">​</a></h1><ol><li><code>etc/logrotate.d/nginx</code>：[[nginx日志#日志轮转]]</li><li><code>etc/nginx/nginx.conf</code>：[[nginx主配置文件]]</li><li><code>etc/nginx/conf.d</code>：[[nginx子配置目录]]</li><li><code>default.conf</code>：[[nginx默认配置]]</li><li><code>mine.types</code>：[[nginx文件关联程序]]</li><li><code>etc/nginx/modules</code>：[[nginx模块]]文件夹，用于扩展功能</li><li><code>usr/sbin/nginx</code>：主程序文件</li></ol><h1 id="nginx基本配置" tabindex="-1">nginx基本配置 <a class="header-anchor" href="#nginx基本配置" aria-label="Permalink to &quot;nginx基本配置&quot;">​</a></h1><p>[[nginx子配置目录]]</p><h1 id="nginx日志" tabindex="-1">nginx日志 <a class="header-anchor" href="#nginx日志" aria-label="Permalink to &quot;nginx日志&quot;">​</a></h1><p>[[nginx日志]]</p><h1 id="nginx-web模块" tabindex="-1">nginx web模块 <a class="header-anchor" href="#nginx-web模块" aria-label="Permalink to &quot;nginx web模块&quot;">​</a></h1><ol><li>[[nginx连接状态模块]]</li><li>[[nginx随机主页模块]]</li><li>[[nginx替换模块]]</li><li>[[nginx文件读取模块]]</li><li>[[nginx文件压缩模块]]</li><li>[[nginx页面缓存模块]]</li><li>[[nginx防盗链模块]]</li><li>[[nginx访问限制]]</li><li>[[nginx访问控制]]</li></ol><h1 id="nginx-代理" tabindex="-1">nginx[[代理]] <a class="header-anchor" href="#nginx-代理" aria-label="Permalink to &quot;nginx[[代理]]&quot;">​</a></h1><p>[[proxy代理]]</p><h1 id="nginx-location" tabindex="-1">nginx location <a class="header-anchor" href="#nginx-location" aria-label="Permalink to &quot;nginx location&quot;">​</a></h1><p>Location 是 Nginx 中一个非常核心的配置，可以说nginx中有三层</p><ul><li>http：整个服务器</li><li>server：虚拟服务器</li><li>location：具体的一个页面request [[nginx location]]</li></ul>',28),r=[t];function g(o,x,c,h,d,s){return i(),e("div",null,r)}const k=n(a,[["render",g]]);export{b as __pageData,k as default};
