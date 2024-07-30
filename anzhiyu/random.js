var posts=["2024/07/29/hello-world/","2024/07/30/Anzhiyu站点配置/","2024/07/30/markdown格式简要说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };