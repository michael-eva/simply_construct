
import { Checkbox, Label } from 'flowbite-react';

type CheckboxType = {
    label: string,
    children?: any
}

export default function CheckboxComp({ label, children }: CheckboxType) {
    return (

        <div className="flex gap-2">
            <div className="flex h-5 items-center">
                <Checkbox id="shipping" />
            </div>
            <div className="flex flex-col">
                <Label htmlFor="shipping">{label}</Label>
                <div className="text-gray-500 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>

    );
}
