# Polygun — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#4**  
> 近1月交易量：**$27.44M**  
> ⚠️ **网站状态**：polygun.io / polygun.app 等域名均无法访问，无 Wayback Machine 存档

---

## 1. 市场情况

### 1.1 市场定位
Polygun 定位为 **Telegram 端预测市场交易机器人**，让用户无需打开浏览器，直接在 Telegram 中完成浏览市场、买卖仓位、复制顶级交易者等全套操作。

核心差异：
- **Telegram 原生**：参考 Solana Meme 币领域 Bot（Bonk Bot、Trojan）打法
- **托管式钱包**：用户充值后由 Polygun 代理签名执行
- **1% 全交易量手续费**：收费模式透明直接
- **自动跨链桥**：支持 Polygon/Solana/ETH/BNB 四链入金

### 1.2 市场规模与地位
- Builder Program 排名 **第四**，月交易量 $27.44M
- Telegram Bot 赛道中交易量最高的 Polymarket 接入平台
- 合作超过 **100+ 个项目**
- ⚠️ 网站当前无法访问，产品状态待确认

### 1.3 竞争格局

| 维度 | Polygun（Telegram）| PolyCop（Web dApp）|
|------|-------------------|-------------------|
| 架构 | 托管式 Bot | 纯客户端 dApp |
| 私钥 | Polygun 服务器保管 | 用户浏览器内存 |
| 收费 | 1% 全交易量 | 0.05% 仅盈利 |
| 入金 | 4链自动桥接 | 需自备 Polygon USDC |
| 聪明钱 | 内置 Smart Wallets 榜单 | 用户自己找地址 |
| 跨链 | ✅ 自动 | ❌ 不支持 |

---

## 2. 用户体验路径

### 2.1 完整用户旅程

```mermaid
journey
    title Polygun Telegram Bot 用户完整体验旅程
    section 入门
      在 Telegram 搜索 Polygun Bot: 4: 用户
      发送 /start 激活: 5: 用户
      Bot 自动生成专属钱包地址: 5: 系统
      选择充值链（Polygon/SOL/ETH/BNB）: 4: 用户
      转入 USDC 或原生代币: 3: 用户
      自动跨链桥至 Polygon USDC: 5: 系统
    section 日常交易
      浏览热门预测市场列表: 5: 用户
      选择市场和 YES/NO 方向: 5: 用户
      点击 Buy 按钮一键执行: 5: 用户
      收到成交通知: 5: 系统
    section 复制交易
      查看 Smart Wallets 排行榜: 4: 用户
      选择要跟随的聪明钱: 4: 用户
      设置跟单金额比例: 4: 用户
      自动跟随目标钱包交易: 5: 系统
    section 分享与提现
      生成 PnL 卡片分享至 Twitter: 5: 用户
      新用户通过链接进入 Bot: 3: 新用户
      推荐人获得手续费分成: 5: 系统
      申请提现至任意链: 4: 用户
```

### 2.2 详细交互流程

```mermaid
sequenceDiagram
    participant U as 用户
    participant TG as Telegram
    participant PG as Polygun Bot
    participant W as 托管钱包
    participant BR as 跨链桥
    participant PM as Polymarket
    participant PL as Polygon

    U->>TG: /start
    TG->>PG: 新用户注册
    PG->>W: 生成专属 Proxy Wallet
    W-->>PG: 钱包地址
    PG->>TG: 展示充值地址（支持4链）
    TG->>U: 显示存款选项

    U->>W: 转入 ETH USDC
    W->>BR: 跨链桥至 Polygon
    BR-->>W: Polygon USDC 到账
    PG->>TG: 余额到账通知

    U->>TG: 点击「浏览市场」
    PG->>PM: GET /markets (热门列表)
    PM-->>PG: 市场数据
    PG->>TG: 发送市场卡片（含YES/NO按钮）
    U->>TG: 点击 Buy YES $50
    PG->>PM: POST /order（代理签名）
    PM->>PL: 链上撮合
    PL-->>PM: 成交
    PM-->>PG: 成交回执
    PG->>TG: @用户 成交通知 + 当前 P&L
```

