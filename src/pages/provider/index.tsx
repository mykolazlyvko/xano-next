import CheckmarkIcon from "@/asset/icons/display/Checkmark.svg"
import InboxIcon from "@/asset/icons/display/Inbox.svg"
import MessagingIcon from "@/asset/icons/display/Messaging.svg"
import UserIcon from "@/asset/icons/display/User.svg"
import DownloadIcon from "@/asset/icons/system/Download.svg"
import FilterButton from "@/components/button/filter"
import SearchInput from "@/components/input/search"
import ClientDownloadModal from "@/components/section/provider/modals/download.modal"
import ClientFilterModal from "@/components/section/provider/modals/filter.modal"
import ProviderTableSection from "@/components/section/provider/provider.table"
import Image from "next/image"
import { useState } from "react"

export default function ProviderPage() {
	const [filters, setFilters] = useState<Record<string, boolean>>({})

	return (
		<div className="mt-24 flex flex-col">
			<div className="flex flex-col gap-7 p-8">
				<h1 className="font-medium text-heading-2xl">My Clients</h1>
				<div className="grid grid-cols-4 gap-14">
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={UserIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Active Clients</span>
							<span className="text-heading-lg">68</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={InboxIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Total Clients</span>
							<span className="text-heading-lg">380</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={CheckmarkIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Completed Sessions</span>
							<span className="text-heading-lg">3500</span>
						</div>
					</div>
					<div className="p-5 rounded-2xl border-2 border-gray-50 flex gap-7">
						<div className="p-4 rounded-full bg-gray-25">
							<Image className="w-10 h-10" src={MessagingIcon} alt="user" />
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xl text-gray-400">Consultations</span>
							<span className="text-heading-lg">18</span>
						</div>
					</div>
				</div>
				<div className="flex gap-14">
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
			<ProviderTableSection />
			<ClientDownloadModal />
			<ClientFilterModal
				onConfirm={(filters: any) => {
					setFilters(filters)
				}}
			/>
		</div>
	)
}
