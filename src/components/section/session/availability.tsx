import PlusCircleIcon from "@/asset/icons/system/PlusCircle.svg"
import GenericIconButton from "@/components/button/genericIcon"
import MyCalendar from "@/components/calendar"
import DateSelectItem from "@/components/select/date"
import ScheduleModal from "./schedule.modal"

export default function ManageAvailabilitySection() {
	return (
		<div className="bg-gray-25 gap-8 grid grid-cols-4 px-8 py-14">
			<div className="col-span-3 flex flex-col bg-white rounded-2xl border-2 border-gray-50">
				<div className="flex flex-col gap-2 px-12 py-10 border-b border-b-gray-200">
					<span className="text-heading-sm">My Availability</span>
					<span className="text-xl">Set your global availability</span>
				</div>
				<div className="flex flex-col gap-10 w-full p-12">
					<div className="grid grid-cols-3 gap-4">
						<div className="flex flex-col gap-1">
							<span className="text-heading-2xs">Timezone</span>
							<span className="text-sm text-gray-700">Set your timezone</span>
						</div>
						<select className="col-span-2 select w-full h-full rounded-none border-[1px] border-gray-50">
							<option selected>UTC - 8:00 (Pacific Time)</option>
						</select>
					</div>
					<hr />
					<DateSelectItem label="Monday" /> <hr />
					<DateSelectItem label="Tuesday" /> <hr />
					<DateSelectItem label="Wednesday" /> <hr />
					<DateSelectItem label="Thursday" /> <hr />
					<DateSelectItem label="Friday" /> <hr />
					<DateSelectItem label="Saturday" defaultValue={false} /> <hr />
					<DateSelectItem label="Sunday" defaultValue={false} /> <hr />
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<MyCalendar />
				<div className="flex gap-5 p-8 items-center bg-white rounded-2xl border-2 border-gray-50">
					<div className="flex-1 flex flex-col gap-2">
						<span className="text-heading-2xs">Specific Date Override</span>
						<span className="text-md">Change availability for a specific date</span>
					</div>
					<GenericIconButton
						className="filter-primary"
						size="2rem"
						icon={PlusCircleIcon}
						onClick={() => {
							const modal = document.getElementById(
								"schedule_modal",
							) as HTMLDialogElement
							modal.showModal()
						}}
					/>
				</div>
			</div>
			<ScheduleModal />
		</div>
	)
}
