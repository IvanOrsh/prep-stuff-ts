Table of contents:

- [Part One: Lists](#part-one-lists)
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
- [Part Two: Trees/Graph/Map](#part-two-treesgraphmap)
  - [Trees](#trees)
    - [Traversals:](#traversals)
  - [Binary Search Tree](#binary-search-tree)
  - [The Heap](#the-heap)
  - [Trie](#trie)
  - [Graph](#graph)
    - [Dijkstra](#dijkstra)
- [Part Three?: Maps](#part-three-maps)
  - [LRU (least recently used)](#lru-least-recently-used)

# Part One: Lists

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

# Part Two: Trees/Graph/Map

## Trees

**Where are trees?**:

- Your filesystem is a tree
- The dom is a tree
- Trees are massively important in compilers. You have probably mininumly heard the term Abstract Syntax Tree.
- and there is more...

**Terminology**:

- **root** - the most parent node. The First. Adam.
- **height** - The longest path from the root to the most child node
- **binary tree** - a tree in which has at most 2 children, at least 0 children
- **general tree** - a tree with 0 or more children
- **binary search tree** - a tree in which has a specific ordering to the nodes and at most 2 children
- **leaves** - a node without children
- **balanced** - A tree is perfectly balanced when any node's left and right children have the same height.
- **branching factor** - the amount of children a tree has.

---

### Traversals:

there are different ways in which you can visit the nodes of a tree.

```txt
           7
        /    \
      23      3
    /   \    / \
   5     4  18  21
```

- recurse Left: 7, 23, 5, 4, 3, 18, 21: visited the node, then recurse - **pre order**
- recurse right: 5, 23, 4, 7, 18, 3, 21: **in order**
- 5, 5, 23, 18, 21, 3, 7: **post order**

These types of traversals are known as
**Depth First Search**.

- dfs preserves the SHAPE of the traversal!

---

**Breadth first search**.

```txt
           7
------------------------
        /    \
      23      3
------------------------
    /   \    / \
   5     4  18  21
```

- tree-level kind of visiting
- 7->23->8 (then, pop 7)
- 23->8->5->4
- and so on...

---

## Binary Search Tree

- A classic when it comes to learning about trees.
- They are not some new ds that we haven't seen, they are specifically an ordering to the data within the data structure.

**Running time**:

- Insertion
- what does this do to running time?
- Deletion

The time complexity of a search operation in a binary search tree (BST) is O(h), where h is the height of the tree. In the best case, where the tree is perfectly balanced, the height of the tree is log2(n) where n is the number of nodes in the tree. In this case, the time complexity of a search operation is O(log n).

However, in the worst case, where the tree is unbalanced and resembles a linked list, the height of the tree is n-1, where n is the number of nodes in the tree. In this case, the time complexity of a search operation is O(n).

Therefore, the time complexity of a search operation in a binary search tree depends on the balance of the tree. If the tree is balanced, the search operation is efficient with a time complexity of O(log n), but if the tree is unbalanced, the search operation can become as slow as O(n).

---

## The Heap

- The simplest way to put it is a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node.

- Whenever a node is added, we must adjust the tree
- Whenever a node is deleted, we must adjust the tree
- There is no traversing the tree

**Some characteristics**

- It is self balancing
- It can be used for priority

**Running time**:

- deletion - O(log n)
- insertion - O(log n)

---

## Trie

- If its not a priority queue, its a trie
  They are pronounced like Tree (its named after Re"trie"val Tree). So its a Trie tree (but people keep calling them try trees / prefix / digital tree)!
- The easiest way to visualize a trie is to think of auto-complete.

The main purpose of a trie data structure is to efficiently store and retrieve strings or sequences of characters. A trie, also known as a prefix tree, is a tree-like data structure that is particularly useful for searching for words in a dictionary or a list of strings.

In a trie, each node represents a single character, and the path from the root to a leaf node represents a string. The key advantage of a trie is that it can quickly determine whether a string is present in the data structure or not. This is because a search in a trie typically takes O(m) time, where m is the length of the string being searched, which is much faster than a linear search which takes O(n) time, where n is the number of strings.

Tries are also useful for tasks such as auto-completion, where the trie can suggest completions for a partially typed word based on the strings stored in the trie, and for tasks such as spell-checking, where the trie can be used to determine whether a word is spelled correctly.

Overall, the main purpose of a trie is to provide an efficient way to store and search for strings, making it a popular data structure for tasks such as text processing and search engines.

---

## Graph

**Terminology of Graphs**

- This is not an exhaustive list of terms
- **cycle**: When you start at Node(x), follow the links, and end back at Node(x)
- **acyclic**: A graph that contains no cycles
- **connected**: When every node has a path to another node
- **directed**: When there is a direction to the connections. Think Twitter
- **undirected**: !directed. Think Facebook (i haven't been on in 10 years, it may have changed)
- **weighted**: The edges have a weight associated with them. Think Maps
- **dag**: Directed, acyclic graph.

**Implementation Terms**

- **node**: a point or vertex on the graph
- **edge**: the connection betxit two nodes

**Big O**

- BigO is commonly stated in terms of V and E where V stands for vertices and E stands for edges
- So O(V \* E) means that we will check every vertex, and on every vertex we check every edge

**How are graphs represented**

- adj list
- adj matrix (memory problem - O(v^2) of space)

**Basic Searches**

- BFS and DFS still exist on a graph, and they are virtually no different than on a tree.

### Dijkstra

The Dijkstra shortest path algorithm is a popular algorithm used to find the shortest path between two nodes in a weighted graph. Here are the steps of the algorithm:

1. Create a graph: Before starting the algorithm, you need to have a graph. A graph is made up of nodes (also called vertices) and edges. Each edge has a weight or a cost associated with it. The cost represents the distance between two nodes.

2. Assign a tentative distance value to every node: Assign a tentative distance value to each node in the graph. The tentative distance value represents the current shortest distance between the starting node and the node being evaluated. Initially, the starting node is assigned a distance of 0, and all other nodes are assigned a distance of infinity.

3. Mark the starting node as visited: Mark the starting node as visited to keep track of which nodes have been evaluated.

4. Visit the nearest neighbor: From the starting node, visit the node with the smallest tentative distance value. This node will be the first node evaluated.

5. Update the tentative distance values: For each neighbor of the node that was just visited, calculate the sum of the tentative distance value of the current node and the weight of the edge connecting the current node to its neighbor. If this sum is less than the neighbor's current tentative distance value, update the neighbor's tentative distance value to this sum.

6. Mark the visited node as evaluated: Once all the neighbors of the visited node have been evaluated, mark the visited node as evaluated.

7. Repeat steps 4-6 until the destination node has been visited or all reachable nodes have been evaluated: Continue visiting the neighbor with the smallest tentative distance value until the destination node has been visited or all reachable nodes have been evaluated.

8. Backtrack to find the shortest path: Once the destination node has been visited, backtrack through the graph to find the shortest path from the starting node to the destination node. This can be done by following the nodes with the lowest tentative distance values back to the starting node.

---

# Part Three?: Maps

**Terms**:

- **load factor**: The amount of data points vs the amount of storage (data.len / storage.capacity)
- **key**: a value that is hashable and is used to look up data. The hash has to be consistent.
- **value**: a value that is associated with a key
- **collision**: when 2 keys map to the same cell.

---

## LRU (least recently used)

LRU stands for Least Recently Used, and it's a popular caching algorithm used to manage the cache's size and avoid evicting frequently accessed items. In LRU, the cache evicts the least recently used item when the cache reaches its maximum capacity. The LRU algorithm works based on the assumption that the items that have been accessed more recently are more likely to be accessed again in the near future.
