# Simmer Markets — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#19**  
> 近1月交易量：**$2.66M**  
> 官网：**simmer.markets** | Docs：**docs.simmer.markets**

---

## 1. 市场情况

### 1.1 市场定位（实测确认）
Simmer 是「**Prediction Markets for the Agent Economy**」—— 面向 AI Agent 的预测市场基础设施。核心口号：

> Where AI agents trade Polymarket, Kalshi and compete for profit. Humans welcome to observe.

**支持平台**：同时接入 **Polymarket** 和 **Kalshi**（不只是 Polymarket）。

**GitHub**：`SpartanLabsXyz/simmer-sdk`（37 stars）

### 1.2 关键产品特性（实测）

| 特性 | 详情 |
|------|------|
| **自托管钱包** | 私钥在本地签名，永不离开用户设备 |
| **安全护栏** | 单笔限额、日额度上限、止损/止盈、急停开关 |
| **智能上下文** | 询问「我该交易这个吗？」获得仓位感知建议 |
| **多场馆** | 虚拟 $SIM 纸面交易 → 真实 USDC (Polymarket) / USD (Kalshi) |
| **Skills 生态** | ClawHub 上的预构建策略，可安装和发布 |
| **Python SDK** | `pip install simmer-mcp`，5分钟接入 |
| **MCP 工具** | 支持 AI Agent 通过 MCP 协议调用 |

### 1.3 Season 1 机制
- **状态**：OPERATIONAL
- **$SIM**：虚拟代币，新注册 Agent 获得 10,000 $SIM 起始余额
- **Leaderboard**：Agent 竞争排行榜
- **Claim 机制**：Agent 注册后发送 claim link 给人类操作者解锁真实资金交易

---

## 2. 用户体验路径（实测）

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册流程（AI Agent 开发者）

```mermaid
flowchart TD
    A[访问 simmer.markets] --> B[点击 Get Started]
    B --> C{用户身份}
    C -->|AI Agent 开发者| D[运行 curl simmer.markets/skill.md]
    C -->|人类观察者| E[访问 simmer.markets/start]
    D --> F[获取 SDK 文档]
    F --> G[pip install simmer-mcp]
    G --> H[POST /api/sdk/agents/register]
    H --> I[获得 API Key]
    I --> J[获得 10000 SIM 虚拟起始余额]
    J --> K[发送 claim link 给人类操作者]
    E --> L[浏览 Agent Leaderboard]
    L --> M[了解 Season 1 机制]
    M --> N[前往 openclaw.ai 创建 Agent]
```

#### 2.0.2 入金流程（解锁真实资金交易）

```mermaid
flowchart TD
    A[Agent 注册完成 持有 10000 SIM] --> B[Agent 发送 claim link 给人类]
    B --> C[人类点击 claim link]
    C --> D[跳转 Simmer 平台]
    D --> E[登录/注册人类账户]
    E --> F[关联 Polymarket 账户]
    F --> G{入金方式}
    G --> G1[Polymarket 官网入金 USDC on Polygon]
    G --> G2[信用卡 on-ramp via Polymarket]
    G1 --> H[USDC 到账 Proxy Wallet]
    G2 --> H
    H --> I[解锁真实 USDC 交易模式]
    I --> J[Agent 可用真实 USDC 交易 Polymarket/Kalshi]
```

#### 2.0.3 Skills 安装与配置流程

```mermaid
flowchart TD
    A[进入 ClawHub Skills 市场] --> B[浏览可用策略]
    B --> B1[Weather Trader 气象数据]
    B --> B2[Signal Sniper RSS新闻]
    B --> B3[Copytrading 鲸鱼跟单]
    B --> B4[Fast Loop BTC动量]
    B --> B5[Elon Tweet Trader 推文]
    B --> B6[AI Divergence 共识偏差]
    B1 --> C[选择安装 Skill]
    C --> D[配置策略参数]
    D --> D1[设置最大单笔金额]
    D --> D2[设置日亏损上限]
    D --> D3[设置目标市场类别]
    D3 --> E[Safety Rails 验证参数]
    E --> F[Skill 激活]
    F --> G[Agent 开始自主执行策略]
```

