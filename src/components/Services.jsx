import React from "react";

const services = [
	{
		title: "Plumbing Repairs",
		description:
			"From annoying drips to major pipe failures, our plumbing repair experts provide fast and effective solutions to keep your home or business running smoothly.",
		image:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Drain Cleaning",
		description:
			"Clogged drains can cause serious issues. Our professional drain cleaning services ensure your plumbing system remains free of blockages, preventing costly damage.",
		image:
			"https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Water Heaters",
		description:
			"Dependable hot water is essential—whether you need water heater repair, maintenance, or a full replacement, we provide efficient plumbing services to keep your home comfortable.",
		image:
			"https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Plumbing Installations",
		description:
			"From fixture upgrades to complete plumbing system installations, our certified plumbers ensure every installation is done with precision and care.",
		image:
			"https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Leak Detection",
		description:
			"Using advanced plumbing technology, we accurately identify hidden leaks before they cause water damage, helping you avoid unnecessary repair costs.",
		image:
			"https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Kitchen & Bath",
		description:
			"Transform your kitchen and bathroom with expert plumbing installations and upgrades. Whether it's a sink, faucet, shower, or full remodel, our plumbing services enhance both function and style.",
		image:
			"https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
	},
];

const Services = () => {
	return (
		<section className="py-8 px-2 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold text-[#02444d] text-center mb-2">
					Our Services
				</h2>
				<p className="text-xl font-semibold text-[#02444d] text-center mb-4">
					How Our Professional Plumbers Can Help!
				</p>
				<a
					href="tel:720-757-6776"
					className="mb-10 inline-block bg-[#00aac2] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-[#067a89] transition-all duration-200"
					style={{
						boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)",
					}}
				>
					CALL NOW! | 720-757-6776
				</a>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-xl border-2 border-[#00aac2] flex flex-col items-center p-6"
						>
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-44 object-cover rounded-lg mb-4"
							/>
							<h3 className="text-2xl font-bold text-[#06818e] text-center mb-2">
								{service.title}
							</h3>
							<p className="text-gray-700 text-center mb-6 text-base">
								{service.description}
							</p>
							<a
								href="tel:720-757-6776"
								className="bg-[#00aac2] text-white font-bold py-2 px-6 rounded-full text-lg shadow-md transition-all duration-200 hover:scale-105 border-2 border-[#067a89] mx-auto flex items-center justify-center"
								style={{ boxShadow: "0 4px 12px 0 rgba(0,0,0,0.15)" }}
							>
								720-757-6776
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
