import Button from "@/components/button";
import LinkButton from "@/components/button/link";
import LoginButton from "@/components/button/login";
import Logo from "@/components/logo";
import AppleIcon from "@/asset/icons/system/Apple.svg";
import FacebookIcon from "@/asset/icons/system/Facebook.svg";
import GoogleIcon from "@/asset/icons/system/Google.svg";
import CloseIcon from "@/asset/icons/system/X.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Link href={"/auth"}>
				<button className="absolute right-10 top-16 btn !w-auto !h-auto !p-0 !border-none">
					<Image className="h-9 w-9" src={CloseIcon} alt="close" />
				</button>
			</Link>
			<header className="flex justify-center py-9">
				<Logo className="h-24 w-[20rem]" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-5 self-stretch p-10">
				<div className="flex gap-6">
					<input type="text" placeholder="First Name" className="rounded-none input input-lg input-bordered w-[26rem]" />
					<input type="text" placeholder="Last Name" className="rounded-none input input-lg input-bordered w-[26rem]" />
				</div>
				<LinkButton className="tz-secondary !text-extra">
					Forgot Password
				</LinkButton>
				<Link href="/auth/step1">
					<Button className="tz-lg tz-secondary !w-[33rem]">Login</Button>
				</Link>
			</div>
			<div className="flex flex-col items-center gap-6 self-stretch p-10 bg-gray-25">
				<LoginButton className="!w-[33rem] tz-lg">
					<Image src={AppleIcon} alt="apple"></Image><span>Login with Apple</span>
				</LoginButton>
				<LoginButton className="!w-[33rem] tz-lg">
					<Image src={FacebookIcon} alt="apple"></Image><span>Login with Facebook</span>
				</LoginButton>
				<LoginButton className="!w-[33rem] tz-lg">
					<Image src={GoogleIcon} alt="apple"></Image><span>Login with Google</span>
				</LoginButton>
			</div>
		</div>
	)
}

LoginPage.plainLayout = true;
