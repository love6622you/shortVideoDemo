# shortVideoDemo
短影音 Demo

【Question】

如果影片想要設計試看功能，請問怎麼設計比較好。
舉例 一個影片長30mins，但試看只能看前 5mins

【Answer】

目前想法有：
1. 替「正在觀看」當下影片來設立 SetTimeout
2. 藉由影片觀看時長阻欄
3. 利用 Socket 實現。假設在 Client 端收到 Server 端 "stopped" 類似的 action 時，即立馬暫停

以上 3 點我認為皆可實現試看功能。但以可靠性、彈性、安全性這幾點來說，我認為透過 Socket 會比較適合。

## 待優化
1. 做 lazyload，預防一次性 render 大量的 video 與 slider。藉由 react-intersection-observer 這個套件實現
2. 利用 immer.js 來完成 immutable 的設置
3. 對於 Request 來說，可利用 React-query 設立 API cache 來減少呼叫 API 的次數。亦或在 axios 的設置上面，實現 cache 功能
4. 需調整手機在上滑時，會有預設的加載動作
