# PolyMaker.bet — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#14**  
> 近1月交易量：**$3.54M**

---

## 1. 市场情况

### 1.1 市场定位
PolyMaker 定位为 **Polymarket 做市商工具（Market Maker Tool）**，核心功能是帮助用户在预测市场中提供流动性（做市），并通过「Bond」机制获得收益。这是 Builder 生态中**唯一专注做市商**的产品。

### 1.2 市场规模与地位
- Builder Program 排名 **第十四**，月交易量 $3.54M
- 从页面内容可见：**Trade / Portfolio / Bond / Stats** 四个核心模块
- 有「Rewards / Positions」功能，暗示做市激励机制
- 排序选项：**$/day / Est. APR / Volume / 24h Vol / A-Z**，说明面向做市商的收益管理

### 1.3 竞争格局
- **无直接竞争者**：专注做市商工具是独特定位
- 与 Polymarket 官方的 Maker Rebates Program 和 Liquidity Rewards 配合使用
- 面向：专业做市商、量化团队、流动性提供者

---

## 2. 用户体验路径（实测）

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册/连接流程

```mermaid
flowchart TD
    A[访问 polymaker.bet] --> B[点击 Connect Wallet]
    B --> C{选择钱包}
    C --> C1[MetaMask]
    C --> C2[WalletConnect]
    C --> C3[Coinbase Wallet]
    C1 --> D[EIP-712 签名授权]
    C2 --> D
    C3 --> D
    D --> E[连接成功 进入 Trade 主界面]
    E --> F[自动读取 Polymarket 账户余额]
    F --> G[可开始做市]
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[进入 Trade 页面] --> B{账户已有 USDC?}
    B -->|否| C[需要充值至 Polymarket]
    C --> D[访问 polymarket.com Deposit]
    D --> D1[信用卡 on-ramp]
    D --> D2[USDC on Polygon 直转]
    D --> D3[其他链跨链]
    D1 --> E[USDC 到账 Polygon Proxy Wallet]
    D2 --> E
    D3 --> E
    E --> F[PolyMaker 自动读取余额]
    B -->|是| F
    F --> G[可进行做市操作]
```

#### 2.0.3 发现做市机会流程（核心功能）

```mermaid
flowchart TD
    A[进入 Bond 页面] --> B[加载 169 个可做市场]
    B --> C{按收益目标排序}
    C --> C1[按 每日收益 $/day 排序]
    C --> C2[按 年化收益率 Est.APR 排序]
    C --> C3[按 总交易量 Volume 排序]
    C --> C4[按 24小时量 排序]
    C1 --> D[高日收益市场]
    D --> D1[US x Iran $2583/day 48% APR]
    D --> D2[US forces $1800/day 49% APR]
    C2 --> E[高APR 小众市场]
    E --> E1[Melania $720/day 2200% APR]
    E --> E2[Denmark Election $350/day 970% APR]
    D1 --> F[点击查看详情]
    E1 --> F
    F --> G[分析市场风险和流动性]
    G --> H{决定做市?}
    H -->|是| I[进入 Bond 质押界面]
    H -->|否| B
```

#### 2.0.4 Bond 做市质押流程

```mermaid
flowchart TD
    A[选定目标市场] --> B[点击 Bond 按钮]
    B --> C[输入做市资金 USDC]
    C --> D[系统展示预期收益]
    D --> D1[预计 $/day 日收益]
    D --> D2[预计 Est.APR 年化]
    D --> D3[市场剩余时间]
    D3 --> E[确认质押]
    E --> F[钱包签名授权]
    F --> G[Bond 合约锁定 USDC]
    G --> H[系统自动在 YES/NO 两侧挂流动性订单]
    H --> I[价差收益实时积累]
    I --> J[申请 Polymarket Maker Rebates]
    J --> K[额外 Rebate 收益叠加价差收益]
    K --> L[Dashboard 实时显示 $/day 更新]
```

#### 2.0.5 持仓管理与手动交易流程

```mermaid
flowchart TD
    A[进入 Trade 页面] --> B[浏览市场]
    B --> C[选择市场]
    C --> D{交易类型}
    D --> D1[Market Order 市价]
    D --> D2[Limit Order 限价]
    D1 --> E[输入金额 立即成交]
    D2 --> F[设置目标价格 等待挂单成交]
    E --> G[持仓更新]
    F --> G
    G --> H[进入 Portfolio 查看]
    H --> I{管理操作}
    I --> I1[继续持有]
    I --> I2[平仓卖出]
    I --> I3[查看 Stats 收益统计]
    I2 --> J[USDC 返回账户]
```

