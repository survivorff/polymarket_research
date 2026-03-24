# Kreo — 深度分析报告

> 数据日期：2026-03-24  
> 真实域名：**kreo.app**（非 kreo.trade）  
> Polymarket Builder Program 排名：**#7**  
> 近1月交易量：**$12.72M**

---

## 1. 市场情况

### 1.1 市场定位
Kreo 定位为 **多平台预测市场实时信息流 + 钱包追踪 + 做市工具**。它是整个 Builder 生态中**唯一同时支持 Polymarket 和 Kalshi 两大平台**的综合工具。登录方式：Telegram（@KreoMainBot），非传统 Web3 钱包。

### 1.2 市场规模与地位
- Builder Program 排名 **第七**，月交易量 $12.72M
- 真实域名：`kreo.app`（之前调研误以为是 kreo.trade）
- **技术栈**：Next.js + Privy（非托管钱包）+ Telegram OAuth
- **多链支持**：Solana、Ethereum、Bitcoin（从图标推断）
- 同时聚合 Polymarket 和 Kalshi 数据

### 1.3 竞争格局
- **跨平台聚合**：唯一同时支持 Polymarket + Kalshi 的 Builder
- 与 Polymarket Eye 竞争数据分析赛道，但 Kreo 更侧重实时信息流
- Telegram 登录降低了 Web3 门槛，面向更广泛用户

---

## 2. 用户体验路径

### 2.1 完整用户旅程

```mermaid
journey
    title Kreo.app 用户完整体验旅程
    section 入门（Telegram 登录）
      访问 kreo.app: 4: 用户
      点击 Connect with Telegram: 5: 用户
      Telegram OAuth 授权 @KreoMainBot: 5: 系统
      Privy 自动创建嵌入式钱包: 5: 系统
      登录成功，进入 Feed 页面: 5: 用户
    section 信息流使用
      浏览 X Feed / Wallet Tracker Feed: 5: 用户
      切换 Polymarket / Kalshi 过滤: 5: 用户
      发现 Smart Wallets 异常活动: 4: 用户
      点击 Quick Buy 一键下单: 5: 用户
    section 钱包追踪
      进入 Wallet Tracker 模块: 4: 用户
      添加目标钱包地址: 4: 用户
      创建分组管理多个钱包: 4: 用户
      监控余额和交易动态: 4: 用户
    section 提醒设置
      进入 Alerts 模块: 4: 用户
      创建价格提醒: 4: 用户
      设置关键词高亮规则: 4: 用户
      自定义提醒声音: 3: 用户
    section 奖励与做市
      查看 Rewards 分级状态: 4: 用户
      累积交易量升级等级: 3: 用户
      领取 Cashback 返佣: 4: 用户
      进入 Bonds 做市: 3: 用户
```

### 2.2 Telegram 登录 → 首次使用流程

```mermaid
sequenceDiagram
    participant U as 用户
    participant K as Kreo.app
    participant TG as Telegram
    participant PR as Privy
    participant CB as Coinbase Pay

    U->>K: 访问 kreo.app
    K->>U: 展示 「Connect with Telegram」按钮
    U->>K: 点击连接
    K->>TG: OAuth 请求 via @KreoMainBot
    TG-->>K: 返回用户身份令牌
    K->>PR: 创建嵌入式钱包
    PR-->>K: 钱包地址（Polygon/Solana）
    K->>U: 登录成功，显示 Feed
    U->>K: 需要充值
    K->>CB: Coinbase Pay 入金流程
    CB-->>K: USDC 到账
    K->>U: 余额更新
```

### 2.3 Feed 信息流使用流程

```mermaid
flowchart TD
    A[进入 Feed 页面] --> B{选择 Feed 类型}
    B --> B1[X/Twitter Feed]
    B --> B2[Wallet Tracker Feed]
    B --> B3[Smart Wallets]
    B --> B4[Unusual Activity 异常活动]

    B --> C{平台过滤}
    C --> C1[All 全部]
    C --> C2[Polymarket only]
    C --> C3[Kalshi only]

    B1 --> D[浏览实时推文]
    B4 --> E[发现大额异常下单]
    E --> F[分析是否值得跟单]
    F --> G[点击 Quick Buy $]
    G --> H[弹出快速下单面板]
    H --> I[输入金额确认]
    I --> J[Privy 钱包签名]
    J --> K[成交]

    B --> L{分类过滤 12类}
    L --> L1[companies / health / sports]
    L --> L2[economics / politics / crypto]
    L --> L3[entertainment / financials / ...]
```

### 2.4 Wallet Tracker 使用流程

