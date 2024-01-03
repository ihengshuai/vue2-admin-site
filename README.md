# vue2-ts-skeleton

基于vue2 + typescript的admin后台管理系统，包含了docker、ci部署流程

## 开始
1. 下载仓库代码到本地，你可以使用两种方式
  - git clone(暂不可用)

    ```sh
    git clone git@github.com:ihengshuai/vue2-ts-admin-skeleton.git -b template
    ```
  - 使用脚手架

    ```sh
    npm install hengshuai -g
    hengshuai c
    ```

2. 配置项目，从`.env.example`拷贝一份配置demo，根据实际情况进行调整

    ```sh
    # 端口
    PORT=10010
    # 当前环境
    ENV=development
    # 默认语言
    DEFAULT_LANG=zh
    # 支持的语言
    LANGUAGES=zh,en
    # 请求API地址,/mock会走node数据源
    API_DOMAIN=/mock
    # 前端设置cookie domain
    COOKIE_DOMAIN=your-domain.com
    # 超时时长
    TIMEOUT=60000
    # 热更新服务方式：ws、sockjs
    SOCKET_SERVER=
    # 配置DEV HTTPS所需的证书
    SSL_CERTIFICATE_KEY=
    SSL_CERTIFICATE=
    # 使用webpack bundler分析
    BUNDLE_ANALYZER=false
    ```

> 如果配置https使用了域名，请自行在机器上添加对应的域名映射和证书，可以参考[【nginx配置https】](https://blog.usword.cn/frontend/nginx/base.html#%E9%85%8D%E7%BD%AEhttps)

3. 启动项目

    ```sh
    yarn dev
    ```

> 时间久了一些依赖可能会过时，请根据实际情况进行调整

## 贡献
关于贡献内容，你可以fork本篇博客，本地跑起，或直接修改对应的文章，修改完后，发个pull request请求即可，我会及时处理的

Regarding the content of contribution, you can fork this blog, running locally, or directly modify the corresponding article. After the modification, you can send a Pull Request request. I will deal with it in time.

## 转载须知
本博客文章允许大家转载，需要注明出处并提供源文章链接，对于标注不允许转载的，请联系本人。

## 打赏
如果你觉得本博客对你有帮助，不介意的话打赏一杯咖啡，鼓励作者不断分享技术文章，在此感谢!:thumbsup:

If you think this blog is helpful to you, if you don't mind, enjoy a cup of coffee, encourage the author to continue to share technical articles, thank you here!

<div>
<img src="https://ihengshuai-demo1.oss-cn-beijing.aliyuncs.com/005HV6Avgy1h72anu40usj30dw0dw40j.jpg" width=200>
<img src="https://ihengshuai-demo1.oss-cn-beijing.aliyuncs.com/005HV6Avgy1h72ap99ym1j30b40b4abq.jpg" width=200>
</div>


## 联系
若您愿意深度交流，可以扫描下方二维码关注公众号，输入联系作者会得到我的微信二维码，就可以加我了。有需要的话，我会考虑建个微信交流群，大家一起来探讨技术。
<div>
  <img src="https://ihengshuai-demo1.oss-cn-beijing.aliyuncs.com/005HV6Avgy1h7t9nb6in9j3076076glx.jpg" alt="hengshuai公众号" width=200>
</div>

## 版权
Copyright 2019-present HengShuai ([ihengshuai@mail.com](mailto:wsm_1105@163.com))

知识共享 署名-非商业性使用-相同方式共享 4.0（CC BY-NC-SA 4.0），详情见 [LICENSE](/LICENSE) 文件。
