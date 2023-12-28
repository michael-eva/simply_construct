

import { FileInput, Label } from 'flowbite-react';
type FileInputType = {
    label: string,
    helperText: string
}
export default function FileInputComp({ label, helperText }: FileInputType) {
    return (
        <div>
            <div>
                <Label htmlFor="file-upload-helper-text" value={label} />
            </div>
            <FileInput id="file-upload-helper-text" helperText={helperText} />
        </div>
    );
}
