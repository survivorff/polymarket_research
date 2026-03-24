# Polymarket Builder 生态调研项目

> 调研日期：2026-03-24  
> 数据来源：builders.polymarket.com（实测）、各平台官网、GitHub、文档站  
> 官方排行榜实测月交易量总计：**TOP 50 合计 $5亿+**

---

## 目录结构

```
research/
├── 01_betmoar/          # Betmoar.fun — #1, $208.64M/月
├── 02_polycop/          # PolyCop — #2, $53.28M/月
├── 03_polymtrade/       # Polymtrade — #3, $28.44M/月
├── 04_polygun/          # Polygun — #4, $27.71M/月
├── 05_polytrader_pro/   # PolyTraderPro — #5, $18.07M/月
├── 06_stand_trade/      # Stand.trade — #6, $16.53M/月
├── 07_kreo/             # Kreo — #7, $12.83M/月
├── 08_chance/           # Chance Markets — #8, $9.99M/月
├── 09_bullpen/          # Bullpen — #10, $5.86M/月（URL待确认）
├── 10_polymer/          # Polymer — #9, $7.67M/月（URL待确认）
├── 11_jupiter/          # Jupiter — #11, $5.84M/月
├── 12_olympusx/         # Olympusx.app — #12, $4.96M/月
├── 13_evplusai/         # EVplus AI — #13, $3.62M/月
├── 14_polymaker/        # PolyMaker.bet — #14, $3.57M/月
├── 17_polydupe/         # Polydupe — #17, $3.06M/月
├── 19_simmer/           # Simmer Markets — #19, $2.68M/月
├── 23_polymarket_eye/   # Polymarket Eye — #23, $1.94M/月
├── 33_almanac/          # Almanac Market — #33, $1.02M/月
├── 12_rainbow/          # Rainbow Wallet — #25, $1.46M/月
└── summary/
    ├── overview.md      # 全景汇总报告
    └── open_questions.md
```

---

## 完整排行榜（官方实测，2026-03-24）

| 排名 | 项目 | 月交易量 | 调研状态 | 报告 |
|------|------|---------|---------|------|
| #1 | Betmoar.fun | $208.64M | ✅ 完成 | [查看](./01_betmoar/analysis.md) |
| #2 | PolyCop | $53.28M | ✅ 完成 | [查看](./02_polycop/analysis.md) |
| #3 | Polymtrade | $28.44M | ✅ 完成 | [查看](./03_polymtrade/analysis.md) |
| #4 | Polygun | $27.71M | ✅ 完成 | [查看](./04_polygun/analysis.md) |
| #5 | PolyTraderPro | $18.07M | ✅ 完成 | [查看](./05_polytrader_pro/analysis.md) |
| #6 | Stand.trade | $16.53M | ✅ 完成 | [查看](./06_stand_trade/analysis.md) |
| #7 | Kreo | $12.83M | ✅ 完成 | [查看](./07_kreo/analysis.md) |
| #8 | Chance | $9.99M | ✅ 完成 | [查看](./08_chance/analysis.md) |
| #9 | Polymer | $7.67M | ⚠️ URL待确认 | [查看](./10_polymer/analysis.md) |
| #10 | Bullpen | $5.86M | ⚠️ URL待确认 | [查看](./09_bullpen/analysis.md) |
| #11 | Jupiter | $5.84M | ✅ 完成 | [查看](./11_jupiter/analysis.md) |
| #12 | Olympusx.app | $4.96M | ✅ 完成 | [查看](./12_olympusx/analysis.md) |
| #13 | EVplus AI | $3.62M | ✅ 完成（Bot未上线）| [查看](./13_evplusai/analysis.md) |
| #14 | PolyMaker.bet | $3.57M | ✅ 完成 | [查看](./14_polymaker/analysis.md) |
| #15 | Onsight | $3.36M | ⚠️ URL待确认 | — |
| #16 | Polytrader.app | $3.35M | ✅ 含在#5 | [查看](./05_polytrader_pro/analysis.md) |
| #17 | Polydupe | $3.06M | ✅ 完成 | [查看](./17_polydupe/analysis.md) |
| #18 | PolyBot | $2.98M | ⚠️ 待调研 | — |
| #19 | Simmer.Markets | $2.68M | ✅ 完成 | [查看](./19_simmer/analysis.md) |
| #20 | Sharkbetting.com | $2.44M | ⚠️ 连接失败 | — |
| #21 | swaps.xyz | $2.33M | ⚠️ MoonPay跨链API，非PM专属 | — |
| #22 | Polycule | $2.06M | ⚠️ 超时，待确认 | — |
| #23 | Polymarket Eye | $1.94M | ✅ 完成 | [查看](./23_polymarket_eye/analysis.md) |
| #24 | DGPredict | $1.89M | ⚠️ 待调研 | — |
| #25 | Rainbow | $1.46M | ✅ 完成 | [查看](./12_rainbow/analysis.md) |
| #26 | Ask Gina | $1.40M | ⚠️ AI投资组合助手，非PM专属 | — |
| #27 | OkBet | $1.18M | ⚠️ 待调研 | — |
| #28 | fireplace | $1.17M | ⚠️ 待调研 | — |
| #29 | NoArb | $1.15M | ⚠️ 连接失败 | — |
| #30 | PolyHelper.io | $1.09M | ⚠️ 待调研 | — |
| #31 | Tailgate | $1.07M | ⚠️ 待调研 | — |
| #32 | Synthesis.Trade | $1.03M | ⚠️ 待调研 | — |
| #33 | almanac.market | $1.02M | ✅ 完成 | [查看](./33_almanac/analysis.md) |
| #34 | Predex | $924.2k | ⚠️ 待调研 | — |
| #35 | Coinpilot | $879.4k | ⚠️ 待调研 | — |
| #36 | FORS | $826.3k | ⚠️ 待调研 | — |
| #37 | Based | $799.0k | ⚠️ 待调研 | — |
| #38 | Ultramarkets | $693.2k | ⚠️ 待调研 | — |
| #39 | Fortuna | $617.4k | ⚠️ 待调研 | — |
| #40 | Ares | $575.0k | ⚠️ 待调研 | — |
| #41 | DoubleUp | $570.9k | ⚠️ 待调研 | — |
| #42 | PolyCrypto Bot | $520.4k | ⚠️ 待调研 | — |
| #43 | Wen.market | $495.1k | ⚠️ 待调研 | — |
| #44 | Polycool | $477.0k | ⚠️ 待调研 | — |
| #45 | Kiyotaka | $468.1k | ⚠️ 待调研 | — |
| #46 | Bankr | $464.9k | ⚠️ 待调研 | — |
| #47 | SpectraView | $444.1k | ⚠️ 待调研 | — |
| #48 | UnifAI | $301.3k | ⚠️ 待调研 | — |
| #49 | PolyGold.Trade | $291.5k | ⚠️ 待调研 | — |
| #50 | CarbonCopy | $270.9k | ⚠️ 待调研 | — |

