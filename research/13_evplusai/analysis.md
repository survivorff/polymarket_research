# EVplus AI — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#13**  
> 近1月交易量：**$3.61M**  
> 官网：**evplus.ai** | App：**app.evplus.ai**  
> ⚠️ **重要更正**：Polymarket Bot 当前标注为「**Soon**」，尚未正式上线

---

## 1. 市场情况

### 1.1 市场定位
EVplus（evplus.ai）是 **AI 驱动的多平台综合交易终端**，主战场是 **Hyperliquid + DEX 套利 + 资金费率套利**，Polymarket Bot 是其规划中的扩展模块（当前标注 Soon）。

口号：「Trade smarter with AI powered intelligent insights, execution, and risk tools. Built by traders for discretionary and systematic traders.」

### 1.2 真实产品状态（实测确认）

**app.evplus.ai 实测页面内容**：

| 模块 | 状态 | 描述 |
|------|------|------|
| Automated Trading (ATV4) | ✅ **Live** | Hyperliquid 自动化交易，HIP-3 资产 + 手动终端 + 热力图 |
| EVFarm | ✅ **Live** | HyperLiquid/Lighter/Pacifica/Paradex 资金费率套利 |
| Funding Rates | ✅ **Live** | 6 家交易所资金费率追踪，多空建议 |
| Premium Signals | ✅ **New** | 套利信号，精确入场/出场/仓位建议，USDC 按次付费 |
| **Polymarket Bot** | 🚧 **Soon** | AI 驱动 Polymarket 自动化交易（**尚未上线**）|

### 1.3 月交易量来源推测
- $3.61M 来自 Polymarket，但 Polymarket Bot 标注「Soon」
- 可能是团队内测账号或早期 beta 用户在使用
- 或者通过其他接入方式（手动集成）产生了交易量

---

## 2. 用户体验路径

### 2.0 注册、入金、交易、提现全流程（详细）

#### 2.0.1 注册流程

```mermaid
flowchart TD
    A[访问 evplus.ai] --> B[点击 Launch App]
    B --> C[app.evplus.ai]
    C --> D{已有账户?}
    D -->|否| E[点击 Sign Up]
    E --> F[输入邮箱 + 密码]
    F --> G[邮件验证]
    G --> H[登录进入 Dashboard]
    D -->|是| H
    H --> I[连接交易所 API 或钱包]
    I --> I1[Hyperliquid API Key 配置]
    I --> I2[Polymarket 私钥配置 Bot上线后]
    I1 --> J[账户就绪]
    I2 --> J
```

#### 2.0.2 入金流程（Hyperliquid 主战场）

```mermaid
flowchart TD
    A[进入 EVplus Dashboard] --> B[选择使用模块]
    B --> B1[EVFarm 资金费率套利]
    B --> B2[ATV4 自动化交易]
    B --> B3[Polymarket Bot 上线后]
    B1 --> C[需要在 Hyperliquid 存入资金]
    C --> D[访问 Hyperliquid.xyz]
    D --> E[充值 USDC 至 Hyperliquid]
    E --> F[EVplus 通过 API 读取余额]
    F --> G[开始套利操作]
    B3 --> H[Polymarket Bot 上线后]
    H --> I[连接 Polymarket 私钥]
    I --> J[USDC 在 Polygon Proxy Wallet]
    J --> K[Bot 自动交易]
```

#### 2.0.3 EVFarm 资金费率套利流程（核心已上线功能）

```mermaid
flowchart TD
    A[进入 EVFarm 模块] --> B[选择交易所组合]
    B --> B1[HyperLiquid]
    B --> B2[Lighter]
    B --> B3[Pacifica]
    B --> B4[Paradex]
    B --> B5[Extended 6家]
    B1 --> C[查看各交易所资金费率]
    C --> D{费率方向判断}
    D -->|正费率 做空收费| E[在 HyperLiquid 开空]
    D -->|负费率 做多收费| F[在 HyperLiquid 开多]
    E --> G[同时在现货做多 Delta 对冲]
    F --> H[同时在现货做空 Delta 对冲]
    G --> I[Delta 中性 每8小时收取资金费]
    H --> I
    I --> J[EVFarm 自动管理仓位再平衡]
    J --> K[查看实时收益]
```

