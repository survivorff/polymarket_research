# Polymarket Builder 生态调研项目

> 调研日期：2026-03-24  
> 数据来源：builders.polymarket.com、各平台官网、GitHub、文档站  

---

## 目录结构

```
research/
├── 01_betmoar/          # Betmoar.fun — #1, $208M/月
│   └── analysis.md
├── 02_polycop/          # PolyCop — #2, $52.9M/月
│   └── analysis.md
├── 03_polymtrade/       # Polymtrade — #3, $28.3M/月
│   └── analysis.md
├── 04_polygun/          # Polygun — #4, $27.4M/月
│   └── analysis.md
├── 05_polytrader_pro/   # PolyTraderPro + Polytrader.app — #5/#15
│   └── analysis.md
├── 06_stand_trade/      # Stand.trade — #6, $16.5M/月
│   └── analysis.md
├── 07_kreo/             # Kreo — #7, $12.7M/月
│   └── analysis.md
├── 08_chance/           # Chance Markets — #8, $10M/月
│   └── analysis.md
├── 09_bullpen/          # Bullpen — #10, $5.86M/月
│   └── analysis.md
├── 10_polymer/          # Polymer — #9, $7.65M/月
│   └── analysis.md
├── 11_jupiter/          # Jupiter — #11, $5.82M/月
│   └── analysis.md
├── 12_rainbow/          # Rainbow Wallet — #25, $1.46M/月
│   └── analysis.md
└── summary/
    ├── overview.md      # 全景汇总报告
    └── open_questions.md # 待确认问题清单
```

---

## 快速导航

### 完整调研报告
| 项目 | 排名 | 月交易量 | 类型 | 报告 |
|------|------|---------|------|------|
| Betmoar.fun | #1 | $208M | Discord Bot + 终端 | [查看](./01_betmoar/analysis.md) |
| PolyCop | #2 | $52.9M | Web 复制交易 | [查看](./02_polycop/analysis.md) |
| Polymtrade | #3 | $28.3M | 专业终端 | [查看](./03_polymtrade/analysis.md) |
| Polygun | #4 | $27.4M | Telegram Bot | [查看](./04_polygun/analysis.md) |
| PolyTraderPro/app | #5/#15 | $21.3M | 自托管终端 | [查看](./05_polytrader_pro/analysis.md) |
| Stand.trade | #6 | $16.5M | Web 平台（Cloudflare保护，待手动补充）| [查看](./06_stand_trade/analysis.md) |
| Kreo (kreo.app) | #7 | $12.7M | 多平台信息流+钱包追踪+做市+Bonds | [查看](./07_kreo/analysis.md) |
| Chance Markets | #8 | $10M | 前端+L1+代币生态 | [查看](./08_chance/analysis.md) |
| Bullpen | #10 | $5.86M | 待确认（域名未找到）| [查看](./09_bullpen/analysis.md) |
| Polymer | #9 | $7.65M | 待确认（域名未找到）| [查看](./10_polymer/analysis.md) |
| Jupiter | #11 | $5.82M | Solana DEX 聚合器 | [查看](./11_jupiter/analysis.md) |
| Olympusx.app | #12 | $4.93M | 非托管复制交易+手动终端 | [查看](./12_olympusx/analysis.md) |
| EVplus AI | #13 | $3.61M | AI多平台交易终端 | [查看](./13_evplusai/analysis.md) |
| PolyMaker.bet | #14 | $3.54M | 做市商工具+Bond APR | [查看](./14_polymaker/analysis.md) |
| Polydupe | #17 | $3.06M | 非托管复制交易（盈利2.5%）| [查看](./17_polydupe/analysis.md) |
| Simmer Markets | #19 | $2.66M | AI Agent预测市场基础设施 | [查看](./19_simmer/analysis.md) |
| Polymarket Eye | #23 | $1.94M | 链上数据分析+Sus检测 | [查看](./23_polymarket_eye/analysis.md) |
| Rainbow Wallet | #25 | $1.46M | 以太坊钱包集成 | [查看](./12_rainbow/analysis.md) |
| Almanac Market | #33 | $1.02M | 早期预测Yield激励机制 | [查看](./33_almanac/analysis.md) |

### 汇总文档
- [全景汇总报告](./summary/overview.md) — 生态总览、赛道对比、趋势分析、市场机会
- [待确认问题清单](./summary/open_questions.md) — 所有待补充信息的完整列表

---

## 核心发现（TL;DR）

1. **Betmoar 一家独大**：月交易量 $208M，占 TOP 12 总量约 40%，Discord 渠道 + 官方认证是核心护城河
2. **渠道决定成败**：Discord Bot（Betmoar）+ Telegram Bot（Polygun）合计占近 50% 交易量
3. **复制交易需求旺盛**：PolyCop/Olympusx/Polydupe 三种不同模式证明这是最大需求
4. **Kreo 是隐藏黑马**：真实域名 kreo.app，唯一同时接入 Polymarket+Kalshi 的双平台工具
5. **AI 赛道崛起**：EVplusAI（多平台）+ Simmer（Agent Economy）+ Almanac（早期预测激励）代表三个方向
6. **做市工具空白被填补**：PolyMaker.bet 和 Kreo Bonds 都在做 Polymarket 做市自动化
7. **DeFi 基础设施接入**：Jupiter（Solana）+ Rainbow（钱包）+ swaps.xyz（MoonPay跨链）代表新趋势
8. **Chance 战略最激进**：计划从 Polymarket 前端成长为独立 L1 预测市场生态

---

## 调研方法

- **自动化抓取**：curl + Python 解析各平台首页内容
- **Playwright Chromium**：处理 JS 渲染和 Cloudflare 保护的网站（已安装在 node_modules/）
- **API 调用**：Polymarket 官方 API、GitHub Search API
- **官方文档**：docs.polymarket.com、builders.polymarket.com
- **局限性**：Bullpen/Polymer/Onsight/PolyBot/Polycule 等平台域名无法通过猜测找到，可能是纯 Bot 产品。详见 [limitations.md](./summary/limitations.md)

---

## 调研局限性

**无法定位的平台**（已尝试 50+ 域名组合）：Bullpen (#10)、Polymer (#9)、Onsight (#16)、PolyBot (#18)、Polycule (#22)。

**建议补充方式**：
1. 手动访问 `builders.polymarket.com` 点击排行榜项目链接
2. 在 Telegram 搜索对应 Bot 名称
3. 在 Polymarket 官方 Discord 询问

---

## 后续调研计划

- [ ] 在 builders.polymarket.com 找到 Bullpen、Polymer 等真实 URL
- [ ] 实际测试 Betmoar Discord Bot 交易流程（加入官方 Discord）
- [ ] 查询 $PREDICT (Chance) 和 $PM (Polymtrade) 代币链上数据
- [ ] 加入 Kreo Telegram、Simmer、Almanac Discord 获取内部信息
- [ ] 联系部分团队进行深度访谈

---

## 后续调研计划

- [ ] 手动访问 Stand.trade、Kreo、Polymtrade、Bullpen、Polymer 补充功能分析
- [ ] 调研 Olympusx.app、EVplusAI、Simmer.Markets 等未调研平台
- [ ] 实际测试 Betmoar Discord Bot 和 Polygun Telegram Bot 的交易流程
- [ ] 查询 $PREDICT 代币链上数据（Chance Markets）
- [ ] 加入各平台 Discord 获取更多内部信息
- [ ] 联系部分团队进行深度访谈
