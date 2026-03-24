# Polymarket Builder 生态深度调研

> **持续更新中** | 调研启动：2026-03-24 | 数据来源：builders.polymarket.com、各平台官网、链上数据、官方文档

本项目对 **Polymarket Builder Program** 生态内的主要第三方平台进行系统性深度调研，涵盖市场情况、业务架构、技术架构、用户体验路径、核心功能与交易技术壁垒、商业模式等维度，所有图表使用 Mermaid 绘制。

---

## 📊 当前覆盖（19 个平台）

| 排名 | 项目 | 月交易量 | 类型 | 状态 |
|------|------|---------|------|------|
| #1 | [Betmoar.fun](./research/01_betmoar/analysis.md) | $208M | Discord Bot + Web 终端 | ✅ 深度完成 |
| #2 | [PolyCop](./research/02_polycop/analysis.md) | $52.9M | Web 复制交易 dApp | ✅ 深度完成 |
| #3 | [Polymtrade](./research/03_polymtrade/analysis.md) | $28.3M | 移动端优先终端（iOS/Android）| ✅ 深度完成 |
| #4 | [Polygun](./research/04_polygun/analysis.md) | $27.4M | Telegram Bot | ✅ 完成（官网下线）|
| #5/#15 | [PolyTraderPro / Polytrader.app](./research/05_polytrader_pro/analysis.md) | $21.3M | 桌面客户端 + Web 终端 | ✅ 深度完成 |
| #6 | [Stand.trade](./research/06_stand_trade/analysis.md) | $16.5M | 综合 Web 平台 | ✅ 深度完成 |
| #7 | [Kreo](./research/07_kreo/analysis.md) | $12.7M | 多平台信息流 + 做市工具 | ✅ 深度完成 |
| #8 | [Chance Markets](./research/08_chance/analysis.md) | $10M | Avalanche 独立预测市场 | ✅ 深度完成 |
| #9 | [Polymer](./research/10_polymer/analysis.md) | $7.65M | 待确认 | 🔍 调研中 |
| #10 | [Bullpen](./research/09_bullpen/analysis.md) | $5.86M | 待确认 | 🔍 调研中 |
| #11 | [Jupiter](./research/11_jupiter/analysis.md) | $5.82M | Solana DEX 聚合器 | ✅ 完成 |
| #12 | [Olympusx.app](./research/12_olympusx/analysis.md) | $4.93M | 非托管复制交易 + 手动终端 | ✅ 完成 |
| #13 | [EVplus AI](./research/13_evplusai/analysis.md) | $3.61M | AI 多平台交易终端 | ✅ 完成 |
| #14 | [PolyMaker.bet](./research/14_polymaker/analysis.md) | $3.54M | 做市商工具 + Bond APR | ✅ 完成 |
| #17 | [Polydupe](./research/17_polydupe/analysis.md) | $3.06M | 非托管复制交易（盈利2.5%）| ✅ 完成 |
| #19 | [Simmer Markets](./research/19_simmer/analysis.md) | $2.66M | AI Agent 预测市场基础设施 | ✅ 完成 |
| #23 | [Polymarket Eye](./research/23_polymarket_eye/analysis.md) | $1.94M | 链上数据分析 + Sus 检测 | ✅ 完成 |
| #25 | [Rainbow Wallet](./research/12_rainbow/analysis.md) | $1.46M | 以太坊钱包集成 | ✅ 完成 |
| #33 | [Almanac Market](./research/33_almanac/analysis.md) | $1.02M | 早期预测 Yield 激励机制 | ✅ 完成 |

