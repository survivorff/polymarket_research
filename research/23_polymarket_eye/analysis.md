# Polymarket Eye — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#23**  
> 近1月交易量：**$1.94M**

---

## 1. 市场情况

### 1.1 市场定位
Polymarket Eye 定位为 **Polymarket 数据分析与监控平台**，提供链上行为分析、聪明钱追踪、可疑持仓识别等功能。其核心价值是帮助交易者发现「信息不对称」——哪些市场可能被操纵或错误定价。

### 1.2 核心功能（实测）

从页面内容可见以下功能模块：
- **Dashboard**：综合仪表盘
- **Geo Map**：地理分布热力图（交易者地区分布）
- **Market Fetcher**：市场筛选器
- **Smart's Tracker**：聪明钱追踪
- **X Leaderboard**：Twitter/X 影响力排行
- **Liquidity Provider**：流动性提供者分析
- **Ending Soon**：即将到期市场
- **Whale Watch**：大户监控
- **Hot & Sus**：热门 & 可疑市场
- **Gain Traction**：获得关注的市场
- **New Markets**：新上线市场

### 1.3 「Sus（可疑）」持仓分析
实测数据显示每个市场会标注：
- **New**：新进场的持仓数
- **Fresh**：刚建仓的
- **Overbet**：超额下注（相对于概率过度押注）
- **Possible Outcome**：AI 预测结果方向

---

## 2. 用户体验路径（实测）

### 2.0 注册、入金、交易、提现全流程（详细）

#### 2.0.1 访问与注册流程

```mermaid
flowchart TD
    A[访问 polymarketeye.com] --> B[自动跳转 /fetcher 页面]
    B --> C{是否需要账户?}
    C -->|纯浏览免费| D[无需注册 直接使用分析功能]
    C -->|高级功能| E[注册账户]
    E --> F[邮箱注册或钱包连接]
    F --> G[解锁 Premium 功能]
    D --> H[浏览 Hot & Sus 可疑市场]
    G --> H
    H --> I[查看 Sus 持仓标签]
    I --> J[发现交易机会]
```

#### 2.0.2 Hot & Sus 可疑市场分析流程

```mermaid
flowchart TD
    A[进入 Hot & Sus 页面] --> B[系统展示可疑市场列表]
    B --> C[查看每个市场的标签]
    C --> C1[New 新进场持仓数]
    C --> C2[Fresh 刚建仓]
    C --> C3[Overbet 超额押注]
    C --> C4[AI Possible Outcome 预测]
    C4 --> D[选择感兴趣市场]
    D --> E[分析 Sus 持仓方向]
    E --> F{Yes Sus 多 还是 No Sus 多?}
    F -->|Yes Sus 多| G[考虑跟买 Yes]
    F -->|No Sus 多| H[考虑跟买 No]
    G --> I[点击 BUY YES 跳转 Polymarket]
    H --> J[点击 BUY NO 跳转 Polymarket]
    I --> K[在 Polymarket 完成交易]
    J --> K
```

#### 2.0.3 Whale Watch 大户监控流程

```mermaid
flowchart TD
    A[进入 Whale Watch 页面] --> B[查看大额交易列表]
    B --> C[按交易金额排序]
    C --> D[发现异常大额持仓]
    D --> E[点击查看钱包详情]
    E --> F[分析该钱包历史行为]
    F --> G{是否有信息优势?}
    G -->|是| H[跟随其持仓方向]
    H --> I[跳转 Polymarket 下单]
    G -->|否| J[继续监控其他大户]
```

#### 2.0.4 Smart Money 聪明钱追踪流程

```mermaid
flowchart TD
    A[进入 Smart Tracker 页面] --> B[查看高胜率钱包列表]
    B --> C[按历史盈利率排序]
    C --> D[选择目标钱包]
    D --> E[查看当前持仓]
    E --> F[分析持仓市场和方向]
    F --> G{跟随?}
    G -->|是| H[手动在 Polymarket 建立相同仓位]
    G -->|否| I[加入观察列表 持续追踪]
```

#### 2.0.5 Geo Map 地理分布分析流程

```mermaid
flowchart TD
    A[进入 Geo Map 页面] --> B[查看全球交易者地理分布热力图]
    B --> C[点击感兴趣市场]
    C --> D[查看该市场的地域持仓分布]
    D --> E{发现地域集中押注?}
    E -->|某地区大量押 YES| F[分析该地区是否有信息优势]
    F --> G[考虑跟随该地区方向]
    G --> H[跳转 Polymarket 下单]
    E -->|分布均匀| I[无明显信号 继续观察]
```

