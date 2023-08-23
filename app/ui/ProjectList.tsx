import { Project, ProjectProps } from "./ProjectBlock"

export function ProjectList({projects}:{projects: ProjectProps[]}) {


	return (
		<div className="px-6 md:grid md:grid-cols-3 md:row-auto md:gap-8 md:px-0 md:mb-40 relative z-10">
			{projects.map(item => <Project key={item.name}  {...item}/>)}
		</div>
	)
}