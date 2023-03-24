export interface BinaryNode<T> {
  value: T;
  right: BinaryNode<T> | null;
  left: BinaryNode<T> | null;
}
