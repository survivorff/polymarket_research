# Olympusx.app — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#12**  
> 近1月交易量：**$4.93M**

---

## 1. 市场情况

### 1.1 市场定位
Olympus 定位为 **非托管复制交易 + 手动交易终端**，口号是「Automated Polymarket Copy Trading」。与 PolyCop 和 Polygun 同属复制交易赛道，但强调**非托管（Non-Custodial）**和极低费率作为差异化。

### 1.2 市场规模与地位
- Builder Program 排名 **第十二**，月交易量 $4.93M
- 费率：免费版 **0.01%-0.75%**，订阅版 **0.003%-0.23%**（业内最低之一）
- 使用 **Privy** 提供非托管钱包方案

### 1.3 竞争格局与差异化

| 对比维度 | Olympusx | PolyCop | Polygun |
|---------|---------|---------|--------|
| 托管方式 | 非托管(Privy) | 托管 | 托管 |
| 费率 | 0.003%-0.75% | 未公开 | 1% |
| 平台 | Web | Web | Telegram |
| 手动交易 | ✅ 支持 | ❌ | ❌ |
| 图表 | ✅ 实时图表 | ❌ | ❌ |
| 订单簿 | ✅ 实时 | ❌ | ❌ |

---

## 2. 用户体验路径

### 2.0 注册、入金、交易、提现、领奖全流程（详细）

#### 2.0.1 注册流程（Privy 非托管钱包）

```mermaid
flowchart TD
    A[访问 olympusx.app] --> B[点击 Sign Up / Connect]
    B --> C{选择注册方式}
    C --> C1[邮箱注册 via Privy]
    C --> C2[Google 账号 via Privy]
    C --> C3[Twitter/X 账号 via Privy]
    C --> C4[已有钱包 MetaMask/WalletConnect]
    C1 --> D[Privy 发送验证码]
    D --> E[验证成功]
    C2 --> E
    C3 --> E
    C4 --> E
    E --> F[Privy MPC 自动生成非托管钱包]
    F --> G[获得 Polygon 钱包地址]
    G --> H[进入 Olympusx 主界面]
    H --> I[私钥由 Privy MPC 分片管理 用户可随时导出]
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[进入 Olympusx 主界面] --> B[点击 Deposit 或余额区域]
    B --> C{选择入金方式}
    C --> C1[信用卡/借记卡 法币]
    C --> C2[USDC on Polygon 直接转账]
    C --> C3[其他链 USDC 跨链]
    C1 --> D[MoonPay / Transak 弹窗]
    D --> D1[输入卡号信息]
    D1 --> D2[完成 KYC 实名认证]
    D2 --> E[USDC 到账 Polygon MPC 钱包]
    C2 --> F[复制 Polygon 钱包地址]
    F --> G[从 CEX 或其他钱包转入 USDC]
    G --> E
    C3 --> H[跨链桥界面 选择来源链]
    H --> I[USDC 桥接至 Polygon]
    I --> E
    E --> J[余额显示更新 可开始使用]
```

#### 2.0.3 复制交易流程（核心功能）

```mermaid
flowchart TD
    A[进入 Traders 排行榜] --> B[查看顶级交易者数据]
    B --> B1[PnL 盈亏历史]
    B --> B2[胜率 Win Rate]
    B --> B3[累计交易量]
    B --> B4[开仓/平仓记录]
    B4 --> C[点击进入交易者详情页]
    C --> D[查看实时持仓和历史走势]
    D --> E{决定跟随?}
    E -->|是| F[点击 Copy 按钮]
    E -->|否| G[继续浏览其他交易者]
    F --> H[配置跟单参数]
    H --> H1[分配跟单资金 USDC]
    H --> H2[设置单笔最大限额]
    H --> H3[设置最大亏损止损]
    H3 --> I[确认开启跟单]
    I --> J[Olympusx 引擎 24/7 监控目标]
    J --> K{目标交易者下单?}
    K -->|是| L[自动按比例执行]
    L --> M[推送通知给用户]
    K -->|否| J
```

#### 2.0.4 手动交易流程

```mermaid
flowchart TD
    A[切换到手动交易模式] --> B[浏览市场列表]
    B --> C[搜索或分类筛选]
    C --> D[进入市场详情]
    D --> D1[查看实时价格图表]
    D --> D2[查看 Live Order Book 订单簿]
    D --> D3[查看 Live Trade Feed 成交流]
    D3 --> E[分析后决定交易方向]
    E --> F{订单类型}
    F --> F1[Market Order 市价单]
    F --> F2[Limit Order 限价单]
    F1 --> G[输入金额]
    F2 --> G2[输入价格和金额]
    G --> H[预览滑点和手续费]
    G2 --> H
    H --> I[确认下单 Privy 自动签名]
    I --> J[Polymarket CLOB 成交]
    J --> K[持仓更新 实时 PnL 显示]
```

