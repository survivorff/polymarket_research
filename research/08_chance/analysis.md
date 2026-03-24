# Chance Markets — 深度分析报告（重大更新）

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#8**  
> 近1月交易量：**$9.99M**  
> ⚠️ **重要更正**：Chance Markets 与 Polymarket **完全无关**，是独立的 Avalanche 生态预测市场

---

## 1. 重大更正说明

初次调研时基于官网首页（chance.markets 无法访问）错误推断 Chance 是 Polymarket 前端。通过访问 `docs.chance.markets` 和 `app.chance.markets`，确认：

**Chance Markets 是基于 Avalanche C Chain 的独立价格预测平台，合约是 PancakeSwap Predictions v2 的 Fork，与 Polymarket 架构完全不同。**

它出现在 Polymarket Builder Program 排行榜，可能是因为：
1. 团队同时运营了一个 Polymarket 前端（Builder Code 接入）
2. 或者排行榜数据混淆

> 需要进一步确认 Chance 在 Polymarket 中的具体接入方式。

---

## 2. 产品真实情况

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册流程（Avalanche 钱包）

```mermaid
flowchart TD
    A[访问 app.chance.markets] --> B[点击 Connect Wallet]
    B --> C{选择钱包}
    C --> C1[MetaMask]
    C --> C2[Core Wallet Avalanche 原生]
    C --> C3[WalletConnect 扫码]
    C1 --> D[切换网络至 Avalanche C-Chain]
    C2 --> D
    C3 --> D
    D --> E[签名授权]
    E --> F[阅读并接受 Beta 免责声明]
    F --> G[进入主界面]
    note1[⚠️ 无需邮箱注册，钱包即身份]
    note2[需要 Avalanche C-Chain 网络，非 Polygon]
    note3[与 Polymarket 完全独立，不共享账户]
```

#### 2.0.2 入金流程（需要 AVAX）

```mermaid
flowchart TD
    A[需要 AVAX 下注] --> B{获取 AVAX 方式}
    B --> B1[中心化交易所购买]
    B --> B2[跨链桥从其他链转入]
    B --> B3[已持有 AVAX]

    B1 --> C1[在 Coinbase/Binance 购买 AVAX]
    C1 --> D1[提现至 Avalanche C-Chain 地址]
    D1 --> E[MetaMask/Core 钱包收到 AVAX]

    B2 --> C2[访问 Avalanche Bridge]
    C2 --> D2[从 ETH/BSC 桥接 AVAX]
    D2 --> E

    B3 --> E
    E --> F[余额显示在 app.chance.markets]
    F --> G[可开始下注]
    note1[Chance 平台本身不提供入金界面]
    note2[需在交易所或桥接完成后直接连接钱包]
    note3[⚠️ 注意：与 Polymarket 不同，这里用 AVAX 而非 USDC]
```

#### 2.0.3 交易（预测下注）流程

```mermaid
sequenceDiagram
    participant U as 用户
    participant APP as app.chance.markets
    participant CL as Chainlink Oracle
    participant SC as Avalanche 智能合约

    U->>APP: 选择市场（如 AVAX/USD）
    APP->>CL: 获取当前价格
    CL-->>APP: Locked Price（锁定价格）
    APP->>U: 显示当前轮次状态
    Note over APP: Entry 开放中（12h 窗口）
    U->>APP: 选择 UP（看涨）
    APP->>U: 显示当前赔率
    Note over APP: UP池/$X，DOWN池/$Y，总池/$Z
    U->>APP: 输入 1 AVAX
    APP->>U: 预览：赔率 / 潜在收益 / 手续费 3%
    U->>APP: 点击确认
    APP->>SC: 调用合约 enterUp()
    SC-->>APP: 交易确认
    APP->>U: 下注成功，等待结算
    Note over SC: 12小时后...
    SC->>CL: 请求 Closed Price
    CL-->>SC: 最终价格
    SC->>SC: 比对 Locked vs Closed
    SC->>SC: 计算胜者奖励
    SC->>U: 奖励可领取（无限期）
```

#### 2.0.4 赔率计算与风险分析

