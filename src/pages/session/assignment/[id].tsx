import DownloadIcon from "@/asset/icons/system/Download.svg"
import Avatar from "@/components/avatar"
import Button from "@/components/button"
import GenericIconButton from "@/components/button/genericIcon"
import Pill from "@/components/pill"
import AssignmentUploadModal from "@/components/section/session/upload.modal"
import { useRouter } from "next/router"
import "react-calendar/dist/Calendar.css"

export default function SessionAssignmentPage() {
	const router = useRouter()

	return (
		<div className="flex flex-col mt-24">
			<div className="p-8 flex flex-col gap-8">
				<div className="grid grid-cols-7 gap-7">
					<div className="flex-1 border-2 border-gray-50 rounded-2xl col-span-5">
						<div className="flex rounded-tl-2xl rounded-tr-2xl w-full relative overflow-hidden">
							<div className="flex-1 p-20 flex flex-col justify-between border-r-[3px] border-r-gray-200 gap-10 z-10 bg-gray-50">
								<div className="flex flex-col gap-5">
									<div className="flex flex-col gap-2">
										<span className="text-lead-xl text-primary">Tuesday</span>
										<span className="text-display-md">Jun 17, 2023</span>
										<div className="flex items-center gap-6">
											<Pill className="tz-md tz-secondary bg-secondary">
												Completed
											</Pill>
											<span className="text-lg font-roboto">
												48 minutes, 12 seconds
											</span>
										</div>
									</div>
									<div className="flex flex-wrap gap-4 mt-12">
										<Button className="tz-sm tz-quaternary rounded-lg">
											Family Issues
										</Button>
										<Button className="tz-sm tz-quaternary rounded-lg">
											Anxiety
										</Button>
									</div>
								</div>
							</div>

							<div className="flex flex-col py-10 px-6 gap-10 w-[26rem] items-center z-10 bg-gray-50">
								<div className="flex flex-col gap-8">
									<Avatar className="w-56" url="/assets/img/jenna.png" />
									<span className="text-heading-xs text-center">
										Janna Johnson
									</span>
								</div>

								<Button
									onClick={() => {
										router.push("/provider/profile/jenna")
									}}
									className="tz-md tz-quaternary !w-48"
								>
									View profile
								</Button>
							</div>
						</div>
					</div>
					<div className="col-span-2">
						<div className="flex flex-col gap-7 py-7 px-10 rounded-2xl border-2 border-gray-50 bg-white items-center">
							<span className="text-heading-md text-center">
								No homework assigned for this session
							</span>
							<Button
								className="tz-md tz-tertiary !w-60 !max-w-full"
								onClick={() => {
									const modal = document.getElementById(
										"assignment_upload_modal",
									) as HTMLDialogElement
									modal.showModal()
								}}
							>
								Assign homework
							</Button>
						</div>
					</div>
				</div>
			</div>

			<h2 className="py-10 px-9 text-heading-sm">Previous Assignments</h2>

			<div className="px-12 py-6 flex flex-col gap-4">
				<div className="flex py-5 gap-4 items-center border-b-2 border-b-gray-50">
					<img
						className="w-[3.75rem] h-[3.75rem] rounded-lg"
						src="/assets/img/pdf.png"
						alt="pdf"
					/>
					<div className="flex-1 flex flex-col gap-1">
						<div className="flex gap-2">
							<span className="flex-1 text-lg font-medium">Coping Skills Log</span>
							<GenericIconButton
								size="1.5rem"
								icon={DownloadIcon}
							></GenericIconButton>
						</div>
						<span className="text-sm font-roboto opacity-50">PDF</span>
					</div>
				</div>

				<div className="flex py-5 gap-4 items-center border-b-2 border-b-gray-50">
					<img
						className="w-[3.75rem] h-[3.75rem] rounded-lg"
						src="/assets/img/pdf.png"
						alt="pdf"
					/>
					<div className="flex-1 flex flex-col gap-1">
						<div className="flex gap-2">
							<span className="flex-1 text-lg font-medium">Coping Skills Log</span>
							<GenericIconButton
								size="1.5rem"
								icon={DownloadIcon}
							></GenericIconButton>
						</div>
						<span className="text-sm font-roboto opacity-50">PDF</span>
					</div>
				</div>
			</div>

            <AssignmentUploadModal />
		</div>
	)
}
