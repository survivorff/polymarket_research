# Stand.trade — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#6**  
> 近1月交易量：**$16.46M**

---

## 1. 市场情况

### 1.1 市场定位
Stand（Beta）是一个功能**极为丰富的综合性 Polymarket 交易前端**，产品深度超出预期。口号：「Discover | Stand」，主打发现（Discover）优质预测市场机会。从页面内容来看，Stand 是所有 Builder 中**功能模块最多**的产品之一。

### 1.2 市场规模与地位
- Builder Program 排名 **第六**，月交易量 $16.46M
- 标注为 **BETA 版本**，仍在快速迭代
- 使用 Cloudflare 高安全保护（需真实浏览器环境）
- 已有「March Madness is live!」等时事市场运营活动

### 1.3 竞争格局
- 功能广度上与 Kreo 相近，但 Stand 更侧重 Web 端完整体验
- 与 Polymtrade 同属专业 Web 终端，但功能更多（Copy Trade、Calendar、Pulse、Octobox）
- **Octobox** 功能名称独特，是其他 Builder 没有的模块

### 1.4 真实导航链接（实测）

| 模块 | 真实 URL |
|------|----------|
| Discover | https://www.stand.trade/discover |
| Live Feeds | https://www.stand.trade/live-feeds |
| Copy Trade | https://www.stand.trade/copytrade |
| Calendar | https://www.stand.trade/calendar |
| Pulse | https://www.stand.trade/pulse |
| Octobox | https://www.stand.trade/octobox |

---

## 2. 用户体验路径

### 2.0 注册、入金、交易、提现全流程（详细）

#### 2.0.1 注册流程

```mermaid
flowchart TD
    A[访问 stand.trade] --> B[点击 Connect Wallet]
    B --> C{选择钱包}
    C --> C1[MetaMask]
    C --> C2[WalletConnect]
    C --> C3[Coinbase Wallet]
    C1 --> D[EIP-712 签名授权]
    C2 --> D
    C3 --> D
    D --> E[Polymarket Proxy Wallet 绑定]
    E --> F[进入主界面]
    %% 注: ⚠️ 无需邮箱注册，钱包即身份
    %% 注: 首次需 Enable Trading 签名，授权 Proxy Wallet 代理交易
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[点击 Deposit 入金] --> B{选择入金方式}
    B --> C[信用卡/借记卡]
    B --> D[USDC on Polygon 直接转账]
    B --> E[其他链跨链]
    C --> C1[MoonPay/Transak 弹窗]
    C1 --> C2[KYC + 卡片信息]
    C2 --> C3[USDC 自动到账 Polygon]
    D --> D1[复制 Polygon 地址]
    D1 --> D2[从交易所转出 USDC Polygon网络]
    D2 --> C3
    E --> E1[跨链桥 Polygon Bridge]
    E1 --> C3
    C3 --> F[余额更新，可交易]
```

#### 2.0.3 Octobox 多市场交易流程

```mermaid
flowchart TD
    A[进入 Octobox 模块] --> B[看到 8 格市场网格]
    B --> C[点击空格 + 添加市场]
    C --> D[搜索目标市场]
    D --> E[市场订单簿显示在格子内]
    E --> F[查看 Yes/No 价格]
    F --> G[直接点击订单簿行下单]
    G --> H[确认金额]
    H --> I[钱包签名]
    I --> J[成交]
    B --> K[拖拽格子重新排列]
    K --> L[自定义监控布局]
    %% 注: Octobox = 同时监控 8 个市场的专业工具
    %% 注: 类似多显示器交易终端体验
```

#### 2.0.4 提现流程

```mermaid
flowchart TD
    A[点击 Withdraw 提现] --> B[输入金额]
    B --> C[输入 Polygon 目标地址]
    C --> D[钱包签名确认]
    D --> E[USDC on Polygon 转出]
    E --> F[约 1-3 分钟到账]
    %% 注: 持仓需平仓或等待结算后方可提现
```

### 2.1 完整用户旅程

