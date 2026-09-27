const quizData = {
    Python: {
        'Foundation of Python': [
            {
                question: 'Which keyword is used to define a function in Python?',
                choices: ['def', 'func', 'function', 'define'],
                correct: 'def',
            },
            {
                question: 'How do you create a list in Python?',
                choices: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '<1, 2, 3>'],
                correct: '[1, 2, 3]',
            },
            {
                question: 'Which symbol is used for single-line comments?',
                choices: ['//', '#', '/*', '--'],
                correct: '#',
            },
            {
                question: 'What does len(\'hello\') return?',
                choices: ['5', '4', '6', '0'],
                correct: '5',
            },
            {
                question: 'What is the correct way to declare a variable in Python?',
                choices: ['x = 10', 'var x = 10', 'let x = 10', 'int x = 10'],
                correct: 'x = 10',
            },
            {
                question: 'Which of these is a boolean value?',
                choices: ['True', 'None', '0', '"false"'],
                correct: 'True',
            },
            {
                question: 'What data type is used for text in Python?',
                choices: ['str', 'int', 'bool', 'list'],
                correct: 'str',
            },
            {
                question: 'Which operator checks if two values are equal?',
                choices: ['==', '=', '!=', '>'],
                correct: '==',
            },
            {
                question: 'How do you print text to the console?',
                choices: ["print('Hello')", "echo('Hello')", "console.log('Hello')", "System.out.println('Hello')"],
                correct: "print('Hello')",
            },
            {
                question: 'What does range(5) produce?',
                choices: ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4, 5', '5, 4, 3, 2, 1'],
                correct: '0, 1, 2, 3, 4',
            },
            {
                question: 'Which of these is a Python tuple?',
                choices: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
                correct: '(1, 2, 3)',
            },
            {
                question: 'What does type(10) return?',
                choices: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'list'>"],
                correct: "<class 'int'>",
            },
            {
                question: 'How do you create a tuple in Python?',
                choices: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
                correct: '(1, 2, 3)',
            },
            {
                question: 'Which keyword is used to start a conditional block?',
                choices: ['if', 'for', 'while', 'def'],
                correct: 'if',
            },
            {
                question: 'What does not True evaluate to?',
                choices: ['False', 'True', 'None', 'Error'],
                correct: 'False',
            },
            {
                question: 'Which function returns the length of a string?',
                choices: ['len()', 'size()', 'count()', 'length()'],
                correct: 'len()',
            },
            {
                question: 'What is the result of 2 ** 3?',
                choices: ['8', '6', '5', '9'],
                correct: '8',
            },
            {
                question: 'Which of these is a valid variable name?',
                choices: ['my_name', '1name', 'class', 'for'],
                correct: 'my_name',
            },
            {
                question: 'How do you concatenate two strings?',
                choices: ['using +', 'using *', 'using /', 'using %'],
                correct: 'using +',
            },
            {
                question: 'What does bool(0) return?',
                choices: ['False', 'True', '0', 'None'],
                correct: 'False',
            }
        ],
        'Control Flow': [
            {
                question: 'Which keyword starts a loop that repeats while a condition is true?',
                choices: ['while', 'for', 'loop', 'repeat'],
                correct: 'while',
            },
            {
                question: 'What does break do inside a loop?',
                choices: ['Stops the loop', 'Skips the current iteration', 'Repeats the loop', 'Ends the program'],
                correct: 'Stops the loop',
            },
            {
                question: 'Which keyword is used to skip the current iteration of a loop?',
                choices: ['continue', 'break', 'return', 'pass'],
                correct: 'continue',
            },
            {
                question: 'What does elif stand for?',
                choices: ['Else if', 'Else loop', 'Error if', 'Element if'],
                correct: 'Else if',
            },
            {
                question: 'Which loop is commonly used when the number of iterations is known?',
                choices: ['for', 'while', 'if', 'switch'],
                correct: 'for',
            },
            {
                question: 'What happens if the condition in a while loop is false initially?',
                choices: ['The loop body is skipped', 'The loop runs once', 'The program crashes', 'The loop repeats forever'],
                correct: 'The loop body is skipped',
            },
            {
                question: 'Which keyword is used to create an else block after an if?',
                choices: ['else', 'elif', 'then', 'catch'],
                correct: 'else',
            },
            {
                question: 'Which statement is used to exit a function early?',
                choices: ['return', 'break', 'continue', 'pass'],
                correct: 'return',
            },
            {
                question: 'What is the result of 3 > 5?',
                choices: ['False', 'True', '3', '5'],
                correct: 'False',
            },
            {
                question: 'Which of these is a valid if statement?',
                choices: ['if x > 0:', 'for x > 0:', 'while x > 0', 'def x > 0'],
                correct: 'if x > 0:',
            },
            {
                question: 'What does pass do in Python?',
                choices: ['Does nothing', 'Stops the loop', 'Returns a value', 'Creates a class'],
                correct: 'Does nothing',
            },
            {
                question: 'Which operator is used for logical AND?',
                choices: ['and', 'or', 'not', 'if'],
                correct: 'and',
            },
            {
                question: 'Which operator is used for logical OR?',
                choices: ['or', 'and', 'not', 'if'],
                correct: 'or',
            },
            {
                question: 'What does x != y mean?',
                choices: ['x is not equal to y', 'x is greater than y', 'x is less than y', 'x is equal to y'],
                correct: 'x is not equal to y',
            },
            {
                question: 'Which keyword is used to handle exceptions?',
                choices: ['try', 'if', 'for', 'while'],
                correct: 'try',
            },
            {
                question: 'What does a while loop do?',
                choices: ['Repeats as long as a condition is true', 'Runs once only', 'Defines a function', 'Creates a list'],
                correct: 'Repeats as long as a condition is true',
            },
            {
                question: 'Which keyword is used to test multiple conditions in order?',
                choices: ['elif', 'else', 'for', 'def'],
                correct: 'elif',
            },
            {
                question: 'What happens when a break statement is executed inside a loop?',
                choices: ['The loop exits immediately', 'The loop skips one iteration', 'The loop repeats forever', 'The program ends'],
                correct: 'The loop exits immediately',
            },
            {
                question: 'Which operator checks whether two values are not equal?',
                choices: ['!=', '==', '>', '<'],
                correct: '!=',
            },
            {
                question: 'Which keyword can be used to define an alternate branch when the condition is false?',
                choices: ['else', 'elif', 'for', 'break'],
                correct: 'else',
            }
        ],
        'Functions in Python': [
            {
                question: 'How do you create an anonymous function?',
                choices: ['lambda x: x + 1', 'def x():', 'func x => x + 1', 'anon x: x + 1'],
                correct: 'lambda x: x + 1',
            },
            {
                question: 'Which keyword is used to define a function in Python?',
                choices: ['def', 'func', 'function', 'define'],
                correct: 'def',
            },
            {
                question: 'What does return do in a function?',
                choices: ['Sends a value back to the caller', 'Starts a loop', 'Defines a class', 'Imports a module'],
                correct: 'Sends a value back to the caller',
            },
            {
                question: 'What is a function parameter?',
                choices: ['A value passed into a function', 'A loop variable', 'A class attribute', 'A module name'],
                correct: 'A value passed into a function',
            },
            {
                question: 'How do you call a function named greet?',
                choices: ['greet()', 'call greet()', 'invoke greet()', 'run greet()'],
                correct: 'greet()',
            },
            {
                question: 'What is the purpose of a function?',
                choices: ['To organize reusable code', 'To define a variable', 'To import modules', 'To create loops'],
                correct: 'To organize reusable code',
            },
            {
                question: 'What is a default argument?',
                choices: ['A parameter with a default value', 'A function that returns nothing', 'A loop variable', 'A class method'],
                correct: 'A parameter with a default value',
            },
            {
                question: 'Which of these is a valid function definition?',
                choices: ['def greet(name):', 'function greet(name):', 'for greet(name):', 'class greet(name):'],
                correct: 'def greet(name):',
            },
            {
                question: 'What does def greet() mean?',
                choices: ['It defines a function named greet', 'It calls greet', 'It creates a list', 'It imports greet'],
                correct: 'It defines a function named greet',
            },
            {
                question: 'What is the output of print(sum([1, 2, 3]))?',
                choices: ['6', '3', '1', '5'],
                correct: '6',
            },
            {
                question: 'Which keyword is used to make a function return a value?',
                choices: ['return', 'break', 'continue', 'pass'],
                correct: 'return',
            },
            {
                question: 'What is a local variable?',
                choices: ['A variable defined inside a function', 'A variable defined globally', 'A class attribute', 'A module name'],
                correct: 'A variable defined inside a function',
            },
            {
                question: 'How many values can a function return?',
                choices: ['One or more values', 'Only one value', 'Only strings', 'None'],
                correct: 'One or more values',
            },
            {
                question: 'What is the purpose of *args?',
                choices: ['To accept a variable number of positional arguments', 'To define a class', 'To create a list', 'To break a loop'],
                correct: 'To accept a variable number of positional arguments',
            },
            {
                question: 'What does **kwargs allow?',
                choices: ['Passing a variable number of keyword arguments', 'Creating strings', 'Looping over items', 'Returning a tuple'],
                correct: 'Passing a variable number of keyword arguments',
            },
            {
                question: 'Which statement is used to exit a function?',
                choices: ['return', 'break', 'continue', 'while'],
                correct: 'return',
            },
            {
                question: 'What is the difference between a function and a method?',
                choices: ['A method belongs to an object or class', 'A method is always recursive', 'A function cannot return values', 'There is no difference'],
                correct: 'A method belongs to an object or class',
            },
            {
                question: 'What does lambda create?',
                choices: ['An anonymous function', 'A class', 'A loop', 'A module'],
                correct: 'An anonymous function',
            },
            {
                question: 'Which function prints output to the console?',
                choices: ['print()', 'input()', 'sum()', 'len()'],
                correct: 'print()',
            },
            {
                question: 'What is a docstring?',
                choices: ['A string literal used to document a function', 'A variable name', 'A keyword', 'A loop statement'],
                correct: 'A string literal used to document a function',
            }
        ],
        'Data Handling in Python': [
            {
                question: 'Which structure stores key-value pairs in Python?',
                choices: ['dictionary', 'list', 'tuple', 'set'],
                correct: 'dictionary',
            },
            {
                question: 'Which of these is a Python tuple?',
                choices: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
                correct: '(1, 2, 3)',
            },
            {
                question: 'How do you create a set?',
                choices: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', '<1, 2, 3>'],
                correct: '{1, 2, 3}',
            },
            {
                question: 'Which of these is a mutable type?',
                choices: ['list', 'tuple', 'str', 'int'],
                correct: 'list',
            },
            {
                question: 'What does x in y test?',
                choices: ['Membership', 'Equality', 'Identity', 'Assignment'],
                correct: 'Membership',
            },
            {
                question: 'What does my_dict.get(\'key\') return if the key is missing?',
                choices: ['None', '0', 'False', 'An error'],
                correct: 'None',
            },
            {
                question: 'Which built-in function sorts a list?',
                choices: ['sorted()', 'order()', 'sort()', 'arrange()'],
                correct: 'sorted()',
            },
            {
                question: 'How do you remove an item from a list?',
                choices: ['remove()', 'delete()', 'pop()', 'clear()'],
                correct: 'remove()',
            },
            {
                question: 'What does append() do to a list?',
                choices: ['Adds an item to the end', 'Removes the first item', 'Sorts the list', 'Creates a tuple'],
                correct: 'Adds an item to the end',
            },
            {
                question: 'Which method returns the number of elements in a list?',
                choices: ['len()', 'count()', 'size()', 'length()'],
                correct: 'len()',
            },
            {
                question: 'What is a list comprehension?',
                choices: ['A compact way to create a list', 'A function to merge lists', 'A type of loop', 'A class definition'],
                correct: 'A compact way to create a list',
            },
            {
                question: 'Which container is unordered and stores unique items?',
                choices: ['set', 'list', 'tuple', 'dict'],
                correct: 'set',
            },
            {
                question: 'What does pop() do on a list?',
                choices: ['Removes and returns the last item', 'Adds an item', 'Creates an item', 'Sorts the list'],
                correct: 'Removes and returns the last item',
            },
            {
                question: 'What is the result of len({1, 2, 3})?',
                choices: ['3', '2', '1', '0'],
                correct: '3',
            },
            {
                question: 'Which collection maintains insertion order?',
                choices: ['list', 'set', 'dict', 'tuple'],
                correct: 'list',
            },
            {
                question: 'How do you create an empty dictionary?',
                choices: ['{}', '[]', '()', 'set()'],
                correct: '{}',
            },
            {
                question: 'What does x // y do?',
                choices: ['Floor division', 'Exponentiation', 'Modulo', 'Multiplication'],
                correct: 'Floor division',
            },
            {
                question: 'What does x in y check?',
                choices: ['Membership', 'Equality', 'Identity', 'Type'],
                correct: 'Membership',
            },
            {
                question: 'Which object is used to represent an ordered sequence of values?',
                choices: ['tuple', 'list', 'set', 'dict'],
                correct: 'tuple',
            },
            {
                question: 'Which of these is a valid dictionary literal?',
                choices: ["{'a': 1}", '[1, 2]', '(1, 2)', '{1, 2}'],
                correct: "{'a': 1}",
            }
        ],
        'OOPS in Python': [
            {
                question: 'Which keyword is used to create a class?',
                choices: ['class', 'def', 'struct', 'module'],
                correct: 'class',
            },
            {
                question: 'What does __init__ represent in a class?',
                choices: ['Constructor', 'Destructor', 'Method decorator', 'Static function'],
                correct: 'Constructor',
            },
            {
                question: 'What does super() do in a class?',
                choices: ['Calls the parent class method', 'Defines a child class', 'Creates a new instance', 'Imports a module'],
                correct: 'Calls the parent class method',
            },
            {
                question: 'How do you make a variable private by convention in Python?',
                choices: ['_name', 'private name', '#name', 'name'],
                correct: '_name',
            },
            {
                question: 'What is an object in Python?',
                choices: ['An instance of a class', 'A function', 'A module', 'A loop'],
                correct: 'An instance of a class',
            },
            {
                question: 'What is inheritance in OOP?',
                choices: ['A class acquiring properties from another class', 'A function calling itself', 'A loop repeating', 'A module importing another module'],
                correct: 'A class acquiring properties from another class',
            },
            {
                question: 'Which keyword is used to create a subclass?',
                choices: ['class Child(Parent):', 'def Child(Parent):', 'if Child(Parent):', 'for Child(Parent):'],
                correct: 'class Child(Parent):',
            },
            {
                question: 'What is encapsulation?',
                choices: ['Bundling data and methods into a class', 'Creating loops', 'Importing modules', 'Defining constants'],
                correct: 'Bundling data and methods into a class',
            },
            {
                question: 'What is polymorphism?',
                choices: ['Same interface, different behavior', 'A function with no return', 'A type of loop', 'A variable with no value'],
                correct: 'Same interface, different behavior',
            },
            {
                question: 'What is an instance variable?',
                choices: ['A variable belonging to an object', 'A variable belonging to a function', 'A loop variable', 'A module constant'],
                correct: 'A variable belonging to an object',
            },
            {
                question: 'What does self refer to in a class method?',
                choices: ['The current instance of the class', 'The class name', 'The parent class', 'A module'],
                correct: 'The current instance of the class',
            },
            {
                question: 'Which of these describes abstraction?',
                choices: ['Hiding implementation details', 'Creating loops', 'Defining variables', 'Importing modules'],
                correct: 'Hiding implementation details',
            },
            {
                question: 'What is a class attribute?',
                choices: ['A variable shared by all instances of a class', 'A function inside a class', 'A local variable', 'A loop counter'],
                correct: 'A variable shared by all instances of a class',
            },
            {
                question: 'Which keyword defines a method inside a class?',
                choices: ['def', 'class', 'import', 'return'],
                correct: 'def',
            },
            {
                question: 'What is composition in OOP?',
                choices: ['Using one object inside another object', 'Creating a subclass', 'Defining a variable', 'Calling a loop'],
                correct: 'Using one object inside another object',
            },
            {
                question: 'What is a constructor?',
                choices: ['A special method used to initialize an object', 'A loop', 'A function that returns a tuple', 'A module import'],
                correct: 'A special method used to initialize an object',
            },
            {
                question: 'What does self.name = name do?',
                choices: ['Assigns an instance attribute', 'Creates a function', 'Starts a loop', 'Imports a module'],
                correct: 'Assigns an instance attribute',
            },
            {
                question: 'What is the purpose of __str__?',
                choices: ['To define how an object is represented as a string', 'To create a loop', 'To import data', 'To define a tuple'],
                correct: 'To define how an object is represented as a string',
            },
            {
                question: 'Which principle focuses on reusing code through inheritance?',
                choices: ['Inheritance', 'Composition', 'Encapsulation', 'Polymorphism'],
                correct: 'Inheritance',
            },
            {
                question: 'What is a method in a class?',
                choices: ['A function defined inside a class', 'A variable defined inside a class', 'A loop defined inside a class', 'A module defined inside a class'],
                correct: 'A function defined inside a class',
            }
        ],
        'File Handling in Python': [
            {
                question: 'How do you open a file for reading?',
                choices: ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'a')", "open('file.txt', 'x')"],
                correct: "open('file.txt', 'r')",
            },
            {
                question: 'What does with open(...) as f: ensure?',
                choices: ['File is closed automatically', 'File is copied', 'File is renamed', 'File is deleted'],
                correct: 'File is closed automatically',
            },
            {
                question: 'Which mode opens a file for writing?',
                choices: ["'w'", "'r'", "'a'", "'x'"],
                correct: "'w'",
            },
            {
                question: 'Which function reads the full content of a file?',
                choices: ['read()', 'write()', 'append()', 'close()'],
                correct: 'read()',
            },
            {
                question: 'What is the purpose of close()?',
                choices: ['Close the file after use', 'Delete the file', 'Rename the file', 'Open the file'],
                correct: 'Close the file after use',
            },
            {
                question: 'Which mode appends content to an existing file?',
                choices: ["'a'", "'r'", "'w'", "'x'"],
                correct: "'a'",
            },
            {
                question: 'How do you create a new file for writing?',
                choices: ["open('file.txt', 'w')", "open('file.txt', 'r')", "read('file.txt')", "append('file.txt')"],
                correct: "open('file.txt', 'w')",
            },
            {
                question: 'What is the result of f.write(\'hi\')?',
                choices: ['Writes the text to the file', 'Reads the file', 'Deletes the file', 'Closes the file'],
                correct: 'Writes the text to the file',
            },
            {
                question: 'Which function is used to read one line from a file?',
                choices: ['readline()', 'write()', 'close()', 'append()'],
                correct: 'readline()',
            },
            {
                question: 'What is the purpose of readlines()?',
                choices: ['Return all lines of a file as a list', 'Write text to a file', 'Delete a file', 'Open a file'],
                correct: 'Return all lines of a file as a list',
            },
            {
                question: 'Which of these is a valid file handle variable?',
                choices: ['f', 'loop', 'class', 'dict'],
                correct: 'f',
            },
            {
                question: 'What happens if you open a file in w mode and it already exists?',
                choices: ['The file is overwritten', 'The file is appended', 'The file is read', 'The file is closed'],
                correct: 'The file is overwritten',
            },
            {
                question: 'Which mode opens a file in binary mode?',
                choices: ["'rb'", "'r'", "'w'", "'a'"],
                correct: "'rb'",
            },
            {
                question: 'What does seek(0) do?',
                choices: ['Moves the file pointer to the start', 'Closes the file', 'Deletes the file', 'Reads the file'],
                correct: 'Moves the file pointer to the start',
            },
            {
                question: 'Which method writes a string to a file?',
                choices: ['write()', 'read()', 'append()', 'close()'],
                correct: 'write()',
            },
            {
                question: 'What does tell() return?',
                choices: ['The current file position', 'The file contents', 'The file name', 'The file size'],
                correct: 'The current file position',
            },
            {
                question: 'What is the default mode when opening a file?',
                choices: ['Read mode', 'Write mode', 'Append mode', 'Binary mode'],
                correct: 'Read mode',
            },
            {
                question: 'What is the correct way to open a file for both reading and writing?',
                choices: ["open('file.txt', 'r+')", "open('file.txt', 'w+')", "open('file.txt', 'rb')", "open('file.txt', 'a')"],
                correct: "open('file.txt', 'r+')",
            },
            {
                question: 'Which method closes a file object?',
                choices: ['close()', 'read()', 'write()', 'open()'],
                correct: 'close()',
            },
            {
                question: 'What does with help prevent in file handling?',
                choices: ['Forgetting to close the file', 'Creating the file', 'Reading the file', 'Writing the file'],
                correct: 'Forgetting to close the file',
            }
        ],
        'Recrusion': [
            {
                question: 'What is recursion?',
                choices: ['A function calling itself', 'A loop repeating forever', 'A class method', 'A data structure'],
                correct: 'A function calling itself',
            },
            {
                question: 'What is usually needed in a recursive function?',
                choices: ['A base case', 'A for loop', 'A class', 'A file'],
                correct: 'A base case',
            },
            {
                question: 'Which of these is a common recursive example?',
                choices: ['Factorial', 'Dictionary', 'Tuple', 'String'],
                correct: 'Factorial',
            },
            {
                question: 'What can happen without a base case?',
                choices: ['Infinite recursion', 'Syntax error', 'Type error', 'Import error'],
                correct: 'Infinite recursion',
            },
            {
                question: 'What is the recursive case?',
                choices: ['The part where the function calls itself with a smaller problem', 'The part where the function stops', 'The part where the function prints output', 'The part where the function defines a variable'],
                correct: 'The part where the function calls itself with a smaller problem',
            },
            {
                question: 'Which of these best describes recursion?',
                choices: ['Problem solving by reducing the problem size', 'Looping over a list', 'Creating a variable', 'Writing a file'],
                correct: 'Problem solving by reducing the problem size',
            },
            {
                question: 'What is a recursive call?',
                choices: ['A call to the same function from within itself', 'A call to a different function', 'A loop iteration', 'A class constructor'],
                correct: 'A call to the same function from within itself',
            },
            {
                question: 'Which example is often solved recursively?',
                choices: ['Fibonacci series', 'Dictionary lookup', 'String concatenation', 'Variable assignment'],
                correct: 'Fibonacci series',
            },
            {
                question: 'What is the main risk of recursion?',
                choices: ['Stack overflow', 'Syntax error', 'Type error', 'Memory leak'],
                correct: 'Stack overflow',
            },
            {
                question: 'What usually makes the recursive problem smaller?',
                choices: ['Changing the input toward the base case', 'Changing the loop variable', 'Changing the class', 'Changing the file mode'],
                correct: 'Changing the input toward the base case',
            },
            {
                question: 'What is a recursive function?',
                choices: ['A function that calls itself', 'A function that never returns', 'A loop that repeats', 'A module import'],
                correct: 'A function that calls itself',
            },
            {
                question: 'Which term describes the stopping condition in recursion?',
                choices: ['Base case', 'Recursive case', 'Loop case', 'Function case'],
                correct: 'Base case',
            },
            {
                question: 'Which of these is a common recursive structure?',
                choices: ['if base case then return else recurse', 'for loop with break', 'while loop with continue', 'class with __init__'],
                correct: 'if base case then return else recurse',
            },
            {
                question: 'What is the effect of recursion on memory?',
                choices: ['Uses call stack memory', 'Uses no memory', 'Uses only constants', 'Uses only tuples'],
                correct: 'Uses call stack memory',
            },
            {
                question: 'What does recursion help solve?',
                choices: ['Problems that can be divided into smaller similar problems', 'Only arithmetic operations', 'Only string operations', 'Only loops'],
                correct: 'Problems that can be divided into smaller similar problems',
            },
            {
                question: 'What is a recursive decomposition?',
                choices: ['Breaking a problem into smaller subproblems', 'Creating a file', 'Writing a class', 'Importing a module'],
                correct: 'Breaking a problem into smaller subproblems',
            },
            {
                question: 'Which symbol is not used in recursion?',
                choices: ['@', 'def', 'return', 'if'],
                correct: '@',
            },
            {
                question: 'Which of these is a recursion-related error?',
                choices: ['RecursionError', 'SyntaxError', 'TypeError', 'NameError'],
                correct: 'RecursionError',
            },
            {
                question: 'What happens when recursion never reaches the base case?',
                choices: ['It keeps calling itself until stack overflow', 'It stops immediately', 'It returns None', 'It creates a tuple'],
                correct: 'It keeps calling itself until stack overflow',
            },
            {
                question: 'Which of these is a recursive mathematical function?',
                choices: ['Factorial', 'Addition', 'Printing', 'Collection'],
                correct: 'Factorial',
            }
        ]
    },
    C: {
        "Getting Started with C": [
            {
                question: "Which extension is used for a C source file?",
                choices: [".c", ".cpp", ".java", ".txt"],
                correct: ".c",
            },
            {
                question: "Which function is the entry point of every C program?",
                choices: ["main()", "start()", "init()", "run()"],
                correct: "main()",
            },
            {
                question: "Which header file is used for standard input and output?",
                choices: ["<stdio.h>", "<math.h>", "<string.h>", "<stdlib.h>"],
                correct: "<stdio.h>",
            },
            {
                question: "How do you write a single-line comment in C?",
                choices: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
                correct: "// comment",
            },
            {
                question: "Which keyword is used to declare a variable of integer type?",
                choices: ["int", "float", "char", "double"],
                correct: "int",
            },
            {
                question: "What is the correct way to end a C statement?",
                choices: [";", ":", ",", "."],
                correct: ";",
            },
            {
                question: "Which symbol is used to start a block of code?",
                choices: ["{", "(", "[", "<"],
                correct: "{",
            },
            {
                question: "Which keyword is used to return from a function?",
                choices: ["return", "break", "continue", "goto"],
                correct: "return",
            },
            {
                question: "What is the return type of main() by convention?",
                choices: ["int", "void", "char", "float"],
                correct: "int",
            },
            {
                question: "Which character is used to enclose a string literal?",
                choices: ["\"\"", "''", "()", "{}"],
                correct: "\"\"",
            },
            {
                question: "What does the compiler do with a program written in C?",
                choices: ["Translates it to machine code", "Runs it directly", "Encrypts it", "Converts it to Java"],
                correct: "Translates it to machine code",
            },
            {
                question: "Which of these is a valid C identifier?",
                choices: ["myValue", "2value", "my-value", "for"],
                correct: "myValue",
            },
            {
                question: "Which keyword is used to define a constant?",
                choices: ["const", "static", "volatile", "extern"],
                correct: "const",
            },
            {
                question: "What does `#include <stdio.h>` do?",
                choices: ["Includes standard I/O functions", "Creates a loop", "Starts the main function", "Declares a variable"],
                correct: "Includes standard I/O functions",
            },
            {
                question: "Which data type can store a single character?",
                choices: ["char", "int", "float", "double"],
                correct: "char",
            },
            {
                question: "How do you declare a floating-point variable?",
                choices: ["float x;", "int x;", "char x;", "bool x;"],
                correct: "float x;",
            },
            {
                question: "What is the size of a character in C?",
                choices: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                correct: "1 byte",
            },
            {
                question: "Which statement is used to display output?",
                choices: ["printf()", "scanf()", "gets()", "puts()"],
                correct: "printf()",
            },
            {
                question: "Which of these is a valid C keyword?",
                choices: ["switch", "function", "class", "new"],
                correct: "switch",
            },
            {
                question: "What is the purpose of a semicolon in C?",
                choices: ["Terminates a statement", "Starts a comment", "Defines a function", "Ends a block"],
                correct: "Terminates a statement",
            }
        ],
        "Building Block with C": [
            {
                question: "Which operator is used for assignment?",
                choices: ["=", "==", ":=", "=>"],
                correct: "=",
            },
            {
                question: "Which operator compares two values for equality?",
                choices: ["==", "=", "!=", ">="],
                correct: "==",
            },
            {
                question: "What is the result of 5 % 2?",
                choices: ["1", "2", "3", "0"],
                correct: "1",
            },
            {
                question: "Which operator is used for logical AND?",
                choices: ["&&", "||", "&", "|"],
                correct: "&&",
            },
            {
                question: "Which operator returns the remainder of division?",
                choices: ["%", "/", "*", "-"],
                correct: "%",
            },
            {
                question: "What does `x += 1` mean?",
                choices: ["x = x + 1", "x = 1", "x = x - 1", "x = x * 1"],
                correct: "x = x + 1",
            },
            {
                question: "Which operator is used for bitwise OR?",
                choices: ["|", "&&", "||", "&"],
                correct: "|",
            },
            {
                question: "What is the value of `3 < 5`?",
                choices: ["true", "false", "3", "5"],
                correct: "true",
            },
            {
                question: "Which operator is used to negate a condition?",
                choices: ["!", "~", "-", "++"],
                correct: "!",
            },
            {
                question: "What does `a++` do?",
                choices: ["Increments a after use", "Decrements a", "Assigns a", "Multiplies a"],
                correct: "Increments a after use",
            },
            {
                question: "Which operator is used for multiplication?",
                choices: ["*", "/", "%", "+"],
                correct: "*",
            },
            {
                question: "What is the result of `7 / 2` in C?",
                choices: ["3", "3.5", "4", "0"],
                correct: "3",
            },
            {
                question: "Which operator checks if a is greater than b?",
                choices: [">", ">=", "<", "=="],
                correct: ">",
            },
            {
                question: "What does `--x` do?",
                choices: ["Decrements x before use", "Increments x", "Adds x", "Compares x"],
                correct: "Decrements x before use",
            },
            {
                question: "Which statement combines two conditions with OR?",
                choices: ["a || b", "a && b", "a | b", "a + b"],
                correct: "a || b",
            },
            {
                question: "What does `x *= 2` mean?",
                choices: ["x = x * 2", "x = 2", "x = x / 2", "x = x + 2"],
                correct: "x = x * 2",
            },
            {
                question: "Which operator is used for bitwise AND?",
                choices: ["&", "&&", "|", "||"],
                correct: "&",
            },
            {
                question: "What is the result of `5 < 2`?",
                choices: ["false", "true", "5", "2"],
                correct: "false",
            },
            {
                question: "Which operator is used for division?",
                choices: ["/", "*", "%", "-"],
                correct: "/",
            },
            {
                question: "Which operator checks if a is not equal to b?",
                choices: ["!=", "==", ">=", "<="],
                correct: "!=",
            }
        ],
        "Input Output": [
            {
                question: "Which function is used to display output in C?",
                choices: ["printf()", "scanf()", "gets()", "puts()"],
                correct: "printf()",
            },
            {
                question: "Which function reads input from the keyboard?",
                choices: ["scanf()", "printf()", "strlen()", "strcmp()"],
                correct: "scanf()",
            },
            {
                question: "How do you print an integer using printf?",
                choices: ["printf(\"%d\", x);", "printf(x);", "print(x);", "echo(x);"],
                correct: "printf(\"%d\", x);",
            },
            {
                question: "How do you read an integer with scanf?",
                choices: ["scanf(\"%d\", &x);", "scan(x);", "read(x);", "input(x);"],
                correct: "scanf(\"%d\", &x);",
            },
            {
                question: "Which format specifier prints a character?",
                choices: ["%c", "%d", "%f", "%s"],
                correct: "%c",
            },
            {
                question: "Which format specifier prints a floating-point value?",
                choices: ["%f", "%d", "%c", "%s"],
                correct: "%f",
            },
            {
                question: "Which function outputs a string to the screen?",
                choices: ["puts()", "gets()", "printf()", "scanf()"],
                correct: "puts()",
            },
            {
                question: "Which function reads a line of text from input?",
                choices: ["gets()", "puts()", "scanf()", "printf()"],
                correct: "gets()",
            },
            {
                question: "What does `scanf(\"%s\", name);` read?",
                choices: ["A string", "An integer", "A character", "A float"],
                correct: "A string",
            },
            {
                question: "Which format specifier prints an integer?",
                choices: ["%d", "%f", "%c", "%s"],
                correct: "%d",
            },
            {
                question: "What is the purpose of `&` in scanf?",
                choices: ["It provides the address of the variable", "It prints the value", "It declares a constant", "It ends the input"],
                correct: "It provides the address of the variable",
            },
            {
                question: "Which escape sequence inserts a new line?",
                choices: ["\\n", "\\t", "\\b", "\\r"],
                correct: "\\n",
            },
            {
                question: "Which function is safer than gets() for reading strings?",
                choices: ["fgets()", "puts()", "scanf()", "printf()"],
                correct: "fgets()",
            },
            {
                question: "Which format specifier prints a string?",
                choices: ["%s", "%d", "%c", "%f"],
                correct: "%s",
            },
            {
                question: "What does `printf(\"Hello\\n\")` do?",
                choices: ["Prints Hello and moves to the next line", "Stores Hello", "Reads input", "Deletes Hello"],
                correct: "Prints Hello and moves to the next line",
            },
            {
                question: "What is the purpose of `puts()`?",
                choices: ["Writes a string and a newline", "Reads a string", "Removes a string", "Calculates length"],
                correct: "Writes a string and a newline",
            },
            {
                question: "Which function can be used to print a single char?",
                choices: ["putchar()", "printf()", "scanf()", "fgets()"],
                correct: "putchar()",
            },
            {
                question: "Which function reads a character from input?",
                choices: ["getchar()", "putchar()", "printf()", "scanf()"],
                correct: "getchar()",
            },
            {
                question: "What is the symbol used to indicate a format specifier in printf?",
                choices: ["%", "#", "&", "@"],
                correct: "%",
            },
            {
                question: "Which function writes a string without adding a newline?",
                choices: ["fputs()", "puts()", "gets()", "scanf()"],
                correct: "fputs()",
            }
        ],
        "Operation and Operators": [
            {
                question: "Which operator is used for addition?",
                choices: ["+", "-", "*", "/"],
                correct: "+",
            },
            {
                question: "Which operator is used for subtraction?",
                choices: ["-", "+", "*", "/"],
                correct: "-",
            },
            {
                question: "Which operator is used for multiplication?",
                choices: ["*", "/", "%", "+"],
                correct: "*",
            },
            {
                question: "Which operator is used for division?",
                choices: ["/", "*", "%", "-"],
                correct: "/",
            },
            {
                question: "What is the result of `10 / 3` in C?",
                choices: ["3", "3.333", "4", "0"],
                correct: "3",
            },
            {
                question: "Which operator gives the remainder?",
                choices: ["%", "/", "*", "-"],
                correct: "%",
            },
            {
                question: "What does `a = b = 5` do?",
                choices: ["Assigns 5 to both a and b", "Compares a and b", "Adds a and b", "Multiplies a and b"],
                correct: "Assigns 5 to both a and b",
            },
            {
                question: "Which operator is used to compare two values?",
                choices: ["==", "=", ":=", "=>"],
                correct: "==",
            },
            {
                question: "Which operator means greater than or equal to?",
                choices: [">=", ">", "<", "=="],
                correct: ">=",
            },
            {
                question: "Which operator means less than or equal to?",
                choices: ["<=", "<", ">", "=="],
                correct: "<=",
            },
            {
                question: "Which operator performs left shift?",
                choices: ["<<", ">>", "&", "|"],
                correct: "<<",
            },
            {
                question: "Which operator performs right shift?",
                choices: [">>", "<<", "&", "|"],
                correct: ">>",
            },
            {
                question: "Which operator is used for bitwise XOR?",
                choices: ["^", "&", "|", "~"],
                correct: "^",
            },
            {
                question: "What does `~a` do?",
                choices: ["Inverts bits of a", "Adds a", "Subtracts a", "Multiplies a"],
                correct: "Inverts bits of a",
            },
            {
                question: "Which operator is used to check logical AND?",
                choices: ["&&", "&", "||", "|"],
                correct: "&&",
            },
            {
                question: "Which operator is used to check logical OR?",
                choices: ["||", "|", "&&", "&"],
                correct: "||",
            },
            {
                question: "What is the result of `5 > 3`?",
                choices: ["true", "false", "3", "5"],
                correct: "true",
            },
            {
                question: "What is the result of `5 != 5`?",
                choices: ["false", "true", "5", "0"],
                correct: "false",
            },
            {
                question: "Which operator is used for unary plus?",
                choices: ["+", "-", "*", "/"],
                correct: "+",
            },
            {
                question: "Which operator is used for unary minus?",
                choices: ["-", "+", "*", "/"],
                correct: "-",
            }
        ],
        "Conditional Staement": [
            {
                question: "Which keyword starts a conditional statement in C?",
                choices: ["if", "for", "while", "switch"],
                correct: "if",
            },
            {
                question: "Which keyword is used for an alternative branch?",
                choices: ["else", "then", "elif", "case"],
                correct: "else",
            },
            {
                question: "What does `if (x > 0)` test?",
                choices: ["Whether x is positive", "Whether x is negative", "Whether x is zero", "Whether x is a string"],
                correct: "Whether x is positive",
            },
            {
                question: "Which keyword is used for multiple branching?",
                choices: ["switch", "if", "for", "while"],
                correct: "switch",
            },
            {
                question: "What is used to label each case in a switch statement?",
                choices: ["case", "default", "break", "continue"],
                correct: "case",
            },
            {
                question: "Which keyword handles the default action in a switch?",
                choices: ["default", "case", "else", "break"],
                correct: "default",
            },
            {
                question: "What does `break` do in a switch?",
                choices: ["Exits the switch", "Repeats the switch", "Skips the switch", "Starts the switch"],
                correct: "Exits the switch",
            },
            {
                question: "Which operator checks if two values are equal?",
                choices: ["==", "=", ">=", "!="],
                correct: "==",
            },
            {
                question: "Which operator checks if two values are not equal?",
                choices: ["!=", "==", "<=", ">="],
                correct: "!=",
            },
            {
                question: "What is the purpose of `else if`?",
                choices: ["Adds another condition", "Ends the loop", "Defines a function", "Starts a block"],
                correct: "Adds another condition",
            },
            {
                question: "Which statement is executed when the condition is false?",
                choices: ["else block", "if block", "switch block", "loop body"],
                correct: "else block",
            },
            {
                question: "Which keyword is used to compare a variable with multiple values?",
                choices: ["switch", "if", "for", "while"],
                correct: "switch",
            },
            {
                question: "What does `if (x && y)` require?",
                choices: ["Both x and y must be true", "Either x or y must be true", "x must be false", "y must be false"],
                correct: "Both x and y must be true",
            },
            {
                question: "What does `if (x || y)` require?",
                choices: ["Either x or y is true", "Both are false", "x is zero", "y is zero"],
                correct: "Either x or y is true",
            },
            {
                question: "Which keyword is often used with switch to stop execution after a case?",
                choices: ["break", "continue", "return", "default"],
                correct: "break",
            },
            {
                question: "What happens if no case matches in a switch?",
                choices: ["default block runs", "The program ends", "The loop repeats", "Nothing happens"],
                correct: "default block runs",
            },
            {
                question: "What is the purpose of an `if` statement?",
                choices: ["To make decisions", "To loop over code", "To declare variables", "To print output"],
                correct: "To make decisions",
            },
            {
                question: "Which of these is a valid condition?",
                choices: ["x > 10", "x + 10", "x = 10", "x : 10"],
                correct: "x > 10",
            },
            {
                question: "Which statement can be used for multiple conditions without nested ifs?",
                choices: ["switch", "repeat", "goto", "printf"],
                correct: "switch",
            },
            {
                question: "What is the result of `if (0)`?",
                choices: ["False", "True", "Error", "Ignored"],
                correct: "False",
            }
        ],
        Loops: [
            {
                question: "Which loop is used when the number of iterations is known?",
                choices: ["for", "while", "do-while", "switch"],
                correct: "for",
            },
            {
                question: "Which loop checks the condition before executing the body?",
                choices: ["while", "do-while", "for", "switch"],
                correct: "while",
            },
            {
                question: "Which loop executes the body at least once?",
                choices: ["do-while", "while", "for", "if"],
                correct: "do-while",
            },
            {
                question: "What does `break` do inside a loop?",
                choices: ["Exits the loop", "Skips one iteration", "Repeats the loop", "Starts the loop"],
                correct: "Exits the loop",
            },
            {
                question: "What does `continue` do inside a loop?",
                choices: ["Skips the current iteration", "Stops the loop", "Restarts the program", "Declares a variable"],
                correct: "Skips the current iteration",
            },
            {
                question: "Which loop header is correct?",
                choices: ["for(i=0; i<5; i++)", "for i=0; i<5; i++", "loop(i=0; i<5)", "repeat(i<5)"],
                correct: "for(i=0; i<5; i++)",
            },
            {
                question: "What is the typical use of a while loop?",
                choices: ["Repeating until a condition becomes false", "Making decisions", "Declaring variables", "Defining a function"],
                correct: "Repeating until a condition becomes false",
            },
            {
                question: "How many times does a for loop with `i<5` run if i starts at 0?",
                choices: ["5 times", "4 times", "6 times", "0 times"],
                correct: "5 times",
            },
            {
                question: "Which keyword can exit a loop immediately?",
                choices: ["break", "continue", "return", "else"],
                correct: "break",
            },
            {
                question: "Which loop is best for iterating over an array?",
                choices: ["for", "if", "switch", "goto"],
                correct: "for",
            },
            {
                question: "What does `for( ; ; )` mean?",
                choices: ["Infinite loop", "Empty loop", "Stopped loop", "Conditional loop"],
                correct: "Infinite loop",
            },
            {
                question: "What is the purpose of an increment expression in a for loop?",
                choices: ["To update the loop variable", "To declare a new variable", "To print output", "To break the loop"],
                correct: "To update the loop variable",
            },
            {
                question: "Which loop is most suitable when the body must run once before checking the condition?",
                choices: ["do-while", "for", "while", "switch"],
                correct: "do-while",
            },
            {
                question: "What happens if the loop condition is false at the start?",
                choices: ["The loop body is not executed", "The loop body executes once", "The program crashes", "The loop becomes infinite"],
                correct: "The loop body is not executed",
            },
            {
                question: "Which statement skips the rest of the current iteration?",
                choices: ["continue", "break", "return", "goto"],
                correct: "continue",
            },
            {
                question: "Which of the following is not a loop in C?",
                choices: ["switch", "for", "while", "do-while"],
                correct: "switch",
            },
            {
                question: "What is the common structure of a for loop?",
                choices: ["initialization; condition; update", "condition; body; return", "start; stop; break", "case; default; break"],
                correct: "initialization; condition; update",
            },
            {
                question: "Which part of a for loop is executed before each iteration?",
                choices: ["Condition", "Body", "Update", "Declaration"],
                correct: "Condition",
            },
            {
                question: "Which loop checks the condition after the body executes?",
                choices: ["do-while", "while", "for", "if"],
                correct: "do-while",
            },
            {
                question: "What is the result of an infinite loop?",
                choices: ["The program never ends", "The program ends quickly", "The program prints once", "The program compiles only"],
                correct: "The program never ends",
            }
        ],
        Function: [
            {
                question: "Which keyword is used to define a function in C?",
                choices: ["void", "function", "def", "class"],
                correct: "void",
            },
            {
                question: "What is a function parameter?",
                choices: ["A value passed into a function", "A loop variable", "A class attribute", "A keyword"],
                correct: "A value passed into a function",
            },
            {
                question: "Which part of a function definition specifies the return type?",
                choices: ["Before the function name", "After the function body", "Inside the body", "In the parameter list"],
                correct: "Before the function name",
            },
            {
                question: "How do you define a function with no return value?",
                choices: ["void func()", "int func()", "char func()", "bool func()"],
                correct: "void func()",
            },
            {
                question: "What is the purpose of a function prototype?",
                choices: ["Declares the function before use", "Defines the function body", "Calls the function", "Returns a value"],
                correct: "Declares the function before use",
            },
            {
                question: "Which syntax defines a function returning int?",
                choices: ["int add(int a, int b)", "function add(int a, int b)", "def add(int a, int b)", "class add(int a, int b)"],
                correct: "int add(int a, int b)",
            },
            {
                question: "What does a function call do?",
                choices: ["Executes the function body", "Declares the function", "Defines a variable", "Starts a loop"],
                correct: "Executes the function body",
            },
            {
                question: "What is an argument?",
                choices: ["A value passed to a function", "A return type", "A loop variable", "A header file"],
                correct: "A value passed to a function",
            },
            {
                question: "Which of these is a valid function declaration?",
                choices: ["int sum(int a, int b);", "sum(int a, int b);", "function sum(int a, int b);", "def sum(a, b);"],
                correct: "int sum(int a, int b);",
            },
            {
                question: "What is the return statement used for?",
                choices: ["To send a value back", "To start a loop", "To declare a variable", "To print output"],
                correct: "To send a value back",
            },
            {
                question: "Can a function have no parameters?",
                choices: ["Yes", "No", "Only if it returns int", "Only if it is static"],
                correct: "Yes",
            },
            {
                question: "Which keyword indicates that a function does not return a value?",
                choices: ["void", "int", "char", "float"],
                correct: "void",
            },
            {
                question: "What is the purpose of a function body?",
                choices: ["Contains the statements executed by the function", "Declares the function", "Defines the return type", "Calls the function"],
                correct: "Contains the statements executed by the function",
            },
            {
                question: "What is recursion related to?",
                choices: ["Functions calling themselves", "Loops only", "Variables only", "Comments only"],
                correct: "Functions calling themselves",
            },
            {
                question: "Which part comes before the function name in a definition?",
                choices: ["Return type", "Body", "Loop", "Class"],
                correct: "Return type",
            },
            {
                question: "Which of these is a function call?",
                choices: ["sum(2, 3);", "int sum(int a, int b);", "void sum();", "return 5;"],
                correct: "sum(2, 3);",
            },
            {
                question: "What does a function with parameters do?",
                choices: ["Accepts values from the caller", "Returns no value", "Declares variables", "Starts a loop"],
                correct: "Accepts values from the caller",
            },
            {
                question: "Can a C function return multiple values directly?",
                choices: ["No", "Yes", "Only if it uses pointers", "Only if it is static"],
                correct: "No",
            },
            {
                question: "What is the function name in `int add(int a, int b)`?",
                choices: ["add", "int", "a", "b"],
                correct: "add",
            },
            {
                question: "Which of these is a valid empty function body?",
                choices: ["{}", "[]", "();", ";"],
                correct: "{}",
            }
        ],
        Recrusion: [
            {
                question: "What is recursion?",
                choices: ["A function calling itself", "A loop repeating forever", "A variable declaration", "A preprocessor macro"],
                correct: "A function calling itself",
            },
            {
                question: "What is usually required in a recursive function?",
                choices: ["A base case", "A loop", "A pointer", "A header file"],
                correct: "A base case",
            },
            {
                question: "What happens without a base case?",
                choices: ["Infinite recursion", "Compile error", "No output", "Function returns immediately"],
                correct: "Infinite recursion",
            },
            {
                question: "Which common example is frequently solved recursively?",
                choices: ["Factorial", "Printf", "Scanf", "Switch"],
                correct: "Factorial",
            },
            {
                question: "What does the recursive call do?",
                choices: ["Solves a smaller version of the same problem", "Stops the program", "Declares a variable", "Starts a loop"],
                correct: "Solves a smaller version of the same problem",
            },
            {
                question: "Which problem can lead to stack overflow?",
                choices: ["Too much recursion", "Too much output", "Too many variables", "Too much memory"],
                correct: "Too much recursion",
            },
            {
                question: "What is the recursive case?",
                choices: ["The part that calls the function again with a smaller input", "The stopping condition", "The function declaration", "The return type"],
                correct: "The part that calls the function again with a smaller input",
            },
            {
                question: "What is the base case?",
                choices: ["The stopping condition", "The loop condition", "The statement body", "The pointer value"],
                correct: "The stopping condition",
            },
            {
                question: "Which of these is a recursive pattern?",
                choices: ["If base case, return; else recurse", "If else return;", "For loop continue", "Switch case break"],
                correct: "If base case, return; else recurse",
            },
            {
                question: "What is a recursive function?",
                choices: ["A function that calls itself", "A function that returns void", "A function with no parameters", "A function that does not compile"],
                correct: "A function that calls itself",
            },
            {
                question: "Which term describes the memory used by recursive calls?",
                choices: ["Call stack", "Heap", "Register", "Buffer"],
                correct: "Call stack",
            },
            {
                question: "What usually reduces the problem size in recursion?",
                choices: ["Smaller input", "Longer comments", "More variables", "More braces"],
                correct: "Smaller input",
            },
            {
                question: "Which of these is not a recursion example?",
                choices: ["Selection sort", "Factorial", "Fibonacci", "Tower of Hanoi"],
                correct: "Selection sort",
            },
            {
                question: "What does recursion help solve?",
                choices: ["Problems that can be divided into similar subproblems", "Only arithmetic", "Only file handling", "Only loops"],
                correct: "Problems that can be divided into similar subproblems",
            },
            {
                question: "What can happen if recursion never reaches the base case?",
                choices: ["Stack overflow", "Compilation failure", "Memory leak", "Infinite loop"],
                correct: "Stack overflow",
            },
            {
                question: "Which of these is a recursive mathematical function?",
                choices: ["Factorial", "Addition", "Multiplication", "Division"],
                correct: "Factorial",
            },
            {
                question: "Which concept is closely related to recursion?",
                choices: ["Divide and conquer", "Switch statement", "Preprocessor", "Pointer arithmetic"],
                correct: "Divide and conquer",
            },
            {
                question: "Which of these is a recursive sequence?",
                choices: ["Fibonacci", "ASCII", "Union", "Struct"],
                correct: "Fibonacci",
            },
            {
                question: "What is the opposite of recursion in terms of problem solving?",
                choices: ["Iteration", "Pointer", "Macro", "Array"],
                correct: "Iteration",
            },
            {
                question: "Why is a base case important in recursion?",
                choices: ["It stops the recursion", "It creates variables", "It defines loops", "It opens files"],
                correct: "It stops the recursion",
            }
        ],
        "Pointer function": [
            {
                question: "What is a function pointer?",
                choices: ["A pointer that stores the address of a function", "A pointer to an integer", "A pointer to a struct", "A pointer to an array"],
                correct: "A pointer that stores the address of a function",
            },
            {
                question: "How do you declare a pointer to a function returning int?",
                choices: ["int (*fp)(int);", "int *fp(int);", "int fp(int);", "int &fp(int);"],
                correct: "int (*fp)(int);",
            },
            {
                question: "What does `fp` hold in `int (*fp)(int);`?",
                choices: ["Address of a function", "Address of an int", "Array value", "Struct member"],
                correct: "Address of a function",
            },
            {
                question: "Which syntax is used to call a function through a pointer?",
                choices: ["fp(5)", "*fp(5)", "&fp(5)", "fp->(5)"],
                correct: "fp(5)",
            },
            {
                question: "Which of these is a valid function pointer use?",
                choices: ["fp = func;", "fp = &func;", "fp = *func;", "fp = func();"],
                correct: "fp = func;",
            },
            {
                question: "What is the purpose of function pointers?",
                choices: ["To pass functions as arguments or store them", "To declare variables", "To read input", "To define structs"],
                correct: "To pass functions as arguments or store them",
            },
            {
                question: "Which symbol is used to declare a pointer to a function?",
                choices: ["*", "&", "#", "@"],
                correct: "*",
            },
            {
                question: "Can a function pointer refer to overloaded functions in C?",
                choices: ["No", "Yes", "Only if static", "Only if inline"],
                correct: "No",
            },
            {
                question: "What is the return type in `int (*fp)(int);`?",
                choices: ["int", "float", "void", "char"],
                correct: "int",
            },
            {
                question: "Which of these is a common use of function pointers?",
                choices: ["Callback functions", "String concatenation", "File creation", "Loop control"],
                correct: "Callback functions",
            },
            {
                question: "Which syntax assigns a function address to a pointer?",
                choices: ["fp = func;", "fp = &func;", "fp = func();", "fp = *func;"],
                correct: "fp = func;",
            },
            {
                question: "What does `(*fp)(5)` mean?",
                choices: ["Call the function pointed to by fp with argument 5", "Create a pointer", "Assign 5 to fp", "Print 5"],
                correct: "Call the function pointed to by fp with argument 5",
            },
            {
                question: "What is the parameter type in `int (*fp)(int);`?",
                choices: ["int", "void", "char", "float"],
                correct: "int",
            },
            {
                question: "Which of these is a typical callback scenario?",
                choices: ["Sorting with custom comparison", "Reading an integer", "Declaring a variable", "Defining a macro"],
                correct: "Sorting with custom comparison",
            },
            {
                question: "Which concept is used with function pointers to choose behavior dynamically?",
                choices: ["Polymorphism", "Recursion", "Preprocessing", "Bitwise logic"],
                correct: "Polymorphism",
            },
            {
                question: "What is the address-of operator used for with functions?",
                choices: ["To get the function address", "To declare a variable", "To compare values", "To free memory"],
                correct: "To get the function address",
            },
            {
                question: "What is a callback function?",
                choices: ["A function passed to another function for later execution", "A function that returns void", "A recursive function", "A loop body"],
                correct: "A function passed to another function for later execution",
            },
            {
                question: "Which of these best describes a function pointer variable?",
                choices: ["It stores the address of a function", "It stores a text value", "It stores a string", "It stores an integer"],
                correct: "It stores the address of a function",
            },
            {
                question: "What is the meaning of `int (*fp)(int, int);`?",
                choices: ["Pointer to a function taking two ints and returning int", "Pointer to an int array", "Pointer to a string", "Pointer to a struct"],
                correct: "Pointer to a function taking two ints and returning int",
            },
            {
                question: "Why are function pointers useful?",
                choices: ["They enable dynamic selection of behavior", "They replace structs", "They replace loops", "They replace arrays"],
                correct: "They enable dynamic selection of behavior",
            }
        ],
        "Storage classes": [
            {
                question: "Which storage class is default for local variables?",
                choices: ["auto", "static", "extern", "register"],
                correct: "auto",
            },
            {
                question: "Which storage class keeps a variable alive for the whole program?",
                choices: ["static", "auto", "register", "volatile"],
                correct: "static",
            },
            {
                question: "What does the `extern` keyword indicate?",
                choices: ["The variable is defined elsewhere", "The variable is local", "The variable is constant", "The variable is inline"],
                correct: "The variable is defined elsewhere",
            },
            {
                question: "Which storage class suggests the compiler store the variable in a register?",
                choices: ["register", "auto", "static", "extern"],
                correct: "register",
            },
            {
                question: "What is the scope of a local auto variable?",
                choices: ["Inside the block where declared", "Entire program", "Entire file", "Global"],
                correct: "Inside the block where declared",
            },
            {
                question: "Which storage class gives a global variable internal linkage?",
                choices: ["static", "extern", "auto", "register"],
                correct: "static",
            },
            {
                question: "What is the default initial value of a global static variable?",
                choices: ["0", "Undefined", "Garbage", "1"],
                correct: "0",
            },
            {
                question: "What does `static` do for a local variable?",
                choices: ["Preserves its value between function calls", "Makes it global", "Removes it from memory", "Makes it constant"],
                correct: "Preserves its value between function calls",
            },
            {
                question: "Which storage class is used for variables defined outside any function?",
                choices: ["extern by default", "auto", "register", "typedef"],
                correct: "extern by default",
            },
            {
                question: "Which keyword is used to declare a variable with external linkage?",
                choices: ["extern", "static", "auto", "register"],
                correct: "extern",
            },
            {
                question: "What is the lifetime of a static local variable?",
                choices: ["Entire program execution", "One function call", "One block", "One line"],
                correct: "Entire program execution",
            },
            {
                question: "Which storage class is not guaranteed to be in a CPU register?",
                choices: ["register", "auto", "static", "extern"],
                correct: "register",
            },
            {
                question: "Which storage class is most appropriate for a counter that must keep its value across calls?",
                choices: ["static", "auto", "extern", "volatile"],
                correct: "static",
            },
            {
                question: "What is the default storage class of a local variable declared without specifier?",
                choices: ["auto", "static", "extern", "register"],
                correct: "auto",
            },
            {
                question: "Which storage class is used for variables that should be visible only in one file?",
                choices: ["static", "extern", "register", "auto"],
                correct: "static",
            },
            {
                question: "What does `extern int x;` mean?",
                choices: ["x is declared and defined elsewhere", "x is a local variable", "x is created here", "x is a constant"],
                correct: "x is declared and defined elsewhere",
            },
            {
                question: "Which storage class is commonly used for variables that need fast access?",
                choices: ["register", "extern", "static", "auto"],
                correct: "register",
            },
            {
                question: "Which keyword cannot be used with a function definition to change storage class?",
                choices: ["typedef", "static", "extern", "register"],
                correct: "typedef",
            },
            {
                question: "What is the lifetime of an auto variable?",
                choices: ["Until the block ends", "Entire program", "Same as static", "File scope"],
                correct: "Until the block ends",
            },
            {
                question: "Which storage class allows sharing a variable across multiple source files?",
                choices: ["extern", "auto", "register", "static"],
                correct: "extern",
            }
        ],
        Array: [
            {
                question: "How do you declare an array of 5 integers in C?",
                choices: ["int arr[5];", "int arr(5);", "array int[5];", "int[] arr;"],
                correct: "int arr[5];",
            },
            {
                question: "What is the index of the first element in an array?",
                choices: ["0", "1", "-1", "None"],
                correct: "0",
            },
            {
                question: "How do you access the first element of an array arr?",
                choices: ["arr[0]", "arr[1]", "arr[-1]", "arr[]"],
                correct: "arr[0]",
            },
            {
                question: "What is the size of an array determined by?",
                choices: ["The number of elements declared", "The first element", "The last element", "The function name"],
                correct: "The number of elements declared",
            },
            {
                question: "Can an array store values of different data types?",
                choices: ["No", "Yes", "Only strings", "Only ints"],
                correct: "No",
            },
            {
                question: "How do you initialize an array with values?",
                choices: ["int arr[] = {1, 2, 3};", "int arr();", "int arr = {1, 2, 3};", "arr[] = {1, 2, 3};"],
                correct: "int arr[] = {1, 2, 3};",
            },
            {
                question: "What is the last valid index of an array of size 5?",
                choices: ["4", "5", "3", "6"],
                correct: "4",
            },
            {
                question: "Which of these is a one-dimensional array?",
                choices: ["int a[10];", "int a[2][3];", "struct s;", "char *p;"],
                correct: "int a[10];",
            },
            {
                question: "Which of these is a two-dimensional array?",
                choices: ["int a[2][3];", "int a[10];", "int a;", "char a;"],
                correct: "int a[2][3];",
            },
            {
                question: "How do you access an element in row 1, column 2 of a 2D array?",
                choices: ["a[1][2]", "a[2][1]", "a[1,2]", "a(1,2)"],
                correct: "a[1][2]",
            },
            {
                question: "What is the syntax for declaring an array of characters?",
                choices: ["char name[20];", "string name[20];", "int name[20];", "float name[20];"],
                correct: "char name[20];",
            },
            {
                question: "How do you find the number of elements in an array?",
                choices: ["Use sizeof and divide by element size", "Use length()", "Use strlen()", "Use printf()"],
                correct: "Use sizeof and divide by element size",
            },
            {
                question: "What is an array of arrays called?",
                choices: ["Multidimensional array", "Pointer array", "String array", "Function array"],
                correct: "Multidimensional array",
            },
            {
                question: "Can array size be specified with a variable in C?",
                choices: ["Not in standard C", "Yes always", "Only for strings", "Only for floats"],
                correct: "Not in standard C",
            },
            {
                question: "Which array is used to store a sequence of characters?",
                choices: ["Character array", "Integer array", "Boolean array", "Float array"],
                correct: "Character array",
            },
            {
                question: "How do you assign a value to the third element of an array arr?",
                choices: ["arr[2] = 10;", "arr[3] = 10;", "arr(2) = 10;", "arr{2} = 10;"],
                correct: "arr[2] = 10;",
            },
            {
                question: "What is the maximum index in an array of size 100?",
                choices: ["99", "100", "101", "0"],
                correct: "99",
            },
            {
                question: "What happens if you access an array out of bounds?",
                choices: ["Undefined behavior", "No effect", "Program ends gracefully", "Compiler error"],
                correct: "Undefined behavior",
            },
            {
                question: "Which of these is a valid initialization for an integer array?",
                choices: ["int a[] = {1, 2, 3, 4};", "int a = {1, 2, 3};", "int a[4]();", "a = {1, 2, 3};"],
                correct: "int a[] = {1, 2, 3, 4};",
            },
            {
                question: "What is an array base address?",
                choices: ["The address of its first element", "The last element", "The array size", "The return type"],
                correct: "The address of its first element",
            }
        ],
        "Pointer Array": [
            {
                question: "What is an array of pointers?",
                choices: ["An array whose elements are pointers", "An array of values", "A pointer to an array", "A struct"],
                correct: "An array whose elements are pointers",
            },
            {
                question: "How do you declare an array of 3 integer pointers?",
                choices: ["int *arr[3];", "int arr[3];", "int **arr;", "int arr[3][3];"],
                correct: "int *arr[3];",
            },
            {
                question: "What does `int **p` mean?",
                choices: ["Pointer to a pointer to int", "Pointer to int", "Array of ints", "Function pointer"],
                correct: "Pointer to a pointer to int",
            },
            {
                question: "What is a pointer to an array?",
                choices: ["A pointer that points to the first element of an array", "An array of pointers", "A function pointer", "A string literal"],
                correct: "A pointer that points to the first element of an array",
            },
            {
                question: "How do you access the first element of a pointer array?",
                choices: ["arr[0]", "arr[1]", "*arr", "arr"],
                correct: "arr[0]",
            },
            {
                question: "What is `char *names[3];`?",
                choices: ["An array of three character pointers", "A pointer to three characters", "A string", "A struct"],
                correct: "An array of three character pointers",
            },
            {
                question: "How many pointers are in `int *p[10];`?",
                choices: ["10", "1", "100", "0"],
                correct: "10",
            },
            {
                question: "What is the difference between `int *p` and `int *p[5]`?",
                choices: ["One is a pointer; the other is an array of pointers", "Both are the same", "One is a string", "One is a struct"],
                correct: "One is a pointer; the other is an array of pointers",
            },
            {
                question: "Which declaration means a pointer to an array of 5 ints?",
                choices: ["int (*p)[5];", "int *p[5];", "int p[5];", "int **p;"],
                correct: "int (*p)[5];",
            },
            {
                question: "Which of these is useful for storing multiple strings?",
                choices: ["char *names[]", "int names[]", "float names[]", "double names[]"],
                correct: "char *names[]",
            },
            {
                question: "How do you access the value pointed to by `arr[0]`?",
                choices: ["*arr[0]", "arr[0]", "arr[1]", "&arr[0]"],
                correct: "*arr[0]",
            },
            {
                question: "What is the base type of `int *arr[10]`?",
                choices: ["int *", "int", "int []", "char"],
                correct: "int *",
            },
            {
                question: "What does `p[i]` represent in an array of pointers?",
                choices: ["The i-th pointer", "The i-th value", "The base address", "The function name"],
                correct: "The i-th pointer",
            },
            {
                question: "How would you declare a pointer to an array of 4 integers?",
                choices: ["int (*p)[4];", "int *p[4];", "int p[4];", "int **p[4];"],
                correct: "int (*p)[4];",
            },
            {
                question: "What is the size of `char *names[3]`?",
                choices: ["3 pointers", "3 chars", "3 strings", "3 ints"],
                correct: "3 pointers",
            },
            {
                question: "Which of these is commonly used to manage a list of strings?",
                choices: ["Array of pointers", "Array of ints", "Single pointer", "Function"],
                correct: "Array of pointers",
            },
            {
                question: "What is `int **ptr` used for?",
                choices: ["Pointer to a pointer", "Pointer to a function", "Pointer to a char", "Pointer to a struct"],
                correct: "Pointer to a pointer",
            },
            {
                question: "What is the main difference between an array and an array of pointers?",
                choices: ["Elements are pointers instead of values", "One is static", "One is dynamic", "One is a struct"],
                correct: "Elements are pointers instead of values",
            },
            {
                question: "What does `arr[0]` hold in `int *arr[3]`?",
                choices: ["A pointer to int", "An int value", "An array", "A struct"],
                correct: "A pointer to int",
            },
            {
                question: "Which concept is used when storing many strings efficiently?",
                choices: ["Array of pointers", "Array of floats", "Linked list", "Union"],
                correct: "Array of pointers",
            }
        ],
        "Searching Sorting in Array": [
            {
                question: "Which algorithm checks each element to find a target?",
                choices: ["Linear search", "Binary search", "Bubble sort", "Quick sort"],
                correct: "Linear search",
            },
            {
                question: "Which search works efficiently on a sorted array?",
                choices: ["Binary search", "Linear search", "Sequential search", "Random search"],
                correct: "Binary search",
            },
            {
                question: "What is the average time complexity of linear search?",
                choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: "O(n)",
            },
            {
                question: "What is the time complexity of binary search?",
                choices: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
                correct: "O(log n)",
            },
            {
                question: "Which sorting algorithm repeatedly swaps adjacent elements?",
                choices: ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"],
                correct: "Bubble sort",
            },
            {
                question: "Which sorting algorithm selects the smallest element each pass?",
                choices: ["Selection sort", "Bubble sort", "Quick sort", "Heap sort"],
                correct: "Selection sort",
            },
            {
                question: "Which sort inserts each element into its proper place?",
                choices: ["Insertion sort", "Bubble sort", "Quick sort", "Linear search"],
                correct: "Insertion sort",
            },
            {
                question: "What is the main requirement for binary search?",
                choices: ["The array must be sorted", "The array must be empty", "The array must be two-dimensional", "The array must be dynamic"],
                correct: "The array must be sorted",
            },
            {
                question: "Which sort uses a pivot element?",
                choices: ["Quick sort", "Bubble sort", "Selection sort", "Insertion sort"],
                correct: "Quick sort",
            },
            {
                question: "What does sorting do to data?",
                choices: ["Arranges it in a specific order", "Copies it", "Deletes it", "Reads it"],
                correct: "Arranges it in a specific order",
            },
            {
                question: "Which sort repeatedly divides the array into halves?",
                choices: ["Merge sort", "Bubble sort", "Insertion sort", "Linear search"],
                correct: "Merge sort",
            },
            {
                question: "What is the worst-case time complexity of bubble sort?",
                choices: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
                correct: "O(n^2)",
            },
            {
                question: "What is searching?",
                choices: ["Finding a target value in data", "Sorting elements", "Printing values", "Declaring variables"],
                correct: "Finding a target value in data",
            },
            {
                question: "Which algorithm repeatedly compares adjacent elements?",
                choices: ["Bubble sort", "Binary search", "Heap sort", "Linear search"],
                correct: "Bubble sort",
            },
            {
                question: "What is the most common first step in selection sort?",
                choices: ["Find the smallest element", "Swap the first two elements", "Print the array", "Reverse the array"],
                correct: "Find the smallest element",
            },
            {
                question: "Which algorithm is efficient for sorted arrays but not unsorted ones?",
                choices: ["Binary search", "Bubble sort", "Selection sort", "Linear search"],
                correct: "Binary search",
            },
            {
                question: "What is the result of a successful search?",
                choices: ["The index or position of the target", "The array size", "The data type", "The return type"],
                correct: "The index or position of the target",
            },
            {
                question: "Which sort uses a partitioning step around a pivot?",
                choices: ["Quick sort", "Merge sort", "Bubble sort", "Selection sort"],
                correct: "Quick sort",
            },
            {
                question: "What is the purpose of sorting before binary search?",
                choices: ["To make searching efficient", "To make arrays longer", "To print the values", "To declare pointers"],
                correct: "To make searching efficient",
            },
            {
                question: "Which search might need to examine every element?",
                choices: ["Linear search", "Binary search", "Quick sort", "Merge sort"],
                correct: "Linear search",
            }
        ],
        "Character Array string": [
            {
                question: "What is a string in C?",
                choices: ["A character array ending with '\0'", "An integer array", "A function", "A pointer"],
                correct: "A character array ending with '\0'",
            },
            {
                question: "Which character marks the end of a C string?",
                choices: ["'\\0'", "'\\n'", "'a'", "'.'"],
                correct: "'\\0'",
            },
            {
                question: "How do you declare a string variable?",
                choices: ["char name[20];", "int name[20];", "float name[20];", "string name;"],
                correct: "char name[20];",
            },
            {
                question: "Which function returns the length of a string?",
                choices: ["strlen()", "strcpy()", "strcat()", "strcmp()"],
                correct: "strlen()",
            },
            {
                question: "Which function copies one string to another?",
                choices: ["strcpy()", "strlen()", "strcmp()", "strcat()"],
                correct: "strcpy()",
            },
            {
                question: "Which function concatenates two strings?",
                choices: ["strcat()", "strcmp()", "strlen()", "strcpy()"],
                correct: "strcat()",
            },
            {
                question: "Which function compares two strings?",
                choices: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
                correct: "strcmp()",
            },
            {
                question: "What does `strlen('Hello')` return?",
                choices: ["5", "4", "6", "0"],
                correct: "5",
            },
            {
                question: "How do you initialize a string literal?",
                choices: ["char s[] = \"Hello\";", "char s = \"Hello\";", "int s = \"Hello\";", "string s = \"Hello\";"],
                correct: "char s[] = \"Hello\";",
            },
            {
                question: "What is the purpose of the null terminator?",
                choices: ["Marks the end of a string", "Starts the string", "Creates a newline", "Ends a loop"],
                correct: "Marks the end of a string",
            },
            {
                question: "What is the size of `char s[10]`?",
                choices: ["10 bytes", "10 characters", "20 bytes", "1 byte"],
                correct: "10 bytes",
            },
            {
                question: "Which function reads a line from stdin into a string?",
                choices: ["gets()", "puts()", "scanf()", "printf()"],
                correct: "gets()",
            },
            {
                question: "Why is `gets()` considered unsafe?",
                choices: ["It can overflow the buffer", "It cannot read strings", "It is not standard", "It causes recursion"],
                correct: "It can overflow the buffer",
            },
            {
                question: "Which function is safer than gets()?",
                choices: ["fgets()", "puts()", "strcpy()", "strcmp()"],
                correct: "fgets()",
            },
            {
                question: "What does `strcpy(dest, src)` do?",
                choices: ["Copies src into dest", "Compares src and dest", "Adds src to dest", "Finds length of src"],
                correct: "Copies src into dest",
            },
            {
                question: "What does `strcmp(a, b)` return when strings are equal?",
                choices: ["0", "1", "-1", "True"],
                correct: "0",
            },
            {
                question: "Which C header provides string functions?",
                choices: ["<string.h>", "<stdio.h>", "<math.h>", "<stdlib.h>"],
                correct: "<string.h>",
            },
            {
                question: "What is the difference between a string and a character array?",
                choices: ["A string is a character array terminated by '\0'", "A string is always dynamic", "A string cannot be stored", "A string is a function"],
                correct: "A string is a character array terminated by '\0'",
            },
            {
                question: "Which of these is a valid string literal?",
                choices: ["\"C Program\"", "'C Program'", "(C Program)", "{C Program}"],
                correct: "\"C Program\"",
            },
            {
                question: "What is the maximum number of characters in `char name[20];`?",
                choices: ["19", "20", "21", "10"],
                correct: "19",
            }
        ],
        Preprocessing: [
            {
                question: "What is preprocessing in C?",
                choices: ["A phase before compilation", "A runtime step", "A type of loop", "A storage class"],
                correct: "A phase before compilation",
            },
            {
                question: "Which symbol starts a preprocessor directive?",
                choices: ["#", "@", "&", "%"],
                correct: "#",
            },
            {
                question: "Which directive includes a header file?",
                choices: ["#include", "#define", "#ifdef", "#endif"],
                correct: "#include",
            },
            {
                question: "Which directive defines a macro?",
                choices: ["#define", "#include", "#ifdef", "#pragma"],
                correct: "#define",
            },
            {
                question: "What does `#define PI 3.14` do?",
                choices: ["Defines a macro named PI", "Includes a file", "Creates a loop", "Declares a variable"],
                correct: "Defines a macro named PI",
            },
            {
                question: "Which directive begins a conditional compilation block?",
                choices: ["#ifdef", "#include", "#define", "#pragma"],
                correct: "#ifdef",
            },
            {
                question: "What is `#endif` used for?",
                choices: ["Ends a conditional block", "Starts a macro", "Ends a loop", "Includes a library"],
                correct: "Ends a conditional block",
            },
            {
                question: "What does `#undef` do?",
                choices: ["Removes a macro definition", "Includes a file", "Starts a loop", "Ends a block"],
                correct: "Removes a macro definition",
            },
            {
                question: "Which directive is used for compiler-specific instructions?",
                choices: ["#pragma", "#define", "#include", "#if"],
                correct: "#pragma",
            },
            {
                question: "What does `#if` do?",
                choices: ["Starts a conditional compilation test", "Defines a function", "Begins a loop", "Declares a variable"],
                correct: "Starts a conditional compilation test",
            },
            {
                question: "Which directive can avoid multiple inclusions of a header?",
                choices: ["#ifndef", "#define", "#include", "#pragma"],
                correct: "#ifndef",
            },
            {
                question: "What is a macro?",
                choices: ["A code replacement rule", "A pointer", "A loop", "A string"],
                correct: "A code replacement rule",
            },
            {
                question: "Which directive is often used in header guards?",
                choices: ["#ifndef", "#pragma", "#include", "#define"],
                correct: "#ifndef",
            },
            {
                question: "What does `#error` do?",
                choices: ["Produces a custom compilation error", "Includes a file", "Defines a macro", "Starts a loop"],
                correct: "Produces a custom compilation error",
            },
            {
                question: "What is the purpose of preprocessor directives?",
                choices: ["To instruct the compiler before actual compilation", "To print output", "To allocate memory", "To declare arrays"],
                correct: "To instruct the compiler before actual compilation",
            },
            {
                question: "Which directive can be used to test a macro definition?",
                choices: ["#ifdef", "#include", "#error", "#undef"],
                correct: "#ifdef",
            },
            {
                question: "What does `#elif` mean?",
                choices: ["Else if in preprocessing", "End of file", "Else loop", "No effect"],
                correct: "Else if in preprocessing",
            },
            {
                question: "Which directive is used to include standard library headers?",
                choices: ["#include <stdio.h>", "#define stdio", "#pragma stdio", "#if stdio"],
                correct: "#include <stdio.h>",
            },
            {
                question: "What is the main benefit of header guards?",
                choices: ["Prevent multiple inclusion", "Increase speed", "Reduce errors", "Allocate memory"],
                correct: "Prevent multiple inclusion",
            },
            {
                question: "What is the result of `#define SQUARE(x) x*x`?",
                choices: ["A macro for squaring", "A pointer declaration", "A variable definition", "A function call"],
                correct: "A macro for squaring",
            }
        ],
        "Bit Manipulation": [
            {
                question: "What is bit manipulation?",
                choices: ["Working directly with bits of data", "Sorting arrays", "Reading files", "Declaring variables"],
                correct: "Working directly with bits of data",
            },
            {
                question: "Which operator is used for bitwise AND?",
                choices: ["&", "&&", "|", "||"],
                correct: "&",
            },
            {
                question: "Which operator is used for bitwise OR?",
                choices: ["|", "&&", "||", "&"],
                correct: "|",
            },
            {
                question: "Which operator is used for bitwise XOR?",
                choices: ["^", "&", "|", "~"],
                correct: "^",
            },
            {
                question: "Which operator flips bits?",
                choices: ["~", "!", "^", "&"],
                correct: "~",
            },
            {
                question: "What does `a << 1` do?",
                choices: ["Shifts bits of a left by one", "Divides a by 2", "Multiplies a by 2", "Adds 1 to a"],
                correct: "Shifts bits of a left by one",
            },
            {
                question: "What does `a >> 1` do?",
                choices: ["Shifts bits of a right by one", "Adds 1 to a", "Subtracts 1 from a", "Inverts bits of a"],
                correct: "Shifts bits of a right by one",
            },
            {
                question: "What is the result of `1 << 3`?",
                choices: ["8", "3", "4", "1"],
                correct: "8",
            },
            {
                question: "What is the result of `8 >> 1`?",
                choices: ["4", "8", "2", "16"],
                correct: "4",
            },
            {
                question: "Which operator is used for left shift?",
                choices: ["<<", ">>", "&", "|"],
                correct: "<<",
            },
            {
                question: "Which operator is used for right shift?",
                choices: [">>", "<<", "&", "|"],
                correct: ">>",
            },
            {
                question: "What is `a & b` called?",
                choices: ["Bitwise AND", "Logical AND", "Bitwise OR", "Logical OR"],
                correct: "Bitwise AND",
            },
            {
                question: "What is `a | b` called?",
                choices: ["Bitwise OR", "Logical OR", "Bitwise XOR", "Logical XOR"],
                correct: "Bitwise OR",
            },
            {
                question: "Which operator is used to toggle a bit?",
                choices: ["^", "&", "|", "~"],
                correct: "^",
            },
            {
                question: "What does `a ^ a` equal?",
                choices: ["0", "a", "1", "-a"],
                correct: "0",
            },
            {
                question: "Why is bit manipulation useful?",
                choices: ["It is efficient for low-level programming", "It improves loops", "It replaces arrays", "It prints strings"],
                correct: "It is efficient for low-level programming",
            },
            {
                question: "What is the purpose of masking in bit manipulation?",
                choices: ["To isolate specific bits", "To create a loop", "To declare variables", "To read strings"],
                correct: "To isolate specific bits",
            },
            {
                question: "Which bitwise operation can set a bit?",
                choices: ["OR", "AND", "SHIFT", "NOT"],
                correct: "OR",
            },
            {
                question: "Which bitwise operation can clear a bit?",
                choices: ["AND with a mask", "OR", "XOR", "SHIFT"],
                correct: "AND with a mask",
            },
            {
                question: "What does a left shift by 1 multiply by?",
                choices: ["2", "1", "4", "8"],
                correct: "2",
            }
        ],
        Structures: [
            {
                question: "What is a struct in C?",
                choices: ["A user-defined data type that groups related data", "A loop", "A function", "A macro"],
                correct: "A user-defined data type that groups related data",
            },
            {
                question: "How do you define a struct?",
                choices: ["struct Name { ... };", "class Name { ... };", "function Name { ... }", "def Name { ... }"],
                correct: "struct Name { ... };",
            },
            {
                question: "How do you access a struct member?",
                choices: ["s.name", "s->name", "s:name", "s[name]"],
                correct: "s.name",
            },
            {
                question: "How do you access a struct member through a pointer?",
                choices: ["p->name", "p.name", "p[name]", "p:name"],
                correct: "p->name",
            },
            {
                question: "What is a struct member?",
                choices: ["A field inside a struct", "A function name", "A loop variable", "A macro"],
                correct: "A field inside a struct",
            },
            {
                question: "What is the purpose of structs?",
                choices: ["To group different data types together", "To print output", "To declare loops", "To create pointers"],
                correct: "To group different data types together",
            },
            {
                question: "Can a struct contain another struct?",
                choices: ["Yes", "No", "Only if it is static", "Only if it is global"],
                correct: "Yes",
            },
            {
                question: "What does `typedef struct` do?",
                choices: ["Creates a new type name", "Creates a function", "Creates an array", "Creates a loop"],
                correct: "Creates a new type name",
            },
            {
                question: "What is the syntax for declaring a struct variable?",
                choices: ["struct Student s;", "Student s;", "int s;", "class Student s;"],
                correct: "struct Student s;",
            },
            {
                question: "How are members of a struct stored?",
                choices: ["In separate memory locations", "In one shared location", "In the stack only", "In registers only"],
                correct: "In separate memory locations",
            },
            {
                question: "What is the size of a struct based on?",
                choices: ["The sizes of its members and padding", "Only the first member", "Only the largest member", "The function name"],
                correct: "The sizes of its members and padding",
            },
            {
                question: "Can struct members have different data types?",
                choices: ["Yes", "No", "Only if they are ints", "Only if they are pointers"],
                correct: "Yes",
            },
            {
                question: "Which keyword is used to define a struct in C?",
                choices: ["struct", "class", "enum", "union"],
                correct: "struct",
            },
            {
                question: "How do you initialize a struct variable?",
                choices: ["struct Student s = {1, \"Alice\"};", "s = {1, \"Alice\"};", "int s = {1, \"Alice\"};", "struct Student s();"],
                correct: "struct Student s = {1, \"Alice\"};",
            },
            {
                question: "What is the purpose of a struct tag?",
                choices: ["Names the struct type", "Declares a loop", "Defines a pointer", "Includes a file"],
                correct: "Names the struct type",
            },
            {
                question: "Which of these can be members of a struct?",
                choices: ["Variables of different types", "Only ints", "Only floats", "Only pointers"],
                correct: "Variables of different types",
            },
            {
                question: "Can you have a function inside a struct in C?",
                choices: ["No", "Yes", "Only static", "Only inline"],
                correct: "No",
            },
            {
                question: "Which operator is used to access struct members with a pointer?",
                choices: ["->", ".", "&", "*"],
                correct: "->",
            },
            {
                question: "What is a nested struct?",
                choices: ["A struct containing another struct", "A pointer to a struct", "A function pointer", "An array of structs"],
                correct: "A struct containing another struct",
            },
            {
                question: "What is the main advantage of using structs?",
                choices: ["They keep related data together", "They improve loops", "They replace arrays", "They define macros"],
                correct: "They keep related data together",
            }
        ],
        "Union and File Handling": [
            {
                question: "What is a union in C?",
                choices: ["A data type that shares the same memory location among its members", "A loop", "A function", "A macro"],
                correct: "A data type that shares the same memory location among its members",
            },
            {
                question: "How is memory used by a union?",
                choices: ["All members share the same memory space", "Each member gets separate memory", "Only one member can be used", "It is stored in the CPU"],
                correct: "All members share the same memory space",
            },
            {
                question: "Which keyword defines a union?",
                choices: ["union", "struct", "class", "enum"],
                correct: "union",
            },
            {
                question: "What is the main difference between a struct and a union?",
                choices: ["Union shares memory; struct stores members separately", "Struct shares memory; union does not", "They are identical", "Union cannot hold ints"],
                correct: "Union shares memory; struct stores members separately",
            },
            {
                question: "Which function opens a file in C?",
                choices: ["fopen()", "open()", "read()", "write()"],
                correct: "fopen()",
            },
            {
                question: "Which mode opens a file for writing?",
                choices: ["w", "r", "a", "x"],
                correct: "w",
            },
            {
                question: "Which mode opens a file for reading?",
                choices: ["r", "w", "a", "x"],
                correct: "r",
            },
            {
                question: "Which mode opens a file for appending?",
                choices: ["a", "r", "w", "x"],
                correct: "a",
            },
            {
                question: "Which function writes data to a file?",
                choices: ["fwrite()", "printf()", "scanf()", "fread()"],
                correct: "fwrite()",
            },
            {
                question: "Which function reads data from a file?",
                choices: ["fread()", "printf()", "fwrite()", "gets()"],
                correct: "fread()",
            },
            {
                question: "Which function closes a file?",
                choices: ["fclose()", "close()", "end()", "stop()"],
                correct: "fclose()",
            },
            {
                question: "What does `fprintf()` do?",
                choices: ["Writes formatted output to a file", "Reads a file", "Closes a file", "Deletes a file"],
                correct: "Writes formatted output to a file",
            },
            {
                question: "What does `fscanf()` do?",
                choices: ["Reads formatted input from a file", "Writes formatted output", "Closes a file", "Deletes a file"],
                correct: "Reads formatted input from a file",
            },
            {
                question: "Which function is used to move the file position indicator?",
                choices: ["fseek()", "fopen()", "fclose()", "fread()"],
                correct: "fseek()",
            },
            {
                question: "Which function returns the current file position?",
                choices: ["ftell()", "fseek()", "fopen()", "fclose()"],
                correct: "ftell()",
            },
            {
                question: "Which header file is used for file handling?",
                choices: ["<stdio.h>", "<string.h>", "<math.h>", "<stdlib.h>"],
                correct: "<stdio.h>",
            },
            {
                question: "What does `feof()` check?",
                choices: ["Whether the end of file has been reached", "Whether the file is open", "Whether the file exists", "Whether the file is empty"],
                correct: "Whether the end of file has been reached",
            },
            {
                question: "What does `ferror()` check?",
                choices: ["Whether an error occurred during file operations", "Whether the file is empty", "Whether the file exists", "Whether the file is closed"],
                correct: "Whether an error occurred during file operations",
            },
            {
                question: "Why are unions useful?",
                choices: ["They save memory when only one member is needed at a time", "They speed up loops", "They replace pointers", "They replace strings"],
                correct: "They save memory when only one member is needed at a time",
            },
            {
                question: "Which of these is a common file handling operation?",
                choices: ["Opening a file", "Declaring a macro", "Using a union", "Defining a struct"],
                correct: "Opening a file",
            }
        ]
    },
    "C++": {
        Basics: [
            {
                question: "Which header is required for `std::cout`?",
                choices: ["<iostream>", "<stdio.h>", "<ostream>", "<cmath>"],
                correct: "<iostream>",
            },
            {
                question: "What does `#include <iostream>` do?",
                choices: ["Allows input and output streams", "Defines math functions", "Starts the program", "Creates a class"],
                correct: "Allows input and output streams",
            },
            {
                question: "Which keyword is used to define a namespace?",
                choices: ["namespace", "class", "struct", "using"],
                correct: "namespace",
            },
            {
                question: "What is the entry point of a C++ program?",
                choices: ["main()", "start()", "run()", "execute()"],
                correct: "main()",
            },
            {
                question: "Which symbol is used to end a statement in C++?",
                choices: [";", ":", ",", "{"],
                correct: ";",
            },
            {
                question: "How do you print text to the console?",
                choices: ["std::cout << \"Hello\";", "print(\"Hello\");", "echo \"Hello\";", "System.out.println(\"Hello\")"],
                correct: "std::cout << \"Hello\";",
            },
            {
                question: "How do you read input from the keyboard?",
                choices: ["std::cin >> value;", "read(value);", "input(value);", "scan(value);"],
                correct: "std::cin >> value;",
            },
            {
                question: "Which keyword declares an integer variable?",
                choices: ["int", "integer", "var", "num"],
                correct: "int",
            },
            {
                question: "Which type stores true or false values?",
                choices: ["bool", "int", "char", "float"],
                correct: "bool",
            },
            {
                question: "How do you write a single-line comment?",
                choices: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
                correct: "// comment",
            },
            {
                question: "What is the purpose of `std::endl`?",
                choices: ["Insert a newline and flush the stream", "End the program", "Define a variable", "Close a file"],
                correct: "Insert a newline and flush the stream",
            },
            {
                question: "What does `return 0;` usually mean in main()?",
                choices: ["The program ended successfully", "The program crashed", "The program loops forever", "The program prints output"],
                correct: "The program ended successfully",
            },
            {
                question: "Which keyword creates a constant?",
                choices: ["const", "static", "final", "volatile"],
                correct: "const",
            },
            {
                question: "How do you declare a character variable?",
                choices: ["char ch;", "string ch;", "int ch;", "bool ch;"],
                correct: "char ch;",
            },
            {
                question: "Which symbol begins a block of code?",
                choices: ["{", ";", ":", "]"],
                correct: "{",
            },
            {
                question: "What is the role of a semicolon in C++?",
                choices: ["Terminates a statement", "Starts a comment", "Defines a class", "Ends a block"],
                correct: "Terminates a statement",
            },
            {
                question: "Which keyword is used to define a function?",
                choices: ["function", "def", "void", "class"],
                correct: "void",
            },
            {
                question: "What does `using namespace std;` do?",
                choices: ["Allows standard library names to be used directly", "Starts a loop", "Allocates memory", "Defines a variable"],
                correct: "Allows standard library names to be used directly",
            },
            {
                question: "Which data type can hold decimal values?",
                choices: ["float", "int", "bool", "char"],
                correct: "float",
            },
            {
                question: "What is the purpose of braces `{}` in C++?",
                choices: ["Group statements into a block", "Declare variables", "Start comments", "End the program"],
                correct: "Group statements into a block",
            }
        ],
        Function: [
            {
                question: "How do you define a function that returns an integer?",
                choices: ["int add()", "void add()", "string add()", "bool add()"],
                correct: "int add()",
            },
            {
                question: "What is a function parameter?",
                choices: ["A value passed into a function", "A return value", "A class member", "A namespace"],
                correct: "A value passed into a function",
            },
            {
                question: "What does a function prototype declare?",
                choices: ["The function signature before implementation", "The function body", "A class", "An object"],
                correct: "The function signature before implementation",
            },
            {
                question: "Which keyword makes a function return no value?",
                choices: ["void", "int", "float", "return"],
                correct: "void",
            },
            {
                question: "How do you call a function named `foo`?",
                choices: ["foo();", "call foo;", "invoke foo();", "foo[];"],
                correct: "foo();",
            },
            {
                question: "What is pass-by-value?",
                choices: ["A copy of the argument is passed", "The original variable is modified", "The function returns a pointer", "The parameter is ignored"],
                correct: "A copy of the argument is passed",
            },
            {
                question: "What is pass-by-reference?",
                choices: ["The function receives the original variable", "The function receives a copy", "The function returns nothing", "The function is overloaded"],
                correct: "The function receives the original variable",
            },
            {
                question: "Which syntax declares a reference parameter?",
                choices: ["void foo(int &x)", "void foo(int *x)", "void foo(int x)", "void foo(ref int x)"],
                correct: "void foo(int &x)",
            },
            {
                question: "What does an overloaded function mean?",
                choices: ["Several functions share the same name but different parameters", "A function calls itself", "A function is hidden", "A function is deleted"],
                correct: "Several functions share the same name but different parameters",
            },
            {
                question: "Which keyword allows a function to be defined inline?",
                choices: ["inline", "virtual", "friend", "static"],
                correct: "inline",
            },
            {
                question: "What is a default argument?",
                choices: ["A value supplied when the caller omits an argument", "A return type", "A pointer", "A namespace"],
                correct: "A value supplied when the caller omits an argument",
            },
            {
                question: "Which of these is a valid function declaration?",
                choices: ["int sum(int a, int b);", "int sum{int a, int b};", "sum(int a, int b)", "function int sum(int a, int b);"],
                correct: "int sum(int a, int b);",
            },
            {
                question: "What is a recursive function?",
                choices: ["A function that calls itself", "A function with no return value", "A function in a class", "A macro"],
                correct: "A function that calls itself",
            },
            {
                question: "Which keyword is used to declare a function that does not change object state?",
                choices: ["const", "static", "inline", "volatile"],
                correct: "const",
            },
            {
                question: "What is the return type of a function that returns nothing?",
                choices: ["void", "int", "char", "bool"],
                correct: "void",
            },
            {
                question: "What does a function call do?",
                choices: ["Executes the function body", "Defines the function", "Creates a variable", "Declares a class"],
                correct: "Executes the function body",
            },
            {
                question: "Which operator is used to access members of an object through a pointer?",
                choices: ["->", ".", "::", "*"],
                correct: "->",
            },
            {
                question: "What does `const int& x` mean?",
                choices: ["A constant reference to an int", "An integer pointer", "A constant int variable", "A class object"],
                correct: "A constant reference to an int",
            },
            {
                question: "What is the purpose of a function parameter?",
                choices: ["To receive input values", "To return output", "To define a class", "To create a namespace"],
                correct: "To receive input values",
            },
            {
                question: "Which statement returns from a function?",
                choices: ["return", "break", "continue", "goto"],
                correct: "return",
            }
        ],
        "Object Oriented Programming": [
            {
                question: "What is a class in C++?",
                choices: ["A blueprint for objects", "A function", "A variable", "A loop"],
                correct: "A blueprint for objects",
            },
            {
                question: "What is an object?",
                choices: ["An instance of a class", "A data type", "A macro", "A function"],
                correct: "An instance of a class",
            },
            {
                question: "Which keyword defines a class?",
                choices: ["class", "struct", "interface", "module"],
                correct: "class",
            },
            {
                question: "What is encapsulation?",
                choices: ["Bundling data and methods together and restricting access", "Creating loops", "Using templates", "Overloading operators"],
                correct: "Bundling data and methods together and restricting access",
            },
            {
                question: "Which access specifier allows access from anywhere?",
                choices: ["public", "private", "protected", "friend"],
                correct: "public",
            },
            {
                question: "Which access specifier restricts access to the class itself?",
                choices: ["private", "public", "protected", "static"],
                correct: "private",
            },
            {
                question: "Which access specifier allows access in derived classes?",
                choices: ["protected", "private", "public", "inline"],
                correct: "protected",
            },
            {
                question: "How do you create an object of a class?",
                choices: ["ClassName obj;", "new ClassName;", "create ClassName;", "object ClassName;"],
                correct: "ClassName obj;",
            },
            {
                question: "What is a member function?",
                choices: ["A function declared inside a class", "A global variable", "A loop", "A namespace"],
                correct: "A function declared inside a class",
            },
            {
                question: "What does `this` represent in a class?",
                choices: ["The current object", "The class name", "The parent class", "The main function"],
                correct: "The current object",
            },
            {
                question: "What is abstraction?",
                choices: ["Hiding implementation details and showing only essential features", "Creating variables", "Using inheritance", "Printing output"],
                correct: "Hiding implementation details and showing only essential features",
            },
            {
                question: "Which concept describes an `is-a` relationship?",
                choices: ["Inheritance", "Composition", "Encapsulation", "Polymorphism"],
                correct: "Inheritance",
            },
            {
                question: "Which keyword is used for inheritance?",
                choices: [":", "->", "::", "=",],
                correct: ":",
            },
            {
                question: "What is a data member?",
                choices: ["A variable declared inside a class", "A function declared inside a class", "A macro", "A pointer"],
                correct: "A variable declared inside a class",
            },
            {
                question: "What is the purpose of `private` members?",
                choices: ["Hide implementation details", "Expose all data", "Allow any function to access them", "Make code faster"],
                correct: "Hide implementation details",
            },
            {
                question: "What is the relation between a class and its object?",
                choices: ["Class is a blueprint; object is an instance", "Object is a blueprint; class is an instance", "They are identical", "Object cannot contain data"],
                correct: "Class is a blueprint; object is an instance",
            },
            {
                question: "Which keyword makes a member accessible to derived classes but not outside?",
                choices: ["protected", "private", "public", "friend"],
                correct: "protected",
            },
            {
                question: "What does OOP stand for?",
                choices: ["Object-Oriented Programming", "Operations Over Process", "Object-Oriented Procedure", "Open Object Paradigm"],
                correct: "Object-Oriented Programming",
            },
            {
                question: "Which is a typical advantage of OOP?",
                choices: ["Modularity and reusability", "Slower execution", "Complex syntax only", "No code organization"],
                correct: "Modularity and reusability",
            },
            {
                question: "What is composition?",
                choices: ["Building a class using objects of other classes", "Using inheritance", "Overloading operators", "Defining templates"],
                correct: "Building a class using objects of other classes",
            }
        ],
        "Constructor and Destructors": [
            {
                question: "What is a constructor?",
                choices: ["A special member function used to initialize an object", "A function that returns a value", "A variable declaration", "A macro"],
                correct: "A special member function used to initialize an object",
            },
            {
                question: "What is the name of a constructor?",
                choices: ["Same as the class name", "Same as the object name", "Same as the return type", "Same as the header"],
                correct: "Same as the class name",
            },
            {
                question: "Which constructor has no parameters?",
                choices: ["Default constructor", "Parameterized constructor", "Copy constructor", "Destructor"],
                correct: "Default constructor",
            },
            {
                question: "What is a parameterized constructor?",
                choices: ["A constructor with arguments", "A constructor that returns values", "A destructor", "A friend function"],
                correct: "A constructor with arguments",
            },
            {
                question: "What does a copy constructor do?",
                choices: ["Initializes an object from another object", "Deletes an object", "Calls a base class", "Allocates memory"],
                correct: "Initializes an object from another object",
            },
            {
                question: "What is a destructor?",
                choices: ["A special function called when an object is destroyed", "A function that creates objects", "A loop", "A class template"],
                correct: "A special function called when an object is destroyed",
            },
            {
                question: "How is a destructor named?",
                choices: ["~ClassName", "ClassName", "constructor", "destroy"],
                correct: "~ClassName",
            },
            {
                question: "Can a destructor have parameters?",
                choices: ["No", "Yes", "Only default ones", "Only one parameter"],
                correct: "No",
            },
            {
                question: "Can a constructor return a value?",
                choices: ["No", "Yes", "Only int", "Only bool"],
                correct: "No",
            },
            {
                question: "What is an initializer list?",
                choices: ["A way to initialize members before the body of the constructor", "A loop syntax", "A macro definition", "A pointer declaration"],
                correct: "A way to initialize members before the body of the constructor",
            },
            {
                question: "Which constructor is invoked automatically when an object is created without arguments?",
                choices: ["Default constructor", "Copy constructor", "Destructor", "Parameterized constructor"],
                correct: "Default constructor",
            },
            {
                question: "Why are constructors useful?",
                choices: ["They set up object state during creation", "They free memory automatically", "They print output", "They define namespaces"],
                correct: "They set up object state during creation",
            },
            {
                question: "Which statement is true about constructors?",
                choices: ["They have no return type", "They return int by default", "They can be virtual", "They are always private"],
                correct: "They have no return type",
            },
            {
                question: "Which constructor is called when one object is initialized from another object of the same class?",
                choices: ["Copy constructor", "Default constructor", "Destructor", "Parameterized constructor"],
                correct: "Copy constructor",
            },
            {
                question: "When is a destructor called?",
                choices: ["When an object goes out of scope or is deleted", "When a function is declared", "When a variable is assigned", "When a class is defined"],
                correct: "When an object goes out of scope or is deleted",
            },
            {
                question: "Which of these can be overloaded?",
                choices: ["Constructors", "Destructors", "Return types", "Namespaces"],
                correct: "Constructors",
            },
            {
                question: "Can a class have more than one constructor?",
                choices: ["Yes", "No", "Only one public", "Only one private"],
                correct: "Yes",
            },
            {
                question: "What does a constructor initialize?",
                choices: ["Object data members", "Only return values", "Only methods", "Namespaces"],
                correct: "Object data members",
            },
            {
                question: "Which keyword is used before a member initializer list?",
                choices: [":", "->", "::", ";"],
                correct: ":",
            },
            {
                question: "Which one is not a constructor type?",
                choices: ["Virtual constructor", "Default constructor", "Copy constructor", "Parameterized constructor"],
                correct: "Virtual constructor",
            }
        ],
        "Memory Allocation": [
            {
                question: "Which operator is used to allocate memory on the heap?",
                choices: ["new", "malloc", "alloc", "create"],
                correct: "new",
            },
            {
                question: "Which operator is used to free memory allocated with new?",
                choices: ["delete", "free", "remove", "clear"],
                correct: "delete",
            },
            {
                question: "What does `new[]` allocate?",
                choices: ["An array on the heap", "A scalar on the stack", "A class template", "A reference"],
                correct: "An array on the heap",
            },
            {
                question: "Which operator releases an array allocated with new[]?",
                choices: ["delete[]", "delete", "free", "remove"],
                correct: "delete[]",
            },
            {
                question: "Where are local variables usually stored?",
                choices: ["Stack", "Heap", "Static area", "Register"],
                correct: "Stack",
            },
            {
                question: "Where is memory allocated by `new` stored?",
                choices: ["Heap", "Stack", "CPU cache", "Register"],
                correct: "Heap",
            },
            {
                question: "What is a dangling pointer?",
                choices: ["A pointer that points to freed memory", "A pointer to a constant", "A null pointer", "A smart pointer"],
                correct: "A pointer that points to freed memory",
            },
            {
                question: "What is a memory leak?",
                choices: ["Allocated memory that is never freed", "An object with no constructor", "A pointer to null", "A variable on the stack"],
                correct: "Allocated memory that is never freed",
            },
            {
                question: "Which value is commonly used to represent a null pointer?",
                choices: ["nullptr", "0", "NULL", "false"],
                correct: "nullptr",
            },
            {
                question: "What happens if you delete memory twice?",
                choices: ["Undefined behavior", "The program always ends", "The memory is reused automatically", "It creates a copy"],
                correct: "Undefined behavior",
            },
            {
                question: "What does `new` return when allocation succeeds?",
                choices: ["A pointer to the allocated memory", "An object", "A reference", "A string"],
                correct: "A pointer to the allocated memory",
            },
            {
                question: "What is the main difference between `new` and `malloc()`?",
                choices: ["`new` calls constructors, `malloc()` does not", "`malloc()` is faster", "`new` uses stack memory", "They are identical"],
                correct: "`new` calls constructors, `malloc()` does not",
            },
            {
                question: "Which function should be used to free memory allocated by `malloc()`?",
                choices: ["free()", "delete", "clear()", "remove()"],
                correct: "free()",
            },
            {
                question: "What does `delete p;` do?",
                choices: ["Frees memory pointed to by `p`", "Deletes the variable name", "Creates a pointer", "Initializes a class"],
                correct: "Frees memory pointed to by `p`",
            },
            {
                question: "Why is it important to free dynamically allocated memory?",
                choices: ["To avoid memory leaks", "To make code shorter", "To declare variables", "To create objects"],
                correct: "To avoid memory leaks",
            },
            {
                question: "What is a smart pointer?",
                choices: ["A pointer that manages ownership automatically", "A pointer to a function", "A pointer to an array", "A reference"],
                correct: "A pointer that manages ownership automatically",
            },
            {
                question: "Which smart pointer is commonly used for exclusive ownership?",
                choices: ["std::unique_ptr", "std::vector", "std::map", "std::string"],
                correct: "std::unique_ptr",
            },
            {
                question: "What is dynamic memory?",
                choices: ["Memory allocated at runtime", "Memory allocated at compile time", "Memory in registers", "Memory inside a class"],
                correct: "Memory allocated at runtime",
            },
            {
                question: "What is the result of deleting a null pointer?",
                choices: ["It is safe", "It causes a crash", "It allocates memory", "It creates a leak"],
                correct: "It is safe",
            },
            {
                question: "What is the main advantage of using `new` over stack allocation?",
                choices: ["Lifetime beyond the current scope", "Faster access", "No need to initialize", "Simpler syntax"],
                correct: "Lifetime beyond the current scope",
            }
        ],
        "Operator Overloading": [
            {
                question: "What is operator overloading?",
                choices: ["Giving an existing operator a new meaning for user-defined types", "Changing syntax rules", "Defining a loop", "Creating a class"],
                correct: "Giving an existing operator a new meaning for user-defined types",
            },
            {
                question: "Which keyword is used to define an overloaded operator?",
                choices: ["operator", "function", "class", "friend"],
                correct: "operator",
            },
            {
                question: "How do you overload the `+` operator?",
                choices: ["operator+", "plus()", "add()", "sum()"],
                correct: "operator+",
            },
            {
                question: "What is the return type of an overloaded stream insertion operator?",
                choices: ["ostream&", "int", "void", "bool"],
                correct: "ostream&",
            },
            {
                question: "Which operator can be overloaded?",
                choices: ["+", "::", ".", "?:"],
                correct: "+",
            },
            {
                question: "What is the syntax for overloading the `==` operator?",
                choices: ["bool operator==(const T& a, const T& b)", "bool operator=(const T& a, const T& b)", "bool ==(const T& a, const T& b)", "operator==(T a, T b)"],
                correct: "bool operator==(const T& a, const T& b)",
            },
            {
                question: "Can the `.` operator be overloaded?",
                choices: ["No", "Yes", "Only for classes", "Only for pointers"],
                correct: "No",
            },
            {
                question: "Which operator is often overloaded for indexing?",
                choices: ["[]", "()", "->", "+"],
                correct: "[]",
            },
            {
                question: "What is the purpose of overloading `<<`?",
                choices: ["To print user-defined objects to streams", "To compare values", "To allocate memory", "To create classes"],
                correct: "To print user-defined objects to streams",
            },
            {
                question: "How can overloaded operators be defined?",
                choices: ["As member or non-member functions", "Only as constructors", "Only as macros", "Only as virtual functions"],
                correct: "As member or non-member functions",
            },
            {
                question: "Which operator is commonly overloaded for assignment?",
                choices: ["=", "+", "==", "[]"],
                correct: "=",
            },
            {
                question: "What does overloading `++` allow?",
                choices: ["Custom increment behavior for user-defined types", "Changing loops", "Creating classes", "Allocating memory"],
                correct: "Custom increment behavior for user-defined types",
            },
            {
                question: "Can the arity of an operator be changed by overloading?",
                choices: ["No", "Yes", "Only for unary operators", "Only for binary operators"],
                correct: "No",
            },
            {
                question: "Which operator can be overloaded to create a function-like object?",
                choices: ["()", ".", ":", "->"],
                correct: "()",
            },
            {
                question: "What is the main benefit of operator overloading?",
                choices: ["Making user-defined types behave like built-in types", "Saving memory", "Removing inheritance", "Reducing compile time"],
                correct: "Making user-defined types behave like built-in types",
            },
            {
                question: "Which operator is often overloaded to compare objects?",
                choices: ["==", "+", "=", "[]"],
                correct: "==",
            },
            {
                question: "How many operands does the `++` operator usually take?",
                choices: ["One", "Two", "Three", "Zero"],
                correct: "One",
            },
            {
                question: "Which operator is used for stream extraction?",
                choices: [">>", "<<", "+", "--"],
                correct: ">>",
            },
            {
                question: "What does overloading `[]` allow?",
                choices: ["Custom indexing behavior", "Custom output", "Custom loops", "Custom inheritance"],
                correct: "Custom indexing behavior",
            },
            {
                question: "Which of these is a valid overloaded operator declaration?",
                choices: ["int operator+(const Box& b);", "int +();", "operator+(int x);", "function operator+();"],
                correct: "int operator+(const Box& b);",
            }
        ],
        Inheritance: [
            {
                question: "What is inheritance in C++?",
                choices: ["A mechanism where a class derives properties from another class", "A function call", "A loop construct", "A type of pointer"],
                correct: "A mechanism where a class derives properties from another class",
            },
            {
                question: "What is a base class?",
                choices: ["The class being inherited from", "The derived class", "An object", "A namespace"],
                correct: "The class being inherited from",
            },
            {
                question: "What is a derived class?",
                choices: ["The class that inherits from another class", "The base class", "A variable", "A function"],
                correct: "The class that inherits from another class",
            },
            {
                question: "Which syntax declares inheritance?",
                choices: ["class Child : public Parent", "class Child inherits Parent", "class Child extends Parent", "class Child uses Parent"],
                correct: "class Child : public Parent",
            },
            {
                question: "What does public inheritance mean?",
                choices: ["Public members remain public in the derived class", "Everything becomes private", "The base class is hidden", "The classes are unrelated"],
                correct: "Public members remain public in the derived class",
            },
            {
                question: "What does protected inheritance mean?",
                choices: ["Public and protected members become protected in the derived class", "All members become private", "No inheritance occurs", "The class becomes abstract"],
                correct: "Public and protected members become protected in the derived class",
            },
            {
                question: "What is multiple inheritance?",
                choices: ["A class inherits from more than one base class", "A class inherits twice from one base", "A class has multiple objects", "A class has multiple constructors"],
                correct: "A class inherits from more than one base class",
            },
            {
                question: "Which access specifier makes a member accessible only in derived classes?",
                choices: ["protected", "public", "private", "friend"],
                correct: "protected",
            },
            {
                question: "Which keyword prevents a class from being inherited?",
                choices: ["final", "static", "virtual", "inline"],
                correct: "final",
            },
            {
                question: "What does the `is-a` relationship represent in inheritance?",
                choices: ["A derived class is a specialized form of the base class", "A class has a member object", "Two classes are independent", "A function calls itself"],
                correct: "A derived class is a specialized form of the base class",
            },
            {
                question: "Which constructor is invoked first in inheritance?",
                choices: ["Base class constructor", "Derived class constructor", "Both at the same time", "Neither"],
                correct: "Base class constructor",
            },
            {
                question: "What is a virtual base class used for?",
                choices: ["To avoid multiple copies of a base class in multiple inheritance", "To create a loop", "To allocate memory", "To define a namespace"],
                correct: "To avoid multiple copies of a base class in multiple inheritance",
            },
            {
                question: "What does private inheritance make?",
                choices: ["Public and protected members become private in the derived class", "Everything public", "Everything protected", "The class abstract"],
                correct: "Public and protected members become private in the derived class",
            },
            {
                question: "Which concept is often described as `has-a` instead of `is-a`?",
                choices: ["Composition", "Inheritance", "Polymorphism", "Overloading"],
                correct: "Composition",
            },
            {
                question: "What is the purpose of inheritance?",
                choices: ["To reuse code and model relationships", "To hide all data", "To replace constructors", "To create loops"],
                correct: "To reuse code and model relationships",
            },
            {
                question: "Can a derived class access private members of the base class?",
                choices: ["No", "Yes", "Only if it is friend", "Only if protected"],
                correct: "No",
            },
            {
                question: "Which members are inherited by a derived class?",
                choices: ["Base class members according to access rules", "Only constructors", "Only private members", "Only static members"],
                correct: "Base class members according to access rules",
            },
            {
                question: "Why is inheritance useful?",
                choices: ["It reduces code duplication", "It makes code longer", "It removes classes", "It changes syntax"],
                correct: "It reduces code duplication",
            },
            {
                question: "What is a derived class also called?",
                choices: ["Subclass", "Parent", "Namespace", "Object"],
                correct: "Subclass",
            },
            {
                question: "What is a base class also called?",
                choices: ["Superclass", "Child", "Namespace", "Object"],
                correct: "Superclass",
            }
        ],
        "Run Time Polymorphism": [
            {
                question: "What is runtime polymorphism?",
                choices: ["Behavior determined at runtime through virtual functions", "Behavior fixed at compile time", "A type of loop", "A memory allocation technique"],
                correct: "Behavior determined at runtime through virtual functions",
            },
            {
                question: "Which keyword enables runtime polymorphism?",
                choices: ["virtual", "static", "inline", "friend"],
                correct: "virtual",
            },
            {
                question: "What is a virtual function?",
                choices: ["A function that can be overridden in derived classes", "A function that cannot be called", "A constructor", "A macro"],
                correct: "A function that can be overridden in derived classes",
            },
            {
                question: "What does `override` indicate?",
                choices: ["A function is intended to override a virtual function", "A function is deleted", "A function is inline", "A function is static"],
                correct: "A function is intended to override a virtual function",
            },
            {
                question: "What is a pure virtual function?",
                choices: ["A virtual function with `= 0`", "A function with no body", "A constructor", "A static function"],
                correct: "A virtual function with `= 0`",
            },
            {
                question: "What does a pure virtual function make a class?",
                choices: ["Abstract", "Concrete", "Final", "Static"],
                correct: "Abstract",
            },
            {
                question: "Can you instantiate an abstract class?",
                choices: ["No", "Yes", "Only if it has a constructor", "Only if it is virtual"],
                correct: "No",
            },
            {
                question: "What is dynamic binding?",
                choices: ["Choosing the function to call at runtime", "Choosing it at compile time", "Choosing a variable", "Choosing a class"],
                correct: "Choosing the function to call at runtime",
            },
            {
                question: "Which pointer type is commonly used with polymorphism?",
                choices: ["Base class pointer", "Integer pointer", "Char pointer", "Void pointer"],
                correct: "Base class pointer",
            },
            {
                question: "What is the purpose of a virtual destructor?",
                choices: ["To ensure proper cleanup of derived objects through base pointers", "To allocate memory", "To define classes", "To overload operators"],
                correct: "To ensure proper cleanup of derived objects through base pointers",
            },
            {
                question: "Which keyword prevents further overriding of a virtual function?",
                choices: ["final", "virtual", "override", "static"],
                correct: "final",
            },
            {
                question: "What is the main benefit of runtime polymorphism?",
                choices: ["Flexible code using base class interfaces", "Faster execution only", "Shorter code only", "No object creation"],
                correct: "Flexible code using base class interfaces",
            },
            {
                question: "Which mechanism uses a vtable?",
                choices: ["Virtual functions", "Templates", "Namespaces", "Macros"],
                correct: "Virtual functions",
            },
            {
                question: "What does `dynamic_cast` do?",
                choices: ["Safely casts a base pointer to a derived pointer", "Allocates memory", "Creates a class", "Deletes an object"],
                correct: "Safely casts a base pointer to a derived pointer",
            },
            {
                question: "Which keyword is used to indicate an overriding function?",
                choices: ["override", "final", "virtual", "friend"],
                correct: "override",
            },
            {
                question: "Why is `virtual` needed on a destructor?",
                choices: ["To ensure proper deletion through base pointers", "To speed up execution", "To hide data", "To create an object"],
                correct: "To ensure proper deletion through base pointers",
            },
            {
                question: "What is late binding?",
                choices: ["Resolving function calls at runtime", "Resolving them at compile time", "Creating templates", "Declaring variables"],
                correct: "Resolving function calls at runtime",
            },
            {
                question: "Which concept supports runtime polymorphism?",
                choices: ["Inheritance with virtual functions", "Switch statements only", "Macros only", "Templates only"],
                correct: "Inheritance with virtual functions",
            },
            {
                question: "What is an abstract class intended to do?",
                choices: ["Serve as a base for other classes", "Be instantiated directly", "Contain only inline methods", "Be a namespace"],
                correct: "Serve as a base for other classes",
            },
            {
                question: "Which function type is commonly overridden in derived classes?",
                choices: ["Virtual function", "Inline function", "Constructor", "Destructor"],
                correct: "Virtual function",
            }
        ],
        "Exception Handling": [
            {
                question: "What is exception handling?",
                choices: ["A way to manage runtime errors", "A data structure", "A loop", "A macro"],
                correct: "A way to manage runtime errors",
            },
            {
                question: "Which keyword begins a try block?",
                choices: ["try", "catch", "throw", "except"],
                correct: "try",
            },
            {
                question: "Which keyword handles an exception?",
                choices: ["catch", "throw", "try", "new"],
                correct: "catch",
            },
            {
                question: "Which keyword throws an exception?",
                choices: ["throw", "catch", "try", "return"],
                correct: "throw",
            },
            {
                question: "What happens when an exception is not caught?",
                choices: ["The program terminates", "The function continues", "The object is deleted", "The loop restarts"],
                correct: "The program terminates",
            },
            {
                question: "What is the purpose of `catch(...)`?",
                choices: ["Catch any exception type", "Throw an exception", "Ignore all errors", "Create a function"],
                correct: "Catch any exception type",
            },
            {
                question: "Why should exceptions be caught by reference?",
                choices: ["To avoid slicing and preserve polymorphism", "To make code shorter", "To allocate memory", "To print output"],
                correct: "To avoid slicing and preserve polymorphism",
            },
            {
                question: "What is `std::exception`?",
                choices: ["A base class for standard exceptions", "A stream class", "A container", "A pointer type"],
                correct: "A base class for standard exceptions",
            },
            {
                question: "Which class is commonly used for runtime errors?",
                choices: ["std::runtime_error", "std::vector", "std::string", "std::map"],
                correct: "std::runtime_error",
            },
            {
                question: "What is stack unwinding?",
                choices: ["The process of destroying stack objects while unwinding an exception", "A sort algorithm", "A template feature", "A pointer operation"],
                correct: "The process of destroying stack objects while unwinding an exception",
            },
            {
                question: "What does `noexcept` mean?",
                choices: ["A function does not throw exceptions", "A function throws any exception", "A function is inline", "A function is abstract"],
                correct: "A function does not throw exceptions",
            },
            {
                question: "Which of these is a standard exception type?",
                choices: ["std::logic_error", "std::cout", "std::string", "std::vector"],
                correct: "std::logic_error",
            },
            {
                question: "What is the benefit of exceptions?",
                choices: ["Separating error handling from normal code", "Making code longer", "Removing classes", "Avoiding loops"],
                correct: "Separating error handling from normal code",
            },
            {
                question: "What is the purpose of a `try` block?",
                choices: ["To enclose code that may throw exceptions", "To define a class", "To declare variables", "To print values"],
                correct: "To enclose code that may throw exceptions",
            },
            {
                question: "Which statement is used to rethrow an exception?",
                choices: ["throw;", "catch();", "return;", "break;"],
                correct: "throw;",
            },
            {
                question: "What do multiple `catch` blocks allow?",
                choices: ["Handling different exception types separately", "Creating multiple classes", "Increasing memory usage", "Overriding functions"],
                correct: "Handling different exception types separately",
            },
            {
                question: "What is the main reason to use exception handling?",
                choices: ["To manage errors without crashing the program", "To create variables", "To overload operators", "To define templates"],
                correct: "To manage errors without crashing the program",
            },
            {
                question: "What is the effect of `throw` inside a `catch` block?",
                choices: ["It rethrows the current exception", "It ends the program immediately", "It creates a new object", "It defines a loop"],
                correct: "It rethrows the current exception",
            },
            {
                question: "What is a common exception category?",
                choices: ["Runtime error", "Namespace error", "Template error", "Comment error"],
                correct: "Runtime error",
            },
            {
                question: "Which statement is used to catch an exception by value?",
                choices: ["catch (Exception e)", "catch (Exception& e)", "try (Exception e)", "throw (Exception e)"],
                correct: "catch (Exception e)",
            }
        ],
        STL: [
            {
                question: "What does STL stand for?",
                choices: ["Standard Template Library", "Standard Type Library", "Structured Template Language", "System Template Logic"],
                correct: "Standard Template Library",
            },
            {
                question: "Which container stores elements in a dynamic array?",
                choices: ["std::vector", "std::set", "std::map", "std::queue"],
                correct: "std::vector",
            },
            {
                question: "Which container stores unique sorted values?",
                choices: ["std::set", "std::vector", "std::list", "std::queue"],
                correct: "std::set",
            },
            {
                question: "Which container stores key-value pairs?",
                choices: ["std::map", "std::vector", "std::list", "std::stack"],
                correct: "std::map",
            },
            {
                question: "Which header provides STL containers and algorithms?",
                choices: ["<vector>", "<iostream>", "<string>", "<cmath>"],
                correct: "<vector>",
            },
            {
                question: "What is an iterator?",
                choices: ["An object that points to an element in a container", "A function", "A class template", "A macro"],
                correct: "An object that points to an element in a container",
            },
            {
                question: "Which method appends an element to a vector?",
                choices: ["push_back()", "append()", "insert()", "add()"],
                correct: "push_back()",
            },
            {
                question: "Which container is suitable for LIFO operations?",
                choices: ["std::stack", "std::vector", "std::map", "std::set"],
                correct: "std::stack",
            },
            {
                question: "Which container is suitable for FIFO operations?",
                choices: ["std::queue", "std::stack", "std::set", "std::map"],
                correct: "std::queue",
            },
            {
                question: "What does `std::sort()` do?",
                choices: ["Sorts a range of elements", "Adds an element", "Removes an element", "Creates a container"],
                correct: "Sorts a range of elements",
            },
            {
                question: "Which header provides `std::sort`?",
                choices: ["<algorithm>", "<vector>", "<iostream>", "<string>"],
                correct: "<algorithm>",
            },
            {
                question: "What is `std::pair`?",
                choices: ["A simple container for two values", "A loop", "A pointer", "An iterator"],
                correct: "A simple container for two values",
            },
            {
                question: "Which container stores elements in a linked list?",
                choices: ["std::list", "std::vector", "std::queue", "std::map"],
                correct: "std::list",
            },
            {
                question: "How do you get the size of a vector?",
                choices: ["size()", "length()", "capacity()", "count()"],
                correct: "size()",
            },
            {
                question: "What does `begin()` return?",
                choices: ["An iterator to the first element", "The size", "The capacity", "A reference"],
                correct: "An iterator to the first element",
            },
            {
                question: "What does `end()` return?",
                choices: ["An iterator past the last element", "The last element", "The first element", "The size"],
                correct: "An iterator past the last element",
            },
            {
                question: "Which container is usually used for fast lookup by key?",
                choices: ["std::map", "std::vector", "std::list", "std::queue"],
                correct: "std::map",
            },
            {
                question: "What is a container adapter?",
                choices: ["A wrapper around a sequence container with a restricted interface", "A class template", "A pointer", "An algorithm"],
                correct: "A wrapper around a sequence container with a restricted interface",
            },
            {
                question: "Which method removes the last element of a vector?",
                choices: ["pop_back()", "remove()", "erase()", "clear()"],
                correct: "pop_back()",
            },
            {
                question: "Which header provides `std::string`?",
                choices: ["<string>", "<vector>", "<queue>", "<set>"],
                correct: "<string>",
            }
        ],
        Template: [
            {
                question: "What is a template in C++?",
                choices: ["A blueprint for creating generic classes or functions", "A macro", "A loop", "A namespace"],
                correct: "A blueprint for creating generic classes or functions",
            },
            {
                question: "Which keyword declares a template?",
                choices: ["template", "generic", "typename", "class"],
                correct: "template",
            },
            {
                question: "How do you define a function template?",
                choices: ["template <typename T> T add(T a, T b)", "template <class T> add(T a, T b)", "function<T> add(T a, T b)", "generic T add(T a, T b)"],
                correct: "template <typename T> T add(T a, T b)",
            },
            {
                question: "What does `typename` indicate in a template?",
                choices: ["A placeholder type parameter", "A class member", "A namespace", "An exception"],
                correct: "A placeholder type parameter",
            },
            {
                question: "What is a class template?",
                choices: ["A template that generates classes", "A macro for classes", "A function pointer", "An abstract class"],
                correct: "A template that generates classes",
            },
            {
                question: "Which syntax declares a template parameter?",
                choices: ["template <typename T>", "template <class T>", "template <T>", "template <type T>"],
                correct: "template <typename T>",
            },
            {
                question: "What is template specialization?",
                choices: ["Providing a specialized implementation for a specific type", "Removing templates", "Creating a namespace", "Using inheritance"],
                correct: "Providing a specialized implementation for a specific type",
            },
            {
                question: "What is a non-type template parameter?",
                choices: ["A template parameter that is not a type", "A function parameter", "A constructor parameter", "An object member"],
                correct: "A template parameter that is not a type",
            },
            {
                question: "Which standard library class is a template?",
                choices: ["std::vector", "std::cout", "std::string", "std::map"],
                correct: "std::vector",
            },
            {
                question: "Why are templates useful?",
                choices: ["They enable generic programming", "They remove constructors", "They create loops", "They hide classes"],
                correct: "They enable generic programming",
            },
            {
                question: "What does a template allow you to write?",
                choices: ["Code that works with many data types", "Code that only works with ints", "Code that only works with strings", "Code that uses no classes"],
                correct: "Code that works with many data types",
            },
            {
                question: "What is the main difference between templates and inheritance?",
                choices: ["Templates support generic programming; inheritance models relationships", "Templates are always slower", "Inheritance is used only for functions", "Templates cannot be used with classes"],
                correct: "Templates support generic programming; inheritance models relationships",
            },
            {
                question: "Can you have multiple template parameters?",
                choices: ["Yes", "No", "Only one", "Only two"],
                correct: "Yes",
            },
            {
                question: "Which keyword can be used instead of `typename` in a template?",
                choices: ["class", "virtual", "friend", "const"],
                correct: "class",
            },
            {
                question: "What is a function template?",
                choices: ["A template that generates functions", "A constructor", "A namespace", "A class member"],
                correct: "A template that generates functions",
            },
            {
                question: "What is the benefit of template specialization?",
                choices: ["Optimizing or customizing behavior for a specific type", "Creating constructors", "Removing code duplication", "Making classes abstract"],
                correct: "Optimizing or customizing behavior for a specific type",
            },
            {
                question: "What is the purpose of `std::vector<int>`?",
                choices: ["A vector template instantiated for ints", "An abstract class", "A function pointer", "A namespace"],
                correct: "A vector template instantiated for ints",
            },
            {
                question: "What is the main idea behind generic programming?",
                choices: ["Write code once and use it for different types", "Write code only for one type", "Avoid all classes", "Only use built-in types"],
                correct: "Write code once and use it for different types",
            },
            {
                question: "Which statement is true about templates?",
                choices: ["They are instantiated at compile time", "They are instantiated at runtime", "They cannot be used with classes", "They require inheritance"],
                correct: "They are instantiated at compile time",
            },
            {
                question: "What does `template <typename T, int N>` mean?",
                choices: ["A template with a type parameter and a non-type integer parameter", "A function declaration", "A class inheritance syntax", "A pointer declaration"],
                correct: "A template with a type parameter and a non-type integer parameter",
            }
        ]
    },
    Java: {
        Easy: [
            {
                question: "Which keyword starts a class definition in Java?",
                choices: ["class", "struct", "module", "object"],
                correct: "class",
            },
            {
                question: "What is the Java entry point method?",
                choices: ["public static void main(String[] args)", "main()", "start()", "run()"],
                correct: "public static void main(String[] args)",
            },
            {
                question: "Which keyword inherits from a class?",
                choices: ["extends", "implements", "inherits", "uses"],
                correct: "extends",
            },
            {
                question: "How do you print text in Java?",
                choices: ["System.out.println(\"Hello\")", "Console.WriteLine(\"Hello\")", "print(\"Hello\")", "echo \"Hello\""],
                correct: "System.out.println(\"Hello\")",
            },
            {
                question: "Which type stores true/false values?",
                choices: ["boolean", "int", "String", "char"],
                correct: "boolean",
            },
            {
                question: "Which operator compares values for equality?",
                choices: ["==", "=", "!=", ">"],
                correct: "==",
            },
            {
                question: "How do you declare an integer variable in Java?",
                choices: ["int x;", "integer x;", "var x;", "number x;"],
                correct: "int x;",
            },
            {
                question: "What does `System.out.println` do?",
                choices: ["Prints output to the console", "Reads input", "Creates a class", "Starts the program"],
                correct: "Prints output to the console",
            },
            {
                question: "What keyword is used to create a constant?",
                choices: ["final", "static", "const", "volatile"],
                correct: "final",
            },
            {
                question: "Which symbol is used for a single-line comment?",
                choices: ["//", "#", "/*", "<!--"],
                correct: "//",
            },
            {
                question: "How do you define a method that returns no value?",
                choices: ["void method()", "int method()", "String method()", "boolean method()"],
                correct: "void method()",
            },
            {
                question: "What is the correct way to declare an array?",
                choices: ["int[] arr;", "array<int> arr;", "arr<int>[];", "int arr[];"],
                correct: "int[] arr;",
            },
            {
                question: "Which data type is used for text?",
                choices: ["String", "int", "boolean", "char"],
                correct: "String",
            },
            {
                question: "How do you create a new object?",
                choices: ["new ClassName()", "create ClassName()", "make ClassName()", "instanceof ClassName()"],
                correct: "new ClassName()",
            },
            {
                question: "Which keyword prevents a class from being subclassed?",
                choices: ["final", "static", "abstract", "private"],
                correct: "final",
            },
            {
                question: "What does `for` loop do?",
                choices: ["Repeats code a certain number of times", "Defines a class", "Creates an array", "Handles exceptions"],
                correct: "Repeats code a certain number of times",
            },
            {
                question: "Which keyword is used for conditional branching?",
                choices: ["if", "for", "switch", "while"],
                correct: "if",
            },
            {
                question: "What does `this` refer to?",
                choices: ["The current object", "The class name", "The parent class", "The main method"],
                correct: "The current object",
            },
            {
                question: "What is the default value of an uninitialized int?",
                choices: ["0", "null", "false", "1"],
                correct: "0",
            },
            {
                question: "How do you include a package in Java?",
                choices: ["import package.Name;", "include package.Name;", "require package.Name;", "using package.Name;"],
                correct: "import package.Name;",
            },
        ],
        Medium: [
            {
                question: "Which modifier makes a field constant?",
                choices: ["final", "static", "volatile", "transient"],
                correct: "final",
            },
            {
                question: "What does `String s = \"Hello\";` create?",
                choices: ["A string object", "A char array", "An int", "A boolean"],
                correct: "A string object",
            },
            {
                question: "How do you compare string content?",
                choices: ["equals()", "==", "compareTo()", "match()"],
                correct: "equals()",
            },
            {
                question: "Which collection maintains insertion order?",
                choices: ["ArrayList", "HashSet", "TreeSet", "HashMap"],
                correct: "ArrayList",
            },
            {
                question: "What is the superclass of all Java classes?",
                choices: ["Object", "Class", "String", "System"],
                correct: "Object",
            },
            {
                question: "What does `instanceof` check?",
                choices: ["Type compatibility", "Memory allocation", "Object size", "String length"],
                correct: "Type compatibility",
            },
            {
                question: "Which keyword is used to inherit from a class?",
                choices: ["extends", "implements", "inherits", "uses"],
                correct: "extends",
            },
            {
                question: "What does `public` make accessible?",
                choices: ["Any class", "Only the same class", "Only subclasses", "Only the package"],
                correct: "Any class",
            },
            {
                question: "Which method is used to read user input?",
                choices: ["Scanner.nextLine()", "readLine()", "input()", "Console.read()"],
                correct: "Scanner.nextLine()",
            },
            {
                question: "Which collection stores unique elements?",
                choices: ["HashSet", "ArrayList", "List", "Map"],
                correct: "HashSet",
            },
            {
                question: "What does `static` mean for a method?",
                choices: ["Belongs to the class", "Can only be called once", "Is abstract", "Cannot be overridden"],
                correct: "Belongs to the class",
            },
            {
                question: "How do you declare a multidimensional array?",
                choices: ["int[][] arr;", "int arr[][];", "array<int,int> arr;", "int arr[ ][ ];"],
                correct: "int[][] arr;",
            },
            {
                question: "Which exception is thrown on invalid casting?",
                choices: ["ClassCastException", "IOException", "RuntimeException", "NullPointerException"],
                correct: "ClassCastException",
            },
            {
                question: "What is the purpose of `abstract`?",
                choices: ["Create a class that cannot be instantiated", "Make a method visible", "Create a constant", "Make an interface"],
                correct: "Create a class that cannot be instantiated",
            },
            {
                question: "What does `StringBuilder` allow?",
                choices: ["Mutable string creation", "Immutable strings", "Integer operations", "File handling"],
                correct: "Mutable string creation",
            },
            {
                question: "How do you compare two objects by reference?",
                choices: ["==", "equals()", "compareTo()", "match()"],
                correct: "==",
            },
            {
                question: "What does `implements` do?",
                choices: ["Makes a class implement an interface", "Creates inheritance", "Defines a package", "Declares a field"],
                correct: "Makes a class implement an interface",
            },
            {
                question: "Which keyword creates a subclass?",
                choices: ["extends", "implements", "inherits", "new"],
                correct: "extends",
            },
            {
                question: "What is the purpose of `try`?",
                choices: ["Handle exceptions", "Define methods", "Create objects", "Import classes"],
                correct: "Handle exceptions",
            },
            {
                question: "Which method converts a string to an integer?",
                choices: ["Integer.parseInt()", "toInt()", "parse()", "convert()"],
                correct: "Integer.parseInt()",
            },
        ],
        Hard: [
            {
                question: "Which keyword prevents a method from being overridden?",
                choices: ["final", "static", "private", "public"],
                correct: "final",
            },
            {
                question: "What does `throws` declare?",
                choices: ["Possible exceptions from a method", "A thrown object", "A caught exception", "A new thread"],
                correct: "Possible exceptions from a method",
            },
            {
                question: "Which statement throws an exception?",
                choices: ["throw new Exception();", "throws Exception;", "try Exception", "catch Exception"],
                correct: "throw new Exception();",
            },
            {
                question: "What is the Java keyword for runtime type checking?",
                choices: ["instanceof", "typeof", "is", "classof"],
                correct: "instanceof",
            },
            {
                question: "Which interface supports optional values?",
                choices: ["Optional", "Stream", "List", "Set"],
                correct: "Optional",
            },
            {
                question: "What does `synchronized` do?",
                choices: ["Controls access to a block by multiple threads", "Creates a class", "Defines an interface", "Marks a method final"],
                correct: "Controls access to a block by multiple threads",
            },
            {
                question: "Which keyword is used to define an interface?",
                choices: ["interface", "class", "abstract", "implements"],
                correct: "interface",
            },
            {
                question: "What is the purpose of `volatile`?",
                choices: ["Indicate a variable may change unexpectedly", "Define a constant", "Make a method private", "Create an enum"],
                correct: "Indicate a variable may change unexpectedly",
            },
            {
                question: "What is a lambda expression in Java?",
                choices: ["An anonymous function", "A loop", "A class definition", "A package"],
                correct: "An anonymous function",
            },
            {
                question: "Which collection is used for key-value pairs?",
                choices: ["Map", "List", "Set", "Queue"],
                correct: "Map",
            },
            {
                question: "What is the purpose of `Stream API`?",
                choices: ["Process collections of data in a functional style", "Create GUI components", "Define packages", "Handle memory"],
                correct: "Process collections of data in a functional style",
            },
            {
                question: "Which keyword marks a method that must be implemented by subclasses?",
                choices: ["abstract", "final", "static", "private"],
                correct: "abstract",
            },
            {
                question: "What does `super()` do?",
                choices: ["Calls the parent class constructor", "Creates an object", "Starts a loop", "Defines an interface"],
                correct: "Calls the parent class constructor",
            },
            {
                question: "Which class is the superclass of all classes in Java?",
                choices: ["Object", "String", "System", "Throwable"],
                correct: "Object",
            },
            {
                question: "What does `clone()` do?",
                choices: ["Creates a copy of an object", "Deletes an object", "Compares objects", "Creates a class"],
                correct: "Creates a copy of an object",
            },
            {
                question: "Which keyword is used to create a thread-safe block?",
                choices: ["synchronized", "volatile", "transient", "static"],
                correct: "synchronized",
            },
            {
                question: "What does `Serializable` mean?",
                choices: ["The object can be converted to a byte stream", "The object is immutable", "The object is abstract", "The object is static"],
                correct: "The object can be converted to a byte stream",
            },
            {
                question: "Which annotation marks a test method?",
                choices: ["@Test", "@Override", "@Deprecated", "@SuppressWarnings"],
                correct: "@Test",
            },
            {
                question: "What is the purpose of `Comparator`?",
                choices: ["Define custom ordering for objects", "Create loops", "Handle exceptions", "Format strings"],
                correct: "Define custom ordering for objects",
            },
            {
                question: "Which keyword is used to explicitly call the parent implementation of an overridden method?",
                choices: ["super", "this", "extends", "implements"],
                correct: "super",
            },
        ],
    },
};