---

## 核心发现（TL;DR）

1. **Betmoar 一家独大**：月交易量 $208.64M，占 TOP 10 总量约 50%，Discord 渠道 + 官方认证是核心护城河
2. **渠道决定成败**：Discord Bot（Betmoar）+ Telegram Bot（Polygun）合计占近 50% 交易量
3. **复制交易需求旺盛**：PolyCop / Olympusx / Polydupe 三种模式各有差异化，共同验证这是最大需求
4. **Kreo 是隐藏黑马**：唯一同时接入 Polymarket + Kalshi 的双平台工具，Bonds 做市 + 信息流全覆盖
5. **AI 赛道三方向**：EVplus AI（Hyperliquid多平台）+ Simmer（Agent Economy + ClawHub Skills）+ Almanac（早期预测 Yield 激励）
6. **做市工具快速成熟**：PolyMaker.bet（专业做市，实测 $2,583/day）和 Kreo Bonds 填补做市商工具空白
7. **DeFi 基础设施接入**：Jupiter（Solana DEX + CCTP 跨链）+ Rainbow（以太坊钱包）代表 DeFi → 预测市场趋势
8. **Chance 战略最激进**：从 Polymarket 前端进化为独立 L1 + $PREDICT 代币生态
9. **EVplus Bot 未上线**：排名 #13 但 Polymarket Bot 标注「Soon」，$3.62M 来源存疑
10. **Simmer 双平台最前沿**：同时接入 Polymarket + Kalshi，ClawHub Skills 生态含 8+ 预构建 AI 策略

---

## 赛道分类

### 🤖 Discord/Telegram Bot
| 平台 | 排名 | 月交易量 | 特点 |
|------|------|---------|------|
| Betmoar.fun | #1 | $208.64M | Discord Bot，官方认证 |
| Polygun | #4 | $27.71M | Telegram Bot，BSC 跨链桥 |

### 📊 复制交易
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| PolyCop | #2 | $53.28M | 聪明钱算法，Web |
| Olympusx.app | #12 | $4.96M | 非托管 Privy + 手动交易 + LP |
| Polydupe | #17 | $3.06M | 按比例复制，盈利 2.5% |

### 💻 专业交易终端
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| Polymtrade | #3 | $28.44M | $PM 代币 + 高级图表 |
| PolyTraderPro | #5 | $18.07M | 自托管密钥 + Polytrader.app |
| Stand.trade | #6 | $16.53M | 去中心化聚合交易 |
| Kreo | #7 | $12.83M | Polymarket + Kalshi 双平台 |

### 🎮 前端创新
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| Chance Markets | #8 | $9.99M | 独立 L1 + $PREDICT 代币 |
| Jupiter | #11 | $5.84M | Solana DEX 聚合器，CCTP 跨链 |

### 💧 做市工具
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| PolyMaker.bet | #14 | $3.57M | Bond 机制，实测 $2,583/day |

### 🤖 AI / Agent
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| EVplus AI | #13 | $3.62M | Hyperliquid 套利，PM Bot Soon |
| Simmer Markets | #19 | $2.68M | AI Agent + ClawHub Skills 生态 |
| Almanac Market | #33 | $1.02M | 早期预测 Yield 激励机制 |

### 🔍 数据分析
| 平台 | 排名 | 月交易量 | 差异化 |
|------|------|---------|--------|
| Polymarket Eye | #23 | $1.94M | Sus/Overbet 检测，Whale Watch |

---

## 调研方法

- **Playwright Chromium**：处理 JS 渲染和 Cloudflare 保护的网站
- **官方排行榜实测**：直接抓取 builders.polymarket.com 获取真实排名和交易量
- **子页面深度抓取**：docs、pricing、features 等子页面
- **API 调用**：Polymarket Gamma API、CLOB API

## 调研局限性

**无法定位的平台**（已尝试多种域名组合）：
- Bullpen (#10)、Polymer (#9)：所有猜测域名均失败
- Onsight (#15)、PolyBot (#18)、Polycule (#22)：连接失败或超时
- NoArb (#29)：连接失败

**建议补充方式**：
1. 手动访问 `builders.polymarket.com` 点击排行榜项目链接
2. 在 Telegram/Discord 搜索对应 Bot 