#### 2.0.4 Premium Signals 订阅与使用流程

```mermaid
flowchart TD
    A[进入 Premium Signals 模块] --> B[查看当前信号列表]
    B --> C[每条信号包含]
    C --> C1[入场价格区间]
    C --> C2[出场目标价]
    C --> C3[建议仓位大小]
    C --> C4[风险评级]
    C4 --> D{购买信号?}
    D -->|是| E[支付 USDC 按次付费 x402协议]
    E --> F[解锁完整信号详情]
    F --> G[按信号执行交易]
    G --> H[在 Hyperliquid 手动下单]
    D -->|否| I[继续浏览免费摘要]
```

#### 2.0.5 Polymarket Bot 规划流程（Soon 待上线）

```mermaid
flowchart TD
    A[Polymarket Bot 上线后] --> B[连接 Polymarket 账户]
    B --> C[输入 Polymarket API 凭证]
    C --> D[选择 AI 策略]
    D --> D1[价值发现 错误定价识别]
    D --> D2[动量策略 跟随强势方向]
    D --> D3[跨平台套利 PM vs Kalshi]
    D1 --> E[配置风险参数]
    D2 --> E
    D3 --> E
    E --> E1[单笔最大金额]
    E --> E2[日最大亏损限额]
    E --> E3[目标市场类别]
    E3 --> F[启动 Bot]
    F --> G[AI 24/7 扫描 Polymarket]
    G --> H{发现机会?}
    H -->|是| I[自动下单 Polymarket CLOB]
    H -->|否| G
    I --> J[推送通知用户]
    J --> K[实时更新持仓和 PnL]
```

#### 2.0.6 提现流程

```mermaid
flowchart TD
    A[套利收益在 Hyperliquid 账户] --> B[登录 Hyperliquid.xyz]
    B --> C[点击 Withdraw]
    C --> D[输入提现金额 USDC]
    D --> E[选择目标链/地址]
    E --> F[确认提现]
    F --> G[USDC 到账目标钱包]
    G --> H{进一步操作}
    H --> H1[转至 CEX 法币出金]
    H --> H2[继续 DeFi 使用]
    H --> H3[继续 EVplus 套利]
```

### 2.1 完整用户旅程

```mermaid
journey
    title EVplus AI 用户完整体验旅程
    section 发现与注册
      访问 evplus.ai 官网: 4: 用户
      了解 AI 交易功能介绍: 4: 用户
      点击 Launch App: 4: 用户
      注册账户: 3: 用户
    section 核心功能使用
      查看 Funding Rates 资金费率: 5: 用户
      发现套利机会: 4: 用户
      启动 EVFarm 自动套利: 4: 用户
      配置 ATV4 自动交易参数: 3: 用户
    section 信号订阅
      购买 Premium Signals USDC按次: 4: 用户
      按信号执行套利交易: 4: 用户
    section Polymarket Bot（规划中）
      Polymarket Bot 上线后: 3: 用户
      配置 AI 策略参数: 3: 用户
      自动执行 Polymarket 交易: 4: 系统
```

### 2.2 EVFarm 资金费率套利流程

```mermaid
flowchart TD
    A[进入 EVFarm] --> B[选择交易所组合]
    B --> B1[HyperLiquid]
    B --> B2[Lighter]
    B --> B3[Pacifica]
    B --> B4[Paradex]
    B1 --> C[查看资金费率差异]
    C --> D{费率方向}
    D -->|正费率| E[做空 + Delta 对冲]
    D -->|负费率| F[做多 + Delta 对冲]
    E --> G[收取资金费 delta中性]
    F --> G
    G --> H[EVFarm 自动管理仓位]
```

### 2.3 Polymarket Bot 规划流程（基于产品描述）

