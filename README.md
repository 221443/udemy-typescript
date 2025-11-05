# compile and run
npx tsx index.ts

# open code on the folder i am in with the console
code .

# compile the ts code to js 
tsc index.ts

# run the compiled js code 
node index.js

# initialisation of the tsc
tsc --init // after the initialisation you can check the new tsconfig.json file and edit the config of the tsc
tsc // now no need to specify the file to compile, because the whole rootDir from tsconfig.json is compiled
tsc -w // sets the tsc into the watch mode, that compiles everytime the change is detected

## Transpiling = (High → High) Translating between high-level languages

**Examples:** TypeScript → JavaScript, JSX → JavaScript, SASS → CSS

## Interpreting = (Intermediate → Execute) Executing bytecode line-by-line

**IMPORTANT:** Interpreters don't read high-level code directly! The flow is:

```
High-Level Code (JavaScript)
        ↓
   [Parse once]
        ↓
    Bytecode (Intermediate)
        ↓
   [Interpret] ← Interpreter reads THIS, not JavaScript!
        ↓
    Execute
```

During Interpreting, for each bytecode instruction:
1. Read the bytecode instruction
2. Translate bytecode to CPU operations
3. Execute immediately
4. Move to next instruction

**Key Point:** The interpreter operates on **bytecode** (intermediate-level), not JavaScript (high-level)!

## Compiling = (High → Low) Translating entire code to machine code ahead of time

During Compiling is done for the whole program:
1. Read all the code
2. Translate to machine operations and save as executable
3. Later: Load executable and run directly on CPU, very fast

---

## The Complete Translation Chain

```
┌─────────────────────────────────────────────┐
│ HIGH-LEVEL (Human writes this)              │
├─────────────────────────────────────────────┤
│ TypeScript / JavaScript                     │
│ - Variables, functions, objects             │
│ - if, for, while statements                 │
│ - Human-readable syntax                     │
└─────────────────────────────────────────────┘
                    ↓
            [Parse & Compile]
                    ↓
┌─────────────────────────────────────────────┐
│ INTERMEDIATE-LEVEL (VM/Runtime uses this)   │
├─────────────────────────────────────────────┤
│ Bytecode                                    │
│ - Binary format (not human-readable)        │
│ - Platform independent                      │
│ - Simpler than high-level                   │
│ - Example: LOAD, ADD, MULTIPLY, RETURN      │
└─────────────────────────────────────────────┘
                    ↓
         [Interpret OR JIT Compile]
                    ↓
┌─────────────────────────────────────────────┐
│ LOW-LEVEL (CPU executes this)               │
├─────────────────────────────────────────────┤
│ Machine Code                                │
│ - Binary (1s and 0s)                        │
│ - CPU-specific (x86, ARM, etc.)             │
│ - Direct CPU instructions                   │
│ - Example: MOV RAX, 5; ADD RAX, RBX         │
└─────────────────────────────────────────────┘
```

## Visual Example: JavaScript → Bytecode → Execution

```javascript
// HIGH-LEVEL: What you write
function add(a, b) {
  return a + b;
}
```

```
INTERMEDIATE-LEVEL: Bytecode (generated automatically)
Function "add":
  LOAD_PARAM 0      // Load 'a'
  LOAD_PARAM 1      // Load 'b'
  ADD               // Add them
  RETURN            // Return result
```

```assembly
LOW-LEVEL: Machine code (JIT compiled or interpreted)
MOV RAX, [param_a]   ; Load first parameter
ADD RAX, [param_b]   ; Add second parameter
RET                  ; Return
```

**The interpreter reads BYTECODE, not JavaScript!**

---