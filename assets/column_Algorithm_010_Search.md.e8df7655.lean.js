import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.25ff06b1.js";const u=JSON.parse('{"title":"可视化太酷辽！一文了解排序和搜索算法在前端中的应用","description":"","frontmatter":{"title":"可视化太酷辽！一文了解排序和搜索算法在前端中的应用","author":"许小墨","date":"2021-08-02","categories":["前端开发"],"tags":["数构与前端"],"sidebar":"auto"},"headers":[{"level":1,"title":"⏳ 序言","slug":"⏳-序言","link":"#⏳-序言","children":[]},{"level":1,"title":"🧭 一、文章结构抢先知","slug":"🧭-一、文章结构抢先知","link":"#🧭-一、文章结构抢先知","children":[]},{"level":1,"title":"⌚ 二、排序和搜索","slug":"⌚-二、排序和搜索","link":"#⌚-二、排序和搜索","children":[{"level":2,"title":"1、定义","slug":"_1、定义","link":"#_1、定义","children":[]},{"level":2,"title":"2、JS 中的排序和搜索","slug":"_2、js-中的排序和搜索","link":"#_2、js-中的排序和搜索","children":[]}]},{"level":1,"title":"⏰ 三、排序算法","slug":"⏰-三、排序算法","link":"#⏰-三、排序算法","children":[{"level":2,"title":"1、冒泡排序 💡","slug":"_1、冒泡排序-💡","link":"#_1、冒泡排序-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义","link":"#_1-定义","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路","link":"#_2-实现思路","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例","link":"#_3-图例","children":[]},{"level":3,"title":"（4）代码实现","slug":"_4-代码实现","link":"#_4-代码实现","children":[]}]},{"level":2,"title":"2、选择排序 💡","slug":"_2、选择排序-💡","link":"#_2、选择排序-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-1","link":"#_1-定义-1","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-1","link":"#_2-实现思路-1","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例-1","link":"#_3-图例-1","children":[]},{"level":3,"title":"（4）代码实现","slug":"_4-代码实现-1","link":"#_4-代码实现-1","children":[]}]},{"level":2,"title":"3、插入排序 💡","slug":"_3、插入排序-💡","link":"#_3、插入排序-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-2","link":"#_1-定义-2","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-2","link":"#_2-实现思路-2","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例-2","link":"#_3-图例-2","children":[]},{"level":3,"title":"（4）代码实现","slug":"_4-代码实现-2","link":"#_4-代码实现-2","children":[]}]},{"level":2,"title":"4、归并排序 💡","slug":"_4、归并排序-💡","link":"#_4、归并排序-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-3","link":"#_1-定义-3","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-3","link":"#_2-实现思路-3","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例-3","link":"#_3-图例-3","children":[]},{"level":3,"title":"（4）代码实现","slug":"_4-代码实现-3","link":"#_4-代码实现-3","children":[]}]},{"level":2,"title":"5、快速排序 💡","slug":"_5、快速排序-💡","link":"#_5、快速排序-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-4","link":"#_1-定义-4","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-4","link":"#_2-实现思路-4","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例-4","link":"#_3-图例-4","children":[]},{"level":3,"title":"（4）代码实现","slug":"_4-代码实现-4","link":"#_4-代码实现-4","children":[]}]}]},{"level":1,"title":"⏲️ 四、搜索算法","slug":"⏲️-四、搜索算法","link":"#⏲️-四、搜索算法","children":[{"level":2,"title":"1、顺序搜索 💡","slug":"_1、顺序搜索-💡","link":"#_1、顺序搜索-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-5","link":"#_1-定义-5","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-5","link":"#_2-实现思路-5","children":[]},{"level":3,"title":"（3）代码实现","slug":"_3-代码实现","link":"#_3-代码实现","children":[]}]},{"level":2,"title":"2、二分搜索 💡","slug":"_2、二分搜索-💡","link":"#_2、二分搜索-💡","children":[{"level":3,"title":"（1）定义","slug":"_1-定义-6","link":"#_1-定义-6","children":[]},{"level":3,"title":"（2）实现思路","slug":"_2-实现思路-6","link":"#_2-实现思路-6","children":[]},{"level":3,"title":"（3）代码实现","slug":"_3-代码实现-1","link":"#_3-代码实现-1","children":[]}]}]},{"level":1,"title":"⏱️ 五、leetcode 经典题目解析","slug":"⏱️-五、leetcode-经典题目解析","link":"#⏱️-五、leetcode-经典题目解析","children":[{"level":2,"title":"1、leetcode21 合并两个有序链表（简单）","slug":"_1、leetcode21-合并两个有序链表-简单","link":"#_1、leetcode21-合并两个有序链表-简单","children":[]},{"level":2,"title":"2、leetcode374 猜数字大小（简单）","slug":"_2、leetcode374-猜数字大小-简单","link":"#_2、leetcode374-猜数字大小-简单","children":[]}]},{"level":1,"title":"🕙 六、结束语","slug":"🕙-六、结束语","link":"#🕙-六、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"🏷️ 往期推荐","slug":"🏷️-往期推荐","link":"#🏷️-往期推荐","children":[]},{"level":2,"title":"🏷️ 网站推荐","slug":"🏷️-网站推荐","link":"#🏷️-网站推荐","children":[]},{"level":2,"title":"🏷️ 番外篇","slug":"🏷️-番外篇","link":"#🏷️-番外篇","children":[]}]}],"relativePath":"column/Algorithm/010_Search.md","filePath":"column/Algorithm/010_Search.md","lastUpdated":1707876738000}'),p={name:"column/Algorithm/010_Search.md"},o=l("",130),e=[o];function r(c,t,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",r]]);export{u as __pageData,h as default};
