# v1.3.3

QQ Version: Windows 9.9.9-23424 / Linux 3.2.7-23361

## 修复与优化
* 尝试修复多开崩溃问题
* 修复群列表更新问题
* 修复兼容性问题支持Win7
* 修复下载 http 资源缺少UA
* 优化少量消息合并转发速度
* 修复加载群通知时出现 getUserDetailInfo timeout 导致程序崩溃
  
## 新增与调整
* 新增设置群公告 Api: /_send_group_notice
* 新增重启实现 包括重启快速登录/普通重启 副作用: 原进程 无法清理

新增的 API 详细见[API文档](https://napneko.github.io/zh-CN/develop/extends_api)
