# Tailgate — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#31**  
> 近1月交易量：**$1.07M**  
> 真实 URL：**待确认**

---

## 1. 已确认信息

- Builder Program 排名 **第三十一**，月交易量 **$1.07M**
- 「Tailgate」= 美式足球/体育赛前聚会文化
- 强烈暗示**体育预测市场专属平台**

### 1.1 名称含义
「Tailgate」在美国文化中指体育赛事前在停车场举行的聚会，是体育迷文化的象征：
- **体育预测专区**：NFL/NBA/MLB/NHL 等
- **社区氛围**：朋友间的预测竞猜
- **赛前分析**：赛前数据和预测

---

## 2. 推断定位

```mermaid
graph TD
    A[体育迷用户] --> B[Tailgate]
    B --> C{体育预测功能}
    C --> C1[NFL 赛事预测]
    C --> C2[NBA 预测]
    C --> C3[MLB/NHL]
    C --> C4[社区讨论]
    C --> D[Polymarket CLOB API]
```

---

## 3. 用户体验路径（推断）

### 2.0 注册、入金、交易、提现全流程（推断）

#### 2.0.1 注册流程

```mermaid
flowchart TD
    A[访问 Tailgate] --> B[创建账户]
    B --> C[选择喜爱球队/联赛]
    C --> D[进入体育预测界面]
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[充值] --> B[信用卡或 USDC]
    B --> C[到账可投注]
```

#### 2.0.3 体育预测交易流程

```mermaid
flowchart TD
    A[查看今日赛程] --> B[选择比赛]
    B --> C[选择 Spread/Total/Moneyline]
    C --> D[输入金额]
    D --> E[Polymarket CLOB 成交]
    E --> F[等待比赛结果]
```

#### 2.0.4 提现流程

```mermaid
flowchart TD
    A[提现] --> B[输入地址]
    B --> C[USDC 到账]
```

#### 2.0.5 结算流程

```mermaid
flowchart TD
    A[比赛结束] --> B[Polymarket Oracle 解析]
    B --> C[胜者获得结算]
    C --> D[社区分享战绩]
```

---

## 4. 待确认问题

- [ ] 真实网址
- [ ] 是否专注体育类预测市场
- [ ] 是否有社区/讨论功能
- [ ] 是否支持 Parlay（过关）投注
- [ ] 与 Olympusx Sports 模块的差异化
- [ ] 团队背景

---

## 5. 总结

Tailgate 以 **$1.07M/月**（#31）运营，名称强烈暗示体育预测市场专属平台，与美式体育文化深度绑定。
