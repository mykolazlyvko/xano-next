import Button from "../button"
import RescheduleModal from "../section/provider/modals/reschedule.modal"

export default function ClientSessionCard() {
	return (
		<div className="rounded-2xl bg-gray-50 flex flex-col px-10 py-8 gap-8">
			<div className="flex flex-col">
				<span className="text-lead-2xl">Thursday</span>
				<span className="text-display-xl">Jun 18</span>
				<div className="flex gap-3 items-center">
					<div className="badge badge-secondary badge-xs" />
					<span className="text-md">9:00 - 10:00 am</span>
				</div>
			</div>
			<Button className="tz-md tz-primary" onClick={() => {
                const modal = document.getElementById(
                    "reschedule_modal",
                ) as HTMLDialogElement
                modal.showModal()
            }}>Reschedule</Button>
            <RescheduleModal />
		</div>
	)
}
