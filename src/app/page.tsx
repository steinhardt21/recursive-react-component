import FileSystemItem from "@/components/file-system-item";
import type { Node } from "@/components/file-system-item";

const nodes: Node[] = [
	{
		name: "Home",
		nodes: [
			{
				name: "Movies",
				nodes: [
					{
						name: "Action",
						nodes: [
							{ name: "2000s", nodes: [{ name: "Popular" }] },
							{ name: "2010s", nodes: [] },
						],
					},
					{ name: "Comedy", nodes: [{ name: "Popular" }] },
				],
			},
			{ name: "Music", nodes: [] },
			{ name: "Picture", nodes: [] },
			{ name: "Documents", nodes: [] },
			{ name: "Stefanel", nodes: [] },
			{
				name: "password.txt",
			},
		],
	},
];

export default function Home() {
	return (
		<div className="p-8 max-w-sm mx-auto">
			<ul>
				{nodes.map((folder) => (
					<FileSystemItem key={folder.name} folder={folder} />
				))}
			</ul>
		</div>
	);
}
