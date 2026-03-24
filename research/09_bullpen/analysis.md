# Bullpen — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#10**  
> 近1月交易量：**$5.86M**  
> 真实 URL：**待确认**（以下所有域名尝试均失败）

---

## 1. 已确认信息

- Builder Program 排名 **第十**，月交易量 **$5.86M**
- 尝试域名（均失败）：
  - `bullpen.markets`、`bullpen.bet`、`bullpen.app`
  - `bullpen.io`、`bullpen.gg`、`bullpen.xyz`
  - `bullpen.wtf`、`bullpen.club`、`bullpen.so`、`bullpen.fun`
  - `getbullpen.io`
- 真实 URL **需手动在 builders.polymarket.com 点击项目链接确认**

### 1.1 名称含义
「Bullpen」在棒球中指 **牛棚**（投手候场区），引申含义：
- 金融语境：**多头看涨**（Bull）的交易场所
- 棒球语境：等待时机、精准出手、候场候机
- 产品暗示：可能与体育预测市场或「等待最佳入场时机」相关

---

## 2. 推断定位

基于交易量（$5.86M，#10）和名称，可能的定位：

| 假设 | 依据 | 可能性 |
|------|------|--------|
| 体育预测市场专属前端 | 「Bullpen」棒球术语 | 高 |
| 复制交易平台 | 同量级 Olympusx/PolyCop | 中 |
| 交易信号工具 | 「等待时机出手」语义 | 中 |
| 聚合交易终端 | 体量与 Polymtrade 相近 | 低 |

### 2.1 对标竞品分析
月交易量 $5.86M（#10），介于 Chance（$9.99M, #8）和 Jupiter（$5.82M, #11）之间，体量可观但功能未知。

```mermaid
graph TD
    A[用户] --> B[Bullpen 平台]
    B --> C{核心功能 - 待确认}
    C --> C1[可能: 体育预测专区 NFL/NBA/MLB]
    C --> C2[可能: 复制交易 跟随顶级交易者]
    C --> C3[可能: 交易信号 精准入场时机]
    C --> D[Polymarket CLOB API]
    D --> E[Polygon 链]
```

### 2.2 推断用户旅程（待验证）

```mermaid
journey
    title Bullpen 推断用户旅程（待确认）
    section 入门
      发现 Bullpen 平台: 3: 用户
      注册/连接钱包: 3: 用户
      充值 USDC: 3: 用户
    section 核心功能（推断）
      浏览体育市场或复制交易: 3: 用户
      选择市场或目标交易者: 3: 用户
      下单: 3: 用户
    section 结算
      持仓管理: 3: 用户
      到期结算: 3: 系统
```

---

## 2.0 注册、入金、交易、提现全流程（推断详细）

> ⚠️ 以下流程基于同类平台推断，待真实 URL 确认后校正

#### 2.0.1 注册流程（推断）

```mermaid
flowchart TD
    A[访问 Bullpen 真实网址] --> B{已有账户?}
    B -->|否| C[注册账户]
    C --> C1[方式一: 邮箱注册]
    C --> C2[方式二: 连接 MetaMask]
    C --> C3[方式三: WalletConnect]
    C1 --> D[邮件验证]
    D --> E[生成平台钱包]
    C2 --> E
    C3 --> E
    E --> F[完成注册 进入主界面]
    B -->|是| F
```

#### 2.0.2 入金流程（推断）

```mermaid
flowchart TD
    A[进入账户] --> B[点击 Deposit 充值]
    B --> C{选择入金方式}
    C --> C1[信用卡/借记卡 法币]
    C --> C2[USDC on Polygon 直接转账]
    C --> C3[其他链跨链桥]
    C1 --> D1[第三方 on-ramp MoonPay/Transak]
    D1 --> E[USDC 到账]
    C2 --> F[复制 Polygon 钱包地址]
    F --> G[从 CEX 提现 USDC]
    G --> E
    C3 --> H[跨链桥自动处理]
    H --> E
    E --> I[余额更新 可开始交易]
```

#### 2.0.3 浏览市场与交易流程（推断）

