import SelectComp from "@/app/components/jsxComponents/Select";
import { soilTypes } from "@/app/database/data";
import CheckboxComp from "@/app/components/jsxComponents/Checkbox";
import FileInputComp from "@/app/components/jsxComponents/FileInput";
import TextInput from "@/app/components/jsxComponents/TextInput";
import RadioComp from "@/app/components/jsxComponents/Radio";

const radioFields = ["China", "USA", "Bangladesh"]

export default function Page() {
    return (

        <>
            <div className=" text-xl my-4">Select:</div>
            <SelectComp label="Select Component">
                {soilTypes}
            </SelectComp>
            <div className="my-6 h-1 bg-gray-400 dark:bg-gray-600"></div>

            <div className=" text-xl my-4">CheckBoxes:</div>

            <div className="my-4">
                <CheckboxComp label="Has Doors" />
            </div>
            <CheckboxComp label="Has Windows" >
                <span className="text-xs font-normal">
                    Give extra information <span className="font-bold italic">about this checkbox</span>
                </span></CheckboxComp>

            <div className="my-6 h-1 bg-gray-400 dark:bg-gray-600"></div>

            <div className=" text-xl my-4">Inputs:</div>
            <FileInputComp label="Choose File" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
            <div className="mt-4">
                <TextInput placeholder="Type text here" />
            </div>
            <div className="my-6 h-1 bg-gray-400 dark:bg-gray-600"></div>

            <div className=" text-xl my-4">Radio:</div>
            <RadioComp fields={radioFields} legend="Choose your fav country:" />

        </>
    )
}
