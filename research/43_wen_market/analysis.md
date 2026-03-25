# Wen.market — 深度分析报告

> 数据日期：2026-03-24  
> Polymarket Builder Program 排名：**#43**  
> 近1月交易量：**$495.1k**

---

## 1. 概况

- 排名 **#43**，月交易量 **$495.1k**
- 「Wen」= 加密社区流行语，询问「什么时候？」（When？）
- 可能专注于**时间类预测市场**：「X 何时发生？」
- 示例：「BTC 何时突破 $100k？」「ETH 合并何时完成？」

---

## 2. 推断定位

```mermaid
graph TD
    A[用户] --> B[Wen.market]
    B --> C[时间预测市场]
    C --> C1[X 何时发生?]
    C --> C2[事件时间线预测]
    C --> D[Polymarket CLOB]
```

---

## 3. 用户流程（推断）

### 2.0 核心 UX 路径

#### 2.0.1 注册流程

```mermaid
flowchart TD
    A[访问 wen.market] --> B[连接钱包]
    B --> C[进入时间预测界面]
```

#### 2.0.2 入金流程

```mermaid
flowchart TD
    A[充值 USDC] --> B[Polygon 到账]
```

#### 2.0.3 时间预测交易流程

```mermaid
flowchart TD
    A[浏览 Wen 市场] --> B[如 Wen BTC 100k?]
    B --> C[选择时间区间]
    C --> D[下注 YES/NO]
    D --> E[CLOB 成交]
```

#### 2.0.4 提现流程

```mermaid
flowchart TD
    A[提现] --> B[USDC 到账]
```

#### 2.0.5 结算流程

```mermaid
flowchart TD
    A[时间到期] --> B[判断事件是否发生]
    B --> C[Oracle 结算]
    C --> D[收益到账]
```

---

## 3. 待确认问题

- [ ] wen.market 实际内容
- [ ] 是否专注时间类预测
- [ ] 团队背景

## 4. 总结

Wen.market 月交易量 **$495.1k**（#43），「Wen」语义暗示时间预测专属平台，在加密社区有文化共鸣。
