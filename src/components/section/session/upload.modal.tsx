import UploadIcon from "@/asset/icons/system/UploadCloud.svg"
import Button from "@/components/button"
import Image from "next/image"

export default function AssignmentUploadModal() {
	return (
		<dialog id="assignment_upload_modal" className="modal">
			<div className="p-1 modal-box min-w-[54rem]">
				<form method="dialog">
					<button className="absolute top-9 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
				<h4 className="px-7 py-12 text-center text-heading-md">Upload Homework</h4>
				<div className="flex flex-col justify-center items-center">
                    <div className="flex w-[30rem] h-60 justify-center items-center">
                        <Image className="w-12 h-12 filter-gray-400" src={UploadIcon} alt="upload" />
                    </div>
					<span className="text-heading-2xs">Upload a document or other attachment</span>
				</div>
				<div className="flex flex-col items-center gap-5 p-7 mt-10">
					<Button
						className="tz-primary tz-md min-w-[17rem]"
						onClick={() => {
							const modal = document.getElementById(
								"assignment_upload_modal",
							) as HTMLDialogElement
							modal.close("close")
						}}
					>
						Assign
					</Button>
				</div>
			</div>
		</dialog>
	)
}
