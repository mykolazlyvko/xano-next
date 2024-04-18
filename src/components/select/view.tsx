import EyeIcon from "@/asset/icons/system/Eye.svg"
import CaretDownIcon from "@/asset/icons/system/CaretDown.svg"
import Image from "next/image"
import { useState } from "react"

export default function ProfileViewSelect() {
	const [value, setValue] = useState("Profile views")
	return (
		<details className="dropdown">
			<summary tabIndex={0} role="button" className="flex gap-1 cursor-pointer">
				<Image className="filter-gray-400" src={EyeIcon} alt="calender check" />
				<span className="font-roboto text-md text-gray-700">{value}</span>
				<Image className="filter-gray-400" src={CaretDownIcon} alt="caret down" />
			</summary>
			<ul
				tabIndex={0}
				className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a onClick={() => setValue("Profile views")}>Profile views</a>
				</li>
				<li>
					<a onClick={() => setValue("Profile views")}>Profile views</a>
				</li>
				<li>
					<a onClick={() => setValue("Profile views")}>Profile views</a>
				</li>
			</ul>
		</details>
	)
}
