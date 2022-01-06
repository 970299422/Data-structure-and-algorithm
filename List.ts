// 线性列表接口
interface List<E> {
  size: number
  ELEMNET_NOT_FOND: number
  /**
   * 获取列表长度
  */
  getSize(): number

  /**
   * 清空列表
  */
  clear(): void

  /**
   * 列表是否为空
  */
  isEmpty(): boolean

  /**
   * 查询列表中是否包含元素
  */
  contains(element: E): boolean

  /**
   * 获取列表长度
  */
  add(element: E, index?: number): void

  /**
   * 获取元素
  */
  get(index: number): E

  /**
   * 将元素添加到指定位置
  */
  set(index: number, element: E): E

  /**
   * 删除元素
  */
  remove(index: number): E

  /**
   * 查询元素在列表中的位置
  */
  indexOf(element: E): number

  /**
   * 参数检查
  */
  outOfBounds(index: number): void

  rangeCheck(index: number): void

  rangeCheckForAdd(index: number): void
}

export default List