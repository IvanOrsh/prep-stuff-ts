class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

// TODO: test Trie

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let node = current.children.get(char);
      if (!node) {
        node = new TrieNode();
        current.children.set(char, node);
      }
      current = node;
    }
    current.isEndOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const node = current.children.get(char);
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      const node = current.children.get(char);
      if (!node) {
        return false;
      }
      current = node;
    }
    return true;
  }
}
