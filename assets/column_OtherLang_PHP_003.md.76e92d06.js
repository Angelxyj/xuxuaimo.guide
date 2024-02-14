import{_ as t,o as n,c as o,Q as s}from"./chunks/framework.25ff06b1.js";const _=JSON.parse('{"title":"PHP做二次开发：ThinkCMF门户应用安装","description":"","frontmatter":{"title":"PHP做二次开发：ThinkCMF门户应用安装","author":"许小墨","date":"2021-11-22","categories":["其他语言"],"tags":["PHP"],"sidebar":"auto"},"headers":[],"relativePath":"column/OtherLang/PHP/003.md","filePath":"column/OtherLang/PHP/003.md","lastUpdated":1707839101000}'),r={name:"column/OtherLang/PHP/003.md"},a=s('<p><strong>使用工具</strong>：phpEnv <strong>具体步骤</strong>： <strong>1</strong>.获取门户应用 portal 源码 <strong>2</strong>.安装 portal 代码 <strong>3</strong>.执行 portal 数据库文件 <strong>4</strong>.安装并启用前台模板 <strong>5</strong>.导入后台管理菜单</p><p><strong>第一步：获取门户应用 portal 源码</strong><strong>1</strong>.打开官方网站<a href="http://kancloud.cn/thinkcmf/faq/1005840" target="_blank" rel="noreferrer">http://kancloud.cn/thinkcmf/faq/1005840</a>，点击左侧<strong>邮箱配置|安装门户应用</strong>，右侧的下载代码中点击<strong>码云</strong>，克隆源代码放到工作站 注：对如何克隆源代码不了解的小伙伴可参考<a href="https://blog.csdn.net/weixin_44803753/article/details/114918837?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">本机安装 ThinkCMF 系统文章</a>的第一步</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270859187.png" alt="在这里插入图片描述"><strong>第二步：安装 portal 代码</strong><strong>1</strong>.复制工作站中 portal 文件夹下的<strong>api，app，public</strong>三个文件夹； <strong>2</strong>.将此三个文件夹放入工作站中 thinkcmf 目录下，粘贴，直接替换原来的文件。</p><p><img src="https://img-blog.csdnimg.cn/20210317111515869.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p><strong>第三步：执行 portal 数据库文件（安装门户应用的数据库文件）</strong><strong>1</strong>.用编辑器打开工作站中<strong>thinkCMF/app/portal/data</strong>/目录下的<strong>portal.sql 文件</strong>，全选并复制； <strong>2</strong>.打开 phpEnv 中数据库管理工具，打开 thinkcmf 数据库，点击查询，将上面复制的代码粘贴进此文本框中，粘贴后运行；</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270859238.png" alt="在这里插入图片描述"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270859683.png" alt="在这里插入图片描述"></p><p><strong>第四步：安装并启用前台模板</strong><strong>1</strong>.浏览器访问<strong>test.com/admin/</strong>,输入密码进行登录（此账号密码为<a href="https://blog.csdn.net/weixin_44803753/article/details/114918837" target="_blank" rel="noreferrer">本机安装 ThinkCMF 系统文章</a>中最后一步所涉及到的内容）； <strong>2</strong>.登录成功后，在左侧栏设置目录中找到<strong>模板管理</strong>，右侧点击<strong>安装模板</strong>，点击<strong>安装 simpleboot3</strong>，安装成功后，<strong><em>启用新的模板</em></strong>。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270900775.png" alt="在这里插入图片描述"></p><p><strong>第五步：导入后台管理菜单</strong><strong>1</strong>.点击<strong>后台菜单按钮</strong>（此按钮位于左侧侧边栏顶部五个按钮中最右侧）； <strong>2</strong>.点击所有菜单，导入新菜单，点击下一个应用，菜单导入成功； <strong>3</strong>.刷新页面，检查左侧是否出现一个名称为门户管理的新菜单，如出现，即说明安装成功。 <strong>4</strong>.点击<strong>首页按钮</strong>（此按钮位于左侧侧边栏顶部五个按钮中最左侧），查看首页模板是否更改。<strong>如已更改</strong>，说明模板启动成功；<strong>如未更改</strong>，请返回到第四步第 2 点查看模板是否已经启用。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270900173.png" alt="在这里插入图片描述"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270900857.png" alt="在这里插入图片描述"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270900718.png" alt="在这里插入图片描述"></p><p><strong>注</strong>：此文章为<a href="https://blog.csdn.net/weixin_44803753/article/details/114918837" target="_blank" rel="noreferrer">本机安装 ThinkCMF 系统文章</a>的衔接，可以先对上一篇文章的具体步骤先进行操作，再执行此篇文章的具体步骤，理解更深。</p><p>▶PS 有疑问欢迎评论区提问</p>',15),g=[a];function p(e,c,l,i,m,h){return n(),o("div",null,g)}const f=t(r,[["render",p]]);export{_ as __pageData,f as default};
