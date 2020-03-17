import { collatedTasks } from '../constants'
// eslint-disable-next-line 
export const collatedTasksExist = selectedProject => 
collatedTasks.find(task => task.key === selectedProject);