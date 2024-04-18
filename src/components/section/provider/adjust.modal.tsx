import Button from "@/components/button"
import { useState } from "react"

export default function AdjustPriceModal({ price, onSave }: { price: number, onSave: Function }) {
	const [value, setValue] = useState(50)

	return (
		<dialog id="adjust_price_modal" className="modal">
			<div className="modal-box min-w-[30rem] p-0">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-9">
						✕
					</button>
				</form>
				<div className="flex flex-col px-11 py-16 gap-12 items-center">
					<div className="flex flex-col gap-5 items-center">
						<div className="flex flex-col gap-3 items-center">
							<span className="text-heading-2xs">Adjust Jakob{"'"}s Prices</span>
							<span className="text-md text-gray-700 tracking-wider">
								You can adjust prices on an individual-basis.
							</span>
						</div>
						<div className="flex items-center rounded-xl border border-gray-100 px-10 py-2">
							<span className="text-heading-lg">$</span>
							<span className="text-display-sm">{value}</span>
							<span className="text-heading-lg pt-6">/hr</span>
						</div>
						<div className="flex items-center gap-3 w-full">
							<span>Free</span>
							<input
								type="range"
								min={0}
								max={1000}
								defaultValue={value}
								onChange={(e) => {
									console.log(e)
									setValue(parseInt(e.target.value))
								}}
								className="range range-primary range-xs"
							/>
							<span>$1000</span>
						</div>
					</div>

					<Button
						className="tz-md tz-primary !w-40"
						onClick={() => {
                            onSave(value)
							const modal = document.getElementById(
								"adjust_price_modal",
							) as HTMLDialogElement
							modal.close("hide")
						}}
					>
						Save
					</Button>
				</div>
			</div>
		</dialog>
	)
}