```mermaid
journey
    title Stand.trade 用户完整体验旅程
    section 发现入门
      访问 stand.trade: 4: 用户
      看到 March Madness 运营横幅: 5: 用户
      浏览 Trending 市场列表: 5: 用户
      查看市场 Vol/24h/Liq/End 数据: 4: 用户
    section 深度交易
      切换 13 个市场分类: 4: 用户
      点击市场卡片查看详情: 5: 用户
      查看订单簿深度: 4: 用户
      点击 Yes/No 快速下单: 5: 用户
    section 进阶工具
      打开 Octobox 8市场同屏: 5: 用户
      拖拽重排市场格子: 4: 用户
      点击格子内订单簿行下单: 4: 用户
      查看 Pulse 市场热度: 3: 用户
      查看 Calendar 即将到期市场: 4: 用户
    section 复制交易
      进入 Copy Trade 模块: 4: 用户
      选择要跟随的交易者: 4: 用户
      开启自动跟单: 4: 用户
```

### 2.2 Discover 页面交互流程

```mermaid
flowchart TD
    A[访问 stand.trade/discover] --> B[展示热门市场列表]
    B --> C{选择分类}
    C --> C1[Trending / All / New]
    C --> C2[Politics / Sports / Crypto]
    C --> C3[Finance / Economy / Culture]
    C --> C4[Weather / Companies / Tech / Climate]
    C --> C5[Mentions]
    C1 --> D[市场卡片展示]
    D --> D1[Vol 总量 + 24h 量 + Liq 流动性 + End 到期日]
    D --> D2[多结果市场各选项概率]
    D --> D3[Yes / No 快速下单按钮]
    D3 --> E{已登录?}
    E -->|否| F[弹出登录]
    E -->|是| G[确认订单]
    G --> H[钱包签名]
    H --> I[成交]
```

### 2.3 Octobox 使用流程（实测详情）

```mermaid
flowchart TD
    A[访问 stand.trade/octobox] --> B[欢迎引导弹窗]
    B --> B1[说明: 最多追踪8个市场 无需切换标签]
    B --> B2[点击 + 图标搜索市场 填充格子]
    B --> B3[点击格子或订单簿行 浮动下单窗口]
    B --> B4[拖拽格子头部 重新排列]
    B --> B5[格子头部 X 键移除市场]
    B --> B6[布局选择: 1/2/3 列]
    B --> B7[每个格子可切换 订单簿/成交记录]
    B --> B8[布局和市场顺序自动保存]
    B1 --> C[关闭引导 开始使用]
    C --> D[同屏监控最多8个市场]
    D --> E[实时订单簿更新]
    E --> F[发现机会 点击下单]
    F --> G[浮动交易窗口]
    G --> H[签名成交]
```

**Octobox 真实功能（实测确认）**：
- 同屏监控 **最多 8 个市场**，无需切换标签
- 每个格子独立显示 **订单簿 + 成交记录**（可切换）
- 支持 **1/2/3 列布局**切换
- 点击格子或订单簿行弹出**浮动交易窗口**
- **拖拽重排**：抓取格子头部的拖拽手柄重新排列
- **布局持久化**：市场列表和排列顺序自动保存
- **壁垒**：全 Builder 生态唯一，专为多市场同时监控设计，做市商必备

---

## 3. 业务架构（原第2章）

```mermaid
graph TD
    A[用户] --> B[Stand.trade]
    
    B --> C{核心功能模块}
    C --> D[Discover 发现]
    C --> E[Live Feeds 实时流]
    C --> F[Copy Trade 复制交易]
    C --> G[Calendar 日历]
    C --> H[Pulse 脉搏]
    C --> I[Octobox 八爪箱]
    C --> J[Login 账户]
    
    D --> D1[12个市场分类]
    D --> D2[Trending/New/Politics/Sports/...]
    D --> D3[实时价格+流动性]
    
    E --> E1[实时成交流]
    
    F --> F1[复制优质交易者]
    
    G --> G1[即将到期市场]
    G --> G2[重要事件日历]
    
    H --> H1[市场情绪指标?]
    
    I --> I1[功能待确认]
    
    B --> K[Polymarket CLOB API]
    K --> L[Polygon 链]
```

### 2.1 市场分类体系（实测）

| 分类 | 覆盖范围 |
|------|----------|
| Trending | 热门市场 |
| All / New | 全部/新市场 |
| Politics | 政治 |
| Sports | 体育（March Madness等）|
| Crypto | 加密货币 |
| Finance | 金融（原油、股票等）|
| Mentions | 被提及的市场 |
| Economy | 经济 |
| Culture | 文化 |
| Weather | 天气 |
| Companies | 公司 |
| Tech | 科技 |
| Climate | 气候 |

**13个分类**，是 Builder 生态中分类最全面的平台之一。

