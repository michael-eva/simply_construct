import { Label, Select } from 'flowbite-react';
import { nanoid } from 'nanoid';

type SelectTpe = {
    label: string,
    children: string[]
}

export default function SelectComp({ label, children }: SelectTpe) {
    return (
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label htmlFor="countries" value={label} />
            </div>
            <Select id="countries" required>
                {children.map(item => (
                    <option key={nanoid()} value={item}>{item}</option>
                ))}
            </Select>
        </div>
    );
}