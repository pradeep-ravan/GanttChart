'use client'
import { useState } from 'react'
import {
	Search,
	Settings,
	Plus,
	Zap,
	ChevronDown,
	ChevronRight,
	Folder,
	FileText,
} from 'lucide-react'

export default function Sidebar() {
	const [expandedFolders, setExpandedFolders] = useState({
		recruitment: true,
		hiring: false,
		jobs: true,
		selections: false,
		payroll: false,
	})

	const toggleFolder = (folder) => {
		setExpandedFolders({
			...expandedFolders,
			[folder]: !expandedFolders[folder],
		})
	}

	return (
		<div className='w-64 h-screen bg-white border-r border-gray-200 flex flex-col'>
			{/* Header */}
			<div className='px-4 py-3 border-b border-gray-200'>
				<div className='text-xs text-gray-500 font-medium mb-1'>SPACE</div>
				<div className='flex justify-between items-center'>
					<h1 className='text-lg font-semibold text-gray-800'>Human Resources</h1>
					<div className='flex space-x-2'>
						<button className='text-gray-500 hover:text-gray-700'>
							<Settings size={18} />
						</button>
						<button className='text-gray-500 hover:text-gray-700'>
							<Plus size={18} />
						</button>
					</div>
				</div>
			</div>

			{/* Search */}
			<div className='px-4 py-3'>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search...'
						className='w-full bg-gray-100 rounded-md py-2 pl-9 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300'
					/>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
						<Search size={16} className='text-gray-400' />
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-3'>
						<Zap size={16} className='text-gray-400' />
					</div>
				</div>
			</div>

			{/* Stats */}
			<div className='px-4 py-2 flex space-x-4 text-xs text-gray-500'>
				<div>14 Doc</div>
				<div>3 Attachments</div>
			</div>
			<div className='px-4 pb-3'>
				<div className='text-xs text-gray-500'>20+ People pdf</div>
			</div>

			{/* Folders */}
			<div className='flex-1 overflow-auto px-2'>
				<ul className='space-y-1'>
					{/* Recruitment */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('recruitment')}
						>
							{expandedFolders.recruitment ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Recruitment</span>
						</button>

						{expandedFolders.recruitment && (
							<ul className='ml-5 space-y-1 mt-1'>
								<li className='flex items-center justify-between px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'>
									<span>Trainee/Intern</span>
									<span className='bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										4
									</span>
								</li>
								<li className='flex items-center justify-between px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'>
									<span>Employee Joined</span>
									<span className='bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										2
									</span>
								</li>
								<li className='flex items-center justify-between px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'>
									<span>Rejections</span>
									<span className='bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										1
									</span>
								</li>
							</ul>
						)}
					</li>

					{/* Hiring Candidates */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('hiring')}
						>
							{expandedFolders.hiring ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Hiring Candidates</span>
						</button>
					</li>

					{/* Interview Process */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('interview')}
						>
							{expandedFolders.interview ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Interview Process</span>
						</button>
					</li>

					{/* Jobs */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('jobs')}
						>
							{expandedFolders.jobs ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Jobs</span>
						</button>

						{expandedFolders.jobs && (
							<ul className='ml-5 space-y-1 mt-1'>
								<li className='flex items-center px-2 py-1.5 text-sm text-gray-700 rounded bg-gray-100'>
									<div className='w-1.5 h-1.5 rounded-full bg-amber-400 mr-2'></div>
									<span>Applicants</span>
									<span className='ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										7
									</span>
								</li>
							</ul>
						)}
					</li>

					{/* Selections */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('selections')}
						>
							{expandedFolders.selections ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Selections</span>
						</button>

						{expandedFolders.selections && (
							<ul className='ml-5 space-y-1 mt-1'>
								<li className='flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'>
									<div className='w-1.5 h-1.5 rounded-full bg-amber-400 mr-2'></div>
									<span>Review your appli...</span>
									<span className='ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										1
									</span>
								</li>
								<li className='flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'>
									<div className='w-1.5 h-1.5 rounded-full bg-amber-400 mr-2'></div>
									<span>Evaluate results</span>
									<span className='ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full'>
										1
									</span>
								</li>
							</ul>
						)}
					</li>

					{/* Payroll */}
					<li>
						<button
							className='w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded hover:bg-gray-100'
							onClick={() => toggleFolder('payroll')}
						>
							{expandedFolders.payroll ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							)}
							<Folder size={16} className='ml-1 mr-2 text-gray-400' />
							<span>Payroll</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}