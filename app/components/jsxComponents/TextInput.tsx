type TextInputType = {
    placeholder: string
}

export default function TextInput({ placeholder }: TextInputType) {
    return (
        <>

            <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs rounded-lg" />
        </>
    )
}
