export default function ProfileSettingsHelp() {
	return (
		<div className="flex flex-col gap-7">
			<h3 className="text-heading-2xs">Help</h3>

			<div className="flex gap-7">
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center h-full">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar02.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Provider Operations</span>
						<span className="text-link-xl text-primary underline">
							providers@zant.app
						</span>
					</div>
				</div>
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center h-full">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar01.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Technical Support</span>
						<span className="text-link-xl text-primary underline">
							support@zant.app
						</span>
					</div>
				</div>
				<div className="flex-1 flex gap-5 border-2 border-gray-50 rounded-2xl p-8 items-center h-full">
					<div className="avatar">
						<div className="w-20 rounded-xl">
							<img src="/assets/img/avatar/xs/avatar03.png" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-heading-2xs">Inquiries</span>
						<span className="text-link-xl text-primary underline">
							zant@zant.app
						</span>
					</div>
				</div>
			</div>

			<div className="tracking-widest text-heading-2xs font-regular">
				Welcome to Our Help Center!
				<br />
				<br />
				<br />
				Need assistance? You{"'"}re in the right place! Our Help Center is your go-to resource
				for all things related to our software and application. Whether you have questions
				about account settings, troubleshooting, or simply want to explore the features that
				make our platform amazing, we{"'"}ve got you covered.
				<br />
				<br />
			</div>

			<ul className="list-disc pl-5">
				<li className="font-normal tracking-widest text-heading-2xs underline">
					How To Use The zant Provider Application
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					How To Leverage PR Efforts
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Strategies To Grow Your Practice With zant
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Technical Library
				</li>
				<li className="font-normal tracking-widest text-heading-2xs underline">
					Additional Resources
				</li>
			</ul>

			<div className="tracking-widest text-heading-2xs font-regular">
				<br />
				Need more support?
				<br />
				Contact our team by emailing us at the contacts above or visit our website www.zant.app
			</div>
		</div>
	)
}
