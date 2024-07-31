var posts=["2024/07/30/专业选择上的思考/","2024/07/30/一个消沉的前半段暑假/","2024/07/31/站点配置之关于hexo页面生成的规则/","2024/07/29/hello-world/","2024/07/30/markdown格式简要说明/","2024/07/30/站点配置过程中遇到的问题（一）/","2024/07/30/站点配置过程中遇到的问题（二)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };