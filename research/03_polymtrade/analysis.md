# Polymtrade — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#3**  
> 近1月交易量：**$28.30M**  
> 官网：**polym.trade**  
> 文档：**docs.polym.trade**  
> ⚠️ **重要更正**：Polymtrade 是**移动端优先（iOS + Android）**的交易终端，而非纯 Web 产品

---

## 1. 市场情况

### 1.1 市场定位
Polymtrade 定位为 **Polymarket 的第一个专属移动交易终端**，同时提供 Web 界面。口号：「Your gateway to mobile prediction markets」。

核心主张：
- **4x 更快**的网站性能（相比 Polymarket 官方）
- **移动原生 UI**（iOS App Store + Google Play 均已上线）
- **AI 驱动洞察**（55K+ 已解决市场数据训练）
- **自托管交易**（用户连接自有钱包，每笔交易自签名）

### 1.2 市场规模与地位
- Builder Program 排名 **第三**，月交易量 $28.30M
- Polymarket **唯一有原生 iOS + Android App** 的 Builder
- 三人团队，中欧，非 VC 支持
- 累计已销毁 **126.6M $PM** 代币

### 1.3 竞争格局
- **移动端**：唯一有原生 App 的 Builder，无直接竞争者
- **Web 端**：与 Stand.trade、Kreo 竞争，但 Polymtrade 移动端为核心差异
- **AI 功能**：内置 AI 预测，与 PolyTraderPro 等纯交易终端形成差异
- **Kalshi 支持**（路线图中）：即将对标 Kreo

---

## 2. 用户体验路径

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册流程（Web + 移动端）

```mermaid
flowchart TD
    A[选择入口] --> B1[Web: 访问 polym.trade]
    A --> B2[iOS: App Store 搜索 Polymtrade]
    A --> B3[Android: Google Play 搜索 Polymtrade]
    B1 --> C[点击 Log in]
    B2 --> C
    B3 --> C
    C --> D{选择注册方式}
    D --> D1[邮件注册 推荐新用户]
    D --> D2[导入已有钱包私钥]
    D --> D3[连接 MetaMask]
    D1 --> E1[输入邮箱]
    E1 --> E2[Privy 发送验证邮件]
    E2 --> E3[点击邮件中 Magic Link]
    E3 --> F[Privy 自动生成双链钱包]
    F --> F1[Polygon 钱包地址 用于 Polymarket]
    F --> F2[Solana 钱包地址 用于 $PM 代币]
    D2 --> G[导入私钥 Privy 托管]
    D3 --> H[MetaMask 签名授权]
    F1 --> I[注册完成 进入主界面]
    G --> I
    H --> I
    note1[✅ 平台自动覆盖所有 Polygon gas 费，用户无需持有 POL]
```

#### 2.0.2 入金流程（MoonPay 法币 + 加密货币）

```mermaid
flowchart TD
    A[需要充值] --> B[点击 Deposit / 充值入口]
    B --> C{选择入金方式}
    C --> D[方式一: 信用卡/借记卡 MoonPay]
    C --> E[方式二: USDC on Polygon 直接转账]
    C --> F[方式三: 其他链 USDC 跨链]

    D --> D1[点击 Buy with Card]
    D1 --> D2[MoonPay 弹窗]
    D2 --> D3[输入金额 最低约 $20]
    D3 --> D4[KYC 验证 首次需要]
    D4 --> D5[输入信用卡信息]
    D5 --> D6[MoonPay 购买 USDC]
    D6 --> D7[USDC 自动到账 Polygon 钱包]

    E --> E1[复制 Polygon 钱包地址]
    E1 --> E2[从交易所/其他钱包转出]
    E2 --> E3[选择 Polygon MATIC 网络]
    E3 --> E4[USDC 到账]

    F --> F1[通过 Polygon 官方桥]
    F1 --> F2[或使用第三方跨链桥 Stargate/Across]
    F2 --> F3[USDC 跨至 Polygon]

    D7 --> G[余额更新 可开始交易]
    E4 --> G
    F3 --> G
```

#### 2.0.3 交易执行流程（合并签名，零 gas）

```mermaid
sequenceDiagram
    participant U as 用户
    participant PT as Polymtrade App/Web
    participant PR as Privy 钱包
    participant PM as Polymarket CLOB
    participant PG as Polygon 链

    U->>PT: 浏览市场，选中目标
    PT->>PM: 获取市场订单簿
    PM-->>PT: 价格 + 流动性数据
    U->>PT: 点击 YES / NO，输入金额
    PT->>PT: 检查是否需要 Approve
    Note over PT: 若首次交易，需先 Approve USDC
    PT->>PR: 合并签名请求（Approve + Order 一笔搞定）
    PR-->>PT: 签名完成（用户无需手动 Approve）
    PT->>PM: POST /order
    PM->>PG: 链上撮合
    Note over PG: 平台支付 POL gas 费，用户无感
    PG-->>PM: 成交
    PM-->>PT: 成交回执
    PT->>U: 持仓更新 + P&L 实时显示
```

#### 2.0.4 $PM 代币持有/领奖流程

```mermaid
flowchart TD
    A[用户完成交易] --> B[0.5% 手续费扣除 USDC]
    B --> C[费用进入 Iceball Wallet]
    C --> D[Polymtrade 在 Jupiter DEX 买入 $PM]
    D --> E[买入的 $PM 全部销毁 通缩]
    E --> F[$PM 总供应量减少]
    F --> G[$PM 持有者间接受益]

    H[用户购买 1M+ $PM] --> I[零手续费资格]
    I --> J[绑定到 Polymtrade 账户]
    J --> K[所有交易免 0.5% 手续费]
    K --> L[解锁 AI Predictions 功能]
    K --> M[解锁 Beta 早期访问]

    N[即将上线: 推荐奖励] --> O[分享推荐链接]
    O --> P[新用户注册并交易]
    P --> Q[推荐人获得 $PM 或 USDC 奖励]
```

#### 2.0.5 提现流程

```mermaid
flowchart TD
    A[点击账户 → Withdraw 提现] --> B[选择提现金额]
    B --> C[输入目标地址]
    C --> D{提现目标}
    D --> D1[提现到 Polygon 地址]
    D --> D2[提现到中心化交易所]
    D1 --> E[Privy 签名确认]
    D2 --> F[⚠️ 需确认交易所支持 Polygon USDC]
    F --> G[填写交易所充值地址]
    G --> E
    E --> H[USDC on Polygon 转出]
    H --> I[到账通常 1-3 分钟]

    J[如需法币提现] --> K[在交易所将 USDC 换成法币]
    K --> L[银行出金]
    note1[⚠️ 持仓中的资产无法直接提现，需先平仓或等待结算]
    note2[已知：Polymtrade 覆盖 gas，提现不需持有 POL]
```

#### 2.0.6 市场结算 → 收益到账流程

```mermaid
flowchart TD
    A[用户持有预测市场仓位] --> B{市场到期日到达}
    B --> C[预言机报告结果]
    C --> D[Polymarket 智能合约自动结算]
    D --> E{用户预测正确?}
    E -->|是| F[每份获得 $1 USDC]
    E -->|否| G[仓位清零，损失本金]
    F --> H[USDC 自动到账 Proxy Wallet]
    H --> I[Polymtrade 余额更新]
    I --> J[可继续交易或提现]
    note1[✅ 结算完全自动，无需手动操作]
    note2[结算后 $PM 费用照常收取（若持有不足 1M $PM）]
```

### 2.1 完整用户旅程

```mermaid
journey
    title Polymtrade 用户完整体验旅程
    section 入门（移动端）
      App Store / Google Play 下载: 5: 用户
      邮件创建账户 或 钱包连接: 4: 用户
      Privy 自动生成 Polygon + Solana 钱包: 5: 系统
      MoonPay 刷卡充值: 4: 用户
    section 发现市场
      浏览 13 个分类（Trending/Politics/...）: 5: 用户
      AI 预测推荐热门市场: 4: 系统
      搜索特定市场关键词: 5: 用户
      查看多结果市场概率分布: 4: 用户
    section 交易执行
      选择 YES/NO 仓位: 5: 用户
      查看订单簿深度: 4: 用户
      单笔交易合并签名（零 POL gas）: 5: 系统
      成交确认: 5: 用户
    section 进阶功能
      查看 AI Predictions 面板: 4: 用户
      查看 Leaderboard 排行榜: 3: 用户
      持有 1M $PM 解锁零手续费: 4: 用户
```