#### 2.0.4 Agent 自主交易流程

```mermaid
flowchart TD
    A[Agent 运行中] --> B[GET /api/sdk/markets 获取市场列表]
    B --> C[GET /briefing 获取 AI 精选简报]
    C --> D[Skill 策略分析]
    D --> E{发现交易机会?}
    E -->|是| F[Safety Rails 检查]
    F --> F1{通过护栏?}
    F1 -->|单笔未超限| G[提交交易 含推理过程]
    F1 -->|超过限额| H[拒绝 记录原因]
    G --> I{交易场馆}
    I --> I1[Polymarket CLOB]
    I --> I2[Kalshi API]
    I1 --> J[Polygon 链上成交]
    I2 --> K[Kalshi 成交]
    J --> L[Dashboard 更新持仓]
    K --> L
    E -->|否| M[继续监控]
    M --> A
```

#### 2.0.5 虚拟 SIM 到真实 USDC 升级流程

```mermaid
flowchart TD
    A[新 Agent 持有 10000 SIM] --> B[在虚拟环境中测试策略]
    B --> C[Leaderboard 追踪 SIM 排名]
    C --> D{策略表现良好?}
    D -->|是| E[人类操作者 Claim Agent]
    D -->|否| F[调整策略继续测试]
    E --> G[充值真实 USDC]
    G --> H[切换到真实资金模式]
    H --> I[Agent 用真实 USDC 在 Polymarket/Kalshi 交易]
```

#### 2.0.6 提现流程

```mermaid
flowchart TD
    A[交易盈利 USDC 在 Proxy Wallet] --> B[人类操作者登录 Simmer]
    B --> C[暂停 Agent 交易]
    C --> D[通过 Polymarket 官网提现]
    D --> E[Withdraw 至 Polygon 地址]
    E --> F[USDC 到账]
    F --> G[可转至 CEX 法币出金]
```

#### 2.0.7 Season 结算与奖励领取

```mermaid
flowchart TD
    A[Season 1 进行中] --> B[Agent 在 Leaderboard 排名]
    B --> C[Season 结束]
    C --> D[统计各 Agent 最终 PnL 排名]
    D --> E{排名奖励}
    E -->|Top 排名| F[获得 Season 奖励]
    F --> G[奖励发放至关联钱包]
    E -->|未获奖| H[经验积累 下一 Season 继续]
```

### 2.1 AI Agent 快速接入流程

```mermaid
sequenceDiagram
    participant Dev as 开发者/AI Agent
    participant Simmer as Simmer API
    participant Human as 人类操作者
    participant PM as Polymarket/Kalshi

    Dev->>Simmer: POST /api/sdk/agents/register
    Simmer-->>Dev: API key + 10,000 $SIM
    Dev->>Human: 发送 claim link
    Human->>Simmer: 点击 claim，解锁真实资金
    Dev->>Simmer: GET /api/sdk/markets 浏览市场
    Simmer-->>Dev: 市场列表 + AI 简报
    Dev->>Simmer: 提交交易（含推理过程）
    Simmer->>PM: 执行订单
    PM-->>Simmer: 成交回执
    Simmer-->>Dev: 更新持仓
```

### 2.2 人类用户使用流程

```mermaid
journey
    title Simmer 人类用户体验旅程
    section 入门
      访问 simmer.markets/start: 4: 用户
      选择 Im a Human: 4: 用户
      了解 Agent Economy 概念: 3: 用户
      观察 AI Agent 交易: 4: 用户
    section 创建 Agent
      前往 openclaw.ai 创建 Agent: 3: 用户
      运行 curl simmer.markets/skill.md: 3: 用户
      获得 10000 SIM 起始余额: 4: 用户
      Claim Agent 解锁真实资金: 4: 用户
    section Skills 配置
      进入 Skills/ClawHub: 4: 用户
      安装预构建策略: 4: 用户
      自定义策略参数: 3: 用户
      Agent 开始自主交易: 5: 系统
    section 监控
      查看 Dashboard: 4: 用户
      追踪 Agent 交易表现: 4: 用户
      查看 Leaderboard 排名: 4: 用户
```

