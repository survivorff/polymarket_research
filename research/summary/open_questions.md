# 待确认问题汇总清单

> 本文件记录调研过程中无法通过自动化手段获取、需要手动确认的问题。  
> 状态：🔲 未确认 / ✅ 已确认 / ⚠️ 部分确认

---

## 一、通用问题（适用于所有平台）

- 🔲 **Polymarket Builder Fee 实际费率**：官方文档未明确，估算为 0.5%，实际值影响所有收入测算
- 🔲 **Builder Fee 分成机制**：Polymarket 与 Builder 如何结算？每笔交易实时分成还是月结？
- 🔲 **各平台月活用户数（MAU）**：交易量已知，但用户数量均未披露
- 🔲 **Builder Program 申请条件**：需要满足什么条件才能进入 leaderboard？
- 🔲 **Polymarket 是否对 Builder 有地理限制**：部分国家用户是否被限制？

---

## 二、Betmoar (#1, $208M)

- 🔲 Builder Fee 具体费率？与 Polymarket 的分成比例？
- 🔲 Discord Bot 的钱包托管方案？用户私钥如何保管？
- 🔲 Premium 订阅是否存在？定价如何？
- 🔲 首页「0 Trading Volume」等数字为何显示为0？JS 动态加载？
- 🔲 100+ Partner Discord Servers 具体列表？
- 🔲 TTS 功能是浏览器原生还是云端服务？
- 🔲 团队规模和融资情况？注册地：Betmoar Innovation Limited
- 🔲 UMA 分析功能的数据来源和更新频率？

---

## 三、PolyCop (#2, $52.9M)

- 🔲 钱包托管机制？用户资金是否存入 PolyCop 托管钱包？
- 🔲 Smart Money 识别算法的具体指标（胜率阈值、交易频率、盈利稳定性权重？）
- 🔲 跟单延迟实测数据（从聪明钱成交到镜像执行的毫秒数）？
- 🔲 是否有反套利保护（防止某些「聪明钱」故意制造跟单信号操纵市场）？
- 🔲 复制交易服务费是多少（除 Builder Fee 外）？
- 🔲 团队背景和融资情况？
- 🔲 是否支持部分止损、最大亏损限制等风控功能？

---

## 四、Polymtrade (#3, $28.3M)

- 🔲 具体提供哪些差异化功能？（网站 JS 渲染，无法直接获取，需手动访问）
- 🔲 是否支持限价单、止损单等高级订单类型？
- 🔲 是否有移动端支持？
- 🔲 Builder Fee 具体费率？
- 🔲 团队背景？是否开源？
- 🔲 与 Polytrader.app 是否有关联？

---

## 五、Polygun (#4, $27.4M)

- 🔲 用户私钥的保管方式？加密存储在哪里？导出流程？
- 🔲 跨链桥使用的是哪个协议？（Stargate/Wormhole/自建？）
- 🔲 限价单的实现方式：轮询 vs WebSocket 监听？
- 🔲 Smart Wallets 榜单的评分算法细节？
- 🔲 100+ 合作项目具体是哪些？合作方式？
- 🔲 团队规模、融资情况？
- 🔲 日活用户数量？
- 🔲 1% 手续费是双向收取（买+卖各1%）还是单次交易收1%？

---

## 六、PolyTraderPro (#5, $18M) & Polytrader.app (#15, $3.35M)

- 🔲 两者是否为同一团队？区别是什么？
- 🔲 PolyTraderPro 的实际访问网址？
- 🔲 是否计划支持移动端？
- 🔲 Top Holders 数据是链上实时抓取还是缓存？更新频率？
- 🔲 Sell Order Tolerance 功能的具体用途和适用场景？
- 🔲 是否提供 API 服务给机构用户？
- 🔲 团队背景、规模？

---

## 七、Stand.trade (#6, $16.5M)

- 🔲 **核心产品功能是什么？** — 需手动访问（Cloudflare 保护）
- 🔲 自托管还是托管式？
- 🔲 与其他专业终端的差异化？
- 🔲 为何使用 Cloudflare 保护？
- 🔲 目标用户群体？
- 🔲 社媒账号？团队背景？

---

## 八、Kreo (#7, $12.7M)

- 🔲 **核心产品是什么？** — 需手动访问
- 🔲 是交易终端、分析工具还是 Bot？
- 🔲 目标用户群体？
- 🔲 社媒账号（Twitter/X）？
- 🔲 团队背景、融资情况？

---

## 八、Kreo (#7, $12.7M)

- ✅ **真实域名**：已确认为 **kreo.app**（非 kreo.trade）
- ✅ **核心产品**：多平台信息流（Polymarket+Kalshi）+ 钱包追踪 + Bonds 做市 + 提醒系统
- ✅ **登录方式**：Telegram OAuth（@KreoMainBot）+ Privy 嵌入式钱包
- ✅ **技术栈**：Next.js + Privy + Helius RPC（Solana）+ WalletConnect
- ✅ **多平台**：唯一同时接入 Polymarket + Kalshi 的 Builder
- 🔲 Bonds 的具体 APR 范围和做市策略？
- 🔲 分级制度（Bronze/Silver/Gold）的门槛和具体返佣率？
- 🔲 X Feed 数据来源（官方 API 还是第三方聚合）？
- 🔲 团队背景？

---

## 九、Chance Markets (#8, $10M)

- 🔲 Chance Chain L1 的技术方案（Cosmos SDK/OP Stack/自研？）
- 🔲 $PREDICT 代币当前市值、流通量、合约地址？
- 🔲 Chance Oracle 的设计原理？与 UMA 有何不同？
- 🔲 团队背景和融资情况？
- 🔲 Chance Chain 上线时间表？
- 🔲 GitBook 文档详细内容？

