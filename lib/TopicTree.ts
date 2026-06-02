export interface TopicNode {
  id: string
  label: string
  slug: string
  children: TopicNode[]
}

export class TopicTree {
  private static instance: TopicTree | null = null
  private root: TopicNode

  private constructor(root: TopicNode) {
    this.root = root
  }

  static getInstance(): TopicTree {
    if (!TopicTree.instance) {
      TopicTree.instance = new TopicTree(buildDefaultTree())
    }
    return TopicTree.instance
  }

  getRoot(): TopicNode {
    return this.root
  }

  findById(id: string): TopicNode | null {
    return this.dfs(this.root, (node) => node.id === id)
  }

  findBySlug(slug: string): TopicNode | null {
    return this.dfs(this.root, (node) => node.slug === slug)
  }

  getPath(id: string): TopicNode[] {
    const path: TopicNode[] = []
    this.buildPath(this.root, id, path)
    return path
  }

  getChildren(parentId: string): TopicNode[] {
    const parent = this.findById(parentId)
    return parent?.children ?? []
  }

  getSiblings(id: string): TopicNode[] {
    const parent = this.findParent(this.root, id)
    if (!parent) return []
    return parent.children.filter((c) => c.id !== id)
  }

  flatten(): TopicNode[] {
    const result: TopicNode[] = []
    const queue: TopicNode[] = [this.root]
    while (queue.length > 0) {
      const node = queue.shift()!
      result.push(node)
      for (const child of node.children) {
        queue.push(child)
      }
    }
    return result
  }

  private dfs(
    node: TopicNode,
    predicate: (n: TopicNode) => boolean,
  ): TopicNode | null {
    if (predicate(node)) return node
    for (const child of node.children) {
      const found = this.dfs(child, predicate)
      if (found) return found
    }
    return null
  }

  private buildPath(
    node: TopicNode,
    targetId: string,
    path: TopicNode[],
  ): boolean {
    path.push(node)
    if (node.id === targetId) return true
    for (const child of node.children) {
      if (this.buildPath(child, targetId, path)) return true
    }
    path.pop()
    return false
  }

  private findParent(
    node: TopicNode,
    childId: string,
  ): TopicNode | null {
    for (const child of node.children) {
      if (child.id === childId) return node
      const found = this.findParent(child, childId)
      if (found) return found
    }
    return null
  }
}

