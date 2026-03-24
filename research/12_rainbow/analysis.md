# Rainbow Wallet — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#25**  
> 近1月交易量：**$1.46M**

---

## 1. 市场情况

### 1.1 市场定位
Rainbow 是**知名的以太坊/多链钱包应用**（iOS/Android），以美观的 UI 和良好的用户体验著称。其在 Polymarket Builder Program 中出现，代表了**钱包应用集成预测市场**的趋势。

### 1.2 Rainbow 背景
- 知名以太坊钱包，以精美设计著称
- 支持 ETH、Polygon、Base、Optimism 等多链
- 主要用户群：以太坊原生用户、NFT 爱好者、DeFi 用户
- 非托管钱包：用户自控私钥

### 1.3 集成 Polymarket 的意义
- 为 Rainbow 用户提供直接在钱包内参与预测市场的能力
- 丰富钱包的功能生态，增加用户留存
- 与 Jupiter（钱包/DEX 聚合器集成）类似的战略逻辑

---

## 2. 用户体验路径

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册/连接流程（移动端钱包）

```mermaid
flowchart TD
    A[下载 Rainbow Wallet iOS/Android] --> B{已有钱包?}
    B -->|否| C[创建新钱包]
    C --> D[备份助记词 12/24 词]
    D --> E[Rainbow 生成以太坊/Polygon 地址]
    B -->|是| F[导入已有助记词或私钥]
    F --> E
    E --> G[打开 Rainbow App]
    G --> H[进入 Discover 或 DApp 浏览器]
    H --> I[找到 Polymarket 入口]
    I --> J[点击连接 Rainbow 自动授权签名]
    J --> K[连接成功 进入 Polymarket 交易界面]
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[Rainbow 钱包已连接 Polymarket] --> B{钱包内已有 Polygon USDC?}
    B -->|是| C[直接可用于交易]
    B -->|否| D[需要充值]
    D --> E{充值方式}
    E --> E1[方式一: Rainbow 内购买 法币on-ramp]
    E --> E2[方式二: 从 ETH 主网跨链到 Polygon]
    E --> E3[方式三: 从 CEX 提现 USDC 至 Polygon 地址]
    E1 --> F[Rainbow 内置 on-ramp MoonPay/Transak]
    F --> G[选择金额 输入卡信息]
    G --> H[完成 KYC]
    H --> I[USDC 到账 Polygon 地址]
    E2 --> J[使用 Rainbow 内置桥接]
    J --> K[ETH/USDC 跨链至 Polygon]
    K --> I
    E3 --> L[复制 Polygon 钱包地址]
    L --> M[从 CEX 提现 USDC on Polygon]
    M --> I
    I --> N[余额显示在 Rainbow 中]
    C --> O[可在 Polymarket 界面下单]
    N --> O
```

#### 2.0.3 浏览市场与交易流程

```mermaid
flowchart TD
    A[在 Rainbow 内进入 Polymarket 界面] --> B[浏览市场列表]
    B --> C{筛选方式}
    C --> C1[按分类 政治/加密/体育]
    C --> C2[按交易量排序]
    C --> C3[搜索关键词]
    C1 --> D[选择感兴趣市场]
    C2 --> D
    C3 --> D
    D --> E[查看市场详情]
    E --> E1[YES/NO 当前价格]
    E --> E2[流动性和交易量]
    E --> E3[到期时间和条件]
    E3 --> F{选择方向}
    F --> F1[买入 YES]
    F --> F2[买入 NO]
    F1 --> G[输入 USDC 金额]
    F2 --> G
    G --> H[预览 估价/费用]
    H --> I[确认交易]
    I --> J[Rainbow 钱包弹窗签名授权]
    J --> K[无需切换 App 原生签名]
    K --> L[Polymarket CLOB 成交]
    L --> M[持仓更新 可在 Portfolio 查看]
```

#### 2.0.4 持仓管理流程

```mermaid
flowchart TD
    A[进入 Polymarket Portfolio 页面] --> B[查看所有活跃持仓]
    B --> C{操作选择}
    C --> C1[持有等待结算]
    C --> C2[提前平仓]
    C1 --> D[等待市场到期]
    C2 --> E[点击 Sell]
    E --> F[输入卖出数量]
    F --> G[Rainbow 钱包签名]
    G --> H[CLOB 成交 USDC 返回钱包]
    D --> I[Polymarket UMA Oracle 解析结果]
    I --> J{持仓方向正确?}
    J -->|是| K[USDC 自动结算到 Rainbow Polygon 地址]
    J -->|否| L[仓位归零 损失本金]
    K --> M[Rainbow 钱包余额更新]
```

#### 2.0.5 提现流程

```mermaid
flowchart TD
    A[USDC 在 Rainbow Polygon 钱包中] --> B{提现去向}
    B --> B1[转至以太坊主网]
    B --> B2[转至 CEX 法币出金]
    B --> B3[留在 Polygon 继续使用]
    B1 --> C[Rainbow 内置跨链桥]
    C --> D[Polygon USDC 跨链至 ETH 主网]
    D --> E[主网 USDC 到账]
    B2 --> F[复制 CEX USDC 充值地址 on Polygon]
    F --> G[Rainbow 发送 USDC 至该地址]
    G --> H[CEX 到账 可法币出金]
    B3 --> I[继续在 Polymarket 交易]
```

