import Button from "@/components/button"
import LinkButton from "@/components/button/link"
import CheckboxInput from "@/components/input/checkbox"
import { ClientFilterTypes } from "@/constant"
import { useEffect, useState } from "react"

export default function ClientFilterModal({ values = ClientFilterTypes, onConfirm }: { values?: string[], onConfirm: Function }) {
	const [filters, setFilters] = useState<Record<string, boolean>>({})

	useEffect(() => {
		const services: Record<string, boolean> = {}
		values.forEach((item) => {
			services[item] = false
		})
		setFilters(services)
	}, [])

	return (
		<dialog id="client_filter_modal" className="modal">
			<div className="p-1 modal-box min-w-[54rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<h4 className="px-7 py-12 text-center text-lead-md">Filter</h4>
				<div className="flex flex-col gap-8 overflow-auto px-20 py-3 max-h-[32rem] scrollbar">
					<div className="flex flex-1 flex-col gap-5">
						<h3 className="font-medium text-heading-md">Filter Clients</h3>
						<div className="flex flex-col flex-wrap h-[12rem]">
							{values.map((item, i) => (
								<CheckboxInput
									key={i}
									label={item}
									checked={filters[item]}
									onClicked={() => {
										const dump = { ...filters }
										dump[item] = !filters[item]
										setFilters(dump)
									}}
								/>
							))}
						</div>
					</div>
					<hr />
				</div>
				<div className="flex flex-col items-center gap-5 p-7">
					<Button
						className="tz-primary tz-md min-w-[17rem]"
						onClick={() => {
							onConfirm(filters)
							const modal = document.getElementById(
								"client_filter_modal",
							) as HTMLDialogElement
							modal.close("close")
						}}
					>
						Confirm
					</Button>
					<LinkButton
						className="tz-md tz-secondary"
						onClick={() => {
							setFilters({})
						}}
					>
						Clear all
					</LinkButton>
				</div>
			</div>
		</dialog>
	)
}
