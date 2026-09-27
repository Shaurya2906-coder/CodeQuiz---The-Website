if (typeof quizData !== "undefined" && quizData.Java) {
    quizData.Java.practiceTopics = {
        "Easy": {
            "Introduction": [
                {
                    question: "What does JVM stand for?",
                    choices: ["Java Virtual Machine", "Java Variable Manager", "Joint Virtual Module", "Java Version Monitor"],
                    correct: "Java Virtual Machine",
                },
                {
                    question: "Which component is required to compile Java source code?",
                    choices: ["JDK", "JRE only", "JVM only", "Browser"],
                    correct: "JDK",
                },
                {
                    question: "What file extension do Java source files use?",
                    choices: [".java", ".class", ".jar", ".jav"],
                    correct: ".java",
                },
                {
                    question: "What is the entry point method signature in Java?",
                    choices: ["public static void main(String[] args)", "public void main()", "static void main()", "public static main(String args)"],
                    correct: "public static void main(String[] args)",
                },
                {
                    question: "Which keyword defines a class in Java?",
                    choices: ["class", "struct", "module", "object"],
                    correct: "class",
                },
                {
                    question: "What does the Java compiler produce from .java files?",
                    choices: ["Bytecode (.class files)", "Machine code directly", "Assembly only", "JSON"],
                    correct: "Bytecode (.class files)",
                },
                {
                    question: "Which statement about Java is true?",
                    choices: ["Java is platform-independent at source/bytecode level", "Java runs only on Windows", "Java is a markup language", "Java files execute without compilation"],
                    correct: "Java is platform-independent at source/bytecode level",
                },
                {
                    question: "What is JRE?",
                    choices: ["Java Runtime Environment", "Java Resource Editor", "Joint Runtime Engine", "Java Reference Extension"],
                    correct: "Java Runtime Environment",
                },
                {
                    question: "Which package is imported by default in every Java program?",
                    choices: ["java.lang", "java.util", "java.io", "java.net"],
                    correct: "java.lang",
                },
                {
                    question: "Who originally developed Java?",
                    choices: ["James Gosling at Sun Microsystems", "Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
                    correct: "James Gosling at Sun Microsystems",
                },
                {
                    question: "What is bytecode?",
                    choices: ["Platform-independent instructions for the JVM", "Native machine code", "Encrypted source", "HTML markup"],
                    correct: "Platform-independent instructions for the JVM",
                },
                {
                    question: "Which tool compiles Java source files?",
                    choices: ["javac", "java", "jar", "javadoc"],
                    correct: "javac",
                },
                {
                    question: "Which tool runs compiled Java applications?",
                    choices: ["java", "javac", "gcc", "python"],
                    correct: "java",
                },
                {
                    question: "Java is primarily what type of language?",
                    choices: ["Object-oriented", "Procedural only", "Functional only", "Markup"],
                    correct: "Object-oriented",
                },
                {
                    question: "What does WORA stand for in Java?",
                    choices: ["Write Once, Run Anywhere", "Write Only Runtime Access", "Web Oriented Runtime API", "Work Once, Restart Always"],
                    correct: "Write Once, Run Anywhere",
                },
                {
                    question: "Which is a valid Java class declaration?",
                    choices: ["public class MyApp { }", "class public MyApp { }", "public MyApp class { }", "define class MyApp { }"],
                    correct: "public class MyApp { }",
                },
                {
                    question: "Where must the main method be placed?",
                    choices: ["Inside a class", "Outside all classes", "In any package file only", "In interfaces only"],
                    correct: "Inside a class",
                },
                {
                    question: "What is a .jar file?",
                    choices: ["Archived collection of Java classes and resources", "Java source file", "JVM executable", "Log file"],
                    correct: "Archived collection of Java classes and resources",
                },
                {
                    question: "Which memory area stores objects created with new?",
                    choices: ["Heap", "Stack only", "Register file", "ROM"],
                    correct: "Heap",
                },
                {
                    question: "What happens if main is missing or has wrong signature?",
                    choices: ["Program cannot be run as application", "JVM auto-creates main", "Compiler adds main", "Only warnings appear"],
                    correct: "Program cannot be run as application",
                }
            ],
            "Variables": [
                {
                    question: "Which is a valid declaration of an int variable?",
                    choices: ["int count = 10;", "integer count = 10;", "int count := 10;", "var count = int 10;"],
                    correct: "int count = 10;",
                },
                {
                    question: "What is the size of a Java int?",
                    choices: ["32 bits", "16 bits", "8 bits", "64 bits always"],
                    correct: "32 bits",
                },
                {
                    question: "Which type stores true or false?",
                    choices: ["boolean", "bool", "bit", "logical"],
                    correct: "boolean",
                },
                {
                    question: "What is the default value of an instance int field?",
                    choices: ["0", "null", "undefined", "1"],
                    correct: "0",
                },
                {
                    question: "Which keyword declares a constant variable?",
                    choices: ["final", "const", "static final only", "immutable"],
                    correct: "final",
                },
                {
                    question: "Which primitive type holds a single 16-bit Unicode character?",
                    choices: ["char", "String", "byte", "Character only as object"],
                    correct: "char",
                },
                {
                    question: "What is the default value of a boolean instance field?",
                    choices: ["false", "true", "null", "0"],
                    correct: "false",
                },
                {
                    question: "Which type is NOT a primitive in Java?",
                    choices: ["String", "int", "double", "char"],
                    correct: "String",
                },
                {
                    question: "What does this declare? double rate = 3.14;",
                    choices: ["A double variable initialized to 3.14", "A float constant", "An integer rate", "A String rate"],
                    correct: "A double variable initialized to 3.14",
                },
                {
                    question: "Which literal represents a long value?",
                    choices: ["100L", "100l only without L", "long 100", "100long"],
                    correct: "100L",
                },
                {
                    question: "What is the range type for whole numbers up to about 9 quintillion?",
                    choices: ["long", "int", "short", "byte"],
                    correct: "long",
                },
                {
                    question: "Which declaration creates a reference variable?",
                    choices: ["String name;", "string name;", "text name;", "String name = new int;"],
                    correct: "String name;",
                },
                {
                    question: "Local variables must be what before use?",
                    choices: ["Initialized before read", "Declared static", "Declared final always", "Declared public"],
                    correct: "Initialized before read",
                },
                {
                    question: "Which is a valid float literal in Java?",
                    choices: ["3.14f", "3.14F only invalid", "float 3.14", "3.14float"],
                    correct: "3.14f",
                },
                {
                    question: "What keyword refers to the current object instance?",
                    choices: ["this", "self", "super", "that"],
                    correct: "this",
                },
                {
                    question: "Which primitive holds decimal numbers with double precision?",
                    choices: ["double", "float only always", "decimal", "real"],
                    correct: "double",
                },
                {
                    question: "What is the default value of an object reference field?",
                    choices: ["null", "0", "false", "empty string"],
                    correct: "null",
                },
                {
                    question: "Which type uses 8 bits?",
                    choices: ["byte", "char", "int", "long"],
                    correct: "byte",
                },
                {
                    question: "What does var x = 5; do in Java 10+?",
                    choices: ["Infers x as int", "Creates a dynamic type", "Creates Object only", "Is invalid syntax"],
                    correct: "Infers x as int",
                },
                {
                    question: "Which naming convention is standard for Java variables?",
                    choices: ["camelCase", "snake_case only", "PascalCase for locals", "ALL_CAPS for all variables"],
                    correct: "camelCase",
                }
            ],
            "Operators": [
                {
                    question: "What is the result of 10 % 3 in Java?",
                    choices: ["1", "3", "0", "3.33"],
                    correct: "1",
                },
                {
                    question: "Which operator assigns and adds?",
                    choices: ["+=", "=+", "++=", "=="],
                    correct: "+=",
                },
                {
                    question: "What does 5 == 5 evaluate to?",
                    choices: ["true", "false", "5", "error"],
                    correct: "true",
                },
                {
                    question: "Which operator is logical AND?",
                    choices: ["&&", "&", "AND", "||"],
                    correct: "&&",
                },
                {
                    question: "What does !true evaluate to?",
                    choices: ["false", "true", "0", "null"],
                    correct: "false",
                },
                {
                    question: "Which operator compares reference identity?",
                    choices: ["== for references compares references", "equals always uses ==", "= compares values", "=== exists in Java"],
                    correct: "== for references compares references",
                },
                {
                    question: "What is the result of 10 / 3 with int operands?",
                    choices: ["3", "3.333", "3.0", "4"],
                    correct: "3",
                },
                {
                    question: "Which operator increases a variable by 1 prefix style?",
                    choices: ["++i", "i+", "i++ only returns old always wrong", "+1i"],
                    correct: "++i",
                },
                {
                    question: "What does the ternary operator look like?",
                    choices: ["condition ? a : b", "if ? a : b", "condition : a ? b", "? condition : a b"],
                    correct: "condition ? a : b",
                },
                {
                    question: "Which has higher precedence: * or +?",
                    choices: ["*", "+", "Same", "Depends on compiler"],
                    correct: "*",
                },
                {
                    question: "What does 10 / 3.0 evaluate to?",
                    choices: ["3.333... as double", "3 as int", "3 as long", "1"],
                    correct: "3.333... as double",
                },
                {
                    question: "Which operator is logical OR?",
                    choices: ["||", "| always short-circuit", "OR", "&&"],
                    correct: "||",
                },
                {
                    question: "What does i++ return when used in expression (post-increment)?",
                    choices: ["Original value before increment", "New value after increment", "Always 0", "Always 1"],
                    correct: "Original value before increment",
                },
                {
                    question: "Which operator checks inequality?",
                    choices: ["!=", "<>", "!==", "not="],
                    correct: "!=",
                },
                {
                    question: "What is associativity of assignment operator =?",
                    choices: ["Right to left", "Left to right", "No associativity", "Random"],
                    correct: "Right to left",
                },
                {
                    question: "What does (5 > 3) && (2 < 1) evaluate to?",
                    choices: ["false", "true", "1", "error"],
                    correct: "false",
                },
                {
                    question: "Which converts int to String simply?",
                    choices: ["String.valueOf(5)", "5.toString() on int", "str(5)", "convert(5)"],
                    correct: "String.valueOf(5)",
                },
                {
                    question: "What does 7 / 0 with integers cause?",
                    choices: ["ArithmeticException at runtime", "Returns infinity", "Returns 0", "Compile error"],
                    correct: "ArithmeticException at runtime",
                },
                {
                    question: "Which operator concatenates Strings?",
                    choices: ["+", "&", "||", "."],
                    correct: "+",
                },
                {
                    question: "What is result of Math.max(4, 9)?",
                    choices: ["9", "4", "13", "true"],
                    correct: "9",
                }
            ],
            "Conditional Loops": [
                {
                    question: "Which statement executes code only if condition is true?",
                    choices: ["if", "for", "switch only", "while always"],
                    correct: "if",
                },
                {
                    question: "Which loop checks condition before body?",
                    choices: ["while", "do-while checks after", "for each only", "goto"],
                    correct: "while",
                },
                {
                    question: "Which loop is best when iterations count is known?",
                    choices: ["for", "while only", "if", "switch"],
                    correct: "for",
                },
                {
                    question: "What keyword provides alternative branch in if?",
                    choices: ["else", "elseif one word", "elif", "otherwise"],
                    correct: "else",
                },
                {
                    question: "Which loop always runs body at least once?",
                    choices: ["do-while", "while", "for", "if"],
                    correct: "do-while",
                },
                {
                    question: "What does break do inside a loop?",
                    choices: ["Exits the loop", "Skips one iteration", "Restarts program", "Pauses thread"],
                    correct: "Exits the loop",
                },
                {
                    question: "What does continue do in a loop?",
                    choices: ["Skips to next iteration", "Exits loop", "Ends program", "Throws exception"],
                    correct: "Skips to next iteration",
                },
                {
                    question: "Which selects among many constant values?",
                    choices: ["switch", "if only always", "for", "while"],
                    correct: "switch",
                },
                {
                    question: "In switch, what keyword avoids fall-through after case?",
                    choices: ["break", "stop", "exit", "return only always"],
                    correct: "break",
                },
                {
                    question: "Which is valid enhanced for loop syntax?",
                    choices: ["for (String s : list)", "for each s in list", "foreach (s : list)", "for s from list"],
                    correct: "for (String s : list)",
                },
                {
                    question: "What is nested loop?",
                    choices: ["Loop inside another loop", "Loop with if only", "Recursive method only", "Switch inside if only"],
                    correct: "Loop inside another loop",
                },
                {
                    question: "Which condition makes while loop run zero times?",
                    choices: ["Initial condition false", "Initial condition true", "Using break first", "Using continue first"],
                    correct: "Initial condition false",
                },
                {
                    question: "What type can switch use in modern Java (pattern matching aside)?",
                    choices: ["int, String, enum, etc.", "double only", "boolean", "any object without rules"],
                    correct: "int, String, enum, etc.",
                },
                {
                    question: "Which if form handles multiple exclusive conditions?",
                    choices: ["else if chain", "nested main only", "switch only for numbers", "goto chain"],
                    correct: "else if chain",
                },
                {
                    question: "What happens without break in switch cases?",
                    choices: ["Fall-through to next case", "Compile error always", "Runtime stop", "Case ignored"],
                    correct: "Fall-through to next case",
                },
                {
                    question: "Which loop header has init, condition, update?",
                    choices: ["for", "while", "do-while", "foreach"],
                    correct: "for",
                },
                {
                    question: "Can if condition use boolean expressions?",
                    choices: ["Yes", "No, only int", "No, only String", "Only in switch"],
                    correct: "Yes",
                },
                {
                    question: "Which is infinite loop example?",
                    choices: ["while (true) { }", "for (int i=0; i<10; i++)", "if (true) once", "switch (1) once"],
                    correct: "while (true) { }",
                },
                {
                    question: "What does default label do in switch?",
                    choices: ["Handles no matching case", "Is required always", "Stops program", "Declares variable"],
                    correct: "Handles no matching case",
                },
                {
                    question: "Which compares strings lexicographically in condition?",
                    choices: ["str1.compareTo(str2)", "str1 > str2 directly always", "str1 - str2", "strcmp only in C"],
                    correct: "str1.compareTo(str2)",
                }
            ],
            "Array in Java": [
                {
                    question: "How do you declare an int array?",
                    choices: ["int[] nums;", "array int nums;", "int nums[] only invalid", "int array nums;"],
                    correct: "int[] nums;",
                },
                {
                    question: "How do you create array of length 5?",
                    choices: ["new int[5]", "int[5]", "make int(5)", "array(5)"],
                    correct: "new int[5]",
                },
                {
                    question: "What is default value of int array element?",
                    choices: ["0", "null", "undefined", "1"],
                    correct: "0",
                },
                {
                    question: "How do you get array length?",
                    choices: ["arr.length", "arr.length()", "arr.size()", "len(arr)"],
                    correct: "arr.length",
                },
                {
                    question: "Which initializes array with values?",
                    choices: ["int[] a = {1, 2, 3};", "int[] a = (1,2,3);", "int a[] = [1,2,3];", "array a = 1,2,3;"],
                    correct: "int[] a = {1, 2, 3};",
                },
                {
                    question: "What type is a Java array?",
                    choices: ["Object", "Primitive always", "Struct", "Pointer"],
                    correct: "Object",
                },
                {
                    question: "Can array length change after creation?",
                    choices: ["No", "Yes with resize", "Yes with push", "Only for String arrays"],
                    correct: "No",
                },
                {
                    question: "What is arr[0] for int[] arr = {10,20};?",
                    choices: ["10", "20", "0", "null"],
                    correct: "10",
                },
                {
                    question: "Which creates 2D array 3 by 4?",
                    choices: ["new int[3][4]", "int[3,4]", "new int(3,4)", "matrix 3x4"],
                    correct: "new int[3][4]",
                },
                {
                    question: "What happens accessing arr[10] when length is 5?",
                    choices: ["ArrayIndexOutOfBoundsException", "Returns 0", "Returns null", "Compile error"],
                    correct: "ArrayIndexOutOfBoundsException",
                },
                {
                    question: "Which copies array contents?",
                    choices: ["System.arraycopy or Arrays.copyOf", "arr.clone() invalid", "copy arr", "arr.copy()"],
                    correct: "System.arraycopy or Arrays.copyOf",
                },
                {
                    question: "Can arrays hold primitive types?",
                    choices: ["Yes", "No, objects only", "Only int", "Only String"],
                    correct: "Yes",
                },
                {
                    question: "What is jagged array?",
                    choices: ["Array of arrays with varying row lengths", "Circular array", "Sorted array", "Fixed tuple"],
                    correct: "Array of arrays with varying row lengths",
                },
                {
                    question: "Which class has sort method for arrays?",
                    choices: ["java.util.Arrays", "java.lang.Array", "java.util.Sort", "java.io.Arrays"],
                    correct: "java.util.Arrays",
                },
                {
                    question: "What is length of int[] x = new int[0]?",
                    choices: ["0", "1", "null", "undefined"],
                    correct: "0",
                },
                {
                    question: "Can you assign array to Object variable?",
                    choices: ["Yes", "No", "Only String arrays", "Only char arrays"],
                    correct: "Yes",
                },
                {
                    question: "Which iterates array indices safely?",
                    choices: ["for (int i = 0; i < arr.length; i++)", "for i in arr Java syntax", "while arr.next", "foreach index only without colon form wrong"],
                    correct: "for (int i = 0; i < arr.length; i++)",
                },
                {
                    question: "What stores reference to array?",
                    choices: ["Array variable", "Primitive int only", "Stack frame only", "Register"],
                    correct: "Array variable",
                },
                {
                    question: "Are arrays passed by reference value in Java?",
                    choices: ["Array reference is passed by value", "Array is passed by reference C-style", "Array is copied fully always", "Cannot pass arrays"],
                    correct: "Array reference is passed by value",
                },
                {
                    question: "Which converts array to List (fixed-size)?",
                    choices: ["Arrays.asList(arr)", "List.from(arr) always mutable", "new List(arr)", "arr.toList()"],
                    correct: "Arrays.asList(arr)",
                }
            ],
            "Bitwise Operators": [
                {
                    question: "What does 5 & 3 equal in Java?",
                    choices: ["1", "7", "6", "0"],
                    correct: "1",
                },
                {
                    question: "What does 5 | 3 equal?",
                    choices: ["7", "1", "6", "2"],
                    correct: "7",
                },
                {
                    question: "What does 5 ^ 3 equal?",
                    choices: ["6", "7", "1", "2"],
                    correct: "6",
                },
                {
                    question: "What does ~0 equal on 32-bit int (conceptually)?",
                    choices: ["All bits flipped (-1 for int)", "0", "1", "Positive max int"],
                    correct: "All bits flipped (-1 for int)",
                },
                {
                    question: "What does 1 << 3 equal?",
                    choices: ["8", "4", "3", "1"],
                    correct: "8",
                },
                {
                    question: "What does 8 >> 1 equal?",
                    choices: ["4", "8", "2", "16"],
                    correct: "4",
                },
                {
                    question: "What is >>> operator?",
                    choices: ["Unsigned right shift", "Signed left shift", "XOR assign", "Bitwise NOT assign"],
                    correct: "Unsigned right shift",
                },
                {
                    question: "Which operator is bitwise AND?",
                    choices: ["&", "&&", "AND", "&&&"],
                    correct: "&",
                },
                {
                    question: "Which operator is bitwise OR?",
                    choices: ["|", "||", "OR", "|||"],
                    correct: "|",
                },
                {
                    question: "Which operator is bitwise XOR?",
                    choices: ["^", "&", "|", "~"],
                    correct: "^",
                },
                {
                    question: "What does x &= y do?",
                    choices: ["Bitwise AND assign to x", "Logical AND assign", "Compare assign", "Shift assign"],
                    correct: "Bitwise AND assign to x",
                },
                {
                    question: "Bitwise operators work on what types primarily?",
                    choices: ["int, long, byte, short, char", "boolean only", "String", "double"],
                    correct: "int, long, byte, short, char",
                },
                {
                    question: "What is 12 & 10?",
                    choices: ["8", "14", "2", "10"],
                    correct: "8",
                },
                {
                    question: "What is result of (1 << 31) for int?",
                    choices: ["Minimum int value region / negative", "0", "1", "Overflow compile error"],
                    correct: "Minimum int value region / negative",
                },
                {
                    question: "Which shifts bits right filling with sign bit?",
                    choices: [">>", ">>>", "<<", ">>= only"],
                    correct: ">>",
                },
                {
                    question: "Which shifts bits right filling with zero?",
                    choices: [">>>", ">>", "<<", "~"],
                    correct: ">>>",
                },
                {
                    question: "What does 6 ^ 6 equal?",
                    choices: ["0", "6", "12", "1"],
                    correct: "0",
                },
                {
                    question: "Why use bitwise flags?",
                    choices: ["Compact multiple boolean flags in integer", "String parsing", "Floating math", "Exception handling"],
                    correct: "Compact multiple boolean flags in integer",
                },
                {
                    question: "What is 0b1010 in Java literal form?",
                    choices: ["Binary integer 10", "Octal", "Hex", "Invalid"],
                    correct: "Binary integer 10",
                },
                {
                    question: "What is 0xFF value?",
                    choices: ["255", "15", "256", "127"],
                    correct: "255",
                }
            ]
        },
        "Medium": {
            "OOPS- Introduction": [
                {
                    question: "What is a class in Java?",
                    choices: ["Blueprint for objects", "Running process", "Package only", "Primitive type"],
                    correct: "Blueprint for objects",
                },
                {
                    question: "What is an object?",
                    choices: ["Instance of a class", "Class definition", "Method only", "Interface file"],
                    correct: "Instance of a class",
                },
                {
                    question: "Which OOP pillar hides internal state?",
                    choices: ["Encapsulation", "Inheritance only", "Compilation", "Recursion"],
                    correct: "Encapsulation",
                },
                {
                    question: "Which keyword creates an object?",
                    choices: ["new", "make", "create", "alloc"],
                    correct: "new",
                },
                {
                    question: "What is polymorphism?",
                    choices: ["Same interface, many forms", "One class only", "No methods", "Static typing only"],
                    correct: "Same interface, many forms",
                },
                {
                    question: "What is abstraction?",
                    choices: ["Exposing essential features hiding details", "Copying code", "Multiple inheritance of classes", "Global variables"],
                    correct: "Exposing essential features hiding details",
                },
                {
                    question: "Which access modifier is most restrictive?",
                    choices: ["private", "public", "protected", "default is most restrictive wrong"],
                    correct: "private",
                },
                {
                    question: "What are class members typically?",
                    choices: ["Fields and methods", "Only main", "Only imports", "Bytecode"],
                    correct: "Fields and methods",
                },
                {
                    question: "What is a constructor?",
                    choices: ["Special method initializing new objects", "Static block only", "Destructor", "Package declaration"],
                    correct: "Special method initializing new objects",
                },
                {
                    question: "Can a class have multiple constructors?",
                    choices: ["Yes, overloading", "No", "Only with inheritance", "Only one public"],
                    correct: "Yes, overloading",
                },
                {
                    question: "What does static mean for a field?",
                    choices: ["Belongs to class not instance", "Cannot be accessed", "Is constant always", "Is private always"],
                    correct: "Belongs to class not instance",
                },
                {
                    question: "What is method overloading?",
                    choices: ["Same name, different parameters", "Same name in subclass only", "Renaming method", "Deleting method"],
                    correct: "Same name, different parameters",
                },
                {
                    question: "Which defines behavior in OOP?",
                    choices: ["Methods", "Comments only", "Imports", "JAR manifest"],
                    correct: "Methods",
                },
                {
                    question: "Which defines state in OOP?",
                    choices: ["Instance fields", "main method", "package", "classpath"],
                    correct: "Instance fields",
                },
                {
                    question: "What is composition?",
                    choices: ["Has-a relationship using objects", "Is-a only", "Is-a primitive", "Global function"],
                    correct: "Has-a relationship using objects",
                },
                {
                    question: "Why use private fields with public getters?",
                    choices: ["Encapsulation and controlled access", "Faster execution only", "Required by JVM", "For bitwise ops"],
                    correct: "Encapsulation and controlled access",
                },
                {
                    question: "What is this keyword used for?",
                    choices: ["Refer to current object", "Refer to parent class", "Import class", "Create thread"],
                    correct: "Refer to current object",
                },
                {
                    question: "Can interfaces support multiple inheritance of type?",
                    choices: ["Yes", "No", "Only with classes", "Only in C++"],
                    correct: "Yes",
                },
                {
                    question: "What is an instance method?",
                    choices: ["Called on object, can use instance state", "Must be static", "Cannot access fields", "Is constructor"],
                    correct: "Called on object, can use instance state",
                },
                {
                    question: "Which is valid object creation?",
                    choices: ["MyClass obj = new MyClass();", "MyClass obj = MyClass(); without new", "new obj MyClass;", "create MyClass obj;"],
                    correct: "MyClass obj = new MyClass();",
                }
            ],
            "Inheritance - 1": [
                {
                    question: "Which keyword inherits a class?",
                    choices: ["extends", "implements for class wrong primary", "inherits", "super only"],
                    correct: "extends",
                },
                {
                    question: "What is subclass?",
                    choices: ["Class that extends another", "Parent class", "Interface only", "Package"],
                    correct: "Class that extends another",
                },
                {
                    question: "What is superclass?",
                    choices: ["Class being extended", "Child class", "Method", "Constructor only"],
                    correct: "Class being extended",
                },
                {
                    question: "Which class is root of Java class hierarchy?",
                    choices: ["Object", "Class", "Main", "System"],
                    correct: "Object",
                },
                {
                    question: "What does super keyword refer to?",
                    choices: ["Parent class members", "Child class only", "Static methods only", "Interface default"],
                    correct: "Parent class members",
                },
                {
                    question: "Can subclass override instance method?",
                    choices: ["Yes", "No", "Only static", "Only private"],
                    correct: "Yes",
                },
                {
                    question: "What is method overriding?",
                    choices: ["Subclass provides specific implementation", "Same class overload", "Hide field only", "Import method"],
                    correct: "Subclass provides specific implementation",
                },
                {
                    question: "Which annotation helps catch override errors?",
                    choices: ["@Override", "@Inherit", "@Super", "@Extend"],
                    correct: "@Override",
                },
                {
                    question: "Can private methods be overridden?",
                    choices: ["No, not inherited", "Yes always", "Only in same package", "Only if static"],
                    correct: "No, not inherited",
                },
                {
                    question: "What is IS-A relationship?",
                    choices: ["Inheritance relationship", "Composition", "Aggregation only", "Dependency injection only"],
                    correct: "Inheritance relationship",
                },
                {
                    question: "If parent has public method m(), subclass visibility can be?",
                    choices: ["Same or more public, not less", "More private", "Package only always", "Hidden always"],
                    correct: "Same or more public, not less",
                },
                {
                    question: "What calls parent constructor?",
                    choices: ["super()", "this()", "parent()", "base()"],
                    correct: "super()",
                },
                {
                    question: "Where must super() call appear in constructor?",
                    choices: ["First statement if used explicitly", "Anywhere", "Last statement", "Outside constructor"],
                    correct: "First statement if used explicitly",
                },
                {
                    question: "Can Java class extend multiple classes?",
                    choices: ["No, single inheritance for classes", "Yes", "Only interfaces count as classes", "Only with final"],
                    correct: "No, single inheritance for classes",
                },
                {
                    question: "What happens when overriding equals in subclass?",
                    choices: ["Should maintain contract; often override hashCode too", "Nothing special", "Compile error", "Auto deep copy"],
                    correct: "Should maintain contract; often override hashCode too",
                },
                {
                    question: "Which modifier prevents overriding?",
                    choices: ["final on method", "static on method always prevents override wrong static can hide", "public", "protected"],
                    correct: "final on method",
                },
                {
                    question: "Runtime method selection based on object type is?",
                    choices: ["Dynamic dispatch / polymorphism", "Static binding always", "Compile-time only for all", "Macro expansion"],
                    correct: "Dynamic dispatch / polymorphism",
                },
                {
                    question: "Parent p = new Child(); which method runs if overridden?",
                    choices: ["Child version for instance methods", "Parent always", "Random", "None"],
                    correct: "Child version for instance methods",
                },
                {
                    question: "Can subclass access protected members of parent?",
                    choices: ["Yes within rules (subclass/subpackage)", "Never", "Only public", "Only static"],
                    correct: "Yes within rules (subclass/subpackage)",
                },
                {
                    question: "What is upcasting?",
                    choices: ["Assign subclass reference to superclass type", "Cast to subclass only", "Delete parent", "Multiple extends"],
                    correct: "Assign subclass reference to superclass type",
                }
            ],
            "Inheritance - 2": [
                {
                    question: "Which keyword implements an interface?",
                    choices: ["implements", "extends for interface wrong", "uses", "with"],
                    correct: "implements",
                },
                {
                    question: "Can a class implement multiple interfaces?",
                    choices: ["Yes", "No", "Only one method allowed", "Only with abstract class"],
                    correct: "Yes",
                },
                {
                    question: "What is abstract class?",
                    choices: ["Class that may have abstract methods, cannot be instantiated directly", "Interface with no methods", "Final class", "Enum"],
                    correct: "Class that may have abstract methods, cannot be instantiated directly",
                },
                {
                    question: "Which keyword declares method without body in abstract class?",
                    choices: ["abstract", "virtual", "native only", "empty"],
                    correct: "abstract",
                },
                {
                    question: "Can abstract class have concrete methods?",
                    choices: ["Yes", "No", "Only static", "Only private"],
                    correct: "Yes",
                },
                {
                    question: "What is interface primarily?",
                    choices: ["Contract of abstract methods/constants", "Fully implemented class", "Primitive wrapper", "Exception type"],
                    correct: "Contract of abstract methods/constants",
                },
                {
                    question: "Since Java 8, interfaces can have?",
                    choices: ["default and static methods", "Only fields", "Constructors", "Multiple inheritance of classes"],
                    correct: "default and static methods",
                },
                {
                    question: "Which prevents class inheritance?",
                    choices: ["final class", "abstract class", "public class", "static class keyword alone"],
                    correct: "final class",
                },
                {
                    question: "What is covariant return type in overriding?",
                    choices: ["Subclass can return narrower type", "Must return void", "Must return Object always", "Not allowed"],
                    correct: "Subclass can return narrower type",
                },
                {
                    question: "Diamond problem with interfaces is resolved by?",
                    choices: ["Default method rules and explicit override", "Multiple class extends", "Deleting interfaces", "Using goto"],
                    correct: "Default method rules and explicit override",
                },
                {
                    question: "Can interface extend another interface?",
                    choices: ["Yes", "No", "Only one method", "Only with class"],
                    correct: "Yes",
                },
                {
                    question: "What is sealed class (Java 17+)?",
                    choices: ["Restricts which classes may extend it", "Encrypted class", "Final method only", "Anonymous class"],
                    correct: "Restricts which classes may extend it",
                },
                {
                    question: "Which is true about Object class?",
                    choices: ["All classes inherit from Object", "Only public classes", "Only in java.lang package users", "Is interface"],
                    correct: "All classes inherit from Object",
                },
                {
                    question: "What does instanceof check?",
                    choices: ["Whether object is instance of type", "Class name string", "Method existence only", "Package name"],
                    correct: "Whether object is instance of type",
                },
                {
                    question: "Can you instantiate abstract class?",
                    choices: ["No", "Yes with new", "Yes if public", "Only via reflection always"],
                    correct: "No",
                },
                {
                    question: "What is default interface method?",
                    choices: ["Method with body in interface", "Private method only", "Constructor", "Static field"],
                    correct: "Method with body in interface",
                },
                {
                    question: "Which inheritance is composition alternative?",
                    choices: ["Has-a instead of is-a", "Is-a always better", "Multiple class extends", "Global variables"],
                    correct: "Has-a instead of is-a",
                },
                {
                    question: "What is downcasting?",
                    choices: ["Cast superclass reference to subclass type", "Cast to Object only", "Remove inheritance", "Upcast"],
                    correct: "Cast superclass reference to subclass type",
                },
                {
                    question: "Illegal downcast at runtime causes?",
                    choices: ["ClassCastException", "Compile error always", "NullPointer always", "No effect"],
                    correct: "ClassCastException",
                },
                {
                    question: "Why prefer interfaces for capability?",
                    choices: ["Flexibility and multiple inheritance of type", "Faster bytecode", "Required by JVM", "Allows multiple class extends"],
                    correct: "Flexibility and multiple inheritance of type",
                }
            ],
            "Strings": [
                {
                    question: "Are Java Strings immutable?",
                    choices: ["Yes", "No", "Only interned ones", "Only literals"],
                    correct: "Yes",
                },
                {
                    question: "Which creates String literal?",
                    choices: ["String s = \"hello\";", "String s = new char[] only", "str hello", "String.make(\"hello\")"],
                    correct: "String s = \"hello\";",
                },
                {
                    question: "Which compares String contents correctly?",
                    choices: ["s1.equals(s2)", "s1 == s2 always for content", "s1 = s2", "compare s1 s2 operator"],
                    correct: "s1.equals(s2)",
                },
                {
                    question: "What does length() return for \"Java\"?",
                    choices: ["4", "3", "5", "2"],
                    correct: "4",
                },
                {
                    question: "Which method changes case to upper?",
                    choices: ["toUpperCase()", "upper()", "toupper()", "caseUp()"],
                    correct: "toUpperCase()",
                },
                {
                    question: "Which class is mutable for building strings efficiently?",
                    choices: ["StringBuilder", "String", "StringBuffer only immutable wrong", "CharSequence object only"],
                    correct: "StringBuilder",
                },
                {
                    question: "What does \"abc\".substring(1) return?",
                    choices: ["\"bc\"", "\"abc\"", "\"a\"", "\"\""],
                    correct: "\"bc\"",
                },
                {
                    question: "What does indexOf(\"a\") on \"banana\" return?",
                    choices: ["1", "0", "3", "-1 always"],
                    correct: "1",
                },
                {
                    question: "Which concatenates strings?",
                    choices: ["+ operator or concat()", "& operator", "add()", "join only without +"],
                    correct: "+ operator or concat()",
                },
                {
                    question: "What is string pool?",
                    choices: ["Interned literal storage for reuse", "Thread pool", "Object heap only", "Stack memory"],
                    correct: "Interned literal storage for reuse",
                },
                {
                    question: "What does trim() do?",
                    choices: ["Removes leading/trailing whitespace", "Lowercases", "Reverses", "Splits by comma only"],
                    correct: "Removes leading/trailing whitespace",
                },
                {
                    question: "Which splits string by regex?",
                    choices: ["split()", "divide()", "break()", "tokenize only C"],
                    correct: "split()",
                },
                {
                    question: "What does isEmpty() check?",
                    choices: ["Length is 0", "Is null", "Is blank with spaces", "Is interned"],
                    correct: "Length is 0",
                },
                {
                    question: "Which converts String to int?",
                    choices: ["Integer.parseInt(s)", "int(s)", "s.toInt()", "parse(s)"],
                    correct: "Integer.parseInt(s)",
                },
                {
                    question: "What does replace(\"a\",\"b\") do?",
                    choices: ["Replaces all matching char sequences", "Replaces first only always", "Regex only", "Mutates original String"],
                    correct: "Replaces all matching char sequences",
                },
                {
                    question: "Which is synchronized mutable string builder?",
                    choices: ["StringBuffer", "StringBuilder", "String", "StringJoiner only static"],
                    correct: "StringBuffer",
                },
                {
                    question: "What does \"5\" + 3 evaluate to?",
                    choices: ["\"53\" string concatenation", "8", "Error", "15"],
                    correct: "\"53\" string concatenation",
                },
                {
                    question: "Which checks prefix?",
                    choices: ["startsWith()", "begins()", "prefix()", "head()"],
                    correct: "startsWith()",
                },
                {
                    question: "What does charAt(0) return type?",
                    choices: ["char", "String", "byte", "Character object always"],
                    correct: "char",
                },
                {
                    question: "Which compares lexicographically ignoring case?",
                    choices: ["equalsIgnoreCase()", "==", "compareTo only case sensitive always", "same()"],
                    correct: "equalsIgnoreCase()",
                }
            ],
            "Linked List": [
                {
                    question: "What does each node in singly linked list contain?",
                    choices: ["Data and reference to next node", "Data only", "Prev and next always", "Index only"],
                    correct: "Data and reference to next node",
                },
                {
                    question: "What is head of linked list?",
                    choices: ["First node reference", "Last node", "Middle node", "Sentinel only"],
                    correct: "First node reference",
                },
                {
                    question: "What is tail in singly linked list often?",
                    choices: ["Last node whose next is null", "First node", "Root of tree", "Hash bucket"],
                    correct: "Last node whose next is null",
                },
                {
                    question: "Time complexity to insert at head of singly linked list?",
                    choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                    correct: "O(1)",
                },
                {
                    question: "Time complexity to search unsorted linked list?",
                    choices: ["O(n)", "O(1)", "O(log n)", "O(n^2) always"],
                    correct: "O(n)",
                },
                {
                    question: "Which Java collection is doubly linked list implementation?",
                    choices: ["LinkedList", "ArrayList", "Vector only array", "HashSet"],
                    correct: "LinkedList",
                },
                {
                    question: "ArrayList vs LinkedList random access?",
                    choices: ["ArrayList O(1), LinkedList O(n)", "Both O(1)", "LinkedList O(1)", "Both O(n)"],
                    correct: "ArrayList O(1), LinkedList O(n)",
                },
                {
                    question: "How is node represented in custom list?",
                    choices: ["Class with data and next reference", "Primitive array only", "Stack frame", "Interface only"],
                    correct: "Class with data and next reference",
                },
                {
                    question: "Deleting first node requires updating?",
                    choices: ["Head reference", "Tail only always", "Nothing", "JVM heap flag"],
                    correct: "Head reference",
                },
                {
                    question: "Inserting at end without tail pointer costs?",
                    choices: ["O(n) to traverse", "O(1) always", "O(log n)", "O(1) with array"],
                    correct: "O(n) to traverse",
                },
                {
                    question: "Linked list advantage over array for inserts?",
                    choices: ["No shifting elements for middle insert with node refs", "Better cache locality", "Fixed memory", "Index access faster"],
                    correct: "No shifting elements for middle insert with node refs",
                },
                {
                    question: "Linked list disadvantage?",
                    choices: ["Extra memory for pointers; no fast random access", "Cannot grow", "Immutable", "No iteration"],
                    correct: "Extra memory for pointers; no fast random access",
                },
                {
                    question: "Which traverses singly linked list?",
                    choices: ["Follow next from head", "Follow prev", "Binary search", "Hash lookup"],
                    correct: "Follow next from head",
                },
                {
                    question: "Null next in last node indicates?",
                    choices: ["End of list", "Error always", "Circular list", "Empty list head null too though"],
                    correct: "End of list",
                },
                {
                    question: "Empty singly linked list head is?",
                    choices: ["null", "new Node()", "tail", "0"],
                    correct: "null",
                },
                {
                    question: "Which operation detects cycle using two pointers?",
                    choices: ["Floyd cycle detection", "Bubble sort", "Quick sort", "DFS on array"],
                    correct: "Floyd cycle detection",
                },
                {
                    question: "Reversing singly linked list iteratively needs?",
                    choices: ["Three pointers prev, curr, next", "One pointer", "Stack only mandatory", "Sorting"],
                    correct: "Three pointers prev, curr, next",
                },
                {
                    question: "Java LinkedList implements which interfaces?",
                    choices: ["List, Deque", "Set only", "Map", "SortedSet only"],
                    correct: "List, Deque",
                },
                {
                    question: "Adding element at index in LinkedList is?",
                    choices: ["O(n) to find position", "O(1) always", "O(log n)", "O(1) at end only with tail ref generic answer O(n) find"],
                    correct: "O(n) to find position",
                },
                {
                    question: "Singly linked list node has how many links?",
                    choices: ["One (next)", "Two", "Zero", "Three"],
                    correct: "One (next)",
                }
            ],
            "Stack": [
                {
                    question: "Stack follows which principle?",
                    choices: ["LIFO (Last In First Out)", "FIFO", "Random access", "Priority only"],
                    correct: "LIFO (Last In First Out)",
                },
                {
                    question: "Which operations are core stack operations?",
                    choices: ["push and pop", "enqueue and dequeue", "insert and sort", "get and set"],
                    correct: "push and pop",
                },
                {
                    question: "What does push do?",
                    choices: ["Adds element on top", "Removes top", "Peeks top", "Clears stack"],
                    correct: "Adds element on top",
                },
                {
                    question: "What does pop do?",
                    choices: ["Removes and returns top element", "Adds element", "Views bottom", "Sorts stack"],
                    correct: "Removes and returns top element",
                },
                {
                    question: "What does peek return?",
                    choices: ["Top element without removing", "Bottom element removed", "Stack size only", "Random element"],
                    correct: "Top element without removing",
                },
                {
                    question: "Which Java class implements stack (legacy)?",
                    choices: ["java.util.Stack extends Vector", "ArrayList only", "Queue", "HashMap"],
                    correct: "java.util.Stack extends Vector",
                },
                {
                    question: "Preferred stack in modern Java code?",
                    choices: ["Deque implementations like ArrayDeque", "Stack class always", "Vector", "Hashtable"],
                    correct: "Deque implementations like ArrayDeque",
                },
                {
                    question: "ArrayDeque push equivalent method?",
                    choices: ["addFirst or push on Deque", "pop", "enqueue", "offerLast only wrong for stack top"],
                    correct: "addFirst or push on Deque",
                },
                {
                    question: "Using stack for expression evaluation helps with?",
                    choices: ["Operator precedence and parentheses", "Sorting arrays", "Hashing", "GUI events only"],
                    correct: "Operator precedence and parentheses",
                },
                {
                    question: "Stack overflow error often means?",
                    choices: ["Too deep recursion or infinite calls", "Empty stack pop", "Heap full only", "File not found"],
                    correct: "Too deep recursion or infinite calls",
                },
                {
                    question: "Can ArrayDeque be used as stack?",
                    choices: ["Yes", "No", "Only synchronized", "Only with Stack class"],
                    correct: "Yes",
                },
                {
                    question: "Time complexity of push/pop on ArrayDeque?",
                    choices: ["O(1) amortized", "O(n)", "O(log n)", "O(n^2)"],
                    correct: "O(1) amortized",
                },
                {
                    question: "Empty stack pop causes?",
                    choices: ["EmptyStackException or NoSuchElementException depending API", "Returns null always", "Returns 0", "Infinite loop"],
                    correct: "EmptyStackException or NoSuchElementException depending API",
                },
                {
                    question: "Call stack in JVM stores?",
                    choices: ["Method frames and local data", "Heap objects only", "String pool", "Class files"],
                    correct: "Method frames and local data",
                },
                {
                    question: "Stack useful for DFS?",
                    choices: ["Yes, iterative DFS", "No", "Only BFS", "Only sorting"],
                    correct: "Yes, iterative DFS",
                },
                {
                    question: "Which checks empty stack in Deque?",
                    choices: ["isEmpty()", "empty() C style", "size()==-1", "null check only"],
                    correct: "isEmpty()",
                },
                {
                    question: "Monotonic stack used for?",
                    choices: ["Next greater/smaller element problems", "Sorting strings", "Parsing JSON only", "Thread sync"],
                    correct: "Next greater/smaller element problems",
                },
                {
                    question: "Stack vs queue difference?",
                    choices: ["Stack LIFO, queue FIFO", "Same structure", "Queue LIFO", "Stack FIFO"],
                    correct: "Stack LIFO, queue FIFO",
                },
                {
                    question: "Balanced parentheses can be checked with?",
                    choices: ["Stack", "Queue only", "HashMap only", "Binary tree only"],
                    correct: "Stack",
                },
                {
                    question: "Java Stack inherits from Vector meaning?",
                    choices: ["Legacy synchronized resizable array", "Linked structure only", "Interface", "Primitive array fixed"],
                    correct: "Legacy synchronized resizable array",
                }
            ],
            "Queues": [
                {
                    question: "Queue follows which principle?",
                    choices: ["FIFO (First In First Out)", "LIFO", "Random", "LIFO and FIFO"],
                    correct: "FIFO (First In First Out)",
                },
                {
                    question: "Which method adds to typical Queue if full throws?",
                    choices: ["add", "offer only never throws wrong offer returns false", "push", "enqueue Java keyword"],
                    correct: "add",
                },
                {
                    question: "Which method removes head of Queue?",
                    choices: ["remove or poll", "pop stack op", "peek removes", "dequeue keyword only"],
                    correct: "remove or poll",
                },
                {
                    question: "Difference poll vs remove on empty queue?",
                    choices: ["poll returns null, remove throws", "Same behavior", "poll throws", "remove returns null"],
                    correct: "poll returns null, remove throws",
                },
                {
                    question: "Which interface represents queue in java.util?",
                    choices: ["Queue", "Stack", "List only", "Deque only"],
                    correct: "Queue",
                },
                {
                    question: "LinkedList can implement Queue because?",
                    choices: ["It implements Queue interface", "It is array", "It is Map", "It is Set"],
                    correct: "It implements Queue interface",
                },
                {
                    question: "PriorityQueue orders elements by?",
                    choices: ["Priority/natural or comparator order", "Insertion order always", "Random order", "Stack order"],
                    correct: "Priority/natural or comparator order",
                },
                {
                    question: "ArrayDeque can be used as queue using?",
                    choices: ["offerLast and pollFirst (or opposite ends consistently)", "push/pop only", "put/get Map", "add index 0 only wrong general"],
                    correct: "offerLast and pollFirst (or opposite ends consistently)",
                },
                {
                    question: "BFS algorithm commonly uses?",
                    choices: ["Queue", "Stack only", "PriorityQueue only always", "TreeSet"],
                    correct: "Queue",
                },
                {
                    question: "Circular queue benefit?",
                    choices: ["Efficient reuse of array slots", "Random access O(1) always wrong", "Sorted order", "LIFO behavior"],
                    correct: "Efficient reuse of array slots",
                },
                {
                    question: "BlockingQueue used for?",
                    choices: ["Producer-consumer thread coordination", "Sorting", "String interning", "Class loading"],
                    correct: "Producer-consumer thread coordination",
                },
                {
                    question: "peek on queue returns?",
                    choices: ["Head without removing", "Removes head", "Tail only", "Throws always"],
                    correct: "Head without removing",
                },
                {
                    question: "Deque allows operations at?",
                    choices: ["Both ends", "Front only", "Rear only", "Middle only"],
                    correct: "Both ends",
                },
                {
                    question: "Which is NOT typical Queue implementation?",
                    choices: ["HashMap", "LinkedList", "PriorityQueue", "ArrayBlockingQueue"],
                    correct: "HashMap",
                },
                {
                    question: "Time complexity offer/poll on LinkedList queue?",
                    choices: ["O(1)", "O(n)", "O(log n) always", "O(n^2)"],
                    correct: "O(1)",
                },
                {
                    question: "PriorityQueue offer complexity?",
                    choices: ["O(log n)", "O(1)", "O(n)", "O(1) amortized always"],
                    correct: "O(log n)",
                },
                {
                    question: "Queue in printer scheduling models?",
                    choices: ["FIFO service order", "LIFO", "Random", "Stack based only"],
                    correct: "FIFO service order",
                },
                {
                    question: "ConcurrentLinkedQueue is?",
                    choices: ["Thread-safe non-blocking queue", "Synchronized Vector", "Stack", "Map"],
                    correct: "Thread-safe non-blocking queue",
                },
                {
                    question: "Which method inserts at tail if capacity allows returning boolean?",
                    choices: ["offer", "add always boolean wrong add throws", "push", "put Map only"],
                    correct: "offer",
                },
                {
                    question: "Double-ended queue interface is?",
                    choices: ["Deque", "Queue only", "List", "Set"],
                    correct: "Deque",
                }
            ]
        },
        "Hard": {
            "Generic & Collection": [
                {
                    question: "What do generics provide?",
                    choices: ["Type safety at compile time", "Runtime type erasure only benefit wrong", "Faster CPU", "Memory leak fix"],
                    correct: "Type safety at compile time",
                },
                {
                    question: "Which declares generic type parameter on class?",
                    choices: ["class Box<T> { }", "class Box(T) { }", "generic class Box T", "template Box T"],
                    correct: "class Box<T> { }",
                },
                {
                    question: "Which collection allows duplicate elements with order?",
                    choices: ["ArrayList", "HashSet", "TreeSet unique sorted", "HashMap"],
                    correct: "ArrayList",
                },
                {
                    question: "Which stores key-value pairs?",
                    choices: ["HashMap", "ArrayList", "HashSet", "Stack"],
                    correct: "HashMap",
                },
                {
                    question: "Which collection has no duplicate elements?",
                    choices: ["Set implementations like HashSet", "List", "Queue always duplicates", "Deque always duplicates wrong"],
                    correct: "Set implementations like HashSet",
                },
                {
                    question: "What is type erasure?",
                    choices: ["Generic type info removed at compile time for bytecode", "Deletes objects", "Encrypts types", "Runtime reflection of T always"],
                    correct: "Generic type info removed at compile time for bytecode",
                },
                {
                    question: "Which is ordered unique sorted set?",
                    choices: ["TreeSet", "HashSet", "ArrayList", "LinkedList"],
                    correct: "TreeSet",
                },
                {
                    question: "Wildcard ? extends T means?",
                    choices: ["Upper bounded wildcard", "Lower bounded only", "Exact type only", "Raw type"],
                    correct: "Upper bounded wildcard",
                },
                {
                    question: "Which interface is root of collection hierarchy?",
                    choices: ["Collection", "Object", "Iterable only not root of collections in same sense", "List root wrong"],
                    correct: "Collection",
                },
                {
                    question: "ArrayList get(i) complexity?",
                    choices: ["O(1)", "O(n)", "O(log n)", "O(1) only for linked"],
                    correct: "O(1)",
                },
                {
                    question: "HashMap get average complexity?",
                    choices: ["O(1)", "O(n) always", "O(log n) always", "O(n^2)"],
                    correct: "O(1)",
                },
                {
                    question: "Which is not Collection?",
                    choices: ["Map", "List", "Set", "Queue"],
                    correct: "Map",
                },
                {
                    question: "Diamond operator example?",
                    choices: ["List<String> list = new ArrayList<>();", "List<String> list = new ArrayList<String>(); only invalid", "List<> list = new ArrayList<String>(); invalid left", "new <> ArrayList();"],
                    correct: "List<String> list = new ArrayList<>();",
                },
                {
                    question: "Iterable provides?",
                    choices: ["iterator() method", "get(key)", "push/pop", "sort"],
                    correct: "iterator() method",
                },
                {
                    question: "Which list is synchronized legacy?",
                    choices: ["Vector", "ArrayList", "LinkedList", "CopyOnWriteArrayList not legacy same as vector question"],
                    correct: "Vector",
                },
                {
                    question: "Comparable interface used for?",
                    choices: ["Natural ordering compareTo", "Hash codes", "Equality only", "Serialization"],
                    correct: "Natural ordering compareTo",
                },
                {
                    question: "Comparator used for?",
                    choices: ["Custom sort order", "Natural order only", "Hashing", "Thread priority"],
                    correct: "Custom sort order",
                },
                {
                    question: "Raw type List without generics?",
                    choices: ["Allowed but loses type safety", "Compile error always", "Runtime generic info kept", "Faster and recommended"],
                    correct: "Allowed but loses type safety",
                },
                {
                    question: "Collections.sort works on?",
                    choices: ["List", "Set directly always", "Map keys directly", "Stack only"],
                    correct: "List",
                },
                {
                    question: "ConcurrentHashMap advantage?",
                    choices: ["Better concurrent access than synchronized HashMap", "Single threaded only", "Sorted keys always", "No null keys ever in any map wrong CHM allows null? actually CHM does not allow null key/value"],
                    correct: "Better concurrent access than synchronized HashMap",
                }
            ],
            "Exception Handling": [
                {
                    question: "Which keyword catches exceptions?",
                    choices: ["try-catch", "throw only", "catch only without try invalid", "exception"],
                    correct: "try-catch",
                },
                {
                    question: "Which keyword throws exception explicitly?",
                    choices: ["throw", "throws in signature different", "catch", "raise"],
                    correct: "throw",
                },
                {
                    question: "Which declares checked exceptions in method signature?",
                    choices: ["throws", "throw", "catch", "finally"],
                    correct: "throws",
                },
                {
                    question: "Which block always executes (usually)?",
                    choices: ["finally", "catch only", "try only", "throw block"],
                    correct: "finally",
                },
                {
                    question: "Parent class of all exceptions?",
                    choices: ["Throwable", "Exception only for all wrong", "Error parent of exceptions wrong", "Runtime"],
                    correct: "Throwable",
                },
                {
                    question: "Unchecked exceptions extend?",
                    choices: ["RuntimeException", "IOException", "Throwable directly always", "Error only"],
                    correct: "RuntimeException",
                },
                {
                    question: "Which is checked exception example?",
                    choices: ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
                    correct: "IOException",
                },
                {
                    question: "What does catch (Exception e) do?",
                    choices: ["Handles Exception and subclasses if listed alone", "Handles only Error", "Handles Throwable always including Error if not careful", "Compiles only with throw"],
                    correct: "Handles Exception and subclasses if listed alone",
                },
                {
                    question: "Multiple catch blocks order should be?",
                    choices: ["Most specific before general", "Any order", "General before specific", "Alphabetical"],
                    correct: "Most specific before general",
                },
                {
                    question: "try-with-resources requires?",
                    choices: ["AutoCloseable resources", "Manual close only", "Static methods", "Final classes"],
                    correct: "AutoCloseable resources",
                },
                {
                    question: "Custom exception typically extends?",
                    choices: ["Exception or RuntimeException", "Throwable directly always", "Error", "Object"],
                    correct: "Exception or RuntimeException",
                },
                {
                    question: "What is stack trace?",
                    choices: ["Call hierarchy at exception time", "Array stack", "Queue trace", "Heap dump only"],
                    correct: "Call hierarchy at exception time",
                },
                {
                    question: "finally without catch allowed?",
                    choices: ["Yes, with try", "No never", "Only with throw", "Only in interfaces"],
                    correct: "Yes, with try",
                },
                {
                    question: "Error types like OutOfMemoryError are?",
                    choices: ["Generally not caught for recovery", "Checked exceptions", "Always caught", "Same as IOException"],
                    correct: "Generally not caught for recovery",
                },
                {
                    question: "Which creates exception without message?",
                    choices: ["new IllegalArgumentException()", "throw IllegalArgumentException", "catch IllegalArgumentException", "throws IllegalArgumentException"],
                    correct: "new IllegalArgumentException()",
                },
                {
                    question: "Suppressing exception in catch and doing nothing is?",
                    choices: ["Poor practice; swallowing exceptions", "Best practice always", "Required", "Compile error"],
                    correct: "Poor practice; swallowing exceptions",
                },
                {
                    question: "Multi-catch syntax example?",
                    choices: ["catch (IOException | SQLException e)", "catch IOException, SQLException", "catch (IOException && SQLException)", "catch multiple without pipe"],
                    correct: "catch (IOException | SQLException e)",
                },
                {
                    question: "getMessage() returns?",
                    choices: ["Detail message string", "Stack trace", "Cause object always", "Error code int"],
                    correct: "Detail message string",
                },
                {
                    question: "initCause used for?",
                    choices: ["Set causal throwable in exception chaining", "Start thread", "Initialize array", "Throw checked only"],
                    correct: "Set causal throwable in exception chaining",
                },
                {
                    question: "JVM handles uncaught exception by?",
                    choices: ["Printing stack trace and terminating thread", "Ignoring", "Retry always", "Compiling again"],
                    correct: "Printing stack trace and terminating thread",
                }
            ],
            "Thread & Wrappers": [
                {
                    question: "Which method starts a thread?",
                    choices: ["start()", "run() directly same as start wrong", "begin()", "execute() only executor"],
                    correct: "start()",
                },
                {
                    question: "Implementing which interface allows thread execution?",
                    choices: ["Runnable", "Threadable", "Executor only", "Serializable for run"],
                    correct: "Runnable",
                },
                {
                    question: "Which is wrapper for int primitive?",
                    choices: ["Integer", "Int", "Number only abstract", "intObject"],
                    correct: "Integer",
                },
                {
                    question: "Autoboxing means?",
                    choices: ["Automatic conversion primitive to wrapper", "Manual cast only", "Array to list", "String to int only"],
                    correct: "Automatic conversion primitive to wrapper",
                },
                {
                    question: "Unboxing converts?",
                    choices: ["Wrapper to primitive", "Primitive to wrapper", "Object to array", "int to String"],
                    correct: "Wrapper to primitive",
                },
                {
                    question: "Which method pauses current thread?",
                    choices: ["Thread.sleep(millis)", "Thread.wait() without sync wrong context", "pause()", "stop() recommended"],
                    correct: "Thread.sleep(millis)",
                },
                {
                    question: "synchronized keyword provides?",
                    choices: ["Mutual exclusion for threads", "Faster sorting", "Exception handling", "Serialization"],
                    correct: "Mutual exclusion for threads",
                },
                {
                    question: "Which pool manages worker threads?",
                    choices: ["ExecutorService", "StringBuilder", "HashMap", "Scanner"],
                    correct: "ExecutorService",
                },
                {
                    question: "Thread states include?",
                    choices: ["NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED", "START, STOP only", "OPEN, CLOSE", "PUSH, POP"],
                    correct: "NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED",
                },
                {
                    question: "Integer.valueOf(127) == Integer.valueOf(127) for cached range?",
                    choices: ["true due to cache -128 to 127", "false always", "Compile error", "Null pointer"],
                    correct: "true due to cache -128 to 127",
                },
                {
                    question: "Which is NOT primitive wrapper?",
                    choices: ["String (not wrapper for primitive)", "Double", "Boolean", "Character"],
                    correct: "String (not wrapper for primitive)",
                },
                {
                    question: "join() on thread does?",
                    choices: ["Waits for thread to die", "Starts thread", "Interrupts thread", "Sets priority only"],
                    correct: "Waits for thread to die",
                },
                {
                    question: "volatile keyword ensures?",
                    choices: ["Visibility of changes across threads", "Atomicity of compound ops always wrong", "Synchronization replacement always", "Serialization"],
                    correct: "Visibility of changes across threads",
                },
                {
                    question: "daemon thread dies when?",
                    choices: ["All non-daemon threads end", "Immediately always", "After 1 second", "Never"],
                    correct: "All non-daemon threads end",
                },
                {
                    question: "Double wrapper valueOf returns?",
                    choices: ["Double object", "double only without object wrong", "String", "float"],
                    correct: "Double object",
                },
                {
                    question: "Callable differs from Runnable by?",
                    choices: ["Can return result and throw checked exceptions", "Cannot run in thread", "No executor support", "Must extend Thread"],
                    correct: "Can return result and throw checked exceptions",
                },
                {
                    question: "IllegalStateException starting thread twice?",
                    choices: ["Yes, cannot restart same Thread instance", "No, runs twice", "Compiles only", "Creates two threads"],
                    correct: "Yes, cannot restart same Thread instance",
                },
                {
                    question: "parseInt on wrapper class?",
                    choices: ["Integer.parseInt(String)", "int.parseInt", "String.parseInt", "Number.parse only abstract"],
                    correct: "Integer.parseInt(String)",
                },
                {
                    question: "wait/notify used for?",
                    choices: ["Inter-thread cooperation on shared monitor", "Sleep replacement always", "GC trigger", "Class loading"],
                    correct: "Inter-thread cooperation on shared monitor",
                },
                {
                    question: "Which creates thread pool with fixed size?",
                    choices: ["Executors.newFixedThreadPool(n)", "new ThreadPool()", "Thread.fixed(n)", "Runtime.pool(n)"],
                    correct: "Executors.newFixedThreadPool(n)",
                }
            ],
            "Doubly Linked List": [
                {
                    question: "Doubly linked list node contains?",
                    choices: ["Data, next, and prev pointers", "Data and next only", "Data only", "Index and hash"],
                    correct: "Data, next, and prev pointers",
                },
                {
                    question: "Main advantage over singly linked list?",
                    choices: ["Backward traversal and easier deletion with prev", "Less memory", "No pointers", "O(1) random access"],
                    correct: "Backward traversal and easier deletion with prev",
                },
                {
                    question: "Disadvantage of doubly linked list?",
                    choices: ["Extra memory for prev pointer", "Cannot traverse forward", "Fixed size", "No insertion"],
                    correct: "Extra memory for prev pointer",
                },
                {
                    question: "Deleting node with prev and next requires?",
                    choices: ["Rewiring prev.next and next.prev", "Only update head", "Shift elements", "Rehash table"],
                    correct: "Rewiring prev.next and next.prev",
                },
                {
                    question: "Insert before a given node in doubly list needs?",
                    choices: ["Update four links in general case", "One pointer change only always", "Sort list first", "Binary search"],
                    correct: "Update four links in general case",
                },
                {
                    question: "Java LinkedList internally is?",
                    choices: ["Doubly linked list", "Singly linked only", "Array based", "Hash table"],
                    correct: "Doubly linked list",
                },
                {
                    question: "Can traverse doubly linked list backwards from tail?",
                    choices: ["Yes using prev", "No", "Only with array", "Only circular"],
                    correct: "Yes using prev",
                },
                {
                    question: "Null prev in first node indicates?",
                    choices: ["Head of list", "Tail", "Cycle", "Error always"],
                    correct: "Head of list",
                },
                {
                    question: "Null next in last node indicates?",
                    choices: ["End of non-circular list", "Head", "Doubly link missing always wrong", "Empty list only"],
                    correct: "End of non-circular list",
                },
                {
                    question: "Time to delete known node in doubly list?",
                    choices: ["O(1) if node reference given", "O(n) always", "O(log n)", "O(n^2)"],
                    correct: "O(1) if node reference given",
                },
                {
                    question: "Sentinel/dummy nodes used to?",
                    choices: ["Simplify edge insert/delete", "Sort faster", "Use less memory always", "Prevent generics"],
                    correct: "Simplify edge insert/delete",
                },
                {
                    question: "Doubly list insert at tail with tail pointer?",
                    choices: ["O(1)", "O(n)", "O(log n)", "Impossible"],
                    correct: "O(1)",
                },
                {
                    question: "Reverse doubly linked list swaps?",
                    choices: ["next and prev for each node", "Data only always sufficient wrong for pointer reverse", "Head and tail names only", "Nothing"],
                    correct: "next and prev for each node",
                },
                {
                    question: "Compared to array, doubly list middle insert?",
                    choices: ["O(1) after locating node; locate O(n)", "O(1) always including search", "O(n) shift like array always", "Impossible"],
                    correct: "O(1) after locating node; locate O(n)",
                },
                {
                    question: "Iterator on LinkedList can traverse?",
                    choices: ["Both directions with ListIterator", "Forward only always", "Backward only", "Random index jump O(1)"],
                    correct: "Both directions with ListIterator",
                },
                {
                    question: "Memory per node vs singly?",
                    choices: ["One extra reference field", "Same", "Half memory", "Two arrays"],
                    correct: "One extra reference field",
                },
                {
                    question: "Doubly list used in?",
                    choices: ["LRU cache structures, deque implementations", "Binary search trees only", "Hash maps only", "Stack arrays only"],
                    correct: "LRU cache structures, deque implementations",
                },
                {
                    question: "Removing head in doubly list updates?",
                    choices: ["Head and new head prev to null", "Tail only", "Nothing if size 1 wrong still update", "JVM stack"],
                    correct: "Head and new head prev to null",
                },
                {
                    question: "Circular doubly list tail.next points to?",
                    choices: ["Head", "null", "Tail prev", "Random node"],
                    correct: "Head",
                },
                {
                    question: "Detecting palindrome in doubly list can use?",
                    choices: ["Two pointers from head and tail", "Stack only mandatory", "Hash only", "Sorting only"],
                    correct: "Two pointers from head and tail",
                }
            ],
            "Circular Linked List": [
                {
                    question: "Circular linked list property?",
                    choices: ["Last node points back to head (or another node)", "Last node is null always", "No next pointers", "Is array ring buffer only"],
                    correct: "Last node points back to head (or another node)",
                },
                {
                    question: "Empty circular list often represented as?",
                    choices: ["null or sentinel pointing to itself", "Head equals tail always non-empty", "Last points to null", "Cannot be empty"],
                    correct: "null or sentinel pointing to itself",
                },
                {
                    question: "Advantage of circular list?",
                    choices: ["Round-robin traversal without null end", "O(1) random access", "Less memory than singly always", "Automatic sorting"],
                    correct: "Round-robin traversal without null end",
                },
                {
                    question: "Detecting cycle in linear list uses?",
                    choices: ["Floyd tortoise-hare algorithm", "Circular list only", "Sorting", "HashMap only always required wrong"],
                    correct: "Floyd tortoise-hare algorithm",
                },
                {
                    question: "Traversing circular list must avoid?",
                    choices: ["Infinite loop without stop condition", "Using next pointer", "Using data field", "Using head"],
                    correct: "Infinite loop without stop condition",
                },
                {
                    question: "Insert at front in circular singly list requires updating?",
                    choices: ["Last node next if maintaining circular ref to head", "Only head sometimes if tail pointer tracks last", "Nothing", "Prev only doubly wrong singly"],
                    correct: "Last node next if maintaining circular ref to head",
                },
                {
                    question: "Josephus problem often modeled with?",
                    choices: ["Circular linked list or simulation", "Stack only", "Queue only FIFO wrong", "Binary tree"],
                    correct: "Circular linked list or simulation",
                },
                {
                    question: "Circular doubly list head.prev points to?",
                    choices: ["Tail", "null", "Head next", "Random"],
                    correct: "Tail",
                },
                {
                    question: "Is null next in last node of circular singly list?",
                    choices: ["No, points to head (or sentinel)", "Yes standard", "Sometimes only", "Compile error"],
                    correct: "No, points to head (or sentinel)",
                },
                {
                    question: "Round-robin scheduler can use?",
                    choices: ["Circular linked list of tasks", "HashSet only", "TreeMap only", "Stack LIFO"],
                    correct: "Circular linked list of tasks",
                },
                {
                    question: "Counting nodes in circular list needs?",
                    choices: ["Careful stop when returning to start", "arr.length", "Always infinite", "Sort first"],
                    correct: "Careful stop when returning to start",
                },
                {
                    question: "Delete only node in circular singly list?",
                    choices: ["Set head null and fix last next", "Impossible", "Only pop stack", "Remove prev"],
                    correct: "Set head null and fix last next",
                },
                {
                    question: "Circular vs linear search termination?",
                    choices: ["Stop when current equals start after first step", "Stop at null", "Stop at index -1", "Never stop"],
                    correct: "Stop when current equals start after first step",
                },
                {
                    question: "Memory compared to linear singly same nodes?",
                    choices: ["Same number of pointers per node", "One less pointer", "Two arrays", "Doubled memory always"],
                    correct: "Same number of pointers per node",
                },
                {
                    question: "Circular buffer differs from circular linked list?",
                    choices: ["Buffer uses array indices modulo size", "Identical structures", "List uses stack", "Buffer is tree"],
                    correct: "Buffer uses array indices modulo size",
                },
                {
                    question: "Floyd cycle detection slow pointer moves?",
                    choices: ["One step", "Two steps", "Half step", "Random"],
                    correct: "One step",
                },
                {
                    question: "Floyd fast pointer moves?",
                    choices: ["Two steps per iteration", "One step", "Three steps always", "Zero steps"],
                    correct: "Two steps per iteration",
                },
                {
                    question: "If cycle exists Floyd algorithm finds?",
                    choices: ["Meeting point inside cycle", "Head always", "Tail null", "Sorted order"],
                    correct: "Meeting point inside cycle",
                },
                {
                    question: "Use case: multiplayer game turn order?",
                    choices: ["Circular traversal of players", "Stack undo", "Queue print jobs only", "Hash map keys"],
                    correct: "Circular traversal of players",
                },
                {
                    question: "Breaking circular list to linear?",
                    choices: ["Set last.next to null", "Delete head", "Add prev pointer only", "Sort nodes"],
                    correct: "Set last.next to null",
                }
            ]
        }
    };
}
