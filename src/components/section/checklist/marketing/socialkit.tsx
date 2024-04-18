import ArrowTopRightIcon from "@/asset/icons/system/ArrowTopRight.svg"
import LinkButton from "@/components/button/link"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

export default function ChecklistMarketingSocialKitSection() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h3 className="flex-1 font-medium text-heading-sm">Social Kits</h3>
				<LinkButton className="tz-md tz-secondary">view all</LinkButton>
			</div>
			<div className="mx-auto max-w-[110rem]">
				<Swiper
					slidesPerView={3}
					spaceBetween={28}
					modules={[Autoplay]}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false,
					}}
					className="w-full"
				>
					<SwiperSlide className="!h-[33.25rem]">
						<div className="flex flex-col px-10 py-[4.5rem] rounded-2xl bg-secondary gap-3 justify-center h-full">
							<div>
								<div className="p-4 bg-white rounded-full inline-flex">
									<img src="/assets/img/icon/phone.png" alt="phone" />
								</div>
							</div>
							<span className="text-heading-2xl">
								Download social media kits tailored to you
								<Image
									className="inline-block brightness-0 invert ml-4 w-10 h-10"
									src={ArrowTopRightIcon}
									alt="arrow"
								/>
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className="!h-[33.25rem]">
						<div className="rounded-2xl bg-gray-50 flex flex-col overflow-hidden h-full">
							<img src="/assets/img/social/01.png" className="rouned-2xl" />
							<div className="flex flex-col px-10 py-8 gap-5">
								<span className="text-heading-lg">Story Templates</span>
								<div className="flex flex-col">
									<LinkButton className="tz-xl text-primary self-start">
										View IG templates
									</LinkButton>
									<LinkButton className="tz-xl text-primary self-start">
										View FB templates
									</LinkButton>
									<LinkButton className="tz-xl text-primary self-start">
										View Linkedin templates
									</LinkButton>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="!h-[33.25rem]">
						<div className="rounded-2xl bg-gray-50 flex flex-col overflow-hidden h-full">
							<img src="/assets/img/social/02.png" className="rouned-2xl" />
							<div className="flex flex-col px-10 py-8 gap-5">
								<span className="text-heading-lg">Story Templates</span>
								<div className="flex flex-col">
									<LinkButton className="tz-xl text-primary self-start">
										View IG templates
									</LinkButton>
									<LinkButton className="tz-xl text-primary self-start">
										View FB templates
									</LinkButton>
									<LinkButton className="tz-xl text-primary self-start">
										View Linkedin templates
									</LinkButton>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="!h-[33.25rem]">
						<div className="rounded-2xl bg-gray-50 flex flex-col overflow-hidden h-full">
							<img src="/assets/img/social/03.png" className="rouned-2xl" />
							<div className="flex flex-col px-10 py-8 gap-5">
								<span className="text-heading-lg">zant Assets</span>
								<div className="flex flex-col">
									<LinkButton className="tz-xl text-primary self-start">
										Download Assets
									</LinkButton>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
