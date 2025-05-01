'use client'
import { useState } from 'react'
import {
	Search,
	ChevronDown,
	ListFilter,
	List,
	LayoutGrid,
	AlignLeft,
	Grid3x3,
	Package,
	Clock,
	Share2,
	MoreHorizontal,
	Calendar,
} from 'lucide-react'

export default function Header() {
	const [activeView, setActiveView] = useState('gantt')

	const views = [
		{ id: 'list', name: 'List', icon: <List size={18} /> },
		{ id: 'board', name: 'Board', icon: <LayoutGrid size={18} /> },
		{ id: 'gantt', name: 'Gantt', icon: <AlignLeft size={18} /> },
		{ id: 'table', name: 'Table', icon: <Grid3x3 size={18} /> },
		{ id: 'box', name: 'Box', icon: <Package size={18} /> },
	]

	return (
		<header className='border-b border-gray-200 bg-white'>
			{/* Top Navigation Bar */}
			<div className='flex items-center justify-between px-4 py-2'>
				{/* Left Side - Title and Views */}
				<div className='flex items-center'>
					{/* Title with dropdown */}
					<div className='flex items-center mr-6'>
						<h1 className='text-lg font-semibold text-gray-800'>Human Resources</h1>
						<ChevronDown size={16} className='ml-1 text-gray-500' />
					</div>

					{/* View Options */}
					<div className='flex items-center space-x-2'>
						{views.map((view) => (
							<button
								key={view.id}
								className={`flex items-center px-3 py-1.5 text-sm rounded-md ${
									activeView === view.id
										? 'text-gray-800 font-medium'
										: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
								}`}
								onClick={() => setActiveView(view.id)}
							>
								<span className='mr-2'>{view.icon}</span>
								<span>{view.name}</span>
								{view.id !== activeView && <span className='mx-1'>•</span>}
							</button>
						))}
					</div>
				</div>

				{/* Right Side - Actions */}
				<div className='flex items-center space-x-3'>
					<div className='flex items-center text-gray-500 text-sm'>
						<Clock size={16} className='mr-1' />
						<span>Saving...</span>
					</div>

					<button className='flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50'>
						<Share2 size={16} className='mr-2' />
						<span>Share</span>
					</button>
				</div>
			</div>

			{/* Bottom Toolbar */}
			<div className='flex items-center justify-between px-4 py-2'>
				{/* Left - Search */}
				<div className='flex items-center'>
					<div className='relative'>
						<Search
							size={16}
							className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
						/>
						<input
							type='text'
							placeholder='Find people...'
							className='pl-9 pr-4 py-1.5 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-64'
						/>
					</div>

					<button className='ml-3 flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md'>
						<Calendar size={16} className='mr-2' />
						<span>Today</span>
					</button>
				</div>

				{/* Right - Filters and Options */}
				<div className='flex items-center space-x-3'>
					<button className='flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50'>
						<ListFilter size={16} className='mr-2' />
						<span>Add filter</span>
					</button>

					<button className='flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50'>
						<Calendar size={16} className='mr-2' />
						<span>Week</span>
					</button>

					<button className='flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50'>
						<span>Sort by</span>
					</button>

					<button className='p-1.5 text-gray-500 hover:bg-gray-100 rounded-md'>
						<MoreHorizontal size={20} />
					</button>
				</div>
			</div>
		</header>
	)
}