### 2.3 ClawHub Skills 生态（实测完整列表）

```mermaid
graph TD
    A[ClawHub Skills 市场] --> B[气象类]
    A --> C[跟单类]
    A --> D[信号类]
    A --> E[数据分析类]
    A --> F[AI 套利类]
    A --> G[动量类]
    A --> H[社媒类]

    B --> B1["Weather Trader 气象数据自动交易"]
    C --> C1[Copytrading 大户钱包信号聚合跟单]
    D --> D1[Signal Sniper RSS突发新闻交易]
    E --> E1[Trade Journal 自动记录月度校准]
    F --> F1[AI Divergence Simmer共识vs市场价差]
    G --> G1["Mert Sniper 近到期市场抢单"]
    G --> G2[Fast Loop BTC动量套利]
    H --> H1[Elon Tweet Trader XTracker推文数据]
```

**Skills 安装命令**：
```bash
# 获取 Skills 文档
curl -sL https://simmer.markets/skill.md

# 安装 Python SDK
pip install simmer-mcp
```

### 2.4 Skills 工作流程

```mermaid
flowchart TD
    A[Agent 安装 Skill] --> B[配置参数]
    B --> C{Skill 类型}
    C --> |Weather Trader| D[抓取 NOAA 气象数据]
    C --> |Signal Sniper| E[监控 RSS Feed]
    C --> |Copytrading| F[监控鲸鱼钱包]
    C --> |Fast Loop| G[抓取 Binance 动量]
    D --> H[比对气温预测 vs 市场价格]
    E --> I[解析新闻事件]
    F --> J[聚合多钱包信号]
    G --> K[检测动量 vs 市场偏差]
    H --> L[发现交易机会]
    I --> L
    J --> L
    K --> L
    L --> M[Simmer Safety Rails 检查]
    M --> N{通过护栏?}
    N --> |是| O[执行交易 Polymarket/Kalshi]
    N --> |否| P[拒绝，记录原因]
    O --> Q[更新 Dashboard]
    P --> Q
```

---

## 3. 技术架构

```mermaid
graph LR
    subgraph Agent 层
        A1[Python AI Agent]
        A2[LLM OpenAI/Claude]
        A3[simmer-sdk / MCP]
    end

    subgraph Simmer 平台
        B1[REST API]
        B2[Safety Rails 引擎]
        B3[Smart Context 引擎]
        B4[ClawHub Skills 注册表]
        B5[虚拟 SIM 环境]
    end

    subgraph 交易场馆
        C1[Polymarket CLOB]
        C2[Kalshi API]
        C3[Polygon 链]
    end

    subgraph 数据源
        D1[NOAA 气象 API]
        D2[RSS Feed]
        D3[XTracker 推文数据]
        D4[Binance 价格数据]
        D5[链上鲸鱼监控]
    end

    A1 --> A3
    A2 --> A1
    A3 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> C1
    B3 --> C2
    B4 --> A1
    D1 --> B4
    D2 --> B4
    D3 --> B4
    D4 --> B4
    D5 --> B4
    C1 --> C3
```

### 3.1 API 端点（文档确认）

```
POST /api/sdk/agents/register   → 注册 Agent，获取 API key + 10,000 $SIM
GET  /api/sdk/markets           → 浏览市场列表
GET  /briefing                  → AI 精选市场简报
```

### 3.2 自托管钱包机制
```mermaid
flowchart LR
    A[Agent 本地私钥] --> B[本地签名]
    B --> C[签名后交易] --> D[Simmer API]
    D --> E[Polymarket/Kalshi]
    Note: 私钥永不上传到 Simmer 服务器
```

---

## 4. 核心功能与技术壁垒

### 4.1 ClawHub 平台效应
- Skills 市场形成**双边平台**：Strategy 开发者 ↔ Agent 用户
- Skills 可「remix」（基于已有 Skill 修改），降低创建门槛
- 开发者发布 Skill → Agent 安装 → Simmer 抽成
- **壁垒**：Skills 生态一旦丰富，难以被单一竞争者复制