### 2.2 Web 端交易流程

```mermaid
flowchart TD
    A[访问 polym.trade] --> B{已登录?}
    B -->|否| C[点击 Log in]
    C --> C1[连接钱包 MetaMask/邮件]
    C1 --> C2[Privy 生成 Polygon+Solana 钱包]
    B -->|是| D[浏览市场]

    C2 --> D
    D --> D1{选择分类}
    D1 --> D2[Trending / Politics / Sports / Finance...]
    D1 --> D3[AI Predictions 页]
    D1 --> D4[Live feed 实时流]

    D2 --> E[选择市场卡片]
    E --> E1[查看 Vol / 24h / Liq / End 信息]
    E1 --> E2[展开订单簿]
    E2 --> E3[选择 YES 或 NO]
    E3 --> E4{用户是 1M $PM 持有者?}
    E4 -->|是| E5[零手续费交易]
    E4 -->|否| E6[0.5% 手续费]
    E5 --> E7[签名 单笔合并交易]
    E6 --> E7
    E7 --> E8[成交 链上确认]
    E8 --> E9[费用 USDC → 买回 $PM → 销毁]

    D3 --> F[查看 AI 预测准确率]
    F --> F1[选择 AI 推荐市场]
    F1 --> E
```

### 2.3 移动端 App 流程

```mermaid
flowchart TD
    A[下载 Polymtrade App] --> B[iOS App Store / Google Play]
    B --> C[邮箱注册 or 导入私钥]
    C --> D[Privy 钱包自动生成]
    D --> E[MoonPay 刷卡充值 USDC]
    E --> F[浏览市场 移动原生 UI]
    F --> G[4x 更快加载速度]
    G --> H[单击下单 合并签名]
    H --> I[平台覆盖 Polygon gas 费]
    I --> J[成交]
```

### 2.4 $PM 代币持有者特权路径

```mermaid
flowchart LR
    A[购买 1M+ $PM] --> B[持有门槛达到]
    B --> C[解锁零手续费交易]
    B --> D[解锁 AI 预测功能]
    B --> E[提前体验新功能 Beta]
    B --> F[即将: 推荐奖励]
    C --> G[所有交易无 0.5% 费用]
    G --> H[大额交易者节省显著]
```

---

## 3. 业务架构

```mermaid
graph TD
    A[用户] --> B{接入方式}
    B --> C[iOS App]
    B --> D[Android App]
    B --> E[Web polym.trade]

    C --> F{核心功能}
    D --> F
    E --> F

    F --> F1[市场发现 13分类]
    F --> F2[AI Predictions]
    F --> F3[订单簿交易]
    F --> F4[Leaderboard]
    F --> F5[Live Feed]
    F --> F6[Trading Volume 统计]

    F1 --> G[Polymarket CLOB API]
    F3 --> G
    G --> H[Polygon 链]

    F2 --> I[AI 模型 55K+ 训练数据]
    F --> J[$PM 代币生态]
    J --> J1[持有 1M+ → 零手续费]
    J --> J2[费用 → 买回销毁]
```

### 3.1 核心业务模块

| 模块 | 状态 | 描述 |
|------|------|------|
| iOS App | ✅ App Store | 移动原生交易终端 |
| Android App | ✅ Google Play | 移动原生交易终端 |
| Web Terminal | ✅ polym.trade | PC/平板网页版 |
| AI Predictions | ✅ 上线 | 55K+ 市场训练，准确率展示 |
| Leaderboard | ✅ 上线 | 交易量排行（实测有 60+ 用户）|
| Fees Dashboard | ✅ 上线 | 实时显示费用/回购/销毁数据 |
| Copy Trading | 🚧 路线图 | 即将上线 |
| Kalshi 聚合 | 🚧 路线图 | 多平台聚合计划 |
| $PM CEX 上市 | ✅ AscendEX | 已在中心化交易所上线 |

---