```mermaid
flowchart TD
    A[进入主界面] --> B{功能入口推断}
    B --> B1[体育预测市场 Sports]
    B --> B2[新闻/政治市场 News]
    B --> B3[热门市场 Trending]
    B1 --> C[选择联赛 NFL/NBA/MLB]
    C --> D[选择比赛事件]
    D --> E[查看赔率]
    E --> F{选择方向}
    F --> F1[买入 YES]
    F --> F2[买入 NO]
    F1 --> G[输入金额]
    F2 --> G
    G --> H[预览: 估价/手续费]
    H --> I[确认下单]
    I --> J[Polymarket CLOB 执行]
    J --> K[成交 持仓更新]
```

#### 2.0.4 提现流程（推断）

```mermaid
flowchart TD
    A[点击 Withdraw 提现] --> B[输入提现 Polygon 地址]
    B --> C[输入 USDC 金额]
    C --> D[确认提现]
    D --> E[钱包签名验证]
    E --> F[Polygon 链上广播]
    F --> G[USDC 到账目标地址]
    G --> H[提现完成]
```

#### 2.0.5 结算/领奖流程（推断）

```mermaid
flowchart TD
    A[持有仓位的市场到期] --> B[Polymarket 官方解析结果]
    B --> C{持仓方向是否正确?}
    C -->|是| D[系统自动结算]
    D --> E[USDC 返回账户余额]
    E --> F[可提现或继续交易]
    C -->|否| G[仓位归零]
    G --> H[损失已投入金额]
```

---

## 3. 待确认问题（核心）

- [ ] **真实网址是什么？** 在 builders.polymarket.com 排行榜中点击 Bullpen 项目链接
- [ ] 核心产品功能是什么？
- [ ] 是否专注体育类预测市场（NFL/NBA/MLB/NHL）？
- [ ] 是复制交易、信号工具还是聚合终端？
- [ ] 托管还是非托管？
- [ ] 是否有 Twitter/X 账号？搜索 `@bullpen` 或 `bullpen polymarket`
- [ ] 团队背景？
- [ ] 费率结构？
- [ ] 是否有移动端 App？

---

## 4. 调研行动计划

```mermaid
flowchart TD
    A[调研 Bullpen] --> B[访问 builders.polymarket.com]
    B --> C[找到 #10 Bullpen 项目]
    C --> D[点击获取真实 URL]
    D --> E[访问真实网站]
    E --> F[记录核心功能]
    F --> G[补充本报告]
    A --> H[并行: 搜索 X/Twitter]
    H --> H1[搜索 bullpen polymarket]
    H --> H2[搜索 bullpen.bet]
    H1 --> I[找到官方账号]
    I --> G
```

**备选调研途径**：
1. 在 X/Twitter 搜索 `bullpen polymarket`
2. 在 Polymarket Discord 的 `#builders` 频道搜索 Bullpen
3. 在 Polymarket builders.polymarket.com 排行榜点击 #10 位置的项目链接

---

## 5. 市场地位分析

```mermaid
pie title 同区间 Builder 月交易量对比
    "Chance #8 $9.99M" : 999
    "Polymer #9 $7.65M" : 765
    "Bullpen #10 $5.86M" : 586
    "Jupiter #11 $5.82M" : 582
    "Olympusx #12 $4.93M" : 493
```

- $5.86M/月（#10）说明 Bullpen **有真实用户和真实交易量**
- 体量与 Jupiter（Solana 最大 DEX）相当，说明产品有一定竞争力
- 处于前十边缘，若功能有差异化，有进入前五的潜力

---

## 6. 总结

Bullpen 以 **$5.86M/月**（#10）位居前十，交易量可观，但真实产品功能**目前无法通过网络直接访问**确认。

**优先行动**：手动访问 builders.polymarket.com，点击 #10 Bullpen 项目链接，获取真实 URL 后深度补充本报告。

**TODO**：
- [ ] 获取真实 URL
- [ ] 确认产品定位
- [ ] 补充 UX 路径
- [ ] 补充技术架构
- [ ] 补充商业模式
