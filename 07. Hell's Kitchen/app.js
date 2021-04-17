function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs > textarea')
   const bestRestaurantP = document.querySelector('#bestRestaurant > p')
   const workersP = document.querySelector('#workers > p')

   function onClick() {
      const arr = JSON.parse(input.value)

      let restaurants = {}

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0]
         const workersArr = tokens[1].split(', ')
         let workers = []

         for (let worker of workersArr) {
            const workerTokens = worker.split(' ')
            const salary = Number(workerTokens[1])
            workers.push({ name: workerTokens[0], salary })
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers)
         }

         workers.sort((workerA, workerB) => workerB.salary - workerA.salary)

         const bestSalary = workers[0].salary
         const avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length

         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary
         }

      });

      let bestRestaurantSalary = 0
      let best = undefined

      for (const name in restaurants) {
         if (restaurants[name].avgSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               avgSalary: restaurants[name].avgSalary
            }

            bestRestaurantSalary = restaurants[name].avgSalary
         }
      }

      bestRestaurantP.textContent = `Name: ${best.name} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`

      let workersResult = []

      best.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workersP.textContent = workersResult.join(' ')
   }
}