#### 2.0.6 提现/收益提取流程

```mermaid
flowchart TD
    A[Bond 做市收益或交易盈利] --> B{提取方式}
    B --> B1[提取 Bond 收益]
    B --> B2[提取账户 USDC 至外部]
    B1 --> C[在 Bond 页面点击 Withdraw]
    C --> D[收益 USDC 返回账户余额]
    D --> E[可继续做市或提现]
    B2 --> F[在 Portfolio 页面点击 Withdraw]
    F --> G[输入目标 Polygon 地址]
    G --> H[输入 USDC 金额]
    H --> I[钱包签名确认]
    I --> J[Polygon 链上广播]
    J --> K[USDC 到账目标地址]
```

#### 2.0.7 结算/领奖流程（持仓市场到期）

```mermaid
flowchart TD
    A[做市的市场到期] --> B[Polymarket UMA Oracle 解析结果]
    B --> C{Bond 做市仓位处理}
    C --> D[YES 侧持仓按结果结算]
    C --> E[NO 侧持仓按结果结算]
    D --> F[盈亏相抵 净收益或净亏损]
    E --> F
    F --> G[价差收益 + Rebate 收益保留]
    G --> H[USDC 返回账户]
    H --> I[可用于下一个市场做市]
```

### 2.1 完整用户旅程

```mermaid
journey
    title PolyMaker.bet 做市商用户完整体验旅程
    section 发现高收益机会
      访问 polymaker.bet: 5: 用户
      按 $/day 排序市场: 5: 用户
      发现 US x Iran 2583/day 48% APR: 5: 用户
      查看小众市场 高 APR 机会: 5: 用户
      决定做市: 4: 用户
    section 做市操作
      连接钱包: 4: 用户
      进入 Bond 页面: 4: 用户
      选择做市市场: 4: 用户
      质押 USDC 到 Bond: 4: 用户
      系统自动挂双边订单: 5: 系统
    section 收益管理
      查看实时 $/day 收益: 5: 用户
      查看 Portfolio 持仓: 4: 用户
      监控 Est. APR 变化: 4: 用户
      查看 Stats 统计: 4: 用户
      提取收益: 4: 用户
```

### 2.2 Bond 做市流程

```mermaid
flowchart TD
    A[进入 Bond 页面] --> B[浏览 169 个市场]
    B --> C{排序方式}
    C --> C1[$/day 日收益排序]
    C --> C2[Est. APR 年化排序]
    C --> C3[Volume 交易量排序]
    C --> C4[24h Vol 排序]
    C1 --> D[发现最高日收益市场]
    D --> E[US x Iran ceasefire: $2583/day 48% APR]
    C2 --> F[发现最高 APR 市场]
    F --> G[小众市场: Melania event $720/day 2200% APR]
    D --> H[选择目标市场]
    G --> H
    H --> I[输入做市金额]
    I --> J[Bond 自动管理双边挂单]
    J --> K[收取价差收益]
    J --> L[申请 Polymarket Maker Rebates]
    K --> M[实时 $/day 更新]
    L --> M
```

### 2.3 实测 Bond 收益数据（2026-03-24）

**高交易量市场（低 APR）**：
| 市场 | 总交易量 | $/day | Est. APR |
|------|---------|-------|----------|
| US x Iran ceasefire | $39.4M | **$2,583** | 48% |
| US forces enter Iran | $26.9M | **$1,800** | 49% |
| Crude Oil CL hit by March | $67.4M | **$1,110** | 12% |
| Netanyahu out by...? | $67.6M | **$310** | 3% |
| 2028 Democratic Nominee | $905.8M | **$111** | 0% |

**高 APR 小众市场**：
| 市场 | 总交易量 | $/day | Est. APR |
|------|---------|-------|----------|
| Melania speech content | $35K | **$720** | **2,200%** |
| Denmark Election 3rd Place | $63K | **$350** | **970%** |
| Denmark Election 2nd Place | $146K | **$300** | **632%** |
| Terrebone By-Election | $18K | **$199** | **667%** |
| Next PM of Slovenia | $1.5M | **$600** | **262%** |

**关键洞察**：小众、短期市场 APR 极高（数百到数千%），但流动性低；大市场 APR 低但绝对收益高。

### 2.4 市场分析决策流程

