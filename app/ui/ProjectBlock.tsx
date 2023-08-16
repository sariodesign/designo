
export interface ProjectProps {
	preview?: string,
	name: string,
	description: string,
	lastItem?: boolean
}

export function Project({...props}:ProjectProps) {

	let mbClass = props.lastItem ? `mb-24 md:mb-0` : `mb-10 sm:mb-8 md:mb-0`

	return (
		<div className={`group rounded-[15px] flex flex-col overflow-hidden sm:flex-row md:flex-col cursor-pointer ${mbClass}`}>
			<img className="sm:w-1/2 md:w-full" src={props.preview} alt={props.name} />
			<div className="bg-very-light-peach flex flex-col items-center justify-center p-8 sm:w-1/2 md:group-hover:bg-peach md:w-full">
				<h3 className="mb-4 text-peach uppercase text-[20px] group-hover:text-white">{props.name}</h3>
				<p className="text-center text-dark-grey group-hover:text-white">{props.description}</p>
			</div>
		</div>
	)

}