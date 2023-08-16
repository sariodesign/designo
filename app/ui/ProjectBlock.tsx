
export interface ProjectProps {
	preview?: string,
	name: string,
	description: string,
	lastItem?: boolean
}

export function Project({...props}:ProjectProps) {

	let mbClass = props.lastItem ? `mb-24 md:mb-0` : `mb-10 sm:mb-8 md:mb-0`

	return (
		<div className={`rounded-[15px] flex flex-col overflow-hidden sm:flex-row md:flex-col ${mbClass}`}>
			<img className="sm:w-1/2 md:w-full" src={props.preview} alt={props.name} />
			<div className="bg-very-light-peach flex flex-col items-center justify-center p-8 text-[26px] sm:w-1/2 md:w-full">
				<h3 className="mb-4 text-peach uppercase">{props.name}</h3>
				<p className="text-center">{props.description}</p>
			</div>
		</div>
	)

}