#### 2.0.5 体育预测市场流程

```mermaid
flowchart TD
    A[进入 Sports 模块] --> B[选择联赛]
    B --> B1[NFL 美式足球]
    B --> B2[NBA 篮球]
    B --> B3[MLB 棒球]
    B --> B4[NHL 冰球]
    B1 --> C[选择具体比赛]
    B2 --> C
    B3 --> C
    B4 --> C
    C --> D{选择投注类型}
    D --> D1[Spread 点差盘]
    D --> D2[Total 大小分盘]
    D --> D3[Moneyline 独赢盘]
    D1 --> E[查看当前赔率]
    D2 --> E
    D3 --> E
    E --> F[输入投注金额]
    F --> G[Privy 钱包自动签名]
    G --> H[Polymarket CLOB 成交]
    H --> I[持仓记录 等待比赛结束]
```

#### 2.0.6 提现流程

```mermaid
flowchart TD
    A[点击 Withdraw 提现] --> B[输入目标 Polygon 地址]
    B --> C[输入提现 USDC 金额]
    C --> D[Privy MPC 钱包自动签名]
    D --> E[Polygon 链上广播]
    E --> F[USDC 到账目标地址]
    F --> G[提现完成]
    G --> H{目标是什么?}
    H --> H1[转至 CEX 法币出金]
    H --> H2[转至其他 DeFi 使用]
    H --> H3[继续持有 USDC]
```

#### 2.0.7 结算/领奖流程

```mermaid
flowchart TD
    A[持有仓位的市场到期] --> B[Polymarket UMA Oracle 解析]
    B --> C{结果判定}
    C -->|持仓方向正确| D[按 1 USDC/份 自动结算]
    C -->|持仓方向错误| E[仓位归零]
    D --> F[USDC 返回 Olympusx 账户余额]
    F --> G[可继续交易或提现]
    E --> H[损失已投入本金]
```

### 2.1 完整用户旅程（实测）

```mermaid
journey
    title Olympusx 用户完整体验旅程
    section 入门
      访问 olympusx.app: 5: 用户
      查看顶级交易者列表: 5: 用户
      查看 PnL / 胜率 / 交易量: 4: 用户
      点击 Copy 按钮: 5: 用户
      注册 Privy 钱包: 4: 系统
      充值 USDC: 3: 用户
    section 复制交易
      设置风险参数: 4: 用户
      开启 24/7 自动跟单: 5: 用户
      收到跟单通知: 4: 系统
      查看实时 P&L: 5: 用户
    section 手动交易
      切换手动交易模式: 4: 用户
      浏览市场列表: 5: 用户
      查看实时价格图表: 4: 用户
      查看 Live Order Book: 4: 用户
      查看 Live Trade Feed: 4: 用户
      手动下单: 5: 用户
    section 专项功能
      进入 Sports Betting 体育: 5: 用户
      浏览 NFL/NBA/MLB/NHL: 5: 用户
      交易点差/总分/独赢: 4: 用户
      进入 LP Rewards: 3: 用户
      管理流动性订单: 3: 用户
```

### 2.2 复制交易设置流程

```mermaid
flowchart TD
    A[访问 olympusx.app] --> B[浏览 Traders 排行榜]
    B --> C[查看交易者详情]
    C --> C1[PnL 历史图表]
    C --> C2[胜率 + 交易量]
    C --> C3[开仓/平仓记录]
    C --> C4[实时交易活动]
    C3 --> D{决定跟随?}
    D -->|是| E[点击 Copy]
    E --> F{已有账户?}
    F -->|否| G[Privy 注册]
    G --> H[生成 MPC 钱包]
    F -->|是| I[设置跟单参数]
    H --> I
    I --> I1[分配跟单资金]
    I --> I2[设置最大单笔限额]
    I --> I3[设置止损比例]
    I3 --> J[开启自动跟单]
    J --> K[24/7 实时镜像]
    K --> L{目标交易者下单?}
    L -->|是| M[自动按比例执行]
    M --> N[通知用户]
    L -->|否| K
```

### 2.3 体育预测市场流程（独特功能）

```mermaid
flowchart TD
    A[进入 Sports 模块] --> B[选择联赛]
    B --> B1[NFL 美式足球]
    B --> B2[NBA 篮球]
    B --> B3[MLB 棒球]
    B --> B4[NHL 冰球]
    B1 --> C[选择比赛]
    C --> D{选择投注类型}
    D --> D1[Spread 点差]
    D --> D2[Total 总分]
    D --> D3[Moneyline 独赢]
    D1 --> E[下单 via Polymarket]
    D2 --> E
    D3 --> E
    E --> F[Privy 钱包签名]
    F --> G[成交]
```

### 2.4 LP Rewards 流动性提供流程

