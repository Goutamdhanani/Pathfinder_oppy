import { Topic } from '../types/curriculum';

export const curriculum: Topic[] = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Fundamental data structure for storing elements in contiguous memory',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 8,
    level: 'foundation',
    prerequisites: [],
    theory: {
      concept: 'An array is a collection of elements stored in contiguous memory locations. Elements are accessed using indices, starting from 0.',
      complexity: {
        time: 'Access: O(1), Search: O(n), Insertion: O(n), Deletion: O(n)',
        space: 'O(n)'
      },
      whenToUse: 'Use arrays when you need fast access to elements by index, have a known size, or need cache-friendly data access patterns.'
    },
    implementation: {
      code: `# Basic Array Operations
def array_operations():
    # Initialize array
    arr = [1, 2, 3, 4, 5]
    
    # Access element
    first = arr[0]  # O(1)
    
    # Insert at end
    arr.append(6)  # O(1) amortized
    
    # Insert at specific position
    arr.insert(2, 10)  # O(n)
    
    # Delete element
    arr.remove(10)  # O(n)
    
    # Search for element
    index = arr.index(3)  # O(n)
    
    return arr

# 2D Array Operations
def matrix_operations():
    # Initialize 2D array
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    
    # Access element
    element = matrix[1][2]  # O(1)
    
    # Traverse matrix
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            print(matrix[i][j], end=' ')
        print()
    
    return matrix`,
      walkthrough: [
        'Arrays store elements in contiguous memory locations',
        'Index-based access provides O(1) time complexity',
        'Insertion/deletion in middle requires shifting elements',
        'Dynamic arrays (Python lists) can grow/shrink automatically'
      ]
    },
    visualAids: {
      ascii: `
Array Structure:
[0] [1] [2] [3] [4]
 1   2   3   4   5
 ↑               ↑
start           end

2D Array:
[0][0] [0][1] [0][2]
[1][0] [1][1] [1][2]
[2][0] [2][1] [2][2]
`,
      steps: [
        'Memory allocated contiguously',
        'Index calculation: base_address + (index * element_size)',
        'Access any element in constant time',
        'Insertion requires shifting elements to the right'
      ]
    },
    practiceProblems: [
      {
        title: 'Two Sum',
        difficulty: 'easy',
        leetcodeNum: 1,
        description: 'Find two numbers in array that add up to target'
      },
      {
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'easy',
        leetcodeNum: 121,
        description: 'Find maximum profit from buying and selling stock once'
      },
      {
        title: 'Product of Array Except Self',
        difficulty: 'medium',
        leetcodeNum: 238,
        description: 'Return array where each element is product of all other elements'
      },
      {
        title: 'Rotate Array',
        difficulty: 'medium',
        leetcodeNum: 189,
        description: 'Rotate array to the right by k steps'
      },
      {
        title: 'Trapping Rain Water',
        difficulty: 'hard',
        leetcodeNum: 42,
        description: 'Calculate how much water can be trapped after raining'
      }
    ]
  },
  {
    id: 'strings',
    title: 'Strings',
    description: 'Sequence of characters with various manipulation operations',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 6,
    level: 'foundation',
    prerequisites: [],
    theory: {
      concept: 'A string is a sequence of characters. In most languages, strings are immutable, meaning operations create new strings rather than modifying existing ones.',
      complexity: {
        time: 'Access: O(1), Search: O(n), Concatenation: O(n+m)',
        space: 'O(n)'
      },
      whenToUse: 'Use strings for text processing, pattern matching, parsing, and when working with character sequences.'
    },
    implementation: {
      code: `# String Operations
def string_operations():
    s = "Hello World"
    
    # Access character
    char = s[0]  # O(1)
    
    # String slicing
    substring = s[0:5]  # O(k) where k is slice length
    
    # String concatenation
    new_string = s + "!"  # O(n+m)
    
    # String methods
    upper = s.upper()
    lower = s.lower()
    words = s.split()
    
    # String searching
    index = s.find("World")  # O(n)
    
    return new_string

# Pattern Matching
def pattern_matching(text, pattern):
    """Simple pattern matching algorithm"""
    n, m = len(text), len(pattern)
    
    for i in range(n - m + 1):
        if text[i:i+m] == pattern:
            return i
    
    return -1

# String reversal
def reverse_string(s):
    """Reverse string in-place"""
    chars = list(s)
    left, right = 0, len(chars) - 1
    
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    
    return ''.join(chars)`,
      walkthrough: [
        'Strings are sequences of characters',
        'Most string operations create new strings (immutable)',
        'Slicing creates substrings efficiently',
        'Pattern matching requires comparing substrings'
      ]
    },
    visualAids: {
      ascii: `
String: "HELLO"
Index:   0 1 2 3 4
         H E L L O
         ↑       ↑
       start    end

Pattern Matching:
Text:    "HELLO WORLD"
Pattern: "WORLD"
         Match found at index 6
`,
      steps: [
        'Characters stored in sequence',
        'Index-based access to individual characters',
        'Substring operations create new string objects',
        'Pattern matching compares character by character'
      ]
    },
    practiceProblems: [
      {
        title: 'Valid Anagram',
        difficulty: 'easy',
        leetcodeNum: 242,
        description: 'Check if two strings are anagrams'
      },
      {
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'medium',
        leetcodeNum: 3,
        description: 'Find length of longest substring without repeating characters'
      },
      {
        title: 'Group Anagrams',
        difficulty: 'medium',
        leetcodeNum: 49,
        description: 'Group strings that are anagrams of each other'
      },
      {
        title: 'Valid Parentheses',
        difficulty: 'easy',
        leetcodeNum: 20,
        description: 'Check if parentheses are properly balanced'
      },
      {
        title: 'Minimum Window Substring',
        difficulty: 'hard',
        leetcodeNum: 76,
        description: 'Find minimum window substring containing all characters'
      }
    ]
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    description: 'Dynamic data structure with nodes connected via pointers',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 10,
    level: 'linear',
    prerequisites: ['arrays'],
    theory: {
      concept: 'A linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference to the next node.',
      complexity: {
        time: 'Access: O(n), Search: O(n), Insertion: O(1), Deletion: O(1)',
        space: 'O(n)'
      },
      whenToUse: 'Use linked lists when you need dynamic size, frequent insertions/deletions, or when the size is unknown at compile time.'
    },
    implementation: {
      code: `# Linked List Implementation
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def append(self, val):
        """Add element to end of list"""
        new_node = ListNode(val)
        
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        
        self.size += 1
    
    def prepend(self, val):
        """Add element to beginning of list"""
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def delete(self, val):
        """Delete first occurrence of value"""
        if not self.head:
            return
        
        if self.head.val == val:
            self.head = self.head.next
            self.size -= 1
            return
        
        current = self.head
        while current.next:
            if current.next.val == val:
                current.next = current.next.next
                self.size -= 1
                return
            current = current.next
    
    def find(self, val):
        """Find node with given value"""
        current = self.head
        while current:
            if current.val == val:
                return current
            current = current.next
        return None
    
    def reverse(self):
        """Reverse the linked list"""
        prev = None
        current = self.head
        
        while current:
            next_temp = current.next
            current.next = prev
            prev = current
            current = next_temp
        
        self.head = prev`,
      walkthrough: [
        'Each node contains data and pointer to next node',
        'Head pointer tracks the beginning of the list',
        'Insertion at beginning is O(1) operation',
        'Deletion requires finding the node first'
      ]
    },
    visualAids: {
      ascii: `
Singly Linked List:
Head → [1|*] → [2|*] → [3|*] → [4|NULL]

Doubly Linked List:
Head → [NULL|1|*] ⟷ [*|2|*] ⟷ [*|3|*] ⟷ [*|4|NULL] ← Tail

Circular Linked List:
Head → [1|*] → [2|*] → [3|*] → [4|*] ↗
        ↑__________________________|
`,
      steps: [
        'Nodes allocated in different memory locations',
        'Pointers connect nodes in sequence',
        'Traversal follows pointer chain',
        'Insertion/deletion updates pointer references'
      ]
    },
    practiceProblems: [
      {
        title: 'Reverse Linked List',
        difficulty: 'easy',
        leetcodeNum: 206,
        description: 'Reverse a singly linked list'
      },
      {
        title: 'Linked List Cycle',
        difficulty: 'easy',
        leetcodeNum: 141,
        description: 'Detect if linked list has a cycle'
      },
      {
        title: 'Merge Two Sorted Lists',
        difficulty: 'easy',
        leetcodeNum: 21,
        description: 'Merge two sorted linked lists'
      },
      {
        title: 'Remove Nth Node From End',
        difficulty: 'medium',
        leetcodeNum: 19,
        description: 'Remove nth node from end of list'
      },
      {
        title: 'Copy List with Random Pointer',
        difficulty: 'hard',
        leetcodeNum: 138,
        description: 'Deep copy linked list with random pointers'
      }
    ]
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'LIFO (Last In, First Out) data structure',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 6,
    level: 'linear',
    prerequisites: ['arrays'],
    theory: {
      concept: 'A stack is a linear data structure that follows the LIFO principle. Elements are added and removed from the same end (top).',
      complexity: {
        time: 'Push: O(1), Pop: O(1), Peek: O(1)',
        space: 'O(n)'
      },
      whenToUse: 'Use stacks for function calls, expression evaluation, backtracking, and when you need to reverse the order of processing.'
    },
    implementation: {
      code: `# Stack Implementation using List
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add item to top of stack"""
        self.items.append(item)
    
    def pop(self):
        """Remove and return top item"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        """Return top item without removing it"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        """Check if stack is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return number of items in stack"""
        return len(self.items)

# Stack Applications
def is_balanced_parentheses(expression):
    """Check if parentheses are balanced"""
    stack = Stack()
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in expression:
        if char in pairs:  # Opening bracket
            stack.push(char)
        elif char in pairs.values():  # Closing bracket
            if stack.is_empty():
                return False
            if pairs[stack.pop()] != char:
                return False
    
    return stack.is_empty()

def evaluate_postfix(expression):
    """Evaluate postfix expression"""
    stack = Stack()
    
    for token in expression.split():
        if token in ['+', '-', '*', '/']:
            b = stack.pop()
            a = stack.pop()
            result = eval(f"{a} {token} {b}")
            stack.push(result)
        else:
            stack.push(int(token))
    
    return stack.pop()`,
      walkthrough: [
        'Stack maintains LIFO order',
        'Push adds element to top',
        'Pop removes element from top',
        'Peek views top element without removing'
      ]
    },
    visualAids: {
      ascii: `
Stack Operations:
    Push 1      Push 2      Push 3      Pop
    ------      ------      ------      ---
      |          |  2  |     |  3  |     |  2  |
      |          |  1  |     |  2  |     |  1  |
    ------      ------      ------      ------
     Top         Top         Top         Top

Balanced Parentheses:
Expression: "((()))"
Stack:  [ → [( → [(( → [((( → [(( → [( → [] ✓
`,
      steps: [
        'Elements added to top of stack',
        'Only top element is accessible',
        'Removal follows reverse order of insertion',
        'Stack empty when all elements popped'
      ]
    },
    practiceProblems: [
      {
        title: 'Valid Parentheses',
        difficulty: 'easy',
        leetcodeNum: 20,
        description: 'Check if parentheses are properly balanced'
      },
      {
        title: 'Min Stack',
        difficulty: 'easy',
        leetcodeNum: 155,
        description: 'Design stack with min operation in O(1)'
      },
      {
        title: 'Evaluate Reverse Polish Notation',
        difficulty: 'medium',
        leetcodeNum: 150,
        description: 'Evaluate postfix expression'
      },
      {
        title: 'Daily Temperatures',
        difficulty: 'medium',
        leetcodeNum: 739,
        description: 'Find next warmer temperature for each day'
      },
      {
        title: 'Largest Rectangle in Histogram',
        difficulty: 'hard',
        leetcodeNum: 84,
        description: 'Find area of largest rectangle in histogram'
      }
    ]
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'FIFO (First In, First Out) data structure',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 6,
    level: 'linear',
    prerequisites: ['arrays'],
    theory: {
      concept: 'A queue is a linear data structure that follows the FIFO principle. Elements are added at the rear and removed from the front.',
      complexity: {
        time: 'Enqueue: O(1), Dequeue: O(1), Front: O(1)',
        space: 'O(n)'
      },
      whenToUse: 'Use queues for breadth-first search, task scheduling, handling requests, and when you need to process items in order.'
    },
    implementation: {
      code: `from collections import deque

# Queue Implementation using deque
class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        """Add item to rear of queue"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove and return front item"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items.popleft()
    
    def front(self):
        """Return front item without removing it"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        """Check if queue is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return number of items in queue"""
        return len(self.items)

# Circular Queue Implementation
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = 0
        self.size = 0
    
    def enqueue(self, item):
        if self.size == self.capacity:
            raise OverflowError("Queue is full")
        
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
    
    def dequeue(self):
        if self.size == 0:
            raise IndexError("Queue is empty")
        
        item = self.queue[self.front]
        self.queue[self.front] = None
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item

# Priority Queue using heap
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
    
    def enqueue(self, item, priority):
        """Add item with priority (lower number = higher priority)"""
        heapq.heappush(self.heap, (priority, item))
    
    def dequeue(self):
        """Remove and return highest priority item"""
        if not self.heap:
            raise IndexError("Queue is empty")
        return heapq.heappop(self.heap)[1]`,
      walkthrough: [
        'Queue maintains FIFO order',
        'Enqueue adds element to rear',
        'Dequeue removes element from front',
        'Circular queue reuses array space efficiently'
      ]
    },
    visualAids: {
      ascii: `
Queue Operations:
Enqueue 1    Enqueue 2    Enqueue 3    Dequeue
---------    ---------    ---------    -------
Front → |1|   Front → |1|2|   Front → |1|2|3|   Front → |2|3|
        Rear           Rear             Rear             Rear

Circular Queue:
[1|2|3|_|_]
 ↑       ↑
Front   Rear

Priority Queue:
Priority | Item
---------|-----
   1     |  A   ← Highest priority
   2     |  B
   3     |  C
`,
      steps: [
        'Elements added to rear of queue',
        'Elements removed from front of queue',
        'Maintains order of insertion',
        'Circular queue wraps around array'
      ]
    },
    practiceProblems: [
      {
        title: 'Implement Queue using Stacks',
        difficulty: 'easy',
        leetcodeNum: 232,
        description: 'Implement queue using two stacks'
      },
      {
        title: 'Design Circular Queue',
        difficulty: 'medium',
        leetcodeNum: 622,
        description: 'Design circular queue with fixed size'
      },
      {
        title: 'Sliding Window Maximum',
        difficulty: 'hard',
        leetcodeNum: 239,
        description: 'Find maximum in each sliding window'
      },
      {
        title: 'Number of Islands',
        difficulty: 'medium',
        leetcodeNum: 200,
        description: 'Count islands using BFS with queue'
      },
      {
        title: 'Task Scheduler',
        difficulty: 'medium',
        leetcodeNum: 621,
        description: 'Schedule tasks with cooldown period'
      }
    ]
  },
  {
    id: 'binary-trees',
    title: 'Binary Trees',
    description: 'Hierarchical data structure with at most two children per node',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 12,
    level: 'non-linear',
    prerequisites: ['linked-lists', 'stacks', 'queues'],
    theory: {
      concept: 'A binary tree is a hierarchical data structure where each node has at most two children, referred to as left and right child.',
      complexity: {
        time: 'Search: O(n), Insert: O(n), Delete: O(n), Traversal: O(n)',
        space: 'O(n) for storage, O(h) for recursion where h is height'
      },
      whenToUse: 'Use binary trees for hierarchical data, expression parsing, decision trees, and as foundation for more advanced tree structures.'
    },
    implementation: {
      code: `# Binary Tree Implementation
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        """Insert value into binary tree (level-order)"""
        if not self.root:
            self.root = TreeNode(val)
            return
        
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            
            if not node.left:
                node.left = TreeNode(val)
                return
            elif not node.right:
                node.right = TreeNode(val)
                return
            else:
                queue.append(node.left)
                queue.append(node.right)
    
    def inorder_traversal(self, node):
        """Left → Root → Right"""
        if node:
            self.inorder_traversal(node.left)
            print(node.val, end=' ')
            self.inorder_traversal(node.right)
    
    def preorder_traversal(self, node):
        """Root → Left → Right"""
        if node:
            print(node.val, end=' ')
            self.preorder_traversal(node.left)
            self.preorder_traversal(node.right)
    
    def postorder_traversal(self, node):
        """Left → Right → Root"""
        if node:
            self.postorder_traversal(node.left)
            self.postorder_traversal(node.right)
            print(node.val, end=' ')
    
    def level_order_traversal(self):
        """Breadth-first traversal"""
        if not self.root:
            return
        
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            print(node.val, end=' ')
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    def height(self, node):
        """Calculate height of tree"""
        if not node:
            return 0
        return 1 + max(self.height(node.left), self.height(node.right))
    
    def diameter(self, node):
        """Calculate diameter of tree"""
        if not node:
            return 0
        
        left_height = self.height(node.left)
        right_height = self.height(node.right)
        
        left_diameter = self.diameter(node.left)
        right_diameter = self.diameter(node.right)
        
        return max(left_height + right_height + 1, 
                  max(left_diameter, right_diameter))`,
      walkthrough: [
        'Each node has at most two children',
        'Tree structure enables hierarchical organization',
        'Traversal algorithms visit nodes in different orders',
        'Height determines tree efficiency'
      ]
    },
    visualAids: {
      ascii: `
Binary Tree Structure:
        A
       / \\
      B   C
     / \\   \\
    D   E   F

Traversal Orders:
Inorder:   D B E A C F  (Left → Root → Right)
Preorder:  A B D E C F  (Root → Left → Right)
Postorder: D E B F C A  (Left → Right → Root)
Level:     A B C D E F  (Level by level)

Tree Height Calculation:
        A (height=3)
       / \\
   (h=2)B   C(h=1)
     / \\   \\
 (h=1)D   E   F(h=1)
`,
      steps: [
        'Root node at top of hierarchy',
        'Each node connects to at most two children',
        'Leaf nodes have no children',
        'Height measured from root to deepest leaf'
      ]
    },
    practiceProblems: [
      {
        title: 'Binary Tree Inorder Traversal',
        difficulty: 'easy',
        leetcodeNum: 94,
        description: 'Traverse binary tree in inorder'
      },
      {
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'easy',
        leetcodeNum: 104,
        description: 'Find maximum depth of binary tree'
      },
      {
        title: 'Binary Tree Level Order Traversal',
        difficulty: 'medium',
        leetcodeNum: 102,
        description: 'Traverse tree level by level'
      },
      {
        title: 'Diameter of Binary Tree',
        difficulty: 'easy',
        leetcodeNum: 543,
        description: 'Find diameter of binary tree'
      },
      {
        title: 'Binary Tree Maximum Path Sum',
        difficulty: 'hard',
        leetcodeNum: 124,
        description: 'Find maximum path sum in binary tree'
      }
    ]
  },
  {
    id: 'binary-search-trees',
    title: 'Binary Search Trees',
    description: 'Ordered binary tree with left < root < right property',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 10,
    level: 'non-linear',
    prerequisites: ['binary-trees'],
    theory: {
      concept: 'A Binary Search Tree (BST) is a binary tree where for each node, all values in the left subtree are less than the node value, and all values in the right subtree are greater.',
      complexity: {
        time: 'Search: O(log n) avg, O(n) worst; Insert: O(log n) avg, O(n) worst; Delete: O(log n) avg, O(n) worst',
        space: 'O(n) for storage, O(log n) avg recursion depth'
      },
      whenToUse: 'Use BSTs for efficient searching, sorted data access, range queries, and when you need both insertion and lookup operations.'
    },
    implementation: {
      code: `# Binary Search Tree Implementation
class BSTNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        """Insert value maintaining BST property"""
        self.root = self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        if not node:
            return BSTNode(val)
        
        if val < node.val:
            node.left = self._insert_recursive(node.left, val)
        elif val > node.val:
            node.right = self._insert_recursive(node.right, val)
        
        return node
    
    def search(self, val):
        """Search for value in BST"""
        return self._search_recursive(self.root, val)
    
    def _search_recursive(self, node, val):
        if not node or node.val == val:
            return node
        
        if val < node.val:
            return self._search_recursive(node.left, val)
        else:
            return self._search_recursive(node.right, val)
    
    def delete(self, val):
        """Delete value from BST"""
        self.root = self._delete_recursive(self.root, val)
    
    def _delete_recursive(self, node, val):
        if not node:
            return node
        
        if val < node.val:
            node.left = self._delete_recursive(node.left, val)
        elif val > node.val:
            node.right = self._delete_recursive(node.right, val)
        else:
            # Node to be deleted found
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            
            # Node with two children
            successor = self._find_min(node.right)
            node.val = successor.val
            node.right = self._delete_recursive(node.right, successor.val)
        
        return node
    
    def _find_min(self, node):
        """Find minimum value node"""
        while node.left:
            node = node.left
        return node
    
    def inorder(self):
        """Inorder traversal gives sorted order"""
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.val)
            self._inorder_recursive(node.right, result)
    
    def is_valid_bst(self, node, min_val=float('-inf'), max_val=float('inf')):
        """Check if tree is valid BST"""
        if not node:
            return True
        
        if node.val <= min_val or node.val >= max_val:
            return False
        
        return (self.is_valid_bst(node.left, min_val, node.val) and 
                self.is_valid_bst(node.right, node.val, max_val))`,
      walkthrough: [
        'BST property: left < root < right',
        'Search follows path based on comparisons',
        'Insertion maintains BST property',
        'Deletion has three cases: leaf, one child, two children'
      ]
    },
    visualAids: {
      ascii: `
BST Structure:
        8
       / \\
      3   10
     / \\    \\
    1   6    14
       / \\   /
      4   7 13

Search for 6:
8 → 3 → 6 ✓ (3 comparisons)

Insertion of 5:
        8
       / \\
      3   10
     / \\    \\
    1   6    14
       / \\   /
      4   7 13
         /
        5

Deletion Cases:
1. Leaf node: Simply remove
2. One child: Replace with child
3. Two children: Replace with inorder successor
`,
      steps: [
        'Compare value with current node',
        'Go left if smaller, right if larger',
        'Insert at first empty position',
        'Delete by replacing with successor'
      ]
    },
    practiceProblems: [
      {
        title: 'Validate Binary Search Tree',
        difficulty: 'medium',
        leetcodeNum: 98,
        description: 'Check if binary tree is valid BST'
      },
      {
        title: 'Lowest Common Ancestor of BST',
        difficulty: 'easy',
        leetcodeNum: 235,
        description: 'Find LCA of two nodes in BST'
      },
      {
        title: 'Convert Sorted Array to BST',
        difficulty: 'easy',
        leetcodeNum: 108,
        description: 'Build balanced BST from sorted array'
      },
      {
        title: 'Kth Smallest Element in BST',
        difficulty: 'medium',
        leetcodeNum: 230,
        description: 'Find kth smallest element in BST'
      },
      {
        title: 'Delete Node in BST',
        difficulty: 'medium',
        leetcodeNum: 450,
        description: 'Delete node from BST'
      }
    ]
  },
  {
    id: 'heaps',
    title: 'Heaps & Priority Queues',
    description: 'Complete binary tree with heap property for efficient priority operations',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 8,
    level: 'non-linear',
    prerequisites: ['binary-trees'],
    theory: {
      concept: 'A heap is a complete binary tree where each node satisfies the heap property: parent >= children (max heap) or parent <= children (min heap).',
      complexity: {
        time: 'Insert: O(log n), Extract: O(log n), Peek: O(1), Build: O(n)',
        space: 'O(n)'
      },
      whenToUse: 'Use heaps for priority queues, finding kth largest/smallest elements, heap sort, and when you need efficient access to extreme values.'
    },
    implementation: {
      code: `import heapq

# Min Heap Implementation using heapq
class MinHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        """Insert value into heap"""
        heapq.heappush(self.heap, val)
    
    def pop(self):
        """Remove and return minimum value"""
        if not self.heap:
            raise IndexError("Heap is empty")
        return heapq.heappop(self.heap)
    
    def peek(self):
        """Return minimum value without removing"""
        if not self.heap:
            raise IndexError("Heap is empty")
        return self.heap[0]
    
    def size(self):
        return len(self.heap)

# Max Heap Implementation
class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        """Insert value into max heap"""
        heapq.heappush(self.heap, -val)  # Negate for max heap
    
    def pop(self):
        """Remove and return maximum value"""
        if not self.heap:
            raise IndexError("Heap is empty")
        return -heapq.heappop(self.heap)  # Negate back
    
    def peek(self):
        """Return maximum value without removing"""
        if not self.heap:
            raise IndexError("Heap is empty")
        return -self.heap[0]  # Negate back

# Manual Heap Implementation
class Heap:
    def __init__(self, is_max_heap=False):
        self.heap = []
        self.is_max_heap = is_max_heap
    
    def _parent(self, i):
        return (i - 1) // 2
    
    def _left_child(self, i):
        return 2 * i + 1
    
    def _right_child(self, i):
        return 2 * i + 2
    
    def _compare(self, i, j):
        """Compare based on heap type"""
        if self.is_max_heap:
            return self.heap[i] > self.heap[j]
        else:
            return self.heap[i] < self.heap[j]
    
    def _heapify_up(self, i):
        """Restore heap property upward"""
        while i > 0:
            parent_idx = self._parent(i)
            if self._compare(i, parent_idx):
                self.heap[i], self.heap[parent_idx] = self.heap[parent_idx], self.heap[i]
                i = parent_idx
            else:
                break
    
    def _heapify_down(self, i):
        """Restore heap property downward"""
        while True:
            extreme = i
            left = self._left_child(i)
            right = self._right_child(i)
            
            if left < len(self.heap) and self._compare(left, extreme):
                extreme = left
            
            if right < len(self.heap) and self._compare(right, extreme):
                extreme = right
            
            if extreme != i:
                self.heap[i], self.heap[extreme] = self.heap[extreme], self.heap[i]
                i = extreme
            else:
                break
    
    def push(self, val):
        """Insert value into heap"""
        self.heap.append(val)
        self._heapify_up(len(self.heap) - 1)
    
    def pop(self):
        """Remove and return extreme value"""
        if not self.heap:
            raise IndexError("Heap is empty")
        
        if len(self.heap) == 1:
            return self.heap.pop()
        
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root`,
      walkthrough: [
        'Heap maintains complete binary tree structure',
        'Parent-child relationship determines heap property',
        'Insertion requires upward heapification',
        'Deletion requires downward heapification'
      ]
    },
    visualAids: {
      ascii: `
Max Heap Structure:
        100
       /   \\
     80     90
    /  \\   /  \\
   70  60 85  75

Array Representation:
[100, 80, 90, 70, 60, 85, 75]
  0   1   2   3   4   5   6

Parent-Child Relationships:
- Parent of i: (i-1)/2
- Left child of i: 2*i+1
- Right child of i: 2*i+2

Insertion Process:
1. Add to end of array
2. Bubble up until heap property satisfied

        100           100
       /   \\         /   \\
     80     90  →   95     90
    /  \\   /  \\   /  \\   /  \\
   70  60 85  75 80  60 85  75
                 /
               70

Deletion Process:
1. Replace root with last element
2. Bubble down until heap property satisfied
`,
      steps: [
        'Complete binary tree filled level by level',
        'Heap property maintained at all levels',
        'Array representation enables efficient access',
        'Heapify operations restore heap property'
      ]
    },
    practiceProblems: [
      {
        title: 'Kth Largest Element in Array',
        difficulty: 'medium',
        leetcodeNum: 215,
        description: 'Find kth largest element using heap'
      },
      {
        title: 'Top K Frequent Elements',
        difficulty: 'medium',
        leetcodeNum: 347,
        description: 'Find k most frequent elements'
      },
      {
        title: 'Merge k Sorted Lists',
        difficulty: 'hard',
        leetcodeNum: 23,
        description: 'Merge k sorted linked lists using heap'
      },
      {
        title: 'Find Median from Data Stream',
        difficulty: 'hard',
        leetcodeNum: 295,
        description: 'Find median using two heaps'
      },
      {
        title: 'Task Scheduler',
        difficulty: 'medium',
        leetcodeNum: 621,
        description: 'Schedule tasks using priority queue'
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Network of vertices connected by edges',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 15,
    level: 'non-linear',
    prerequisites: ['stacks', 'queues'],
    theory: {
      concept: 'A graph is a collection of vertices (nodes) connected by edges. Graphs can be directed or undirected, weighted or unweighted.',
      complexity: {
        time: 'DFS/BFS: O(V+E), Adjacency Matrix: O(V²), Adjacency List: O(V+E)',
        space: 'Adjacency Matrix: O(V²), Adjacency List: O(V+E)'
      },
      whenToUse: 'Use graphs for modeling relationships, networks, shortest paths, connectivity problems, and social networks.'
    },
    implementation: {
      code: `from collections import defaultdict, deque

# Graph Implementation using Adjacency List
class Graph:
    def __init__(self, directed=False):
        self.graph = defaultdict(list)
        self.directed = directed
    
    def add_edge(self, u, v, weight=1):
        """Add edge between vertices u and v"""
        self.graph[u].append((v, weight))
        if not self.directed:
            self.graph[v].append((u, weight))
    
    def dfs(self, start, visited=None):
        """Depth-First Search traversal"""
        if visited is None:
            visited = set()
        
        visited.add(start)
        print(start, end=' ')
        
        for neighbor, _ in self.graph[start]:
            if neighbor not in visited:
                self.dfs(neighbor, visited)
    
    def bfs(self, start):
        """Breadth-First Search traversal"""
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            vertex = queue.popleft()
            print(vertex, end=' ')
            
            for neighbor, _ in self.graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
    
    def has_cycle_directed(self):
        """Check for cycle in directed graph using DFS"""
        WHITE, GRAY, BLACK = 0, 1, 2
        color = defaultdict(int)
        
        def dfs_cycle(node):
            if color[node] == GRAY:
                return True  # Back edge found
            if color[node] == BLACK:
                return False  # Already processed
            
            color[node] = GRAY
            for neighbor, _ in self.graph[node]:
                if dfs_cycle(neighbor):
                    return True
            color[node] = BLACK
            return False
        
        for node in self.graph:
            if color[node] == WHITE:
                if dfs_cycle(node):
                    return True
        return False
    
    def topological_sort(self):
        """Topological sort using DFS"""
        if not self.directed:
            raise ValueError("Topological sort only for directed graphs")
        
        visited = set()
        stack = []
        
        def dfs_topo(node):
            visited.add(node)
            for neighbor, _ in self.graph[node]:
                if neighbor not in visited:
                    dfs_topo(neighbor)
            stack.append(node)
        
        for node in self.graph:
            if node not in visited:
                dfs_topo(node)
        
        return stack[::-1]  # Reverse for topological order
    
    def shortest_path_dijkstra(self, start):
        """Dijkstra's algorithm for shortest paths"""
        import heapq
        
        distances = defaultdict(lambda: float('inf'))
        distances[start] = 0
        pq = [(0, start)]
        
        while pq:
            current_dist, current = heapq.heappop(pq)
            
            if current_dist > distances[current]:
                continue
            
            for neighbor, weight in self.graph[current]:
                distance = current_dist + weight
                
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    heapq.heappush(pq, (distance, neighbor))
        
        return dict(distances)

# Graph Algorithms
def number_of_islands(grid):
    """Count number of islands in 2D grid"""
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    visited = set()
    count = 0
    
    def dfs(r, c):
        if (r, c) in visited or r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        visited.add((r, c))
        # Check all 4 directions
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in visited:
                dfs(r, c)
                count += 1
    
    return count`,
      walkthrough: [
        'Vertices represent entities, edges represent relationships',
        'DFS explores as far as possible before backtracking',
        'BFS explores all neighbors before moving to next level',
        'Different representations suit different operations'
      ]
    },
    visualAids: {
      ascii: `
Graph Representations:

Adjacency Matrix:
    A B C D
A [ 0 1 1 0 ]
B [ 1 0 0 1 ]
C [ 1 0 0 1 ]
D [ 0 1 1 0 ]

Adjacency List:
A → B, C
B → A, D
C → A, D
D → B, C

Graph Traversals:
     A
    / \\
   B   C
   |   |
   D   E

DFS: A → B → D → C → E
BFS: A → B → C → D → E

Directed Graph with Cycle:
A → B → C
    ↓   ↑
    D →

Topological Sort:
A → B → D → C (one possible order)
`,
      steps: [
        'Graph structure represents relationships',
        'DFS uses stack (recursion) for depth-first exploration',
        'BFS uses queue for level-by-level exploration',
        'Cycle detection helps validate graph properties'
      ]
    },
    practiceProblems: [
      {
        title: 'Number of Islands',
        difficulty: 'medium',
        leetcodeNum: 200,
        description: 'Count connected components in 2D grid'
      },
      {
        title: 'Clone Graph',
        difficulty: 'medium',
        leetcodeNum: 133,
        description: 'Deep copy of undirected graph'
      },
      {
        title: 'Course Schedule',
        difficulty: 'medium',
        leetcodeNum: 207,
        description: 'Detect cycle in directed graph'
      },
      {
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'medium',
        leetcodeNum: 417,
        description: 'Find cells that can reach both oceans'
      },
      {
        title: 'Word Ladder',
        difficulty: 'hard',
        leetcodeNum: 127,
        description: 'Find shortest transformation sequence'
      }
    ]
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Algorithms for arranging elements in order',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 10,
    level: 'advanced',
    prerequisites: ['arrays'],
    theory: {
      concept: 'Sorting algorithms arrange elements in a specific order (ascending/descending). Different algorithms have different time/space complexities and stability properties.',
      complexity: {
        time: 'O(n log n) for efficient algorithms like merge sort, quick sort, heap sort',
        space: 'O(1) for in-place sorts, O(n) for merge sort'
      },
      whenToUse: 'Use sorting for data organization, search optimization, and as preprocessing for other algorithms.'
    },
    implementation: {
      code: `# Sorting Algorithms Implementation

def bubble_sort(arr):
    """Bubble Sort: O(n²) time, O(1) space"""
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

def selection_sort(arr):
    """Selection Sort: O(n²) time, O(1) space"""
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def insertion_sort(arr):
    """Insertion Sort: O(n²) time, O(1) space"""
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

def merge_sort(arr):
    """Merge Sort: O(n log n) time, O(n) space"""
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    """Merge two sorted arrays"""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def quick_sort(arr):
    """Quick Sort: O(n log n) avg, O(n²) worst, O(log n) space"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

def heap_sort(arr):
    """Heap Sort: O(n log n) time, O(1) space"""
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        if left < n and arr[left] > arr[largest]:
            largest = left
        
        if right < n and arr[right] > arr[largest]:
            largest = right
        
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    
    return arr

def counting_sort(arr):
    """Counting Sort: O(n+k) time, O(k) space"""
    if not arr:
        return arr
    
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    
    count = [0] * range_val
    
    # Count occurrences
    for num in arr:
        count[num - min_val] += 1
    
    # Build sorted array
    sorted_arr = []
    for i in range(range_val):
        sorted_arr.extend([i + min_val] * count[i])
    
    return sorted_arr

def radix_sort(arr):
    """Radix Sort: O(d * (n + k)) time"""
    if not arr:
        return arr
    
    max_val = max(arr)
    exp = 1
    
    while max_val // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10
    
    return arr

def counting_sort_for_radix(arr, exp):
    """Counting sort for radix sort"""
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1
    
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    
    for i in range(n):
        arr[i] = output[i]`,
      walkthrough: [
        'Different algorithms trade time vs space complexity',
        'Comparison-based sorts have O(n log n) lower bound',
        'Non-comparison sorts can achieve O(n) in special cases',
        'Stability preserves relative order of equal elements'
      ]
    },
    visualAids: {
      ascii: `
Sorting Algorithm Comparison:

Array: [64, 34, 25, 12, 22, 11, 90]

Bubble Sort Progress:
Pass 1: [34, 25, 12, 22, 11, 64, 90]
Pass 2: [25, 12, 22, 11, 34, 64, 90]
Pass 3: [12, 22, 11, 25, 34, 64, 90]
...

Merge Sort Divide & Conquer:
[64, 34, 25, 12, 22, 11, 90]
       /              \\
[64, 34, 25]      [12, 22, 11, 90]
    /    \\           /         \\
[64]   [34, 25]   [12, 22]   [11, 90]

Quick Sort Partitioning:
Pivot: 25
[12, 22, 11] 25 [64, 34, 90]
    ↓         ↓      ↓
  Sort      Fixed   Sort

Time Complexity Summary:
Algorithm    | Best    | Average | Worst   | Space
-------------|---------|---------|---------|-------
Bubble       | O(n)    | O(n²)   | O(n²)   | O(1)
Selection    | O(n²)   | O(n²)   | O(n²)   | O(1)
Insertion    | O(n)    | O(n²)   | O(n²)   | O(1)
Merge        | O(n lg n)| O(n lg n)| O(n lg n)| O(n)
Quick        | O(n lg n)| O(n lg n)| O(n²)   | O(lg n)
Heap         | O(n lg n)| O(n lg n)| O(n lg n)| O(1)
`,
      steps: [
        'Choose algorithm based on data characteristics',
        'Consider time vs space trade-offs',
        'Stability matters for complex data types',
        'Adaptive algorithms perform better on partially sorted data'
      ]
    },
    practiceProblems: [
      {
        title: 'Sort Colors',
        difficulty: 'medium',
        leetcodeNum: 75,
        description: 'Sort array with 3 colors using Dutch flag algorithm'
      },
      {
        title: 'Merge Intervals',
        difficulty: 'medium',
        leetcodeNum: 56,
        description: 'Merge overlapping intervals after sorting'
      },
      {
        title: 'Largest Number',
        difficulty: 'medium',
        leetcodeNum: 179,
        description: 'Arrange numbers to form largest number'
      },
      {
        title: 'Meeting Rooms II',
        difficulty: 'medium',
        leetcodeNum: 253,
        description: 'Find minimum meeting rooms needed'
      },
      {
        title: 'Count of Smaller Numbers After Self',
        difficulty: 'hard',
        leetcodeNum: 315,
        description: 'Count smaller elements using merge sort'
      }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Efficient search algorithm for sorted arrays',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 8,
    level: 'advanced',
    prerequisites: ['arrays', 'sorting'],
    theory: {
      concept: 'Binary search is a divide-and-conquer algorithm that finds a target value in a sorted array by repeatedly dividing the search interval in half.',
      complexity: {
        time: 'O(log n) for search operations',
        space: 'O(1) iterative, O(log n) recursive'
      },
      whenToUse: 'Use binary search on sorted arrays, for finding boundaries, peak elements, or when you need logarithmic search time.'
    },
    implementation: {
      code: `# Binary Search Implementations

def binary_search(arr, target):
    """Classic binary search"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

def binary_search_recursive(arr, target, left=0, right=None):
    """Recursive binary search"""
    if right is None:
        right = len(arr) - 1
    
    if left > right:
        return -1
    
    mid = left + (right - left) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

def find_first_occurrence(arr, target):
    """Find first occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def find_last_occurrence(arr, target):
    """Find last occurrence of target"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            result = mid
            left = mid + 1  # Continue searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

def find_peak_element(arr):
    """Find peak element in array"""
    left, right = 0, len(arr) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if arr[mid] > arr[mid + 1]:
            right = mid
        else:
            left = mid + 1
    
    return left

def search_rotated_array(arr, target):
    """Search in rotated sorted array"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        
        # Check which half is sorted
        if arr[left] <= arr[mid]:  # Left half is sorted
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # Right half is sorted
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1

def find_minimum_rotated(arr):
    """Find minimum in rotated sorted array"""
    left, right = 0, len(arr) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if arr[mid] > arr[right]:
            left = mid + 1
        else:
            right = mid
    
    return left

def sqrt_binary_search(x):
    """Find square root using binary search"""
    if x < 2:
        return x
    
    left, right = 1, x // 2
    
    while left <= right:
        mid = left + (right - left) // 2
        square = mid * mid
        
        if square == x:
            return mid
        elif square < x:
            left = mid + 1
        else:
            right = mid - 1
    
    return right  # Return floor value

def search_2d_matrix(matrix, target):
    """Search in 2D sorted matrix"""
    if not matrix or not matrix[0]:
        return False
    
    rows, cols = len(matrix), len(matrix[0])
    left, right = 0, rows * cols - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        mid_value = matrix[mid // cols][mid % cols]
        
        if mid_value == target:
            return True
        elif mid_value < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return False`,
      walkthrough: [
        'Binary search eliminates half of search space each iteration',
        'Requires sorted array for correctness',
        'Template can be adapted for various search problems',
        'Boundary conditions are crucial for correctness'
      ]
    },
    visualAids: {
      ascii: `
Binary Search Process:
Array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
Target: 7

Step 1: left=0, right=9, mid=4
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
         ↑        ↑                    ↑
        left     mid                 right
        arr[4]=9 > 7, so right=mid-1=3

Step 2: left=0, right=3, mid=1
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
         ↑  ↑     ↑
        left mid right
        arr[1]=3 < 7, so left=mid+1=2

Step 3: left=2, right=3, mid=2
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
               ↑  ↑
              left/mid right
        arr[2]=5 < 7, so left=mid+1=3

Step 4: left=3, right=3, mid=3
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
                  ↑
              left/mid/right
        arr[3]=7 == 7, FOUND!

Search Space Reduction:
Initial: 10 elements
After 1: 5 elements
After 2: 3 elements
After 3: 2 elements
After 4: 1 element (found)
`,
      steps: [
        'Start with entire array as search space',
        'Calculate middle element',
        'Compare with target and eliminate half',
        'Repeat until target found or space exhausted'
      ]
    },
    practiceProblems: [
      {
        title: 'Binary Search',
        difficulty: 'easy',
        leetcodeNum: 704,
        description: 'Classic binary search implementation'
      },
      {
        title: 'Find First and Last Position',
        difficulty: 'medium',
        leetcodeNum: 34,
        description: 'Find first and last occurrence of target'
      },
      {
        title: 'Search in Rotated Sorted Array',
        difficulty: 'medium',
        leetcodeNum: 33,
        description: 'Search in rotated sorted array'
      },
      {
        title: 'Find Peak Element',
        difficulty: 'medium',
        leetcodeNum: 162,
        description: 'Find peak element in array'
      },
      {
        title: 'Median of Two Sorted Arrays',
        difficulty: 'hard',
        leetcodeNum: 4,
        description: 'Find median using binary search'
      }
    ]
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    description: 'Optimization technique using memoization and optimal substructure',
    tags: ['must-know', 'tricky', 'interview-frequent'],
    estimatedHours: 20,
    level: 'advanced',
    prerequisites: ['arrays', 'binary-search'],
    theory: {
      concept: 'Dynamic Programming solves problems by breaking them down into simpler subproblems and storing results to avoid redundant calculations.',
      complexity: {
        time: 'Varies by problem, typically O(n²) or O(n³)',
        space: 'O(n) to O(n²) for memoization table'
      },
      whenToUse: 'Use DP for optimization problems with optimal substructure and overlapping subproblems.'
    },
    implementation: {
      code: `# Dynamic Programming Patterns

# 1. Fibonacci - Basic DP
def fibonacci_dp(n):
    """Fibonacci with memoization"""
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# 2. Climbing Stairs - Classic DP
def climb_stairs(n):
    """Number of ways to climb n stairs"""
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# 3. House Robber - Linear DP
def rob_houses(nums):
    """Maximum money without robbing adjacent houses"""
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
    
    return dp[-1]

# 4. Coin Change - Unbounded Knapsack
def coin_change(coins, amount):
    """Minimum coins needed to make amount"""
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# 5. 0/1 Knapsack
def knapsack_01(weights, values, capacity):
    """Maximum value in knapsack with weight limit"""
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    dp[i - 1][w],  # Don't take item
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]  # Take item
                )
            else:
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][capacity]

# 6. Longest Common Subsequence
def longest_common_subsequence(text1, text2):
    """Length of longest common subsequence"""
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]

# 7. Edit Distance
def edit_distance(word1, word2):
    """Minimum operations to convert word1 to word2"""
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # Delete
                    dp[i][j - 1],      # Insert
                    dp[i - 1][j - 1]   # Replace
                )
    
    return dp[m][n]

# 8. Longest Increasing Subsequence
def longest_increasing_subsequence(nums):
    """Length of longest increasing subsequence"""
    if not nums:
        return 0
    
    dp = [1] * len(nums)
    
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

# 9. Maximum Subarray Sum (Kadane's Algorithm)
def max_subarray_sum(nums):
    """Maximum sum of contiguous subarray"""
    max_sum = current_sum = nums[0]
    
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# 10. Palindrome Partitioning
def min_palindrome_partitions(s):
    """Minimum partitions to make all substrings palindromes"""
    n = len(s)
    
    # Check if substring is palindrome
    def is_palindrome(start, end):
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True
    
    dp = [float('inf')] * n
    
    for i in range(n):
        if is_palindrome(0, i):
            dp[i] = 0
        else:
            for j in range(i):
                if is_palindrome(j + 1, i):
                    dp[i] = min(dp[i], dp[j] + 1)
    
    return dp[n - 1]`,
      walkthrough: [
        'Identify optimal substructure in problem',
        'Define state and transition relationship',
        'Build solution bottom-up or top-down',
        'Optimize space complexity when possible'
      ]
    },
    visualAids: {
      ascii: `
DP Problem Classification:

1. Linear DP (1D array):
   - Fibonacci, Climbing Stairs, House Robber
   dp[i] = f(dp[i-1], dp[i-2], ...)

2. Grid DP (2D array):
   - Unique Paths, Minimum Path Sum
   dp[i][j] = f(dp[i-1][j], dp[i][j-1], ...)

3. Interval DP:
   - Palindrome Partitioning, Matrix Chain
   dp[i][j] = min/max(dp[i][k] + dp[k+1][j] + cost)

4. Subsequence DP:
   - LCS, LIS, Edit Distance
   dp[i][j] = f(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

Coin Change Example:
coins = [1, 2, 5], amount = 11

dp[0] = 0 (0 coins for amount 0)
dp[1] = 1 (1 coin of value 1)
dp[2] = 1 (1 coin of value 2)
dp[3] = 2 (coins 1+2 or 1+1+1)
dp[4] = 2 (coins 2+2)
dp[5] = 1 (1 coin of value 5)
...
dp[11] = 3 (coins 5+5+1)

LCS Example:
text1 = "ABCDGH"
text2 = "AEDFHR"

    ""  A  E  D  F  H  R
""   0  0  0  0  0  0  0
A    0  1  1  1  1  1  1
B    0  1  1  1  1  1  1
C    0  1  1  1  1  1  1
D    0  1  1  2  2  2  2
G    0  1  1  2  2  2  2
H    0  1  1  2  2  3  3

LCS = "ADH" (length 3)
`,
      steps: [
        'Break problem into smaller subproblems',
        'Identify recurrence relation',
        'Store solutions to avoid recomputation',
        'Build final solution from stored results'
      ]
    },
    practiceProblems: [
      {
        title: 'Climbing Stairs',
        difficulty: 'easy',
        leetcodeNum: 70,
        description: 'Count ways to climb n stairs'
      },
      {
        title: 'House Robber',
        difficulty: 'medium',
        leetcodeNum: 198,
        description: 'Maximum money without adjacent houses'
      },
      {
        title: 'Coin Change',
        difficulty: 'medium',
        leetcodeNum: 322,
        description: 'Minimum coins to make amount'
      },
      {
        title: 'Longest Common Subsequence',
        difficulty: 'medium',
        leetcodeNum: 1143,
        description: 'Find LCS of two strings'
      },
      {
        title: 'Edit Distance',
        difficulty: 'hard',
        leetcodeNum: 72,
        description: 'Minimum operations to convert strings'
      }
    ]
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    description: 'Algorithms that make locally optimal choices',
    tags: ['must-know', 'interview-frequent'],
    estimatedHours: 8,
    level: 'advanced',
    prerequisites: ['sorting', 'arrays'],
    theory: {
      concept: 'Greedy algorithms make the locally optimal choice at each step, hoping to find a global optimum. They work when the problem has optimal substructure and greedy choice property.',
      complexity: {
        time: 'Often O(n log n) due to sorting requirement',
        space: 'Usually O(1) additional space'
      },
      whenToUse: 'Use greedy algorithms for optimization problems where local optimal choices lead to global optimum.'
    },
    implementation: {
      code: `# Greedy Algorithm Examples

def activity_selection(activities):
    """Select maximum number of non-overlapping activities"""
    # Sort by end time
    activities.sort(key=lambda x: x[1])
    
    selected = [activities[0]]
    last_end = activities[0][1]
    
    for start, end in activities[1:]:
        if start >= last_end:
            selected.append((start, end))
            last_end = end
    
    return selected

def fractional_knapsack(items, capacity):
    """Maximum value in knapsack allowing fractions"""
    # Sort by value/weight ratio
    items.sort(key=lambda x: x[1]/x[0], reverse=True)
    
    total_value = 0
    for weight, value in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += value * (capacity / weight)
            break
    
    return total_value

def gas_station(gas, cost):
    """Find starting gas station for circular trip"""
    total_gas = sum(gas)
    total_cost = sum(cost)
    
    if total_gas < total_cost:
        return -1
    
    current_gas = 0
    start = 0
    
    for i in range(len(gas)):
        current_gas += gas[i] - cost[i]
        if current_gas < 0:
            start = i + 1
            current_gas = 0
    
    return start

def jump_game(nums):
    """Check if can reach end of array"""
    max_reach = 0
    
    for i in range(len(nums)):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + nums[i])
        if max_reach >= len(nums) - 1:
            return True
    
    return False

def jump_game_ii(nums):
    """Minimum jumps to reach end"""
    if len(nums) <= 1:
        return 0
    
    jumps = 0
    current_end = 0
    farthest = 0
    
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        
        if i == current_end:
            jumps += 1
            current_end = farthest
    
    return jumps

def meeting_rooms(intervals):
    """Minimum meeting rooms needed"""
    if not intervals:
        return 0
    
    start_times = sorted([i[0] for i in intervals])
    end_times = sorted([i[1] for i in intervals])
    
    start_ptr = end_ptr = 0
    used_rooms = 0
    max_rooms = 0
    
    while start_ptr < len(intervals):
        if start_times[start_ptr] < end_times[end_ptr]:
            used_rooms += 1
            max_rooms = max(max_rooms, used_rooms)
            start_ptr += 1
        else:
            used_rooms -= 1
            end_ptr += 1
    
    return max_rooms

def candy_distribution(ratings):
    """Minimum candies to distribute to children"""
    n = len(ratings)
    candies = [1] * n
    
    # Left to right pass
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
    
    # Right to left pass
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
    
    return sum(candies)

def remove_k_digits(num, k):
    """Remove k digits to make smallest number"""
    stack = []
    
    for digit in num:
        while k > 0 and stack and stack[-1] > digit:
            stack.pop()
            k -= 1
        stack.append(digit)
    
    # Remove remaining digits from end
    while k > 0:
        stack.pop()
        k -= 1
    
    result = ''.join(stack).lstrip('0')
    return result if result else '0'

def task_scheduler(tasks, n):
    """Minimum time to execute all tasks with cooldown"""
    from collections import Counter
    import heapq
    
    count = Counter(tasks)
    max_heap = [-cnt for cnt in count.values()]
    heapq.heapify(max_heap)
    
    time = 0
    
    while max_heap:
        cycle = []
        
        # Execute up to n+1 tasks in current cycle
        for _ in range(n + 1):
            if max_heap:
                cycle.append(heapq.heappop(max_heap))
        
        # Add back tasks that still need execution
        for cnt in cycle:
            if cnt < -1:  # Still has remaining executions
                heapq.heappush(max_heap, cnt + 1)
        
        # Add time for this cycle
        time += len(cycle) if not max_heap else n + 1
    
    return time

def partition_labels(s):
    """Partition string into as many parts as possible"""
    last_occurrence = {char: i for i, char in enumerate(s)}
    
    partitions = []
    start = 0
    end = 0
    
    for i, char in enumerate(s):
        end = max(end, last_occurrence[char])
        
        if i == end:
            partitions.append(end - start + 1)
            start = i + 1
    
    return partitions`,
      walkthrough: [
        'Greedy makes locally optimal choice at each step',
        'Sorting often helps identify optimal choice',
        'Verify greedy choice property holds',
        'Consider counterexamples to validate approach'
      ]
    },
    visualAids: {
      ascii: `
Activity Selection Example:
Activities: [(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11)]

Sorted by end time:
(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11)

Selection process:
1. Select (1,4) - end=4
2. Skip (3,5) - starts at 3 < 4
3. Skip (0,6) - starts at 0 < 4
4. Select (5,7) - starts at 5 >= 4, end=7
5. Skip (3,9) - starts at 3 < 7
6. Skip (5,9) - starts at 5 < 7
7. Select (6,10) - starts at 6 < 7, skip
8. Select (8,11) - starts at 8 >= 7

Result: [(1,4), (5,7), (8,11)]

Fractional Knapsack:
Items: [(weight, value)] = [(10,60), (20,100), (30,120)]
Capacity: 50

Value/Weight ratios:
(10,60): 60/10 = 6
(20,100): 100/20 = 5
(30,120): 120/30 = 4

Greedy selection:
1. Take all of (10,60): capacity=40, value=60
2. Take all of (20,100): capacity=20, value=160
3. Take 20/30 of (30,120): capacity=0, value=160+80=240

Meeting Rooms Timeline:
Meetings: [(0,30), (5,10), (15,20)]

Timeline:
0----5----10----15----20----30
|----Meeting1--------------------|
     |M2-|
              |M3-|

At time 5: Need 2 rooms (M1 and M2)
At time 15: Need 2 rooms (M1 and M3)
Minimum rooms needed: 2
`,
      steps: [
        'Identify the greedy choice criterion',
        'Sort data if needed to reveal optimal choices',
        'Make greedy choice at each step',
        'Verify optimality with problem constraints'
      ]
    },
    practiceProblems: [
      {
        title: 'Best Time to Buy and Sell Stock II',
        difficulty: 'medium',
        leetcodeNum: 122,
        description: 'Maximum profit with multiple transactions'
      },
      {
        title: 'Gas Station',
        difficulty: 'medium',
        leetcodeNum: 134,
        description: 'Find starting gas station for circular trip'
      },
      {
        title: 'Jump Game',
        difficulty: 'medium',
        leetcodeNum: 55,
        description: 'Check if can reach end of array'
      },
      {
        title: 'Meeting Rooms II',
        difficulty: 'medium',
        leetcodeNum: 253,
        description: 'Minimum meeting rooms needed'
      },
      {
        title: 'Task Scheduler',
        difficulty: 'medium',
        leetcodeNum: 621,
        description: 'Schedule tasks with cooldown period'
      }
    ]
  }
];

// Helper function to get next recommended topics
export function getNextRecommendedTopics(completedTopics: Set<string>): string[] {
  const recommended: string[] = [];
  
  for (const topic of curriculum) {
    if (!completedTopics.has(topic.id)) {
      const allPrereqsMet = topic.prerequisites.every(prereq => 
        completedTopics.has(prereq)
      );
      
      if (allPrereqsMet) {
        recommended.push(topic.id);
      }
    }
  }
  
  return recommended;
}

// Helper function to calculate level progress
export function calculateLevelProgress(completedTopics: Set<string>) {
  const levels = ['foundation', 'linear', 'non-linear', 'advanced', 'specialized'];
  const progress = [];
  
  for (const level of levels) {
    const levelTopics = curriculum.filter(topic => topic.level === level);
    const completedCount = levelTopics.filter(topic => 
      completedTopics.has(topic.id)
    ).length;
    
    const unlocked = level === 'foundation' || 
      (level === 'linear' && curriculum.filter(t => t.level === 'foundation').every(t => completedTopics.has(t.id))) ||
      (level === 'non-linear' && curriculum.filter(t => t.level === 'linear').every(t => completedTopics.has(t.id))) ||
      (level === 'advanced' && curriculum.filter(t => t.level === 'non-linear').every(t => completedTopics.has(t.id))) ||
      (level === 'specialized' && curriculum.filter(t => t.level === 'advanced').every(t => completedTopics.has(t.id)));
    
    progress.push({
      level: level.charAt(0).toUpperCase() + level.slice(1),
      totalTopics: levelTopics.length,
      completedTopics: completedCount,
      percentage: Math.round((completedCount / levelTopics.length) * 100),
      unlocked
    });
  }
  
  return progress;
}