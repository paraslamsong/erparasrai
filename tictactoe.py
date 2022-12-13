# import math


# class GNN:
#    def init(self, number, goal):
#        population = []
#        goal = goal or '';
#        genePool = []
#        numnber = number
#        mostFit = {self.fitness: 0}
#        self.initializePopulation()

#    def initializePopulation(self):
#     length = self.goal.length
#     for i in range(length+1):
#         self.population.append(
#             {self.chromosomes: self.makeIndividual(length), self.fitness: 0})

#    def solve(self):
#        for i in range(10000):
#            self.calcFitnessAll()
#            self.crossParents()
#            self.mutate()
#        print(self.mostFit)

#    def mutate(self):
#     for obj in self.population:
#         shouldIMutateChromosome = math.random() < 0.1
#         if shouldIMutateChromosome:
#             for i in range(obj.chromosomes.length):
#                 shoulIMutateGene = math.random() < 0.05
#                 if shoulIMutateGene:
#                     splitVersion = object.chromosomes.split('')
#                     splitVersion[i] = self.makeIndividual(1)
#                     obj.chromosomes = splitVersion.join('')

#    def calcFitnessAll(self):
#     mostFit = {"fitness": 0}

#     for obj in self.population:
#         str1 = goal
#         str2 = obj.chromosomes
#         counter = 0
#         for i in range(str1.length):
#             if str1.charAt(i) == str2.charAt(i):
#                 counter += 1
#             obj.fitness = counter > 0 ? counter: 1

#             for i in range(obj.fitness):
#                self.genePool.push(obj.chromosomes)

#             if obj.fitness > self.mostFit.fitness:
#                mostFit = obj.fitness
#             else:
#                 mostFit = mostFit

#        if (mostFit.fitness > mostFit.fitness) {
#            mostFit = mostFit
#        }

#        print('Max fitnees so far is ' + mostFit.fitness)


#    def crossParents(self):
#     newPopulation = [];
#     pool = genePool
#        population.forEach(()=> {

#            const parent1=pool[Math.floor(Math.random() * pool.length)];

#            const parent2=pool[Math.floor(Math.random() * pool.length)];

#            // //select crossSection
#            const crossSection=Math.floor(Math.random() * goal.length - 1)


#            let newKid= `${parent1.slice(0, crossSection)}${parent2.slice(crossSection, goal.length)}`;

#            newPopulation.push({chromosomes: newKid, fitness: 0})
#        })

#        population = newPopulation
#        genePool = []

#    }

#    makeIndividual(length) {
#        var result = '';
#        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,';
#        var charactersLength = characters.length;
#        for (var i=0; i < length; i++) {
#            result += characters.charAt(Math.floor(Math.random() *
#                charactersLength)); }
#        return result;}


# }
# const goal = `I am the bone of my sword. Steel is my body, and fire is my blood.`
# const gnn = new GNN(1000, goal)
# gnn.solve()