#### 2.0.6 X Leaderboard 推特影响力分析

```mermaid
flowchart TD
    A[进入 X Leaderboard 页面] --> B[查看推特影响力排行]
    B --> C[关联链上钱包 和 X 账号]
    C --> D[查看 KOL 当前持仓]
    D --> E{该 KOL 是否有预测市场专长?}
    E -->|是| F[参考其持仓方向]
    F --> G[结合 Sus 数据综合判断]
    G --> H[跳转 Polymarket 下单]
    E -->|否| I[仅作参考 不盲目跟随]
```

#### 2.0.7 Ending Soon 即将到期市场流程

```mermaid
flowchart TD
    A[进入 Ending Soon 页面] --> B[按到期时间升序排列]
    B --> C[查看 24h 内到期市场]
    C --> D[查看当前价格]
    D --> E{价格是否明显偏离预期?}
    E -->|是 如 YES 仍 40% 但结果明显| F[快速建仓套利]
    F --> G[跳转 Polymarket 下单]
    F --> H[注意流动性风险]
    E -->|否| I[继续浏览其他即将到期市场]
```

### 2.1 完整用户旅程

```mermaid
journey
    title Polymarket Eye 用户完整体验旅程
    section 发现可疑市场
      访问 polymarketeye.com: 5: 用户
      自动跳转到 /fetcher 页面: 5: 系统
      浏览 Hot & Sus 可疑市场列表: 5: 用户
      查看 Sus Holders 数量: 4: 用户
      查看 New/Fresh/Overbet 标签: 4: 用户
      查看 AI Possible Outcome: 4: 用户
      决策下注: 5: 用户
    section 深度分析
      切换到 Whale Watch: 4: 用户
      追踪大户持仓变化: 4: 用户
      查看 Smart's Tracker: 4: 用户
      关注聪明钱动向: 4: 用户
    section 多维度工具
      查看 Geo Map 地理分布: 3: 用户
      查看 X Leaderboard: 3: 用户
      浏览 Ending Soon 即将到期: 4: 用户
      发现 Gain Traction 上涨市场: 4: 用户
```

### 2.2 Hot & Sus 可疑市场分析流程

```mermaid
flowchart TD
    A[进入 Hot & Sus 页面] --> B[系统扫描所有活跃市场]
    B --> C[为每个市场计算 Sus 指标]
    C --> D{Sus 标签类型}
    D --> D1[New 新进场持仓]
    D --> D2[Fresh 刚建仓]
    D --> D3[Overbet 超额下注]
    D1 --> E[显示 Yes/No Sus 持仓数量]
    D2 --> E
    D3 --> E
    E --> F[AI 预测 Possible Outcome]
    F --> G[用户查看分析]
    G --> H{判断是否有信息优势?}
    H -->|有| I[点击 BUY YES 或 BUY NO]
    H -->|无| J[继续观察]
    I --> K[跳转 Polymarket 下单]
```

### 2.3 实测可疑市场数据（2026-03-24）

| 市场 | 交易量 | Sus 持仓 | Possible Outcome | 特征 |
|------|--------|----------|-----------------|------|
| Will Jesus Christ return before GTA VI? | $10.1M | 13 Yes / 33 No sus | **No** | Fresh 25, Overbet 18 |
| Will bitcoin hit $1m before GTA VI? | $3.7M | 5 Yes / 13 No sus | **No** | New 2, Fresh 5, Overbet 11 |
| Russia-Ukraine Ceasefire before GTA VI? | $1.4M | 1 Yes / 5 No sus | **No** | Fresh 1, Overbet 2 |
| Will China invade Taiwan before GTA VI? | $1.5M | 1 Yes / 7 No sus | **No** | New 1, Fresh 2, Overbet 5 |
| New Playboi Carti Album before GTA VI? | $707k | 1 Yes / 1 No sus | **Yes** | Overbet 2 |

**规律观察**：Overbet 越多，Sus 倾向越明显；AI Possible Outcome 与 Sus 多空持仓方向高度一致。

### 2.4 Whale Watch 大户监控流程