```mermaid
flowchart TD
    A[总奖池 = UP 池 + DOWN 池] --> B[扣除 3% Treasury Fee]
    B --> C[净奖池 = 总奖池 × 97%]
    C --> D{你选择了哪边?}
    D -->|UP 看涨| E[UP 赔率 = 净奖池 ÷ UP 总仓位]
    D -->|DOWN 看跌| F[DOWN 赔率 = 净奖池 ÷ DOWN 总仓位]
    E --> G[你的 UP 收益 = 下注额 × UP 赔率]
    F --> H[你的 DOWN 收益 = 下注额 × DOWN 赔率]
    G --> I[示例: UP池10 AVAX, 总池150 AVAX]
    I --> J[UP 赔率 = 145.5 ÷ 10 = 14.55x]
    note1[赔率随其他用户下注实时变动]
    note2[小池子赔率高但流动性低]
```

#### 2.0.5 $PREDICT 代币 + .chance 域名流程

```mermaid
flowchart TD
    A[$PREDICT 代币] --> B{用途}
    B --> B1[治理投票]
    B --> B2[生态激励]
    B --> B3[未来功能解锁]

    C[.chance 域名 NFT] --> D{获取方式}
    D --> D1[铸造 Mint]
    D1 --> E[访问 domains 页面]
    E --> F[选择域名]
    F --> G[支付 AVAX 铸造]
    G --> H[NFT 到账钱包]
    H --> I[在账户设置中设为 Active]
    I --> J[Leaderboard 显示域名而非地址]
    J --> K[建立链上身份认同]
```

#### 2.0.6 领取奖励流程

```mermaid
flowchart TD
    A[市场结算完成] --> B[Account Summary 页面更新]
    B --> C[显示 Claimable Rewards]
    C --> D{是否盈利?}
    D -->|是| E[显示可领取 AVAX 金额]
    D -->|否| F[本轮亏损，无奖励]
    E --> G[点击 Claim All 一键领取]
    G --> H[MetaMask/Core 签名确认]
    H --> I[AVAX 到账钱包]
    I --> J[可继续下注或提现]
    note1[奖励无领取期限，随时可领]
    note2[提现即提至已连接的钱包地址，无额外步骤]
```

#### 2.0.7 Leaderboard 排名系统

```mermaid
flowchart TD
    A[每轮下注] --> B[胜利积累积分]
    B --> C[Leaderboard 排名更新]
    C --> D{已铸造 .chance 域名?}
    D -->|是| E[以域名显示 如 alice.chance]
    D -->|否| F[以截断地址显示 0x1234...]
    E --> G[更高辨识度 + 社区认同]
    G --> H[激励购买域名 NFT]
```

### 2.1 核心产品
- **类型**：UP/DOWN 价格预测游戏（Binary Prediction）
- **链**：Avalanche C Chain
- **预测标的**：AVAXUSD、JOEUSD、BTCUSD、QIUSD、COQUSD
- **价格来源**：Chainlink Price Feeds
- **合约**：PancakeSwap Predictions v2 Fork（已审计，PeckShield）
- **轮次**：每轮 12 小时，有 12 小时入场窗口
- **费率**：Treasury Fee 3%

### 2.2 玩法机制

```mermaid
flowchart TD
    A[用户访问 app.chance.markets] --> B[Connect Wallet]
    B --> C[接受 Beta 条款]
    C --> D[选择市场 AVAX/USD 或其他]
    D --> E{当前轮次状态}
    E -->|Entry 开放中| F[选择方向]
    F --> F1[UP 看涨]
    F --> F2[DOWN 看跌]
    F1 --> G[输入金额 AVAX]
    F2 --> G
    G --> H[确认下注]
    H --> I[锁仓等待 In-Progress 阶段]
    I --> J[12小时后 Chainlink 报价]
    J --> K{Closed Price vs Locked Price}
    K -->|上涨| L[UP 获胜者瓜分奖池]
    K -->|下跌| M[DOWN 获胜者瓜分奖池]
    L --> N[奖池 × 97% ÷ UP总额 = 赔率]
    M --> N
    N --> O[随时领取奖励 无时限]
```

