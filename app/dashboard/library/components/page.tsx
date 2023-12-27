import DropdownComp from "@/app/components/jsxComponents/dropdown";
import { soilTypes } from "@/app/database/data";


export default function Page() {
    return (
        <DropdownComp title="Dropdown Button">
            {soilTypes}
        </DropdownComp>
    )
}