```mermaid
flowchart TD
    A[进入 Wallet Tracker] --> B[点击 Add Wallet]
    B --> C[输入钱包地址]
    C --> D[命名钱包]
    D --> E[选择分组 或新建分组]
    E --> F[保存]
    F --> G[实时监控该钱包]
    G --> G1[余额变化提醒]
    G --> G2[新增交易提醒]
    G --> G3[在 Feed 中显示该钱包活动]
    G3 --> H[Wallet Tracker Feed 流]
    H --> I[发现目标下单]
    I --> J[Quick Buy 跟单]
```

### 2.5 Alerts 提醒系统使用流程

```mermaid
flowchart TD
    A[进入 Alerts 页面] --> B[Create Price Alert]
    B --> C[选择市场]
    C --> D[设置目标价格]
    D --> E[设置触发方向 上穿/下穿]
    E --> F[保存提醒]
    F --> G[系统监控市场价格]
    G --> H{价格到达目标?}
    H -->|是| I[触发提醒]
    I --> I1[浏览器通知]
    I --> I2[自定义声音]
    I --> I3[关键词高亮]
    I --> J[用户查看并快速下单]
    H -->|否| G

    A --> K[Active Alerts 活跃提醒列表]
    A --> L[Completed 已触发提醒历史]
```

### 2.6 Rewards 分级奖励流程（实测）

```mermaid
flowchart TD
    A[新用户 Bronze 等级] --> B[累积交易量]
    B --> C{达到 Silver 门槛?}
    C -->|是| D[升级 Silver]
    D --> E{达到 Gold 门槛?}
    E -->|是| F[升级 Gold]
    F --> G[更高 Cashback %]
    F --> H[更高 Referral %]

    A --> I[生成推荐链接 kreo.app/@自己]
    I --> J[分享给新用户]
    J --> K[新用户注册并交易]
    K --> L[推荐人获得佣金 %]
    L --> M[累积未领取奖励]
    M --> N[点击 Claim 领取 USDC]
```

**实测 Rewards 页面数据（未登录状态）**：
- 当前等级：Bronze
- 显示字段：% Cashback / % Referral Rate / Your Referral Link
- 展示：Cashback Commission / Referral Commissions / Total Unclaimed / Total Lifetime Earnings
- 具体分级门槛（Silver/Gold 交易量阈值）及对应费率：**需登录后查看，当前无法获取**

---

## 3. 业务架构

```mermaid
graph TD
    A[用户] -->|Telegram 登录| B[Kreo.app]
    
    B --> C{五大核心模块}
    C --> D[Feed 信息流]
    C --> E[Wallet Tracker]
    C --> F[Rewards 奖励]
    C --> G[Alerts 提醒]
    C --> H[Bonds 做市]
    
    D --> D1[X/Twitter Feed]
    D --> D2[Wallet Tracker Feed]
    D --> D3[Smart Wallets]
    D --> D4[Unusual Activity]
    D --> D5[Quick Buy]
    D --> D6[Polymarket Filter]
    D --> D7[Kalshi Filter]
    
    E --> E1[追踪指定钱包]
    E --> E2[分组管理]
    E --> E3[余额监控]
    
    F --> F1[交易量返佣]
    F --> F2[推荐佣金]
    F --> F3[分级制度 Bronze/Silver...]
    
    G --> G1[自定义通知]
    G --> G2[关键词高亮]
    G --> G3[声音提醒]
    G --> G4[Kalshi 通知]
    
    H --> H1[Polymarket Bonds]
    H --> H2[做市流动性]
    
    B --> I[api.kreo.app]
    I --> J[Polymarket CLOB API]
    I --> K[Kalshi API]
```

### 2.1 Feed 类别（实测 API 参数）
`/api/feed?categories=companies,health,climate_and_weather,world,transportation,sports,economics,entertainment,financials,politics,science_and_technology,crypto`

覆盖 **12 个信息类别**，是全市场覆盖最全的信息流。

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 认证层
        A1[Telegram OAuth]
        A2[Privy 嵌入式钱包]
        A3[WalletConnect]
        A4[Coinbase Pay 入金]
    end
    
    subgraph 数据层
        B1[api.kreo.app]
        B2[Polymarket CLOB API]
        B3[Kalshi API]
        B4[X/Twitter 数据]
        B5[Helius RPC - Solana]
    end
    
    subgraph 功能层
        C1[信息流聚合引擎]
        C2[钱包行为监控]
        C3[异常活动检测]
        C4[Bond 做市系统]
        C5[通知系统]
    end
    
    subgraph 前端层
        D1[Next.js App]
        D2[实时 WebSocket]
        D3[多链图标 Sol/ETH/BTC]
    end
    
    A1 --> B1
    A2 --> B1
    B2 --> C1
    B3 --> C1
    B4 --> C1
    B5 --> C2
    C1 --> D1
    C2 --> D2
    C3 --> C5
    C4 --> B2
