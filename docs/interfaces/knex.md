[desmond](../README.md) > [Knex](../interfaces/knex.md)

# Interface: Knex

## Hierarchy

**Knex**

## Callable
▸ **__call**(table: *`string`*): [KnexTable](knextable.md)

*Defined in [internal/types.ts:16](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/internal/types.ts#L16)*

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

*Defined in [internal/types.ts:16](https://github.com/AckeeCZ/desmond/blob/d5e9561/src/lib/internal/types.ts#L16)*

#### Type declaration
▸(fn: *[TransactionFunction](../#transactionfunction)*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [TransactionFunction](../#transactionfunction) |

**Returns:** `any`

___

