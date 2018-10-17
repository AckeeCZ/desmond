[desmond](../README.md) > [Knex](../interfaces/knex.md)

# Interface: Knex

## Hierarchy

**Knex**

## Callable
▸ **__call**(table: *`string`*): [KnexTable](knextable.md)

*Defined in [index.d.ts:16](https://github.com/AckeeCZ/desmond/blob/6603eee/src/index.d.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| table | `string` |

**Returns:** [KnexTable](knextable.md)

## Index

### Properties

* [transaction](knex.md#transaction)

---

## Properties

<a id="transaction"></a>

###  transaction

**● transaction**: *`function`*

*Defined in [index.d.ts:16](https://github.com/AckeeCZ/desmond/blob/6603eee/src/index.d.ts#L16)*

#### Type declaration
▸(fn: *[TransactionFunction](../#transactionfunction)*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [TransactionFunction](../#transactionfunction) |

**Returns:** `any`

___

