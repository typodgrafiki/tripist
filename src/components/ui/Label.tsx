export default function Label({
    name,
    htmlFor,
}: {
    name: string
    htmlFor: string
}) {
    return (
        <label
            htmlFor={htmlFor}
            className="block mb-2 font-medium"
        >
            {name}
        </label>
    )
}
