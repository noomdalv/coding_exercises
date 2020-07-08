const T = require('./index');
const Node = T.Node;
const Tree = T.Tree;

describe('Node', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Node has a data and children properties', () => {
    const n = new Node('a');
    expect(n.data).toEqual('a');
    expect(n.children.length).toEqual(0);
  });

  test('Node can add children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test('Node can remove children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    n.remove('b');
    expect(n.children.length).toEqual(0);
  });
});

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test('Can traverse bf', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseBF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

	test('Can traverse bf2', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('1');
    t.root.add('2');
    t.root.add('3');
		t.root.add('4');
		t.root.children[0].add("5");
		t.root.children[0].add("6");
		t.root.children[0].children[0].add("9");
		t.root.children[0].children[0].add("10");
		t.root.children[2].add("7");
		t.root.children[2].add("8");
    t.root.children[2].children[0].add("11");
		t.root.children[2].children[0].add("12");

    t.traverseBF(node => {
      letters.push(node.data);
    });
    expect(letters).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
  });

  test('Can traverse DF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('d');
    t.root.children[0].add('c');

    t.traverseDF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });
});