```

### 3.1 关键 API 端点（实测）

| API 端点 | 功能 |
|---------|------|
| `/api/kalshi/prices` | Kalshi 实时价格 |
| `/api/kalshi/notifications` | Kalshi 通知 |
| `/api/feed/groups` | 信息流分组 |
| `/api/wallet-tracker/tracked` | 追踪的钱包列表 |
| `/api/notification/custom-notifications` | 自定义通知 |
| `/api/notification/custom-sounds` | 自定义声音 |
| `/api/notification/keyword-highlighting` | 关键词高亮 |
| `/api/polymarket/bonds` | Polymarket 做市债券 |
| `/api/rewards` | 奖励数据 |
| `/api/rewards/referrals` | 推荐数据 |

### 3.2 Telegram 登录流程
```mermaid
sequenceDiagram
    participant U as 用户
    participant TG as Telegram
    participant K as Kreo
    participant P as Privy
    
    U->>K: 点击 Connect with Telegram
    K->>TG: OAuth 请求 (@KreoMainBot)
    TG-->>K: Telegram 身份验证
    K->>P: 创建嵌入式钱包
    P-->>K: 钱包地址
    K->>U: 登录成功，显示 Feed
```

---

## 4. 核心功能与技术壁垒

### 4.1 跨平台聚合壁垒
- 同时接入 Polymarket + Kalshi，是**唯一双平台 Builder**
- 跨平台套利信号：同一事件在两平台价差可能产生套利机会
- **壁垒**：需要同时维护两套 API 集成，工程复杂度更高

### 4.2 Telegram 登录的战略价值
- 无需 MetaMask，普通用户零门槛
- Telegram 用户基数庞大（9亿+），获客成本低
- Privy 钱包在后台自动创建，用户无感

### 4.3 信息流 + 异常检测
- 「Unusual Activity」检测：链上异常大单、聪明钱异动
- 「Quick Buy」：在 Feed 中直接一键买入，信息到执行零摩擦
- 自定义关键词高亮 + 声音提醒：专业交易者的必备工具

### 4.4 Bonds 做市功能
- 与 PolyMaker.bet 类似，提供 Polymarket 做市工具
- `/api/polymarket/bonds` 端点说明有完整的 Bond 管理

### 4.5 分级奖励体系
- Bronze / Silver / ... 分级制度
- 基于交易量的返佣（Cashback）
- 推荐佣金（Referral Commission）
- 完整的激励飞轮

### 4.6 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 跨平台聚合 | 9 | 唯一 Poly+Kalshi 双平台 |
| Telegram 渠道 | 8 | 低门槛登录，大用户池 |
| 实时信息流 | 8 | 12类别 + 异常检测 |
| 做市工具 | 7 | Bonds 功能完整 |
| 通知系统 | 8 | 关键词+声音+自定义，专业级 |
| 数据积累 | 7 | 双平台数据积累壁垒 |

---

## 5. 商业模式

```mermaid
pie title Kreo 收入来源推测
    "Builder Fee 分成" : 40
    "交易量返佣净差" : 25
    "Premium 订阅" : 20
    "推荐网络" : 15
```

### 5.1 收入测算
- Builder Fee：$12.72M × 0.5% ≈ **$63.6k/月**
- 分级返佣：平台向用户返佣，但保留一部分差额
- 可能有 Pro 订阅（更多通知、更多追踪钱包数量）

---

## 6. 待确认问题

- [x] 真实域名：已确认为 kreo.app
- [x] 核心功能：Feed/Wallet Tracker/Rewards/Alerts/Bonds
- [x] 登录方式：Telegram OAuth + Privy 钱包
- [x] 同时支持 Polymarket + Kalshi
- [ ] Bonds 的具体 APR 和做市策略？
- [ ] 分级制度（Bronze/Silver/Gold）的门槛和具体返佣率？
- [ ] 多链支持（Solana/ETH/BTC）的具体使用场景？
- [ ] 自定义声音提醒是浏览器通知还是 Telegram 推送？
- [ ] 团队背景？Helius RPC 说明与 Solana 有深度连接
- [ ] X Feed 数据来源（官方 API 还是第三方聚合）？

---

## 7. 总结

Kreo 是整个 Polymarket Builder 生态中**功能最综合、技术深度最强**的平台之一：
1. **唯一跨平台**：同时支持 Polymarket + Kalshi
2. **Telegram 登录**：最低门槛的 Web3 入口
3. **完整工具链**：信息流 + 钱包追踪 + 做市 + 提醒 + 奖励
4. **专业级通知**：关键词高亮、自定义声音，针对专业交易者
5. 月交易量 $12.72M（#7），考虑其功能深度，仍有较大增长空间
