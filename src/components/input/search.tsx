import SearchIcon from "@/asset/icons/system/Search.svg"
import classNames from "classnames"
import Image from "next/image"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export default function SearchInput({
	fullHeight = false,
	placeholder = "Content, resources, tip",
	...props
}: {
	fullHeight?: boolean,
	placeholder?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<div className={classNames("relative", props.className)}>
			<span className="absolute items-center pl-4 font-bold h-center text-heading-lg">
				<Image className="h-5 w-5" src={SearchIcon} alt="search" />
			</span>
			<input
				type="text"
				placeholder={placeholder}
				className={classNames("input !border-2 !border-gray-50 w-full py-2 pl-12", {
					'h-full': fullHeight
				})}
			/>
		</div>
	)
}
