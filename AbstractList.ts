
import List from './List'

export default abstract class AbstractList<E> implements List<E>  {
  size: number = 0
  ELEMNET_NOT_FOND: number = -1

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  contains(element: E): boolean {
    return this.indexOf(element) !== this.ELEMNET_NOT_FOND
  }

  outOfBounds (index: number) {
    throw new Error(`out of bounds exception, index = ${index}, size = ${this.size}`)
  }

  rangeCheck (index: number) {
    if (index < 0 || index >= this.size) {
      this.outOfBounds(index)
    }
  }

  rangeCheckForAdd (index: number) {
    if (index < 0 || index > this.size) {
      this.outOfBounds(index)
    }
  }

  abstract indexOf(element: E): number
  abstract add(element: E, index?: number): void
  abstract get(index: number): E
  abstract set(index: number, element: E): E
  abstract remove(index: number): E
  abstract clear(): void
}
