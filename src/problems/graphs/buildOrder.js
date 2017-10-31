/*
Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). DAG
All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

EXAMPLE
Input:
  projects: a, b, c, d, e, f
  dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output: f, e, a, b, d, c
        f, a, b, d, c (e can be anywhere)
*/

class Graph {
  constructor() {
    this.start = null;
    this.storage = {};
    this.edges = [];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

function buildOrder(projects, dependencies) {
  // a -- d
  // f -- b
  // b -- d
    // f -- b -- d
  // f -- a
  // d -- c
    // f -- a -- d -- c
    //   \_ b __/
  const graph = new Graph();

  for (let dep of dependencies) {
    if (!hasNode(graph, dep[0])) {
      let node = new Node(dep[0])
      node.edges.push(dep[1].value);
      graph.push(node);
      if (!graph.start) {
        graph.start = node;
      }
    }
    if (!hasNode(graph, dep[1])) {
      let node = new Node(dep[1]);
      graph.push(node);
    }
    if (!hasEdge(graph.edges, dep)) {
      graph.edges.push(dep);
    }
  }
}

function hasNode(graph, target) {
  let queue = [];
  let n;
  graph.start.visited = true;
  queue.push(graph.start);

  while (queue.length) {
    n = queue.shift();
    if (n.value === target) {
      return true;
    }

    for (let i = 0; i < n.edges.length; i++) {
      let neighbor = n.edges[1];
      if (!neighbor.visited) {
        neighbor.visited = true;
        queue.push(neighbor);
      }
    }
  }
  return false;
}

function hasEdge(edges, target) {
  for (let edge of edges) {
    if (edge[0] === target[0] && edge[1] === target[1]) {
      return true;
    }
  }
  return false;
}
