export type RelationType = 'prerequisite' | 'related' | 'next' | 'see-also'

export interface TopicEdge {
  from: string
  to: string
  relation: RelationType
  weight: number
}

export class TopicGraph {
  private static instance: TopicGraph | null = null
  private adjacencyMap: Map<string, TopicEdge[]> = new Map()

  private constructor() {
    this.buildDefaultEdges()
  }

  static getInstance(): TopicGraph {
    if (!TopicGraph.instance) {
      TopicGraph.instance = new TopicGraph()
    }
    return TopicGraph.instance
  }

  addEdge(edge: TopicEdge): void {
    const existing = this.adjacencyMap.get(edge.from) ?? []
    if (!existing.some((e) => e.to === edge.to && e.relation === edge.relation)) {
      existing.push(edge)
      this.adjacencyMap.set(edge.from, existing)
    }
  }

  getRelated(topicId: string, relation?: RelationType): TopicEdge[] {
    const edges = this.adjacencyMap.get(topicId) ?? []
    if (!relation) return edges
    return edges.filter((e) => e.relation === relation)
  }

  getPrerequisites(topicId: string): string[] {
    return this.getRelated(topicId, 'prerequisite').map((e) => e.to)
  }

  getNextTopics(topicId: string): string[] {
    return this.getRelated(topicId, 'next').map((e) => e.to)
  }

  getSeeAlso(topicId: string): string[] {
    return this.getRelated(topicId, 'see-also').map((e) => e.to)
  }

  getTopRelated(topicId: string, limit = 5): TopicEdge[] {
    const edges = this.adjacencyMap.get(topicId) ?? []
    return [...edges]
      .sort((a, b) => b.weight - a.weight)
      .slice(0, limit)
  }

  getInternalLinks(topicId: string): string[] {
    const seen = new Set<string>()
    const queue: string[] = [topicId]
    const result: string[] = []

    while (queue.length > 0 && result.length < 10) {
      const current = queue.shift()!
      if (seen.has(current)) continue
      seen.add(current)

      const edges = this.adjacencyMap.get(current) ?? []
      for (const edge of edges) {
        if (!seen.has(edge.to)) {
          result.push(edge.to)
          if (edge.relation === 'related' || edge.relation === 'next') {
            queue.push(edge.to)
          }
        }
      }
    }

    return result
  }

  getAllTopicIds(): string[] {
    return Array.from(this.adjacencyMap.keys())
  }

  private buildDefaultEdges(): void {
    const edges: TopicEdge[] = [
      { from: 'dsa-arrays-two-pointer', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 10 },
      { from: 'dsa-arrays-sliding-window', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 10 },
      { from: 'dsa-arrays-sliding-window', to: 'dsa-arrays-two-pointer', relation: 'related', weight: 8 },

      { from: 'dsa-trees-bst', to: 'dsa-trees-traversal', relation: 'related', weight: 9 },
      { from: 'dsa-trees-avl', to: 'dsa-trees-bst', relation: 'prerequisite', weight: 10 },
      { from: 'dsa-trees-traversal', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 5 },

      { from: 'dsa-graphs-bfs', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 6 },
      { from: 'dsa-graphs-dfs', to: 'dsa-trees-traversal', relation: 'related', weight: 7 },
      { from: 'dsa-graphs-dijkstra', to: 'dsa-graphs-bfs', relation: 'prerequisite', weight: 9 },

      { from: 'dsa-sorting-merge', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 8 },
      { from: 'dsa-sorting-quick', to: 'dsa-sorting-merge', relation: 'related', weight: 7 },

      { from: 'dsa-dp-memoization', to: 'dsa-arrays-basics', relation: 'prerequisite', weight: 7 },
      { from: 'dsa-dp-tabulation', to: 'dsa-dp-memoization', relation: 'next', weight: 10 },

      { from: 'dsa-arrays-basics', to: 'dsa-sorting-merge', relation: 'next', weight: 6 },
      { from: 'dsa-sorting-merge', to: 'dsa-trees', relation: 'next', weight: 5 },
      { from: 'dsa-trees', to: 'dsa-graphs', relation: 'next', weight: 5 },
      { from: 'dsa-graphs', to: 'dsa-dp', relation: 'next', weight: 4 },

      { from: 'web-html-basics', to: 'web-css', relation: 'next', weight: 9 },
      { from: 'web-css-flexbox', to: 'web-html-basics', relation: 'prerequisite', weight: 8 },
      { from: 'web-css-grid', to: 'web-css-flexbox', relation: 'related', weight: 9 },
      { from: 'web-js-basics', to: 'web-html-basics', relation: 'prerequisite', weight: 7 },
      { from: 'web-js-dom', to: 'web-js-basics', relation: 'prerequisite', weight: 9 },
      { from: 'web-js-async', to: 'web-js-basics', relation: 'prerequisite', weight: 8 },

      { from: 'sd-fundamentals', to: 'dsa', relation: 'prerequisite', weight: 5 },
      { from: 'sd-scalability', to: 'sd-fundamentals', relation: 'next', weight: 9 },
      { from: 'sd-load-balancing', to: 'sd-scalability', relation: 'related', weight: 8 },
      { from: 'sd-caching', to: 'sd-scalability', relation: 'related', weight: 8 },
      { from: 'sd-databases', to: 'sd-fundamentals', relation: 'related', weight: 7 },

      { from: 'dsa', to: 'web-dev', relation: 'see-also', weight: 4 },
      { from: 'dsa', to: 'system-design', relation: 'see-also', weight: 6 },
      { from: 'web-dev', to: 'devops', relation: 'see-also', weight: 5 },
      { from: 'ai-ml', to: 'dsa', relation: 'see-also', weight: 5 },
    ]

    for (const edge of edges) {
      this.addEdge(edge)
    }
  }
}
