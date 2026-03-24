# Polydupe — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#17**  
> 近1月交易量：**$3.06M**

---

## 1. 市场情况

### 1.1 市场定位
Polydupe 定位为 **非托管复制交易平台**，口号「Copy the Best. Your keys, your predictions.」强调非托管和安全性。其核心创新是**按比例复制**（Conviction-based copying）：不是简单地镜像金额，而是按对方的仓位占比来决定自己的跟单比例。

### 1.2 市场规模与地位
- Builder Program 排名 **第十七**，月交易量 $3.06M
- **完全非托管**：用户自控私钥，可随时导出钱包
- **费率**：盈利的 2.5%（只赚钱才收费），推荐码享 2.25%
- **推荐系统**：30% 推荐返佣

### 1.3 竞争对比

| 对比维度 | Polydupe | PolyCop | Olympusx | Polygun |
|---------|---------|---------|---------|--------|
| 托管方式 | 非托管 | 托管 | 非托管(Privy) | 托管 |
| 费率模型 | 盈利2.5% | 未知 | 0.01-0.75% | 1% |
| 平台 | Web | Web | Web | Telegram |
| 独特功能 | 按比例复制 | 聪明钱算法 | 手动交易+复制 | 跨链桥 |

---

## 2. 用户体验路径（实测）

### 2.1 完整用户旅程

```mermaid
journey
    title Polydupe 用户完整体验旅程
    section 发现与入门
      访问 polydupe.com: 5: 用户
      看到 Conviction-based 复制理念: 5: 用户
      查看顶级交易者排行榜: 5: 用户
      查看 PnL/Volume 数据: 4: 用户
      点击 Sign in: 4: 用户
      创建非托管钱包: 4: 系统
    section 充值与配置
      用信用卡/银行/加密货币充值: 4: 用户
      浏览 Traders 排行榜: 5: 用户
      查看具体交易者的持仓和记录: 4: 用户
      点击复制: 5: 用户
      确认风险暴露比例设置: 4: 用户
    section 运行阶段
      实时镜像目标交易: 5: 系统
      查看 Live Trades 实时成交流: 4: 用户
      盈利后扣除 2.5% 费用: 3: 系统
      导出钱包或随时暂停: 5: 用户
    section 高级功能
      进入 Insiders 追踪内部人士: 4: 用户
      使用 Data API: 3: 用户
      推荐好友获 30% 佣金: 4: 用户
```

### 2.2 注册与充值流程

```mermaid
flowchart TD
    A[访问 polydupe.com] --> B[点击 Sign in]
    B --> C[创建账户]
    C --> D[Polydupe 生成非托管 Polymarket 钱包]
    D --> E[选择充值方式]
    E --> E1[信用卡/借记卡]
    E --> E2[银行转账]
    E --> E3[加密货币 USDC]
    E1 --> F[法币 on-ramp 合作方]
    E2 --> F
    E3 --> G[直接充值]
    F --> H[USDC 到账]
    G --> H
    H --> I[开始使用]
```

### 2.3 Conviction-based 复制流程（核心机制）

```mermaid
sequenceDiagram
    participant T as 目标交易者 $500k 账户
    participant PM as Polymarket
    participant PD as Polydupe 引擎
    participant U as 用户 $5k 账户

    T->>PM: 买入 YES $25,000（占账户 5%）
    PM-->>PD: 检测到交易
    PD->>PD: 计算风险暴露比例 = 5%
    PD->>PD: 用户账户 $5k × 5% = $250
    PD->>U: 自动买入 YES $250
    Note over PD,U: 相同的相对风险暴露，不同绝对金额
    PM-->>PD: 成交回执
    PD->>U: 推送通知
```

### 2.4 Insiders 功能流程

```mermaid
flowchart TD
    A[进入 Insiders 模块] --> B[查看被标记为 Insider 的钱包]
    B --> C{内部人士类型}
    C --> C1[媒体从业者关联地址]
    C --> C2[行业高管关联地址]
    C --> C3[高胜率专家地址]
    C1 --> D[查看其持仓方向]
    D --> E[分析信息优势]
    E --> F{选择跟随?}
    F -->|是| G[一键复制]
    F -->|否| H[继续观察]
```

### 2.5 实测真实数据（polydupe.com 首页）

**顶级交易者排行榜**：
| 排名 | 名称 | 钱包 | PNL | VOLUME |
|------|------|------|-----|--------|
| 1 | Theo4 | 0x5668...5839 | **+$22.05M** | $43.01M |
| 2 | Fredi9999 | 0x1f2d...d0cf | **+$16.62M** | $76.61M |
| 3 | kch123 | 0x6a72...33ee | **+$11.22M** | $258.90M |

