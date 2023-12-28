
import { Label, Radio } from 'flowbite-react';
import { nanoid } from 'nanoid';
type RadioType = {
    legend: string,
    fields: any
}

export default function RadioComp({ fields, legend }: RadioType) {
    return (
        <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="mb-4">{legend}</legend>
            {fields?.map(field => (
                <div key={nanoid()} className="flex items-center gap-2">
                    <Radio id={field} name="countries" value={field} defaultChecked />
                    <Label htmlFor={field}>{field}</Label>
                </div>
            ))}

        </fieldset>
    );
}
