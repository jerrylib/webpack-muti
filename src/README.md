# rp-service说明文档
## 1.git路径
> https://github.com/jerrylib/webpack-muti.git
## 2.wiki
### 目录

-------------------------------------------------------------------------------

[TOC]

#### addValue(key,value)

> this is description

##### Arguments
- **key** (string) the string key value
- **value** (*) input obj

##### Return
- null

##### Example 
``` python
import {addValue,getValue} from 'rp-service'
addValue('test',123);
// => getValue('test') => 123

```

#### getValue(key)
##### Arguments
- **key** the string key value

##### Return
- (*)

##### Example
``` python
import {addValue,getValue} from 'rp-service'
addValue('test',123);
// => getValue('test') => 123

```

#### initTree(datas,options)
##### Arguments
- **datas** (array)data build tree
- **options** (*)options for build tree
    - **childrenKey** (string)
    - **parentKey** (string)
    - **itemIdentifier** (string)
    - **rootSniffer** (function)

##### Return
- (array)

##### Example
``` python
    var nodes = [{id: 1,parent_id: 'ROOT',name: 'name1'}, 
        {id: 2,parent_id: 1,name: 'name2'},
        {id: 3,parent_id: 1,name: 'name3'}];
    var tree = initTree(nodes,{});
    // tree => {
    //            id:1,
    //            parent_id:'ROOT',
    //            name:'name1',
    //            children:[
    //              {id:2,parent_id:1,name:'name2'},
    //              {id:3,parent_id:1,name:'name3'}
    //            ]
    //          }
```






---------------------- 
拷贝模板
##### getValue(key)
> this is a description
###### Arguments
- **key** the string key value

###### Return
- (*)

###### Example
``` python

```