function buildDefaultTree(): TopicNode {
  return {
    id: 'root',
    label: 'All Topics',
    slug: '',
    children: [
      {
        id: 'dsa',
        label: 'Data Structures & Algorithms',
        slug: 'dsa',
        children: [
          {
            id: 'dsa-arrays',
            label: 'Arrays',
            slug: 'dsa/arrays',
            children: [
              { id: 'dsa-arrays-basics', label: 'Array Basics', slug: 'dsa/arrays/basics', children: [] },
              { id: 'dsa-arrays-two-pointer', label: 'Two Pointer', slug: 'dsa/arrays/two-pointer', children: [] },
              { id: 'dsa-arrays-sliding-window', label: 'Sliding Window', slug: 'dsa/arrays/sliding-window', children: [] },
            ],
          },
          {
            id: 'dsa-linked-lists',
            label: 'Linked Lists',
            slug: 'dsa/linked-lists',
            children: [
              { id: 'dsa-ll-singly', label: 'Singly Linked List', slug: 'dsa/linked-lists/singly', children: [] },
              { id: 'dsa-ll-doubly', label: 'Doubly Linked List', slug: 'dsa/linked-lists/doubly', children: [] },
            ],
          },
          {
            id: 'dsa-trees',
            label: 'Trees',
            slug: 'dsa/trees',
            children: [
              { id: 'dsa-trees-bst', label: 'Binary Search Tree', slug: 'dsa/trees/bst', children: [] },
              { id: 'dsa-trees-avl', label: 'AVL Tree', slug: 'dsa/trees/avl', children: [] },
              { id: 'dsa-trees-traversal', label: 'Tree Traversal', slug: 'dsa/trees/traversal', children: [] },
            ],
          },
          {
            id: 'dsa-graphs',
            label: 'Graphs',
            slug: 'dsa/graphs',
            children: [
              { id: 'dsa-graphs-bfs', label: 'BFS', slug: 'dsa/graphs/bfs', children: [] },
              { id: 'dsa-graphs-dfs', label: 'DFS', slug: 'dsa/graphs/dfs', children: [] },
              { id: 'dsa-graphs-dijkstra', label: 'Dijkstra', slug: 'dsa/graphs/dijkstra', children: [] },
            ],
          },
          {
            id: 'dsa-sorting',
            label: 'Sorting',
            slug: 'dsa/sorting',
            children: [
              { id: 'dsa-sorting-merge', label: 'Merge Sort', slug: 'dsa/sorting/merge-sort', children: [] },
              { id: 'dsa-sorting-quick', label: 'Quick Sort', slug: 'dsa/sorting/quick-sort', children: [] },
            ],
          },
          {
            id: 'dsa-dp',
            label: 'Dynamic Programming',
            slug: 'dsa/dynamic-programming',
            children: [
              { id: 'dsa-dp-memoization', label: 'Memoization', slug: 'dsa/dynamic-programming/memoization', children: [] },
              { id: 'dsa-dp-tabulation', label: 'Tabulation', slug: 'dsa/dynamic-programming/tabulation', children: [] },
            ],
          },
        ],
      },
      {
        id: 'web-dev',
        label: 'Web Development',
        slug: 'web-development',
        children: [
          {
            id: 'web-html',
            label: 'HTML',
            slug: 'web-development/html',
            children: [
              { id: 'web-html-basics', label: 'HTML Basics', slug: 'web-development/html/basics', children: [] },
              { id: 'web-html-forms', label: 'HTML Forms', slug: 'web-development/html/forms', children: [] },
              { id: 'web-html-semantic', label: 'Semantic HTML', slug: 'web-development/html/semantic', children: [] },
            ],
          },
          {
            id: 'web-css',
            label: 'CSS',
            slug: 'web-development/css',
            children: [
              { id: 'web-css-flexbox', label: 'Flexbox', slug: 'web-development/css/flexbox', children: [] },
              { id: 'web-css-grid', label: 'CSS Grid', slug: 'web-development/css/grid', children: [] },
            ],
          },
          {
            id: 'web-js',
            label: 'JavaScript',
            slug: 'web-development/javascript',
            children: [
              { id: 'web-js-basics', label: 'JS Basics', slug: 'web-development/javascript/basics', children: [] },
              { id: 'web-js-async', label: 'Async JavaScript', slug: 'web-development/javascript/async', children: [] },
              { id: 'web-js-dom', label: 'DOM Manipulation', slug: 'web-development/javascript/dom', children: [] },
            ],
          },
        ],
      },
      {
        id: 'system-design',
        label: 'System Design',
        slug: 'system-design',
        children: [
          { id: 'sd-fundamentals', label: 'Fundamentals', slug: 'system-design/fundamentals', children: [] },
          { id: 'sd-scalability', label: 'Scalability', slug: 'system-design/scalability', children: [] },
          { id: 'sd-load-balancing', label: 'Load Balancing', slug: 'system-design/load-balancing', children: [] },
          { id: 'sd-caching', label: 'Caching', slug: 'system-design/caching', children: [] },
          { id: 'sd-databases', label: 'Databases', slug: 'system-design/databases', children: [] },
        ],
      },
      {
        id: 'ai-ml',
        label: 'AI & Machine Learning',
        slug: 'ai-machine-learning',
        children: [
          { id: 'ai-basics', label: 'AI Basics', slug: 'ai-machine-learning/basics', children: [] },
          { id: 'ai-neural-nets', label: 'Neural Networks', slug: 'ai-machine-learning/neural-networks', children: [] },
          { id: 'ai-nlp', label: 'NLP', slug: 'ai-machine-learning/nlp', children: [] },
        ],
      },
      {
        id: 'devops',
        label: 'DevOps',
        slug: 'devops',
        children: [
          { id: 'devops-docker', label: 'Docker', slug: 'devops/docker', children: [] },
          { id: 'devops-k8s', label: 'Kubernetes', slug: 'devops/kubernetes', children: [] },
          { id: 'devops-cicd', label: 'CI/CD', slug: 'devops/ci-cd', children: [] },
        ],
      },
      {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        slug: 'cybersecurity',
        children: [
          { id: 'cyber-basics', label: 'Security Fundamentals', slug: 'cybersecurity/fundamentals', children: [] },
          { id: 'cyber-web', label: 'Web Security', slug: 'cybersecurity/web-security', children: [] },
        ],
      },
    ],
  }
}