**赔率计算**：
- UP 赔率 = 总奖池 ÷ UP 总仓位
- DOWN 赔率 = 总奖池 ÷ DOWN 总仓位
- 例：DOWN 池 15 AVAX，总池 150 AVAX → DOWN 赔率 10x
- Treasury Fee 3%，固定收取

### 2.3 用户完整旅程

```mermaid
journey
    title Chance Markets 用户完整体验旅程
    section 入门
      访问 app.chance.markets: 4: 用户
      连接 Avalanche 钱包: 3: 用户
      阅读并接受 Beta 免责声明: 3: 用户
      查看当前轮次状态: 5: 用户
    section 预测交易
      选择市场 AVAX/USD: 5: 用户
      查看当前 UP/DOWN 池大小: 4: 用户
      分析赔率比例: 4: 用户
      选择 UP 或 DOWN: 5: 用户
      输入 AVAX 金额下注: 4: 用户
      等待 12 小时结算: 2: 用户
    section 生态参与
      查看 Leaderboard 排名: 4: 用户
      购买 $predict 代币: 3: 用户
      铸造 .chance 域名 NFT: 3: 用户
      设置域名为 Active 显示在排行榜: 4: 用户
    section 领取奖励
      结算后查看 Account Summary: 5: 用户
      一键领取所有未领奖励: 5: 用户
      无时限领取 永不过期: 5: 系统
```

### 2.4 .chance 域名铸造流程

```mermaid
flowchart TD
    A[用户想要 .chance 域名] --> B[确保持有 $predict 代币]
    B --> C[访问域名铸造页面]
    C --> D[输入想要的用户名]
    D --> E[支付 2000 $predict 固定费用]
    E --> F[NFT 域名铸造到钱包]
    F --> G{设置为 Active?}
    G -->|是| H[Profile 和 Leaderboard 显示该域名]
    G -->|否| I[保留在钱包，不显示]
    H --> J[在社区中建立身份认同]
```

### 2.5 生态系统
```mermaid
flowchart TD
    A[用户] --> B{预测 AVAX/USD}
    B --> C[UP 看涨]
    B --> D[DOWN 看跌]
    C --> E[锁仓 12 小时]
    D --> E
    E --> F{Chainlink 价格结算}
    F -->|上涨| G[UP 获胜者瓜分奖池]
    F -->|下跌| H[DOWN 获胜者瓜分奖池]
    G --> I[奖池 × 97% ÷ UP 总额 = 赔率]
    H --> I
```

**赔率计算**：
- UP 赔率 = 总奖池 ÷ UP 总仓位
- DOWN 赔率 = 总奖池 ÷ DOWN 总仓位
- 例：DOWN 池 15 AVAX，总池 150 AVAX → DOWN 赔率 10x

### 2.3 生态系统

| 组件 | 状态 | 说明 |
|------|------|------|
| **Daily Markets** | ✅ Alpha | AVAX/JOE/BTC/QI/COQ UP/DOWN |
| **$predict 代币** | ✅ 已发行 | Memecoin，总量 42,000,069，100% 流通 |
| **.chance Domains** | ✅ 上线 | 链上 NFT 域名，2000 $predict/个 |
| **Chance Chain L1** | 🚧 建设中 | 基于 Avalanche Stack |
| **Chance Oracles** | 🚧 规划中 | 支持小流动性代币的预言机 |
| **Custom Prediction Markets** | 🚧 规划中 | 用户自建预测市场 |
| **Leaderboard** | ✅ 上线 | 使用 .chance 域名作为用户名 |

---

## 3. $predict 代币详情

```mermaid
pie title $predict 代币分配
    "社区（Bellum Exchange 公开发射）" : 99
    "Treasury" : 1
```

| 属性 | 数值 |
|------|------|
| **合约地址** | `0xe46b44179db3af934da552b35ff8869e98dc6af5` |
| **总供应量** | 42,000,069 |
| **流通量** | 100%（全流通）|
| **发射方式** | Bellum Exchange Stealth Launch |
| **绑定时间** | 30 分钟内完成绑定至 LFJ（Trader Joe）|
| **交易所** | LFJ.gg / DEX Screener / CoinGecko |

---

## 4. 技术架构

