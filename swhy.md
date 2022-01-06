#### 2.2.9 客户中心

##### 模块功能说明
客户中心包含客户列表，客群列表，客户统计，关注客户等模块，通过对接用户数据，做相对应的列表人员统计及数据展示

##### 模块设计思路
1. 入参数和出参

    暂无

2. 模块包含哪些子模块

   * 客户列表页：
    
        展示当前用户的企微客户列表，可添加客户列表，内部客户列表。

   * 客群列表页：
    
        展示当前用户的所在的客群列表

   * 客户统计页：
    
        展示当前用户的客户数据统计信息

   * 关注客户列表：
    
        展示当前用户的关注客户列表


3. 各个子模块是如何通信交互的

    列表页在前端路由中带上详情页所需参数

4. 重要方法，变量，数据，组件的说明

   > 页面组件结构设计示意图
    ```
    // src/pages/employee-board
    pages
    ├── customerCenter 客户中心
    │   ├── components
    │   │   └── cust-list.vue
    │   │   └── router-box.vue
    │   │   └── semiCircle.vue
    │   └── index.vue
    ├── customerList 客户列表
    │   ├── components
    │   │   └── filter-popover.vue
    │   │   └── simple-cust-card.vue
    │   ├── insideList 内部客户列表
    │   │    └── index.vue
    │   ├── intendedList 可添加客户列表
    │   │    └── index.vue
    │   ├── wxworkList 企微客户列表
    │   │    └── index.vue
    │   └── index.vue
    ├── custStatistics 客户统计
    │   ├── components
    │   │   └── barChart.vue
    │   │   └── cardHeader.vue
    │   │   └── cardItem.vue
    │   │   └── semiCircle.vue
    │   │   └── statisticCard.vue
    │   │   └── statisticCharts.vue
    │   └── index.vue
    ```

<br/><br/>

#### 2.2.10 客户动态

##### 模块功能说明
客户动态包含客户动态列表，客户动态详情，新增客户列表。数据来源为客户操作了（转发，浏览，点赞...）当前用户分享出去的内容所产生的数据

##### 模块设计思路
1. 入参数和出参

    客户动态详情入参为前端url传入参数，如果入口为群成员动态，则会传入群id筛选群成员动态

2. 模块包含哪些子模块

   * 客户动态列表页：
    
        展示当前用户的客户动态列表

   * 客户动态详情页：
    
        展示当前用户的客户动态列表详情，及该动态引发的其他客户的浏览记录列表

   * 新增客户列表页：
    
        展示当前用户新增客户的动态列表


3. 各个子模块是如何通信交互的

    列表页在前端路由中带上详情页所需参数

4. 重要方法，变量，数据，组件的说明

    > 页面组件结构设计示意图
      ```
      // src/pages/customer-dynamic
      ├── components
      │   └── excavate-customer.vue
      │   └── list_details.vue
      │   └── list.vue
      ├── business-opportunity 客户动态列表
      │   └── index.vue
      ├── business-details 客户动态详情
      │   └── index.vue
      ├── new-customer-list 新增客户列表
      │   ├── components
      │   │   └── customer-item.vue
      │   └── index.vue
      ```

    > 重要组件

      1. list.vue

      |组件说明|单项客户动态列表卡片|
      |:--:|:--:|
      |组件功能|展示客户信息，客户浏览、点赞、转发或留下手机号码的动态内容，以及感兴趣程度|
      |组件入参|onceData：单个卡片的内容数据；currentInfo：当前用户信息|
      |组件暴露方法|showShareLink：展示用户分享链|

      2. excavate-customer.vue

      |组件说明|客户动态分享链大于等于3时，展示客户分享的相关客户链路|
      |:--:|:--:|
      |组件功能|展示参与分享的客户的个人信息，转发顺序等|
      |组件入参|excavateShow：弹窗显示控制；lineInfo：组件数据来源；userInfo：当前用户信息|
      |组件暴露方法|暂无|

    <br/>

<br/><br/>

#### 2.2.11 群画像

##### 模块功能说明
展示客户群列表，群主页详情，可在列表打开群聊，群成员分类明细，成员数据图表展示，及相对应群聊的成员动态

##### 模块设计思路
1. 入参数和出参

    群主页详情通过前端url传入群id

2. 模块包含哪些子模块

   * 客户群列表页：
    
        展示当前用户所在的客户群列表

   * 群主页详情页：
    
        展示当前群聊的详情页，详情页包含群成员明细列表，群成员动态，群成员数据统计等


3. 各个子模块是如何通信交互的

    列表页在前端路由中带上详情页所需参数

4. 重要方法，变量，数据，组件的说明

   > 页面组件结构设计示意图
    ```
    // src/pages/group-portrait
    ├── index 群主页详情
    │   ├── member-detail
    │   │   ├── components
    │   │   │   └── customer-item.vue
    │   │   └── index.vue
    │   ├── member-dynamic
    │   │   ├── components
    │   │   │   └── avatar-banner.vue
    │   │   │   └── dynamic-card.vue
    │   │   └── index.vue
    │   ├── member-statistics
    │   │   ├── components
    │   │   │   └── chart.vue
    │   │   │   └── chartOptions.js
    │   │   └── index.vue
    │   └── index.vue
    └── layout.vue 入口文件
    ```

<br/><br/>