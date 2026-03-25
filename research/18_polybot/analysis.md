# PolyBot — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#18**  
> 近1月交易量：**$2.98M**  
> 真实 URL：**待确认**

---

## 1. 已确认信息

- Builder Program 排名 **第十八**，月交易量 **$2.98M**
- 名称「PolyBot」强烈暗示是 **Bot 类产品**（Telegram Bot 或 Discord Bot）
- 处于 #17 Polydupe（$3.06M）和 #19 Simmer（$2.68M）之间

### 1.1 与现有 Bot 产品对比

| 对比 | PolyBot | Polygun | Betmoar Bot |
|------|---------|---------|-------------|
| 平台 | 待确认 | Telegram | Discord |
| 月交易量 | $2.98M | $27.71M | $208M |
| 定位 | 待确认 | 复制交易+跨链 | 社区嵌入 |

---

## 2. 推断定位

```mermaid
graph TD
    A[用户] --> B[PolyBot]
    B --> C{平台类型 待确认}
    C --> C1[Telegram Bot]
    C --> C2[Discord Bot]
    C --> C3[Web App]
    C1 --> D{功能 待确认}
    D --> D1[交易执行]
    D --> D2[价格提醒]
    D --> D3[复制交易]
    D --> E[Polymarket CLOB API]
```

---

## 3. 用户体验路径（推断）

### 2.0 注册、入金、交易、提现全流程（推断）

#### 2.0.1 注册流程（Telegram Bot 推断）

```mermaid
flowchart TD
    A[在 Telegram 搜索 @PolyBotApp 或类似] --> B[点击 Start]
    B --> C[Bot 发送欢迎消息]
    C --> D[输入 /connect]
    D --> E[Bot 发送 Polymarket 绑定链接]
    E --> F[完成 Polymarket 账户绑定]
    F --> G[可开始使用]
```

#### 2.0.2 入金流程（推断）

```mermaid
flowchart TD
    A[Bot 内查看余额] --> B{有余额?}
    B -->|否| C[前往 Polymarket 官网入金]
    C --> D[USDC 到账 Proxy Wallet]
    D --> E[Bot 自动读取余额]
    B -->|是| E
    E --> F[可交易]
```

#### 2.0.3 交易流程（推断）

```mermaid
flowchart TD
    A[在 Bot 发送交易指令] --> B[如 /buy YES Trump 50]
    B --> C[Bot 搜索匹配市场]
    C --> D[展示市场列表]
    D --> E[用户选择]
    E --> F[Bot 展示确认面板]
    F --> G[用户确认]
    G --> H[Polymarket CLOB 成交]
    H --> I[Bot 推送成交通知]
```

#### 2.0.4 提现流程（推断）

```mermaid
flowchart TD
    A[发送 /withdraw 指令] --> B[输入金额和地址]
    B --> C[确认提现]
    C --> D[USDC 到账]
```

#### 2.0.5 结算流程（推断）

```mermaid
flowchart TD
    A[持仓市场到期] --> B[自动结算]
    B --> C[Bot 推送结果通知]
    C --> D[余额更新]
```

---

## 4. 待确认问题

- [ ] **真实网址或 Telegram Bot 名称**
- [ ] 是 Telegram、Discord 还是 Web 产品？
- [ ] 核心功能：交易执行？复制交易？价格提醒？
- [ ] 费率结构？
- [ ] 团队背景？
- [ ] 与 Polygun 的差异化？

---

## 5. 总结

PolyBot 以 **$2.98M/月**（#18）位列中部区间，名称强烈暗示 Bot 类产品。具体平台和功能需手动在 builders.polymarket.com 获取真实链接后确认。

**TODO**：
- [ ] 在 