```mermaid
flowchart TD
    A[进入 LP Rewards] --> B[查看激励市场列表]
    B --> C[选择目标市场]
    C --> D[在两侧挂流动性单]
    D --> E[Olympus 统一管理 LP 订单]
    E --> F{LP 订单状态变化?}
    F -->|接近成交| G[Webhook 提醒]
    F -->|已成交| H[Webhook 提醒]
    G --> I[用户调整策略]
    H --> J[收取 Maker Rebate]
```

---

## 3. 业务架构（实测补充）

**实测新发现功能**：
- **Sports Betting**：NFL/NBA/MLB/NHL 体育预测，Spread/Total/Moneyline 三种类型
- **LP Rewards**：跨市场流动性管理 + Webhook 提醒
- **Referral Program**：推荐码系统，USDC 佣金
- **Trader Profile Pages**：每个钱包有公开 `/trader` 页面，含 PnL 历史、胜率、持仓

**实测顶级交易者数据**：
| 排名 | 钱包 | PnL | 胜率 |
|------|------|-----|------|
| 1 | 0x7c3d...5c6b | +$1.1M | 61.6% |
| 2 | 0x6ffb...a834 | +$497.9K | 94.2% |
| 3 | 0x06ec...f845 | +$244.5K | 62.4% |

---

## 4. 技术架构

```mermaid
graph LR
    subgraph 前端层
        F1[React Web App]
        F2[实时图表引擎]
        F3[订单簿渲染]
    end
    
    subgraph 钱包层
        W1[Privy SDK]
        W2[MPC 钱包]
    end
    
    subgraph 数据层
        D1[Polymarket CLOB WebSocket]
        D2[Polymarket REST API]
        D3[链上数据索引]
    end
    
    subgraph 执行层
        E1[复制交易引擎]
        E2[订单生成器]
        E3[CLOB 提交]
    end
    
    F1 --> W1
    F2 --> D1
    F3 --> D1
    W1 --> W2
    E1 --> E2
    E2 --> W2
    W2 --> E3
    E3 --> D2
    D3 --> E1
```

---

## 4. 核心功能与技术壁垒

### 4.1 低费率战略
- 免费版：0.01%-0.75%（按交易量分层）
- 订阅版：0.003%-0.23%（极低，机构级别）
- **战略意图**：用低价格抢夺 PolyCop（费率未知）和 Polygun（1%）的用户

### 4.2 完整交易终端
- 复制交易 + 手动交易 + 图表 + 订单簿 = 一站式体验
- 比 PolyCop 功能更全，比 Polymtrade 多了复制交易

### 4.3 Privy 非托管优势
- 无需 MetaMask 插件，新用户友好
- 比完全托管更安全，比完全自托管更简单
- 是「托管体验 + 自托管安全」的最佳平衡

### 4.4 聪明钱追踪数据
从首页实测数据可见：
- 地址 `0x7c3d...5c6b`：PnL **+$1.1M**，胜率 **61.6%**
- 地址 `0x6ffb...a834`：PnL **+$497.6K**，胜率 **94.2%**
这些真实数据增强了用户对平台的信任。

### 4.5 技术壁垒评估

| 壁垒类型 | 评分(1-10) | 说明 |
|---------|-----------|------|
| 非托管安全性 | 9 | Privy MPC 是行业领先方案 |
| 费率优势 | 8 | 订阅版 0.003% 极具竞争力 |
| 功能完整性 | 8 | 复制+手动+图表+订单簿全覆盖 |
| 用户体验 | 8 | 无需 MetaMask，新用户友好 |
| 数据积累 | 6 | 相比 PolyCop 数据积累较少 |

---

## 5. 商业模式

```mermaid
pie title Olympusx 收入来源
    "交易手续费 (0.01-0.75%)" : 50
    "订阅费收入" : 30
    "Builder Fee 分成" : 20
```

### 5.1 收入测算
- 月交易量 $4.93M × 平均 0.3% ≈ **$14.8k/月** 手续费
- 加上订阅收入 + Builder Fee
- 当前体量偏小，但费率模型设计合理，有增长潜力

### 5.2 订阅模式
- 免费版：适合散户，0.01%-0.75%
- 订阅版：适合活跃交易者/机构，0.003%-0.23%
- 订阅费可能固定月费 + 超低交易费组合

---

## 6. 待确认问题

- [ ] 订阅版的具体月费价格？
- [ ] Privy 钱包支持导出助记词吗？
- [ ] 复制交易的最小/最大跟单比例？
- [ ] 智能交易者评分算法细节？
- [ ] 团队背景、融资情况？
- [ ] 是否有移动端 App？

---

## 7. 总结

Olympusx 是 Polymarket Builder 生态中**产品设计最全面**的复制交易平台：
1. **非托管安全**：Privy MPC 方案，兼顾安全与体验
2. **最低费率**：订阅版 0.003%，吸引大资金用户
3. **一站式**：复制 + 手动 + 图表 + 订单簿全覆盖
4. 当前排名 #12，月交易量 $4.93M，仍有较大增长空间
