import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createTodo(task:string, completed:boolean = false) {
    return await prisma.todo.create({
        data: {
            task,
            completed
        }
    })
}

async function getTodos() {
    return await prisma.todo.findMany()
}

async function updateTodo(id:string, updates : {completed : boolean}) {
    return await prisma.todo.update({
        where: { id },
        data: updates
    })
}

async function deleteTodo(id:string) {
    return await prisma.todo.delete({
        where: { id }
    })
}

async function main() {
    await prisma.todo.deleteMany()
    // Create a new todo
    const newTodo1 = await createTodo("Finish writing CRUD operations 1")
    console.log("Created todo:", newTodo1)
    const newTodo2 = await createTodo("Finish writing CRUD operations 2")
    console.log("Created todo:", newTodo2)
    // Read all todos
    const todos = await getTodos()
    console.log("All todos:", todos)

    // Update a todo
    const todoToUpdate = todos[0] // Assuming there's at least one todo
    const updatedTodo = await updateTodo(todoToUpdate.id, { completed: true })
    console.log("Updated todo:", updatedTodo)

    // Delete a todo
    const todoToDelete = todos[1] // Assuming there's at least two todos
    const deletedTodo = await deleteTodo(todoToDelete.id)
    console.log("Deleted todo:", deletedTodo)
}

main()
    .catch(e => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
