Table of contents:

- [Part One](#part-one)
  - [Array](#array)
    - [Search: Two crystal ball problem](#search-two-crystal-ball-problem)
    - [Sort](#sort)
  - [LinkedList](#linkedlist)
  - [Queue](#queue)
  - [Stack](#stack)
  - [Array vs Linked List](#array-vs-linked-list)
      - [implement an async request queue ()](#implement-an-async-request-queue-)
  - [Ring Buffers](#ring-buffers)
  - [ArrayList](#arraylist)
- [A: recursion](#a-recursion)
- [Part Two](#part-two)

# Part One

## Array

- They are fixed size, contiguous memory chunks:

  - That means you cannot grow it
  - There is no "insertAt" or push or pop. Doesn't mean you can't write those though

```js
const a = []; // not an array
```

in js, the closest to array we can get:

```js
const a = new ArrayBuffer(6);

// a: ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
a8[2] = 42;

// a: ArrayBuffer { [Uint8Contents]: <00 00 2d 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
a16[2] = 0x4545;

// a: ArrayBuffer { [Uint8Contents]: <00 00 2d 00 45 45>, byteLength: 6 }
```

**What is not so great about an array ?**

- deletion (why?)
- insertion (why?)
- its ungrowable (why?)

---

// TODO: jump sort

### Search: Two crystal ball problem

Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

**Our options**:

- linear search
- binary search
- or ... jump search!

---

### Sort

// TODO: more

---

## LinkedList

- Singly Linked
- Doubly Linked

- fast deletion and insertion

typical LinkedList api:

```ts
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
```

---

## Queue

**Running Time**

constant time! for

- enqueue
- dequeue
- peek

---

## Stack

- What's the opposite of a Queue?

**Running Time**

- push
- pop
- peek

---

## Array vs Linked List

- usability
- time
- space

#### implement an async request queue ()

---

## Ring Buffers

- A **ring buffer**, also known as a circular buffer, is a data structure used in computer programming that enables efficient storage and retrieval of data in a fixed-size buffer.

- In a ring buffer, data is stored in a **circular manner**, with the first item immediately following the last item. When the buffer is full, new data overwrites the oldest data in the buffer. This allows for constant-time insertion and deletion of data, regardless of the size of the buffer.

There are several reasons why you might want to consider using a ring buffer in your programming:

1. Efficiency: Ring buffers are very efficient for implementing queues and other data structures that require constant-time insertion and deletion. This is because they use a fixed-size buffer and overwrite old data, rather than having to move elements around in memory.

2. Real-time applications: Ring buffers are commonly used in real-time applications, such as audio and video processing, where data needs to be processed quickly and efficiently.

3. Memory management: Ring buffers can be used to manage memory in low-level programming languages, such as C and C++, where efficient memory management is critical.

4. Avoiding buffer overflows: By using a ring buffer, you can avoid buffer overflows, which occur when more data is written to a buffer than it can hold. This is because the ring buffer will simply overwrite old data instead of causing an overflow.

Overall, ring buffers are a useful tool for managing data in a wide range of programming applications.

---

## ArrayList

**Running Time**

- Get
- Deletion/Insertion at beginning of list
- Deletion/Insertion in the middle
- Deletion/Insertion at end of list

---

# A: recursion

The simplest way to think of recursion is a function that calls itself until the problem is solved. This usually involves what is referred to as a "base case." A base case is the point in which the problem is solved at.

---

# Part Two