---

## 3. 业务架构

```mermaid
graph TD
    A[用户] --> B[Polydupe]
    B --> C{核心功能}
    
    C --> D[Traders 排行榜]
    C --> E[Insiders 内幕追踪]
    C --> F[Live Trades 实时流]
    C --> G[Data API]
    C --> H[Referrals 推荐]
    
    D --> D1[浏览顶级交易者]
    D --> D2[查看胜率/PnL/记录]
    D --> D3[一键复制]
    
    E --> E1[内部人士持仓追踪]
    
    F --> F1[实时成交流]
    
    D3 --> I[按比例镜像交易]
    I --> J[Polymarket CLOB API]
    J --> K[Polygon 链]
```

### 2.1 「Conviction-based Copying」核心机制

```mermaid
flowchart LR
    A[聪明钱: 总仓位$100k] --> B[买入 YES $5k]
    B --> C[仓位占比: 5%]
    C --> D{你的账户}
    D -->|账户$1000| E[跟单: $50]
    D -->|账户$10000| F[跟单: $500]
    E --> G[同等风险暴露比例]
    F --> G
```

**核心洞察**：「$10,000 trade means nothing. For a whale, it's 1%. For you, it might be everything.」
传统复制交易按绝对金额，Polydupe 按**风险暴露比例**，让小户和大户承受同等相对风险。

### 2.2 Insiders 功能
- 追踪「内部人士」（Insiders）持仓
- 可能是追踪有信息优势的钱包（如：媒体人、行业从业者关联地址）
- 是独特的差异化功能

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 数据层
        A1[Polygon 链上全量索引]
        A2[Polymarket Gamma API]
        A3[实时 WebSocket]
    end
    
    subgraph 分析层
        B1[交易者评分算法]
        B2[内部人士识别]
        B3[比例计算引擎]
    end
    
    subgraph 钱包层
        C1[非托管钱包生成]
        C2[私钥本地存储]
        C3[签名执行]
    end
    
    subgraph 商业层
        D1[盈利追踪]
        D2[2.5%费用计算]
        D3[推荐追踪]
    end
    
    A1 --> B1
    A2 --> B3
    A3 --> B3
    B1 --> B3
    B2 --> B3
    B3 --> C3
    C3 --> D1
    D1 --> D2
```

---

## 4. 核心功能与技术壁垒

### 4.1 「只赚钱才收费」的商业模式创新
- 盈利的 2.5% vs 固定交易手续费
- 与用户利益完全对齐：平台只在用户赚钱时才赚
- 对散户非常有吸引力（无盈利零成本）

### 4.2 Data API 开放
- 提供数据 API，说明数据积累是重要资产
- 可对外出售数据，B2B 收入来源

### 4.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 非托管安全 | 8 | 完全自控私钥 |
| 比例复制算法 | 7 | 独特的 Conviction-based 机制 |
| 利益对齐模型 | 9 | 「只赚钱才收费」极强用户信任 |
| 数据 API | 6 | 额外B2B收入来源 |
| 推荐飞轮 | 7 | 30%推荐返佣驱动增长 |

---

## 5. 商业模式

```mermaid
pie title Polydupe 收入来源
    "盈利2.5%抽成" : 55
    "Builder Fee分成" : 30
    "Data API" : 10
    "推荐净收益" : 5
```

### 5.1 收入测算
- Builder Fee：$3.06M × 0.5% ≈ **$15.3k/月**
- 盈利抽成：假设平均用户月盈利率5%，则 $3.06M × 5% × 2.5% ≈ **$3.8k/月**
- 盈利抽成金额取决于用户整体盈利状况

---

## 6. 待确认问题

- [ ] 「Insiders」如何识别内部人士？链上分析还是人工标注？
- [ ] 非托管钱包的具体实现（纯本地存储还是有加密备份）？
- [ ] Data API 的定价和可用数据集？
- [ ] 卡/银行入金功能如何实现？（on-ramp 合作方？）
- [ ] 团队背景？
- [ ] 2.5% 是如何计算「盈利」的？按每笔还是总账户？

---

## 7. 总结

Polydupe 是复制交易赛道中**商业模式设计最优雅**的产品：
1. **「只赚钱才收费」**：利益完全对齐，用户信任极高
2. **Conviction-based 复制**：相对风险暴露，比绝对金额复制更合理
3. **非托管安全**：用户资金完全自控
4. **Insiders 功能**：独特差异化，追踪信息优势者
5. 月交易量 $3.06M（#17），有较大增长空间
