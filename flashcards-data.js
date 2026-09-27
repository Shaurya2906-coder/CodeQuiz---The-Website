const flashcardsData = {
    Python: {
        'Foundation of Python': [
            { title: 'Python Overview', points: ['Interpreted, high-level, object-oriented language.', 'Readable syntax using indentation for blocks.', 'Statically optional — dynamic typing.', 'Runs on multiple platforms.'] },
            { title: 'Syntax & Comments', points: ['print() outputs to console.', 'len() gives length of sequences.', '# used for single-line comments.', 'Indentation defines code blocks.'] },
            { title: 'Data Types', points: ['str for text.', 'int, float for numbers.', 'bool holds True/False.', 'Type is determined at runtime.'] },
            { title: 'Variables & Operators', points: ['Variables assigned with =.', '== compares values.', '** is exponentiation.', '// is floor division.'] },
        ],
        'Control Flow': [
            { title: 'Conditionals', points: ['if / elif / else make decisions.', 'Conditions evaluate to True/False.', 'elif chains multiple conditions.', 'else runs when no condition matches.'] },
            { title: 'Loops', points: ['for iterates over sequences.', 'while repeats while condition is true.', 'break exits a loop early.', 'continue skips to next iteration.'] },
            { title: 'Loop Control', points: ['pass does nothing (placeholder).', 'return exits a function early.', 'Comparison operators: ==, !=, >, <.'] },
        ],
        'Functions in Python': [
            { title: 'Defining Functions', points: ['def keyword defines a function.', 'Parameters receive input values.', 'return sends a value back.', 'Functions organize reusable code.'] },
            { title: 'Advanced Functions', points: ['*}args accepts variable positional args.', '**kwargs accepts variable keyword args.', 'lambda creates anonymous functions.', 'Docstrings (\"\"\"...) document functions.'] },
        ],
        'Data Handling in Python': [
            { title: 'Data Structures', points: ['list is mutable and ordered.', 'tuple is immutable and ordered.', 'set stores unique unordered items.', 'dict stores key-value pairs.'] },
            { title: 'Common Operations', points: ['append() adds to a list.', 'pop() removes last item (or index).', 'sorted() returns a sorted list.', 'x in y tests membership.'] },
        ],
        'OOPS in Python': [
            { title: 'Classes & Objects', points: ['class defines a blueprint.', 'An object is an instance of a class.', '__init__ is the constructor.', 'self refers to the current instance.'] },
            { title: 'OOP Principles', points: ['Encapsulation bundles data and methods.', 'Inheritance reuses parent behaviour.', 'Polymorphism: same interface, many forms.', 'Abstraction hides implementation details.'] },
        ],
        'File Handling in Python': [
            { title: 'File Operations', points: ["open(path, mode) opens a file.", "'r' reads, 'w' writes, 'a' appends.", "read()/readline() read content.", "write() writes text to a file."] },
            { title: 'Best Practices', points: ["with open(...) as f: auto-closes.", "close() frees resources manually.", "'rb' opens binary mode.", "seek(0) moves pointer to start."] },
        ],
        'Recrusion': [
            { title: 'Recursion Concepts', points: ['A function calling itself is recursion.', 'A base case stops the recursion.', 'Recursive case reduces problem size.', 'Problems are divided into smaller similar ones.'] },
            { title: 'Common Examples & Risks', points: ['Factorial and Fibonacci use recursion.', 'Without base case → infinite recursion.', 'Recursion uses the call stack.', 'Deep recursion can cause RecursionError.'] },
        ],
    },
    C: {
        'Getting Started with C': [
            { title: 'C Basics', points: ['.c is the source file extension.', 'main() is the entry point.', 'Semicolon ; ends a statement.', 'int is the conventional return type of main().'] },
            { title: 'Compilation & I/O', points: ['#include <stdio.h> provides I/O.', 'printf() displays output.', 'Compiler translates C to machine code.', 'Comments: // single-line, /* */ multi-line.'] },
        ],
        'Building Block with C': [
            { title: 'Operators', points: ['= assigns; == compares.', '*/ / % % are arithmetic.', 'x += y is shorthand addition.', '++ and -- increment/decrement.'] },
            { title: 'Logical & Relational', points: ['&& logical AND, || logical OR.', '! negates a condition.', '7 / 2 with ints gives 3.', 'Bitwise: & , | , ^ .'] },
        ],
        'Input Output': [
            { title: 'Output Functions', points: ['printf() prints formatted output.', '%d prints int, %f float, %c char, %s string.', 'puts() prints a string + newline.', 'Use \\n for newline.'] },
            { title: 'Input Functions', points: ['scanf(\"%d\", &x) reads an int.', 'gets()/fgets() read strings.', 'getchar() reads one character.', '& gives the address for scanf.'] },
        ],
        'Operation and Operators': [
            { title: 'Arithmetic', points: ['+ - * / are basic operators.', 'Integer division truncates: 10/3 = 3.', '% gives the remainder.', 'Unary + and - exist.'] },
            { title: 'Shift & Bitwise', points: ['<< left shifts bits.', '>> right shifts bits.', '^ XOR, & AND, | OR, ~ NOT.', 'Relational: ==, >=, <=, !=.'] },
        ],
        'Conditional Staement': [
            { title: 'Conditionals', points: ['if tests a condition.', 'if/else chooses a branch.', 'else if adds more conditions.', 'if(x && y) requires both true.'] },
            { title: 'Switch', points: ['switch selects among cases.', 'case labels each option.', 'default runs when no case matches.', 'break exits the switch.'] },
        ],
        Loops: [
            { title: 'Loop Types', points: ['for: known iteration count.', 'while: checks before body.', 'do-while: runs body at least once.', 'for(;;) is an infinite loop.'] },
            { title: 'Loop Control', points: ['break exits a loop.', 'continue skips the rest of iteration.', 'Loop structure: init; condition; update.', 'Iterate arrays with a for loop.'] },
        ],
        Function: [
            { title: 'Functions', points: ['Return type precedes the function name.', 'void means no return value.', 'Parameters accept caller input.', 'Function prototype declares it first.'] },
            { title: 'Calling & Returning', points: ['Function call executes the body.', 'return sends a value back.', 'Functions can return at most one value.', 'Recursion is a function calling itself.'] },
        ],
        Recrusion: [
            { title: 'Recursion', points: ['A function calls itself.', 'Base case stops recursion.', 'Recursive case reduces input size.', 'Too-deep recursion → stack overflow.'] },
        ],
        'Pointer function': [
            { title: 'Function Pointers', points: ['Stores the address of a function.', 'int (*fp)(int); declares one.', 'Used for callbacks and dynamic behavior.', 'Call via fp(args) or (*fp)(args).'] },
        ],
        'Storage classes': [
            { title: 'Storage Classes', points: ['auto: default local variable.', 'static: persists across calls/file-scope.', 'extern: variable defined elsewhere.', 'register: suggests CPU register storage.'] },
        ],
        Array: [
            { title: 'Arrays', points: ['int arr[5]; declares 5 elements.', 'Index starts at 0.', 'Last index = size - 1.', 'Access element via arr[i].'] },
            { title: 'Multi-D array', points: ['int a[2][3]; is 2D.', 'Rows/columns indexed separately.', 'Character arrays store strings.', 'Array size can be found with sizeof.'] },
        ],
        'Pointer Array': [
            { title: 'Arrays of Pointers', points: ['int *arr[3]; array of 3 pointers.', 'Useful for storing strings.', 'int *p[10]; holds 10 pointers.', 'Access value via *arr[i].'] },
            { title: 'Pointer to Array', points: ['int (*p)[5]; points to 5-int array.', 'int **p is pointer-to-pointer.', 'Arrays of pointers manage string lists.'] },
        ],
        'Searching Sorting in Array': [
            { title: 'Searching', points: ['Linear search checks each element, O(n).', 'Binary search needs a sorted array, O(log n).', 'Successful search returns the index.', 'Binary search halves the range each step.'] },
            { title: 'Sorting', points: ['Bubble sort swaps adjacent elements.', 'Selection sort picks the smallest.', 'Insertion sort inserts into place.', 'Quick sort uses a pivot; merge sort divides in half.'] },
        ],
        'Character Array string': [
            { title: 'Strings in C', points: ['Strings are char arrays ending in \'\\0\'.', 'char name[20]; declares a string.', 'strlen() gives length.', 'strcpy() copies, strcat() concatenates, strcmp() compares.'] },
        ],
        Preprocessing: [
            { title: 'Preprocessor', points: ['# starts a preprocessor directive.', '#include pulls in a header.', '#define creates a macro.', '#ifdef / #endif guard conditional blocks.'] },
        ],
        'Bit Manipulation': [
            { title: 'Bitwise Operations', points: ['& AND, | OR, ^ XOR, ~ NOT.', '<< left shifts (multiply by 2).', '>> right shifts (divide by 2).', '1 << 3 equals 8.'] },
        ],
        Structures: [
            { title: 'Structures', points: ['struct groups related data of different types.', 's.member accesses via dot.', 'p->member accesses via pointer.', 'typedef creates an alias type.', 'Structs keep related data together.'] },
        ],
        'Union and File Handling': [
            { title: 'Unions', points: ['union members share memory.', 'Saves memory when one member is used at a time.', 'union keyword defines it.', 'Size = largest member size.'] },
            { title: 'File Handling', points: ['fopen() opens a file.', "Modes: 'r','w','a'.", 'fread()/fwrite() work with data.', 'fclose() closes a file.', 'fseek()/ftell() control position.'] },
        ],
    },
    'C++': {
        Basics: [
            { title: 'C++ Basics', points: ['#include <iostream> for I/O.', 'std::cout << prints output.', 'std::cin >> reads input.', 'main() is the entry point.'] },
            { title: 'Variables & Namespaces', points: ['namespace groups names.', 'int, char, bool, float are basic types.', 'const creates a constant.', 'using namespace std; prefixes std::.'] },
        ],
        Function: [
            { title: 'Functions', points: ['Return type precedes the name.', 'void means no return value.', 'Pass-by-value copies arguments.', 'Pass-by-reference (&) uses original.', 'Functions can be overloaded.'] },
        ],
        'Object Oriented Programming': [
            { title: 'Classes & Objects', points: ['class is a blueprint.', 'An object is an instance.', 'this refers to the current object.', 'Members can be data or functions.', 'Access: public, private, protected.'] },
        ],
        'Constructor and Destructors': [
            { title: 'Constructors', points: ['Initialize objects on creation.', 'Same name as the class.', 'Default, parameterized, and copy exist.', 'No return type.'] },
            { title: 'Destructors', points: ['Called when object is destroyed.', 'Named ~ClassName.', 'No parameters.', 'Use initializer list after :.'] },
        ],
        'Memory Allocation': [
            { title: 'Dynamic Memory', points: ['new allocates on the heap.', 'delete frees memory.', 'new[] / delete[] for arrays.', 'Local variables live on the stack.', 'nullptr is the null pointer.'] },
        ],
        'Operator Overloading': [
            { title: 'Operator Overloading', points: ['Gives operators new meaning for user types.', 'Uses the operator keyword.', 'Can be member or non-member.', 'Cannot overload . , ::, ?:.'] },
        ],
        Inheritance: [
{ title: 'Inheritance', points: ['Derives a class from a base class.', 'class Child : public Parent.', 'public/protected/private inheritance.', 'Base constructor runs first.', 'Inheritance models an is-a relationship.'] },
        ],
        'Run Time Polymorphism': [
            { title: 'Polymorphism', points: ['virtual enables dynamic dispatch.', 'Pure virtual (= 0) makes a class abstract.', 'override indicates overriding.', 'Virtual destructors ensure cleanup.', 'Base pointers can point to derived objects.'] },
        ],
        'Exception Handling': [
            { title: 'Exceptions', points: ['try encloses risky code.', 'catch handles exceptions.', 'throw raises an exception.', 'std::exception is the base type.', 'Rethrow with throw;.'] },
        ],
        STL: [
            { title: 'STL', points: ['Standard Template Library.', 'vector: dynamic array.', 'set: unique sorted values.', 'map: key-value pairs.', 'stack: LIFO, queue: FIFO.', 'Iterators traverse containers.'] },
        ],
        Template: [
            { title: 'Templates', points: ['Generic programming.', 'template <typename T> defines one.', 'Work for classes and functions.', 'Instantiated at compile time.', 'Used for type safety and reuse.'] },
        ],
    },
    Java: {
        'Introduction': [
            { title: 'Java Overview', points: ['Object-oriented, platform-independent via JVM.', 'Compiled to bytecode (.class files).', 'javac compiles, java runs.', 'main method is the entry point.', 'java.lang is imported by default.'] },
        ],
        'Variables': [
            { title: 'Variables in Java', points: ['int, double, boolean, char are primitives.', 'String is a reference type.', 'final makes a constant.', 'Local variables must be initialized.', 'Default values: 0, false, null.'] },
        ],
        'Operators': [
            { title: 'Operators', points: ['%, +, -, *, / are arithmetic.', '&& / || are short-circuit logical.', '== compares primitives/references.', '?: is the ternary operator.', 'Division of ints truncates the decimal.'] },
        ],
        'Conditional Loops': [
            { title: 'Conditionals & Loops', points: ['if/else branches flow.', 'switch handles multiple constant cases.', 'for/while/do-while loops repeat.', 'break exits; continue skips.', 'Enhanced for loops iterate collections.'] },
        ],
        'Array in Java': [
            { title: 'Arrays', points: ['int[] arr declares an array.', 'new int[5] allocates space.', 'arr.length gives size.', 'Index starts at 0.', 'Arrays are objects (in heap).'] },
        ],
        'Bitwise Operators': [
            { title: 'Bitwise Operators', points: ['& AND, | OR, ^ XOR, ~ NOT.', '<< left shift, >> right shift.', '>>> unsigned right shift.', 'Work on int, long, byte, short, char.', 'Used to compact boolean flags.'] },
        ],
        'OOPS- Introduction': [
            { title: 'OOP in Java', points: ['class is a blueprint.', 'new creates an object.', 'Encapsulation hides internal state.', 'Polymorphism: many forms via interfaces.', 'Constructors initialize new objects.'] },
        ],
        'Inheritance - 1': [
            { title: 'Inheritance Basics', points: ['extends inherits a class.', 'Every class inherits from Object.', 'super refers to parent members.', 'Method overriding provides new behavior.', '@Override validates overrides.', 'Java uses single inheritance for classes.'] },
        ],
        'Inheritance - 2': [
            { title: 'Advanced Inheritance', points: ['implements applies an interface.', 'A class can implement many interfaces.', 'abstract classes have abstract methods.', 'final prevents inheritance.', 'instanceof checks type.', 'Interfaces can have default methods (Java 8+).'] },
        ],
        'Strings': [
            { title: 'Strings', points: ['Strings are immutable.', 'equals() compares contents.', 'length(), substring(), charAt() are common.', 'StringBuilder is mutable for building.', 'Use parseInt for conversion.'] },
        ],
        'Linked List': [
            { title: 'Linked List', points: ['Nodes with data and next reference.', 'Insert/delete at head is O(1).', 'Search is O(n).', 'LinkedList implements List & Deque.', 'Floyd\'s algorithm detects cycles.'] },
        ],
        'Stack': [
            { title: 'Stack', points: ['LIFO principle.', 'push() adds, pop() removes top.', 'peek() views top.', 'ArrayDeque is preferred for stacks.', 'Used for balanced parentheses and DFS.'] },
        ],
        'Queues': [
            { title: 'Queues', points: ['FIFO principle.', 'offer/add add; poll/remove remove.', 'peek views head.', 'LinkedList implements Queue.', 'PriorityQueue orders by priority.', 'BFS commonly uses a queue.'] },
        ],
        'Generic & Collection': [
            { title: 'Generics & Collections', points: ['Generics provide compile-time type safety.', 'ArrayList, HashSet, HashMap are common.', 'Map stores key-value pairs.', 'Type erasure removes generic types at runtime.', 'Comparable/Comparator define ordering.'] },
        ],
        'Exception Handling': [
            { title: 'Exceptions', points: ['try/catch handles exceptions.', 'throw throws an exception.', 'throws declares checked exceptions.', 'finally runs always.', 'Throwable is the parent class.', 'RuntimeException covers unchecked errors.'] },
        ],
        'Thread & Wrappers': [
            { title: 'Threads & Wrappers', points: ['start() starts a thread.', 'Runnable provides run behavior.', 'sleep() pauses a thread.', 'synchronized gives mutual exclusion.', 'Integer/Boolean are primitive wrappers.', 'Autoboxing converts primitives<>wrappers.'] },
        ],
        'Doubly Linked List': [
            { title: 'Doubly Linked List', points: ['Nodes store data, next, and prev.', 'Allows backward traversal.', 'Deleting a known node is O(1).', 'Java LinkedList is doubly linked.', 'Memory cost: extra prev reference.'] },
        ],
        'Circular Linked List': [
            { title: 'Circular Linked List', points: ['Last node points back to head.', 'Enables round-robin traversal.', 'Floyd\'s algorithm detects cycles.', 'Used in schedulers and turn-order games.', 'Breaking the loop: set last.next = null.'] },
        ],
    },
};