```mermaid
flowchart TD
    A[进入 PolyMaker] --> B{投资偏好}
    B -->|追求最高收益| C[按 $/day 排序]
    B -->|追求最高 APR| D[按 Est. APR 排序]
    B -->|熟悉的市场| E[按 A-Z 排序]
    C --> F[选择新闻热点市场]
    D --> G[选择冷门小众市场]
    F --> H[分析市场风险]
    G --> H
    H --> I{风险评估}
    I -->|风险可控| J[质押 USDC 做市]
    I -->|风险过高| K[换其他市场]
    J --> L[Bond 自动执行]
```

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 策略层
        S1[自动做市算法]
        S2[价格区间管理]
        S3[库存风险管理]
        S4[Rebate 申请]
    end

    subgraph 数据层
        D1[CLOB 实时订单簿]
        D2[市场价格 Feed]
        D3[Polymarket Maker Rebates API]
    end

    subgraph 用户层
        U1[Web Dashboard]
        U2[APR 显示]
        U3[仓位管理]
    end

    subgraph 链上层
        C1[USDC 质押合约]
        C2[Proxy Wallet]
        C3[CLOB 订单]
    end

    D1 --> S1
    D2 --> S2
    S1 --> S2
    S2 --> C3
    S3 --> S1
    D3 --> S4
    S4 --> U2
    C1 --> C2
    C2 --> C3
    U1 --> U3
```

---

## 4. 核心功能与技术壁垒

### 4.1 做市自动化壁垒
- **库存风险管理**：做市商需要平衡 YES/NO 仓位，防止单边暴露
- **价格发现算法**：在何价位挂单才能最大化收益而不亏损
- **Rebate 优化**：Polymarket 对做市量有分级 Rebate，需要精细管理

### 4.2 Polymarket Maker Rebates 集成
- Polymarket 对达到一定做市量的用户提供 Rebate（返佣）
- PolyMaker 帮用户自动达成 Rebate 门槛，用户分享收益
- 这是真实的额外收入来源，不依赖价差

### 4.3 做市商排序功能
- **$/day**：按日收益排序市场，找最赚钱的做市机会
- **Est. APR**：年化收益率排序，帮助做市商资本配置
- 这些工具对专业做市商极有价值

### 4.4 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 做市算法 | 8 | 自动化做市需要复杂的库存管理 |
| Rebate 优化 | 7 | 深度理解 Polymarket Maker Program |
| 用户独特性 | 8 | 做市商是高价值、高门槛用户群 |
| 竞争壁垒 | 8 | 做市工具赛道几乎无竞争者 |
| 技术门槛 | 7 | 需要量化交易背景 |

---

## 5. 商业模式

```mermaid
pie title PolyMaker 收入来源推测
    "Builder Fee 分成" : 35
    "做市收益分成" : 40
    "Bond APR 管理费" : 20
    "其他" : 5
```

### 5.1 收入测算
- Builder Fee：$3.54M × 0.5% ≈ **$17.7k/月**
- 做市收益分成：用户的做市收益中抽取一定比例（如 10-20%）
- Bond 管理费：对质押资金收取管理费（如 0.1-0.5%/年）

### 5.2 商业模式优势
- 与 Polymarket Maker Rebates 深度配合，共同激励做市
- 做市商是 Polymarket 流动性的核心，PolyMaker 提供了必要工具

---

## 6. 待确认问题

- [ ] Bond 的具体 APR 范围？当前实际收益？
- [ ] 做市算法的参数是否可以用户自定义？
- [ ] 是否支持多市场同时做市？
- [ ] 库存风险如何管理（防止 Delta 失衡）？
- [ ] PolyMaker 收取的管理费/分成比例？
- [ ] 与 Polymarket 官方 Maker Rebates 的对接细节？
- [ ] 团队背景？是否有量化交易背景？
- [ ] v1.7.9 版本号说明产品已相当成熟，具体发展历程？

---

## 7. 总结

PolyMaker.bet 是 Builder 生态中**最专业化**的工具：
1. **唯一做市商工具**：填补了 Builder 生态中做市商工具的空白
2. **Bond 机制**：将复杂的做市操作简化为「质押即赚 APR」
3. **Rebate 优化**：充分利用 Polymarket 官方 Maker Rebates
4. 月交易量 $3.54M（#14），考虑到其面向专业做市商，实际影响力远超交易量数字
5. v1.7.9 版本号说明产品已有较长发展历史，产品成熟
