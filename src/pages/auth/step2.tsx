import CaretLeftIcon from "@/asset/icons/system/CaretLeft.svg"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Step2Page() {
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [agree, setAgree] = useState(false)
	const router = useRouter()

	return (
		<div className="flex min-h-screen flex-col">
			<Link href={"/auth/login"}>
				<button className="absolute left-10 top-16 btn !w-auto !h-auto !p-0 !border-none">
					<Image className="h-9 w-9" src={CaretLeftIcon} alt="close" />
				</button>
			</Link>
			<header className="flex justify-center py-12">
				<Logo className="w-[7.5rem] h-[3.75rem]" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-20 self-stretch py-12 px-[7.5rem]">
				<div className="flex flex-col items-center gap-4">
					<div className="text-gray-400 text-lead-md">Sign up</div>
					<div className="text-center font-bold text-heading-3xl">
						Thanks, Jenna. We just need a few
						<br />
						more details from you.
					</div>
				</div>
				<div className="flex flex-1 flex-col justify-between">
					<div className="flex flex-col gap-5">
						<div className="flex gap-6">
							<input
								type="text"
								placeholder="Phone number"
								className="rounded-none input input-lg input-bordered w-[26rem]"
								onChange={(e) => setPhone(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Email"
								className="rounded-none input input-lg input-bordered w-[26rem]"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						{/* <div className="mt-2 form-control">
							<label className="cursor-pointer justify-start gap-2 label">
								<input
									type="checkbox"
									checked={agree}
									onChange={(e) => setAgree(e.target.checked)}
									className="rounded-full checkbox checkbox-sm checkbox-secondary [--chkfg:white]"
								/>
								<span className="label-text text-md">
									I certify that I am 18 years of age or older, and I agree to the{" "}
									<Link href={""} className="underline text-link-md">
										User Agreement
									</Link>{" "}
									and{" "}
									<Link href={""} className="underline text-link-md">
										Privacy Policy
									</Link>
								</span>
							</label>
						</div> */}
					</div>
					<Button
						className="tz-lg tz-secondary self-center !w-[15rem]"
						disabled={!phone || !email}
						onClick={() => {
							router.push("step3")
						}}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

Step2Page.plainLayout = true;
