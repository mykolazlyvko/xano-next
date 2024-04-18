import SearchInput from "@/components/input/search"
import MonthSelect from "@/components/select/month"
import { colors } from "@/types/color"
import {
	BarElement,
	CategoryScale,
	ChartData,
	Chart as ChartJS,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	BarController
} from "chart.js"
import { useState } from "react"
import { Chart } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, BarController, Title, Tooltip)

export default function StatsPage() {
	const [activityData, setActivityData] = useState<ChartData<"bar", number[], string>>({
		labels: ["1", "2", "3", "4"],
		datasets: [
			{
				label: "Consultations",
				data: [223, 500, 421, 625],
				backgroundColor: colors["primary"],
			},
			{
				label: "Paid Sessions",
				data: [150, 390, 236, 203],
				backgroundColor: colors["secondary"],
			},
		],
	});

	return (
		<div className="mt-24 flex flex-col">
			<div className="fixed top-5 right-40 left-24 z-50 pl-8">
				<SearchInput placeholder="Search" />
			</div>

			<div className="p-8 flex flex-col gap-7">
				<div className="flex gap-7 items-center">
					<span className="text-heading-2xl">Statistics</span>
				</div>
				<div className="grid grid-cols-3 gap-7">
					<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl relative">
						<div className="flex flex-col flex-1">
							<span className="font-roboto text-md">Total clients</span>
							<span className="text-display-sm leading-[5.75rem]">23</span>
						</div>
						<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">
							+ 5%
						</div>
					</div>
					<div className="px-7 py-5 flex gap-5 items-center bg-gray-50 rounded-xl relative">
						<div className="flex flex-col flex-1">
							<span className="font-roboto text-md">Hours spent in sessions</span>
							<span className="text-display-sm leading-[5.75rem]">100</span>
						</div>
						<div className="px-3 py-1 text-xs rounded-md border-[1px] border-black">
							+ 5%
						</div>
					</div>
					<div className="px-7 py-5 flex gap-5 items-center bg-black rounded-xl relative">
						<div className="flex flex-col flex-1">
							<span className="font-roboto text-md text-white">Income</span>
							<span className="text-display-sm text-white leading-[5.75rem]">
								$27,300
							</span>
						</div>
						<div className="px-3 py-1 text-xs rounded-md text-white border-white border-[1px]">
							+ 5%
						</div>
					</div>
				</div>
			</div>

			<div className="px-8 py-14 grid grid-cols-2 gap-7">
				<div className="flex flex-col gap-8">
					<div className="flex gap-4 items-center">
						<span className="text-heading-sm">Profile engagement</span>
						<MonthSelect />
					</div>
					<img src="/assets/img/chart/chart1.png" alt="Profile engagement" />
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex gap-4 items-center">
						<span className="text-heading-sm">Consultations vs. Paid Sessions</span>
						<MonthSelect onChange={(val: number) => {
							switch(val) {
								case 0: {
									setActivityData({
										labels: ["1", "2", "3", "4", "5", "6", "7"],
										datasets: [
											{
												label: "Consultations",
												data: [100, 250, 420, 620, 430, 180, 150],
												backgroundColor: colors["primary"],
											},
											{
												label: "Paid Sessions",
												data: [150, 390, 530, 790, 620, 200, 180],
												backgroundColor: colors["secondary"],
											},
										],
									});
									break;
								}
								case 1: {
									setActivityData({
										labels: ["1", "2", "3", "4"],
										datasets: [
											{
												label: "Consultations",
												data: [223, 500, 421, 625],
												backgroundColor: colors["primary"],
											},
											{
												label: "Paid Sessions",
												data: [150, 390, 236, 203],
												backgroundColor: colors["secondary"],
											},
										],
									});
									break;
								}
								case 2: {
									setActivityData({
										labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
										datasets: [
											{
												label: "Consultations",
												data: [414,132,434,145,352,234,562,421,255,625,331,725],
												backgroundColor: colors["primary"],
											},
											{
												label: "Paid Sessions",
												data: [414,132,434,145,352,234,562,421,255,625,331,725],
												backgroundColor: colors["secondary"],
											},
										],
									});
									break;
								}
							}
						}} />
					</div>
					<div className="flex flex-col bg-gray-25 rounded-2xl p-6 gap-6">
						<Chart
							type="bar"
							data={activityData}
							options={{
								plugins: {
									legend: {
										display: false,
									},
								},
								responsive: true,
								scales: {
									x: {
										stacked: true,
										grid: {
											display: false,
										},
									},
									y: {
										stacked: true,
									},
								},
							}}
						></Chart>
					</div>
				</div>
			</div>
		</div>
	)
}
