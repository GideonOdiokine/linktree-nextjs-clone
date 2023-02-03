import Image from "next/image";
import data from "../data.json";

function LinkCard({
	href,
	title,
	image,
}: {
	href: string;
	title: string;
	image?: string;
}) {
	return (
		<a
			href={href}
			className='flex items-center p-4 rounded-md  transition-all  bg-gray-100 mb-3 w-full  max-w-3xl '>
			<Image alt={title} src={image!} width={40} height={40} />
			<div className='flex justify-center w-full'>
				<h3 className='font-semibold text-center text-gray-700 -ml-10'>
					{title}
				</h3>
			</div>
		</a>
	);
}

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center mt-16  px-8'>
			<Image
				alt={data.name}
				className='rounded-full'
				src={data.avatar}
				width={96}
				height={96}
			/>
			<h1 className='font-bold mt-4 text-xl mb-8'>{data.name}</h1>
			{data.links.map((link) => (
				<LinkCard key={link.title} {...link} />
			))}
		</div>
	);
}
