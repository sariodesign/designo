import { Project, ProjectProps } from "./ProjectBlock"

export function ProjectList({projects}:{projects: ProjectProps[]}) {


	return (
		<div className="px-6 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 md:px-0 md:mb-40">
			{projects.map(item => <Project key={item.name}  {...item}/>)}
		</div>
	)
}