**未定位平台**（尝试 50+ 域名组合仍无法找到）：Onsight (#16)、PolyBot (#18)、Polycule (#22) 等——可能是纯 Bot 或内部工具。

---

## 🗂️ 目录结构

```
polymarket_research/
├── README.md                    ← 本文件
└── research/
    ├── README.md                ← 调研总览与快速导航
    ├── 01_betmoar/
    │   └── analysis.md
    ├── 02_polycop/
    │   └── analysis.md
    ├── 03_polymtrade/
    │   └── analysis.md
    ├── 04_polygun/
    │   └── analysis.md
    ├── 05_polytrader_pro/
    │   └── analysis.md
    ├── 06_stand_trade/
    │   └── analysis.md
    ├── 07_kreo/
    │   └── analysis.md
    ├── 08_chance/
    │   └── analysis.md
    ├── 09_bullpen/
    │   └── analysis.md
    ├── 10_polymer/
    │   └── analysis.md
    ├── 11_jupiter/
    │   └── analysis.md
    ├── 12_olympusx/
    │   └── analysis.md
    ├── 12_rainbow/
    │   └── analysis.md
    ├── 13_evplusai/
    │   └── analysis.md
    ├── 14_polymaker/
    │   └── analysis.md
    ├── 17_polydupe/
    │   └── analysis.md
    ├── 19_simmer/
    │   └── analysis.md
    ├── 23_polymarket_eye/
    │   └── analysis.md
    ├── 33_almanac/
    │   └── analysis.md
    └── summary/
        ├── overview.md          ← 全景汇总报告
        ├── open_questions.md    ← 待确认问题清单
        └── limitations.md      ← 调研局限性说明
```

---

## 🔍 核心发现（TL;DR）

1. **Betmoar 一家独大**：月交易量 $208M，占 TOP 生态约 40%。Discord 渠道 + Polymarket 官方认证是核心护城河，累计交易量超 **$21.6 亿**。

2. **渠道决定成败**：Discord Bot（Betmoar $208M）+ Telegram Bot（Polygun $27.4M）合计占近 50% 份额，证明「嵌入用户已在的平台」比「新建平台」更有效。

3. **复制交易需求最旺盛**：PolyCop（纯客户端/0.05%盈利费）、Polygun（Telegram/1%全量）、Olympusx（非托管/免费）、Polydupe（非托管/2.5%盈利）——四种模式共存，说明跟单交易是最大的用户需求。

4. **Kreo 是隐藏黑马**：真实域名 kreo.app，唯一同时接入 Polymarket + Kalshi 双平台，具备信息流 + 钱包追踪 + 做市 + 分级奖励完整工具链。

5. **Polymtrade 被严重低估**：唯一有原生 iOS + Android App 的 Builder，3 人中欧团队，$PM 通缩代币模型（费用 100% 回购销毁），路线图极为完整。

6. **PolyTraderPro 是桌面客户端**（非 Web），支持 Mac/Windows/Linux，5x 速度提升，需购买 License，已有 $2M+ 盈利用户背书。

7. **AI 赛道三方向**：EVplusAI（多平台 AI 交易终端）、Simmer（AI Agent 自主交易经济）、Almanac（早期预测 Yield 激励）代表三个不同切入点。

8. **Chance Markets 与 Polymarket 无关**：是基于 Avalanche C Chain 的独立 UP/DOWN 价格预测平台（PancakeSwap v2 Fork），计划自建 L1 公链。

---

## 📋 每份报告包含的内容

每个平台的 `analysis.md` 包含以下标准化章节：

- **市场情况**：定位、市场规模、竞争格局
- **用户体验路径**：完整 Journey Map + 关键操作 Mermaid 流程图
- **业务架构**：核心模块 Mermaid 架构图
- **技术架构**：技术栈、数据流、关键 API 端点
- **核心功能与交易技术壁垒**：功能详解 + 壁垒评分表
- **商业模式**：收入来源 + 收入测算 + 商业画布
- **待确认问题**：明确标注哪些是推测、哪些待验证
- **总结**：一段话核心判断

---

## 🛠️ 调研方法

| 方法 | 用途 |
|------|------|
| Playwright Chromium | JS 渲染页面、Cloudflare 保护网站、动态加载内容 |
| curl + Python | 快速 API 调用、静态页面解析 |
| DexScreener / CoinGecko API | 代币实时价格、市值、流动性数据 |
| Wayback Machine CDX API | 已下线平台的历史页面 |
| 官方文档站 | docs.polym.trade、docs.chance.markets 等 |
| Polymarket CLOB API | 验证平台实际接入方式 |

---

## ⚠️ 局限性说明

- 部分平台（Polymer、Bullpen、Onsight 等）无法通过域名猜测定位，可能是纯 Telegram/Discord Bot
- 首页 JS 动态加载的数字（如 Betmoar 的社区数量）显示为 0，无法爬取真实值
- 商业模式中的收入数字均为根据 Builder Fee 估算，实际协议条款不公开
- 部分平台（Polygun）在调研期间官网已下线，数据来自 Polymarket 官方 Builder 排行榜

详见 [limitations.md](./research/summary/limitations.md)

---

## 🔄 更新日志

| 日期 | 更新内容 |
|------|----------|
| 2026-03-24 | 初始版本：完成 19 个平台调研，TOP 8 深度报告含完整 Mermaid UX 路径图 |

---

## 🚀 后续计划

- [ ] 补充 Polymer (#9)、Bullpen (#10) 真实产品信息
- [ ] 完善 Polygun (#4) 报告（官网已下线，需通过 Telegram 直接测试）
- [ ] $PM (Polymtrade) 和 $PREDICT (Chance) 代币实时市值数据
- [ ] Stand.trade Octobox 和 Pulse 功能深度实测
- [ ] Kreo Bonds 做市 APR 实测数据
- [ ] 各平台 Builder Fee 实际费率确认
- [ ] 实际测试 Betmoar Discord Bot 完整交易流程
- [ ] 新增平台持续跟踪（builders.polymarket.com 排行榜变化）

---

## 📄 License

MIT — 调研内容仅供参考，不构成投资建议。
