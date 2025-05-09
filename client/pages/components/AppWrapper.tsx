import Dashboard from "@/components/dashboard/page"
import Header from "@/components/sidebars/header/page"



const Wrapper = () => {
	return (
		<div className="p-5">
			<div className="bg-[#f3f3f3] rounded-lg min-h-screen">
				<Header />
				<Dashboard />
			</div>
		
		</div>
	)
}

export default Wrapper