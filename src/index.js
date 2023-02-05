/**
 * Todo type definition
 * @typedef {Object} Todo
 * @property {string} id - todo id 
 * @property {string} content - todo content
 * @property {boolean} completed - todo status
 * @property {string} category - todo category
 * @property {Tag[]} [tags] - array of todo tags
 */

/**
 * Tag type definition
 * @typedef {string} Tag
 */


/**
 * createTodo function parameters type
 * @typedef {Object} TodoCreateItem - createTodo type
 * @property {string} content - todo content
 * @property {boolean} [completed] - todo status
 * @property {string} [category] - todo category
 * @property {Tag[]} [tags] - array of todo tags
 */

/**
 * @function createTodo Create todo.
 * @description 할 일을 추가할 수 있다.
 * @description 내용없이 추가할 수 없다.
 * @param {TodoCreateItem} todoCreateItem - {@link TodoCreateItem}
 * @returns {Promise<Todo>} Return created todo value.
 */
const createTodo = async (todoCreateItem) => {}

/**
 * @function readTodo Read todo
 * @description 모든 할 일을 조회할 수 있다.
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} [id] todo id
 * @returns {Promise<Todo | Todo[]>} Return created todo value.
*/
const readTodo = async (id) => {return a}

/**
 * updateTodo function parameters type
 * @typedef {Object} TodoUpdateItem - updateTodo type
 * @property {string} [content] - todo content
 * @property {boolean} [completed] - todo status
 * @property {string} [category] - todo category
 * @property {Tag[]} [tags] - array of todo tags
 */

/**
 * @function updateTodo Update todo
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {string} id todo id
 * @param {TodoUpdateItem} todoUpdateItem - {@link TodoUpdateItem}
 * @returns {Promise<Todo>} Return updated todo value.
 */

const updateTodo = async(id, todoUpdateItem) => {}

/**
 * @function deletTodo Delete todo
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @description 모든 할 일을 제거할 수 있다.
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} [id] todo id
 */
const deleteTodo = async(id) => {}