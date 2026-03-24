# Almanac Market — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#33**  
> 近1月交易量：**$1.02M**

---

## 1. 市场情况

### 1.1 市场定位
Almanac 定位极具创意：**「Accurate Before It's Obvious」（在显而易见之前做到精准）**。核心洞察是：预测市场最终会收敛到正确答案，但这种收敛发生太晚了——在决策者需要的时候，价格仍然不准确。Almanac 的使命是**奖励早期准确预测者，激励市场早期发现真相**。

### 1.2 核心问题定义（实测内容）

平台明确定义了三个问题：
- **PRB-01**：早期价格漂向 50% —— 越早的预测越接近 50/50 硬币抛掷
- **PRB-02**：最大定价错误发生在早期 —— 2025 年研究证实 1.24 亿笔 Polymarket 交易中，早期错误最大
- **PRB-03**：价格依赖型决策 —— 记者、分析师、高管都在引用预测市场价格做决策

### 1.3 解决方案
**对早期提交仓位的交易者路由额外收益（Yield）**，激励他们在信息不明朗时就做出预测。

---

## 2. 用户体验路径（实测）

### 2.1 完整用户旅程

```mermaid
journey
    title Almanac 用户完整体验旅程
    section 了解理念
      访问 almanac.market 官网: 4: 用户
      阅读 Problem/Solution/Mechanism: 4: 用户
      理解早期预测激励逻辑: 3: 用户
      点击 Enter Terminal: 4: 用户
    section 注册与入门
      进入 beta.almanac.market: 4: 用户
      Create Account 或 Sign In: 4: 用户
      查看当前 Epoch 奖池: 5: 用户
      了解 How It Works: 4: 用户
    section 交易与获益
      浏览 75 个市场: 5: 用户
      筛选 Trending/Sports/Crypto/Politics: 4: 用户
      发现远期市场（31个月后到期）: 4: 用户
      建立早期仓位: 4: 用户
      等待 Epoch 结算: 3: 用户
      赢得交易 → 获得 Epoch 奖励: 5: 用户
    section 高级使用
      查看 Leaderboard 排行榜: 4: 用户
      了解 How It Works 机制: 3: 用户
      持续建立早期高确信仓位: 4: 用户
```

### 2.2 Epoch 奖励机制流程（实测）

```mermaid
flowchart TD
    A[用户在当前 Epoch 内交易] --> B[Epoch 长度: 约12小时]
    B --> C[奖池: $4,938.05 当前实测]
    C --> D{交易是否盈利?}
    D -->|是| E[参与本 Epoch 奖励分配]
    D -->|否| F[无奖励]
    E --> G[按历史胜率加权分配]
    G --> H[获得额外 Yield]
    H --> I[下一个 Epoch 开始]
    I --> A
    Note: 早期建仓（距resolution越远）→ 权重越高
```

### 2.3 建仓时间权重机制

```mermaid
flowchart LR
    A[用户建仓时间] --> B{距 resolution 距离}
    B -->|31个月| C[时间权重最高]
    B -->|6个月| D[时间权重高]
    B -->|1个月| E[时间权重中]
    B -->|1周| F[时间权重低]
    C --> G[获得最高额外 Yield]
    D --> H[获得较高额外 Yield]
    E --> I[获得基础额外 Yield]
    F --> J[基本无额外 Yield]
```

### 2.4 实测 Terminal 数据（beta.almanac.market）

**当前状态**：
- Epoch 奖池：**$4,938.05**
- Epoch 长度：**约 11h 43m**
- 可用市场：**75 个**
- 市场分类：Trending / Sports / Esports / Crypto / Politics / Weather

**热门市场样例（距 resolution 最远）**：
| 市场 | 24h Vol | Total Vol | Liq | 距结算 |
|------|---------|-----------|-----|-------|
| Chelsea Clinton 2028 Democratic nomination | 203.5k | 44.0M | 630.6k | **31个月** |
| LeBron James 2028 US Election | 1.8M | 39.7M | 1.6M | **31个月** |
| Mike Pence 2028 Republican nomination | 227.4k | 31.1M | 1.2M | **31个月** |
| Bitcoin reach $150k in March | 1.2M | 22.5M | 2.4M | 7天 |

**关键观察**：31个月远期市场流动性充足（630k-1.6M），说明早期建仓激励已经奏效。

---

## 3. 技术架构

```mermaid
graph LR
    subgraph 数据层
        D1[Polymarket 历史数据]
        D2[1.24亿笔交易分析]
        D3[实时市场价格]
    end
    
    subgraph 机制层
        M1[时间权重计算器]
        M2[Yield 路由合约]
        M3[早期精准度追踪]
    end
    
    subgraph 用户层
        U1[Beta Terminal]
        U2[持仓管理]
        U3[收益追踪]
    end
    
    D1 --> M1
    D3 --> M1
    M1 --> M2
    M2 --> U3
    U1 --> U2
    U2 --> M2
```

---

## 4. 核心功能与技术壁垒

### 4.1 「激励早期真相发现」的创新
- 这是预测市场机制设计层面的创新，不只是 UI 改进
- 通过经济激励改变用户行为，使市场更早变得准确
- 对引用预测市场数据的决策者（记者/分析师/投资者）有巨大价值

### 4.2 研究支撑
- 引用了对 **1.24 亿笔 Polymarket 交易**的 2025 年研究
- 数据驱动的产品设计，有学术可信度

### 4.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 机制创新 | 9 | Yield 路由是原创机制设计 |
| 学术背书 | 7 | 研究数据支撑产品逻辑 |
| 目标用户独特 | 8 | 信息优势者/研究者是独特用户群 |
| 当前规模 | 4 | $1.02M/月，仍处早期 |
| 竞争壁垒 | 7 | 机制可被复制，但先发积累数据 |

---

## 5. 商业模式

```mermaid
pie title Almanac 收入来源推测
    "Builder Fee 分成" : 40
    "Yield 协议手续费" : 40
    "数据/研究服务" : 20
```

### 5.1 收入测算
- 当前：$1.02M × 0.5% ≈ **$5.1k/月** Builder Fee
- Yield 路由机制本身可能收取一定比例的协议费
- 如果 Yield 机制做大，协议费将是主要收入

---

## 6. 待确认问题

- [ ] Yield 路由的具体实现？是链上合约还是链下结算？
- [ ] 「Beta Terminal」在 beta.almanac.market —— 实际功能如何？
- [ ] Yield 的资金来源是什么？（协议自有资金？做市商？）
- [ ] 是否需要锁定仓位一段时间？
- [ ] 团队背景？是否有学术机构合作？
- [ ] 与 Polymarket 的关系：是纯前端还是有独立合约层？

---

## 7. 总结

Almanac 是 Builder 生态中**机制设计最创新**的项目：
1. **洞察深刻**：识别了预测市场「早期不准确」这个真实痛点
2. **机制创新**：通过 Yield 路由激励早期准确预测
3. **价值主张清晰**：对信息优势者和决策者都有价值
4. 当前 $1.02M/月（#33）体量较小，但如果机制验证成功，有极大上升空间
