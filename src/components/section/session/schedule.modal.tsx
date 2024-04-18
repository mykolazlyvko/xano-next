import TrashIcon from "@/asset/icons/system/Trash.svg"
import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import GenericIconButton from "@/components/button/genericIcon"
import LinkButton from "@/components/button/link"
import MyCalendar from "@/components/calendar"

export default function ScheduleModal() {
	return (
		<dialog id="schedule_modal" className="modal">
			<div className="p-0 pb-6 modal-box">
				<form method="dialog">
					<button className="absolute top-4 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<div className="flex flex-col gap-6">
					<MyCalendar />

					<div className="px-10 flex gap-2">
						<div className="flex-1 grid grid-cols-2 gap-8">
							<div className="relative">
								<span className="absolute items-center pl-4 h-center text-gray-700">
									From
								</span>
								<input
									type="text"
									className="input input-bordered rounded-none pl-16 w-full"
									value="9:00 am"
								/>
							</div>
							<div className="relative">
								<span className="absolute items-center pl-4 h-center text-gray-700">
									To
								</span>
								<input
									type="text"
									className="input input-bordered rounded-none pl-16 w-full"
									value="5:00 pm"
								/>
							</div>
						</div>
						<GenericIconButton
							className="self-end mb-4"
							iconClassName="filter-primary"
							size="1.25rem"
							icon={TrashIcon}
						/>
					</div>

					<div className="px-10 text-right">
						<LinkButton className="tz-md tz-primary self-end">
							Add another block
							<GenericIconButton
								iconClassName="filter-primary"
								size="1.25rem"
								icon={PlusCircleIcon}
							/>
						</LinkButton>
					</div>
				</div>
			</div>
		</dialog>
	)
}
