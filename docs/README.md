
#  desmond

## Index

### Interfaces

* [Knex](interfaces/knex.md)
* [KnexParams](interfaces/knexparams.md)
* [KnexTable](interfaces/knextable.md)
* [Model](interfaces/model.md)
* [Request](interfaces/request.md)

### Type aliases

* [Callback](#callback)
* [Nullable](#nullable)
* [Transaction](#transaction)
* [TransactionFunction](#transactionfunction)

### Functions

* [absoluteUrl](#absoluteurl)
* [compareBcrypt](#comparebcrypt)
* [createDateWithMinutesFromNow](#createdatewithminutesfromnow)
* [generateRandomAlphanumeric](#generaterandomalphanumeric)
* [hash](#hash)
* [hashBcrypt](#hashbcrypt)
* [parseBool](#parsebool)
* [promiseChain](#promisechain)
* [promisify](#promisify)
* [snakelizeKeys](#snakelizekeys)
* [tableColumns](#tablecolumns)
* [tap](#tap)
* [toJson](#tojson)
* [transacted](#transacted)

---

## Type aliases

<a id="callback"></a>

###  Callback

**Ƭ Callback**: *`function`*

*Defined in [promisify.ts:1](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L1)*

#### Type declaration
▸(e: *`any`*, res?: *[T]()*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| e | `any` |
| `Optional` res | [T]() |

**Returns:** `void`

___
<a id="nullable"></a>

###  Nullable

**Ƭ Nullable**: * `T` &#124; `null`
*

*Defined in [internal/types.ts:1](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/internal/types.ts#L1)*

___
<a id="transaction"></a>

###  Transaction

**Ƭ Transaction**: *`any`*

*Defined in [internal/types.ts:8](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/internal/types.ts#L8)*

___
<a id="transactionfunction"></a>

###  TransactionFunction

**Ƭ TransactionFunction**: *`function`*

*Defined in [internal/types.ts:9](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/internal/types.ts#L9)*

#### Type declaration
▸(t: *[Transaction](#transaction)*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| t | [Transaction](#transaction) |

**Returns:** `any`

___

## Functions

<a id="absoluteurl"></a>

### `<Const>` absoluteUrl

▸ **absoluteUrl**(req: *[Request](interfaces/request.md)*):  `null` &#124; `string`

*Defined in [absoluteUrl.ts:20](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/absoluteUrl.ts#L20)*

Creates absolute URL from express Request object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| req | [Request](interfaces/request.md) |  express request |

**Returns:**  `null` &#124; `string`

absolute url

___
<a id="comparebcrypt"></a>

### `<Const>` compareBcrypt

▸ **compareBcrypt**(plain: *`string`*, hashed: *`string`*): `Promise`<`boolean`>

*Defined in [compareBcrypt.ts:3](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/compareBcrypt.ts#L3)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| plain | `string` |
| hashed | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="createdatewithminutesfromnow"></a>

### `<Const>` createDateWithMinutesFromNow

▸ **createDateWithMinutesFromNow**(minutes: *`number`*): `Date`

*Defined in [createDateWithMinutesFromNow.ts:4](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/createDateWithMinutesFromNow.ts#L4)*

Create a date in given minutes future

**Parameters:**

| Param | Type |
| ------ | ------ |
| minutes | `number` |

**Returns:** `Date`

___
<a id="generaterandomalphanumeric"></a>

### `<Const>` generateRandomAlphanumeric

▸ **generateRandomAlphanumeric**(num: *`number`*): `string`

*Defined in [generateRandomAlphanumeric.ts:6](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/generateRandomAlphanumeric.ts#L6)*

Generate a random alphanumeric string of given length

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** `string`

___
<a id="hash"></a>

### `<Const>` hash

▸ **hash**(data: *`string`*, algorithm?: *`string`*, encoding?: *`HexBase64Latin1Encoding`*):  `null` &#124; `string`

*Defined in [hash.ts:8](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/hash.ts#L8)*

Create a hash from input string

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | `string` | - |
| `Default value` algorithm | `string` | &quot;sha512&quot; |
| `Default value` encoding | `HexBase64Latin1Encoding` | &quot;hex&quot; |  digest encoding |

**Returns:**  `null` &#124; `string`

hash (default) or null (if no data provided)

___
<a id="hashbcrypt"></a>

### `<Const>` hashBcrypt

▸ **hashBcrypt**(plain: *`string`*, saltRounds?: *`number`*): `Promise`<`string`>

*Defined in [hashBcrypt.ts:3](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/hashBcrypt.ts#L3)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| plain | `string` | - |
| `Default value` saltRounds | `number` | 10 |

**Returns:** `Promise`<`string`>

___
<a id="parsebool"></a>

### `<Const>` parseBool

▸ **parseBool**(value: *`any`*): `boolean`

*Defined in [parseBool.ts:9](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/parseBool.ts#L9)*

Parse bool from string (`"0"`, `"false"` --> `false`, else `true`), number (`0` --> `false`, else `true`), or boolean

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="promisechain"></a>

### `<Const>` promiseChain

▸ **promiseChain**<`T`>(tasks: *`Array`<`function`>*): `Promise`<`T`[]>

*Defined in [promiseChain.ts:6](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promiseChain.ts#L6)*

Run tasks sequentially, resolving the resulting promises and accumulating the result in an array

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| tasks | `Array`<`function`> |  Tasks to be executed |

**Returns:** `Promise`<`T`[]>
array of resolved values

___
<a id="promisify"></a>

###  promisify

▸ **promisify**<`TRes`>(fn: *`function`*): `function`

▸ **promisify**<`T1`,`TRes`>(fn: *`function`*): `function`

▸ **promisify**<`T1`,`T2`,`TRes`>(fn: *`function`*): `function`

▸ **promisify**<`T1`,`T2`,`T3`,`TRes`>(fn: *`function`*): `function`

▸ **promisify**<`T1`,`T2`,`T3`,`T4`,`TRes`>(fn: *`function`*): `function`

*Defined in [promisify.ts:3](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L3)*

Promisify a callback function

**Type parameters:**

#### TRes 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `function`

*Defined in [promisify.ts:4](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L4)*

Promisify a callback function

**Type parameters:**

#### T1 
#### TRes 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `function`

*Defined in [promisify.ts:5](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L5)*

Promisify a callback function

**Type parameters:**

#### T1 
#### T2 
#### TRes 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `function`

*Defined in [promisify.ts:6](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L6)*

Promisify a callback function

**Type parameters:**

#### T1 
#### T2 
#### T3 
#### TRes 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `function`

*Defined in [promisify.ts:7](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/promisify.ts#L7)*

Promisify a callback function

**Type parameters:**

#### T1 
#### T2 
#### T3 
#### T4 
#### TRes 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `function`

___
<a id="snakelizekeys"></a>

### `<Const>` snakelizeKeys

▸ **snakelizeKeys**(input: * `object` &#124; `Array`<`object`>*): `object`

*Defined in [snakelizeKeys.ts:10](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/snakelizeKeys.ts#L10)*

Snakelize keys of given object(s). Only top level keys are transformed. Keys are assumed to be camelCase.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input |  `object` &#124; `Array`<`object`>|  object(s) to transform |

**Returns:** `object`

___
<a id="tablecolumns"></a>

### `<Const>` tableColumns

▸ **tableColumns**(knex: *[Knex](interfaces/knex.md)*, table: *`string`*): `Promise`<`Object`[]>

*Defined in [tableColumns.ts:10](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/tableColumns.ts#L10)*

Return list of camelCased column names

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| knex | [Knex](interfaces/knex.md) |  Knex instance |
| table | `string` |  Table name |

**Returns:** `Promise`<`Object`[]>

___
<a id="tap"></a>

### `<Const>` tap

▸ **tap**<`T`>(handler: *`function`*): `(Anonymous function)`

*Defined in [tap.ts:5](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/tap.ts#L5)*

Promise side effect. Inspired by common bluebird's `Promise#tap`

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| handler | `function` |

**Returns:** `(Anonymous function)`

___
<a id="tojson"></a>

### `<Const>` toJson

▸ **toJson**(model: *[Nullable](#nullable)<[Model](interfaces/model.md)>*, options?: *`object`*): `any`

*Defined in [toJson.ts:11](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/toJson.ts#L11)*

Transforms (usually database) object to pure JSON object using toJSON member function. If it does not have toJSON or object does not exist, it returns object itself.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| model | [Nullable](#nullable)<[Model](interfaces/model.md)> | - |  Object to transform to JSON |
| `Default value` options | `object` |  {} |  Object that is passed to toJSON method |

**Returns:** `any`
toJSON result

___
<a id="transacted"></a>

### `<Const>` transacted

▸ **transacted**(knex: *[Knex](interfaces/knex.md)*, params: *[KnexParams](interfaces/knexparams.md)*): [TransactionFunction](#transactionfunction)

*Defined in [transacted.ts:12](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/transacted.ts#L12)*

Create a function with parameter `Transaction`. `Transaction` is either passed on from `params.transacting`, or new transaction is created using `knex.transaction`.

**Parameters:**

| Param | Type |
| ------ | ------ |
| knex | [Knex](interfaces/knex.md) |
| params | [KnexParams](interfaces/knexparams.md) |

**Returns:** [TransactionFunction](#transactionfunction)

___

