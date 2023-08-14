import Link from "next/link"

export enum BtnVariant {
	Primary,
	Light
}

export interface BtnProps {
	label: string,
	href?: string,
	type?: 'submit' | 'button' | 'reset',
	variant: BtnVariant
}

const btnBaseCls = "inline-block max-w-fit py-[16px] px-7 rounded-[8px] text-base transition uppercase"
const btnPrimaryCls = "bg-peach text-white"
const btnLightCls = "bg-white text-black hover:bg-light-peach"

export function Btn({...props}: BtnProps) {

	const btnClasses = props.variant === BtnVariant.Primary ? `${btnBaseCls} ${btnPrimaryCls}` : `${btnBaseCls} ${btnLightCls}`

	return (
		props.href ? (
			<Link className={btnClasses} href={props.href}>{props.label}</Link>
		) : (
			<button className={btnClasses} type={props.type}>{props.label}</button>
		)
	)
}