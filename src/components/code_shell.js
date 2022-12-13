
import { useEffect, useState } from 'react';
import pythonfile from '../assets/py/hill_climbing.py';


export const CodeShell = () => {

    const [res, setRes] = useState("");


    useEffect(() => {
        // runPythonCode();
        // const { c, cpp, node, python, java } = require('compile-run');
        // python.runFile(pythonfile, {
        //     executionPath: 'python3'
        // }, (err, result) => console.log(err ? err : result));
    }, []);

    async function runPython() {
        let pyodide = await window.loadPyodide();
        // const pyodide = window.pyodide;

        let code =
            `import random
# Target
target = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 2, 2, 2, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

rows = len(target)
columns = len(target[0])

diff_matrix = [[0 for e in range(columns)] for e in range(rows)]

# Generator

        
def generate_random_solution():
    random_matrix = [[random.randint(0, 2)
                    for e in range(columns)] for e in range(rows)]
    return random_matrix


# Mutation
def mutate_solution(solution):
    flag = 0
    for i in range(rows):
        for j in range(columns):
            if not (diff_matrix[i][j] == 0):
                flag = 1
                solution[i][j] = random.randint(0, 2)
                break
        if flag == 1:
            break


# Evalute

                    
def evaluate(solution):
    diff = 0
    for i in range(rows):
        for j in range(columns):
            s = solution[i][j]
            t = target[i][j]
            current_diff = abs(s-t)
            diff_matrix[i][j] = current_diff
            diff += current_diff
    return diff


# Draw Matrix

def draw_matrix(solution):
    for i in range(10):
        for j in range(10):
            draw_item = " "
            if (solution[i][j] == 1):
                draw_item = "X"

            elif (solution[i][j] == 2):
                draw_item = "O"
            print(draw_item,  end=' ')
    


# First time
best = generate_random_solution()
best_score = evaluate(best)

loop_counts = 0

# Looping
while True:
    draw_matrix(best)
    if(best_score == 0):
        break

new_solution = best
mutate_solution(new_solution)
loop_counts += 1
score = evaluate(new_solution)
if score < best_score:
    best = new_solution
    best_score = score
        `;
        let result = pyodide.runPython(code);
        console.log("result", result)
        setRes(result);
    }


    return <>
        {res}
        <button onClick={runPython}> Click</button>
    </>
}