### 2.3 PnL 卡片病毒传播机制

```mermaid
flowchart LR
    A[用户盈利] --> B[一键生成 PnL 图卡]
    B --> C[分享至 Twitter/X]
    C --> D[潜在用户看到]
    D --> E[扫码/点链接]
    E --> F[进入 Polygun Bot]
    F --> G[新用户注册]
    G --> A
    H[推荐人] -->|获得手续费分成| I[激励推荐]
    I --> D
```

### 2.4 复制交易流程

```mermaid
flowchart TD
    A[用户进入复制交易] --> B[查看 Smart Wallets 榜单]
    B --> C[按收益率/胜率/交易频率排序]
    C --> D[选择目标钱包]
    D --> E[设置跟单参数]
    E --> E1[跟单金额: 固定$ / 比例%]
    E --> E2[最大单笔限额]
    E1 --> F[开启自动跟单]
    E2 --> F
    F --> G[Polygun 监控目标钱包]
    G -->|目标下单| H[自动镜像执行]
    H --> I[通知用户]
```

---

## 3. 业务架构

```mermaid
graph TD
    A[用户] --> B[Telegram]
    B --> C[Polygun Bot]

    C --> D{功能模块}
    D --> D1[浏览市场]
    D --> D2[买入/卖出]
    D --> D3[复制交易]
    D --> D4[持仓管理]
    D --> D5[限价单]
    D --> D6[钱包管理]
    D --> D7[推荐系统]
    D --> D8[PnL 卡片]

    D3 --> E[Smart Wallets 榜单]
    E --> E1[自动跟随交易]

    D2 --> F[托管钱包系统]
    F --> F1[Polygon 入金]
    F --> F2[Solana 入金 → 跨链]
    F --> F3[Ethereum 入金 → 跨链]
    F --> F4[BNB 入金 → 跨链]

    D2 --> G[Polymarket CLOB API]
    G --> H[Polygon 链上执行]
```

---

## 4. 技术架构

```mermaid
graph LR
    subgraph Telegram层
        T1[Telegram Bot API]
        T2[内联按钮 InlineKeyboard]
        T3[Slash Command 处理器]
    end

    subgraph 业务层
        B1[托管钱包生成系统]
        B2[跨链桥模块]
        B3[复制交易引擎]
        B4[限价单监控]
        B5[PnL 计算器 + 图卡生成]
        B6[推荐追踪系统]
        B7[Smart Wallets 评分引擎]
    end

    subgraph 链上层
        C1[Polymarket CLOB API]
        C2[Polygon RPC 节点]
        C3[跨链桥协议 Stargate/Wormhole]
        C4[USDC 合约]
    end

    T1 --> T3
    T2 --> B3
    T3 --> B1
    T3 --> B2
    T3 --> B3
    T3 --> B4
    B1 --> C2
    B2 --> C3
    B3 --> C1
    B4 --> C1
    C1 --> C2
    B5 --> C2
    B7 --> C1
```

### 4.1 托管钱包架构

```mermaid
sequenceDiagram
    participant U as 用户
    participant TG as Telegram
    participant PG as Polygun 服务端
    participant W as 托管钱包
    participant BR as 跨链桥
    participant PM as Polymarket

    U->>TG: /start
    TG->>PG: 新用户
    PG->>W: 生成专属 Proxy Wallet（私钥加密存储于服务端）
    W-->>PG: 钱包地址
    PG->>TG: 展示充值地址（4链可选）
    U->>W: 从任意链充值
    W->>BR: 自动跨链桥至 Polygon USDC
    BR-->>W: Polygon USDC 到账
    PG->>TG: 余额到账通知
    U->>TG: 点击 Buy YES
    PG->>PM: 代理签名提交订单
    PM-->>PG: 成交回执
    PG->>TG: 推送成交通知 + 实时 P&L
```

### 4.2 技术栈推断
- **Bot 框架**：Python-telegram-bot 或 Telegraf (Node.js)
- **钱包生成**：ethers.js，私钥服务端加密存储（AES-256 或 KMS）
- **跨链桥**：Stargate Finance / LayerZero（支持 4 链）
- **API**：Polymarket CLOB REST + WebSocket
- **Smart Wallets 评分**：链上历史数据 + 胜率/盈利率加权算法
- **PnL 卡片生成**：Canvas API 或 puppeteer 截图

