import UserIcon from "@/asset/icons/display/User.svg"
import Image from "next/image"

export default function StatCard({ title, value }: { title: string; value: string }) {
	return (
		<div className="flex gap-7 p-5 bg-white border-2 border-gray-50 rounded-2xl">
			<div className="p-5 rounded-full bg-gray-25">
				<Image className="w-8 h-8" src={UserIcon} alt="user" />
			</div>
			<div className="flex flex-col">
				<span className="text-xl text-gray-400">{title}</span>
				<span className="text-heading-lg">{value}</span>
			</div>
		</div>
	)
}