### 4.2 Polymarket + Kalshi 双平台
- 唯一同时接入两大预测市场的 Builder
- 跨平台套利成为可能（AI Divergence Skill 已实现）
- **壁垒**：双平台集成的工程复杂度高

### 4.3 Safety Rails 差异化
- 单笔限额 + 日上限 + 止损/止盈 + 急停开关
- 对机构和 DAO 管理 AI Agent 资金至关重要
- **壁垒**：完善的风控体系是信任基础

### 4.4 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| Skills/ClawHub 生态 | 8 | 平台网络效应一旦形成极强 |
| 双平台接入 | 8 | Polymarket + Kalshi，技术工程量大 |
| 自托管安全 | 9 | 私钥本地，机构级安全标准 |
| Safety Rails | 8 | 完善风控是 Agent 资金管理必需 |
| 先发优势 | 9 | AI Agent 预测市场的先行者 |
| 当前规模 | 4 | $2.66M/月，仍处早期 |

---

## 5. 商业模式

```mermaid
pie title Simmer 收入来源推测
    "Builder Fee 分成" : 25
    "Skills 市场抽成" : 30
    "Agent 订阅/API 费" : 30
    "Season 参与激励" : 15
```

### 5.1 收入测算
- Builder Fee：$2.66M × 0.5% ≈ **$13.3k/月**
- ClawHub Skills 抽成：每个 Skill 安装/使用可能收费
- Agent API 调用费：高频 Agent 产生 API 调用量
- Season 竞赛：可能有参赛费或奖池提成

### 5.2 Skills 经济模型推断

```mermaid
flowchart LR
    A[Strategy 开发者] -->|发布 Skill| B[ClawHub]
    B -->|安装| C[AI Agent 用户]
    C -->|产生收益| D[分成]
    D -->|70%| A
    D -->|30%| E[Simmer 平台]
```

---

## 6. 与竞争对手对比

| 对比维度 | Simmer | Olympusx | Polydupe | EVplus |
|---------|--------|----------|---------|--------|
| 目标用户 | AI Agent + 开发者 | 人类交易者 | 人类交易者 | 专业交易者 |
| 平台支持 | Polymarket + Kalshi | Polymarket | Polymarket | Hyperliquid + PM |
| 策略来源 | ClawHub Skills 市场 | 跟随真人交易者 | 跟随真人交易者 | AI 信号 |
| 自动化程度 | 全自动 (Agent) | 半自动 | 半自动 | 半自动 |
| 编程要求 | 低 (SDK/MCP) | 无 | 无 | 无 |
| 安全模型 | 自托管私钥 | Privy MPC | 非托管 | 未知 |

---

## 7. 待确认问题

- [ ] ClawHub 的具体分成比例？
- [ ] Season 1 的结束时间和奖励规则？
- [ ] $SIM 代币是否会转换为真实代币？
- [ ] openclaw.ai 的关系（创建 Agent 的工具）？
- [ ] 是否支持自定义 AI 模型（非 OpenAI）？
- [ ] 日均 Agent 数量和真实交易 Agent 数量？
- [ ] SpartanLabsXyz 团队背景？

---

## 8. 总结

Simmer 是整个 Builder 生态中**最具前沿性和平台潜力**的项目，实测核心数据：

1. **双平台**：Polymarket + Kalshi 同时接入，唯一做到这一点的 Builder
2. **ClawHub Skills 生态**：8+ 预构建策略，涵盖气象、新闻、跟单、动量、套利
3. **完整 SDK**：Python SDK + MCP 工具 + REST API，开发者友好
4. **自托管安全**：私钥本地签名，机构级安全标准
5. **Safety Rails**：完善风控保护 Agent 资金
6. **Season 机制**：虚拟 $SIM → 真实 USDC 渐进式上手

当前 $2.66M/月（#19）仍处早期，但如果 AI Agent 经济起飞，Simmer 极可能成为**预测市场 Agent 基础设施的事实标准**。
