
PairwiseTesting
===========================
Automatically compositing `test case scenarios` to help improve use case test coverage

`PairwiseTesting`，Also known as` pairwise test `, is a kind of orthogonal analysis test method

`in the past:` when designing a test case, all horizontal combinations of at least two fields (input criteria) are required to be overwritten at least once. If the enumeration values of multiple fields are combined, manual calculation time is very expensive

`now:`PairwiseTesting allows you to save time `without manual calculation`, automatically implementing `test cases` in pairs and combinations


[中文文档]('README.md')

[English Document]('README-en.md')

# example
## Use case fields (enumerated values)

<img width="700" height="300" src="static/image/fields_enumerator.jpg"/>

## Use cases combine results
<img width="400" height="400" src="static/image/csv.jpg"/>


# usage
## 1.Environment

（1）Nodejs
If you do not have the nodejs environment installed on your computer, please refer to it：https://www.runoob.com/nodejs/nodejs-install-setup.html

>If you have installed the configuration nodejs, you can skip this step

（2）install


```bash
npm install
```

## 2.usage

### （1）Open the excel sheet `fields enumerator.xlsx` and write the enumeration value of your use case field

<img width="400" height="150" src="static/image/fields_enumerator_wirte.jpg"/>



### （2）Build Start Time

```bash
mocha
```
#### (3) output

|file type|file name|
|---|---|
|csv|2020-4-31-9-51-48.csv|
|txt|2020-4-31-9-51-48.txt|
|json|2020-4-31-9-51-48.json|
|xml|2020-4-31-9-51-48.xml|

>output files

<img width="200" height="200" src="static/image/output.jpg"/>


#### csv

<img width="400" height="400" src="static/image/csv.jpg"/>

#### txt

example：2020-4-30-22-39-54.txt

```javascript
账号正常,密码过短,验证码正常,取消
账号正常,密码过长,验证码空,确定
账号空,密码正常,验证码过短,确定
账号不存在,密码不存在,验证码过短,取消
账号过长,密码过长,验证码正常,取消
账号正常,密码空,验证码过短,确定
账号不存在,密码过短,验证码空,取消
账号空,密码过长,验证码过长,取消
账号过长,密码过短,验证码过长,确定
账号空,密码空,验证码不匹配,取消
账号不存在,密码过长,验证码过长,确定
账号过短,密码不存在,验证码正常,确定
账号过长,密码空,验证码不匹配,确定
账号过短,密码过长,验证码过短,取消
账号过短,密码不存在,验证码不匹配,确定
账号空,密码过短,验证码不匹配,确定
账号过长,密码空,验证码空,确定
账号过短,密码过短,验证码过短,确定
账号过短,密码不存在,验证码过长,确定
账号正常,密码正常,验证码过长,取消
账号正常,密码过长,验证码不匹配,确定
账号过长,密码不存在,验证码过短,确定
账号空,密码不存在,验证码正常,确定
账号不存在,密码空,验证码正常,确定
账号过短,密码空,验证码过长,确定
账号过长,密码正常,验证码正常,确定
账号正常,密码不存在,验证码空,确定
账号空,密码空,验证码空,确定
账号过短,密码正常,验证码空,确定
账号不存在,密码不存在,验证码正常,取消
账号不存在,密码正常,验证码不匹配,确定

```

#### json

<img width="400" height="250" src="static/image/json.jpg"/>

#### xml

<img width="400" height="250" src="static/image/xml.jpg"/>


#### console
```javascript
  [ '账号过短', '密码正常', '验证码空', '取消' ],
  [ '账号空', '密码正常', '验证码过长', '取消' ],
  [ '账号正常', '密码不存在', '验证码正常', '确定' ],
  [ '账号不存在', '密码空', '验证码不匹配', '取消' ],
  [ '账号过短', '密码过短', '验证码不匹配', '确定' ],
  [ '账号空', '密码过长', '验证码不匹配', '确定' ],
  [ '账号过短', '密码空', '验证码空', '确定' ],
  [ '账号过短', '密码正常', '验证码正常', '取消' ],
  [ '账号正常', '密码不存在', '验证码过长', '取消' ],
  [ '账号过短', '密码不存在', '验证码过短', '取消' ],
  [ '账号不存在', '密码空', '验证码过长', '确定' ],
  [ '账号过短', '密码过长', '验证码过短', '确定' ],
  [ '账号正常', '密码过长', '验证码不匹配', '取消' ],
  [ '账号不存在', '密码过短', '验证码正常', '取消' ],
  [ '账号空', '密码空', '验证码正常', '确定' ],
  [ '账号过长', '密码不存在', '验证码不匹配', '取消' ],
  [ '账号过长', '密码过长', '验证码正常', '确定' ],
  [ '账号不存在', '密码正常', '验证码空', '确定' ],
  [ '账号过长', '密码过短', '验证码空', '确定' ],
  [ '账号不存在', '密码过短', '验证码过短', '确定' ],
  [ '账号正常', '密码空', '验证码过短', '确定' ],
  [ '账号过长', '密码正常', '验证码过短', '确定' ],
  [ '账号正常', '密码正常', '验证码不匹配', '确定' ],
  [ '账号过短', '密码过短', '验证码过长', '确定' ],
  [ '账号过长', '密码空', '验证码过长', '确定' ],
  [ '账号正常', '密码过短', '验证码空', '确定' ],
  [ '账号空', '密码不存在', '验证码过短', '确定' ],
  [ '账号不存在', '密码过长', '验证码过长', '确定' ],
  [ '账号空', '密码过短', '验证码空', '确定' ],
  [ '账号不存在', '密码不存在', '验证码空', '确定' ],
  [ '账号空', '密码过长', '验证码空', '确定' ] 
```