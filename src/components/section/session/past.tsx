import DownloadIcon from "@/asset/icons/system/Download.svg"
import ArrowLineDownIcon from "@/asset/icons/system/ArrowLineDown.svg"
import FilterButton from "@/components/button/filter"
import GenericIconButton from "@/components/button/genericIcon"
import SearchInput from "@/components/input/search"
import Pagination from "@/components/pagination"
import { useRouter } from "next/router"
import { useState } from "react"
import ClientDownloadModal from "../provider/modals/download.modal"
import ClientFilterModal from "../provider/modals/filter.modal"
import { PaymentFilterTypes } from "@/constant"

export default function PastSessionSection() {
	const router = useRouter()
	const [users, setUsers] = useState<
		{
			url: string
			fullName: string
			homework: boolean
			date: string
			length: number
		}[]
	>([
		{
			url: "/assets/img/avatar/avatar_user1.png",
			fullName: "Jacob Petal",
			homework: true,
			date: "Jan 01, 2023",
			length: 0,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			fullName: "Allison Smith",
			homework: false,
			date: "Jan 01, 2023",
			length: 1,
		},
		{
			url: "/assets/img/avatar/avatar_user3.png",
			fullName: "Katie Moore",
			homework: false,
			date: "Jan 01, 2023",
			length: 2,
		},
		{
			url: "/assets/img/avatar/avatar_user4.png",
			fullName: "John Smith",
			homework: false,
			date: "Jan 01, 2023",
			length: 3,
		},
		{
			url: "/assets/img/avatar/avatar_user5.png",
			fullName: "Maggie Jones",
			homework: true,
			date: "Jan 01, 2023",
			length: 4,
		},
		{
			url: "/assets/img/avatar/avatar_user6.png",
			fullName: "Catherin McAdams",
			homework: true,
			date: "Jan 01, 2023",
			length: 5,
		},
		{
			url: "/assets/img/avatar/avatar_user1.png",
			fullName: "Joel Ryan",
			homework: true,
			date: "Jan 01, 2023",
			length: 6,
		},
		{
			url: "/assets/img/avatar/avatar_user2.png",
			fullName: "Riley Daniels",
			homework: false,
			date: "Jan 01, 2023",
			length: 7,
		},
	])
	return (
		<div className="flex flex-col bg-gray-25">
			<div className="flex flex-col py-10 px-8 gap-7">
				<div className="flex gap-14 py-6">
					<SearchInput fullHeight className="flex-1" placeholder="Search transactions" />
					<div className="flex gap-3">
						<FilterButton
							onClick={() => {
								const modal = document.getElementById(
									"client_filter_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>
							Filter
						</FilterButton>
						<FilterButton
							icon={DownloadIcon}
							onClick={() => {
								const modal = document.getElementById(
									"download_modal",
								) as HTMLDialogElement
								modal.showModal()
							}}
						>
							Export
						</FilterButton>
					</div>
				</div>
			</div>
			<table className="table-auto table-zebra w-full">
				<thead>
					<tr>
						<th>
							<input className="checkbox rounded-none" type="checkbox" />
						</th>
						<th className="text-heading-2xs text-primary">Full Name</th>
						<th className="text-heading-2xs">Homework</th>
						<th className="text-heading-2xs">Date Assigned</th>
						<th className="text-heading-2xs"># of Assignments</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, k) => (
						<tr key={k}>
							<td>
								<input className="checkbox rounded-none" type="checkbox" />
							</td>
							<td
								className="cursor-pointer"
								onClick={() => {
									router.push(
										"/session/assignment/" + user.fullName.substring(1),
									)
								}}
							>
								<span className="flex gap-10 text-heading-2xs items-center">
									<img
										className="w-[5.25rem] h-[5.25rem]"
										src={user.url}
										alt="avatar"
									/>
									{user.fullName}
								</span>
							</td>
							<td className="text-heading-2xs font-regular">
								<div className="flex gap-6">
									<span className="text-heading-2xs font-regular">
										{user.homework ? "Assigned" : "Not Assigned"}
									</span>
								</div>
							</td>
							<td className="text-heading-2xs font-regular">{user.date}</td>
							<td className="text-heading-2xs font-regular">{user.length}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="py-20 text-center">
				<Pagination />
			</div>
			<ClientDownloadModal />
			<ClientFilterModal values={PaymentFilterTypes} onConfirm={(filters: any) => {}} />
		</div>
	)
}
