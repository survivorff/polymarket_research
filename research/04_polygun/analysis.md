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
