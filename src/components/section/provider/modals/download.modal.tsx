import Button from "@/components/button";

export default function ClientDownloadModal() {
	return (
		<dialog id="download_modal" className="modal">
			<div className="p-0 modal-box max-w-[35rem]">
				<form method="dialog">
					<button className="absolute top-5 right-6 btn btn-sm btn-circle btn-ghost">
						✕
					</button>
				</form>
                <div className="flex flex-col gap-8 px-16 py-16 items-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-heading-2xs text-center">Are you sure you want to download?</span>
                        <span className="text-gray-800 text-center">Click download to export the selected client information</span>
                    </div>
                    <Button className="tz-md tz-primary !w-80" onClick={() => {
							const modal = document.getElementById(
								"download_modal",
							) as HTMLDialogElement
							modal.close("close")
						}}>Download</Button>
                </div>
			</div>
		</dialog>
	)
}
