'use client'
import { Dropdown, DropdownItem } from 'flowbite-react';
type DropdownType = {
    title: string
    children: string[]
}
export default function DropdownComp({ title, children }: DropdownType) {
    return (
        <Dropdown label={title} dismissOnClick={false}>
            {children?.map(item => (
                <DropdownItem>{item}</DropdownItem>
            ))}
        </Dropdown >
    );
}