```mermaid
flowchart TD
    A[进入 Whale Watch] --> B[系统索引大额交易]
    B --> C[按交易规模筛选]
    C --> D[显示大户钱包地址]
    D --> E[查看具体持仓市场]
    E --> F[追踪历史行为模式]
    F --> G{是否值得跟单?}
    G -->|是| H[手动在 Polymarket 复制]
    G -->|否| I[继续追踪]
```

---

## 3. 业务架构

```mermaid
graph TD
    A[交易者/研究者] --> B[Polymarket Eye]
    
    B --> C{分析模块}
    C --> C1[Whale Watch 大户监控]
    C --> C2[Smart Money 追踪]
    C --> C3[可疑持仓识别]
    C --> C4[地理分布分析]
    C --> C5[X 影响力排行]
    C --> C6[流动性分析]
    
    B --> D[数据来源]
    D --> D1[Polygon 链上数据]
    D --> D2[Polymarket API]
    D --> D3[X/Twitter API]
    
    B --> E[交易执行]
    E --> E1[BUY YES / BUY NO 按钮]
    E --> E2[Polymarket CLOB]
```

### 2.1 「Overbet」检测逻辑推断

```mermaid
flowchart TD
    A[获取市场所有持仓] --> B[计算每个地址的仓位占比]
    B --> C{判断标准}
    C --> D[仓位占比 > 市场流动性的X%?]
    D -->|是| E[标记为 Overbet]
    D -->|否| F[正常]
    E --> G[显示预测结果方向]
    G --> H[用户决策参考]
```

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 数据采集
        A1[Polygon 全量交易索引]
        A2[Polymarket Gamma API]
        A3[X API]
        A4[地理 IP 数据库]
    end
    
    subgraph 分析引擎
        B1[钱包行为分析]
        B2[异常检测算法]
        B3[影响力评分]
        B4[流动性计算]
    end
    
    subgraph 前端
        C1[实时 Dashboard]
        C2[市场卡片+标签]
        C3[交易执行按钮]
    end
    
    A1 --> B1
    A2 --> B4
    A3 --> B3
    A4 --> C1
    B1 --> B2
    B2 --> C2
    B3 --> C1
    B4 --> C2
    C3 --> A2
```

---

## 4. 核心功能与技术壁垒

### 4.1 链上数据积累壁垒
- 需要索引 Polymarket 所有历史交易（链上数据量大）
- 「Overbet」等异常检测需要统计基准，历史数据越多越准
- 地理分布分析需要 IP/地理数据库持续维护

### 4.2 信息优势工具
- Whale Watch + Smart Money + Sus 检测 = 完整的「链上侦探工具集」
- 对研究型交易者价值极高
- X Leaderboard 整合链上+链下（社媒）数据，独特

### 4.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 链上数据积累 | 8 | 历史索引数据是核心资产 |
| 异常检测算法 | 7 | Sus/Overbet 检测逻辑有壁垒 |
| 多源数据整合 | 8 | 链上+X+地理 三源整合 |
| 用户独特性 | 7 | 研究型交易者是高价值用户 |

---

## 5. 商业模式

```mermaid
pie title Polymarket Eye 收入来源推测
    "Builder Fee 分成" : 45
    "Premium 数据订阅" : 40
    "API 数据服务" : 15
```

### 5.1 收入测算
- 当前：$1.94M × 0.5% ≈ **$9.7k/月** Builder Fee
- Premium 订阅（高级分析功能）可能是主要收入
- 链上数据 API 对机构有价值

---

## 6. 待确认问题

- [ ] 「Overbet」的具体判断标准和阈值？
- [ ] Geo Map 的数据来源（IP 归属 or 链上交易所关联）？
- [ ] X Leaderboard 如何关联链上钱包和 X 账号？
- [ ] Smart's Tracker 和 PolyCop/Polygun 的聪明钱有何不同？
- [ ] 是否有 Premium 订阅？定价？
- [ ] 数据 API 是否对外开放？
- [ ] 团队背景？

---

## 7. 总结

Polymarket Eye 是 Builder 生态中**数据分析工具的标杆**：
1. **功能最全面的链上分析平台**：10+ 分析模块
2. **Sus/Overbet 检测**是独特的市场操纵预警功能
3. **多源数据整合**（链上+X+地理）提供全方位市场视角
4. 月交易量 $1.94M（#23），体量适中，有增长空间
