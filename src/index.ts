type Todo = {
  id: string
  content: string
  completed: boolean
  category: string
  tags: Tag[]
}

type Tag = string

type TodoCreateItem = {
  content: string
  completed?: boolean
  category?: string
  tags?: Tag[]
}

interface CreateTodo { (todocreateItem: TodoCreateItem): Promise<Todo> }

interface ReadTodo { (id?: string): Promise<Todo | Todo[]> }

type TodoUpdateItem = {
  content?: string
  completed?: boolean
  category?: string
  tags?: Tag[]
}

interface UpdateTodo { (todoUpdateItem: TodoUpdateItem): Promise<Todo> }

interface DeleteTodo { (id: string): Todo }