## 4. 技术架构

```mermaid
graph LR
    subgraph 移动端
        M1[iOS App React Native?]
        M2[Android App]
    end

    subgraph Web前端
        W1[React SPA polym.trade]
        W2[实时 WebSocket 订单簿]
    end

    subgraph 钱包层
        K1[Privy 嵌入式钱包]
        K2[Polygon 钱包自动生成]
        K3[Solana 钱包自动生成]
        K4[MetaMask 外部连接]
        K5[MoonPay 法币入金]
    end

    subgraph 数据层
        D1[Polymarket CLOB REST API]
        D2[Polymarket WebSocket]
        D3[Gamma API]
    end

    subgraph AI层
        A1[AI 预测模型]
        A2[55K+ 已解决市场训练集]
        A3[5个 AI 模型集成 V2规划]
    end

    subgraph 代币层
        T1[$PM Solana 合约]
        T2[费用收集 USDC]
        T3[Jupiter DEX 回购]
        T4[销毁机制]
    end

    M1 --> D1
    M2 --> D1
    W1 --> D1
    W2 --> D2
    K1 --> K2
    K1 --> K3
    T2 --> T3
    T3 --> T4
    A2 --> A1
```

### 4.1 关键技术特点
- **Privy 钱包**：一键邮件注册自动生成 Polygon + Solana 双链钱包，极低门槛
- **零 POL gas**：平台全额覆盖用户 Polygon gas 费，用户无感
- **合并签名**：将充值准备、授权、交易合并为单笔签名，减少交互步骤
- **4x 速度**：直接调用 Polymarket API，无多余渲染层
- **团队**：3 人（设计/后端/前端），中欧，10+ 年加密经验，非 VC 支持

---

## 5. $PM 代币经济（完整）

```mermaid
flowchart TD
    A[用户交易] --> B[0.5% 手续费 USDC]
    B --> C[费用钱包 Iceball Wallet]
    C --> D[Jupiter DEX 购买 $PM]
    D --> E[立即销毁 通缩]

    F[持有 1M+ $PM] --> G[零手续费]
    F --> H[AI 预测功能]
    F --> I[Beta 早期访问]
    F --> J[即将: 推荐奖励]

    K[目标: Polymarket 1% 交易量] --> L[日费用约 $3K]
    L --> M[50% 推荐奖励]
    L --> N[50% $PM 回购锁定用于增长]
```

### 5.1 $PM 代币详情（实测数据）

| 属性 | 数值 |
|------|------|
| **合约地址（Solana）** | `3BWA5RBXyPXuMGZmVL8Snefu573FMJNGpsVi79baiBLV` |
| **主池地址** | `ArujGJh4KPrH5xD8zxweVaN7R9sf4mgT46wd865Eq47j` |
| **发射平台** | Believe（Solana）|
| **团队控制权** | 无（团队不控制合约）|
| **交易所** | Jupiter DEX（Solana）+ AscendEX（CEX）|
| **累计销毁** | 126.6M $PM（截至 2026-03-24）|
| **持有门槛** | 1,000,000 $PM = 零手续费 + AI 功能 |
| **费率** | 0.5% 买卖双向（$PM 持有者免）|

### 5.2 实测费用/销毁数据（2026年3月）

| 日期 | 收费（USDC）| 买回 $PM | 销毁 $PM |
|------|------------|---------|--------|
| 03/24 | 14 | 55K | 55K |
| 03/21 | 88 | 359K | 359K |
| 03/20 | 37 | 153K | 153K |
| 03/19 | 412 | 1.6M | 1.6M |
| 03/18 | 339 | 1.3M | 1.3M |
| 03/08 | 306 | 1.7M | 1.7M |

---

## 6. 核心功能与交易技术壁垒

### 6.1 功能深度对比

| 功能 | Polymtrade | Polymarket 官方 |
|------|-----------|---------------|
| 移动 App（iOS/Android）| ✅ | ❌ |
| 加载速度 | 4x 更快 | 基准 |
| AI 市场预测 | ✅ 55K+ 训练 | ❌ |
| 法币入金（MoonPay）| ✅ | ❌ |
| 零 gas 费 | ✅ 平台覆盖 | ❌ |
| 合并签名 | ✅ | ❌ |
| 代币激励 | ✅ $PM | ❌ |
| Kalshi 聚合 | 🚧 路线图 | ❌ |
| Copy Trading | 🚧 路线图 | ❌ |

