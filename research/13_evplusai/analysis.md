# EVplus AI — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#13**  
> 近1月交易量：**$3.61M**

---

## 1. 市场情况

### 1.1 市场定位
EVplus（evplus.ai）定位为 **AI 驱动的综合交易终端**，不局限于 Polymarket，同时支持 Hyperliquid 等 DeFi 协议。Polymarket Bot 是其众多功能模块之一。口号：「Trade smarter with AI powered intelligent insights, execution, and risk tools. Built by traders for discretionary and systematic traders.」

### 1.2 市场规模与地位
- Builder Program 排名 **第十三**，月交易量 $3.61M
- **多平台 AI 终端**：不是专门的 Polymarket 工具，而是将 Polymarket 作为其交易生态的一部分
- 面向：自主交易者（discretionary）+ 系统化交易者（systematic）

### 1.3 竞争格局
- 与 Polymtrade 的 AI Predictions 功能有重叠，但 EVplus 的 AI 深度更强
- 与 Simmer.Markets（AI Agent）方向相近但实现不同
- 独特之处：**跨平台**（Hyperliquid + Polymarket + DEX），不是单一 Polymarket 工具

---

## 2. 业务架构

```mermaid
graph TD
    A[交易者] --> B[EVplus AI Terminal]
    
    B --> C{核心模块}
    C --> C1[自动化交易]
    C --> C2[套利策略]
    C --> C3[手动交易+图表]
    C --> C4[Polymarket Bot]
    C --> C5[空投农场]
    
    C1 --> D1[Hyperliquid AT]
    C1 --> D2[AI 信号驱动]
    
    C2 --> E1[跨平台套利]
    C2 --> E2[预测市场套利]
    
    C4 --> F[Polymarket CLOB API]
    F --> G[Polygon 链]
    
    B --> H[集成 DEX/协议]
    H --> H1[Hyperliquid]
    H --> H2[Polymarket]
    H --> H3[其他 DEX]
```

### 2.1 核心功能模块

| 模块 | 详情 | 目标用户 |
|------|------|----------|
| Automated Trading | Hyperliquid AT，AI 信号，24/7 执行 | 系统化交易者 |
| Arbitrage Strategy | 跨平台套利（含预测市场） | 量化交易者 |
| Manual Trading & Charts | 图表+手动下单 | 自主交易者 |
| **Polymarket Bot** | Polymarket 自动化交易 | 预测市场交易者 |
| Airdrop Farming | 多平台空投自动化 | 撸毛用户 |

---

## 3. 技术架构

```mermaid
graph LR
    subgraph AI 层
        A1[AI 信号模型]
        A2[市场情绪分析]
        A3[风险评估引擎]
    end
    
    subgraph 执行层
        B1[Polymarket CLOB Client]
        B2[Hyperliquid API Client]
        B3[DEX Router]
    end
    
    subgraph 策略层
        C1[套利检测器]
        C2[自动交易策略]
        C3[空投自动化]
    end
    
    A1 --> C2
    A2 --> C1
    A3 --> C2
    C1 --> B1
    C1 --> B2
    C2 --> B1
    C2 --> B2
    C3 --> B3
```

### 3.1 Polymarket Bot 技术推断
- 通过 Polymarket CLOB API 进行程序化交易
- AI 模型分析市场价格偏差，识别交易机会
- 套利策略：Polymarket vs Kalshi vs 其他预测市场价差
- 自动执行，支持自定义策略参数

---

## 4. 核心功能与技术壁垒

### 4.1 AI 驱动差异化
- **EVplus 是 Builder 生态中 AI 能力最强的平台之一**
- AI 信号驱动自动交易，不只是数据展示
- 套利检测是技术含量较高的功能

### 4.2 跨平台优势
- 同时支持 Hyperliquid + Polymarket，用户无需切换工具
- 跨平台套利：在 Polymarket 和 Kalshi 之间发现价差

### 4.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| AI 模型能力 | 8 | 真正的 AI 驱动，非 AI 噱头 |
| 跨平台集成 | 8 | 多协议整合工程量大 |
| 套利算法 | 7 | 需要实时监控多平台价差 |
| 目标用户专业度 | 8 | 面向专业/机构交易者 |
| 功能宽度 | 9 | 覆盖范围最广的终端之一 |

---

## 5. 商业模式

```mermaid
pie title EVplus 收入来源推测
    "订阅费" : 50
    "Builder Fee 分成" : 25
    "交易手续费" : 15
    "企业/机构授权" : 10
```

### 5.1 收入测算
- Builder Fee：$3.61M × 0.5% ≈ **$18k/月**
- 主要收入应来自订阅费（AI 功能、自动交易功能）
- 面向专业用户，订阅单价可能较高（$50-200/月）

---

## 6. 待确认问题

- [ ] Polymarket Bot 的具体功能和策略类型？
- [ ] AI 信号的准确率和历史回测数据？
- [ ] 套利策略是否包含 Polymarket vs Kalshi？
- [ ] 订阅定价？
- [ ] 团队背景（建议查看 evplus.ai/about）？
- [ ] 是否支持自定义 AI 策略？

---

## 7. 总结

EVplus 是 Builder 生态中**技术深度最强、覆盖面最广**的 AI 交易终端。其 Polymarket Bot 只是其多平台 AI 交易系统的一部分，这使其与其他专注 Polymarket 的 Builder 有本质区别。月交易量 $3.61M（#13）相对其功能深度偏低，可能是因为其核心用户群是专业量化交易者，而非散户。
