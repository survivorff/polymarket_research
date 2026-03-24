# PolyCop — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#2**  
> 近1月交易量：**$52.93M**  
> 官网：**polycop.io**

---

## 1. 市场情况

### 1.1 市场定位
PolyCop 定位为 **完全客户端侧的 Polymarket 复制交易 dApp**。口号：「BEAST MODE — 3 Detection Sources，Copy Any Trader on Polymarket Instantly」。

**核心主张**：
- 无需注册，连接钱包即用
- 所有数据和私钥仅在浏览器内存中运行，服务端零存储
- 收费仅在盈利时收取 0.05%（亏损不收费）

### 1.2 市场规模与地位
- Builder Program 排名 **第二**，月交易量 $52.93M
- 复制交易赛道领头羊，交易量约是 Polygun（同类 Telegram Bot）的 2 倍
- 完全无服务端存储，纯 dApp 架构

### 1.3 竞争格局
- **直接竞争**：Polygun（Telegram Bot 跟单，$27.4M），Stand.trade Copy Trade 模块
- PolyCop 专注 Web 端纯客户端，Polygun 专注 Telegram 托管模式，两者定位不同
- **差异化核心**：PolyCop 是「自托管 + 纯客户端」，Polygun 是「托管 + 跨链入金」

---

## 2. 用户体验路径

### 2.1 完整用户旅程

```mermaid
journey
    title PolyCop 用户完整体验旅程
    section 入门
      访问 polycop.io: 5: 用户
      无需注册账号: 5: 用户
      输入私钥 + Proxy 地址: 3: 用户
    section 配置跟单
      粘贴目标交易者地址: 5: 用户
      选择跟单金额模式: 4: 用户
      设置止盈目标: 4: 用户
      开启自动执行: 5: 用户
    section 运行监控
      三路并行检测启动: 5: 系统
      检测到目标交易 <2s: 5: 系统
      自动跟单执行: 5: 系统
      实时 P&L 更新: 4: 用户
    section 止盈/退出
      达到止盈目标自动平仓: 5: 系统
      收取 0.05% 盈利费: 3: 系统
      查看历史收益: 4: 用户
```

### 2.2 三步快速开始流程

```mermaid
flowchart TD
    A[访问 polycop.io] --> B[点击 Launch dApp]
    B --> C[Step 1: 连接钱包]
    C --> C1[输入私钥]
    C --> C2[输入 Polymarket Proxy 地址]
    C1 --> C3[API 凭证在浏览器内自动生成]
    C2 --> C3[API 凭证在浏览器内自动生成]
    C3 --> D[Step 2: 配置跟单]
    D --> D1[粘贴目标交易者钱包地址]
    D --> D2{选择金额模式}
    D2 --> D2a[Fixed $ 固定金额]
    D2 --> D2b[Mirror 镜像金额]
    D2 --> D2c[% of Trader 比例跟单]
    D --> D3[可选: 设置止盈目标 $]
    D --> D4[可选: 设置交易时间窗口 默认70s]
    D4 --> E[Step 3: 点击 Start]
    E --> E1[WebSocket 实时监听 启动]
    E --> E2[CLOB API 1.5s 轮询 启动]
    E --> E3[data-api 轮询 启动]
    E1 --> F{检测到目标交易?}
    E2 --> F
    E3 --> F
    F -->|是 <2s| G[验证: 交易是否在时间窗口内?]
    G -->|是| H[验证: 订单簿是否有流动性?]
    H -->|是| I[构建跟单订单 FOK类型]
    I --> J[提交订单 8%滑点保护]
    J -->|成功| K[更新实时 P&L]
    J -->|失败| L[重试队列 最多2次]
    L -->|仍失败| M[跳过 缓存死订单簿]
    K --> N{达到止盈目标?}
    N -->|是 每8s检查| O[自动平仓]
    O --> P[收取 0.05% 盈利费]
    F -->|否| E1
```

### 2.3 三路并行检测架构（核心技术）

```mermaid
sequenceDiagram
    participant TW as 目标交易者
    participant PM as Polymarket
    participant WS as WebSocket 监听
    participant CL as CLOB API 1.5s轮询
    participant DA as data-api 轮询
    participant EX as 执行引擎
    participant UW as 用户钱包

    TW->>PM: 提交买单 YES $500
    PM-->>WS: 实时推送成交
    PM-->>CL: 1.5s轮询捕获
    PM-->>DA: 数据API捕获
    Note over WS,DA: 三路并行，任一捕获即触发
    WS->>EX: 信号（最快）
    EX->>EX: 检查时间窗口(70s)
    EX->>EX: 检查流动性
    EX->>EX: 计算跟单金额
    EX->>UW: FOK订单 + 8%滑点
    UW-->>EX: 成交 or 重试
    Note over EX: 全程浏览器内存，零服务器存储
```

---

## 3. 业务架构

```mermaid
graph TD
    A[用户] --> B[polycop.io dApp]
    B --> C{纯客户端运行}
    C --> D[私钥 仅内存]
    C --> E[三路检测引擎]
    C --> F[执行引擎]
    C --> G[P&L 追踪]
    C --> H[止盈监控 每8s]

    E --> E1[WebSocket]
    E --> E2[CLOB API]
    E --> E3[data-api]

    E1 --> PM[Polymarket]
    E2 --> PM
    E3 --> PM
    F --> PM
    PM --> PG[Polygon 链]
```