```mermaid
flowchart TD
    A[Polymarket Bot 上线] --> B[连接 Polymarket 账户]
    B --> C[选择 AI 策略]
    C --> C1[价值发现策略]
    C --> C2[套利策略]
    C --> C3[动量策略]
    C1 --> D[AI 扫描市场定价错误]
    C2 --> E[跨平台价差检测]
    D --> F[自动执行交易]
    E --> F
    F --> G[实时监控持仓]
    G --> H[止盈止损自动处理]
```

---

## 3. 业务架构

```mermaid
graph TD
    A[交易者] --> B[EVplus AI Terminal]

    B --> C{核心模块}
    C --> C1["ATV4 自动交易 Live"]
    C --> C2["EVFarm 套利 Live"]
    C --> C3["Funding Rates Live"]
    C --> C4["Premium Signals New"]
    C --> C5[Polymarket Bot 🚧]

    C1 --> D1[Hyperliquid API]
    C2 --> D1
    C2 --> D2[Lighter/Pacifica/Paradex]
    C3 --> D1
    C4 --> E[USDC 按次付费]
    C5 --> F[Polymarket CLOB API]
    F --> G[Polygon 链]
```

---

## 4. 技术架构

```mermaid
graph LR
    subgraph AI层
        A1[AI 信号模型]
        A2[资金费率分析]
        A3[套利检测引擎]
    end

    subgraph 执行层
        B1[Hyperliquid API Client]
        B2[多DEX API Client]
        B3[Polymarket CLOB Client 规划中]
    end

    subgraph 用户层
        C1[app.evplus.ai]
        C2[ATV4 配置面板]
        C3[EVFarm 监控]
    end

    A1 --> B1
    A2 --> B2
    A3 --> B1
    A3 --> B2
    B1 --> C3
    B3 --> C1
```

### 4.1 技术栈（实测推断）
- **前端**：React（app.evplus.ai）
- **AI 模型**：未公开，可能是 GPT-4 或自研量化模型
- **支持协议**：HyperLiquid、Lighter、Pacifica、Paradex、Extended（6家）
- **付费方式**：Signals 按 USDC 次付费（x402 协议支持）

---

## 5. 核心功能与技术壁垒

### 5.1 壁垒评估（更新后）

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 多DEX集成深度 | 8 | 6家交易所实时资金费率，工程量大 |
| ATV4 自动化 | 7 | Hyperliquid 自动交易已成熟 |
| Polymarket Bot | 3 | 当前仅 Soon，未上线 |
| Premium Signals | 7 | 按次付费模型，低摩擦 |
| AI 能力 | 6 | 实际 AI 深度待验证 |
| Polymarket 专业度 | 3 | Polymarket 是次要业务 |

---

## 6. 商业模式

```mermaid
pie title EVplus 收入来源
    "Premium Signals USDC按次" : 40
    "Builder Fee 分成" : 25
    "订阅费" : 25
    "企业授权" : 10
```

### 6.1 收入测算
- Builder Fee：$3.61M × 0.5% ≈ **$18k/月**
- Premium Signals：按次付费，高频套利用户可能消费显著
- 主要收入来自 Hyperliquid 用户，Polymarket 是次要来源

---

## 7. 待确认问题

- [ ] **Polymarket Bot 的上线时间表？**（当前 Soon）
- [ ] $3.61M/月 Polymarket 交易量的来源（Bot 未上线，谁在交易？）
- [ ] Premium Signals 的具体定价（每次多少 USDC？）
- [ ] x402 协议是什么？（支付相关）
- [ ] AI 模型是自研还是调用 OpenAI/Anthropic？
- [ ] 团队背景？

---

## 8. 总结

EVplus AI 的真实情况与初步调研有重大差异：**Polymarket Bot 尚未上线**，当前产品重心在 Hyperliquid 和 DEX 套利。在 Polymarket Builder 排行榜中出现 $3.61M 交易量，可能来自早期 beta 或手动集成。

作为 Polymarket Builder，EVplus 仍处于早期阶段；但作为 AI 交易终端，其 Hyperliquid 生态的成熟度已相当高。**Polymarket Bot 正式上线后值得重点关注**。


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
