"use client";

import {
	ChevronRightIcon,
	DocumentIcon,
	FolderIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export type Node = {
	name: string;
	nodes?: Node[];
};

export default function FileSystemItem({ folder }: { folder: Node }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<li className="my-1.5">
			<span className="flex items-center gap-1.5">
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					{folder.nodes && folder.nodes.length > 0 ? (
						<ChevronRightIcon
							className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
						/>
					) : null}
				</button>

				{folder.nodes ? (
					<FolderIcon
						className={`size-6 text-sky-500 ${folder.nodes.length === 0 ? "ml-[17px]" : ""}`}
					/>
				) : (
					<DocumentIcon className="size-6 ml-[17px] text-gray-500" />
				)}
				{folder.name}
			</span>

			{isOpen ? (
				<ul className="pl-6">
					{folder.nodes?.map((subNode) => (
						<FileSystemItem key={subNode.name} folder={subNode} />
					))}
				</ul>
			) : null}
		</li>
	);
}