---

## 十、Polymer (#9, $7.65M)

- 🔲 实际网址是什么？
- 🔲 与 Polymer Protocol（跨链互操作）有关联吗？
- 🔲 核心产品功能？
- 🔲 目标用户：交易者还是做市商？

---

## 十一、Bullpen (#10, $5.86M)

- 🔲 实际网址是什么？
- 🔲 核心产品是什么？是否专注体育类预测市场？
- 🔲 目标用户群体？
- 🔲 团队背景？

---

## 十二、Jupiter (#11, $5.82M)

- 🔲 使用哪种跨链方案连接 Solana 和 Polygon？（Circle CCTP / Wormhole？）
- 🔲 Polymarket 集成在 Jupiter 的哪个入口/页面？
- 🔲 用户是否需要额外 KYC？
- 🔲 是否也接入了 Kalshi 等其他预测市场？
- 🔲 月交易量 $5.82M 中 Solana 用户占比多少？

---

## 十三、Rainbow Wallet (#25, $1.46M)

- 🔲 集成形式？（内嵌 WebView vs 原生组件）
- 🔲 在 Rainbow App 哪个版本/入口可以访问 Polymarket？
- 🔲 是否有针对预测市场的专属 UI？
- 🔲 是否仅限 Polygon 链？
- 🔲 月交易量增长趋势？

---

## 十四、新增完整调研平台

### Olympusx.app (#12, $4.93M) — ✅ 已完整调研
- 非托管复制交易（Privy MPC 钱包）+ 手动交易终端
- 费率：免费版 0.01-0.75%，订阅版 0.003-0.23%（业内最低）
- [ ] 订阅具体月费？
- [ ] Privy 钱包可否导出助记词？

### EVplus AI (#13, $3.61M) — ✅ 已完整调研
- AI 驱动多平台终端（Hyperliquid + Polymarket + DEX）
- 功能：自动交易 + 套利 + 手动交易 + Polymarket Bot + 空投农场
- [ ] Polymarket Bot 具体策略类型？
- [ ] AI 信号准确率？
- [ ] 订阅定价？

### PolyMaker.bet (#14, $3.54M) — ✅ 已完整调研
- **唯一做市商工具**，填补 Builder 生态空白
- Bond 机制：质押 USDC → 自动做市 → APR 收益
- 排序功能：$/day、Est. APR、帮助做市商优化资本配置
- v1.7.9 说明产品成熟
- [ ] Bond 当前实际 APR？
- [ ] 做市算法参数是否可自定义？
- [ ] PolyMaker 收取的管理费/分成比例？

### Polydupe (#17, $3.06M) — ✅ 已完整调研
- 非托管复制交易，商业模式创新：**只赚钱才收费（盈利2.5%）**
- Conviction-based 复制：按风险暴露比例而非绝对金额
- Insiders 功能追踪信息优势者
- 30% 推荐返佣 + Data API 开放
- [ ] Insiders 如何识别？
- [ ] 卡/银行入金的 on-ramp 合作方？

### Simmer Markets (#19, $2.66M) — ✅ 已完整调研
- **「Prediction Markets for AI Agents」**，最前沿定位
- Skills 市场 + Season 竞赛机制
- [ ] Skills 具体是什么？如何创建？
- [ ] Season 1 规则和奖励？
- [ ] 是否开源？

### Polymarket Eye (#23, $1.94M) — ✅ 已完整调研
- 最完整的链上数据分析平台，10+ 分析模块
- Sus/Overbet 检测、Whale Watch、X Leaderboard、Geo Map
- [ ] Overbet 的具体判断标准？
- [ ] Geo Map 数据来源？
- [ ] Premium 订阅定价？

### Almanac Market (#33, $1.02M) — ✅ 已完整调研
- **机制设计最创新**：Yield 路由激励早期准确预测
- 研究支撑：1.24 亿笔 Polymarket 交易数据分析
- [ ] Yield 路由的链上/链下实现方式？
- [ ] Yield 资金来源？
- [ ] Beta Terminal 实际功能？

---

## 十五、仍需手动确认的关键项目

| 项目 | 原因 | 优先级 |
|------|------|--------|
| **Stand.trade** (#6, $16.5M) | Cloudflare 403，需浏览器访问 | 🔴 高 |
| **Bullpen** (#10, $5.86M) | 真实域名未找到 | 🔴 高 |
| **Polymer** (#9, $7.65M) | 真实域名未找到 | 🔴 高 |
| **Onsight** (#16, $3.35M) | 未调研 | 🟡 中 |
| **PolyBot** (#18, $2.97M) | 未调研 | 🟡 中 |
| **Polycule** (#22, $2.06M) | 未调研 | 🟡 中 |
| **DGPredict** (#24, $1.88M) | 未调研 | 🟡 中 |

**建议**：在 `builders.polymarket.com` 排行榜页面，右键点击各项目名称查看链接，即可获取真实 URL。

---

## 补充方式建议

1. **手动访问**：Stand.trade、Kreo、Polymtrade — 在浏览器中直接访问查看功能
2. **Discord 加入**：Betmoar、Polygun、Chance 等均有 Discord，加入后可获得更多信息
3. **X/Twitter 搜索**：搜索各项目名称，找到官方账号查看动态
4. **实际交易测试**：充值少量 USDC 到各平台，测试实际交易体验
5. **GitBook/文档**：Chance 有 GitBook，可查阅技术文档
6. **DEX Screener**：查询 $PREDICT 等代币的链上数据