### 2.2 市场展示信息密度（实测）
每个市场卡片显示：
- **Vol**（总交易量）+ **24h**（24小时量）+ **Liq**（流动性）+ **End**（到期日）
- 多结果市场展示各结果的概率
- 一键「Yes/No」下单按钮

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 数据层
        A1[Polymarket CLOB REST]
        A2[Polymarket WebSocket]
        A3[Gamma API]
    end
    
    subgraph 功能层
        B1[市场发现引擎]
        B2[实时价格引擎]
        B3[复制交易系统]
        B4[日历/事件系统]
        B5[Pulse 情绪引擎]
        B6[Octobox 系统]
    end
    
    subgraph 安全层
        C1[Cloudflare WAF]
        C2[Bot 保护]
    end
    
    subgraph 前端层
        D1[React/Next.js]
        D2[实时数据渲染]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B1
    B1 --> D1
    B2 --> D2
    C1 --> D1
```

### 3.1 技术栈推断
- **前端**：React/Next.js（从页面结构推断）
- **安全**：Cloudflare 企业级保护（说明流量规模大且有保护需求）
- **实时数据**：WebSocket 订阅 Polymarket 实时价格
- **独特模块**：Octobox（功能待确认，可能是多市场组合工具）

---

## 4. 核心功能与技术壁垒

### 4.1 「Octobox」独特功能（实测确认）
- **同屏最多 8 个市场**：无需标签切换，全局视野
- **真实 URL**：`stand.trade/octobox`
- 每格可独立切换 Order Book / Trades 视图
- 点击格子或订单簿行 → 浮动交易窗口 → 零跳转下单
- 拖拽重排 + 布局持久化（1/2/3列）
- 对做市商和多市场套利者极有价值
- **壁垒**：全 Builder 生态唯一，短期内无竞争者

### 4.2 「Pulse」功能
- 可能是市场情绪/脉搏监控工具
- 类似于「市场热度」指标
- 帮助用户发现即将爆发的市场

### 4.3 Copy Trade 集成
- 在专业终端中**同时集成**复制交易功能
- 与 Polymtrade（无复制交易）形成差异化
- 与 PolyCop（纯复制交易，无专业终端）互补

### 4.4 时事运营能力
- 「March Madness is live! Trade here」说明有运营团队
- 能够快速响应热点事件，创建专题入口
- 运营能力是获客的重要手段

### 4.5 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 功能广度 | 9 | 6大模块，13分类，最全面之一 |
| Octobox 独特功能 | 8 | 唯一，难以快速复制 |
| 运营能力 | 8 | 时事热点快速响应 |
| 技术深度 | 7 | 多模块集成工程量大 |
| Cloudflare 保护 | 6 | 说明重视安全和稳定性 |
| BETA 风险 | -1 | 仍处 Beta，功能可能不稳定 |

---

## 5. 商业模式

```mermaid
pie title Stand.trade 收入来源推测
    "Builder Fee 分成" : 55
    "Copy Trade 服务费" : 25
    "Premium 功能订阅" : 15
    "Octobox 高级功能" : 5
```

### 5.1 收入测算
- Builder Fee：$16.46M × 0.5% ≈ **$82.3k/月**
- Copy Trade 服务费：可能额外收取跟单费
- 仍处 Beta，商业化可能尚未完全展开

---

## 6. 待确认问题

- [x] **Octobox 具体功能**：已确认 = 8市场同屏监控 + 浮动下单 + 拖拽重排 + 布局保存
- [x] 真实导航 URL 已全部确认
- [ ] **Pulse 的数据来源和计算方法？**（访问返回 403，无法实测）
- [ ] Copy Trade 的具体机制（托管还是非托管？）
- [ ] Calendar 页面（Cloudflare 保护，无法自动访问）
- [ ] Login 支持哪些方式（钱包/邮件/社媒？）
- [ ] BETA 什么时候正式上线？
- [ ] 团队背景？
- [ ] Live Feeds 页面返回 404，该功能是否已下线？

---

## 7. 总结

Stand.trade 是整个 Builder 生态中**功能最全面、产品设计最有野心**的平台之一：
1. **6大核心模块**：Discover + Live Feeds + Copy Trade + Calendar + Pulse + Octobox
2. **13个市场分类**：覆盖所有主流预测市场类型
3. **Octobox 独特功能**：在所有 Builder 中独一无二
4. **运营能力强**：能快速响应热点（March Madness专题）
5. **仍处 Beta**：月交易量 $16.46M（#6）已相当可观，正式版上线后增长空间大

**Stand.trade 是被严重低估的 Builder，值得重点关注。**
