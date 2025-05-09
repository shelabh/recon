'use client'
import { Button } from "@/components/ui/button"



const Header = () => {
	return (
		<>
			<div className="w-full p-7 ">
				<div className="max-w-7xl rounded-lg  drop-shadow-lg mx-auto bg-[#FAFAFA] text-[#333333] flex flex-row items-center  justify-between py-4 px-10  ">

			
				<div>
					Recon
				</div>
				<Button variant="outline" className="text-white"   onClick={() => {
					window.location.href =  "https://x.com/"  // or "https://www.linkedin.com/"; 
				}} >
					Scrape
				</Button>
				</div>

			</div>
		</>
	)
}

export default Header