### 3.1 核心业务模块

| 模块 | 描述 | 技术特点 |
|------|------|----------|
| 三路并行检测 | WS + CLOB + data-api 同时监听 | <2s 检测速度 |
| FOK 订单执行 | Fill-or-Kill，全成或全撤 | 8% 滑点保护 |
| 顺序执行队列 | 防止同时多单耗尽余额 | 防余额透支 |
| 死市场缓存 | 跳过无流动性市场 | 减少无效尝试 |
| 止盈监控 | 每 8 秒检查所有持仓 | 自动平仓 |
| 实时 P&L | 链上同步持仓 + 未实现盈亏 | 实时更新 |

---

## 4. 技术架构

```mermaid
graph LR
    subgraph 浏览器客户端 零服务端存储
        A1[私钥 内存中]
        A2[三路检测引擎]
        A3[FOK 订单构建器]
        A4[重试队列]
        A5[止盈监控器]
        A6[P&L 计算器]
    end

    subgraph Polymarket
        B1[WebSocket API]
        B2[CLOB REST API]
        B3[data-api]
        B4[Proxy Wallet]
    end

    subgraph Polygon
        C1[CTF Exchange 合约]
        C2[USDC]
    end

    A1 --> A3
    A2 -->|监听| B1
    A2 -->|1.5s轮询| B2
    A2 -->|轮询| B3
    A3 --> B2
    B4 --> C1
    A5 -->|每8s| B2
    A6 -->|同步| C1
```

### 4.1 安全模型（重要）
- **私钥不离开浏览器**：用于程序化签名和执行，无需每次弹出钱包确认
- **无服务端存储**：PolyCop 不存储任何用户数据或凭证
- **风险**：用户必须将私钥输入浏览器，存在浏览器扩展/XSS 风险
- **与 Polygun 的区别**：Polygun 是托管式（私钥给 Polygun 服务器），PolyCop 是纯客户端

---

## 5. 核心功能与交易技术壁垒

### 5.1 三模式金额控制

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| Fixed $ | 每次跟单固定金额，如 $50 | 稳健跟单 |
| Mirror | 完全镜像目标交易者金额 | 高信任跟单 |
| % of Trader | 按目标金额的百分比，如 50% | 比例控仓 |

### 5.2 交易年龄过滤（70s 窗口）
- 仅执行 70 秒内的新鲜交易信号，过期信号自动跳过
- 防止因网络延迟导致追高或踏空

### 5.3 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 检测速度 | 9 | 三路并行 <2s，业界领先 |
| 安全模型 | 8 | 零服务端存储，用户信任度高 |
| 执行可靠性 | 8 | FOK + 重试 + 死市场缓存，完善的容错 |
| 盈利对齐 | 9 | 仅盈利收费 0.05%，与用户利益高度一致 |
| 先发数据积累 | 6 | 无服务端无历史数据积累（弱点）|
| 聪明钱发现 | 5 | 用户需自己找要跟的地址（弱点）|

---

## 6. 商业模式

```mermaid
pie title PolyCop 收入来源
    "盈利交易 0.05% 服务费" : 55
    "Builder Fee 分成" : 40
    "其他" : 5
```

### 6.1 收入模式
1. **盈利服务费 0.05%**：仅对盈利交易收费，亏损不收
   - 这是核心商业模式，与用户利益高度对齐
   - 月交易量 $52.93M，假设 60% 盈利 → $52.93M × 60% × 0.05% ≈ **$15.9k/月**
2. **Builder Fee 分成**：通过 Polymarket Builder Program 获得分成
   - $52.93M × 0.5% ≈ **$264k/月**
   - Builder Fee 是主要收入来源

### 6.2 与 Polygun 商业模式对比

| 维度 | PolyCop | Polygun |
|------|---------|--------|
| 架构 | 纯客户端 | 服务端托管 |
| 私钥 | 用户浏览器内存 | Polygun 服务器 |
| 收费 | 0.05% 盈利费 + Builder Fee | 1% 全交易量手续费 |
| 入金 | 需自有 Polygon USDC | 支持 4 链自动桥接 |
| 聪明钱发现 | 用户自选地址 | 内置 Smart Wallets 榜单 |

---

## 7. 待确认问题

- [ ] Stats 页面的具体数据（总用户数、总复制交易次数）？
- [ ] 「聪明钱」地址如何发现？是否有推荐社区/列表？
- [ ] 是否支持多地址同时跟单？
- [ ] Blog 中是否有进一步的技术文档？
- [ ] 团队背景和所在地？
- [ ] 是否计划加入 Smart Money 榜单（避免用户需自己找地址）？

---

## 8. 总结

PolyCop 的真实产品与初步调研预期有重大差异：

1. **完全客户端架构**：无服务端存储，与 Polygun 托管模式形成鲜明对比
2. **「BEAST MODE」三路检测**：WebSocket + CLOB + data-api 并行，<2s 检测速度是核心技术壁垒
3. **盈利对齐收费**：0.05% 仅收盈利交易，用户信任度极高
4. **FOK 订单 + 8% 滑点**：确保高填充率，工程设计完善
5. 月交易量 $52.93M（#2），在 Builder 生态中占约 **10% 份额**

**最大风险**：用户需手动寻找要跟踪的「聪明钱」地址，产品未提供发现机制，是明显短板。
