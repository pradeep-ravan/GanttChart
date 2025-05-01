import { useEffect, useState } from 'react'
import { Gantt } from 'react-virtual-gantt'
import { Calendar, Plus, X } from 'lucide-react'

// Import only Dialog components from shadcn/ui
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
	DialogOverlay,
} from '../components/ui/dialog'

export default function GanttChart() {
	const [tasks, setTasks] = useState([
		{
			key: 'task-1',
			title: 'Gantt Task',
			children: [
				{
					key: 'task-1-1',
					title: 'By Pradeep',
					data: {
						startDate: '2025-05-01T08:00:00.000Z',
						endDate: '2025-05-02T08:00:00.000Z',
					},
				},
				{
					key: 'task-1-2',
					title: 'Task Done',
					data: {
						startDate: '2025-05-03T08:00:00.000Z',
						endDate: '2025-05-04T08:00:00.000Z',
					},
				},
			],
		},
		{
			key: 'task-2',
			title: 'HR Call ?',
			data: {
				startDate: '2025-05-05T08:00:00.000Z',
				endDate: '2025-05-06T08:00:00.000Z',
			},
		},
	])

	const [parentTasks, setParentTasks] = useState([
		{ key: 'task-1', title: 'Gantt Task' },
		{ key: 'task-2', title: 'HR Call ?' },
		{ key: 'none', title: 'Create as parent task' },
	])

	const [parentTask, setParentTask] = useState('none')
	const [taskTitle, setTaskTitle] = useState('')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleAddTask = () => {
		if (!taskTitle || !startDate || !endDate) {
			alert('Please fill in all fields')
		}
		const newTask = {
			key: `task-${tasks.length + 1}-${Math.floor(Math.random() * 1000)}`,
			title: taskTitle,
			data: {
				startDate: new Date(startDate).toISOString(),
				endDate: new Date(endDate).toISOString(),
			},
		}

		if (parentTask === 'none') {
			// Add as a parent task
			setTasks([...tasks, newTask])
			setParentTasks([...parentTasks, { key: newTask.key, title: newTask.title }])
		} else {
			// Add as a child task
			const updatedTasks = tasks.map((task) => {
				if (task.key === parentTask) {
					return {
						...task,
						children: [...(task.children || []), newTask],
					}
				}
				return task
			})
			setTasks(updatedTasks)
		}

		// Reset form
		setTaskTitle('')
		setStartDate('')
		setEndDate('')
		setParentTask('none')
		setIsDialogOpen(false)
	}

	useEffect(() => {
		if (isDialogOpen) {
			const dialogContent = document.querySelector('.gantt-tree-list')
			if (dialogContent) {
				dialogContent.style.display = 'none'
			}
		}
		return () => {
			const dialogContent = document.querySelector('.gantt-tree-list')
			if (dialogContent) {
				dialogContent.style.display = 'block'
			}
		}
	}, [isDialogOpen])

	return (
		<div className='flex flex-col h-screen'>
			<div className='p-4 flex justify-between items-center border-b'>
				<h1 className='text-xl font-bold'>Project Gantt Chart</h1>
				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<div>
						<DialogTrigger asChild>
							<button className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
								<Plus size={16} /> Add Task
							</button>
						</DialogTrigger>
						<DialogOverlay className='fixed inset-0 bg-black/50 z-40' />
						<DialogContent className='sm:max-w-md z-50 bg-white shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
							<DialogHeader>
								<DialogTitle>Add New Task</DialogTitle>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<label
										htmlFor='task-title'
										className='text-right text-sm font-medium'
									>
										Task Title
									</label>
									<input
										id='task-title'
										value={taskTitle}
										onChange={(e) => setTaskTitle(e.target.value)}
										className='col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
										placeholder='Enter task title'
									/>
								</div>

								<div className='grid grid-cols-4 items-center gap-4'>
									<label
										htmlFor='start-date'
										className='text-right text-sm font-medium flex items-center gap-1 justify-end'
									>
										<Calendar size={16} /> Start
									</label>
									<input
										id='start-date'
										type='datetime-local'
										value={startDate}
										onChange={(e) => setStartDate(e.target.value)}
										className='col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>

								<div className='grid grid-cols-4 items-center gap-4'>
									<label
										htmlFor='end-date'
										className='text-right text-sm font-medium flex items-center gap-1 justify-end'
									>
										<Calendar size={16} /> End
									</label>
									<input
										id='end-date'
										type='datetime-local'
										value={endDate}
										onChange={(e) => setEndDate(e.target.value)}
										className='col-span-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
								</div>
							</div>
							<DialogFooter>
								<DialogClose asChild>
									<button className='inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors'>
										<X size={16} /> Cancel
									</button>
								</DialogClose>
								<button
									type='submit'
									onClick={handleAddTask}
									className='inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
								>
									<Plus size={16} /> Add Task
								</button>
							</DialogFooter>
						</DialogContent>
					</div>
				</Dialog>
			</div>

			<div className='flex-1'>
				<Gantt>
					<Gantt.Controls />
					<Gantt.Chart data={tasks} />
				</Gantt>
			</div>
		</div>
	)
}
