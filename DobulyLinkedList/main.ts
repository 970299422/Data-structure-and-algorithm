import AbstractList from '../AbstractList'

class LinkedList<E> extends AbstractList<E> {
  first: NodeElement <E>
  last: NodeElement <E>

  constructor () {
    super()
  }

  clear(): void {
    this.size = 0
    this.first = null
    this.last = null
  }

  add(element: E, index?: any): void {
    this.rangeCheckForAdd(index || this.size)

    if (!index && index !== 0) {
      this.add(element, this.size)
      return null 
    }
    
    if (index === 0) {
      this.first = new NodeElement(null, element, this.first)
    } else {
      const prev: NodeElement<E> = this.getNode(index - 1)
      prev.next = new NodeElement(prev, element, prev.next)
    }
    this.size++
  }

  get(index: number): E {
    this.rangeCheck(index)

    return this.getNode(index).element
  }

  set(index: number, element: E): E {
    this.rangeCheck(index)

    const node: NodeElement<E> = this.getNode(index)
    const old: E = this.getNode(index).element
    node.element = element
    return old
  }

  remove(index: number): E {
    this.rangeCheck(index)

    let oldNode: NodeElement<E> = this.first
    if (index === 0) {
      this.first = this.first.next
    } else {
      const prev: NodeElement<E> = this.getNode(index - 1)
      oldNode = this.getNode(index)
      prev.next = oldNode.next
    }
    this.size--
    return oldNode.element
  }

  indexOf(element: E): number {
    let node: NodeElement<E> = this.first
    if (!element) {
      for (let i = 0; i < this.size; i++) {
        if (node.element === element) return i
        node = node.next
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        if (JSON.stringify(node.element) === JSON.stringify(element)) return i
        node = node.next
      }
    }
    return this.ELEMNET_NOT_FOND
  }

  getNode(index: number) {
    let node = null
    if (index < this.size >> 1) {
      node = this.first
      for(let i = 0; i < index; i++) {
        node = node.next
      }
    } else {
      node = this.last
      for(let i = this.size - 1; i > index; i--) {
        node = node.prev
      }
    }
    return node
  }
}

class NodeElement <E> {
  prev: NodeElement<E>
  element: E
  next: NodeElement<E>
  constructor (prev: NodeElement<E>, element: E, next: NodeElement<E>) {
    this.prev = prev
    this.element = element
    this.next = next
  }
}

// test
// const linkedList = new LinkedList<number>()
// console.log(linkedList)
// console.log(linkedList.getSize())
// linkedList.add(3)
// linkedList.add(2, 0)
// linkedList.add(1, 0)
// linkedList.add(5, 3)
// linkedList.add(4, 3)
// console.log(JSON.stringify(linkedList))
// console.log(linkedList.get(2))
// console.log(linkedList.set(3, 10))
// console.log(JSON.stringify(linkedList))
// console.log(linkedList.indexOf(10))
// console.log(linkedList.remove(2))
// console.log(linkedList.indexOf(10))
// console.log(JSON.stringify(linkedList))