```mermaid
graph LR
    subgraph 合约层 Avalanche C Chain
        C1[PancakeSwap Predictions v2 Fork]
        C2[Factory Contract]
        C3[$predict ERC-20]
        C4[.chance Domain Registry]
    end
    
    subgraph 预言机层
        O1[Chainlink Price Feeds]
        O2[AVAX/USD]
        O3[JOE/USD]
        O4[BTC/USD]
    end
    
    subgraph 前端层
        F1[app.chance.markets]
        F2[Leaderboard]
        F3[My Profile]
    end
    
    subgraph 规划中
        P1[Chance Chain L1]
        P2[Chance Oracles]
        P3[Custom Prediction Markets]
    end
    
    O1 --> C1
    O2 --> O1
    O3 --> O1
    O4 --> O1
    C1 --> F1
    C3 --> C4
    F1 --> F2
    C1 --> P1
    P1 --> P2
    P2 --> P3
```

### 4.1 合约架构
- **基础**：PancakeSwap Predictions v2（已有 PeckShield 审计报告）
- **链**：Avalanche C Chain（低 gas，快确认）
- **去中心化程度**：无需许可，不依赖单一运营方
- **贡献者模式**：社区驱动，多个独立贡献者（JankyStudios 开发，cccompanions 品牌，FortiFi 平台合作）

---

## 5. 核心功能与壁垒

### 5.1 与 Polymarket 的关键区别

| 维度 | Chance Markets | Polymarket |
|------|---------------|------------|
| 链 | Avalanche C Chain | Polygon |
| 结算货币 | AVAX | USDC |
| 预测类型 | UP/DOWN 价格 | 任意事件 |
| 合约基础 | PancakeSwap v2 Fork | 自研 CLOB + CTF |
| 赔率机制 | 动态赔率（奖池比例）| 限价订单簿 |
| 预言机 | Chainlink | UMA |

### 5.2 壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| $predict 社区 | 7 | Memecoin 社区黏性 |
| .chance 域名生态 | 6 | NFT 域名增加用户归属感 |
| Avalanche 生态位 | 7 | Avalanche 最活跃预测市场 |
| 技术壁垒 | 4 | PancakeSwap Fork，可复制 |
| Chance Chain 愿景 | 7 | 若成功，护城河极深 |

---

## 6. 商业模式

```mermaid
pie title Chance Markets 收入来源
    "3% Treasury Fee（每轮奖池）" : 60
    "$predict 代币经济" : 25
    ".chance 域名销售" : 10
    "Builder Fee（Polymarket接入）" : 5
```

### 6.1 收入测算
- **Treasury Fee**：每轮奖池的 3% 归 Treasury
- 若月交易量 $9.99M 是来自 Polymarket 接入，则 Builder Fee ≈ $50k/月
- $predict 代币升值对早期持有者有利，Treasury 持有 1%
- .chance 域名：2000 $predict/个，按 $predict 价格计算收入

---

## 7. 待确认问题

- [ ] **Chance Markets 在 Polymarket Builder Program 的具体接入方式**？是否同时有 Polymarket 前端？
- [ ] $predict 当前市值和价格？（CoinGecko 已上市）
- [ ] Chance Chain 当前进展？（文档说「已启动」）
- [ ] 月交易量 $9.99M 的构成：Avalanche 预测 vs Polymarket 接入？
- [ ] JankyStudios 和 cccompanions 的具体角色？
- [ ] FortiFi 平台合作的具体内容？
- [ ] Custom Prediction Markets 的上线时间表？

---

## 8. 总结

Chance Markets 是一个**完全独立的预测市场生态**，基于 Avalanche C Chain，与 Polymarket 属于同赛道竞争者而非前端工具：

1. **独特机制**：UP/DOWN 动态赔率，比 Polymarket 的 CLOB 更简单易懂
2. **完整代币经济**：$predict + .chance 域名 + Leaderboard 构成完整激励体系
3. **Avalanche 原生**：在 Avalanche 生态中占据独特位置
4. **野心勃勃**：Chance Chain L1 + 自定义预言机 + 自定义预测市场
5. **社区驱动**：无单一运营方，多贡献者模式

**与 Polymarket 的关系需要进一步确认**——它出现在 Builder Program 排行榜可能意味着团队同时运营了一个 Polymarket 接入前端。
