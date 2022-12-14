import random

# Target
target = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 0, 0, 2, 0, 1, 0],
    [0, 1, 0, 2, 2, 2, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

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
        print("\n")


# First time
best = generate_random_solution()
best_score = evaluate(best)

loop_counts = 0

# Looping
while True:
    print("Best score: ", best_score, "\nLoops: ",
          loop_counts+1, "\nSolution: \n")
    draw_matrix(best)
    print("\n")
    if(best_score == 0):
        break

    new_solution = best
    mutate_solution(new_solution)
    loop_counts += 1
    score = evaluate(new_solution)
    if score < best_score:
        best = new_solution
        best_score = score