### 6.2 AI Predictions 功能（实测）
- 基于 55K+ 已解决 Polymarket 市场训练
- 显示每个市场的 AI 预测方向（正确/不确定/准确率）
- V2 规划：整合 5 个顶级 AI 模型
- 持有 1M+ $PM 方可访问
- 当前准确率显示为 0%（可能是刚重置或数据加载问题）

### 6.3 Leaderboard（实测数据）
- 排名第一：0xE61...F251，2010 笔交易，$3,573,919 交易量
- 排名第二：0x150...fB2A，309 笔交易，$3,011,406 交易量
- 显示 Rank / User / Trades / Volume 四列

### 6.4 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 移动端先发优势 | 9 | 唯一有原生 App 的 Builder |
| AI 预测功能 | 7 | 55K+ 训练数据，门槛较高 |
| $PM 代币经济 | 8 | 通缩模型 + 零费用激励，用户黏性强 |
| 零 gas + 合并签名 | 8 | 极简用户体验，门槛最低 |
| 技术执行 | 7 | 三人团队，产出效率极高 |
| 路线图广度 | 8 | Kalshi 聚合 + Copy Trading 即将推出 |

---

## 7. 商业模式

```mermaid
pie title Polymtrade 收入来源
    "0.5% 交易手续费（→$PM 销毁）" : 40
    "Builder Fee 分成" : 40
    "$PM 代币生态增值" : 15
    "未来订阅模式" : 5
```

### 7.1 收入测算
1. **0.5% 交易手续费**：收 USDC → 全部用于回购销毁 $PM（当前非直接利润，而是代币价值支撑）
2. **Builder Fee 分成**：$28.30M × 0.5% ≈ **$141k/月**
3. **未来订阅模式**（路线图）：$PM 代币销毁换订阅资格，通缩驱动
4. **目标**：达到 Polymarket 1% 交易量 → 日费 $3K → 持续回购销毁

### 7.2 路线图（已完成 vs 规划中）

**已完成**：iOS + Android App、AI 预测模型、AscendEX CEX 上市、MoonPay 集成、零 gas 费、合并签名、Leaderboard、评论系统、高级搜索、费用透明仪表盘

**即将推出**：
- Kalshi 市场交易
- Polymtrade V2 设计（进行中）
- 多平台市场聚合
- 跨平台套利（$PM 持有者）
- Prediction Bot V2（5个 AI 模型）
- 订阅模式（$PM 销毁解锁）
- App 内直接购买 $PM
- Copy Trading

---

## 8. 待确认问题

- [ ] $PM 当前价格和市值？（DexScreener 未返回数据，需直接访问 Jupiter）
- [ ] AI Predictions 准确率目前显示 0%，原因？
- [ ] iOS App 目前审核状态（文档显示「currently in App Store verification」）？
- [ ] Kalshi 集成的预计上线时间？
- [ ] Copy Trading 具体设计方案（托管还是非托管）？
- [ ] AscendEX 上的 $PM 交易量和价格？
- [ ] 三人团队如何分工？是否计划扩招？

---

## 9. 总结

Polymtrade 是整个 Builder 生态中**最被低估的产品**，真实情况远比「Web 交易终端」复杂得多：

1. **移动端唯一**：iOS + Android 原生 App，填补 Polymarket 移动端空白
2. **完整代币经济**：$PM 通缩模型（0.5% 费用 100% 回购销毁），逻辑闭环
3. **AI 差异化**：55K+ 市场训练的预测模型，V2 将整合 5 个 AI
4. **极致用户体验**：零 gas、合并签名、MoonPay 法币入金、4x 速度
5. **野心路线图**：Kalshi 聚合 + 跨平台套利 + Copy Trading + 订阅模式
6. **3 人精干团队**：非 VC，中欧，10+ 年经验，执行效率极高

月交易量 $28.3M（#3），考虑到仅 3 人团队，人均产出极为惊人。
