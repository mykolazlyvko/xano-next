import Avatar from "@/components/avatar"
import Button from "@/components/button"
import Logo from "@/components/logo"
import Link from "next/link"

export default function Index() {
	return (
		<div className="relative flex min-h-screen flex-col bg-center">
			<video
				className="absolute h-full w-full self-stretch object-cover brightness-50 center"
				autoPlay
				loop
				muted
			>
				<source src="/assets/img/onboarding.mov" type="video/mp4"></source>
				Your browser does not support the video tag.
			</video>
			<header className="flex justify-center py-12">
				<Logo className="!brightness-0 !invert w-[7.5rem] h-10" />
			</header>
			<div className="flex flex-1 grow flex-col items-center justify-between gap-40 self-stretch px-[6rem] pb-[7.5rem]">
				<div className="z-10 flex w-full items-center self-stretch gap-[7.5rem]">
					<div className="flex-1 font-bold text-display-3xl">
						<div className="font-bold text-white font-neue">a network for</div>
						<div className="font-bold text-secondary font-neue">empowering</div>
						<div className="font-bold text-secondary font-neue">providers</div>
					</div>
					<div className="flex flex-col items-start w-[28.75rem] gap-[3.75rem]">
						<div className="flex w-full flex-col items-start gap-6 self-stretch">
							<div className="self-stretch font-bold text-white text-heading-2xl">
								Join Today
							</div>
							<p className="self-stretch text-white text-extra font-regular">
								zant is your comprehensive business ally, providing you with client
								management tools, increased visibility, and dedicated support for
								practice growth.
							</p>
						</div>
						<Link href="/auth" className="w-full">
							<Button className="!w-full tz-md tz-secondary">Get Started</Button>
						</Link>
					</div>
				</div>
				<div className="flex items-center justify-center self-stretch gap-[4.25rem]">
					<Avatar url="/assets/img/ads_avatar/avatar_01.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_02.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_03.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_04.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_05.png" />
					<Avatar url="/assets/img/ads_avatar/avatar_06.png" />
				</div>
			</div>
		</div>
	)
}

Index.plainLayout = true