#### 2.0.6 领奖流程

```mermaid
flowchart TD
    A[预测市场结算日到达] --> B[Polymarket UMA Oracle 最终解析]
    B --> C{结果}
    C -->|YES 胜出| D[持 YES 者每份获 1 USDC]
    C -->|NO 胜出| E[持 NO 者每份获 1 USDC]
    D --> F[USDC 自动发放至 Polygon 地址]
    E --> F
    F --> G[Rainbow 钱包余额更新]
    G --> H[Rainbow App 通知弹出]
    H --> I[用户确认收款]
```

### 2.1 完整用户旅程

```mermaid
journey
    title Rainbow x Polymarket 用户完整体验旅程
    section 发现入口
      打开 Rainbow App: 5: 用户
      进入 Discover DApp 浏览器: 4: 用户
      找到 Polymarket 入口: 4: 用户
      一键授权连接: 5: 用户
    section 入金
      钱包内购买 USDC on Polygon: 4: 用户
      或从 CEX 转入 USDC: 3: 用户
    section 交易
      浏览 Polymarket 市场: 5: 用户
      选择市场和方向: 4: 用户
      Rainbow 原生签名确认: 5: 用户
      成交无需切换 App: 5: 用户
    section 结算
      等待市场到期: 3: 用户
      USDC 自动到账 Rainbow: 5: 系统
      Rainbow 通知提醒: 4: 系统
```

---

## 3. 业务架构

```mermaid
graph TD
    subgraph Rainbow Wallet App
        A[用户]
        B[Rainbow iOS/Android]
        C[Discover / DApp 浏览器]
        D[Polymarket 集成页面]
    end

    subgraph Polymarket
        E[Polymarket CLOB API]
        F[Gamma API]
        G[Polygon 链]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    D --> F
    E --> G
    B -->|自有钱包 Polygon| G
```

### 3.1 集成模式推断
Rainbow 可能通过以下方式集成 Polymarket：
1. **DApp 浏览器内嵌**：在 Rainbow 的内置浏览器中直接访问 Polymarket
2. **原生集成**：在 Rainbow App 中开发专属的预测市场界面
3. **深链集成**：Rainbow 提供 Polymarket 的快捷入口

---

## 4. 技术架构

```mermaid
graph LR
    subgraph Rainbow App
        R1[React Native App]
        R2[WalletConnect]
        R3[内置 Web3 Provider]
        R4[Polygon 支持]
    end

    subgraph Polymarket
        P1[CLOB API]
        P2[Gamma API]
        P3[CTF Exchange]
    end

    R1 --> R2
    R2 --> R3
    R3 --> R4
    R4 --> P3
    R1 --> P1
    R1 --> P2
```

---

## 5. 核心功能与技术壁垒

### 5.1 钱包集成的天然优势
- 用户已经在 Rainbow 中管理资产，无需额外转账
- 签名体验无缝，无需切换应用
- Polygon 支持意味着直接可用

### 5.2 移动端优势
- Rainbow 是移动端钱包，弥补了 Polytrader.app 等不支持移动端的缺口
- 移动端用户是加密市场增量用户的主要来源

### 5.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 用户基数 | 8 | 知名钱包，百万级用户 |
| 移动端体验 | 9 | 原生移动端无缝体验 |
| 品牌信任 | 8 | 钱包安全性长期积累的信任 |
| 预测市场深度 | 4 | 非核心业务，功能可能较基础 |
| 渠道独特性 | 8 | 钱包渠道是独特的用户触达方式 |

---

## 6. 商业模式

```mermaid
pie title Rainbow x Polymarket 收入来源
    "Builder Fee 分成" : 60
    "功能增值留存" : 40
```

### 6.1 收入测算
- 月交易量 $1.46M × 0.5% ≈ **$7.3k/月** Builder Fee
- 对 Rainbow 而言，预测市场是**功能扩展，主要价值是用户留存而非直接收入**

### 6.2 战略价值
- 增加 Rainbow 的 DApp 生态丰富度
- 差异化竞争：与 MetaMask 等竞品拉开距离
- 探索「一站式 DeFi 钱包」的产品方向

---

## 7. 待确认问题

- [ ] Rainbow 集成 Polymarket 的具体形式？（内嵌 WebView vs 原生组件）
- [ ] 在 Rainbow App 哪个版本/入口可以访问 Polymarket？
- [ ] 是否有针对预测市场的专属 UI？
- [ ] Rainbow 的 Polymarket 集成是否仅限 Polygon 链？
- [ ] 月交易量 $1.46M 的增长趋势如何？

---

## 8. 总结

Rainbow 接入 Polymarket 代表了**移动端钱包集成预测市场**的新趋势。虽然月交易量（$1.46M，#25）相对较小，但其战略意义在于：
1. 验证了钱包作为预测市场入口的可行性
2. 为 Polymarket 打开了移动端原生用户渠道
3. 与 Jupiter 一起预示着**未来更多 DeFi 基础设施将集成预测市场**