---

## 5. 核心功能与交易技术壁垒

### 5.1 功能清单（基于 Polymarket 官方 Builder 数据）

| 功能 | 描述 | 技术实现 |
|------|------|----------|
| 即时买卖 | Telegram 内一键执行 | 托管签名 + CLOB API |
| 复制交易 | 跟随 Smart Wallets 自动镜像 | WebSocket 监听 + 延迟执行 |
| 限价单 | 设定目标价格自动执行 | 后端轮询市场价格 |
| 多链入金 | Polygon/SOL/ETH/BNB → 自动桥 | 跨链桥协议集成 |
| PnL 卡片 | 可分享的收益图卡 | Canvas/截图生成 |
| 推荐系统 | 邀请返佣 | 链上追踪 + 分成计算 |
| 持仓管理 | 查看所有持仓和历史 | CLOB API + 链上同步 |

### 5.2 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| Telegram 渠道 | 8 | 用户习惯迁移成本高，Bot 使用习惯难改变 |
| 跨链桥集成 | 7 | 4 链自动桥接，技术门槛较高 |
| 病毒增长机制 | 8 | PnL 卡片 + 推荐分佣，形成强增长飞轮 |
| Smart Wallets 数据 | 6 | 评分积累有壁垒，但算法可复制 |
| 100+ 项目合作 | 7 | 合作渠道网络形成分发壁垒 |
| 托管安全风险 | -2 | 私钥托管于服务端，信任成本高 |

---

## 6. 商业模式

```mermaid
pie title Polygun 收入来源
    "1% 全交易量手续费" : 70
    "Builder Fee 分成" : 20
    "推荐佣金净收入" : 10
```

### 6.1 收入测算
- 月交易量 $27.44M × 1% = **$274k/月** 手续费收入
- 同时叠加 Builder Fee 分成（Polymarket 给的约 0.5%）
- 实际毛利需扣除：跨链桥 gas 费、服务器、推荐佣金支出

### 6.2 与 PolyCop 商业模式对比

| 维度 | Polygun | PolyCop |
|------|---------|--------|
| 收费模式 | 1% 全交易量（含亏损）| 0.05% 仅盈利 |
| 用户体感 | 固定成本，可预期 | 与用户利益对齐 |
| 月收入（测算）| ~$274k | ~$16k + Builder Fee |
| 信任模型 | 服务端托管私钥 | 浏览器内存，零服务端 |
| 门槛 | 极低（Telegram 直接用）| 需自备 Polygon USDC |

---

## 7. 待确认问题

- [ ] Polygun 当前真实网址（所有已知域名均失效，产品是否已停止运营？）
- [ ] 私钥保管方式（服务端加密存储 vs MPC vs TEE？）
- [ ] 跨链桥使用的具体协议（Stargate / Wormhole / 自建？）
- [ ] Smart Wallets 评分算法的具体指标和权重？
- [ ] 100+ 合作项目具体是哪些？合作方式？
- [ ] PnL 卡片生成技术实现？
- [ ] 限价单实现：后端轮询 vs WebSocket 监听？
- [ ] 团队规模和地理位置？
- [ ] 日活用户数量？
- [ ] 网站下线原因？产品是否仍在运营？

---

## 8. 总结

Polygun 是 Telegram Bot 赛道的标杆，成功复制了 Solana Meme 币 Bot（如 Photon、Trojan）的打法：

1. **极低门槛**：多链入金 + Telegram 原生，无需任何 Web3 知识
2. **病毒增长**：PnL 卡片 + 推荐分佣，形成强大增长飞轮
3. **复制交易**：内置 Smart Wallets 榜单，降低研究门槛
4. **1% 费率**：透明收费，用户为便利性买单

月交易量 $27.44M（#4），是 Telegram 渠道的绝对第一。

⚠️ **风险**：网站全部域名失效，产品状态不明。若已停止运营，则排行榜数据为历史数据。托管式私钥是核心信任风险点。
